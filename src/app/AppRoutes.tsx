import { Route, Routes, Navigate }   from 'react-router-dom';
import { useSelector }               from 'react-redux';
import { selectTokens }              from '../store/reducers/userReducer';
import { ContactForm }               from './authorized/contacts/ContactForm/ContactForm';
import { ContactPage }               from './authorized/contacts/ContactPage/ContactPage';
import { Contacts }                  from './authorized/contacts/Contacts';
import { Login }                     from './unauthorized/Login/Login';

export const AppRoutes = () => {
  const authToken = useSelector(selectTokens);
  const baseRoute = authToken ? '/contacts' : '/login';

  return (
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/contacts/:contactId/edit" element={<ContactForm />} />
    <Route path="/contacts/:contactId" element={<ContactPage />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/contacts/create" element={<ContactForm />} />
    <Route path="*" element={<Navigate to={baseRoute} />} />
  </Routes>
  )
}
