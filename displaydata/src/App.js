import Users from "./Users";
import Posts from "./Posts";
import Comments from "./Comments";
import { useEffect, useState } from "react";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";

  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]); // data that we get back-json arr

  useEffect(() => {}, [users, posts, comments]);

  const handleClickComments = () => {};
  const handleClickUsers = () => {
    fetch("USERS_URL");
  };

  return (
    <div className="App">
      <Users handleClick={handleClickUsers} />
      <Posts />
      <Comments handleClick={handleClickComments} />
    </div>
  );
}

export default App;
