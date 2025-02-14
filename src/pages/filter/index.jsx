import React, { useRef } from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import useFilterProducts from "../../hooks/useFilterProducts";
import { useInfiniteItems } from "../../queries/postInfinitQuery";

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
