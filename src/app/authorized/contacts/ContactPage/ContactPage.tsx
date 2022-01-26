import { useState }                    from "react";
import { Link, useParams }             from "react-router-dom";
import { useContactInfo }              from "../queries";
import { MenuBlock }                   from "../../menu/Menu";
import { DeleteContact }               from "../../modal/DeleteContact/DeleteContact";
import {
  BaseBtnStyles,
  UserContainer,
  UserAllInfo,
  UserMainInfo,
  ContactAvatar,
  Backdrop,
  StyledModal,
}                                      from "../../../shared/styles";
import styled                          from "styled-components";
import { Box, CardContent, Fab }       from "@material-ui/core";
import EditIcon                        from "@mui/icons-material/Edit";
import DeleteIcon                      from "@mui/icons-material/Delete";

const ElementsWrapper = styled(UserContainer)`&& {
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const ImportantContactInfo = styled.span`
  font-weight: 600;
`;

const ChangeContactContainer = styled(CardContent)`
  && {
    margin: 15px;
    padding-right: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    background-color: white;
    border: 1px solid #aaabaa;
  }
`;

const ButtonsContainer = styled(Box)`
  && {
    display: flex;
    padding: 5px;
    border: 2px dashed #f2f2f2;
  }
`;

const ContactName = styled.h3`
  padding-left: 15px;
  font-weight: 600;
`;

const ButtonContainer = styled(Box)`
  && {
    display: flex;
    align-items: center;
  }
`;

const EditBtn = styled(Fab)`
  && {
    margin-right: 5px;
    ${BaseBtnStyles}
  }
`;

const DeleteBtn = styled(Fab)`&& {
  margin-right: 5px;
  margin-left: 10px;
  ${BaseBtnStyles}
`;

export const ContactPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { contactId } = useParams();
  const { data } = useContactInfo(contactId);

  return (
    <>
      <MenuBlock />
      {data && (
        <div key={data.id}>
          <ChangeContactContainer>
            <ContactName>
              {data.firstName} {data.lastName}
            </ContactName>
            <ButtonsContainer>
              <ButtonContainer>
                <Link to={`/contacts/${data.id}/edit`}>
                  <EditBtn color="primary" aria-label="edit" type="button">
                    <EditIcon />
                  </EditBtn>
                </Link>
                <p>Edit Contact</p>
              </ButtonContainer>

              <ButtonContainer>
                <DeleteBtn
                  color="primary"
                  aria-label="delete"
                  type="button"
                  onClick={handleOpen}
                >
                  <DeleteIcon />
                </DeleteBtn>
                <p>Delete Contact</p>
                <StyledModal
                  aria-labelledby="unstyled-modal-title"
                  aria-describedby="unstyled-modal-description"
                  open={open}
                  onClose={handleClose}
                  BackdropComponent={Backdrop}
                >
                  <DeleteContact id={data.id} onClose={handleClose} />
                </StyledModal>
              </ButtonContainer>
            </ButtonsContainer>
          </ChangeContactContainer>

          <ElementsWrapper>
            <UserAllInfo>
              <ContactAvatar sx={{ width: 56, height: 56 }} src={data.avatar} />
              <UserMainInfo>
                <div>
                  <ImportantContactInfo>Phone: </ImportantContactInfo>
                  <span>{data.phone}</span>
                </div>
                {data.email && (
                  <div>
                    <ImportantContactInfo>Email: </ImportantContactInfo>
                    <span>{data.email}</span>
                  </div>
                )}
                {data.description && (
                  <div>
                    <ImportantContactInfo>Description: </ImportantContactInfo>
                    <span>{data.description}</span>
                  </div>
                )}
              </UserMainInfo>
            </UserAllInfo>
          </ElementsWrapper>
        </div>
      )}
      <br />
    </>
  );
};
