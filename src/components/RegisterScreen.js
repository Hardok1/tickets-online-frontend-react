import React from "react";

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
                <button type="submit" className="btn btn-primary">Wyslij</button>
            </fieldset>
        </form>
    );

}

export default RegisterScreen;
