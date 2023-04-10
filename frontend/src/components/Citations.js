import React, { useState, useEffect } from "react";


export default function Citations () {
const [viewCitations, setViewCitations] = useState(false);

if (viewCitations == true){
return (
<div>
<button className="linksButton" onClick={() => setViewCitations(false)}> Hide </button>
    <p className="citations">
    Technologies Used: Java, JavaScript, React, Spring Boot, HTML, CSS
    <br /><br />
    Logo created with content license image from: <a href="https://pixabay.com/"> https://pixabay.com/ </a>
    <br /><br />
    Background under free license from: <a href="https://www.freepik.com/"> https://www.freepik.com/ </a>
    </p>
</div>

     ); }
else {
 return (<button className="linksButton" onClick={() => setViewCitations(true)}> Citations </button>);
}
}




