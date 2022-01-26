import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { useContactDelete } from "../../contacts/queries";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { ButtonWrapper, PageHeader, Btn } from "../../../shared/styles";

const DeletePageCard = styled(Card)`
  && {
    margin-top: 100px;

    ${({ theme: { breakpoints } }: any) => breakpoints.up("xs")} {
      min-width: 500px;
      min-height: 250px;
    }

    ${({ theme: { breakpoints } }: any) => breakpoints.up("md")} {
      max-width: 600px;
    }

    ${({ theme: { breakpoints } }: any) => breakpoints.up("lg")} {
      max-width: 700px;
    }
  }
`;

const DeleteContactWarning = styled(CardContent)`
  && {
    padding-top: 40px;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const DeleteContact = ({
  id,
  onClose,
}: {
  id: string;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
}) => {
  const { mutate: deleteContact } = useContactDelete();
  const navigate = useNavigate();
  const onDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    deleteContact(id, {
      onSuccess: () => {
        navigate("/contacts");
        onClose(e);
      },
    });
  };

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
          <Grid item xs={4}>
            <Btn
              variant="contained"
              fullWidth
              type={`button`}
              onClick={onClose}
            >
              Cancel
            </Btn>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <Btn
              variant="contained"
              fullWidth
              type={`button`}
              startIcon={<DeleteIcon />}
              onClick={onDelete}
            >
              Delete
            </Btn>
          </Grid>
        </ButtonWrapper>
      </DeletePageCard>
    </Grid>
  );
};
