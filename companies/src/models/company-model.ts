import mongoose from "mongoose";

interface CompanyAttrs {
    id: string;
    name: string;
    email: string;
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
}

interface CompanyDoc extends mongoose.Document {
    name: string;
    email: string;
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
    createdAt : string;
    createdBy: string;
    updatedAt : string;
    updatedBy: string;

}

interface CompanyModel extends mongoose.Model<CompanyDoc> {
    build(attrs: CompanyAttrs): CompanyDoc;
}

const companySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
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

companySchema.statics.build = (attrs: CompanyAttrs) => {
    return new Company(attrs);
};

const Company = mongoose.model<CompanyDoc, CompanyModel>('Company', companySchema);

export { Company };