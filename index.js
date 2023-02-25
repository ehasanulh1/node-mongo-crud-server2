const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// username: client02
// password: ZWEhmaWGUiOHPxrQ

const uri = "mongodb+srv://client02:ZWEhmaWGUiOHPxrQ@cluster0.w1kojzp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const userCollection = client.db('nodeMongoCRUD02').collection('user');

        app.post('/users', (req, res) => {
            const user = req.body;
            console.log(user)
        })

        const result = await userCollection.insertOne(user)
        console.log(result)
    }
    finally {

    }
}
run().catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send('Hello from node mongo server');
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})