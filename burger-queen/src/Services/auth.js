const axios = require('axios');
// const baseUrl = 'https://appi-burger-queen-client.herokuapp.com/auth'
const baseUrl = 'http://localhost:8888/auth'

export const postRequest = async (formData) => {
    const resp = await axios.post(baseUrl, formData); 
   // if (resp.status !== 200) {
   //     return new Error('Error');
   // }
    return resp;
    
}
