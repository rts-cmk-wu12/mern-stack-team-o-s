import express from 'express'
import { MongoClient } from 'mongodb';
import ViteExpress from 'vite-express'

const CONNECTION_STRING = 'mongodb+srv://u2422922:TcudGexIwcnnoMUg@blogthings.glk3l.mongodb.net/?retryWrites=true&w=majority&appName=BlogThings'

const client = new MongoClient(CONNECTION_STRING);
const database = client.db('blog');
const posts = database.collection('posts');

const server = express();

server.get("/message", (_, res) => res.send("Hello from express!"));

server.get("/api/posts", async (_, response,) => {
    const posts = database.collection('posts');
    const postData = await posts.find().toArray()
    const postName = postData.map(post => { return { title: post.title, content: post.content, author: post.author } })
    response.json(postName)
});

ViteExpress.listen(server, 3000, async () => console.log("Server is running at http://localhost:3000"));

server.use(express.json());

server.post("/api/posts", async (req, res) => {
    const newPost = await posts.insertOne(req.body);
    res.status(201).json(newPost);
});