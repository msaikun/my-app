import React, { useState }                   from 'react';
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
import { MenuBlock }                         from '../menu/MenuBlock';
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
import {
  setContactsFilter,
  setContactsSort,
}                                           from '../../../store/actions/contactsActions';
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

const SelectsWrapper = styled.div`&& {
  display: flex;
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
  const contacts = useSelector(selectContacts);
  
  const [selectedContactId, setSelectedContactId] = useState<string>();
  const [modalOpen, setModalOpen] = useState(false);
  const [filterContactsBy, setFilterContactsBy] = useState<string>('all');
  const [sortContactsBy, setSortContactsBy] = useState<string>('byNone');
  const [filterSelectOpen, setFilterSelectOpen] = useState(false);
  const [sortSelectOpen, setSortSelectOpen] = useState(false);

  const navigateToContact = (id: string) => navigate(`/contacts/${id}`);
  const navigateToContactEdit = (id: string) => {
    navigate(`/contacts/${id}/edit`);
  };

  const handleFilterChange = (event: SelectChangeEvent<typeof filterContactsBy>) => {
    const { value } = event.target;
    setFilterContactsBy(value);
    dispatch(setContactsFilter(value));
  }
  const handleSortChange = (event: SelectChangeEvent<typeof sortContactsBy>) => {
    const { value } = event.target;
    setSortContactsBy(value);
    dispatch(setContactsSort(value));
  }

  const handleFilterSelectClose = () => setFilterSelectOpen(false);
  const handleFilterSelectOpen = () => setFilterSelectOpen(true);

  const handleSortSelectClose = () => setSortSelectOpen(false);
  const handleSortSelectOpen = () => setSortSelectOpen(true);

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
  
  return (
    <>
      <MenuBlock />

      <AddUserContainer>
          <SelectsWrapper>
          <SelectWrapper>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
              <SelectInputsLabel id="demo-controlled-open-select-label">Show</SelectInputsLabel>

              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={filterSelectOpen}
                onClose={handleFilterSelectClose}
                onOpen={handleFilterSelectOpen}
                value={filterContactsBy}
                label="Filter"
                onChange={handleFilterChange}
              >
                <FlexItem
                  value="all"
                >
                  All contacts
                </FlexItem>

                <FlexItem
                  value="favourites"
                >
                  Favourites contacts
                </FlexItem>

                <FlexItem
                  value="blocked"
                >
                  Blocked contacts
                </FlexItem>
              </Select>
            </FormControl>
          </SelectWrapper>

          <SelectWrapper>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
              <SelectInputsLabel id="demo-controlled-open-select-label">Sort By</SelectInputsLabel>

              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={sortSelectOpen}
                onClose={handleSortSelectClose}
                onOpen={handleSortSelectOpen}
                value={sortContactsBy}
                label="Sort"
                onChange={handleSortChange}
              >
                <FlexItem
                  value="byNone"
                >
                  None
                </FlexItem>

                <FlexItem
                  value="byFirstName"
                >
                  First Name
                </FlexItem>

                <FlexItem
                  value="byLastName"
                >
                  Last Name
                </FlexItem>
              </Select>
            </FormControl>
          </SelectWrapper>
        </SelectsWrapper>

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
