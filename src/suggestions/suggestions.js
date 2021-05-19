import React from 'react';
import './Suggestions.css';

class Suggestions extends React.Component {
    render() {
        return (
        <div id="suggestions">
            <h2>Not sure where to start?  Check out one of these suggestions!</h2>
            <ul>
                <li>
                    <a href="*api for Knitting">Knitting</a>
                </li>
                <li>
                    <a href="* api for Crocheting">Crocheting</a>
                </li>
                <li>
                    <a href="* api for Scrapbooking">Scrapbooking</a>
                </li>
                <li>
                    <a href="* api for Drawing & Painting">Drawing & Painting</a>
                </li>
                <li>
                    <a href="* api for Jewelry Making">Jewelry Making</a>
                </li>
                <li>
                    <a href="* api for Pottery/Clay">Pottery/Clay</a>
                </li>
            </ul>
      </div>
        )
    }
}

export default Suggestions;