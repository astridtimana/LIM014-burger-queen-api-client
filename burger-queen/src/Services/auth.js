const axios = require('axios');

export const postRequest = async (formData) => {
    const resp = await axios.post('http://localhost:3001/auth', formData); 
    return resp;
}

export const parseJwt = (prueba) => {
    var base64Url = prueba.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};
