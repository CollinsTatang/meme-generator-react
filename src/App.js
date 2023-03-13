import Form from "./component/Form";
import Header from "./component/Header";
import Joke from "./component/Joke";
import Massage from "./component/Massage";
import Meme from "./component/Meme";
import Login from "./component/Login";
import APIdata from "./component/APIdata";

function App() {
  return (
    <div>
     <Header />
     <Meme />
     <Joke />
     <Massage />
     <Form />
     <Login />
     <APIdata />
    </div>
  );
}

export default App;
