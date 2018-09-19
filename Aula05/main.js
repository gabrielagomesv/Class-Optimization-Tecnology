import React from "react"
import InputBusca from "./input_busca";
import RedditContent from "./reddit_content";

export default class Main extends React.Component {
  constructor () {
    super()

    this.trataEnter = (texto) => {}
  }

  render() {
    return (
      <div className="container">
        <InputBusca teclouEnter={this.trataEnter}>Texto titulo: </InputBusca>
        <RedditContent forum="reactjs"></RedditContent>
      </div>
    )
  }
}