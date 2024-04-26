import axios from "axios";
import { IEmails } from "../types/modules";


const URL = 'http://localhost:3000/emails'

export const getAllEmails = async () => {
    try {
      const { data } = await axios.get<IEmails[]>(URL)
      return data
    }  
    catch (e) {
      console.log((e as Error).message);
  }
}

