import { motion } from "framer-motion"
interface Props {
    onDismiss?: () => void
    children: React.ReactNode
    showAlert: boolean
    type: string
    clickDismissable: boolean
}

const Alert = ({ onDismiss, showAlert, type, children, clickDismissable }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onClick={clickDismissable ? onDismiss : undefined}
            className={`alert alert-${type} alert-dismissible fade show`}
            role="alert"
            style={
                {
                    display: showAlert ? 'block' : 'none',
                    width: "600px",
                    margin: "80px auto 0"
                }
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
        </motion.div>
    )
}

export default Alert