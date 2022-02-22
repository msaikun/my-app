import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams }                    from 'react-router-dom';
import { useDispatch, useSelector }                  from 'react-redux';
import { Formik }                                    from 'formik';
import styled                                        from 'styled-components';
import debounce                                      from '@mui/material/utils/debounce';
import { Form, Row, Card, Col, Checkbox }            from 'antd';
import { contactFormSchema }                         from './validation';
import { MenuBlock }                                 from '../../menu/MenuBlock';
import { Input }                                     from '../../../shared/inputs/TextInput/TextInputAntD';
import { IContact }                                  from '../../../shared/interfaces';
import {
  AntButton,
  ButtonsWrapper,
  PageForm,
  PageHeader
}                                                    from '../../../shared/styles';
import {
  createContact,
  editContact,
}                                                    from '../../../../store/actions/contactsActions';
import { selectContacts }                            from '../../../../store/reducers/contactsReducer';

const UserPageCard = styled.div`&& {
  margin-top: 50px;

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

const PageCheckBoxesWrapper = styled.div`&& {
  display: flex;
  margin-top: 10px;
}`;

const PageCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
`;

const CheckboxText = styled.p`
  margin-left: 10px;
  font-size: 15px;
`;

export const ContactForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { contactId } = useParams();
  const data = useSelector(selectContacts);
  const [backgroundColor, setBackgroundColor] = useState<string>('');

  function getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    const timer = setInterval(
      () =>
        new Promise((resolve) =>
          // eslint-disable-next-line no-promise-executor-return
          setTimeout(() => resolve(getRandomColor()), 1000)
        ).then((color) => {
          setBackgroundColor(color as string);

          return color;
        }),
      10000
    );

    return () => {
      clearInterval(timer);
    };
  }, []);

  const contact = useMemo(
    () => data && data.find((item) => item.id === contactId),
    [data, contactId]
  );

  const onCreate = useCallback(
    (values: IContact) => {
      dispatch(createContact(values));
      navigate('/contacts');
    },
    [createContact]
  );
  const debouncedContactCreate = debounce(onCreate, 2000);

  const onUpdate = useCallback(
    (values: IContact) => {
      dispatch(editContact(values, contactId));
      navigate('/contacts');
    },
    [editContact]
  );
  const debouncedContactUpdate = debounce(onUpdate, 2000);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: '',
    isFavourite: false,
    isBlocked: false,
    id: '',
  };

  return (
    <>
      <MenuBlock />

      <Formik
        initialValues={contact || initialValues}
        validateOnBlur
        onSubmit={contact ? debouncedContactUpdate : debouncedContactCreate}
        validationSchema={contactFormSchema}
      >
        {({ values, handleChange, isValid, handleSubmit }) => (
          <PageForm onSubmitCapture={handleSubmit}>
            <UserPageCard>
              <PageHeader>
                {contact
                  ? `${contact.firstName} ${contact.lastName}`
                  : 'Create New Contact'}
              </PageHeader>

              <Card>
                <Row
                  gutter={24}
                  align="middle"
                  justify="center"
                >
                  <Col xs={{ span: 24 }} xl={{ span: 12 }}>
                    <Input
                      name="firstName"
                      onChange={handleChange}
                      value={values.firstName}
                      placeholder="First Name"
                    />
                  </Col>

                  <Col xs={{ span: 24 }} xl={{ span: 12 }}>
                    <Input
                      name="lastName"
                      onChange={handleChange}
                      value={values.lastName}
                      placeholder="Last Name"
                    />
                  </Col>

                  <Col xs={{ span: 24 }} xl={{ span: 12 }}>
                    <Input
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      placeholder="Email"
                    />
                  </Col>

                  <Col xs={{ span: 24 }} xl={{ span: 12 }}>
                    <Input
                      name="phone"
                      onChange={handleChange}
                      value={values.phone}
                      placeholder="Phone"
                    />
                  </Col>

                  <Col xs={{ span: 24 }}>
                    <Input
                      name="description"
                      onChange={handleChange}
                      value={values.description}
                      placeholder="Description"
                    />
                  </Col>
                </Row>

                <PageCheckBoxesWrapper>
                  <PageCheckboxWrapper>
                    <Checkbox
                      name="isFavourite"
                      onChange={handleChange}
                      defaultChecked={contact ? contact.isFavourite : undefined}
                    />
                    <CheckboxText style={{ color: backgroundColor }}>
                      Add To Favourites
                    </CheckboxText>
                  </PageCheckboxWrapper>

                  {contact && (
                    <PageCheckboxWrapper>
                      <Checkbox
                        name="isBlocked"
                        onChange={handleChange}
                        defaultChecked={contact.isBlocked}
                      />
                      <CheckboxText style={{ color: backgroundColor }}>
                        Is Blocked
                      </CheckboxText>
                    </PageCheckboxWrapper>
                  )}
                </PageCheckBoxesWrapper>

                <ButtonsWrapper>
                  <Form.Item>
                    <AntButton htmlType="submit" disabled={!isValid}>
                      {contact ? 'Save' : 'Submit'}
                    </AntButton>
                  </Form.Item>
                </ButtonsWrapper>
              </Card>
            </UserPageCard>
          </PageForm>
        )}
      </Formik>
    </>
  );
};
