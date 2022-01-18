import { Box, Card, CardContent, Fab }       from "@material-ui/core";
import EditIcon                              from "@mui/icons-material/Edit";
import DeleteIcon                            from "@mui/icons-material/Delete";
import MenuBlock                             from "./../../menu/Menu";
import styled                                from 'styled-components';
import {
  BaseBtnStyles,
  UserContainer,
  UserAllInfo,
  UserMainInfo,
  ContactAvatar 
}                                            from "../../../shared/styles";

const ImportantContactInfo = styled.span`
  font-weight: 500,
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
  border: 2px dashed #f7f2f2;
  padding: 5px;
}`;

const ContactName = styled.h3`
  font-weight: 500,
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
}`;

export default function ContactId() {
  return (
    <>
      <MenuBlock />
      <Card>
        <ChangeContactContainer>
          <ContactName>Parker Rowe</ContactName>
          <ButtonsContainer>
            <ButtonContainer>
              <EditBtn
                color="primary"
                aria-label="edit"
              >
                <EditIcon />
              </EditBtn>
              <p>Edit Contact</p>
            </ButtonContainer>

            <ButtonContainer>
              <DeleteBtn
                color="primary"
                aria-label="delete"
              >
                <DeleteIcon />
              </DeleteBtn>
              <p>Delete Contact</p>
            </ButtonContainer>
          </ButtonsContainer>
        </ChangeContactContainer>
      </Card>

      <Card>
        <UserContainer>
          <UserAllInfo>
            <ContactAvatar
              sx={{ width: 56, height: 56 }}
            />
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
