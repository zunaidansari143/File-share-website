import axios from 'axios'

 const url_api = 'http://localhost:8081'


export const uploadFile = async (data) =>{
    try{
       let res = await  axios.post(`${url_api}/upload`,data)
       return res.data

    }
     catch(err){
        console.log("mething went worg",err);
     }
}