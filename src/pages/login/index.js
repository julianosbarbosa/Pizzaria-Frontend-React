import React from "react";
import Logo from "../../assets/logotipo.png";
import { Button, Grid } from "@material-ui/core";
import { Container } from "./styles";

export default function Login() {
  return (
    <Container>
      <Grid container direction="column" alignItems="center" spacing={40}>
        <Grid item>
          <img src={Logo} alt="logotipo" />
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" fullWidth>
            Entrar com GitHub
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
