import axios                     from "axios";
import { useNavigate }           from "react-router-dom";
import { Formik }                from "formik";
import styled                    from "styled-components";
import Card                      from "@material-ui/core/Card";
import CardContent               from "@material-ui/core/CardContent";
import Grid                      from "@material-ui/core/Grid";
import {
  ButtonWrapper,
  PageHeader,
  PageInput,
  PageForm,
  Btn,
}                                from "../../../shared/styles";
import { ILoginForm }            from "../../../shared/interfaces";
import { signInFormSchema }      from "./validation";

const LoginPageCard = styled(Card)`&& {
  margin-top: 100px;
  min-width: 600px;
  min-height: 320px;

  ${({ theme: { breakpoints } }: any) => breakpoints.up("md")} {
    max-width: 700px;
    max-height: 400px;
  }

  ${({ theme: { breakpoints } }: any) => breakpoints.up("ld")} {
    max-width: 800px;
  }
}`;

export const Login = () => {
  const navigate = useNavigate();

  function signIn(data: ILoginForm): void {
    const { email, password } = data;
  
    axios
      .post("https://61e029ae0f3bdb0017934e25.mockapi.io/api/v1/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        navigate('/contacts');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validateOnBlur
        onSubmit={signIn}
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
                    <Btn
                      variant="contained"
                      fullWidth
                      disabled={!isValid || !dirty}
                      type={`submit`}
                    >
                      Log In
                    </Btn>
                  </Grid>
                </ButtonWrapper>
              </LoginPageCard>
            </Grid>
          </PageForm>
        )}
      </Formik>
    </>
  );
};
