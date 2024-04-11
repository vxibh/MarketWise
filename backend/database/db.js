import mongoose from "mongoose";

const connectDatabase = () => {
    mongoose.connect(process.env.MongoUrl)
    .then((con) => console.log(`Database is connected : ${con.connection.host}`))
    .catch((error) => console.log(error));
}

export default connectDatabase;