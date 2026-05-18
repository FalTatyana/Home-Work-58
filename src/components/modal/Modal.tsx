
interface Props {
    title: string
    body: React.ReactNode
    footer: React.ReactNode
    show: boolean
    onClose: () => void
}

const Modal = ({ title, body, show, onClose, footer }: Props) => {
    return (
        <>
            <div
                className="modal-backdrop show"
                style={{ display: show ? 'block' : "none" }}>
            </div>
            <div
                onClick={onClose}
                className="modal show"
                tabIndex={-1}
                style={{ display: show ? 'block' : 'none' }}
            >
                <div className="modal-dialog">
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
                            {body}
                        </div>
                        <div className="modal-footer">{footer}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal