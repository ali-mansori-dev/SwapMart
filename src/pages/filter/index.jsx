import { useParams } from "react-router-dom";
// import React, { useRef } from "react";
import PropTypes from "prop-types";

// import { useInfiniteItems } from "../../queries/postInfinitQuery";
import useFilterProducts from "../../hooks/useFilterProducts";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const FilterPage = ({ isMobile }) => {
  const { slug } = useParams();
  const { data, loading } = useFilterProducts(slug);

  return isMobile ? (
    <Mobile data={data} loading={loading}/>
  ) : (
    <Desktop data={data} loading={loading}/>
  );
};
FilterPage.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
export default FilterPage;
