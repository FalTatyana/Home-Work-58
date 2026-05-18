import { useState } from 'react'
import Modal from './components/modal/Modal'
import type { btn } from './components/types/types'
import Alert from './components/alert/Alert'
import ShowButtons from './components/buttons/ShowButtons'
import { AnimatePresence } from "motion/react"

const App = () => {
  const [show, setShow] = useState(false)
  const [showWarning, setShowWarning] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const [modalBtns] = useState<btn[]>([
    { type: 'primary', label: 'Continue', onClick: () => (alert('Clicked continue')) },
    { type: 'danger', label: 'Close', onClick: () => (alert('Clicked close')) }
  ])

  return (
    <>
      <ShowButtons
        onClickWarning={() => setShowWarning(true)}
        onClickSuccess={() => setShowSuccess(true)}
        onClickModal={() => setShow(true)}
      />
      <Modal
        title='Modal title'
        show={show}
        onClose={() => setShow(false)}
        body={<p>Some modal content</p>}
        footer=
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
      />
      <AnimatePresence>
        {showWarning && (
          <Alert
            key="warning"
            onDismiss={() => setShowWarning(false)}
            showAlert={showWarning}
            type="warning"
            clickDismissable={false}
          >
            <span>This is warning alert</span>
          </Alert>
        )}

        {showSuccess && (
          <Alert
            key="success"
            onDismiss={() => setShowSuccess(false)}
            showAlert={showSuccess}
            type="success"
            clickDismissable={true}
          >
            <span>This is success alert</span>
          </Alert>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
