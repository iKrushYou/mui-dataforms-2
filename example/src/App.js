import React, { useState } from "react";

import DataForm from "mui-dataforms";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  exRoot: {
    padding: 64
  },
  exFormPaper: {
    padding: 16
  }
});
export default function App() {
  const classes = useStyles();

  const [values, setValues] = useState({});

  const handleChangeValue = (key, value) => {
    setValues(prev => ({ ...prev, [key]: value }));
  };

  const sections = [
    {
      title: "Personal Info",
      fields: [
        {
          title: "First Name",
          type: "text",
          size: {
            md: 6
          },
          value: values.firstName,
          onChange: value => handleChangeValue("firstName", value),
          validation: {
            required: true,
            min: 1,
            max: 64
          }
        },
        {
          title: "Last Name",
          type: "text",
          size: {
            md: 6
          },
          value: values.lastName,
          onChange: value => handleChangeValue("lastName", value),
          validation: {
            required: true,
            min: 1,
            max: 64
          }
        },
        {
          title: "Age",
          type: "number",
          size: {
            md: 3
          },
          value: values.age,
          onChange: value => handleChangeValue("age", value),
          validation: {
            min: 1,
            max: 100
          }
        },
        {
          title: "Gender",
          type: "select",
          size: {
            md: 3
          },
          value: values.gender,
          onChange: value => handleChangeValue("gender", value),
          options: [
            { value: "male", label: "Male" },
            { value: "female", label: "Female" }
          ]
        },
        {
          title: "Can you read?",
          type: "checkbox",
          size: {
            md: 3
          },
          value: values.read,
          onChange: value => handleChangeValue("read", value)
        },
        {
          title: "Enabled?",
          type: "switch",
          size: {
            md: 3
          },
          value: values.enabled,
          onChange: value => handleChangeValue("enabled", value)
        }
      ]
    },
    {
      title: "Job Info",
      fields: [
        {
          title: "Position",
          type: "select",
          size: {
            md: 3
          },
          value: values.position,
          onChange: value => handleChangeValue("position", value),
          options: [
            { label: "Analyst", value: "analyst" },
            { label: "Senior", value: "senior" },
            { label: "Director", value: "director" }
          ]
        },
        {
          title: "Job Title",
          type: "text",
          size: {
            md: 6
          },
          value: values.jobTitle,
          onChange: value => handleChangeValue("jobTitle", value)
        }
      ]
    }
  ];

  return (
    <div className={classes.exRoot}>
      <Container maxWidth={"md"}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.exFormPaper}>
              <DataForm title={"Form Title"} sections={sections} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.exFormPaper}>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
