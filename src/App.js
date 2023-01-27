import logo from './logo.svg';
import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom';
import Home from './Home';
import Insights from './Insights';
import Persona from './Persona';
import PersonaHomepage from './PersonaHomepage';
import Reflection from './Reflection';

function App() {
  return (
    <div className="app">
        <div className='nav'>
          <div className='left-column'>
            <div className='author-name'> Refugee Advocates </div>
          </div>
          <div className='right-column'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>HOME</NavLink>
            <NavLink to="/personas" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>PERSONAS</NavLink>
            <NavLink to="/insights" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>INSIGHTS</NavLink>
            <NavLink to="/reflection" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>REFLECTION</NavLink>
          </div>
        </div>
        <Routes>
          <Route exact path='/insights' element={<Insights />}></Route> 
          <Route exact path='/personas' element={<PersonaHomepage />}></Route> 
          <Route exact path='/persona1' element={<Persona name="Lend-a-Hand Larry" imgUrl="LendaHandLarry.png" />}></Route> 
          <Route exact path='/persona2' element={<Persona name="Find-a-Fam Fanny" imgUrl="FindaFamFanny.png" />}></Route> 
          <Route exact path='/persona3' element={<Persona name="Get-it-Done Gretta" imgUrl="GetitDoneGretta.png" />}></Route> 
            {/* <Route exact path='/personas' element={<Insight paragraphs={["First Insight", "Second paragraph"]}/>}></Route>
            <Route exact path='/designs' element={<Insight paragraphs={["First Insight"]}/>}></Route> */}
          <Route exact path='/reflection' element={<Reflection title="Reflection Phase 1" paragraphs={[
            "NARRATIVE:",
            "For my Refugee Advocate group, we used the journey exercise to help us map out and understand the feelings, challenges, and experiences amongst the refugees and different  sponsor groups (neighborhood volunteers, religious groups, etc.). During the exercise, we interviewed a wide range of refugee advocates, all of which had different experiences and challenges in their advocacy/volunteer work. I found this incredibly overwhelming because I didn’t know how to orient myself through all the different information I was receiving and couldn’t see how the different interviewees connected. We created a diagram to break up the process that one group or person (refugee sponser group) follows in their refugee advocacy work into clear stages (shown in the image above). The purpose of the journey diagram is to gain a better understanding of one group's experience over time. But I was surprised how the diagram helped me see the connections between multiple refugee advocates within the immigratioin field (service organizations, agencies) As we expected, the journey exercise helped us learn about the experiences of the refugees and volunteers exclusively within the sponsor group’s experience. We did not expect however, that the exercise would also help us map out how the refugee advocate community is connected. Throughout the sponsor groups process, other refugee advocates steped in to help out at specific stages. For example, we came out of an interview with someone from Welcome 2 America and felt incredibly underwhelmed by the information he shared. Furthermore, the work that the interviewee shared seemed to set them apart as an outlier from the rest of the refugee advocates we had spoken to. But using the journey diagram helped us not only understand our sponsor groups’ experiences more thoroughly but also helped us see the vast network that connected the wide spectrum of refugee advocates we interviewed.", 
            "By seeing how other refugee advocates fit into the sponsor group's process, we were able to see how their work and the challenges they encounter overlap with one another. For example, by speaking to sponsor group volunteers we learned how frustrated they are working with social service agencies (such as Lutheran Social Services, HIAS) due to the lack of organization and clear communication within the agencies. The journey exercise showed us how social service agencies play a role in the sponsor groups’ work and enabled us to pinpoint some of the sponsor groups’ struggles. We also followed the connection between the sponsor group and social service agencies to identify problems within the agency. Through the interview process, we uncovered  frustrations the agencies have working within the government refugee support system. The journey diagram showed us the work done by refugee sponsor groups and social service agencies is not separate but rather connected by a chain and their struggles are related and built upon one another. The image below shows an example of the chain starting from sponsor groups and going up to social service agencies and then at the top with the government refugee support system. This is meant to show how the work and frustrations of sponsor groups and social service agencies (we spoke to people from both) are related to one another. ",
            "ADVICE FOR FUTURE CSI STUDENT:",
            "As you conduct your research in your chosen field you are likely to come out of interviews learning something unexpected. When you speak with a wide range of people within your field who all have different experiences and struggles, it might seem difficult to understand your assigned field. That is why the journey diagram is an effective step because it helps draw everything together. Initially, there might be some more visible similarities and connections while others seem like total outliers. By using this journey exercise you will be able to understand more clearly how one group or person works over time and gain a better understanding of how your interviewees connect and overlap with one another in ways that aren’t as obvious. As you approach this exercise, choose one person or group and take a moment to consider all the different steps of their journey. Once you have done that, consider the emotions and experiences of your chosen group throughout each step. Then look for how one of the other people you have spoken to contributes and play a part in your chosen group’s work. Lastly, consider what are some overlapping or connected experiences. It is important to deeply understand the journeys of the people/organizations’ experiences and how they connect with one another in order to move out of distinct people's portraits and gain a better understanding of your research field as a whole. This process will help you see shared or related experiences and challenges among all of your interviewees which will help you construct more thorough personas and use their distinctions and connections to form meaningful insight statements.", 
            "CAVEATS:", 
	          "Using the journey diagram is most useful when you are trying to organize and understand a complicated group with multiple different experiences with several stages. However, it isn’t the most practical or helpful to use this diagram when your group has a more straightforward journey. In this case, using the journey diagram might be overkill as it can overcomplicate and repeat what is already clear.",
            ]}/>}></Route> 
          <Route exact path='/' element={<Home/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
