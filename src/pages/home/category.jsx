import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

import Supabase from "../../lib/helper/ClientSupabase";
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
    <ul className="flex flex-row flex-wrap gap-2 justify-around my-8 lg:my-10 h-max min-h-[84px] lg:min-h-[139px]">
      {isLoading ? (
        <>
          {Array.from({ length: 5 }).map((_, index) => (
            <li
              key={index}
              className="w-1/4 flex-1 flex flex-col items-center gap-2 lg:gap-3"
            >
              <div className="w-[52px] h-[52px] lg:w-[90px] lg:h-[90px]">
                <Skeleton variant="rounded" sx={{ height: "100%" }} />
              </div>
              <div className="w-[52px] h-[16px] lg:w-[90px] lg:h-[24px]">
                <Skeleton variant="text" sx={{ height: "100%" }} />
              </div>
            </li>
          ))}
        </>
      ) : (
        <>
          {data?.map((item, index) => (
            <li key={index} className="w-1/4 flex-1">
              <Link
                key={index}
                to={`/category/${item.slug}`}
                className="flex flex-col items-center gap-2 lg:gap-3"
              >
                <div className="bg-gray-200 rounded-xl flex justify-center items-center w-[52px] h-[52px] lg:w-[90px] lg:h-[90px]">
                  <img
                    src={icons[item?.icon]}
                    className="w-6 lg:w-10"
                    alt="home-icon"
                  />
                </div>
                <h3 className="text-xs lg:text-base text-center line-clamp-1">
                  {item?.name}
                </h3>
              </Link>
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

export default CategorySection;
