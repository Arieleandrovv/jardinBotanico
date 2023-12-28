import React, { useState } from "react";
import NavbarExUser from "./NavigationComponentsExUser/NavbarExUser";

function Login() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");


return (
  <div>
      <NavbarExUser />
      <div className="container-fluid">
          <div className="row">
              <div className="col-md-9 ml-sm-auto col-lg-10 px-4" style={{borderBlockColor:"black"}}>
                  <h2 className="mt-4 mb-4 text-center" style={{backgroundColor:"#E9F6C7"}}>Inicio de Sesión</h2>
                  <div className="d-flex justify-content-center align-items-center " >
                      <form  className="w-50 text-center ">
                      <div className="formulario" >
                          <div>
                              <input type="text" name="correo" placeholder=" Ingrese su correo  " />
                          </div>
                          <div>
                              <input type="password" name="contraseña" placeholder= "  Ingrese su contraseña"  />
                          </div>
                      </div>
                          <button type="submit" className="btn btn-outline-success mt-3">Guardar</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
);
}
export default Login;
