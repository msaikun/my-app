import { Route, Routes }      from "react-router-dom";
import Contacts               from "./../contacts/Contacts";
import ContactId              from "./../contacts/contactId/ContactId";
import Login                  from "../unauthorized/login/Login";
import Create                 from "../contacts/create/Create";
import ContactEdit            from "../contacts/contactEdit/ContactEdit";

export const AuthRoutes = () => (
  <Routes>
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/contacts/:contactId" element={<ContactId />} />
    <Route path="/contacts/:contactId/edit" element={<ContactEdit />} />
    <Route path="/contact/create" element={<Create />} />
    <Route path="/" element={<Login />} />
  </Routes>
);
