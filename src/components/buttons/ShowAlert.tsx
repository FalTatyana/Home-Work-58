interface Props {
onClick: () => void
}

const ShowAlert = ({onClick}: Props) => {
  return (
    <button onClick={onClick} type="button" className="btn btn-primary btn-lg">Show Modal</button>
  )
}

export default ShowAlert