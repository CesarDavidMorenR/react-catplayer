import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert";
import Alert from "@mui/material/Alert";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useFetchUser from "../../API/useFetchApi";

// Cambiar por UseFetch

const LoginPage = () => {
  const { users, addNewUser } = useFetchUser();

  const [usernameError, setUsernameError] = useState(false);
  const [newEmailError, setNewEmailError] = useState(false);
  // const { handleSubmit, control } = useForm();
  const { handleSubmit: handleSubmit2, control: control2, reset } = useForm();

  const onSubmitNewUser = (newUser) => {
    const emailExist = users.find(
      (user) => user.email === newUser.emailNewUser
    );
    const usernameExist = users.find(
      (user) => user.username === newUser.username
    );

    if (emailExist) {
      setNewEmailError(true);
      setTimeout(() => {
        setNewEmailError(false);
      }, 3000);
    }
    if (usernameExist) {
      setUsernameError(true);
      setTimeout(() => {
        setUsernameError(false);
      }, 3000);
    }
    if (!emailExist && !usernameExist) {
      const newUserData = {
        name: newUser.firstName,
        username: newUser.username,
        email: newUser.emailNewUser,
        password: newUser.passwordNewUser,
        discountActivated: false,
      };
      addNewUser(newUserData);
      localStorage.setItem("user", JSON.stringify(newUser.username));
      reset();
      Swal({
        title: "Welcome to CatPLayer!",
        text: `Discount!!: catplayer${newUser.username}`,
        icon: "success",
      });
    }
  };

  return (
    <>
      <div className="login__signup">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3>New to DeskShop?</h3>
              <p className="login__signup__text">
                Create your account for our amazing discounts across all of our
                categories.
              </p>
              <Box
                component="form"
                onSubmit={handleSubmit2(onSubmitNewUser)}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="firstName"
                      control={control2}
                      defaultValue=""
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <TextField
                          autoComplete="given-name"
                          fullWidth
                          label="First Name"
                          onChange={onChange}
                          value={value}
                          error={!!error}
                          helperText={error ? error.message : null}
                          type="text"
                        />
                      )}
                      rules={{ required: "First name is required" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="username"
                      control={control2}
                      defaultValue=""
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <TextField
                          fullWidth
                          label="User Name"
                          autoComplete="family-name"
                          onChange={onChange}
                          value={value}
                          error={!!error}
                          helperText={error ? error.message : null}
                          type="text"
                        />
                      )}
                      rules={{
                        required: "User name is required",
                        pattern: {
                          value: /^[a-zA-Z0-9]{3,10}$/,
                          message:
                            "User name must be alphanumeric between 3 and 10 characters.",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name="emailNewUser"
                      control={control2}
                      defaultValue=""
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <TextField
                          fullWidth
                          label="Email Address"
                          autoComplete="email"
                          onChange={onChange}
                          value={value}
                          error={!!error}
                          helperText={error ? error.message : null}
                          type="email"
                        />
                      )}
                      rules={{ required: "Email is required" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name="passwordNewUser"
                      control={control2}
                      defaultValue=""
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <TextField
                          fullWidth
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                          onChange={onChange}
                          value={value}
                          error={!!error}
                          helperText={error ? error.message : null}
                        />
                      )}
                      // rules={{
                      //   required: "Password is required",
                      //   pattern: {
                      //     value:
                      //       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/,
                      //     message:
                      //       "Password must include one number, one uppercase letter, one lowercase letter and one special character. The length must be between 8 and 20 characters.",
                      //   },
                      // }}
                    />

                    {usernameError ? (
                      <Alert className="errorAlert" severity="error">
                        There is already an account with this username.
                      </Alert>
                    ) : null}
                    {newEmailError ? (
                      <Alert className="errorAlert" severity="error">
                        There is already an account associated with this email.
                      </Alert>
                    ) : null}
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want Discounts, Discounts, Discounts!."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  color="secondary"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
};

const theme = createTheme();

export default LoginPage;
