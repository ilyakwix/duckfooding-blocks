import classNames from 'classnames';
import styles from './cta-section-with-quote.module.scss';
import { Button } from '../button/button';
import AbstractPng from '../../assets/abstract.png';

export interface CtaSectionWithQuoteProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CtaSectionWithQuote = ({ className }: CtaSectionWithQuoteProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.container}>
                <div className={styles.main}>
                    <h3 className={styles.title}>Premature optimization is the root of all evil</h3>
                    <p className={styles.description}>
                        Donald Knuth is known for his comprehensive multi-volume work "The Art of
                        Computer Programming." He emphasizes the importance of writing clear,
                        correct, and efficient code.
                    </p>
                    <Button variant="white">Edit in Codux</Button>
                </div>
                <blockquote className={styles.quoteContainer}>
                    <p className={styles.quote}>
                        While optimization is important, especially in performance-critical
                        applications, it needs to be balanced with the practical requirements of
                        finishing products, maintaining them, and the real-world impact of the
                        optimizations. This is a paragraph.
                    </p>
                    <footer className={styles.footer}>
                        <span className={styles.author}>ChatGPT</span>
                        <cite>on Donald Knuth</cite>
                    </footer>
                </blockquote>
            </div>
            <img src={AbstractPng} alt="" className={styles.illustration} />
        </div>
    );
};
