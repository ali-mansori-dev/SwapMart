import { useQuery } from "react-query";
import Supabase from "../../lib/helper/ClientSupabase";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";
import icons from "../../shared/icons.js";

const CategorySection = () => {
  const fetchItems = async () => {
    const { data, error } = await Supabase.from("sw_category")
      .select("*")
      .is("parent", null);

    if (error) throw new Error(error.message);

    return data;
  };

  const { data, isLoading } = useQuery("parent_category", fetchItems);

  return (
    <div className="flex flex-row justify-around my-12 h-[139px]">
      {isLoading ? (
        <>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="w-1/6 flex flex-col items-center gap-3">
              <Skeleton variant="circular" width={90} height={90} />
              <Skeleton variant="text" height={24} width={100} />
            </div>
          ))}
        </>
      ) : (
        <>
          {data?.map((item, index) => (
            <span className="w-1/6 flex-1">
              <Link
                key={index}
                to={`/category/${item.slug}`}
                className="flex flex-col items-center gap-3"
              >
                <div className="bg-gray-200 rounded-full p-6 w-[90px] h-[90px]">
                  <img
                    src={icons[item?.icon]}
                    className="w-10"
                    alt="home-icon"
                  />
                </div>
                <span>{item?.name}</span>
              </Link>
            </span>
          ))}
        </>
      )}
    </div>
  );
};

export default CategorySection;
