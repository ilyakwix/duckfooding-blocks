import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';
import styles from './button.board.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'Button',
    Board: () => (
        <div className={styles.root}>
            <div className={styles.section}>
                <div className={styles.container}>
                    <h4 className={styles.sectionTitle}>Button Sizes</h4>
                    <div className={styles.buttonSizeContainer}>
                        <Button size="small">Small</Button>
                        <Button size="standard">Standard</Button>
                        <Button size="large">Large</Button>
                    </div>
                </div>
                <div className={styles.container}>
                    <h4 className={styles.sectionTitle}>Theme Colors</h4>
                    <div className={styles.buttonSizeContainer}>
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="accent">Accent</Button>
                        <Button variant="outline">Outline</Button>
                    </div>
                </div>
                <div className={styles.container}>
                    <h4 className={styles.sectionTitle}>Feedback Colors</h4>
                    <div className={styles.buttonSizeContainer}>
                        <Button variant="success">Success</Button>
                        <Button variant="warning">Warning</Button>
                        <Button variant="error">Error</Button>
                    </div>
                </div>
                <div className={styles.container}>
                    <h4 className={styles.sectionTitle}>Neutral Colors</h4>
                    <div className={styles.buttonSizeContainer}>
                        <Button variant="white">White</Button>
                        <Button variant="gray1">Gray 1</Button>
                        <Button variant="gray2">Gray 2</Button>
                        <Button variant="gray3">Gray 3</Button>
                        <Button variant="black">Black</Button>
                    </div>
                </div>
            </div>
        </div>
    ),
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            left: 0,
            top: 0,
            right: 0,
        },
    },
});
