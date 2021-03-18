
import './SearchBox.css';

function SearchBox(props) {
    const { logo } = props


    return (
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
    );
}

export default SearchBox;
