import classNames from 'classnames';
import styles from './cards-section.module.scss';
import { Card } from '../card/card';
import DieterRams2Webp from '../../assets/dieter-rams2.webp';
import PaulRandWebp from '../../assets/paul-rand.webp';
import RayEamesWebp from '../../assets/ray-eames.webp';

export interface CardsSectionProps {
    className?: string;
    backgroundColor?: 'primary' | 'secondary' | 'white' | 'gray';
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CardsSection = ({ className, backgroundColor = 'white' }: CardsSectionProps) => {
    return (
        <div className={classNames(styles.root, styles[backgroundColor], className)}>
            <div className={styles.content}>
                <Card
                    className={classNames(backgroundColor === 'white' && styles.cardOnWhite)}
                    title="Card Title"
                    alignment="center"
                    description="This is a card description"
                    link="Link"
                    to="codux.com"
                    imageUrl={DieterRams2Webp}
                    imageOverlay
                />
                <Card
                    className={classNames(backgroundColor === 'white' && styles.cardOnWhite)}
                    title="Card Title"
                    alignment="center"
                    description="This is a card description"
                    link="Link"
                    to="codux.com"
                    imageUrl={PaulRandWebp}
                    imageOverlay
                />
                <Card
                    className={classNames(backgroundColor === 'white' && styles.cardOnWhite)}
                    title="Card Title"
                    alignment="center"
                    description="This is a card description"
                    link="Link"
                    to="codux.com"
                    imageUrl={RayEamesWebp}
                    imageOverlay
                />
            </div>
        </div>
    );
};
