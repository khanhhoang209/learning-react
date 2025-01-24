import axios from "axios";

const fetchCategories = () => {
    return axios.get('https://localhost:5000/api/categories');
}

export {fetchCategories};