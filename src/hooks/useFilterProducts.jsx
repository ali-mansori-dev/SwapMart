import { useState, useEffect, useRef } from "react";
import Supabase from "../lib/helper/ClientSupabase";
import { useInfiniteItems } from "../queries/postInfinitQuery";

function useFilterProducts(parentSlug) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    async function fetchCategories() {
      setLoading(true);
      setError(null);

      if (parentSlug === "all" || !parentSlug) {
        try {
          const {
            isLoading,
            data,
            hasNextPage,
            fetchNextPage,
            isFetchingNextPage,
          } = useInfiniteItems();

          const observer = useRef();

          if (childError) {
            throw new Error("products Not Found");
          }

          setData(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
        return { data, loading, error };
      }

      try {
        const { data: category, error: parentError } = await Supabase.from(
          "sw_category"
        )
          .select("id")
          .eq("slug", parentSlug)
          .single();

        if (parentError || !category) {
          throw new Error("Parent Not Found");
        }

        const categoryId = category.id;

        const { data, error: childError } = await Supabase.from("sw_products")
          .select("*")
          .eq("category_id", categoryId);

        if (childError) {
          throw new Error("products Not Found");
        }

        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, [parentSlug]);

  return { data, loading, error };
}
export default useFilterProducts;
