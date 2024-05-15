import {Modal} from "shared/ui/Modal/Modal";
import {LoginFormAsync} from "features/AuthByUsername/ui/LoginForm/LoginForm.async";
import {memo, Suspense} from "react";
import {Loader} from "shared/ui/Loader/Loader";

interface ILoginModalProps {
    isOpen: boolean,
    onClose: () => void,
}

export const LoginModal = memo((props: ILoginModalProps) => {
    const {
        isOpen,
        onClose
    } = props;

    return (
        <Modal lazy={true} isOpen={isOpen} onClose={onClose}>
            <Suspense fallback={<Loader/>}>
                <LoginFormAsync
                    onSuccess={onClose}
                />
            </Suspense>
        </Modal>
    );
});