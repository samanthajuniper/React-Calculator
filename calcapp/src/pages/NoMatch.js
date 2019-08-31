import React from 'react';
import { Link } from "react-router-dom";


function NoMatch () {
 
    return( 
        <div>
            <h2>Page not found!</h2>
        <div className = "notFound">
            
           <img src = 'https://media1.tenor.com/images/ae2b9b09a0372639fab433a81fc1faae/tenor.gif?itemid=7620514' alt=''></img>
        </div>
          <Link
               to="/"
           >
            <button id= "tryAgain">Go Home</button>
          </Link> 
       </div>
     );
}


export default NoMatch