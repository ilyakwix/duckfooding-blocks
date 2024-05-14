import classNames from 'classnames';
import styles from './cta-section-with-quote.module.scss';
import { Button } from '../button/button';
import AbstractPng from '../../assets/abstract.png';

export interface CtaSectionWithQuoteProps {
    className?: string;
    title: string;
    description?: string;
    buttonLabel: string;
    to: string;
    quote: string;
    author: string;
    reference?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CtaSectionWithQuote = ({
    className,
    title,
    description,
    buttonLabel,
    to,
    quote,
    author,
    reference,
}: CtaSectionWithQuoteProps) => {
    return (
        <section className={classNames(styles.root, className)}>
            <div className={styles.container}>
                <div className={styles.main}>
                    <h3 className={styles.title}>{title}</h3>
                    {description && <p className={styles.description}>
                        {description}
                    </p>}
                    <Button variant="white">{buttonLabel}</Button>
                </div>
                <blockquote className={styles.quoteContainer}>
                    <p className={styles.quote}>
                        {quote}
                    </p>
                    <footer className={styles.footer}>
                        <span className={styles.author}>{author}</span>
                        {reference && <cite>{reference}</cite>}
                    </footer>
                </blockquote>
            </div>
            <img src={AbstractPng} alt="" className={styles.illustration} />
        </section>
    );
};
