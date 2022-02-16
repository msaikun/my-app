import { Route, Routes, Navigate }   from 'react-router-dom';
import { useSelector }               from 'react-redux';
import { ContactForm }               from './Authorized/Contacts/ContactForm/ContactForm';
import { ContactPage }               from './Authorized/Contacts/ContactPage/ContactPage';
import { Contacts }                  from './Authorized/Contacts/Contacts';
import { Login }                     from './Unauthorized/Login/Login';
import { selectTokens }              from '../store/reducers/userReducer';

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

