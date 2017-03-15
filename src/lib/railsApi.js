import axios from 'axios'

const db = {
  writeRepoData(input) {
    axios.post("todos.json", {
      create_time: Date(),
      data: input,
      status: "not_done"
    }).then((res) => res.input);
  },

  fetchAllRepoData() {
    return axios.get("http://localhost:3000/todos.json").then((res) => res.data);
  },

 updateTodo(data) {
  //  axios.patch("http://localhost:3000/todos/1/", {status: "done"})
  //  const obj = {
  //    data: data,
  //    status: "not_done",
  //    create_time: Date()
  //  };
  //  if (obj.status === "not_done") {
  //    store.database().ref(`/todos/${data}`).set(status: "done");
  //  } else {
  //    store.database().ref(`/todos/${data}`).set(status: "not_done");
  //  }

 }

};

export default db