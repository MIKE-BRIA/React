import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://brianmichaeladero:sundugweno@cluster0.powmdfg.mongodb.net/?retryWrites=true&w=majority&appName=Meetups"
    );
    const db = client.db();

    try {
      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }

    client.close();

    res.status(201).json({ message: "success in data insertion" });
  }
}

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://brianmichaeladero:sundugweno@cluster0.powmdfg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
