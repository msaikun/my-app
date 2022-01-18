import { Formik }                          from "formik";
import MenuBlock                           from "./../../menu/Menu";
import { createContactFormSchema }         from "./validation";
import { Navigate }                        from "react-router-dom";
import styled                              from "styled-components";

// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Card                                from "@material-ui/core/Card";
import CardContent                         from "@material-ui/core/CardContent";
import Grid                                from "@material-ui/core/Grid";
import { 
  ButtonWrapper,
  PageHeader,
  PageForm,
  SubmitBtn,
  PageInput
}                                          from "../../../shared/styles";

const CreateUserPageCard = styled(Card)`&& {
  margin-top: 100px;
  min-width: 600px;
  min-height: 620px;

  @media (min-width: 900px) {
    width: 700px;
  }

  @media (min-width: 1200px) {
    width: 800px;
  }
}`;

//Add breakpoints instead of media-queries

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     card: {
//       marginTop: theme.spacing(12),
//       minWidth: 600,
//       minHeight: 620,
//       [theme.breakpoints.up("md")]: {
//         width: 700,
//       },
//       [theme.breakpoints.up("lg")]: {
//         width: 800,
//       },
//     },
//   })
// );

export default function Create() {
  // const classes = useStyles();

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
        validationSchema={createContactFormSchema}
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
              <CreateUserPageCard>
                <PageHeader
                  title="Create New Contact"
                />
                <CardContent>
                  <Grid item xs={12}>
                    <PageInput
                      error={Boolean(touched.firstName || errors.firstName)}
                      type={`text`}
                      name={`firstName`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      placeholder="First Name"
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
                      placeholder="Last Name"
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
                      placeholder="Email"
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
                      placeholder="Phone Number"
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
                      placeholder="Description"
                      helperText={errors.description}
                      fullWidth
                    />
                  </Grid>
                </CardContent>

                <ButtonWrapper>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    lg={5}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <SubmitBtn
                      variant="contained"
                      fullWidth
                      color="primary"
                      disabled={!isValid && !dirty}
                      type={`submit`}
                    >
                      Submit
                    </SubmitBtn>
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
