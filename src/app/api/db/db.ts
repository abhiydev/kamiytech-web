import mongoose from 'mongoose';

const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
    throw new Error('MONGODB_URI is not defined in the environment variables');
}

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

export default connectDB;
