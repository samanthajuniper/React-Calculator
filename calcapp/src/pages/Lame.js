import React from 'react';
import { Link} from "react-router-dom";

function Lame () {
    return( 
       <div>
         <div className = "lameDiv">
            <img src = 'https://media1.tenor.com/images/cc2aacd77fc2bb11900cc05e55c7c4b2/tenor.gif?itemid=11799877' alt=''></img>
         </div>
           <Link
                to="/"
            >
             <button id= "tryAgain">Try Again</button>
           </Link> 
        </div>
     );
}


export default Lame