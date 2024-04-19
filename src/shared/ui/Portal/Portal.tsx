import {ReactNode} from "react";
import {createPortal} from "react-dom";

interface IPortalProps {
    children: ReactNode;
    domElement?: HTMLElement;
}

export const Portal = (props: IPortalProps) => {
    const {
        children,
        domElement = document.body,
    } = props;

    return (
        createPortal(children, domElement)
    );
};