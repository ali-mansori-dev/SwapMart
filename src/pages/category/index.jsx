import PropTypes from "prop-types";
import React from "react";
import Mobile from "./mobile";
import Desktop from "./desktop";
import { useChildCategories } from "./useChildCategories";
import { useParams } from "react-router-dom";

const FilterPage = ({ isMobile }) => {
  const { slug } = useParams();

  const { data, loading, error } = useChildCategories(slug);

  return isMobile ? (
    <Mobile data={data} loading={loading} error={error} />
  ) : (
    <Desktop data={data} loading={loading} error={error} />
  );
};
FilterPage.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
export default FilterPage;
