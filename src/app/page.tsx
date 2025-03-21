import BestCompany from "@/ui/home/best-company";
import NewJobs from "@/ui/home/new-jobs";
import QuickSearch from "@/ui/home/quick-search";

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="bg-[#acf2ed]">
        <QuickSearch />
      </div>
      <div className="bg-white">
        <NewJobs />
      </div>
      <div className="bg-[#f5f5f5] py-4">
        <BestCompany />
      </div>
      <div className="space-y-4 pb-10">
        <div className="container flex items-center justify-between">
          <h1 className="font-bold md:text-xl">Blog IT</h1>
          <a
            href={"/blog"}
            className="text-sm font-semibold text-red-400 underline hover:text-red-600 md:text-base"
          >
            Xem tất cả
          </a>
        </div>
        {/* <NewBlogs data={newBlogs} /> */}
      </div>
    </div>
  );
}
