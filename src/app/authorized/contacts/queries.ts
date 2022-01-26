import axios, { AxiosResponse } from "axios";
import { useMutation, useQuery } from "react-query";
import { IContact } from "../../shared/interfaces";

export const ContactsInfo = (): AxiosResponse<IContact[]> | any => {
  return axios
    .get<IContact[]>("/api/v1/contacts")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

export const useContactsInfo = () => useQuery('CONTACTS_INFO', () => ContactsInfo());

export const ContactInfo = (id: any): AxiosResponse<IContact> | any => {
  return axios
    .get<IContact>(`/api/v1/contacts/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

export const useContactInfo = (id: any) => useQuery('CONTACT_INFO', () => ContactInfo(id));

export const contactCreate = (data: IContact): AxiosResponse<IContact> | any => {
  const { id, createdAt, firstName, phone, lastName, avatar, description, isFavourite, email } = data;

  return axios
    .post<IContact>("/api/v1/contacts", {
      id, createdAt, firstName, phone, lastName, avatar, description, isFavourite, email
    })
    .then((response) => {
      localStorage.setItem('token', 'true');
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
}

export const contactDelete = (id: string): AxiosResponse<any> | any => {
  return axios
    .delete(`/api/v1/contacts/${id}`)
}

export const useContactDelete = () => useMutation('CONTACT_DELETE', contactDelete);


export const useContactCreate = () => useMutation('CONTACT_CREATE', contactCreate)

export const updateContactInfo = (data: IContact): AxiosResponse<IContact> | any => {
  const { id, createdAt, firstName, phone, lastName, avatar, description, isFavourite, email } = data;

  return axios
    .put<IContact>(`/api/v1/contacts/${id}`, {
      id, createdAt, firstName, phone, lastName, avatar, description, isFavourite, email
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
}

export const useUpdateContactInfo = () => useMutation('CONTACT_EDIT', updateContactInfo)
