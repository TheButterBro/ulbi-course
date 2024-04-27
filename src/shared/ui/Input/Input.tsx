import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './Input.module.scss'
import {ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface IInputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    onChange?: (value: string) => void,
    type: string,
    placeholder?: string,
    autoFocus?: boolean,
}

export const Input = memo((props: IInputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus = false,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);
    const inputMaxWidth = ref.current?.clientWidth;
    const caretLastPosition = inputMaxWidth / 8.9;

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    const onFocus = () => {
        setIsFocused(true);
    }

    const onBlur = () => {
        setIsFocused(false);
    }

    const onSelect = (e: any) => {
        const selectionStart = e?.target?.selectionStart;

        if (selectionStart > caretLastPosition) {
            setCaretPosition(caretLastPosition);

            return
        }

        setCaretPosition( selectionStart || 0);
    }

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder &&
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            }
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    className={cls.input}
                    value={value}
                    onChange={onChangeHandler}
                    type={type}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    spellCheck={false}
                    {...otherProps}
                />
                {isFocused &&
                    <span
                        className={cls.caret}
                        style={{left: caretPosition * 8.9 + 'px'}}
                    />
                }
            </div>

        </div>
    );
});