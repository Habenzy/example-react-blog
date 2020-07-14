import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      postList: undefined
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((postsColl) => {
        let elementList = postsColl.map((postObj) => {
          return(
            <div key={postObj.id}>
            <Link to={'/post#' + postObj.id} >{postObj.title}</Link>
            </div>
          )
        })

        this.setState({postList: elementList})
      })
  }

  render() {
    return this.state.postList || <h3>Fetching data. Please wait...</h3>
  }
}

export default Home
