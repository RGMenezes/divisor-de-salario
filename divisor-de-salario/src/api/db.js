import axios from "axios";

export default axios.create({
    //opsteriormente está url será substituida pela url final.
    baseURL: "http://localhost:8081/"
});