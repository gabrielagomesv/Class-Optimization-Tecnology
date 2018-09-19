import React from 'react'
import ReactDOM from 'react-dom'

class Horario extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {hora: 0, minutos: 0, segundos: 0}
  }
  componentDidMount() {
    setInterval(() => {
      var d = new Date()

      this.setState({
        hora: this.date_format(d.getHours()),
        minutos: this.date_format(d.getMinutes()),
        segundos: this.date_format(d.getSeconds())
      })
    }, 500)
  }

  date_format(n) {
    if(n < 10) {
      return "0"+n
    }
    return n
  }
  render(){
    return <h3 onClick={() => {alert("clicou!")}}>Horário {this.state.hora}:{this.state.minutos}:{this.state.segundos}</h3>
  }
}

//Renderizando...
ReactDOM.render(
  <Horario></Horario>,
  document.getElementById("minhaDiv")
)