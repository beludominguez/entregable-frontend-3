// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import React from 'react';
import Cabecera from './components/Cabecera'
import Listado from './components/Listado'


class App extends React.Component {

  
  constructor(props) {
    super(props)

    this.state ={
      carrito: 0
    }
  }

  onClick(){
    this.setState((state) => {
      return {carrito: state.carrito + 1}
    })
  }


  render() {
    return (
      <div className="App">
        <Cabecera carrito={this.state.carrito}/>
        <Listado agregar={this.onClick.bind(this)}/>
      </div>
    );
  }
}

export default App;