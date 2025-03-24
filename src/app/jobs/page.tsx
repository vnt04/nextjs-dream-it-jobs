import { SearchParams } from "@/lib/definition";
import ListJobs from "@/ui/job/list-job";
import Search from "@/ui/job/search";

export default async function Jobs(props: {
  searchParams?: Promise<SearchParams>;
}) {
  const searchParams = await props.searchParams;

  return (
    <div>
      <Search />
      <div className="bg-[#f5f5f5]">
        <ListJobs searchParams={searchParams} />
      </div>
    </div>
  );
}
