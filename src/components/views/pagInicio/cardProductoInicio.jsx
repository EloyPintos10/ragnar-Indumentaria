import React from 'react';
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";


const cardProductoInicio = ({producto}) => {
    const{ _id, nombreProducto, precio, imagen } = { ...producto};
    return (
        <div>
             
      <Col className="d-flex justify-content-center">
        <div className="tarjetas">

          <Link className="tituloscard ">
            <img src={imagen} className="imgTarjetas"/>

            <Card.Title className="p-3">{nombreProducto}</Card.Title>
          </Link>
        </div>
        
      </Col>
           </div>
    );
};

export default cardProductoInicio;