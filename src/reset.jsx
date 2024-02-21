import './App.css'
import axios from 'axios';
function Reset() {
    const SetNewPassword = async () => {
        const NewPassWord = document.querySelector('input[name=NewPassWord]').value
        const ConfirmNewPassword = document.querySelector('input[name=ConfirmNewPassword]').value
        const response = await axios.post("http://localhost:8080/reset",
            {
                NewPassWord,
                ConfirmNewPassword,
            }, {
            withCredentials: true
        })
        console.log(response.data);
    }
    return (
        <>
            <label htmlFor="">NewPassWord : </label>
            <input type="password" name="NewPassWord" id="NewPassWord" /><br />
            <label htmlFor="">ConfirmNewPassword : </label>
            <input type="password" name="ConfirmNewPassword" id="ConfirmNewPassword" /><br />
            <button onClick={SetNewPassword} type="button" name="submit">Login</button>
        </>
    )
}

export default Reset
