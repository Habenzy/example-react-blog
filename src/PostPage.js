import React from 'react'
import {Link} from 'react-router-dom'

class PostPage extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      postObj: undefined,
      author: undefined
    }
  }

  componentDidMount() {

    let objId = this.props.location.hash.slice(1)

    fetch('https://jsonplaceholder.typicode.com/posts/' + objId)
      .then(res => res.json())
      .then(post => {
        console.log(post)
        this.setState({postObj: post})

        fetch('https://jsonplaceholder.typicode.com/users/' + post.userId)
          .then(res => res.json())
          .then(authorObj => {
            console.log(authorObj)
            this.setState({author: authorObj.name})
          })

      })

  }

  render() {
    return (
      <div>
        <h3>{this.state.postObj ? this.state.postObj.title : 'Loading...'}</h3>
        <h5>{this.state.postObj ? 
          <Link to={'/author#' + this.state.postObj.userId}>{this.state.author}</Link> 
          : 'Loading...'}
        </h5>
        <p>{this.state.postObj ? this.state.postObj.body : 'Loading...'}</p>
      </div>
    )
  }
}

export default PostPage
