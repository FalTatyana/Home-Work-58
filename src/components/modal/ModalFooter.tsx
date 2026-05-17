interface Props {
    children: React.ReactNode
}

const ModalFooter = ({children}: Props) => {
  return (
    <div className="modal-footer">{children}</div>
  )
}

export default ModalFooter