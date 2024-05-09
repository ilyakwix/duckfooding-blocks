import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import styles from './card.board.module.scss';
import PaulRandWebp from '../../../assets/paul-rand.webp';
import RayEamesWebp from '../../../assets/ray-eames.webp';
import DieterRams2Webp from '../../../assets/dieter-rams2.webp';
import TomCruiseWebp from '../../../assets/tom-cruise.webp';
import SteveJobs2Webp from '../../../assets/steve-jobs2.webp';
import SteveJobsWebp from '../../../assets/steve-jobs.webp';

export default createBoard({
    name: 'Card',
    Board: () => (
        <div className={styles.root}>
            <div className={styles.content}>
                <Card
                    imageUrl={DieterRams2Webp}
                    title="Dieter Rams"
                    link="More Quotes"
                    description="Good design is as little design as possible."
                    alignment="center"
                    imageOverlay
                    to="codux.com"
                />
                <Card
                    imageUrl={PaulRandWebp}
                    title="Paul Rand"
                    link="More Quotes"
                    description="Design is so simple, that's why it is so complicated."
                    alignment="center"
                    to="codux.com"
                    imageOverlay
                />
                <Card
                    imageUrl={RayEamesWebp}
                    title="Ray Eames"
                    link="More Quotes"
                    description="What works good is better than what looks good, because what works good lasts."
                    alignment="center"
                    to="codux.com"
                    imageOverlay
                />
            </div>
            <div className={styles.content}>
                <Card
                    imageUrl={TomCruiseWebp}
                    title="Ray Eames"
                    link="More Quotes"
                    description="What works good is better than what looks good, because what works good lasts."
                    variant="small"
                    to="codux.com"
                    imageOverlay
                />
                <Card
                    imageUrl={SteveJobs2Webp}
                    title="Ray Eames"
                    link="More Quotes"
                    description="What works good is better than what looks good, because what works good lasts."
                    variant="small"
                    to="codux.com"
                    imageOverlay
                />
                <Card
                    imageUrl={SteveJobsWebp}
                    title="Ray Eames"
                    link="More Quotes"
                    description="What works good is better than what looks good, because what works good lasts."
                    variant="small"
                    to="codux.com"
                    imageOverlay
                />
                <Card
                    imageUrl={DieterRams2Webp}
                    title="Ray Eames"
                    link="More Quotes"
                    description="What works good is better than what looks good, because what works good lasts."
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
    },
});
