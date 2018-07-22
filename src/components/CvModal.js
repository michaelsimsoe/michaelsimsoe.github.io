import React, { Component } from 'react'
import Modal from 'react-responsive-modal'

export default class App extends Component {
  state = {
    open: false,
  }

  onOpenModal = () => {
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    return (
      <div className="modal-btn-container">
        <button className="link-btn modal-btn" onClick={this.onOpenModal}>
          What DO I know?
        </button>
        <Modal
          className="modal"
          open={open}
          onClose={this.onCloseModal}
          center
          classNames={{ modal: 'custom-modal', closeButton: 'custom-close' }}
        >
          <div className="custom-modal-container">
            <h2>I am in the making!</h2>
            <h3>But I'm comfortable with:</h3>
            <p>
              <strong>Javascript.</strong> I love javascript. There is so much
              to learn. There are so many to learn from. There is so much
              happening! I like <strong>React</strong>. I'm learning to use{' '}
              <strong>Redux</strong>. <em>I want to learn Angular</em>.
            </p>
            <p>
              <strong>HTML5</strong> and <strong>CSS3</strong> of course!
              Especially CSS. I'm amazed at what you can do with it.
            </p>
            <p>
              <strong>Node.js</strong> and some <strong>Ruby on Rails</strong>{' '}
              on the backend.
            </p>
            <p>
              I'm comfortable with <strong>Git</strong>. I use{' '}
              <strong>Travis CI</strong> if I need it. I'm learning{' '}
              <strong>Docker</strong>.
            </p>
            <p>It's all a big, great exciting rabbit hole!</p>
          </div>
        </Modal>
      </div>
    )
  }
}
