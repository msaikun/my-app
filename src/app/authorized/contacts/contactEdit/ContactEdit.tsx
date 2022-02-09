import { useEffect }                            from 'react';
import { useNavigate, useParams }               from 'react-router-dom';
import { useDispatch, useSelector }             from 'react-redux';
import { Formik }                               from 'formik';
import { pink }                                 from '@mui/material/colors';
import { CardContent, Grid }                    from '@material-ui/core/';
import { contactFormSchema }                    from '../ContactCreate/validation';
import { MenuBlock }                            from '../../Menu/Menu';
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
}                                              from '../../../shared/styles';
import { TextInputField }                      from '../../../shared/formFields/TextInputField/TextInputField';
import { IContact, IState }                    from '../../../shared/interfaces';
import { editContact, getContacts }            from '../../../../store/Actions/contactsEctions';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const ContactEdit = () => {
  const { contactId } = useParams();
  const data = useSelector((state: IState) => state.contactsReducer.contacts)
  const contact = data && data.find(item => item.id === contactId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts()) 
  }, [dispatch]);

  const onUpdate = (values: IContact) => {
    dispatch(editContact(values, contactId));
    navigate('/contacts');
  };
  
  return (
    <>
      <MenuBlock />
  
      {contact && (
        <Formik
          initialValues={contact}
          validateOnBlur
          validationSchema={contactFormSchema}
          onSubmit={onUpdate}
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
                  <PageHeader title={`${contact.firstName} ${contact.lastName}`} />

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
                        defaultChecked={contact.isFavourite}
                        sx={{
                          color: pink[800],
                          '&.Mui-checked': {
                            color: pink[600],
                          },
                        }}
                      />
                      <p>Add To Favourites</p>
                    </PageCheckboxWrapper>

                    <PageCheckboxWrapper>
                      <CheckboxEl
                        {...label}
                        name="isBlocked"
                        onChange={handleChange}
                        defaultChecked={!!contact.isBlocked}
                        sx={{
                          color: pink[800],
                          '&.Mui-checked': {
                            color: pink[600],
                          },
                        }}
                      />
                      <p>Is Blocked</p>
                    </PageCheckboxWrapper>
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
                        Save
                      </Btn>
                    </Grid>
                  </ButtonWrapper>
                </UserPageCard>
              </Grid>
            </PageForm>
          )}
        </Formik>
      )}
    </>
  );
};
