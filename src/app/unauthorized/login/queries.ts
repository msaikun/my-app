import axios                     from "axios";
import { useNavigate }           from "react-router-dom";
import { ILoginForm }            from "../../../shared/interfaces";

export const signIn = (data: ILoginForm): void => {
  const navigate = useNavigate();
  const { email, password } = data;

  axios
    .post("https://61e029ae0f3bdb0017934e25.mockapi.io/api/v1/login", {
      email,
      password,
    })
    .then((response) => {
      console.log(response.data);
      navigate('/contacts');
    })
    .catch((error) => {
      console.error(error);
    });
}