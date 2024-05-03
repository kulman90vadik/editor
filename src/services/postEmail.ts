import axios from "axios";


// const URL = 'http://localhost:3010/emails'

export const postEmail = async (comment: string, id: number | undefined) => {

    try {
      const { data } = await axios.post('https://jsonplaceholder.org/comments',
       { comment, id })
      return data
    }  
    catch (e) {
      console.log((e as Error).message);
  }
}



