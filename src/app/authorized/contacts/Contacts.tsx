import styled                     from 'styled-components';
import { CardContent, Fab } from '@material-ui/core';
import AddIcon                    from '@mui/icons-material/Add';
import EditIcon                   from '@mui/icons-material/Edit';
import FavoriteIcon               from '@mui/icons-material/Favorite';
import DeleteIcon                        from '@mui/icons-material/Delete';
import { MenuBlock }              from '../menu/Menu';
import {
  BaseBtnStyles,
  UserContainer,
  UserAllInfo,
  UserMainInfo,
  ContactAvatar
}                                 from '../../shared/styles';

const AddUserContainer = styled(CardContent)`&& {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 15px;
  border: 1px solid #aaabaa;
  background-color: white;
  font-size: 19px;
}`;

const AddUser = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
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
  // margin: 15px 5px;
  ${BaseBtnStyles}
}`;

const DeleteBtn = styled(Fab)`&& {
  // margin-right: 5px;
  margin-left: 10px;
  ${BaseBtnStyles}
`;

export const Contacts = () => {
  return (
    <>
      <MenuBlock />
      <div>
        <AddUserContainer>
          <h3>CONTACTS</h3>
          <AddUser>
            <AddBtn color='primary' aria-label='add'>
              <AddIcon />
            </AddBtn>
            <p>Add New</p>
          </AddUser>
        </AddUserContainer>

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
            <div>
            <EditBtn
              color='secondary'
              aria-label='edit'
            >
              <EditIcon />
            </EditBtn>        
            <DeleteBtn
                color='primary'
                aria-label='delete'
                type='button'
                // onClick={handleOpen}
              >
                <DeleteIcon />
              </DeleteBtn>
            </div>
          </UserContainer>

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
            <div>
            <EditBtn
              color='secondary'
              aria-label='edit'
            >
              <EditIcon />
            </EditBtn>
            <DeleteBtn
                color='primary'
                aria-label='delete'
                type='button'
                // onClick={handleOpen}
              >
                <DeleteIcon />
              </DeleteBtn>
            </div>
          </UserContainer>

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
            <div>
            <EditBtn
              color='secondary'
              aria-label='edit'
            >
              <EditIcon />
            </EditBtn>

            <DeleteBtn
                color='primary'
                aria-label='delete'
                type='button'
                // onClick={handleOpen}
              >
                <DeleteIcon />
              </DeleteBtn>
            </div>
          </UserContainer>
        </div>
    </>
  );
}
