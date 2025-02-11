import { useState, useEffect } from "react";
import Supabase from "../../lib/helper/ClientSupabase";

export function useChildCategories(parentSlug) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      if (!parentSlug) return;

      setLoading(true);
      setError(null);

      try {
        const { data: parentCategory, error: parentError } = await Supabase
          .from("sw_category")
          .select("id")
          .eq("slug", parentSlug)
          .single();

        if (parentError || !parentCategory) {
          throw new Error("دسته‌بندی پدر یافت نشد");
        }

        const parentId = parentCategory.id;

        const { data: childCategories, error: childError } = await Supabase
          .from("sw_category")
          .select("*")
          .eq("parent", parentId);

        if (childError) {
          throw new Error("خطا در دریافت دسته‌های فرزند");
        }

        setData(childCategories);
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
