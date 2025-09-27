import axios from "axios"

const getPosts = async () => {
  
  const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

  const res = await data.data

  console.log('res', res);

  return res
}

export default getPosts