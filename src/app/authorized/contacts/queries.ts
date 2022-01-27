import axios, { AxiosResponse }    from 'axios';
import { useMutation, useQuery }   from 'react-query';
import { IContact }                from '../../shared/interfaces';

export const contactsInfo = (): AxiosResponse<IContact[]> | any => axios.get<IContact[]>('/api/v1/contacts')
  .then((response) => response.data)

export const useContactsInfo = () => useQuery('CONTACTS_INFO', () => contactsInfo());


export const contactInfo = (id: any): AxiosResponse<IContact> | any => axios.get<IContact>(`/api/v1/contacts/${id}`)
  .then((response) => response.data)

export const useContactInfo = (id: any) => useQuery('CONTACT_INFO', () => contactInfo(id));


export const contactCreate = (data: IContact): AxiosResponse<IContact> | any => axios.post<IContact>("/api/v1/contacts", {data})
  .then((response) => response)

export const useContactCreate = () => useMutation('CONTACT_CREATE', contactCreate)


export const contactDelete = (id: string): AxiosResponse<any> | any => axios.delete(`/api/v1/contacts/${id}`)

export const useContactDelete = () => useMutation('CONTACT_DELETE', contactDelete);


export const updateContactInfo = (data: IContact): AxiosResponse<IContact> | any => axios.put<IContact>(`/api/v1/contacts/${data.id}`, {data})

export const useUpdateContactInfo = () => useMutation('CONTACT_EDIT', updateContactInfo)
