import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { FindPostbySlugFn } from "../../queries/post";
import Mobile from "./mobile";
import Desktop from "./desktop";
import Supabase from "../../lib/helper/ClientSupabase";

const SinglePost = ({ isMobile }) => {
  const { slug } = useParams();
  const { is_authed, user_info } = useSelector((redux) => redux.auth);
  const [isBookmark, setIsBookmark] = useState("loading");

  const { isFetching, data } = useQuery(
    ["post_data", slug],
    () => FindPostbySlugFn(slug),
    {
      keepPreviousData: false,
      staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
      retry: 2, // Retry fetching data up to 2 times on failure
      refetchOnWindowFocus: false, // Prevent refetching on tab/window focus
    }
  );

  //viewed query
  useEffect(() => {
    (async function () {
      if (is_authed && data?.id && user_info?.id) {
        const { data: viewed_data } = await Supabase.from("sw_post_viewed")
          .select("*")
          .eq("post", data?.id)
          .eq("user", user_info?.id);

        if (!viewed_data.length)
          await Supabase.from("sw_post_viewed")
            .insert([{ post: data?.id }])
            .select();
        else
          await Supabase.from("sw_post_viewed")
            .update({ created_at: new Date().toISOString() })
            .eq("post", data?.id)
            .eq("user", user_info?.id);
      }
    })();
  }, [data, is_authed, user_info]);

  //bookmark queries
  useEffect(() => {
    (async function () {
      if (is_authed && data?.id && user_info?.id) {
        const { data: saved_data } = await Supabase.from("sw_post_saved")
          .select("*")
          .eq("post", data?.id)
          .eq("user", user_info?.id);

        setIsBookmark(saved_data.length > 0);
      } else setIsBookmark(false);
    })();
  }, [data, is_authed, user_info]);

  const onSaveBtnClick = async () => {
    if (isBookmark === true) {
      const { error } = await Supabase.from("sw_post_saved")
        .delete()
        .eq("post", data?.id)
        .eq("user", user_info?.id);

      !error && setIsBookmark(false);
    } else if (isBookmark === false) {
      const { error } = await Supabase.from("sw_post_saved")
        .insert([{ post: data?.id }])
        .select();
      !error && setIsBookmark(true);
    }
  };

  return isMobile ? (
    <Mobile
      isLoading={isFetching}
      data={data}
      onSaveBtnClick={onSaveBtnClick}
      isBookmark={isBookmark}
    />
  ) : (
    <Desktop
      isLoading={isFetching}
      data={data}
      onSaveBtnClick={onSaveBtnClick}
      isBookmark={isBookmark}
    />
  );
};
SinglePost.propTypes = { isMobile: PropTypes.bool };
export default SinglePost;
