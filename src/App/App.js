
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Suggestions from '../Suggestions/Suggestions';

function App() {

  return (
    <div className="App">
      <div id="root">
      <h1>Artsy Crafty</h1>
      <h2>Welcome to the Artsy Crafty page where you can find all sorts of artsy crafty ideas.</h2>
      

      <SearchBar onSearch={this.search} />
      <Suggestions />
      <SearchResults searchResults={this.state.searchResults} />

      

    </div>
    </div>
  );
}

export default App;
