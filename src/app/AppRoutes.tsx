import { Route, Routes, Navigate }   from 'react-router-dom';
import { ContactEdit }               from './Authorized/Contacts/ContactEdit/ContactEdit';
import { ContactPage }               from './Authorized/Contacts/ContactPage/ContactPage';
import { Contacts }                  from './Authorized/Contacts/Contacts';
import { ContactCreate }             from './Authorized/Contacts/ContactCreate/ContactCreate';
import { Login }                     from './Unauthorized/Login/Login';

const authToken = localStorage.getItem('token');
const baseRoute = authToken ? '/contacts' : '/login';

export const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/contacts/:contactId/edit" element={<ContactEdit />} />
    <Route path="/contacts/:contactId" element={<ContactPage />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/contacts/create" element={<ContactCreate />} />
    <Route path="*" element={<Navigate to={baseRoute} />} />
  </Routes>
);
