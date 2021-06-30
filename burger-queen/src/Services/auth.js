const axios = require('axios');
// const baseUrl = 'https://appi-burger-queen-client.herokuapp.com/auth'
const baseUrl = 'http://localhost:3001/auth'

export const postRequest = async (formData) => {
    const resp = await axios.post(baseUrl, formData); 
    return resp;
}
