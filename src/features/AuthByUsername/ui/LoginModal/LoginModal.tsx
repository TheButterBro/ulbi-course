import {Modal} from "shared/ui/Modal/Modal";
import {LoginForm} from "../LoginForm/LoginForm";

interface ILoginModalProps {
    isOpen: boolean,
    onClose: () => void,
}

export const LoginModal = (props: ILoginModalProps) => {
    const {
        isOpen,
        onClose
    } = props;

    return (
        <Modal lazy={true} isOpen={isOpen} onClose={onClose}>
            <LoginForm />
        </Modal>
    );
};