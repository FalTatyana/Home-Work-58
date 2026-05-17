interface Props {
  show: boolean
}

const BackDrop = ({ show }: Props) => {
  return (
    <div
      className="modal-backdrop show"
      style={{ display: show ? 'block' : "none" }}>
    </div>
  )
}

export default BackDrop