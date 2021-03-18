import './PhotoGrid.css'
import React, { useState } from 'react';
import PhotoPreview from '../PhotoPreview/PhotoPreview'

function PhotoGrid(props) {
    const [text, setText] = useState('ทดสอบๆๆ');
    const [selected, setSelectedImage] = useState(null);

    const { dict } = props;
    function ShowPreviewImg() {
        selected = true
    }
    var imgGrid = []
    for (const [index, value] of dict.entries()) {
        var srcImage = '/images/' + value.img
        imgGrid.push(
            <img key={index} src={srcImage} className="cus-image-grid" alt={value.title} ></img>
        )
    }

    const photoPreview = null;
    if (selected != null) {
        photoPreview = <PhotoPreview></PhotoPreview>
    }

    return (
        <div className="container-fluid" style={{ marginTop: "100px", marginBottom: '100px' }}>
            { photoPreview }
            <div className="row cus-div-content-center">
                <h3>รูปกระกอบสวยๆ</h3>
            </div>
            <div className="row cus-div-content-center">
                {imgGrid}
            </div>
            <div className="row cus-div-content-center">
                <button onClick={ShowPreviewImg} >{text}</button>
            </div>
        </div>
    );
}

export default PhotoGrid;