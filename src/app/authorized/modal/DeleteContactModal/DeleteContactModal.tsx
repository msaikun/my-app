import React, { MouseEventHandler }       from 'react';
import { useNavigate }                    from 'react-router-dom';
import styled                             from 'styled-components';
import { Card, CardContent, Grid }        from '@material-ui/core/';
import DeleteIcon                         from '@mui/icons-material/Delete';
import { useContactDelete }               from '../../Contacts/queries';
import { ButtonWrapper, PageHeader, Btn } from '../../../shared/styles';

const DeletePageCard = styled(Card)`&& {
  margin-top: 100px;

  ${({ theme: { breakpoints } }: any) => breakpoints.up('xs')} {
    min-width: 500px;
    min-height: 250px;
  }

  ${({ theme: { breakpoints } }: any) => breakpoints.up('md')} {
    max-width: 600px;
  }

  ${({ theme: { breakpoints } }: any) => breakpoints.up('lg')} {
    max-width: 700px;
  }
}`;

const DeleteContactWarning = styled(CardContent)`&& {
  padding-top: 40px;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
}`;

export const DeleteContactModal = ({
  id,
  onClose,
}: {
  id: string;
  // eslint-disable-next-line no-unused-vars
  onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  const { mutate: deleteContact } = useContactDelete();
  const navigate = useNavigate();

  const onDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    deleteContact(id, {
      onSuccess: () => {
        navigate('/contacts');
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
              type="button"
              onClick={onClose}
            >
              Cancel
            </Btn>
          </Grid>

          <Grid item xs={1} />

          <Grid item xs={4}>
            <Btn
              variant="contained"
              fullWidth
              type="button"
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
