import React from 'react';
import "./Login.css"
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  Paper,
  Box,
  Checkbox,
  Button,
  FormGroup
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  formControl: {
    maxWidth: "100%",
    width: "100%"
  },
  inputItem: {
    marginBottom: theme.spacing(4.3)

  }
}));

const defaultValues = {
  firstName: "",
  lastName: "",
  dob: Date.now(),
  gender: "",
  state: ""
};



function Login() {
  const { handleSubmit, control } = useForm({ defaultValues });

  const classes = useStyles();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper component={Box} p={4}>
          <Controller
            control={control}
            name="firstName"
            render={({ onChange, onBlur, value, name, ref }) => (
              <TextField
                id="filled-basic"
                label="First Name"
                placeholder="Enter your first name"
                variant="filled"
                fullWidth
                onChange={onChange}
                ref={ref}
                value={value}
                className={classes.inputItem}
              />
            )}
          />
          <Controller
            control={control}
            name="lastName"
            render={({ onChange, onBlur, value, name, ref }) => (
              <TextField
                id="filled-basic"
                label="Last Name"
                placeholder="Enter your last name"
                variant="filled"
                fullWidth
                onChange={onChange}
                ref={ref}
                value={value}
                className={classes.inputItem}
              />
            )}
          />
          <Controller
            control={control}
            name="dob"
            render={({ onChange, onBlur, value, name, ref }) => (
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  fullWidth
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  id="date-picker-inline"
                  label="Select your date of birth"
                  inputRef={ref}
                  onChange={onChange}
                  value={value}
                  className={classes.inputItem}
                />
              </MuiPickersUtilsProvider>
            )}
          />
          <FormGroup>
            <Controller
              control={control}
              name="gender"
              render={({ onChange, onBlur, value, name, ref }) => (
                <FormControl className={classes.inputItem}>
                  <FormLabel>Choose your gender</FormLabel>
                  <RadioGroup row value={value} onChange={onChange} ref={ref}>
                    <FormControlLabel
                      value="male"
                      control={<Radio color="primary" />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio color="primary" />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio color="primary" />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name="state"
              render={({ onChange, onBlur, value, name, ref }) => (
                <FormControl className={classes.formControl}>
                  <InputLabel id="state">Choose Your State</InputLabel>
                  <Select
                    labelId="state"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    inputRef={ref}
                    className={classes.inputItem}
                  >
                    <MenuItem value="">Select Your State</MenuItem>
                    <MenuItem value="gujarat">Gujarat</MenuItem>
                    <MenuItem value="rajastan">Rajastan</MenuItem>
                    <MenuItem value="HP">HP</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            <FormControl className={classes.inputItem}>
              <FormControlLabel
                control={<Checkbox />}
                label="I aggree all terms & conditons"
              />
            </FormControl>
          </FormGroup>
          <Button type="submit" variant="contained" color="secondary">
            Submit Form
        </Button>
          <div className="footer">
            <p style={{ textAlign: "center", margin: "1%" }}>©2021. All Rights Reserved. <a href="https://www.codehub.gr/">Code_Hub®</a></p>
          </div>
        </Paper>

      </form>
    </div>
  )
}

export default Login;