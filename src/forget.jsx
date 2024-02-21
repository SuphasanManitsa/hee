import './App.css'
import axios from 'axios';
function Forgot() {
    const SetEmail = async () => {
        const Email = document.querySelector('input[name=Email]').value
        const response = await axios.post("http://localhost:8080/forgotpassword",
            {
                Email,
            }, {
            withCredentials: true
        })
        console.log(response.data);
    }
    return (
        <>
            <input type="text" name="Email" id="Email" />
            <button onClick={SetEmail} type="button" name="submit">Login</button>
        </>
    )
}

export default Forgot
