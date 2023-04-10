import React, { useState, useEffect } from "react";


export default function Citations () {
const [viewCitations, setViewCitations] = useState(false);

if (viewCitations == true){
return (
<div>
<button className="linksButton" onClick={() => setViewCitations(false)}> Hide </button>
<p className="citations"> All citations will go here </p>
</div>

     ); }
else {
 return (<button className="linksButton" onClick={() => setViewCitations(true)}> Citations </button>);
}
}




