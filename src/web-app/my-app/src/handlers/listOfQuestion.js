
import axios from "axios";


let config = {
headers : {
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
}

const PATH = "http://localhost:8080/question/exam/"

export const ListOfQuestions = async (num,array) => {
    let r;
    try{
        r = await axios.post( `${PATH}${num}`, {"tags":array}, config)
        return r
    }catch(err){
        console.log(err)
    }
}