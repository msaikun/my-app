import { Formik }            from "formik";
import { signInFormSchema }  from "./validation";
import { Navigate }          from "react-router-dom";
import styled                from "styled-components";
import Card                  from "@material-ui/core/Card";
import CardContent           from "@material-ui/core/CardContent";
import Grid                  from "@material-ui/core/Grid";
import { 
  ButtonWrapper,
  PageHeader,
  PageInput,
  PageForm,
  SubmitBtn
}                            from "../../../shared/styles";
// import { breakpoint } from "styled-components-breakpoint";

const LoginPageCard = styled(Card)`
  && {
    margin-top: 100px;
    min-width: 600px;
    min-height: 320px;

    @media (min-width: 900px) {
      width: 700px;
      height: 400px;
    }

    @media (min-width: 1200px) {
      width: 800px;
    }
  }
`;
//Add breakpoints instead of media-queries

function Login() {
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
          <Navigate to="/contacts" />;
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
          <PageForm onSubmit={handleSubmit}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <LoginPageCard>
                <PageHeader title="Sign In" />
                <CardContent>
                  <Grid item xs={12}>
                    <PageInput
                      error={Boolean(touched.email || errors.email)}
                      type={`email`}
                      name={`email`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Email"
                      helperText={errors.email}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <PageInput
                      error={Boolean(touched.password || errors.password)}
                      type={`password`}
                      name={`password`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Password"
                      helperText={errors.password}
                      fullWidth
                    />
                  </Grid>
                </CardContent>

                <ButtonWrapper>
                  <Grid item xs={12} md={4} lg={5}>
                    <SubmitBtn
                      variant="contained"
                      fullWidth
                      disabled={!isValid || !dirty}
                      type={`submit`}
                    >
                      Log In
                    </SubmitBtn>
                  </Grid>
                </ButtonWrapper>
              </LoginPageCard>
            </Grid>
          </PageForm>
        )}
      </Formik>
    </>
  );
}

export default Login;
