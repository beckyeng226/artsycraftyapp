import React from 'react';
import './Suggestions.css';

class Suggestions extends React.Component {
    render() {
        return (
        <div id="suggestions">
            <h2>Not sure where to start?  Check out one of these suggestions!</h2>
            <ul>
                <li>
                    <a href="https://www.reddit.com/search.json?q=knitting">Knitting</a>
                </li>
                <li>
                    <a href="https://www.reddit.com/search.json?q=crocheting">Crocheting</a>
                </li>
                <li>
                    <a href="https://www.reddit.com/search.json?q=scrapbooking">Scrapbooking</a>
                </li>
                <li>
                    <a href="https://www.reddit.com/search.json?q=drawing%20painting">Drawing & Painting</a>
                </li>
                <li>
                    <a href="https://www.reddit.com/search.json?q=jewelry%20making">Jewelry Making</a>
                </li>
                <li>
                    <a href="https://www.reddit.com/search.json?q=clay%20pottery">Pottery/Clay</a>
                </li>
            </ul>
      </div>
        )
    }
}

export default Suggestions;