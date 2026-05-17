import { useState } from 'react'
import './App.css'
import Modal from './components/modal/Modal'
import ButtonShow from './components/button/ButtonShow'

const App = () => {
  const [show, setShow] = useState(false)

  return (
    <>
    <ButtonShow
    onClick={() => setShow(true)}
    />
      <Modal
        title='Modal title'
        show={show}
        onClose={() => setShow(false)}
      >
        <p>Some modal content</p>
      </Modal>
    </>
  )
}

export default App
