import React, { Component } from 'react'

const MemberContext = React.createContext({
  member: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setMember: () => {},
})

export default MemberContext

export class MemberProvider extends Component {
  constructor(props) {
    super(props)
    const state = { member: {}, error: null }

    this.state = state;
  }

  componentDidMount() {
   
  }

  componentWillUnmount() {
   
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setMember = member => {
    this.setState({ member })
  }

  render() {
    const value = {
      member: this.state.member,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setMember: this.setMember,
    }
    return (
      <MemberContext.Provider value={value}>
        {this.props.children}
      </MemberContext.Provider>
    )
  }
}
