import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductList type={"catalogue"}/>
        <ProductList type={"cart"}/>
      </header>
    </div>
  );
}

export default App;
