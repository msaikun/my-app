import styled, { css }                              from "styled-components";
import CardActions                                  from "@material-ui/core/CardActions";
import CardHeader                                   from "@material-ui/core/CardHeader";
import { TextField, Button }                        from "@material-ui/core";
import { CardContent }                              from "@material-ui/core";
import { Avatar }                                   from "@mui/material";
import { FormGroup, FormControlLabel, FormControl } from "@mui/material";

export const ButtonWrapper = styled(CardActions)`&& {
  justify-content: center;
}`;

export const PageHeader = styled(CardHeader)`&& {
  text-align: center;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
}`;

export const PageInput = styled(TextField)`&& {
  margin-top: 30px;
}`;

export const PageForm = styled.form`
  margin: 0 auto;
`;

export const Btn = styled(Button)`&& {
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #000;
  color: #fff;
  &:hover {
    background-color: #e33141;
    font-weight: 600;
  }
}`;

export const BaseBtnStyles = css`
  height: 40px;
  width: 40px;
  background: #e33141;
  &:hover {
    background: #fff;
    color: #e33141;
  };
`;

export const UserContainer = styled(CardContent)`&& {
  display: flex;
  justify-content: space-between;
  background-color: #f7f7f7;
  border: 2px dashed #aaabaa;
}`;

export const UserAllInfo = styled.div`
  display: flex;
`;

export const UserMainInfo = styled.div`
  padding-left: 10px;
`;

export const ContactAvatar = styled(Avatar)`&& {
  margin: 10px;
}`;

export const SwitchWrapper = styled(FormControl)`&& {
  margin-left: 15px;
}`;

export const SwitchesGroup = styled(FormGroup)`&& {
  display: flex;
  margin-top: 20px;
  border: 2px dashed #000;
  padding: 5px;
}`;

export const SwitchElem = styled(FormControlLabel)`&& {
  padding: 5px;
}`;
