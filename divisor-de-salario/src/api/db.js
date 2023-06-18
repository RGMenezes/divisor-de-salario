import axios from "axios";

export default axios.create({
    //opsteriormente está url será substituida pela url final.
    baseURL: "https://db-divisor-de-salario.vercel.app/"
});