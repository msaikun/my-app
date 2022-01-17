import * as React from "react";
import { useEffect } from "react";

import { Menu, MenuItem, ListItemIcon } from "@mui/material";
import { Box, Avatar, Divider, IconButton, Typography } from "@mui/material";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Card, CardContent, Fab } from "@material-ui/core";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getUser } from "./../../api/api";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menu: {
      height: 70,
      backgroundColor: "#000",
      color: "#fff",
    },
    userContainer: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "#f7f2f2",
    },
    userAllInfo: {
      display: "flex",
    },
    usermainInfo: {
      paddingLeft: 10,
    },
    userName: {
      display: "flex",
      alignItems: "center",
      fontSize: 20,
      marginBottom: 0,
    },
    addUserContainer: {
      display: "flex",
      justifyContent: "space-between",
      paddingRight: 25,
    },
    addUser: {
      display: "flex",
      alignItems: "center",
      padding: 5,
    },
    userAvatar: {
      marginRight: 10,
    },
    contactAvatar: {
      margin: 10,
    },
    addBtn: {
      height: 40,
      width: 40,
      marginRight: 10,
      background: "#e33141",
      "&:hover": {
        background: "#fff",
        color: "#e33141",
      },
    },
    editBtn: {
      height: 40,
      width: 40,
      margin: "15px 5px",
      background: "#e33141",
      "&:hover": {
        background: "#fff",
        color: "#e33141",
      },
    },
    likeBtn: {
      paddingLeft: 5,
      color: "#e33141",
    },
  })
);

export default function Contacts() {
  useEffect(() => {
    findUser()
  });

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const findUser = async () => {
    const result = await getUser();
    console.log(result);
  };
  return (
    <>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}
        className={classes.menu}
      >
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar className={classes.userAvatar}></Avatar>
        </IconButton>
        <Typography sx={{ minWidth: 100 }}>User Name</Typography>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <Divider />

        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      <Card>
        <CardContent className={classes.addUserContainer}>
          <h3>CONTACTS</h3>
          <div className={classes.addUser}>
            <Fab color="primary" aria-label="add" className={classes.addBtn}>
              <AddIcon />
            </Fab>
            <p>Add New</p>
          </div>
        </CardContent>

        <Card>
          <CardContent className={classes.userContainer}>
            <div className={classes.userAllInfo}>
              <Avatar
                sx={{ width: 56, height: 56 }}
                className={classes.contactAvatar}
              />
              <div className={classes.usermainInfo}>
                <div className={classes.userName}>
                  <h4>Parker Rowe</h4>
                  <span>
                    <FavoriteIcon className={classes.likeBtn} />
                  </span>
                </div>
                <p>example@email.com</p>
                <p>948-295-0517</p>
              </div>
            </div>
            <Fab
              color="secondary"
              aria-label="edit"
              className={classes.editBtn}
            >
              <EditIcon />
            </Fab>
          </CardContent>
        </Card>
        <br />

        <Card>
          <CardContent className={classes.userContainer}>
            <div className={classes.userAllInfo}>
              <Avatar
                sx={{ width: 56, height: 56 }}
                className={classes.contactAvatar}
              />
              <div className={classes.usermainInfo}>
                <div className={classes.userName}>
                  <h4>Carolanne Schultz</h4>
                  <span>
                    <FavoriteIcon className={classes.likeBtn} />
                  </span>
                </div>
                <p>example@email.com</p>
                <p>793-487-5353</p>
              </div>
            </div>
            <Fab
              color="secondary"
              aria-label="edit"
              className={classes.editBtn}
            >
              <EditIcon />
            </Fab>
          </CardContent>
        </Card>
        <br />

        <Card>
          <CardContent className={classes.userContainer}>
            <div className={classes.userAllInfo}>
              <Avatar
                sx={{ width: 56, height: 56 }}
                className={classes.contactAvatar}
              />
              <div className={classes.usermainInfo}>
                <div className={classes.userName}>
                  <h4>Brent Herzog</h4>
                </div>
                <p>784-307-0995</p>
              </div>
            </div>
            <Fab
              color="secondary"
              aria-label="edit"
              className={classes.editBtn}
            >
              <EditIcon />
            </Fab>
          </CardContent>
        </Card>
      </Card>
    </>
  );
}
