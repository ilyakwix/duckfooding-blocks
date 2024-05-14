import React from 'react';
import classNames from 'classnames';
import styles from './cta-section-with-image.module.scss';
import { Button } from '../button/button';
import AbstractWebp from '../../assets/abstract.webp';
import { BackgroundColorOptions } from '../types';

export interface CtaSectionWithImageProps {
    className?: string;
    imageUrl?: string;
    title?: string;
    kicker?: string;
    buttonLabel: string;
    to: string;
    backgroundColor?: BackgroundColorOptions;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CtaSectionWithImage = ({
    className,
    imageUrl = AbstractWebp,
    title = 'Title',
    kicker,
    buttonLabel = 'Call to Action',
    to = '/',
    backgroundColor = 'white',
}: CtaSectionWithImageProps) => {
    const buttonVariant = React.useMemo(() => {
        switch (backgroundColor) {
            case 'primary':
                return 'white';
            case 'secondary':
            case 'gray3':
            case 'black':
                return 'accent';
            default:
                return 'primary';
        }
    }, [backgroundColor]);
    return (
        <section className={classNames(styles.root, styles[backgroundColor], className)}>
            <div className={styles.container}>
                <img src={imageUrl} alt="" className={styles.image} />
                <div className={styles.main}>
                    {kicker && (
                        <span
                            className={classNames(styles.kicker, styles[`on-${backgroundColor}`])}
                        >
                            {kicker}
                        </span>
                    )}
                    <h2 className={styles.title}>{title}</h2>
                    <Button variant={buttonVariant}>{buttonLabel}</Button>
                </div>
            </div>
        </section>
    );
};
