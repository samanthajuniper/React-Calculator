import React from 'react';

function About () {
    return( 
         <div className = "about">
             <div className ="question one">
                <h1>How is arithmetic logic being handled?</h1>
                <p>
                    I used a switch statement to check state and whether the equal button was pressed. 
                    Depending on which operator was stored in state when the equal sign was pushed, specific artihemtic logic was carried out.
                </p>
             </div>
             <div className ="question">
                <h1>What components were used to create this calculator?</h1>
                <ul>
                    <li>
                        Display (functional component)
                    </li>
                    <li>
                        CalcButtons (functional component)
                    </li>
                    <li>
                        Calc (class component)
                    </li>
                    <li>
                        About, Home, Lame, & NoMatch Pages(functional components)
                    </li>

                </ul>
             </div>
             <div className ="question" id ="q3">
                <h1>What is the purpose of each component used?</h1>
                <ul>
                    <li>
                       CalcButtons: a resuable functional component that creates a single button
                    </li>
                    <li>
                       Display: a functional component that recieves a state value as a property & displays it
                    </li>
                    <li>
                       Calc: a class component that renders functional component to the page & performs calculator logic
                    </li>
                    <li>
                       Page component: contains JSX that dispalys different content when routed to that page
                    </li>
                    <li>
                       App: renders Calc & other pages through routing
                    </li>
                </ul>
             </div>
             <div className = "question">
                <h1>List some of the pros and cons that you notice within your current component tree.</h1>
                    <li>
                       Pros: Flow of react components is easy to trace
                    </li>
                    <li>
                       Cons: Switch statement logic is long; I would refactor to use better data structures to perform the logic
                    </li>
             </div>
        </div>
     );
}



export default About