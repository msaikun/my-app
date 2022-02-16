import {
  useCallback,
  useEffect,
  useMemo,
  useState
}                                           from 'react';
import { useNavigate, useParams }           from 'react-router-dom';
import { useDispatch, useSelector }         from 'react-redux';
import { Formik }                           from 'formik';
import { pink }                             from '@mui/material/colors';
import { CardContent, Grid }                from '@material-ui/core';
import debounce                             from '@mui/material/utils/debounce';
import { contactFormSchema }                from './validation';
import { MenuBlock }                        from '../../Menu/Menu';
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
}                                          from '../../../shared/styles';
import { TextInputField }                  from '../../../shared/formFields/TextInputField/TextInputField';
import { IContact }                        from '../../../shared/interfaces';
import { createContact, editContact }      from '../../../../store/actions/contactsActions';
import { selectContacts }                  from '../../../../store/reducers/contactsReducer';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { contactId } = useParams();
  const data = useSelector(selectContacts);
  const [backgroundColor, setBackgroundColor] = useState<string>('');

  function getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    // eslint-disable-next-line no-promise-executor-return
    const timer = setInterval(() => new Promise((resolve) => setTimeout(() => resolve(getRandomColor()), 1000))
    .then((color) => {
      setBackgroundColor(color as string);
  
      return color
    }), 10000)
  
    return () => {
      clearInterval(timer)
    }
  }, [])
  
  const contact = useMemo(() => data && data.find((item) => item.id === contactId), [data, contactId]);

  const onCreate = useCallback(
    (values: IContact) => {
      dispatch(createContact(values));
      navigate('/contacts');
    },
    [createContact]
  );
  const debouncedContactCreate = debounce(onCreate, 2000);

  const onUpdate = useCallback(
    (values: IContact) => {
      dispatch(editContact(values, contactId));
      navigate('/contacts');
    },
    [editContact]
  );
  const debouncedContactUpdate = debounce(onUpdate, 2000);
  
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

  return (
    <>
      <MenuBlock />

      <Formik
        initialValues={contact || initialValues}
        validateOnBlur
        onSubmit={contact ? debouncedContactUpdate : debouncedContactCreate}
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
                <PageHeader title={contact 
                  ? `${contact.firstName} ${contact.lastName}`
                  : 'Create New Contact'} 
                />

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
                      defaultChecked={contact ? contact.isFavourite : undefined}
                      sx={{
                        color: pink[800],
                        '&.Mui-checked': {
                          color: pink[600],
                        },
                      }}
                    />
                    <p style={{backgroundColor}}>Add To Favourites</p>
                  </PageCheckboxWrapper>

                  {contact && (
                    <PageCheckboxWrapper>
                      <CheckboxEl
                        {...label}
                        name="isBlocked"
                        onChange={handleChange}
                        value={values.isBlocked}
                        defaultChecked={contact.isBlocked}
                        sx={{
                          color: pink[800],
                          '&.Mui-checked': {
                            color: pink[600],
                          },
                        }}
                      />
                      <p style={{backgroundColor}}>Is Blocked</p>
                    </PageCheckboxWrapper>
                  )}
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
                      {contact ? 'Save' : 'Submit'}
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
