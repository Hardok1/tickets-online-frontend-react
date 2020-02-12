import React from "react";
import axios from 'axios';

function RegisterScreen() {
    return (
        <form>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="inputLogin">Login uzytkownika</label>
                    <input className="form-control" id="inputLogin" placeholder="login"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">Adres e-mail</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Haslo</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="haslo"/>
                </div>
                <button type="button" className="btn btn-primary" onClick={signUp}>Wyslij</button>
            </fieldset>
        </form>
    );

}

function signUp() {
    let login = document.getElementById("inputLogin").value;
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    axios.post('http://localhost:8080/account/signup', {
        login: login,
        password: password,
        email: email
    }).then(function (response) {
        if (response.status === 201) {
            alert("Konto utworzone!")
        } else {
            alert("Wystąpił błąd!");
        }
    }).catch(function (error) {
        alert("Wystąpił błąd!");
    });

}

export default RegisterScreen;
