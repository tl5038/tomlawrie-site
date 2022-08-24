import React from "react";
import MyCV from '../img/MyCV.jpg';
import './cv.scss';

const Cv = () => {
    return (
        <body className="body">
            <div className='image'>
                <div className="button">
                    <a download="TomLawrieCV.pdf" href="MyCV.pdf">Download</a>
                </div>
                <img src={ MyCV }  alt={""} />
            </div>
        </body>
    );
}

export default Cv;