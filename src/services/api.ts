import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://teste.pushstart.com.br/api/',
  auth: {
    username: "ash",
    password: "butterfree"
  }
})

// usar no teste
// export const api = axios.create({
//   baseURL: 'http://localhost:3000/api', {
//     headers: {}
//   }
  
// })


// const api = axios.create({
//   baseURL: 'http://localhost:3333',
//   auth: {
//       username: "ash",
//       password: "butterfree"
//   }
// })

// export default api