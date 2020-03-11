import React from "react";
import { Tooltip } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import validators from "../validators";
import fieldPropTypes from "./fieldPropTypes";
import Switch from "@material-ui/core/Switch";

export default function MDSwitch(props) {
  const {
    id,
    title,
    disabled,
    value,
    onChange,
    validation,
    validator = validators.alwaysTrue,
    size,
    type,
    ...otherProps
  } = props;
  const { valid, errorMessage } = validator(value, true, validation);

  return (
    <FormControl fullWidth disabled={disabled}>
      <FormControlLabel
        control={
          <Switch
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

MDSwitch.propTypes = {
  ...fieldPropTypes
};
