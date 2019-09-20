import React from "react";


function header ({title }) {
    return (
        <div>
            {title}
            <nav class="navbar navbar-light bg-dark">
                Score: 0 | Best Score: 0
            </nav>
        </div>
    )
}

export default header;