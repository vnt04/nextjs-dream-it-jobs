import { Company } from "@/models/company";
import { Job } from "@/models/job";
import ConnectDB from "./connectDB";

await ConnectDB();

// data about jobs
export async function fetchJobs() {
  try {
    const jobs = await Job.find()
      .populate("company")
      .sort({ time_created: -1 })
      .limit(9);
    return jobs;
  } catch (error) {
    console.log("Error in fetching jobs:", error);
    throw new Error("Failed to fetch jobs data");
  }
}

// data about companies
export async function fetchCompanies() {
  try {
    const companies = await Company.find();
    return companies;
  } catch (error) {
    console.log("Error in fetching companies:", error);
    throw new Error("Failed to fetch companies data");
  }
}

export async function fetchMostFollowCompany() {
  try {
    const mostFollow = await Company.find().sort({ follow: -1 }).limit(9);
    return mostFollow;
  } catch (error) {
    console.log(error);
  }
}
