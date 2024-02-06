import axios from "axios";
import { BASE_URL } from "../utils/system";

export function findUser(urlUser:string)  {
    return axios.get(`${BASE_URL}/${urlUser}`);
    
    
}
