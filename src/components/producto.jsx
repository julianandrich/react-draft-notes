import React, { Component } from "react";
import silla from '../silla.jpg';

class Producto extends Component {
	state = {
		nombre: "Silla",
		descripcion: "Artículo de oficina",
		precio: "$25",
		sku: 122344568784,
	};

	render() {
		return (
			<div>
				<h1>{this.state.nombre}</h1>
				<br />
        <img src={silla} alt="" srcset="" />
				<br />
				<span>{this.state.descripcion}</span>
				<br />
				<span>{this.state.sku}</span>
				<br />
				<span>{this.state.precio}</span>
				<br />
			</div>
		);
	}
}

export default Producto;
