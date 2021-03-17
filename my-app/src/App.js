import logo from './logo.svg';
import './App.css';

function App() {
  var labelSearch = <label>ค้นหา : </label>
  var inputText = <input type="text" />
  var buttonNext = <button>ค้นหา</button>
  return (
    <div className="App">
      <img src={logo}  width="400" height="400"/>
      <h1>ระบบค้นหาคำอีสาน</h1>
      { labelSearch }
      { inputText}
      { buttonNext }
    </div>
  );
}

export default App;
