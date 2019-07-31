import React, {Component} from 'react';
import './Navigation.css';


class Navigation extends Component {
    render() {
        const sections = ['Home', 'About', 'Service', 'Portfolio', 'Contact'];
        const nayLinks = sections.map((section) => {
            return(
                <li><a href={'#' + section}>{section}</a></li>
            )
        });
        return(
            <nav>
             <h2 className="logo">{this.props.LogoTitle}</h2>
                <ul>
                    {nayLinks}
                </ul>
            </nav>
        );
    }
}
export default Navigation;