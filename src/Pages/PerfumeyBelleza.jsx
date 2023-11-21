// import React, { Component, useState } from 'react'
// import {useEffect} from 'react'
import React from "react";
import CardB from '../Components/CardB'
import "./PagesCss/PerfBell.css"
import imagen2 from "./PagesImg/7.webp"
import imagen3 from "./PagesImg/3.webp"
import imagen4 from "./PagesImg/6.webp"
import OptionsHome from "../Components/optionsHome";

const PerfumeyBelleza = () => {

    // const [perfumes,setPerfumes ] = useState([])

    // useEffect(()=>{
    //     fetch(/*"url a conectar"*/ )
    //     .then((Response)=>
    //     Response.json()
    //     ) .then((data)=>{
    //         console.log(data)
    //     })
    // },[])

  return (
    <div className="ooo">
        <div className='PP '>
        {/* {
            perfumes.map((perfume)=>(
                <Component parametros  ejemplo nombreperfume={perfume.nombre}></Component> Componente a renderizar
            ))
        }
        PerfumeyB  elleza */}
        <div className="XX">
            <CardB
            image={imagen2}
            Categoria="Perfumes"
            title="JADORE"
            >
            </CardB>
            <CardB
            image={imagen3}
            Categoria="Maquillaje"
            title="DIOR FOREVER"
            >
            </CardB>
            <CardB
            image={imagen4}
            Categoria="Tratamiento"
            title="CAPTURE TOTALE"
            >
            </CardB>
        </div>
    </div>
    <div>
        <OptionsHome></OptionsHome>
    </div>
    </div>
    
  )
}

export default PerfumeyBelleza