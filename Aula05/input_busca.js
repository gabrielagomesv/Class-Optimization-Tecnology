import React from "react"

export default class InputBusca extends React.Component {
  constructor(props) {
    super(props)

    this.handleKey = (e) => {
      if ( e.key == 'Enter' && this.props.teclouEnter){
        this.props.teclouEnter(e.target.value)
        e.target.value = ''
      }
    }
  }
  render() {
    return (
      <div>
        {this.props.children} <input onKeyUp={this.handleKey} type='text'/>
      </div>
       
    )
  }
}