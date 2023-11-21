import React from 'react';
import "./ComponentesCss/CardB.css"

const CardB = ({image,Categoria,title}) => {
    return (
        <div className='añ'>
            <div className='ii'>
            <img  className='img' src={image} alt="" /> 
            </div>

            <div className='bb'>
            <p className='mm'>{Categoria}</p>
            <h1>{title}</h1>
            <button className='bbb'>DESCUBRIR</button>
            </div>

        </div>
    );
}

export default CardB;
