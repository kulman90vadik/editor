import axios from "axios";
import { IEmails } from "../../src/types/modules";


export const getAllEmails = async () => {
    try {
      const { data } = await axios.get<IEmails[]>(`http://localhost:3000/emails`)
      return data
    }  
    catch (e) {
      console.log((e as Error).message);
  }
}

