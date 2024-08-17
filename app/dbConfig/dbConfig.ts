import mongoose from "mongoose";


export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        //connect it 
        const connection = mongoose.connection;

        connection.on('connected' , () => {
            console.log('MongoDB connected successfully');
        })
        
        connection.on('error', (err) => {
            console.log('Mongo DB error' + err);
            process.exit(); 
        })
    } catch (error) {
        console.log(error);
    }
}