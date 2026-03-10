import loginUser from "./loginUser";
import Users from "./Users";

const App = () =>{
  return(
    <div>
      <h1>My MERN App</h1>
      <Users />

      <h2>Login Test(for POST request)</h2>
      <button onClick={loginUser}>Login</button>
    </div>
  )
}
export default App;