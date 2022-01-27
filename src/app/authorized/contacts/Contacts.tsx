import React, { useState }                   from 'react';
import { Link, useNavigate }                 from 'react-router-dom';
import AddIcon                               from '@mui/icons-material/Add';
import styled                                from 'styled-components';
import { CardContent, Fab }                  from '@material-ui/core';
import EditIcon                              from '@mui/icons-material/Edit';
import DeleteIcon                            from '@mui/icons-material/Delete';
import BlockIcon                             from '@mui/icons-material/Block';
import { InputLabel, MenuItem, FormControl } from '@mui/material/';
import Select, { SelectChangeEvent }         from '@mui/material/Select';
import Button                                from '@mui/material/Button';
import { MenuBlock }                         from '../Menu/Menu';
import { DeleteContactModal }                from '../modal/DeleteContactModal/DeleteContactModal';
import { useContactsInfo }                   from './queries';
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
  margin-left: 30px;
}`;

export const Contacts = () => {
  const [selectedContactId, setSelectedContactId] = useState<string>();
  const [open, setOpen] = useState(false);
  const [sortBy, setSortBy] = useState<string | number>('');
  const [selectOpen, setSelectOpen] = useState(false);
  const { data } = useContactsInfo();
  const navigate = useNavigate();
  const navigateToContact = (id: string) => navigate(`/contacts/${id}`);
  const navigateToContactEdit = (id: string) => {
    navigate(`/contacts/${id}/edit`);
  };

  const handleChange = (event: SelectChangeEvent<typeof sortBy>) => setSortBy(event.target.value);
  const handleSelectClose = () => setSelectOpen(false);
  const handleSelectOpen = () => setSelectOpen(true);

  const handleOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    setSelectedContactId(id);
    setOpen(true);
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setOpen(false);
    setSelectedContactId('');
  };
  
  // useEffect(() => {
  //   if (!handleOpen) {
  //     setOpen(open);
  //   }
  // }, [open]);

  // Fix rerending contacts page after deleting contact!!!!! 
  // Contact disappears only after the page is reloaded

  return (
    <>
      <MenuBlock />
      <AddUserContainer>
        <h3>CONTACTS</h3>

        <AddUser>
          <Link to="/contacts/create">
            <AddBtn color="primary" aria-label="add">
              <AddIcon />
            </AddBtn>
          </Link>
          <p>Add New</p>
        </AddUser>
      </AddUserContainer>

{/* Fix the look of select on page, add functionality!!!! */}

      <SelectWrapper>
        <Button
          sx={{ display: 'block', mt: 1, ml: 1 }}
          onClick={handleSelectOpen}
        >
          Contacts
        </Button>

        <FormControl sx={{ m: 0, minWidth: 150 }}>
          <InputLabel id="demo-controlled-open-select-label">SORT BY</InputLabel>

          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={selectOpen}
            onClose={handleSelectClose}
            onOpen={handleSelectOpen}
            value={sortBy}
            label="Users Soted By"
            onChange={handleChange}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="favourities">Favourities</MenuItem>
            <MenuItem value="blocked">Blocked</MenuItem>
          </Select>
        </FormControl>
      </SelectWrapper>

      {data?.map(
        ({
          id,
          firstName,
          phone,
          lastName,
          avatar,
          isFavourite,
          isBlocked,
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
                open={open && selectedContactId === id}
                onClose={handleClose}
                BackdropComponent={Backdrop}
              >
                <div><DeleteContactModal id={id} onClose={handleClose} /></div>
              </StyledModal>
            </div>
          </UserContainerStyled>
        )
      )}
    </>
  );
};
