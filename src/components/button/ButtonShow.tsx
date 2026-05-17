interface Props {
onClick: () => void
}

const ButtonShow = ({onClick}: Props) => {
  return (
    <button onClick={onClick} type="button" className="btn btn-primary btn-lg">Show Modal</button>
  )
}

export default ButtonShow