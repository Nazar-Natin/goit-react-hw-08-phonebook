import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const signUp = async (data) => {
    const response = await axios.post('users/signup', data);
    console.log(response);
    return response.data;
};

export const logIn = async (data) => {
    const response = await axios.post('users/login', data);
    return response.data;
};

export const logOut = async (data) => {
    const response = await axios.post('users/logout', data);
    return response.data;
};


export const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    console.log(token);
}

export const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
}

export const fetchAllContacts = async () => {
    const response = await axios.get('contacts');
    console.log(response.data);
    return response.data;
};

export const addContact = async ({ name, number }) => {
    const response = await axios.post('contacts', { name, number });
    console.log(response.data);
    return response.data;
};

export const deleteContact = async (contactId) => {
    const response = await axios.delete(`contacts/${contactId}`);
    console.log(response.data);
    return response.data;
};
