import { useState } from 'react'
import './App.css'
import Modal from './components/modal/modal'

const App = () => {
const [modal, setModal] = useState('')

  return (
    <>
    <Modal/>
    </>
  )
}

export default App
