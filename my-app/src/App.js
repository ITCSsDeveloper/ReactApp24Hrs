import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar/NavBar'
import SearchBox from './component/SearchBox/SearchBox'
import PhotoGrid from './component/PhotoGrid/PhotoGrid'

var dict = [
  {
    title: "มดแดง",
    img: 'img-001.jpg'
  },
  {
    title: "แม่เป้ง",
    img: 'img-002.jpg'
  },
  {
    title: "ไข่ผาก ( ไข่มดแดง ขนาดเล็ก)",
    img: 'img-003.jpg'
  },
  {
    title: "ไข่ต่ง ( ไข่มดแดง ขนาดใหญ่)",
    img: 'img-004.jpg'
  },
]


function App() {


  return (
    <div className="App">
      <NavBar></NavBar>
      <SearchBox logo={logo}></SearchBox>
      <PhotoGrid dict={dict} />
    </div>
  );
}

export default App;
