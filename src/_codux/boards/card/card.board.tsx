import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import styles from './card.board.module.scss';

export default createBoard({
    name: 'Card',
    Board: () => (
        <div className={styles.root}>
            <div className={styles.content}>
                <Card
                    imageUrl={
                        'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg'
                    }
                    title="Ray Eames"
                    link="More Quotes"
                    description="What works good is better than what looks good, because what works good lasts."
                    alignment="center"
                    to="codux.com"
                />
                <Card
                    imageUrl={
                        'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg'
                    }
                    title="Ray Eames"
                    link="More Quotes"
                    description="What works good is better than what looks good, because what works good lasts."
                    alignment="center"
                    to="codux.com"
                />
                <Card
                    imageUrl={
                        'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg'
                    }
                    title="Ray Eames"
                    link="More Quotes"
                    description="What works good is better than what looks good, because what works good lasts."
                    alignment="center"
                    to="codux.com"
                />
            </div>
            <div className={styles.content}>
                <Card
                    imageUrl={
                        'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg'
                    }
                    title="Ray Eames"
                    link="More Quotes"
                    description="What works good is better than what looks good, because what works good lasts."
                    variant="small"
                    to="codux.com"
                />
                <Card
                    imageUrl={
                        'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg'
                    }
                    title="Ray Eames"
                    link="More Quotes"
                    description="What works good is better than what looks good, because what works good lasts."
                    variant="small"
                    to="codux.com"
                />
                <Card
                    imageUrl={
                        'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg'
                    }
                    title="Ray Eames"
                    link="More Quotes"
                    description="What works good is better than what looks good, because what works good lasts."
                    variant="small"
                    to="codux.com"
                />
                <Card
                    imageUrl={
                        'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg'
                    }
                    title="Ray Eames"
                    link="More Quotes"
                    description="What works good is better than what looks good, because what works good lasts."
                    variant="small"
                    to="codux.com"
                />
            </div>

            <div className={styles.content}>
                <Card
                    title="Ray Eames"
                    link="More Quotes"
                    description="What works good is better than what looks good, because what works good lasts."
                    alignment="center"
                    to="codux.com"
                />
                <Card
                    title="Ray Eames"
                    link="More Quotes"
                    description="What works good is better than what looks good, because what works good lasts."
                    alignment="center"
                    to="codux.com"
                />
                <Card
                    title="Ray Eames"
                    link="More Quotes"
                    description="What works good is better than what looks good, because what works good lasts."
                    alignment="center"
                    to="codux.com"
                />
            </div>
        </div>
    ),
    isSnippet: false,
    environmentProps: {
        canvasWidth: 354,
        canvasMargin: {
            left: 0,
            right: 0,
        },
        windowBackgroundColor: '#f8f6f4',
    },
});
