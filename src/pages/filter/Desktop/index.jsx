import React from "react";
import BasicLayoutDesktop from "../../../layouts/desktop/basic_layout";
import PropTypes from "prop-types";
import PostCard from "../../../shared/components/product/product_card";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  CircularProgress,
  Skeleton,
  Slider,
  Typography,
} from "@mui/material";
import chevron from "../../../assets/icon/chevron-down.svg";

const Desktop = ({ data, loading }) => {
  return (
    <BasicLayoutDesktop>
      <div className="flex flex-row-reverse gap-8 relative">
        <div className="w-1/4 h-[80vh] border rounded-lg sticky top-20">
          {" "}
          <Accordion>
            <AccordionSummary
              expandIcon={<img src={chevron} className="w-4" />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">Price</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={[15, 60]}
                // onChange={handleChange}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
              />
            </AccordionDetails>
            <AccordionActions>
              <Button>Cancel</Button>
              <Button>filter</Button>
            </AccordionActions>
          </Accordion>
        </div>
        <div className="w-3/4 grid grid-cols-3 gap-5 ">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-gray-100 h-[332px]"></div>
              ))
            : data?.map((item, index) => <PostCard {...item} key={index} />)}
        </div>
      </div>
    </BasicLayoutDesktop>
  );
};
Desktop.propTypes = {
  data: PropTypes.any,
  loading: PropTypes.bool,
};
export default Desktop;
