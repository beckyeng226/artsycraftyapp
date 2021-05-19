import logo from './logo.svg';
import './App.css';
import SearchBar from '../searchBar/searchBar';
import SearchResults from '../searchResults/searchResults';
import Suggestions from '../suggestions/suggestions';

function App() {

  return (
    <div className="App">
      <div id="root">
      <h1>Artsy Crafty</h1>
      <h2>Welcome to the Artsy Crafty page where you can find all sorts of artsy crafty ideas.</h2>
      

      <SearchBar onSearch={this.search} />
      <SearchResults searchResults={this.state.searchResults} />

      <section id="suggestions">
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
      </section>

    </div>
    </div>
  );
}

export default App;
