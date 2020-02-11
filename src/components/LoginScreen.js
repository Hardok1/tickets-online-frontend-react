import React from "react";
import axios from "axios";

function LoginScreen() {
    return (
        <form>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="inputLogin">Login uzytkownika</label>
                    <input className="form-control" id="inputLogin" placeholder="login"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Haslo</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="haslo"/>
                </div>
                <button type="button" className="btn btn-primary" onClick={signIn}>Wyslij</button>
            </fieldset>
        </form>
    );
}

function signIn() {
    let login = document.getElementById("inputLogin").value;
    let password = document.getElementById("inputPassword").value;
    axios.post('localhost:8080/login', {
        login: login,
        password: password
    }).then(function (response) {
        if (response.status === 200) {
            localStorage.setItem("token", response.accessToken);
            alert("Zalogowano!")
        } else {
            alert("Wystąpił błąd!");
        }
    }).catch(function (error) {
        alert("Wystąpił błąd!");
    });
}


export default LoginScreen;
