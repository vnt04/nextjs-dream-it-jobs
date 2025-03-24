import { Company } from "@/models/company";
import { Job } from "@/models/job";
import ConnectDB from "./connectDB";
import { SearchParams } from "./definition";

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
type FilterSearch = {
  tech_stack?: RegExp;
  location?: RegExp;
  level?: RegExp;
  job_type?: { $in: { $regex: string; $options: string }[] };
  contractType?: { $in: { $regex: string; $options: string }[] };
};
export async function fetchJobsResult(searchParams: SearchParams) {
  const { tech, location, level, jobType, contractType } = searchParams;
  const filter: FilterSearch = {};

  if (tech) {
    filter.tech_stack = new RegExp(tech, "i");
  }

  if (jobType) {
    const jobTypeList = jobType.split(",");
    if (jobTypeList.length > 0) {
      filter.job_type = {
        $in: jobTypeList.map((jt) => ({ $regex: `^${jt}$`, $options: "i" })),
      };
    }
  }

  if (contractType) {
    const contractTypeList = contractType.split(",");
    if (contractTypeList.length > 0) {
      filter.contractType = {
        $in: contractTypeList.map((ct) => ({
          $regex: `^${ct}$`,
          $options: "i",
        })),
      };
    }
  }

  if (location && location !== "Tất cả địa điểm") {
    filter.location = new RegExp(location, "i");
  }

  if (level && level !== "Tất cả cấp bậc") {
    filter.level = new RegExp(level, "i");
  }
  try {
    const results = await Job.find(filter).populate("company");
    return results;
  } catch (error) {
    console.log("Error in fetching jobs:", error);
    // throw new Error("Failed to fetch jobs data");
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
