const axios = require('axios');
// const baseUrl = 'https://appi-burger-queen-client.herokuapp.com/auth'
const baseUrl = 'http://nodejs-bq-api.herokuapp.com/auth'

export const postRequest = async (formData) => {
    const resp = await axios.post(baseUrl, formData); 
    if (resp.status === 200) {
        return resp;
    } else {
        throw new Error(`HTTP error! status: ${resp.message}`);
    }
    
}
