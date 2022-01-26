import { Route, Routes, Navigate } from "react-router-dom";
import { ContactEdit } from "./authorized/contacts/ContactEdit/ContactEdit";
import { ContactPage } from "./authorized/contacts/ContactPage/ContactPage";
import { Contacts } from "./authorized/contacts/Contacts";
import { ContactCreate } from "./authorized/contacts/ContactCreate/ContactCreate";
import { Login } from "./unauthorized/Login/Login";

const authToken = localStorage.getItem("token");
const baseRoute = authToken ? "/contacts" : "/login";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to={baseRoute} />} />
    <Route path="/login" element={<Login />} />
    <Route path="/contacts/:contactId/edit" element={<ContactEdit />} />
    <Route path="/contacts/:contactId" element={<ContactPage />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/contacts/create" element={<ContactCreate />} />
    <Route path="*" element={<Navigate to={baseRoute} />} />
  </Routes>
);
