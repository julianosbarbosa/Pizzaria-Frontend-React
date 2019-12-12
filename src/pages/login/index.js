import React, { useState, useEffect, Fragment, useCallback } from "react";
import Logo from "../../assets/logotipo.png";
import { Button, Grid } from "@material-ui/core";
import { Container } from "./styles";
import * as firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
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

function Login() {
  const [userInfo, setUserInfo] = useState({
    isLoggedIn: false,
    user: null
  });

  const { isLoggedIn, user } = userInfo;

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log("usuario logado ", user);
      setUserInfo({ isLoggedIn: !!user, user });
    });
  }, []);

  const login = useCallback(() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }, []);

  const logout = useCallback(() => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("deslogado");
        setUserInfo({ isLoggedIn: false, user: null });
      });
  }, []);

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
                onClick={logout}
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
              onClick={login}
            >
              Entrar com Google
            </Button>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
