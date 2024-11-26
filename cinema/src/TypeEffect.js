import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <div className="Typeeffect">
            <Typewriter
                options={{
                    strings: ["Développeur web", "Graphiste", "UX/UI Designer"],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed: 20,
                }}
            />
        </div>
    );
};

export default Type;
