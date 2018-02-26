import React, { Component } from 'react'
import createHistory from 'history/createBrowserHistory'

class AnchorLink extends Component {
  constructor(props) {
    super(props)
    this.smoothScroll = this.smoothScroll.bind(this)
    this.history = createHistory()
  }
  componentDidMount() {
    require('smoothscroll-polyfill').polyfill()
  }
  getOffset(value) {
    return parseInt(value)
  }
  smoothScroll(e) {
    e.preventDefault()
    let offset = (this.props.offset) ? this.getOffset(this.props.offset) : 0
    const id = (e.target.hasAttribute('href')) ? e.target.getAttribute('href').slice(1) : e.target.dataset.href.slice(1)
    window.scroll({
      top: document.getElementById(`${id}`).offsetTop - offset,
      behavior: 'smooth'
    })
    this.history.push(`/${id}`)
  }
  render() {
    return (
      <a {...this.props} onClick={this.smoothScroll}>{this.props.children}</a>
    )
  }
}

export default AnchorLink