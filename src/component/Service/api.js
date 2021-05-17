import axios from 'axios';

const options = {
    baseURL: 'https://api.sampleapis.com/futurama'
};
let axiosInstance = axios.create(options);
const getInventory = () => {
    return axiosInstance.get('/inventory');
};

const getInventoryInfo = (id) => {
    return axiosInstance.get('/inventory/' + id);
};

export { getInventory, getInventoryInfo,axiosInstance};