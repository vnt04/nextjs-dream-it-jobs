"use client";
import { FaSearch } from "react-icons/fa";
import Dropdown from "../common/drop-down";
import {
  contractTypeOptions,
  jobTypeOptions,
  levelOptions,
  locationOption,
} from "@/utils/ui-data";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // params input search
  const setSearchParams = useDebouncedCallback((inputValue: string) => {
    const params = new URLSearchParams(searchParams);
    if (inputValue) {
      params.set("tech", inputValue);
    } else {
      params.delete("tech");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 0);

  // update filter params
  const setFilterParams = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSearch = () => {
    // call server function to search
    const input = document.getElementById("input") as HTMLInputElement;
    setSearchParams(input.value);
  };

  function handleDeleteFilter() {
    const params = new URLSearchParams(searchParams);
    params.delete("tech");
    params.delete("location");
    params.delete("level");
    params.delete("jobType");
    params.delete("contractType");
    replace(`${pathname}`);
  }

  return (
    <div className="container space-y-2 md:space-y-3">
      <div className="mt-8 flex h-14 items-center space-x-2 rounded-md border-[2px] border-primary bg-white px-2 lg:px-4">
        <div className="flex-1">
          <input
            placeholder="Tìm kiếm theo Kỹ năng, Vị trí công việc..."
            id="input"
            // onChange={(e) => {
            //   setSearchParams(e.target.value);
            // }}
            defaultValue={searchParams.get("tech")?.toString() || ""}
            className="w-full outline-none"
          />
        </div>
        <button onClick={handleSearch} className="btn-1">
          <div className="flex items-center space-x-1">
            <FaSearch />
            <span className="hidden md:block">Tìm kiếm</span>
          </div>
        </button>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-2 text-sm md:gap-3 md:text-base xl:grid-cols-5">
        <Dropdown
          type="single"
          label="Tất cả địa điểm"
          options={locationOption}
          selectedValue={searchParams.get("location")?.toString() || ""}
          onSelect={(value) => setFilterParams("location", value)}
        />
        <Dropdown
          type="single"
          label="Tất cả cấp bậc"
          options={levelOptions}
          selectedValue={searchParams.get("level")?.toString() || ""}
          onSelect={(value) => setFilterParams("level", value)}
        />
        <Dropdown
          type="multi"
          label="Tất cả loại công việc"
          options={jobTypeOptions}
          selectedValue={searchParams.get("jobType")?.toString() || ""}
          onSelect={(value) => setFilterParams("jobType", value)}
        />
        <Dropdown
          type="multi"
          label="Tất cả loại hợp đồng"
          options={contractTypeOptions}
          selectedValue={searchParams.get("contractType")?.toString() || ""}
          onSelect={(value) => setFilterParams("contractType", value)}
        />

        <button
          onClick={handleDeleteFilter}
          className="mb-4 flex h-10 cursor-pointer items-center justify-center gap-2 rounded-sm bg-[#c2c2c2] font-bold text-red-500 hover:bg-gray-300 max-xl:col-span-2 lg:mb-8"
        >
          <FaFilterCircleXmark />
          <span>Xóa bộ lọc</span>
        </button>
      </div>
    </div>
  );
}
