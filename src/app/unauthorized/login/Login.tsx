import { Formik }                          from "formik";
import { signInFormSchema }                from "./validation";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField                           from "@material-ui/core/TextField";
import Card                                from "@material-ui/core/Card";
import CardContent                         from "@material-ui/core/CardContent";
import CardActions                         from "@material-ui/core/CardActions";
import CardHeader                          from "@material-ui/core/CardHeader";
import Button                              from "@material-ui/core/Button";
import Grid                                from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: `${theme.spacing(0)} auto`,
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      background: "#000",
      '&:hover': {
        background: "#e33141",
        fontWeight: 600,
      }
    },
    loginInput: {
      marginTop: 30,
    },
    header: {
      textAlign: "center",
      background: "#000",
      color: "#fff",
      textTransform: "uppercase",
    },
    card: {
      marginTop: theme.spacing(12),
      minWidth: 600,
      minHeight: 320,
      [theme.breakpoints.up("md")]: {
        width: 700,
        height: 400,
      },
      [theme.breakpoints.up("lg")]: {
        width: 800,
      },
    },
    buttonWrapper: {
      justifyContent: "center",
    },
  })
);

function Login() {
  const classes = useStyles();

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={signInFormSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <form className={classes.container} onSubmit={handleSubmit}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Card className={classes.card}>
                <CardHeader className={classes.header} title="Sign In" />
                <CardContent>
                  <Grid item xs={12}>
                    <TextField
                      error={Boolean(touched.email || errors.email)}
                      type={`email`}
                      name={`email`}
                      className={classes.loginInput}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Email"
                      helperText={errors.email}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      error={Boolean(touched.password || errors.password)}
                      type={`password`}
                      name={`password`}
                      className={classes.loginInput}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Password"
                      helperText={errors.password}
                      fullWidth
                    />
                  </Grid>
                </CardContent>

                <CardActions className={classes.buttonWrapper}>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    lg={5}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Button
                      variant="contained"
                      fullWidth
                      color="primary"
                      className={classes.loginBtn}
                      disabled={!isValid && !dirty}
                      type={`submit`}
                    >
                      Log In
                    </Button>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
}

export default Login;
