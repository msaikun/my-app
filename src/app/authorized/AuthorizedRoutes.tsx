import { Route }        from "react-router-dom";
import Contacts         from "./../contacts/Contacts";

export const AuthRoutes = () => {
  <>
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/" element={<p>Page not found</p>} />
  </>;
};
