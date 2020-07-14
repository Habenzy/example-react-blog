import React from 'react'
import { Link } from 'react-router-dom'

class Author extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      authorData: undefined,
      postList: undefined
    }
  }

  componentDidMount() {

    let authorId = this.props.location.hash.slice(1)

    fetch('https://jsonplaceholder.typicode.com/users/' + authorId)
      .then(res => res.json())
      .then(authorObj => {
        this.setState({authorData: authorObj})
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + authorId)
          .then(res => res.json())
          .then(postColl => {

            let elementList = postColl.map(post => {
              return (
                <div key={post.id}>
                  <Link to={'/post#' + post.id}>{post.title}</Link>
                </div>
              )
            })

            this.setState({postList: elementList})
          })
      })
  }

  render() {
    return(
      <div>
        <h1>{this.state.authorData ? this.state.authorData.name : 'Loading...'}</h1>
        {this.state.postList || 'Loading...'}
      </div>
      )
  }
}

export default Author
