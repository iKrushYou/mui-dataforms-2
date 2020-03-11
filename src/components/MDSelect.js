import React, { useState } from "react";
import validators from "../validators";
import FormControl from "@material-ui/core/FormControl/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import fieldPropTypes from "./fieldPropTypes";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function MDSelect(props) {
  const {
    id,
    title,
    disabled,
    value,
    onChange,
    validation,
    validator = validators.select,
    size,
    type,
    options,
    ...otherProps
  } = props;
  const { valid, errorMessage } = validator(value, true, validation);

  return (
    <FormControl fullWidth disabled={!!disabled}>
      <InputLabel htmlFor={id}>{title}</InputLabel>
      <Select
        value={value || ""}
        onChange={event => onChange(event.target.value)}
        error={!valid}
        {...otherProps}
      >
        {options.map((option, index) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {errorMessage && (
        <FormHelperText error={!valid}>{errorMessage}</FormHelperText>
      )}
    </FormControl>
  );
}

MDSelect.propTypes = {
  ...fieldPropTypes
};
