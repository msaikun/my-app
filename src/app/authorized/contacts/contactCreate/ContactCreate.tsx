import { Formik }                     from 'formik';
import { MenuBlock }                  from '../../menu/Menu';
import { contactFormSchema }          from './validation';
import { Navigate }                   from 'react-router-dom';
import styled                         from 'styled-components';
import { Card, CardContent, Grid }    from '@material-ui/core';
import Switch                         from '@mui/material/Switch';
import {
  ButtonWrapper,
  PageHeader,
  PageForm,
  Btn,
  PageInput,
  SwitchWrapper,
  SwitchesGroup,
  SwitchElem
}                                     from '../../../../shared/styles';

const CreateUserPageCard = styled(Card)`&& {
  margin-top: 100px;
  min-width: 600px;
  min-height: 620px;

  ${ ({ theme: { breakpoints } }: any) => breakpoints.up('md') } {
    max-width: 700px;
  }

  ${ ({ theme: { breakpoints } }: any) => breakpoints.up('ld') } {
    max-width: 800px;
  }
}`;


export const ContactCreate = () => {
  return (
    <>
      <MenuBlock />
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          description: '',
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values);
          <Navigate to='/contacts' />;
        }}
        validationSchema={contactFormSchema}
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
              direction='column'
              justifyContent='center'
              alignItems='center'
              spacing={2}
            >
              <CreateUserPageCard>
                <PageHeader title='Create New Contact' />
                <CardContent>
                  <Grid item xs={12}>
                    <PageInput
                      error={Boolean(touched.firstName || errors.firstName)}
                      type={`text`}
                      name={`firstName`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      placeholder='First Name'
                      helperText={errors.firstName}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <PageInput
                      error={Boolean(touched.lastName || errors.lastName)}
                      type={`text`}
                      name={`lastName`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      placeholder='Last Name'
                      helperText={errors.lastName}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <PageInput
                      error={Boolean(errors.email)}
                      type={`email`}
                      name={`email`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder='Email'
                      helperText={errors.email}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <PageInput
                      error={Boolean(touched.phone || errors.phone)}
                      type={`tel`}
                      name={`phone`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      placeholder='Phone Number'
                      helperText={errors.phone}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <PageInput
                      error={Boolean(errors.description)}
                      type={`text`}
                      name={`description`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      placeholder='Description'
                      helperText={errors.description}
                      fullWidth
                    />
                  </Grid>
                </CardContent>

                <Grid item xs={12}>
                  <SwitchWrapper>
                    <SwitchesGroup aria-label='position' row>
                      <SwitchElem
                        value='end'
                        control={<Switch color='primary' />}
                        label='Add To Favourites'
                        labelPlacement='end'
                      />
                    </SwitchesGroup>
                  </SwitchWrapper>
                </Grid>

                <ButtonWrapper>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    lg={5}
                  >
                    <Btn
                      variant='contained'
                      fullWidth
                      color='primary'
                      disabled={!isValid && !dirty}
                      type={`submit`}
                    >
                      Submit
                    </Btn>
                  </Grid>
                </ButtonWrapper>
              </CreateUserPageCard>
            </Grid>
          </PageForm>
        )}
      </Formik>
    </>
  );
}
