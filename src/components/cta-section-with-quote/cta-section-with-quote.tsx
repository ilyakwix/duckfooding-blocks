import React from 'react';
import classNames from 'classnames';
import styles from './cta-section-with-quote.module.scss';
import { Button } from '../button/button';
import AbstractPng from '../../assets/abstract.png';
import { BackgroundColorOptions } from '../types';

export interface CtaSectionWithQuoteProps {
    className?: string;
    title?: string;
    description?: string;
    buttonLabel?: string;
    to?: string;
    quote?: string;
    author?: string;
    reference?: string;
    backgroundColor?: BackgroundColorOptions;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CtaSectionWithQuote = ({
    className,
    title = 'Title',
    description,
    buttonLabel = 'Call to Action',
    to = '/',
    quote = 'Quote',
    author = 'Author',
    reference,
    backgroundColor = 'primary',
}: CtaSectionWithQuoteProps) => {
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
                <div className={styles.main}>
                    <h3 className={styles.title}>{title}</h3>
                    {description && <p className={styles.description}>{description}</p>}
                    <Button variant={buttonVariant}>{buttonLabel}</Button>
                </div>
                <blockquote className={styles.quoteContainer}>
                    <p className={styles.quote}>{quote}</p>
                    <footer className={styles.footer}>
                        <span className={classNames(styles.author, styles[`on-${backgroundColor}`])}>{author}</span>
                        {reference && <cite>{reference}</cite>}
                    </footer>
                </blockquote>
            </div>
            <img src={AbstractPng} alt="" className={styles.illustration} />
        </section>
    );
};
