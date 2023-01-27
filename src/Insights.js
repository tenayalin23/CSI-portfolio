import Insight from "./Insight"
import "./Insight.css"

function Insights() {

    return (
        <div>
            <div className="insight-title"> Insight Statements </div>
            <Insight paragraphs={["Emotional Outcomes:", 
            "Refugee advocates have to interface with overworked and backlogged social services/government agencies, which leads to a lack of faith in the existing systems, but regardless of this frustration they find fulfillment by forging connections with refugees and appreciating huge breakthroughs as well as minor successes."]}/>
            <Insight paragraphs={["Communicating Across Cultural Barriers:", 
            "Advocates and refugees need to communicate to understand the refugees needs, how the advocate will act to help and for human connection. But cultural differences and language barriers can get in the way."]}/>
        </div>
    )
}

export default Insights