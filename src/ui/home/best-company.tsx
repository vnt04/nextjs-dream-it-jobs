import Image from "next/image";
import { CiBookmark } from "react-icons/ci";
import { FaSun } from "react-icons/fa6";
import Tag from "../tag";
import { fetchMostFollowCompany } from "@/lib/data";

export default async function BestCompany() {
  const mostFollow = await fetchMostFollowCompany();
  return (
    <div className="container">
      <div className="flex justify-between py-4">
        <div className="flex items-center space-x-1">
          <FaSun className="size-6 text-yellow-400 md:size-8" />
          <h1 className="font-bold md:text-xl">Top công ty </h1>
          <h1 className="font-bold text-red-600 md:text-xl">hàng đầu</h1>
        </div>
        <a
          href={"/cong-ty-IT"}
          className="text-sm font-semibold text-red-400 underline hover:text-red-600 md:text-base"
        >
          Xem tất cả
        </a>
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-5">
        {mostFollow?.map((data, index) => (
          <div
            key={index}
            className="h-64 space-y-2 rounded-xl border-[2px] bg-white p-4"
          >
            <div className="flex h-32 w-full">
              <a href={`/cong-ty-IT/${data._id}`} className="w-full">
                <Image
                  src={`/img-company/${data.logo}`}
                  width={100}
                  height={100}
                  alt=""
                  className="h-full w-full object-contain p-4"
                />
              </a>
              <CiBookmark
                className="size-8 cursor-pointer hover:text-red-500"
                title="Follow công ty này"
                // onClick={handleFollowCompany}
              />
            </div>
            <a
              href={`/cong-ty-IT/${data._id}`}
              className="line-clamp-1 text-[18px] font-bold"
            >
              {data.name}
            </a>
            <div className="line-clamp-1">{data.location.join(" - ")}</div>
            <div className="flex justify-start space-x-2 overflow-hidden whitespace-nowrap">
              {data.tech_stack.map((tech: string, index: number) => (
                <Tag key={index} name={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
