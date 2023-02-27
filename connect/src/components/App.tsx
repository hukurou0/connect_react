import React from 'react'
import axios from 'axios';

axios.defaults.baseURL = "https://connectapi.herokuapp.com"

function App() {

  const [post, setPost] = React.useState({"status_code":1,
                                          "data":{"id":[],"name":[]}});

  function get(){
    axios.get("/api/getDepartment")
    .then(function (response) {
    //受信したデータの処理
    setPost(response.data);
    })
    .catch(function (error) {
    //エラー処理
    console.log(error);
  });
}

  return (
    <div>
      <button onClick={get}>get</button>
      <h1>{post.status_code}</h1>
      <p>{post.data.id}</p>
      <p>{post.data.name}</p>
    </div>
  );
}

export default App;

