import { Route, Routes, Navigate } from "react-router-dom";
import { ContactEdit } from "./authorized/contacts/contactEdit/ContactEdit";
import { ContactIdPage } from "./authorized/contacts/contactIdPage/ContactIdPage";
import { Contacts } from "./authorized/contacts/Contacts";
import { ContactCreate } from "./authorized/contacts/contactCreate/ContactCreate";
import { Login } from "./unauthorized/login/Login";

const authToken = localStorage.getItem("token");
const baseRoute = authToken ? "/contacts" : "/login";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to={baseRoute} />} />
    <Route path="/login" element={<Login />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/contacts/:contactId" element={<ContactIdPage />} />
    <Route path="/contacts/:contactId/edit" element={<ContactEdit />} />
    <Route path="/contact/create" element={<ContactCreate />} />
  </Routes>
);
