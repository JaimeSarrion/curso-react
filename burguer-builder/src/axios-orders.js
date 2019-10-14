import Axios from "axios";


const instance = Axios.create({
    baseURL: 'https://burguer-builder-d0e8d.firebaseio.com/'
})


export default instance