import logo from './logo.svg';
import './App.css';

function App() {
  var appTitle = "My React App"
  return (
    <div className="App">
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">{appTitle}</a>
        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"></input>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="#">Login/Register</a>
          </li>
        </ul>
      </nav>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-12 text-center">
            <img src={logo} width="300" height="300" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <h1>ระบบค้นหาคำอีสาน</h1>
            <div className="row col-12 cus-div-content-center">
              <form className="form-inline">
                <div className="form-group">
                  <label className="cus-margin">ค้นหา : </label>
                  <input type="text" className="cus-margin form-control" placeholder="ค้นหา"></input>
                  <button className="cus-margin btn btn-success">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
