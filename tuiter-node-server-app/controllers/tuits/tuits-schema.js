import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    tuit: String,
    topic: String,
    username: String,
    handle: String,
    time: String,
    image: String,
    title: String,
    likes: Number,
    liked: Boolean,
    replies: Number,
    retuits: Number,
}, {collection: "tuits"});
export default schema;