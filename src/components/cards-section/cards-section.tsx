import classNames from 'classnames';
import styles from './cards-section.module.scss';
import { Card, CardProps } from '../card/card';
import DieterRams2Webp from '../../assets/dieter-rams2.webp';
import PaulRandWebp from '../../assets/paul-rand.webp';
import RayEamesWebp from '../../assets/ray-eames.webp';
import { BackgroundColorOptions } from '../types';

type BaseCardProps = Omit<CardProps, 'alignment' | 'variant'>;
type CardWithImage = BaseCardProps;
type CardWithoutImage = Omit<
    BaseCardProps,
    'imageUrl' | 'imageAltText' | 'imageOverlay' | 'imageAspectRatio'
>;

const defaultCards: CardWithImage[] = [
    {
        title: 'Card Title',
        description: 'This is a card description',
        link: 'Link',
        to: 'codux.com',
        imageUrl: DieterRams2Webp,
        imageOverlay: true,
    },
    {
        title: 'Card Title',
        description: 'This is a card description',
        link: 'Link',
        to: 'codux.com',
        imageUrl: DieterRams2Webp,
        imageOverlay: true,
    },
    {
        title: 'Card Title',
        description: 'This is a card description',
        link: 'Link',
        to: 'codux.com',
        imageUrl: DieterRams2Webp,
        imageOverlay: true,
    },
];

export interface CardsSectionProps {
    className?: string;
    backgroundColor?: BackgroundColorOptions;
    cards?: CardWithImage[] | CardWithoutImage[];
    cardAlignment?: CardProps['alignment'];
    cardVariant?: CardProps['variant'];
    imageAspectRatio?: CardProps['imageAspectRatio'];
    columns?: 3 | 4;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CardsSection = ({
    className,
    backgroundColor = 'white',
    cards = defaultCards,
    cardAlignment = 'center',
    cardVariant = 'default',
    imageAspectRatio = 'landscape',
    columns = 3
}: CardsSectionProps) => {
    const showCardShadow = backgroundColor === 'white' || backgroundColor === 'gray1';
    return (
        <div className={classNames(styles.root, styles[backgroundColor], className)}>
            <div className={styles.container} style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
                {cards.map((card, i) => (
                    <Card
                        key={i}
                        className={classNames(showCardShadow && styles.cardWithShadow)}
                        {...card}
                        alignment={cardAlignment}
                        variant={cardVariant}
                        imageAspectRatio={imageAspectRatio}
                    />
                ))}
            </div>
        </div>
    );
};
