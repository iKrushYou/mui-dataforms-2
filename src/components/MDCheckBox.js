import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormHelperText from "@material-ui/core/FormHelperText";
import validators from "../validators";
import fieldPropTypes from "./fieldPropTypes";

export default function MDCheckbox(props) {
  const {
    id,
    title,
    disabled,
    value,
    onChange,
    validation,
    validator = validators.alwaysTrue,
    size,
    ...otherProps
  } = props;
  const { valid, errorMessage } = validator(value, true, validation);

  return (
    <FormControl fullWidth disabled={disabled}>
      <FormControlLabel
        control={
          <Checkbox
            checked={value || false}
            onChange={event => onChange(event.target.checked, event)}
            {...otherProps}
          />
        }
        label={title}
      />
      {!valid && <FormHelperText error={!valid}>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}

MDCheckbox.propTypes = {
  ...fieldPropTypes
};
