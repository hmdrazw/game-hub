import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key:"3387fa4c7f984ac08fff9978a2487eca"
    }
})
