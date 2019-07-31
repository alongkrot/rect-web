import React, {Component} from 'react';
import './Header.css';
import Background from './img/background.jpg'

const mystyle = {
    backgroundImage: `url(${Background})`,
    height: '55vh',
    backgroundSize: 'cover'

}

class Header extends Component {
    render() {
        return(
            <header style={mystyle}>
                <h1>{this.props.title}</h1>
                <p>The Project React Portfolio</p>
                <a href="#button">{this.props.button}</a>

            </header>

        );
        
    }
};

export default Header;