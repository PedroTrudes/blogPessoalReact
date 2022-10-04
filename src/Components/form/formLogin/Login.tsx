import {Grid, TextField } from "@material-ui/core";
import './Login.css';

function Login(){
    return(
      <Grid container alignItems="center" justifyContent="center" className="gridContainer">
        <Grid item xs={6} >
            <form className="formLog">
              <span>Login</span>
              <div className="containerInputs">
              <TextField id="standard-basic" fullWidth label="Email" />
              </div>
              <div className="containerInputs">
              <TextField id="standard-basic" fullWidth label="Senha" />
              </div>
            </form>
        </Grid>
      </Grid>
      
    );
};

export default Login;

