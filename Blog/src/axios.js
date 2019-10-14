import Axios from "axios";



const instance = Axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN'
instance.defaults.headers.post['Conten'] = 'application/json'

export default instance