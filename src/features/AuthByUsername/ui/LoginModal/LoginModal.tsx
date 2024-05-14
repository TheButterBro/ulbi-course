import {Modal} from "shared/ui/Modal/Modal";
import {LoginFormAsync} from "features/AuthByUsername/ui/LoginForm/LoginForm.async";

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
            <LoginFormAsync />
        </Modal>
    );
};