import React from 'react';
import { Link } from "react-router-dom";


function Home () {
 
    return( 
         <div className = "homeDiv">
            <Link
                to="/lame"
            >
                <button className = 'homeButton' >If you <span>don't</span> care about math click here!</button>
            </Link> 

            <Link
                to="/calculator"
            >
                <button  className = 'homeButton' >If you care about math click here!</button>
            </Link>
        </div>
     );
}


export default Home