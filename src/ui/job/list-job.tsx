// import Image from "next/image";
// import Link from "next/link";
// import Tag from "../tag";
// import { calculateDaysAgo, formatCurrency } from "@/lib/helper";

export default function ListJobs() {
  return (
    // <div className="container">
    //   <div className="py-2 font-semibold">
    //     Tìm thấy{" "}
    //     <span className="font-bold text-primary"> {filterData.length} </span>{" "}
    //     công việc phù hợp với bạn{" "}
    //     <span className="font-bold text-primary">{techQuery}</span>
    //   </div>
    //   <div className="flex items-center space-x-4">
    //     <h1 className="text-gray-500">Ưu tiên hiển thị:</h1>
    //     <div className="flex items-center space-x-1">
    //       <input
    //         type="radio"
    //         id="new"
    //         checked={newest}
    //         onClick={() => setNewest(!newest)}
    //         onChange={() => {}}
    //       />
    //       <label htmlFor="new">Tin mới nhất</label>
    //     </div>
    //     <div className="flex items-center space-x-1">
    //       <input
    //         type="radio"
    //         id="salary"
    //         checked={highestSalary}
    //         onClick={() => setHighestSalary(!highestSalary)}
    //         onChange={() => {}}
    //       />
    //       <label htmlFor="salary">Lương cao nhất</label>
    //     </div>
    //   </div>

    //   <div className="grid grid-cols-1 gap-4 py-4 xl:grid-cols-3">
    //     <div className="space-y-4 xl:col-span-2">
    //       {loading ? (
    //         <div className="flex justify-center">
    //           <RingLoader color="#33afa9" loading={loading} size={50} />
    //         </div>
    //       ) : (
    //         filterData.map((jobData) => (
    //           <div
    //             key={jobData._id}
    //             className="flex h-48 space-x-2 rounded-xl bg-white hover:bg-teal-100"
    //           >
    //             <div className="h-2/3 w-1/4">
    //               <Image
    //                 src={`/img-company/${jobData.company.logo}`}
    //                 title={jobData.company.name}
    //                 alt=""
    //                 width={100}
    //                 height={100}
    //                 className="h-full w-full rounded-xl object-contain p-2"
    //               />
    //             </div>
    //             <div className="w-3/4 space-y-1 overflow-hidden py-2">
    //               <Link
    //                 href={`/viec-lam-it/${jobData._id}`}
    //                 title={jobData.job_title}
    //                 className="line-clamp-1 font-bold hover:text-primary"
    //               >
    //                 {jobData.job_title}
    //               </Link>
    //               <Link href={`/cong-ty-IT/${jobData.company._id}`}>
    //                 <h4
    //                   title={jobData.company.name}
    //                   className="line-clamp-1 font-semibold text-[#666] hover:text-[#aaa]"
    //                 >
    //                   {jobData.company.name}
    //                 </h4>
    //               </Link>
    //               <div className="flex items-center space-x-1 overflow-hidden whitespace-nowrap">
    //                 <span className="text-red-600">
    //                   {jobData.min_salary == null
    //                     ? "Lên tới "
    //                     : formatCurrency(jobData.min_salary) + " - "}{" "}
    //                 </span>
    //                 <span className="text-red-600">
    //                   {formatCurrency(jobData.max_salary)}
    //                 </span>
    //               </div>
    //               <div>
    //                 {jobData.location} - {jobData.job_type}
    //               </div>
    //               <hr />
    //               <div className="space-y-2 py-2 md:flex md:items-center md:justify-between">
    //                 <div className="flex justify-start space-x-3 overflow-hidden whitespace-nowrap">
    //                   {jobData.tech_stack.map((tag: string, index: number) => (
    //                     <Tag key={index} name={tag} />
    //                   ))}
    //                 </div>
    //                 <div className="mr-2 text-end text-sm">
    //                   Đăng {calculateDaysAgo(jobData.time_created)}
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ))
    //       )}
    //     </div>
    //     <div className="">
    //       <div className="items-center bg-primary py-2 text-center text-xl font-bold text-white">
    //         Việc làm nổi bật
    //       </div>
    //       <JobCard jobsList={HighlightJobs} />
    //     </div>
    //   </div>
    // </div>
    <div>list jobs</div>
  );
}
