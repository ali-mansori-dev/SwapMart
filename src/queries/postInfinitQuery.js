
import { useInfiniteQuery } from "react-query";
import Supabase from "../lib/helper/ClientSupabase";

const PAGE_SIZE = 9;

const fetchItems = async ({ pageParam = 0 }) => {
  const { data, error } = await Supabase
    .from("sw_posts")
    .select("*")
    .order("created_at", { ascending: false })
    .range(pageParam, pageParam + PAGE_SIZE - 1);

  if (error) throw new Error(error.message);

  return { data, nextPage: data.length ? pageParam + PAGE_SIZE : null };
};

export function useInfiniteItems() {
  return useInfiniteQuery({
    queryKey: ["items"],
    queryFn: fetchItems,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined
  });
}
