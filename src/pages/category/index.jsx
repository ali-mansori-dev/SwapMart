import PropTypes from "prop-types";
import React from "react";
import Mobile from "./mobile";
import Desktop from "./desktop";
import { useParams } from "react-router-dom";
import { useChildCategories } from "../../hooks/useChildCategories";

const CategoryPage = ({ isMobile }) => {
  const { slug } = useParams();

  const { data, loading, error } = useChildCategories(slug);

  return isMobile ? (
    <Mobile data={data} loading={loading} error={error} />
  ) : (
    <Desktop data={data} loading={loading} error={error} />
  );
};
CategoryPage.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
export default CategoryPage;
