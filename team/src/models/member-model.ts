import mongoose from "mongoose";

interface MemberAttrs {
    id: string;
    name: string;
    phone?: string[];
    address?: string[];
    zip?: string;
    city?: string;
    state?: string;
    ico?: string;
    dic?: string;
    account?: string;
    iban?: string;
    bic?: string;
    company: string;
    status: number;
    isActive: boolean;
}

interface MemberDoc extends mongoose.Document {
    name: string;
    phone: string[];
    address: string[];
    zip: string;
    city : string;
    state : string;
    ico: string;
    dic: string;
    account: string;
    iban: string;
    bic: string;
    company: string;
    status: number;
    createdAt : string;
    createdBy: string;
    updatedAt : string;
    updatedBy: string;
    isActive: boolean;
}

interface MemberModel extends mongoose.Model<MemberDoc> {
    build(attrs: MemberAttrs): MemberDoc;
}

const memberSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: [String]
        },
        address: {
            type: [String]
        },
        zip: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        ico: {
            type: String,
        },
        dic: {
            type: String,
        },
        account: {
            type: String,
        },
        iban: {
            type: String,
        },
        bic: {
            type: String,
        },
        company: {
            type: String,
        },
        status: {
            type: Number,
            default: 0,
        },
        isActive: {
            type: Boolean,
            default: true
        },
        createdAt: {
            type: Date
        },
        createdBy: {
            type: String
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
        updatedBy: {
            type: String
        }

    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            },
        },
    }
);

memberSchema.statics.build = (attrs: MemberAttrs) => {
    return new Member(attrs);
};

const Member = mongoose.model<MemberDoc, MemberModel>('Member', memberSchema);

export { Member };