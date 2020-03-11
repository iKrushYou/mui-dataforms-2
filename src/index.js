import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MDTextField from "./components/MDTextField";
import fieldPropTypes from "./components/fieldPropTypes";
import MDUnknownField from "./components/MDUnknownField";
import MDNumberField from "./components/MDNumberField";
import fieldTypes from "./components/fieldTypes";
import MDSwitch from "./components/MDSwitch";
import MDCheckBox from "./components/MDCheckBox";
import MDSelect from "./components/MDSelect";

const useStyles = makeStyles({
  root: {}
});

export default function DataForm(props) {
  const { title, sections = [], spacing = 2 } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {title && (
          <Grid item xs={12}>
            <Typography variant={"h4"}>{title}</Typography>
          </Grid>
        )}
        {sections.map((section, index) => (
          <Grid item xs={12} key={`${section.title}-${index}`}>
            {section.title && (
              <Typography variant={"h5"} gutterBottom>
                {section.title}
              </Typography>
            )}
            <Grid container spacing={spacing}>
              {section.fields.map((field, index) => {
                let FieldComponent = MDUnknownField;
                if (field.type === fieldTypes.TEXT) {
                  FieldComponent = MDTextField;
                } else if (field.type === fieldTypes.NUMBER) {
                  FieldComponent = MDNumberField;
                } else if (field.type === fieldTypes.SWITCH) {
                  FieldComponent = MDSwitch;
                } else if (field.type === fieldTypes.CHECKBOX) {
                  FieldComponent = MDCheckBox;
                } else if (field.type === fieldTypes.SELECT) {
                  FieldComponent = MDSelect;
                }
                return (
                  <FieldGridItem field={field} key={`${field.title}-${index}`}>
                    <FieldComponent {...field} />
                  </FieldGridItem>
                );
              })}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

DataForm.propTypes = {
  title: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      fields: PropTypes.arrayOf(
        PropTypes.shape({
          ...fieldPropTypes
        })
      )
    })
  ),
  spacing: PropTypes.number
};

function FieldGridItem(props) {
  const {
    children,
    field: { size = { xs: 12 } }
  } = props;

  return (
    <Grid item xs={size.xs} sm={size.sm} md={size.md} lg={size.lg} xl={size.xl}>
      {children}
    </Grid>
  );
}

FieldGridItem.propTypes = {
  children: PropTypes.element,
  field: PropTypes.object
};
