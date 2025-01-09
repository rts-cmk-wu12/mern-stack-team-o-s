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
    const postName = postData.map(post => { 
        return { 
            id: post._id,
            title: post.title, 
            content: post.content, 
            author: post.author 
        } 
        
    })
    response.json(postName)
});

ViteExpress.listen(server, 3000, async () => console.log("Server is running at http://localhost:3000"));

server.use(express.json());

server.post("/api/posts", async (req, res) => {
    try {
        const newPost = await posts.insertOne(req.body);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: "Error creating post" });
    }
});

server.delete("/api/posts/:_id", async (req, res) => {
    try {
        const result = await posts.deleteOne({ id: new Object_id(req.params.id) });
        if (result.deletedCount === 1) {
            res.status(200).json({ message: "Post deleted successfully" });
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting post" });
    }
});