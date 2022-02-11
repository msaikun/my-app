import React, { useCallback, useState }      from 'react';
import { Link, useNavigate }                 from 'react-router-dom';
import { useDispatch, useSelector }          from 'react-redux';
import styled                                from 'styled-components';
import { CardContent, Fab }                  from '@material-ui/core';
import AddIcon                               from '@mui/icons-material/Add';
import EditIcon                              from '@mui/icons-material/Edit';
import DeleteIcon                            from '@mui/icons-material/Delete';
import BlockIcon                             from '@mui/icons-material/Block';
import { InputLabel, MenuItem, FormControl } from '@mui/material/';
import Select, { SelectChangeEvent }         from '@mui/material/Select';
import { MenuBlock }                         from '../Menu/Menu';
import { DeleteContactModal }                from '../modal/DeleteContactModal/DeleteContactModal';
import {
  BaseRoundBtnStyles,
  UserContainer,
  UserAllInfo,
  UserMainInfo,
  ContactAvatar,
  Backdrop,
  StyledModal,
  LikeBtn,
}                                           from '../../shared/styles';
import { IContact }                         from '../../shared/interfaces';
import { getFiltredContacts }               from '../../../store/actions/contactsActions';
import { selectContacts }                   from '../../../store/reducers/contactsReducer';

const AddUserContainer = styled(CardContent)`&& {
  display: flex;
  justify-content: space-between;
  align-items: center;  
  padding: 10px;
  padding-left: 30px;
  margin: 15px;
  border: 1px solid #aaabaa;
  background-color: white;
  font-size: 19px;
}`;

const AddUser = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  font-weight: 500;
`;

const AddBtn = styled(Fab)`&& {
  ${BaseRoundBtnStyles}
  margin-right: 10px;
}`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 0;
`;

const EditBtn = styled(Fab)`&& {
  ${BaseRoundBtnStyles}
}`;

const DeleteBtn = styled(Fab)`&& {
  ${BaseRoundBtnStyles}
  margin-left: 10px;
}`;

const UserContainerStyled = styled(UserContainer)`&& {
  transition: all 0.3s;

  :hover {
    cursor: pointer;
    transform: scale(1.01);
    background-color: #ebebeb;
  }
}`;

const SelectWrapper = styled.div`&& {
  display: flex;
  flex-direction: column;
  width: 200px;
}`;

const FlexItem = styled(MenuItem)`&& {
  display: flex;
}`

const SelectInputsLabel = styled(InputLabel)`&& {
  left: -4px;
}`;

export const Contacts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [selectedContactId, setSelectedContactId] = useState<string>();
  const [modalOpen, setModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState<string | number>('all');
  const [selectOpen, setSelectOpen] = useState(false);
  const contacts = useSelector(selectContacts);

  const navigateToContact = (id: string) => navigate(`/contacts/${id}`);
  const navigateToContactEdit = (id: string) => {
    navigate(`/contacts/${id}/edit`);
  };

  const handleChange = (event: SelectChangeEvent<typeof sortBy>) => setSortBy(event.target.value);
  const handleSelectClose = () => setSelectOpen(false);
  const handleSelectOpen = () => setSelectOpen(true);

  const handleOpen = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    event.stopPropagation();
    setSelectedContactId(id);
    setModalOpen(true);
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setModalOpen(false);
    setSelectedContactId('');
  };

  const filterContacts = useCallback(
    (filterBy: string) => {
      dispatch(getFiltredContacts(filterBy));
    }, [getFiltredContacts]
  )
  
  return (
    <>
      <MenuBlock />

      <AddUserContainer>
        <SelectWrapper>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <SelectInputsLabel id="demo-controlled-open-select-label">Show</SelectInputsLabel>

            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={selectOpen}
              onClose={handleSelectClose}
              onOpen={handleSelectOpen}
              value={sortBy}
              label="Age"
              onChange={handleChange}
            >
              <FlexItem
                onClick={() => filterContacts('all')}
                value="all"
              >
                All contacts
              </FlexItem>

              <FlexItem
                onClick={() => filterContacts('favorites')}
                value="favorites"
              >
                Favorites contacts
              </FlexItem>

              <FlexItem
                onClick={() => filterContacts('blocked')}
                value="blocked"
              >
                Blocked contacts
              </FlexItem>
            </Select>
          </FormControl>
        </SelectWrapper>

        <AddUser>
          <Link to="/contacts/create">
            <AddBtn color="primary" aria-label="add">
              <AddIcon />
            </AddBtn>
          </Link>
  
          <p>Add New</p>
        </AddUser>
      </AddUserContainer>

      {contacts?.map(
        ({
          id,
          firstName,
          phone,
          lastName,
          isFavourite,
          isBlocked,
          avatar,
          email,
        }: IContact) => (
          <UserContainerStyled key={id} onClick={() => navigateToContact(id)}>
            <UserAllInfo>
              <ContactAvatar sx={{ width: 56, height: 56 }} src={avatar} />

              <UserMainInfo>
                <UserName>
                  <h4>{firstName} {lastName}</h4>
                  <span>{isFavourite && <LikeBtn fontSize="medium"/>}</span>
                  <span>{isBlocked && <BlockIcon fontSize="small" />}</span>
                </UserName>

                <p>{email}</p>
                <p>{phone}</p>
              </UserMainInfo>
            </UserAllInfo>

            <div>
              <Link to={`/contacts/${id}/edit`}>
                <EditBtn
                  color="secondary"
                  aria-label="edit"
                  onClick={(event) => {
                    event.stopPropagation();
                    navigateToContactEdit(id);
                  }}
                >
                  <EditIcon />
                </EditBtn>
              </Link>

              <DeleteBtn
                color="primary"
                aria-label="delete"
                type="button"
                onClick={(e) => handleOpen(e, id)}
              >
                <DeleteIcon />
              </DeleteBtn>

              <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={modalOpen && selectedContactId === id}
                onClose={handleClose}
                BackdropComponent={Backdrop}
              >
                <div>
                  <DeleteContactModal id={id} onClose={handleClose} />
                </div>
              </StyledModal>
            </div>
          </UserContainerStyled>
        )
      )}
    </>
  );
};
