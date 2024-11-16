import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { TextField } from "@mui/material";

import { FindChildrenCategorybySlugFn, SearchCategoryFn } from "../query";
import SearchItemComponent from "../search_item";
import New from "../form";
import { isEmpty } from "../../../utils/functions";
import BasicLayoutMobile from "../../../layouts/desktop/basic_layout";
import { useQuery } from "react-query";

const CreatePostDesktop = () => {
  const location = useLocation();
  const inputRef = useRef(null);
  const searchParams = new URLSearchParams(location.search);
  const slug = searchParams.get("slug");
  const [searchInput, setSearchInput] = useState("");
  const [senario, setSenario] = useState(0);

  const categoryQuery = useQuery({
    queryKey: ["categories"],
    queryFn: FindChildrenCategorybySlugFn.bind(this, slug),
    enabled: false,
  });

  const searchCategoryQuery = useQuery({
    queryKey: ["search_categories"],
    queryFn: SearchCategoryFn.bind(this, searchInput),
    enabled: false,
  });

  const searchInputHandler = async (e) => {
    setSenario(-1);
    const value = await e.target.value;
    if (value === "") {
      return setSearchInput("");
    }
    await setSearchInput(value);
    searchCategoryQuery.refetch();
  };

  useEffect(() => {
    const fn = async () => {
      if (!isEmpty(slug) && slug.length >= 1) {
        if (slug === "root") setSenario(1); //senario 2
        else setSenario(2); //senario 3
        return await categoryQuery.refetch();
      }
      inputRef.current?.focus();
      setSenario(0); //senario 1
    };
    fn();
  }, [slug]);

  return (
    <BasicLayoutMobile>
      <div className="flex flex-col w-full lg:w-[600px] gap-0">
        {/* we have 4 Senario */}
        {/* Search */}
        {/* {!(senario === 2 && categoryQuery?.data?.children?.length <= 0) && (
          <>
            <h6 className="w-full text-lg text-gray-800 mb-3">
              What do you sell?
            </h6>
            <p className="w-full text-sm text-gray-400 mb-8">
              choose category from the box
            </p>
            <TextField
              inputRef={inputRef}
              variant="outlined"
              size="medium"
              label="Categories"
              focused
              autoComplete="off"
              sx={{ marginBottom: "1rem" }}
              placeholder="Like Shoes, Cars"
              onChange={searchInputHandler}
            />
          </>
        )}

        {senario === -1 && (
          <>
            {searchCategoryQuery?.data && searchCategoryQuery?.data.length > 0
              ? searchCategoryQuery?.data?.map((value, index) => {
                  return <SearchItemComponent key={index} {...value} />;
                })
              : "دسته بندی پیدا نشد!!"}
          </>
        )} */}
        {/* No Slug */}
        {/* {senario === 0 && (
          <>
            <SearchItemComponent
              id={"root"}
              name={"All Swap mart Categories"}
              slug={"root"}
            />
          </>
        )} */}
        {/* Root Slug */}
        {/* {senario === 1 && (
          <>
            {categoryQuery?.data &&
              categoryQuery?.data.length > 0 &&
              categoryQuery?.data?.map((value, index) => {
                return (
                  <>
                    <SearchItemComponent key={index} {...value} />
                  </>
                );
              })}
          </>
        )} */}
        {/* Any Slug */}
        {senario === 2 && (
          <>
            {categoryQuery?.data?.children &&
            categoryQuery?.data?.children?.length > 0 ? (
              <>
                <SearchItemComponent
                  id={categoryQuery?.data?.slug}
                  isBack
                  name={
                    categoryQuery?.data?.parent === null
                      ? "back to all categories"
                      : "back to " + categoryQuery?.data?.parent?.name
                  }
                  slug={
                    categoryQuery?.data?.parent === null
                      ? "root"
                      : categoryQuery?.data?.parent?.slug
                  }
                />
                {categoryQuery?.data?.children?.map((value, index) => {
                  return <SearchItemComponent key={index} {...value} />;
                })}
              </>
            ) : (
              <New
                id={categoryQuery?.data?._id}
                name={categoryQuery?.data?.name}
                slug={categoryQuery?.data?.slug}
              />
            )}
          </>
        )}
      </div>
    </BasicLayoutMobile>
  );
};
export default CreatePostDesktop;
