import * as React from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
                <div style={{ "marginBottom": "70px" }}>
                    <p> Suprise, suprise... There is no much content on this page ;) </p>
                    <p> The most important things were said on the main/starting page.</p>
                </div>
                <div>
                    Source code of this web-app is avaible here: <a href="https://github.com/Sazar24/react-movies-searcher" > github repo </a>
                </div>
            </div>
        );
    }
}

export default About