import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import GetDate from './components/GetDate';
import Image from './components/Image';

function App() {

  return (
    <div className="App">
      <h1>HEllo</h1>
      <Profile name="Syed" type="premier"/>
      <Profile name="Sana" type="normal"/>
      <GetDate/>
      <Image/>
    </div>
  );
}

export default App;
