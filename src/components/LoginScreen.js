import React from "react";

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
                <button type="submit" className="btn btn-primary">Wyslij</button>
            </fieldset>
        </form>
    );

}

export default LoginScreen;
