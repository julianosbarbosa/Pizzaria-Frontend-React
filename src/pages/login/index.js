import React, { Component } from "react";
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
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("usuario logado ", user);
      } else {
        console.log("usuario não logado ", user);
      }
    });
  }

  render() {
    return (
      <Container>
        <Grid container direction="column" alignItems="center" spacing={4}>
          <Grid item>
            <img src={Logo} alt="logotipo" />
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              onClick={() => {
                const provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithRedirect(provider);
              }}
            >
              Entrar com Google
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Login;
