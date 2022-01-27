import * as React                                       from 'react';
import { Link }                                         from 'react-router-dom';
import styled                                           from 'styled-components';
import {
  Menu,
  MenuItem,
  ListItemIcon,
  Box,
  Avatar,
  Divider,
  IconButton,
  Typography
}                                                       from '@mui/material';
import PersonAdd                                        from '@mui/icons-material/PersonAdd';
import Logout                                           from '@mui/icons-material/Logout';

const MenuEl = styled(Box)`&& {
  height: 70px;
  background-color: #000;
  color: #fff;
}`;

const UserAvatar = styled(Avatar)`&& {
  margin-right: 10px;
}`;

const MenuSettingsIcon = styled(ListItemIcon)`&& {
  margin-top: 5px;
}`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: center;
  padding: 10px;
`;

const MenuSettingText = styled.p`
  padding-right: 101px;
`;

const AddAnotherAcc = styled(MenuItem)`&& {
  padding-bottom: 4px;
  padding-top: 4px;
}`;

export const MenuBlock = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MenuEl
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
      >
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <UserAvatar />
        </IconButton>
        <Typography sx={{ minWidth: 100 }}>User Name</Typography>
      </MenuEl>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.8,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 25,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Wrapper>
          <MenuItem>
            <UserAvatar /> 
            <MenuSettingText>Profile</MenuSettingText>
          </MenuItem>
        </Wrapper>
        <Divider />

        <Wrapper>
          <MenuItem>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            <AddAnotherAcc>Add another account</AddAnotherAcc>
          </MenuItem>
          
          <MenuItem>
            <MenuSettingsIcon>
              <Link to="/">
                <Logout fontSize="small" />
              </Link>
            </MenuSettingsIcon>
            <MenuSettingText>Logout</MenuSettingText>
          </MenuItem>
        </Wrapper>
      </Menu>
    </>
  );
};
