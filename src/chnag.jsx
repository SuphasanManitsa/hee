import './App.css'
import axios from 'axios';
function Chang() {
    const SetChangePassword = async () => {
        const OriginalPassword = document.querySelector('input[name=OriginalPassword]').value
        const NewPassWord = document.querySelector('input[name=NewPassWord]').value
        const ConfirmNewPassword = document.querySelector('input[name=ConfirmNewPassword]').value
        const response = await axios.post("http://localhost:8080/forgotpassword",
            {
                OriginalPassword,
                NewPassWord,
                ConfirmNewPassword,
            }, {
            withCredentials: true
        })
        console.log(response.data);
    }
    return (
        <>
        <input type="password" name="OriginalPassword" id="OriginalPassword" />
        <input type="password" name="NewPassWord" id="NewPassWord" />
        <input type="password" name="ConfirmNewPassword" id="ConfirmNewPassword" />
        <button onClick={SetChangePassword} type="button" name="submit">Login</button>
    </>
)
}

export default Chang
