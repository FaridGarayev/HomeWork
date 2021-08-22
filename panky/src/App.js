import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Receipts from './components/Receipts'
import Receipt from './components/Receipt'
import './sass/style.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/ContactUs" component={ContactUs}></Route>
        <Route path="/Receipts" component={Receipts}></Route>
        <Route path="/Receipt" component={Receipt}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
