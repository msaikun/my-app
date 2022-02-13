import { useNavigate }                        from 'react-router-dom';
import { useCallback }                        from 'react';
import { useDispatch }                        from 'react-redux';
import { Formik }                             from 'formik';
import { pink }                               from '@mui/material/colors';
import { CardContent, Grid }                  from '@material-ui/core';
import { contactFormSchema }                  from './validation';
import { MenuBlock }                          from '../../Menu/Menu';
import {
  ButtonWrapper,
  PageHeader,
  PageForm,
  Btn,
  PageCheckboxWrapper,
  CheckboxEl,
  PageInput,
  PageCheckBoxesWrapper,
  UserPageCard,
  PageElementWrapper,
}                                             from '../../../shared/styles';
import { TextInputField }                     from '../../../shared/formFields/TextInputField/TextInputField';
import { IContact }                           from '../../../shared/interfaces';
import { createContact }                      from '../../../../store/actions/contactsActions';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  description: '',
  isFavourite: false,
  isBlocked: false,
  id: '',
};

export const ContactCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCreate = useCallback(
    (values: IContact) => {
      dispatch(createContact(values));
      navigate('/contacts');
    },
    [createContact],
  )

  return (
    <>
      <MenuBlock />

      <Formik
        initialValues={initialValues}
        validateOnBlur
        onSubmit={onCreate}
        validationSchema={contactFormSchema}
      >
        {({ values, handleChange, isValid, handleSubmit, dirty }) => (
          <PageForm onSubmit={handleSubmit}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <UserPageCard>
                <PageHeader title="Create New Contact" />

                <CardContent>
                  <PageElementWrapper>
                    <Grid 
                      item 
                      xs={12} 
                      lg={6}
                    >
                      <PageInput
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        value={values.firstName}
                        placeholder="First Name"
                        component={TextInputField}
                      />
                    </Grid>

                    <Grid item lg={1} />

                    <Grid
                      item
                      xs={12}
                      lg={6}
                    >
                      <PageInput
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        value={values.lastName}
                        placeholder="Last Name"
                        component={TextInputField}
                      />
                    </Grid>
                  </PageElementWrapper>

                  <PageElementWrapper>
                    <Grid
                      item
                      xs={12}
                      lg={6}
                    >
                      <PageInput
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        placeholder="Email"
                        component={TextInputField}
                      />
                    </Grid>

                    <Grid item lg={1} />

                    <Grid
                      item
                      xs={12}
                      lg={6}
                    >
                      <PageInput
                        type="tel"
                        name="phone"
                        onChange={handleChange}
                        value={values.phone}
                        placeholder="Phone"
                        component={TextInputField}
                      />
                    </Grid>
                  </PageElementWrapper>

                  <PageElementWrapper>
                    <Grid item xs={12}>
                      <PageInput
                        type="text"
                        name="description"
                        onChange={handleChange}
                        value={values.description}
                        placeholder="Description"
                        component={TextInputField}
                      />
                    </Grid>
                  </PageElementWrapper>
                </CardContent>

                <PageCheckBoxesWrapper>
                  <PageCheckboxWrapper>
                    <CheckboxEl
                      {...label}
                      name="isFavourite"
                      onChange={handleChange}
                      value={values.isFavourite}
                      sx={{
                        color: pink[800],
                        '&.Mui-checked': {
                          color: pink[600],
                        },
                      }}
                    />

                    <p>Add To Favourites</p>
                  </PageCheckboxWrapper>

                  {values.isBlocked && 
                    <PageCheckboxWrapper>
                      <CheckboxEl
                        {...label}
                        name="isBlocked"
                        onChange={handleChange}
                        value={values.isBlocked}
                        sx={{
                          color: pink[800],
                          '&.Mui-checked': {
                            color: pink[600],
                          },
                        }}
                      />

                      <p>Is Blocked</p>
                  </PageCheckboxWrapper>
                  }
                </PageCheckBoxesWrapper>

                <ButtonWrapper>
                  <Grid
                    item
                    xs={4}
                    lg={3}
                  >
                    <Btn
                      variant="contained"
                      fullWidth
                      color="primary"
                      disabled={!isValid && !dirty}
                      type="submit"
                    >
                      Submit
                    </Btn>
                  </Grid>
                </ButtonWrapper>
              </UserPageCard>
            </Grid>
          </PageForm>
        )}
      </Formik>
    </>
  );
};
