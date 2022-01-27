import { FastField }                                          from 'formik';
import styled, { css }                                        from 'styled-components';
import { CardHeader, CardActions, Button, CardContent, Card } from '@material-ui/core/';
import { Avatar }                                             from '@mui/material';
import Checkbox                                               from '@mui/material/Checkbox';
import ModalUnstyled                                          from '@mui/base/ModalUnstyled';
import FavoriteIcon                                           from '@mui/icons-material/Favorite';

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
  margin-top: 15px;
  margin-bottom: 40px;
  background-color: #000;
  color: #fff;

  &:hover {
    background-color: #e33141;
    font-weight: 600;
  }
}`;

export const BaseRoundBtnStyles = css`
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
  align-items: center;
  margin: 15px;
  background-color: #fff;
  border: 1px solid #aaabaa;
}`;

export const UserAllInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserMainInfo = styled.div`
  padding-left: 10px;
`;

export const ContactAvatar = styled(Avatar)`&& {
  margin: 10px;
}`;

export const TextInputWrapper = styled.div<{ hasLabel?: boolean, hasValue?: boolean, fullWidth?: boolean }>`&& {
  .MuiOutlinedInput-root {
    margin-top: ${({ hasLabel }) => hasLabel ? 30 : 0}px;
    background: ${({ hasValue }) => hasValue ? '#cbb48a21' : '#fafafa'};
     ${({ hasValue }) => hasValue ? '#e1e1e1' : 'transparent'}
  }
}`;

export const PageCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  margin-right: 10px;

  ${({ theme: { breakpoints } }: any) => breakpoints.up('lg')} {
    margin-left: 35px;
  }
`;

export const CheckboxEl = styled(Checkbox)`&& {
  margin-right: 5px;
}`;

export const PageInput = styled(FastField)`&& {
  margin-top: 30px;
}`;

export const PageInputWrapper = styled(Avatar)`&& {
  margin: 10px;
}`;

export const PageElementWrapper = styled.div`&& {
  ${({ theme: { breakpoints } }: any) => breakpoints.up('lg')} {
    display: flex;
    justify-content: space-between;
    margin-left: 30px;
    margin-right: 30px;
  }
}`;

export const PageCheckBoxesWrapper = styled.div`&& {
  display: flex;
  margin-left: 10px;
  margin-top: 10px;
}`;

export const UserPageCard = styled(Card)`&& {
  margin-top: 100px;

  ${({ theme: { breakpoints } }: any) => breakpoints.up('xs')} {
    width: 450px;
    height: 670px;
  }

  ${({ theme: { breakpoints } }: any) => breakpoints.up('md')} {
    width: 550px;
  }

  ${({ theme: { breakpoints } }: any) => breakpoints.up('lg')} {
    width: 800px;
    height: 500px;
  }
}`;

export const Backdrop = styled.div`
  position: fixed;
  z-index: -1;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  -webkit-tap-highlight-color: transparent;
`;

export const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LikeBtn = styled(FavoriteIcon)`&& {
  padding-left: 5px;
  color: #e33141;
}`;
