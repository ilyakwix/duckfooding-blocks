import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import styles from './card.board.module.scss';
import PaulRandWebp from '../../../assets/paul-rand.webp';
import RayEamesWebp from '../../../assets/ray-eames.webp';
import DieterRams2Webp from '../../../assets/dieter-rams2.webp';
import Arnie2Webp from '../../../assets/arnie2.webp';
import ArnieWebp from '../../../assets/arnie.webp';
import KyleReeseWebp from '../../../assets/kyle-reese.webp';
import TerminatorWebp from '../../../assets/terminator.webp';
import Classnames from 'classnames';

export default createBoard({
    name: 'Card',
    Board: () => (
        <div className={styles.root}>
            <div className={Classnames(styles.content, styles.imageAspectRatio)}>
                <Card
                    imageUrl={DieterRams2Webp}
                    title="Landscape"
                    link="Edit prop"
                    description="ImageAspectRatio. Landscape by default"
                    alignment="center"
                    imageOverlay
                    to="codux.com"
                    imageAspectRatio="landscape"
                />
                <Card
                    imageUrl={PaulRandWebp}
                    title="Square"
                    link="Edit prop"
                    description="ImageAspectRatio"
                    alignment="center"
                    to="codux.com"
                    imageOverlay
                    imageAspectRatio="square"
                />
                <Card
                    imageUrl={RayEamesWebp}
                    title="Portrait"
                    link="Edit prop"
                    description="ImageAspectRatio"
                    alignment="center"
                    to="codux.com"
                    imageOverlay
                    imageAspectRatio="portrait"
                />
            </div>
            <div className={styles.content}>
                <Card
                    imageUrl={Arnie2Webp}
                    title="I'll be back."
                    link="More Quotes"
                    description="The Terminator (1984)"
                    variant="small"
                    to="codux.com"
                    imageOverlay
                />
                <Card
                    imageUrl={ArnieWebp}
                    title="Hasta la vista, baby."
                    link="More Quotes"
                    description="Terminator 2: Judgment Day (1991)"
                    variant="small"
                    to="codux.com"
                    imageOverlay
                />
                <Card
                    imageUrl={KyleReeseWebp}
                    title="Come with me if you want to live."
                    link="More Quotes"
                    description="First said by Kyle Reese in The Terminator (1984) and later repeated by the T-800 in different contexts in the sequels."
                    variant="small"
                    to="codux.com"
                    imageOverlay
                />
                <Card
                    imageUrl={TerminatorWebp}
                    title="Judgment Day is inevitable."
                    link="More Quotes"
                    description="Terminator 3: Rise of the Machines (2003)"
                    variant="small"
                    to="codux.com"
                    imageOverlay
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
        windowWidth: 1440,
    },
});
