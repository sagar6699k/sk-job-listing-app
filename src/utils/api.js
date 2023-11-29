import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL
// const BASE_URL = "https://dev123.gigin.ai/abc/index.php/"

const headers = {
    // Authorization: "Bearer " + TOKEN,
    Accept: "application/json"
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(`${BASE_URL}${url}`, {
            headers,
            params
        })
        return data;
    } catch (error) {
        console.log("Error", error);
        return error;
    }
}




