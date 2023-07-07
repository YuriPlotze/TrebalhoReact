import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Cadastro from './cadastro';
import pginicial from './pginicial';

function Roteamento(){

    return(
        <Router>

          <li>
           <Link to="/cadastro">Cadastro</Link>
          </li>
          <li>
           <Link to="/pginicial">pginicial</Link>
          </li>

          <Routes>

            <Route path="/cadastro" Component={Cadastro}/>
            <Route path="/pginicial" Component={pginicial}/>

          </Routes>
        </Router>
    )
}
export default Roteamento