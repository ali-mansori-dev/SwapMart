import PropTypes from "prop-types";
import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import chevron from "../../../../assets/icon/chevron-down.svg";
import { close_all } from "../../../../features/layout/layoutSlice";

const CategoryItem = ({ item }) => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(close_all());
  };
  return item?.children && item?.children.length > 0 ? (
    <Accordion>
      <AccordionSummary
        aria-controls="panel1-content"
        id="panel1-header"
        expandIcon={<img src={chevron} alt="chevron" className="w-4" />}
      >
        <Typography>{item?.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex flex-row gap-4">
          {item?.children?.map((childitem) => (
            <Link
              onClick={onClose}
              to={`/${childitem?.slug}`}
              className="bg-gray-200 text-xs px-1 py-2 text-center rounded-md w-1/2 line-clamp-2 mx-auto inline-flex justify-center items-center"
            >
              {childitem?.name}
            </Link>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  ) : (
    <Link to={`/${item?.slug}`}>
      <Accordion>
        <AccordionSummary
          onClick={onClose}
          aria-controls="panel1-content"
          id="panel1-header"
          expandIcon={
            <img src={chevron} alt="chevron" className="w-4 -rotate-90" />
          }
        >
          <Typography>{item?.name}</Typography>
        </AccordionSummary>
      </Accordion>
    </Link>
  );
};
CategoryItem.propTypes = { item: PropTypes.any };
export default CategoryItem;
