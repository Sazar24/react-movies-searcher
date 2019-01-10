import * as React from 'react';
import { Link } from "react-router-dom";
import { Menu, Segment } from 'semantic-ui-react';

class NavigationBar extends React.Component {
    render() {
        return (
            <Segment inverted circular={false} style={{ "margin": "0px", "borderRadius": "0px"}}>
                <Menu inverted compact pointing secondary >
                    <Menu.Item name="Main page"
                        as={Link} to="/"
                    />
                    <Menu.Item name="search movie"
                        as={Link} to="/search"
                    />
                    <Menu.Item name="search-history"
                        as={Link} to="/history"
                    />
                    <Menu.Item name="about"
                        as={Link} to="/about"
                    />
                </Menu>
            </Segment>
        );
    }
}

export default NavigationBar;