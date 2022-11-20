import { MongoClient, ObjectId } from "mongodb";
import React, { Fragment } from "react";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.desc} />
      </Head>
      <MeetupDetail
        title={props.meetupData.title}
        img={props.meetupData.img}
        address={props.meetupData.address}
        desc={props.meetupData.desc}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb://Dilshad:m4APEGd91JGZcfE1@react-node-project-shard-00-02.xya51.mongodb.net:27017/Meetups?authSource=admin&replicaSet=atlas-10e004-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetupIds = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetupIds.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb://Dilshad:m4APEGd91JGZcfE1@react-node-project-shard-00-02.xya51.mongodb.net:27017/Meetups?authSource=admin&replicaSet=atlas-10e004-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        img: selectedMeetup.image,
        address: selectedMeetup.address,
        desc: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
