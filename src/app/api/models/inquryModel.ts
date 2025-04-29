import mongoose, { Schema, Document } from 'mongoose';

export interface Inquiry extends Document {
    name: string;
    contactNumber?: string;
    email: string;
    message: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const InquirySchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        contactNumber: { type: String, required: false },
        email: { type: String, required: true },
        message: { type: String, required: true },
    },
    { timestamps: true }
);

const Inquiry = mongoose.model<Inquiry>('Inquiry', InquirySchema);
export default Inquiry