import fetch from "cross-fetch";
function clicked() {
  // Simple POST request with a JSON body using fetch
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  };
  fetch("http://localhost:3345/click", requestOptions)
    .then((response) => response.json())
    .then((data) => this.setState({ postId: data.id }));
}

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
const requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({}),
};
fetch("http://localhost:3345/click", requestOptions)
  .then((response) => response.json())
  .then((json) => console.log(json));
