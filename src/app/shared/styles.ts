import { FastField }                                from "formik";
import styled, { css }                              from "styled-components";
import CardActions                                  from "@material-ui/core/CardActions";
import CardHeader                                   from "@material-ui/core/CardHeader";
import { Button }                                   from "@material-ui/core";
import { CardContent }                              from "@material-ui/core";
import { Avatar }                                   from "@mui/material";
import Checkbox                                     from "@mui/material/Checkbox";
import Card                                         from "@material-ui/core/Card";


export const ButtonWrapper = styled(CardActions)`&& {
  justify-content: center;
}`;

export const PageHeader = styled(CardHeader)`&& {
  text-align: center;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
}`;

export const PageForm = styled.form`
  margin: 0 auto;
`;

export const Btn = styled(Button)`&& {
  margin-top: 30px;
  margin-bottom: 40px;
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
  margin: 15px;
  background-color: #fff;
  border: 1px solid #aaabaa;
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

export const TextInputWrapper = styled.div<{ hasLabel?: boolean, hasValue?: boolean, fullWidth?: boolean }>`&& {
  .MuiOutlinedInput-root {
    margin-top: ${ ({ hasLabel }) => hasLabel ? 30 : 0 }px;
    background: ${ ({ hasValue }) => hasValue ? '#cbb48a21' : '#fafafa' };
     ${ ({ hasValue }) => hasValue ? '#e1e1e1' : 'transparent' }
  }
}`;

export const PageCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxEl = styled(Checkbox)`&& {
  margin-right: 5px;

  ${({ theme: { breakpoints } }: any) => breakpoints.up("lg")} {
    margin-left: 40px;
  }
}`;

export const PageInput = styled(FastField)`&& {
  margin-top: 20px;
}`;

export const PageInputWrapper = styled(Avatar)`&& {
  margin: 10px;
}`;

export const PageElementWrapper = styled.div`&& {
  ${({ theme: { breakpoints } }: any) => breakpoints.up("lg")} {
    display: flex;
    justify-content: space-between;
    margin-left: 30px;
    margin-right: 30px;
  }
}`;

export const PageCheckBoxesWrapper = styled.div`&& {
  display: flex;
}`;

export const UserPageCard = styled(Card)`&& {
  margin-top: 100px;

  ${({ theme: { breakpoints } }: any) => breakpoints.up("xs")} {
    width: 450px;
    height: 670px;
  }

  ${({ theme: { breakpoints } }: any) => breakpoints.up("md")} {
    width: 550px;
  }

  ${({ theme: { breakpoints } }: any) => breakpoints.up("lg")} {
  width: 800px;
  height: 500px;
  }
}`;