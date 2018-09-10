import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'
import { translate } from 'react-i18next'
import { compose } from 'ramda'

import LivePresentation from '../../containers/Account/LivePresentation'

const enhanced = compose(
  translate(),
  withRouter
)

class LivePresentationPage extends PureComponent {
  constructor (props) {
    super(props)
    this.handleSignup = this.handleSignup.bind(this)
  }

  // eslint-disable-next-line class-methods-use-this
  handleSignup (e) {
    e.preventDefault()
    window.location = 'https://dashboard.pagar.me/#/signup'
  }

  render () {
    return (
      <LivePresentation
        onGotoSignup={this.handleSignup}
        t={this.props.t}
      />
    )
  }
}

LivePresentationPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default enhanced(LivePresentationPage)
