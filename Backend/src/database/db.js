import mongoose from 'mongoose';

const connectDB = async () => {

    try {

        await mongoose.connect(
          'mongodb://RosaWhite_db_user:K2dHcKOGn9YVXnb3@ac-v0fvtex-shard-00-00.arpqkgq.mongodb.net:27017,ac-v0fvtex-shard-00-01.arpqkgq.mongodb.net:27017,ac-v0fvtex-shard-00-02.arpqkgq.mongodb.net:27017/RosaWhite_db_user?ssl=true&replicaSet=atlas-64nnwc-shard-0&authSource=admin&appName=Cluster0'
        );

        console.log("Connected to MongoDB");

    } catch (error) {

        console.error("Error connecting to MongoDB:", error);

    }

};

export default connectDB;