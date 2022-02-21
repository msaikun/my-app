import { useCallback }                  from 'react';
import { useNavigate }                  from 'react-router-dom';
import { useDispatch }                  from 'react-redux';
import { Formik }                       from 'formik';
import styled                           from 'styled-components';
import 'antd/dist/antd.css';
import { Form, Row, Card, Col }         from 'antd';
import { ILoginForm }                   from '../../shared/interfaces';
import { Input }                        from '../../shared/inputs/TextInput/TextInputAntD';
import {
  PageForm,
  AntButton,
  PageHeader,
  ButtonsWrapper
}                                       from '../../shared/styles';
import { signInFormSchema }             from './validation';
import { login }                        from '../../../store/actions/userActions';

const LoginPageCard = styled(Card)`&& {
  min-width: 400;
  min-height: 400px;
  margin-top: 100px;
  background-color: beige;

  ${({ theme: { breakpoints } }: any) => breakpoints.up('xs')} {
    width: 450px;
  }

  ${({ theme: { breakpoints } }: any) => breakpoints.up('md')} {
    width: 550px;
  }

  ${({ theme: { breakpoints } }: any) => breakpoints.up('lg')} {
    width: 650px;
  }
}`;

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (values: ILoginForm) => {
      dispatch(login(values));
      navigate('/contacts');
    },
    [login]
  );

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
      {({ isValid, handleSubmit, dirty }) => (
        <PageForm onSubmitCapture={handleSubmit}>
          <LoginPageCard>
            <PageHeader>Sign In</PageHeader>

            <Card>
              <Row
                gutter={24}
                align="middle"
                justify="center"
              >
                <Col xs={{ span: 24 }} lg={{ span: 12 }}
                >
                  <Input
                    name="email"
                    placeholder="Email"
                  />
                </Col>

                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <Input
                    name="password"
                    placeholder="Password"
                  />
                </Col>
              </Row>

              <ButtonsWrapper>
                <Form.Item>
                  <AntButton
                    type="primary"
                    htmlType="submit"
                    disabled={!isValid || !dirty}
                  >
                    Log in
                  </AntButton>
                </Form.Item>
              </ButtonsWrapper>
            </Card>
          </LoginPageCard>
        </PageForm>
      )}
    </Formik>
  );
};
