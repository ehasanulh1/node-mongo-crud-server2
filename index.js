const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// username: client02
// password: sUM249tvB1zMxggA

const uri = "mongodb+srv://client02:sUM249tvB1zMxggA@cluster0.m8kuhin.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {

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