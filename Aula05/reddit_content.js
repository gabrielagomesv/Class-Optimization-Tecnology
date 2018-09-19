import React from "react"

export default class RedditContent extends React.Component {
  constructor(props) {
    super(props)

    this.updateRedditContent(this.props.forum)
    this.state = {
      content: {}
    }
  }

  updateRedditContent(forumName) {
    fetch(`https://www.reddit.com/r/${forumName}.json`)
    .then(res => res.json())
    .then((res) => {
      if (res.error) {
        throw "Forúm não encontrado!"
      }
      return res;
    })
    .then(
      (res) =>{
        this.setState({content: res})
      }
    ).catch( err => console.log(err))
  }
  
  render() {
    return(
      <div>
        <p>{this.state.content.kind}</p>
      </div>
    )
  }
}