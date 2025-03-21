import mongoose, { InferSchemaType } from "mongoose";

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mst: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
  },
  banner: {
    type: String,
  },
  model: {
    type: String,
  },
  scale: {
    type: Number,
    default: 1,
  },
  work_time: {
    type: String,
  },
  over_time: {
    type: String,
  },
  tech_stack: [String],
  address: [String],
  location: [String],
  field: {
    type: String,
  },
  follow: {
    type: Number,
    required: true,
    default: 0,
  },
  description: {
    type: String,
  },
  benefit: {
    type: String,
  },
  website: {
    type: String,
  },
  nation: {
    type: String,
  },
  review_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review",
  },
});

export type CompanyType = InferSchemaType<typeof companySchema>;

export const Company =
  mongoose.models.Company || mongoose.model("Company", companySchema);
