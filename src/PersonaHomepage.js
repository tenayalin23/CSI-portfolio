import PersonaNav from './PersonaNav';
import './Persona.css'

function PersonaHomepage() {

    return (
        <div>
            <div className="persona">
                <PersonaNav />
                <div className="persona-name">
                    Personas
                </div>
                <div className="persona-home">
                Imaginary “people” are created from trends and patterns we have noticed in our research, specifically common aspirations, beliefs, and goals
                </div>
            </div>
        </div>)
}

export default PersonaHomepage