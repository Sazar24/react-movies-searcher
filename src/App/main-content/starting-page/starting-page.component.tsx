import * as React from 'react';
import { Link } from 'react-router-dom';

class StartingPage extends React.Component {
    public render() {
        return (
            <div>
                <div style={{ "marginBottom": "70px" }}>
                    <h4>This site was made as an interview project</h4>
                    <p>It allows to search movies from database delivered by <a href="http://www.omdbapi.com/"> http://www.omdbapi.com/ </a>
                        (which is "<i>(...) not endorsed by or affiliated with IMDb.com.</i>")</p>
                    <p>To search any particular movie go to <b>"Search movie" tab</b> and type in the movie your are looking for.</p>
                    <p>Then you will be redirected to results page. You can click proper link to see selected movie details.</p>
                </div>

                <div style={{ "marginBottom": "70px" }}>
                    <p> This is React SPA-app There is no redux used though; All parameters (or most of them, to be honest) are passed by router/routing. </p>
                    <p> I did not focus on making layout super-ultra-cool, but mostly on making the SPA-logic works.</p>
                </div>

                <div>
                    Link to the source code (where the content of the task is quoted too (in readme.md file)) is in the <b>"About" tab</b>.
                </div>
            </div>
        );
    }
}

export default StartingPage;
