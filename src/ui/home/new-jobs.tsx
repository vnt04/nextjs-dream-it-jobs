import { fetchJobs } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { BsFire } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { PiMoneyWavy } from "react-icons/pi";
import Tag from "../common/tag";
import { CiHeart } from "react-icons/ci";
import { calculateDaysAgo, formatCurrency } from "@/lib/helper";

export default async function NewJobs() {
  const newJobs = await fetchJobs();

  return (
    <div className="container">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <BsFire className="size-6 text-red-500 md:size-8" />
          <h1 className="font-bold md:text-xl">Công việc </h1>
          <h1 className="font-bold text-red-600 md:text-xl"> mới nhất</h1>
        </div>
        <a
          href={"/viec-lam-IT"}
          className="text-sm font-semibold text-red-400 underline hover:text-red-600 md:text-base"
        >
          Xem tất cả
        </a>
      </div>

      {/* List new jobs */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-5 xl:grid-cols-3">
        {newJobs?.map((job, index) => (
          <div key={index} className="h-44 w-full rounded-xl border-[2px] p-2">
            <div className="flex h-2/3 w-full space-x-2">
              <a className="w-1/3" href={`/companies/${job.company._id}`}>
                <Image
                  src={`/img-company/${job.company.logo}`}
                  width={100}
                  height={100}
                  alt={job.company.name}
                  title={job.company.name}
                  className="h-full w-full object-contain"
                />
              </a>
              <div className="w-2/3 space-y-1 overflow-hidden">
                <a
                  href={`/jobs/${job._id}`}
                  title={job.job_title}
                  className="line-clamp-1 font-bold hover:text-primary"
                >
                  {job.job_title}
                </a>
                <Link href={`/cong-ty-IT/${job.company._id}`}>
                  <h4
                    title={job.company.name}
                    className="line-clamp-1 font-semibold text-[#666] hover:text-[#aaa]"
                  >
                    {job.company.name}
                  </h4>
                </Link>
                <div className="flex items-center space-x-1 overflow-hidden whitespace-nowrap">
                  <PiMoneyWavy className="size-5" />
                  <span className="text-red-600">
                    {job.min_salary == null
                      ? "Lên tới "
                      : formatCurrency(job.min_salary) + " - "}{" "}
                  </span>
                  <span className="text-red-600">
                    {formatCurrency(job.max_salary)}
                  </span>
                </div>
                <h4 className="line-clamp-1 flex items-center space-x-2 text-[#666]">
                  <IoLocation className="size-4" />
                  {job.location}
                </h4>
              </div>
            </div>
            <hr />
            <div className="h-1/3 space-y-1 py-2">
              <div className="flex justify-start space-x-3 overflow-hidden whitespace-nowrap">
                {job.tech_stack.map((tag: string, index: number) => (
                  <Tag key={index} name={tag} />
                ))}
              </div>
              <div className="flex items-center justify-end gap-2 px-2 text-sm text-[#555]">
                {calculateDaysAgo(job.time_created)}
                <CiHeart
                  className="size-6 cursor-pointer hover:text-red-500"
                  title="Lưu công việc này"
                  // onClick={handleSaveJob}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
