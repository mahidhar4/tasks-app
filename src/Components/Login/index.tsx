import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React, { useState } from "react";
import { withRouter } from "react-router";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "left"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  root: {
    minWidth: 275,
    marginTop: theme.spacing(20)
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}));

const Login = (props: any) => {
  const classes = useStyles();
  const [loginData, setLoginData] = useState({ id: "", name: "" });
  const { history } = props;
  const onSubmitLogin = async () => {
    const logiInfo = await fetch("/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    });
    alert(JSON.stringify(logiInfo));
    history.push("/dahboard");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <div className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="id"
                label="Id"
                name="id"
                autoComplete="current-id"
                autoFocus
                value={loginData.id}
                onChange={event => {
                  setLoginData({
                    ...loginData,
                    [event.target.name]: event.target.value
                  });
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="name"
                label="Name"
                id="name"
                autoComplete="current-name"
                value={loginData.name}
                onChange={event => {
                  setLoginData({
                    ...loginData,
                    [event.target.name]: event.target.value
                  });
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onSubmitLogin}
              >
                Login
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default withRouter(Login);
