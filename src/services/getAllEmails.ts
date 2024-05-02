import axios from "axios";
import { IEmails } from "../types/modules";


export const getAllEmails = async () => {
    try {
      const { data } = await axios.get<IEmails[]>(`http://localhost:3010/emails`)
      return data
    }  
    catch (e) {
      console.log((e as Error).message);
  }
}

