import "./App.css";
import { ColorsInArray } from "./task6/Array";
function App() {
  const myName = "My name is Maksim";
  const greeting = "Ласкаво просимо до нашого сайту!";
  const imgUrl =
    "https://i.pinimg.com/736x/55/e0/e1/55e0e185910208ca747d4082e62eba95.jpg";
  const imgAlt = "Photo";
  const favoriteWebSite = {
    name: "Google",
    url: "https://www.google.com/",
  };
  const a = 110;
  const b = 100;
  const result = a + b;
  return (
    <div className="App">
      <h1>{myName}</h1>
      <p>{greeting}</p>
      <img src={imgUrl} alt={imgAlt}></img>
      <br></br>
      <a href={favoriteWebSite.url}>
        My favorite web-site is: {favoriteWebSite.name}
      </a>
      <p>
        {a} + {b} = {result}
      </p>
      <ColorsInArray></ColorsInArray>
    </div>
  );
}

export default App;
