
interface Props {
    onDismiss?: () => void
    children: React.ReactNode
    showAlert: boolean
    type: string
    clickDismissable: boolean
}

const Alert = ({ onDismiss, showAlert, type, children, clickDismissable }: Props) => {
    return (
        <div
            onClick={clickDismissable ? onDismiss : undefined}
            className={`alert alert-${type} alert-dismissible fade show`}
            role="alert"
            style={
                { display: showAlert ? 'block' : 'none' }
            }
        >
            {children}
            {!clickDismissable && onDismiss && (
                <button
                onClick={onDismiss}
                type="button"
                className="btn-close"
                aria-label="Close">
            </button>
            )}
        </div>
    )
}

export default Alert