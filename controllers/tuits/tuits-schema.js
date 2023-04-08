import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    disliked: Boolean,
    handle: String,
    image: String,
    replies: Number,
    retuits: Number,
    time: String,
    username: String

}, {collection: 'tuits'});
export default schema;