import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb://Dilshad:m4APEGd91JGZcfE1@react-node-project-shard-00-02.xya51.mongodb.net:27017/Meetups?authSource=admin&replicaSet=atlas-10e004-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
