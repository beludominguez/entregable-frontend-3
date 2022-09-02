import React from 'react'

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

import Item from './Item'
import data from './data.json'

class Listado extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='container'>

        {
          data.map(d => {
            return (<Item agregar={this.props.agregar} stock={d.stock} nombre={d.producto.nombre} descripcion={d.producto.descripcion} id={d.id} />)
          })
        }
      </div>
    )
  }
}

export default Listado
