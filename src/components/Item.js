import React from 'react'
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

class Item extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      stock: this.props.stock,
      agotado: this.props.stock <= 0,
      nombre: this.props.nombre,
      descripcion: this.props.descripcion,
      id: this.props.id
    }
  }

  onClick() {
    if (this.state.stock === 0) {
      return
    }

    this.setState((state) => {

      if (state.stock === 1) {
        return { agotado: true, stock: state.stock - 1 }
      }
      return { stock: state.stock - 1 }
    })

    this.props.agregar()
  }


  render() {
    return (
      <div className='producto' key={this.props.id}>
        <h3>{this.props.nombre}</h3>
        <p> {this.props.descripcion}</p>
        <h5 >En stock: {!this.state.agotado ? this.state.stock : <span>agotado</span> }
        </h5>
        <button disabled = {this.state.agotado} onClick={this.onClick.bind(this)}> {!this.state.agotado ? 'Comprar' : 'Sin stock'} </button>
      </div>
    )
  }
}

export default Item