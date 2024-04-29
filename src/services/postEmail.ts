import axios from "axios";


const URL = 'https://editor-zeta-ivory.vercel.app/emails'

export const postEmail = async (text: string, id: number | undefined) => {

    try {
      const { data } = await axios.post(URL, { text, id })
      return data
    }  
    catch (e) {
      console.log((e as Error).message);
  }
}

