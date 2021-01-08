import * as axios from "axios"

const apiMovie = axios.create({
  baseURL: "https://api.themoviedb.org/4"
  
})
 apiMovie.interceptors.request.use(req => {
   req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjI2NGE5ZmY1NzkxMGJkMzg3MzFhN2IyZWUwYzA4YSIsInN1YiI6IjVmYjgzNGIwYmNjZjFlMDAzZTMyMDA0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yL27aFClbsFut9Ku2YyrXAuzTeUSg7HGc7aAqBUL5T8'
   return req
 })
export default apiMovie