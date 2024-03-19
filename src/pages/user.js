import { useEffect, useState } from "react";
import { NavBar } from "./components/navbar";

const UsersPage = () => {
  const [users, setUser] = useState([{ name: "", id: 0, image: "" }]);
  useEffect(() => {
    fetch("api/userService")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <main className="W-full h-full">
      <NavBar />
      <h1>Welcome to Home Page</h1>
      <ul className="flex flex-col gap-4 text-md">
        {users.map((task, index) => (
          <li key={index} className="items-center inline-flex gap-4">
            {index + " " + task.name}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default UsersPage;
