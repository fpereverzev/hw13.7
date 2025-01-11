console.log('Hello, Webpack!');
document.body.innerHTML = '<h1>Hello, Webpack!</h1>';
fetch('http://localhost:5001/posts')
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
