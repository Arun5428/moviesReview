import axios from "axios";
export default axios.create({
// //    baseURL:'http://localhost:8080',
// https://spring-app-moviesreview.onrender.com
baseURL:'https://spring-app-moviesreview.onrender.com',

    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
       
        }

});
