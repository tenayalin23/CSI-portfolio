import { NavLink} from 'react-router-dom';

function PersonaNav() {
    return (<div className="persona-nav">
    <NavLink className="persona-link" to="/Personas"> Personas </NavLink>
    <NavLink className="persona-link" to="/persona1"> Persona 1 </NavLink>
    <NavLink className="persona-link" to="/persona2"> Persona 2 </NavLink>
    <NavLink className="persona-link" to="/persona3"> Persona 3 </NavLink>
</div>)
}

export default PersonaNav