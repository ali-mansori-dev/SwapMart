import { useQuery } from "react-query";
import { fetchBrands } from "./functions";
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";

const Brands = () => {
  const { data, isLoading } = useQuery("fetchBrands", fetchBrands);

  return (
    <div className="flex flex-col gap-10 items-center">
      <span className="text-xl">Top Brands</span>
      <div className="w-full flex flex-wrap justify-between mb-10 rounded-lg">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="w-1/6 flex flex-col items-center gap-3"
              >
                <Skeleton variant="circular" width={90} height={90} />
                <Skeleton variant="text" height={24} width={100} />
              </div>
            ))
          : data?.map((item, index) => (
              <span key={index} className="w-1/6 flex-1">
                <Link
                  key={index}
                  to={`/category/${item.slug}`}
                  className=" flex flex-col items-center gap-3"
                >
                  <div className="bg-gray-200 rounded-full p-6 w-[90px] h-[90px]">
                    <img
                      src={item?.image}
                      className="w-[40px] h-[40px]"
                      alt="home-icon"
                    />
                  </div>
                  <span className="text-center line-clamp-1">{item?.name}</span>
                </Link>
              </span>
            ))}
      </div>
    </div>
  );
};

export default Brands;
