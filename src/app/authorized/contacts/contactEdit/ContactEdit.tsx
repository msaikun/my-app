import { useNavigate, useParams }               from 'react-router-dom';
import { Formik }                               from 'formik';
import { pink }                                 from '@mui/material/colors';
import { CardContent, Grid }                    from '@material-ui/core/';
import { contactFormSchema }                    from '../ContactCreate/validation';
import { MenuBlock }                            from '../../Menu/Menu';
import { useContactInfo, useUpdateContactInfo } from '../queries';
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
import { IContact }                            from '../../../shared/interfaces';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const ContactEdit = () => {
  const { contactId } = useParams();
  const { data } = useContactInfo(contactId);
  const { mutate: updateContact } = useUpdateContactInfo();
  const navigate = useNavigate();

  const onUpdate = (values: IContact) => {
    updateContact(values, {
      onSuccess: () => navigate('/contacts'),
    });
  };

  const initialValues = data && {
    id: `${data.id}`,
    firstName: `${data.firstName}`,
    lastName: `${data.lastName}`,
    email: `${data.email || ''}`,
    phone: `${data.phone}`,
    description: `${data.description}`,
    isFavourite: false,
    isBlocked: false,
  }
  
  return (
    <>
      <MenuBlock />
      {data && (
        <Formik
          initialValues={initialValues}
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
                  <PageHeader title="Parker Rowe" />

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
                        defaultChecked={Boolean(data.isFavourite)}
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
                        defaultChecked={Boolean(data.isBlocked)}
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
