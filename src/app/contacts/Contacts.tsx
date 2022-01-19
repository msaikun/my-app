import { useEffect }              from "react";
import styled                     from "styled-components";
import { Card, CardContent, Fab } from "@material-ui/core";
import AddIcon                    from "@mui/icons-material/Add";
import EditIcon                   from "@mui/icons-material/Edit";
import FavoriteIcon               from "@mui/icons-material/Favorite";
import { getUser }                from "./../../api/api";
import MenuBlock                  from "../menu/Menu";
import {
  BaseBtnStyles,
  UserContainer,
  UserAllInfo,
  UserMainInfo,
  ContactAvatar
}                                from "../../shared/styles";

const AddUserContainer = styled(CardContent)`&& {
  display: flex;
  justify-content: space-between;
  padding-right: 25px;
}`;

const AddUser = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 2px dashed #f7f2f2;
  fontWeight: 500;
`;

const AddBtn = styled(Fab)`&& {
  margin-right: 10px;
  ${BaseBtnStyles}
}`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 0;
`;

const LikeBtn = styled(FavoriteIcon)`&& {
  padding-left: 5px;
  color: #e33141;
}`;

const EditBtn = styled(Fab)`&& {
  margin: 15px 5px;
  ${BaseBtnStyles}
}`;

export default function Contacts() {
  useEffect(() => {
    findUser();
  });

  const findUser = async () => {
    const result = await getUser();
    console.log(result);
  };
  return (
    <>
      <MenuBlock />
      <Card>
        <AddUserContainer>
          <h3>CONTACTS</h3>
          <AddUser>
            <AddBtn color="primary" aria-label="add">
              <AddIcon />
            </AddBtn>
            <p>Add New</p>
          </AddUser>
        </AddUserContainer>

        <Card>
          <UserContainer>
            <UserAllInfo>
              <ContactAvatar
                sx={{ width: 56, height: 56 }}
              />
              <UserMainInfo>
                <UserName>
                  <h4>Parker Rowe</h4>
                  <span>
                    <LikeBtn />
                  </span>
                </UserName>
                <p>example@email.com</p>
                <p>948-295-0517</p>
              </UserMainInfo>
            </UserAllInfo>
            <EditBtn
              color="secondary"
              aria-label="edit"
            >
              <EditIcon />
            </EditBtn>
          </UserContainer>
        </Card>
        <br />

        <Card>
          <UserContainer>
            <UserAllInfo>
              <ContactAvatar
                sx={{ width: 56, height: 56 }}
              />
              <UserMainInfo>
                <UserName>
                  <h4>Carolanne Schultz</h4>
                  <span>
                    <LikeBtn />
                  </span>
                </UserName>
                <p>example@email.com</p>
                <p>793-487-5353</p>
              </UserMainInfo>
            </UserAllInfo>
            <EditBtn
              color="secondary"
              aria-label="edit"
            >
              <EditIcon />
            </EditBtn>
          </UserContainer>
        </Card>
        <br />

        <Card>
          <UserContainer>
            <UserAllInfo>
              <ContactAvatar
                sx={{ width: 56, height: 56 }}
              />
              <UserMainInfo>
                <UserName>
                  <h4>Brent Herzog</h4>
                </UserName>
                <p>784-307-0995</p>
              </UserMainInfo>
            </UserAllInfo>
            <EditBtn
              color="secondary"
              aria-label="edit"
            >
              <EditIcon />
            </EditBtn>
          </UserContainer>
        </Card>
      </Card>
    </>
  );
}
