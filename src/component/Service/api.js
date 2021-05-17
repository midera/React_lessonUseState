import axios from 'axios';

const options = {
    baseURL: 'https://api.sampleapis.com/futurama'
};
let axiosInstance = axios.create(options);
const getCharacterDetail = (id) => {
    return axiosInstance.get('/characters/' + id); //promise
};
const getInventory = () => {
    return axiosInstance.get('/inventory');
};

const getInventoryDetails = (id) => {
    return axiosInstance.get('/inventory/' + id);
};

export { getCharacterDetail,getInventory, getInventoryDetails};