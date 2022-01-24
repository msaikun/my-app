import styled          from "styled-components";
import Card            from "@material-ui/core/Card";
import CardContent     from "@material-ui/core/CardContent";
import Grid            from "@material-ui/core/Grid";
import DeleteIcon      from "@mui/icons-material/Delete";
import {
  ButtonWrapper,
  PageHeader,
  Btn,
}                      from "../../../shared/styles";

const DeletePageCard = styled(Card)`&& {
  margin-top: 100px;

  ${({ theme: { breakpoints } }: any) => breakpoints.up("xs")} {
    min-width: 500px;
    min-height: 280px;
  }

  ${({ theme: { breakpoints } }: any) => breakpoints.up("md")} {
    max-width: 600px;
  }

  ${({ theme: { breakpoints } }: any) => breakpoints.up("lg")} {
    max-width: 700px;
  }
}`;

const DeleteContactWarning = styled(CardContent)`&& {
  padding-top: 40px;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
}`;

export const DeleteContact = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <DeletePageCard>
        <PageHeader title="Delete Contact" />
        <DeleteContactWarning>
          Are you sure you want to delete this contact?
        </DeleteContactWarning>

        <ButtonWrapper>
          <Grid
            item
            xs={4}
            md={5}
          >
            <Btn
              variant="contained"
              fullWidth
              type={`button`}
            >
              Cancel
            </Btn>
          </Grid>

          <Grid 
            item
            xs={4}
            md={5}
          >
            <Btn
              variant="contained"
              fullWidth
              type={`button`}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Btn>
          </Grid>
        </ButtonWrapper>
      </DeletePageCard>
    </Grid>
  );
}
