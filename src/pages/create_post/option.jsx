import {  MenuItem, TextField } from "@mui/material";
import PropTypes from "prop-types";

const OptionComponent = ({
  _id,
  // key,
  type,
  register,
  title,
  enum: list,
  // required,
  defaultValue = "",
}) => {
  return (
    <>
      
      {list.length > 0 && list[0] !== "" ? (
        <>
          <TextField
            label={title}
            placeholder={title}
            {...register(_id)}
            // required={required ?? false}
            select
            defaultValue={defaultValue}
          >
            {list.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </TextField>
        </>
      ) : (
        <TextField
          label={title}
          placeholder={title}
          {...register(_id)}
          // required={required ?? false}
          type={type === "currency" ? "number" : "text"}
          value={defaultValue}
        />
      )}
    </>
  );
};
OptionComponent.propTypes = {
  _id: PropTypes.any,
  key: PropTypes.any,
  type: PropTypes.any,
  register: PropTypes.any,
  title: PropTypes.any,
  enum: PropTypes.any,
  required: PropTypes.any,
  defaultValue: PropTypes.any,
};
export default OptionComponent;
