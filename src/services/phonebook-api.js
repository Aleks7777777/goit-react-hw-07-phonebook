import axios from 'axios';

const contactService = axios.create({
	baseURL: 'https://63f6713dab76703b15bf6aa7.mockapi.io/',
});

export const getContacts = async () => {
	const { data } = await contactService.get('Contacts/');
	return data;
};

export const addContacts = async contact => {
	const { data } = await contactService.post('Contacts/', contact);
	return data;
};


export const deleteContacts = async id => {
	const { data } = await contactService.delete(`Contacts/${id}`);
	return data;
};