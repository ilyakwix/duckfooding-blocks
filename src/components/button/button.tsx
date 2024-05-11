import classNames from 'classnames';
import styles from './button.module.scss';

type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'outline'
    | 'success'
    | 'warning'
    | 'error'
    | 'white'
    | 'gray1'
    | 'gray2'
    | 'gray3'
    | 'black';

type ButtonSize = 'standard' | 'small' | 'large';

export interface ButtonProps {
    className?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Button = ({
    className,
    variant = 'primary',
    size = 'standard',
    children = 'Button',
    onClick,
}: ButtonProps) => {
    return (
        <button
            className={classNames(styles.root, styles[variant], styles[size], className)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
