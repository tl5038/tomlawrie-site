import React from "react";
import MyCV from '../img/MyCV.jpg';
import './cv.scss';

const Cv = () => {
    return (
        <div className="background">
            <div className='image'>
                <div className="cv">
                    <a download="TomLawrieCV.pdf" href="MyCV.pdf"><img src={ MyCV }  alt={""} /></a>
                </div>
            </div>
            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}

export default Cv;