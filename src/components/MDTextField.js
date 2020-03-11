import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import validators from "../validators";
import FormControl from "@material-ui/core/FormControl/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import fieldPropTypes from "./fieldPropTypes";

export default function MDTextField(props) {
  const {
    id,
    title,
    disabled,
    value,
    onChange,
    validation,
    validator = validators.text,
    size,
    type,
    ...otherProps
  } = props;
  const [touched, setTouched] = useState(false);
  const { valid, errorMessage } = validator(value, touched, validation);

  return (
    <FormControl error={!valid} fullWidth>
      <TextField
        id={id}
        label={title}
        disabled={disabled}
        error={!valid}
        value={value || ""}
        onChange={event => {
          setTouched(true);
          onChange(event.target.value, event);
        }}
        fullWidth
        onBlur={() => setTouched(true)}
        {...otherProps}
      />
      {errorMessage && (
        <FormHelperText error={!valid}>{errorMessage}</FormHelperText>
      )}
    </FormControl>
  );
}

MDTextField.propTypes = {
  ...fieldPropTypes
};
