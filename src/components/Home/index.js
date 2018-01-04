import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    const { user: { objects } } = this.props

    if (!objects || !Array.isArray(objects) || objects.length === 0) return <div>Loading...</div>
    const listUser = objects.map((user, i) => <div key={i}>{i} - {user.name}</div>)
    return (
      <div>
        { listUser }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // some handle
  return { user: state.user }
}

Home = connect(mapStateToProps)(Home)

export default Home
