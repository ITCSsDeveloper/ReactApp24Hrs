import './PhotoGrid.css'
import './Action.js'



function PhotoGrid(props) {
    const { dict } = props;
    function ShowAlert() {
        console.log('Alert Click')
    }
    var imgGrid = []
    for (const [index, value] of dict.entries()) {
        var srcImage = '/images/' + value.img
        imgGrid.push(
            <img key={index} src={srcImage} className="cus-image-grid" alt={value.title} ></img>
        )
    }

    return (
        <div className="container-fluid" style={{ marginTop: "100px" }}>
            <div className="row cus-div-content-center">
                <h3>รูปกระกอบสวยๆ</h3>
            </div>
            <div className="row cus-div-content-center">
                {imgGrid}
            </div>
            <button onClick={ShowAlert} >Click</button>
        </div>
    );
}

export default PhotoGrid;