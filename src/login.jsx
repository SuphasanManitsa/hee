import './App.css'
import axios from 'axios';
function Login() {
  const login = async () => {
    // Get username and password values from input elements
    const username = document.querySelector('input[name=username]').value;
    const password = document.querySelector('input[name=password]').value;

    const response = await axios.post("http://localhost:8080/login",
      {
        username:username,
        password:password,
      }, {
      withCredentials: true
    });
    console.log(response.data);
  };

  const logout = async () => {
    try {
      const response = await axios.get("http://localhost:8080/logout",
        {
          withCredentials: true
        });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input type="text" name="username" id="username" />
      <input type="password" name="password" id="password" />
      <button onClick={login} type="button" name="submit">Login</button>
      <button onClick={logout} type="button" name="logout">Logout</button>
    </>
  );
}

export default Login;