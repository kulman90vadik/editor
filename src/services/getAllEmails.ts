import axios from "axios";
import { IEmails } from "../types/modules";


export const getAllEmails = async () => {
    try {
      const { data } = await axios.get<IEmails[]>(`https://jsonplaceholder.org/comments`)
      return data
    }  
    catch (e) {
      console.log((e as Error).message);
  }
}

