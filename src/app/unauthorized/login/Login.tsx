import { useCallback }                              from 'react';
import { useNavigate }                              from 'react-router-dom';
import { useDispatch }                              from 'react-redux';
import { FastField, Formik }                        from 'formik';
import styled                                       from 'styled-components';
import { CardContent, Card, Grid }                  from '@material-ui/core/';
import { ButtonWrapper, PageHeader, PageForm, Btn } from '../../shared/styles';
import { ILoginForm }                               from '../../shared/interfaces';
import { TextInputField }                           from '../../shared/formFields/TextInputField/TextInputField';
import { signInFormSchema }                         from './validation';
import { login }                                    from '../../../store/actions/userActions';

const LoginPageCard = styled(Card)`&& {
  margin-top: 100px;
  min-width: 400px;
  min-height: 400px;

  ${({ theme: { breakpoints } }: any) => breakpoints.up('md')} {
    width: 500px;
  }

  ${({ theme: { breakpoints } }: any) => breakpoints.up('lg')} {
    width: 550px;
  }
}`;

const PageInput = styled(FastField)`&& {
  margin-top: 20px;
  margin-bottom: 10px;
}`;

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (values: ILoginForm) => {
      dispatch(login(values));
      navigate('/contacts');
    }, [login]
  )

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Formik
        enableReinitialize
        initialValues={initialValues as any}
        validateOnBlur
        onSubmit={onSubmit}
        validationSchema={signInFormSchema}
      >
        {({ values, handleChange, isValid, handleSubmit, dirty }) => (
          <PageForm onSubmit={handleSubmit}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <LoginPageCard>
                <PageHeader title="Sign In" />

                <CardContent>
                  <div>
                    <Grid item xs={12}>
                      <PageInput
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        placeholder="Email"
                        component={TextInputField}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <PageInput
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                        placeholder="Password"
                        component={TextInputField}
                      />
                    </Grid>
                  </div>
                </CardContent>

                <ButtonWrapper>
                  <Grid
                    item
                    xs={8}
                    md={4}
                    lg={5}
                  >
                    <Btn
                      variant="contained"
                      fullWidth
                      disabled={!isValid || !dirty}
                      type="submit"
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
  );
};
