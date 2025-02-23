import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { useChildCategories } from "../../hooks/useChildCategories";
import Desktop from "./desktop";
import Mobile from "./mobile";

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
