import React, { Component, Fragment } from "react";
import Logo from "../../assets/logotipo.png";
import { Button, Grid } from "@material-ui/core";
import { Container } from "./styles";
import * as firebase from "firebase";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyC5WPL9V3JFRnk2k5WmcmgLIP5XTB8wHcU",
  authDomain: "pizzaria-60905.firebaseapp.com",
  databaseURL: "https://pizzaria-60905.firebaseio.com",
  projectId: "pizzaria-60905",
  storageBucket: "pizzaria-60905.appspot.com",
  messagingSenderId: "255692066413",
  appId: "1:255692066413:web:830539d1a2651582b5b964",
  measurementId: "G-41LC8QQLHD"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

class Login extends Component {
  state = {
    isLoggedIn: false,
    user: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("usuario logado ", user);
        this.setState({ isLoggedIn: true, user });
      } else {
        console.log("usuario não logado ", user);
        this.setState({ isLoggedIn: false, user: null });
      }
    });
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("deslogado");
        this.setState({ isLoggedIn: false, user: null });
      });
  };

  render() {
    const { isLoggedIn, user } = this.state;
    return (
      <Container>
        <Grid container direction="column" alignItems="center" spacing={4}>
          <Grid item>
            <img src={Logo} alt="logotipo" />
          </Grid>
          <Grid item>
            {isLoggedIn && (
              <Fragment>
                <pre>{JSON.stringify(user.displayName)}</pre>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={this.logout}
                  fullWidth
                >
                  Sair
                </Button>
              </Fragment>
            )}
            {!isLoggedIn && (
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={this.login}
              >
                Entrar com Google
              </Button>
            )}
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Login;
