import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardProps {
    className?: string;
    variant?: 'default' | 'small';
    alignment?: 'left' | 'center';
    imageUrl?: string;
    imageAltText?: string;
    title: string;
    description?: string;
    link?: string;
    to?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Card = ({
    className,
    variant="default",
    alignment="left",
    imageUrl,
    imageAltText,
    title,
    description,
    link,
    to,
}: CardProps) => {
    const image = imageUrl && <img src={imageUrl} alt={imageAltText} className={styles.image} />
    return (
        <div className={classNames(styles.root, className)}>
            {to ? <a href={to}>{image}</a> : image}
            <div className={classNames(styles.details, styles[alignment], styles[variant])}>
                <h4 className={styles.title}>{title}</h4>
                {description && <span className={styles.description}>{description}</span>}
                {link && to && (
                    <a href={to} className={styles.link}>
                        {link}
                    </a>
                )}
            </div>
        </div>
    );
};
