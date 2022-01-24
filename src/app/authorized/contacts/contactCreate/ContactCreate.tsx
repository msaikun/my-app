import { Formik }              from "formik";
import { contactFormSchema }   from "./validation";
import { Navigate }            from "react-router-dom";
import { MenuBlock }           from "../../menu/Menu";
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
  // PageInputWrapper
}                              from "../../../shared/styles";
import { TextInputField }      from "../../../shared/formFields/TextInputField/TextInputField";
import { pink }                from "@mui/material/colors";
import { CardContent, Grid }   from "@material-ui/core";

//Для інпутів зникли марджини! Пофіксити! Також в компоненті Контакт Едіт!

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const ContactCreate = () => {
  return (
    <>
      <MenuBlock />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          description: "",
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values);
          <Navigate to="/contacts" />;
        }}
        validationSchema={contactFormSchema}
      >
        {({ values, handleChange, isValid, handleSubmit, dirty }) => (
          <PageForm onSubmit={handleSubmit}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
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
                        type={`text`}
                        name={`firstName`}
                        onChange={handleChange}
                        value={values.firstName}
                        placeholder="First Name"
                        component={TextInputField}
                      />
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      lg={6}
                    >
                      <PageInput
                        type={`text`}
                        name={`lastName`}
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
                        type={`email`}
                        name={`email`}
                        onChange={handleChange}
                        value={values.email}
                        placeholder="Email"
                        component={TextInputField}
                      />
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      lg={6}
                    >
                      <PageInput
                        type={`tel`}
                        name={`phone`}
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
                        type={`text`}
                        name={`description`}
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
                      defaultChecked
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                    <p>Add To Favourites</p>
                  </PageCheckboxWrapper>

                  <PageCheckboxWrapper>
                    <CheckboxEl
                      {...label}
                      defaultChecked
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
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
                      type={`submit`}
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
