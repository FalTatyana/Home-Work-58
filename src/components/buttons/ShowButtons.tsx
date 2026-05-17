interface Props {
  onClickWarning: () => void
  onClickSuccess: () => void
  onClickModal: () => void
}

const ShowButtons = ({ onClickWarning, onClickSuccess, onClickModal }: Props) => {
  return (
    <>
      <button
        onClick={onClickModal}
        type="button"
        className="btn btn-primary btn-lg m-3">
        Show Modal
      </button>
      <button
        onClick={onClickWarning}
        type="button"
        className="btn btn-warning btn-lg m-3">
        Show Alert Warning
      </button>
      <button
        onClick={onClickSuccess}
        type="button"
        className="btn btn-success btn-lg m-3">
        Show Alert success
      </button>
    </>

  )
}

export default ShowButtons