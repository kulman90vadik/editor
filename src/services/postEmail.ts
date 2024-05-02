import axios from "axios";


// const URL = 'http://localhost:3010/emails'

export const postEmail = async (text: string, id: number | undefined) => {

    try {
      const { data } = await axios.post('http://localhost:3010/emails',
       { text, id })
      return data
    }  
    catch (e) {
      console.log((e as Error).message);
  }
}



