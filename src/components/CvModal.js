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
          classNames={{ modal: 'custom-modal' }}
        >
          <div className="custom-modal-container">
            <h2>My skillz:</h2>
            <ul>
              <li>Javascript</li>
            </ul>
          </div>
        </Modal>
      </div>
    )
  }
}
