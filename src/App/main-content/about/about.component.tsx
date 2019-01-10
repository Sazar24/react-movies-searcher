import * as React from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
                <div>
                    I am component, which will show some data about this site creator. Or something
                </div>
                <div>
                    Source code of this page is avaible here: <a href="https://github.com/Sazar24/react-movies-searcher" > github repo </a>
                </div>
            </div>
        );
    }
}

export default About