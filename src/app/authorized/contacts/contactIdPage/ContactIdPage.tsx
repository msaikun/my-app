import * as React                        from 'react';
import { Link }                          from 'react-router-dom';
import styled                            from 'styled-components';
import { MenuBlock }                     from '../../menu/Menu';
import { DeleteContact }                 from '../deleteContact-modal/DeleteContact';
import { Box, Card, CardContent, Fab }   from '@material-ui/core';
import EditIcon                          from '@mui/icons-material/Edit';
import DeleteIcon                        from '@mui/icons-material/Delete';
import ModalUnstyled                     from '@mui/base/ModalUnstyled';
import {
  BaseBtnStyles,
  UserContainer,
  UserAllInfo,
  UserMainInfo,
  ContactAvatar,
}                                        from '../../../../shared/styles';

const ImportantContactInfo = styled.span`
  font-weight: 600;
`;

const ChangeContactContainer = styled(CardContent)`&& {
  display: flex;
  justify-content: space-between;
  margin-left: 15;
  padding-right: 25;
  font-weight: 500;
}`;

const ButtonsContainer = styled(Box)`&& {
  display: flex;
  border: 2px dashed #f2f2f2;
  padding: 5px;
}`;

const ContactName = styled.h3`
  font-weight: 500;
`;

const ButtonContainer = styled(Box)`&& {
  display: flex;
  align-items: center;
}`;

const EditBtn = styled(Fab)`&& {
  margin-right: 5px;
  ${BaseBtnStyles}
}`;

const DeleteBtn = styled(Fab)`&& {
  margin-right: 5px;
  margin-left: 10px;
  ${BaseBtnStyles}
`;

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export const ContactIdPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <MenuBlock />
      <Card>
        <ChangeContactContainer>
          <ContactName>Parker Rowe</ContactName>
          <ButtonsContainer>
            <ButtonContainer>
              <Link to='/contacts/:contactId/edit'>
                <EditBtn
                  color='primary'
                  aria-label='edit'
                  type='button'
                >
                  <EditIcon />
                </EditBtn>
              </Link>

              <p>Edit Contact</p>
            </ButtonContainer>

            <ButtonContainer>
              <DeleteBtn
                color='primary'
                aria-label='delete'
                type='button'
                onClick={handleOpen}
              >
                <DeleteIcon />
              </DeleteBtn>
              <p>Delete Contact</p>
              <StyledModal
                aria-labelledby='unstyled-modal-title'
                aria-describedby='unstyled-modal-description'
                open={open}
                onClose={handleClose}
                BackdropComponent={Backdrop}
              >
                <DeleteContact />
              </StyledModal>
            </ButtonContainer>
          </ButtonsContainer>
        </ChangeContactContainer>
      </Card>

      <Card>
        <UserContainer>
          <UserAllInfo>
            <ContactAvatar sx={{ width: 56, height: 56 }} />
            <UserMainInfo>
              <div>
                <ImportantContactInfo>Phone: </ImportantContactInfo>
                <span>948-295-0517</span>
              </div>
              <div>
                <ImportantContactInfo>Email: </ImportantContactInfo>
                <span>example@email.com</span>
              </div>
              <div>
                <ImportantContactInfo>Description: </ImportantContactInfo>
                <span>
                  Quis eos fuga. Voluptatem voluptates error molestias atque
                  pariatur rerum quia. Alias aut in expedita perferendis est aut
                  quo sit. Possimus quaerat architecto numquam ut architecto
                  saepe doloremque. Labore ut laudantium et sint.
                </span>
              </div>
            </UserMainInfo>
          </UserAllInfo>
        </UserContainer>
      </Card>
      <br />
    </>
  );
}
