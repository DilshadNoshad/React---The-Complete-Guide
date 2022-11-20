import { MongoClient } from "mongodb";
import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

// const dummyData = [
//   {
//     id: "p1",
//     title: "First Meetup, New York City is itself a detective story.",
//     image:
//       "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-688899881-1519413300.jpg",
//     address: "New York City, USA",
//     discription: "Meetup plane and topic what we gonna talk about...",
//   },
//   {
//     id: "p2",
//     title:
//       "Second Meetup, This Portuguese archipelago can inspire wanderlust with a single photo.",
//     image:
//       "https://media.cntraveler.com/photos/60595e75c685cfec854722a8/master/w_1600%2Cc_limit/Azores-GettyImages-1183442594.jpg",
//     address: "The Azores, Portugal",
//     discription: "Meetup plane and topic what we gonna talk about...",
//   },
// ];
function HomePage(props) {
  // const [loadedMeetup, setloadedMeetup] = useState([]);
  // useEffect(() => {
  //   setloadedMeetup(dummyData);
  // }, []);
  return (
    <Fragment>
      <Head>
        <title>Next Js | Meetups</title>
        <meta
          name="description"
          content="Manage Your Meetups with highly active app!."
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: dummyData,
//     },
//   };
// }

export async function getStaticProps() {
  // fetching data from
  const client = await MongoClient.connect(
    "mongodb://Dilshad:m4APEGd91JGZcfE1@react-node-project-shard-00-02.xya51.mongodb.net:27017/Meetups?authSource=admin&replicaSet=atlas-10e004-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
