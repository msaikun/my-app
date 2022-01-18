import styled, { css }            from "styled-components";
import CardActions                from "@material-ui/core/CardActions";
import CardHeader                 from "@material-ui/core/CardHeader";
import TextField                  from "@material-ui/core/TextField";
import Button                     from "@material-ui/core/Button";
import { CardContent }            from "@material-ui/core";
import { Avatar }                 from "@mui/material";

export const ButtonWrapper = styled(CardActions)`
&& {
    justify-content: center;
  }
`;

export const PageHeader = styled(CardHeader)`&& {
  text-align: center;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
}
`;

export const PageInput = styled(TextField)`
&& {
  margin-top: 30px;
}
`;

export const PageForm = styled.form`
  margin: 0 auto;
`;

export const SubmitBtn = styled(Button)`
&& {
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #000;
  color: #fff;
  &:hover {
    background-color: #e33141;
    font-weight: 600;
  }
}
`;

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
  background-color: #f7f2f2;
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