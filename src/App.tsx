import { useState } from 'react'
import './App.css'
import Modal from './components/modal/Modal'
import type { btn } from './components/types/types'
import ModalFooter from './components/modal/ModalFooter'
import ShowAlert from './components/buttons/ShowAlert'
import ShowModal from './components/buttons/ShowModal'

const App = () => {
  const [show, setShow] = useState(false)

  const [modalBtns] = useState<btn[]>([
    { type: 'primary', label: 'Continue', onClick: () => (console.log('Clicked continue')) },
    { type: 'danger', label: 'Close', onClick: () => (console.log('Clicked close')) }
  ])

  return (
    <>
      <ShowModal
        onClick={() => setShow(true)}
      />
      <Modal
        title='Modal title'
        show={show}
        onClose={() => setShow(false)}
      >
        <p>Some modal content</p>
        <ModalFooter>
          {modalBtns.map((btn, index) => (
            <button
              key={index}
              type="button"
              className={`btn btn-${btn.type}`}
              onClick={btn.onClick}
            >
              {btn.label}
            </button>
          ))}
        </ModalFooter>
      </Modal>
    </>
  )
}

export default App
