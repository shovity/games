import React, { Component } from 'react'
import { fetchUser } from '../../actions/userActions'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props) {
    super(props)
    setTimeout(() => {
      this.props.fetchUser()
    }, 1000)
  }

  render() {
    const { user } = this.props
    console.log(user)
    if (user.objects.length === 0) return <div>Loading...</div>
    return (
      <div>
        { user.objects.map((user, i) => <div key={i}>{i} - {user.name}</div>)}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // some handle
  return { user: state.user }
}

const mapDispathToProps = (dispath, ownProps) => {
  // some handle
  return {
    fetchUser: () => {
      dispath(fetchUser())
    }
  }
}

Home = connect(mapStateToProps, mapDispathToProps)(Home)

export default Home
