import BackDrop from "./BackDrop"
import ModalFooter from "./ModalFooter"

interface Props {
    title: string
    children: React.ReactNode
    show: boolean
    onClose: () => void
}

const Modal = ({ title, children, show, onClose }: Props) => {
    return (
        <>
            <BackDrop show={show} />
            <div
                className="modal show"
                tabIndex={-1}
                style={{ display: show ? 'block' : 'none' }}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button
                                onClick={onClose}
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <ModalFooter children={""} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal