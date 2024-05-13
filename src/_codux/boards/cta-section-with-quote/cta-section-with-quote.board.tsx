import { createBoard } from '@wixc3/react-board';
import { CtaSectionWithQuote } from '../../../components/cta-section-with-quote/cta-section-with-quote';

export default createBoard({
    name: 'CTA Section with Quote',
    Board: () => <CtaSectionWithQuote />,
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            left: 0,
            top: 0,
            right: 0,
        },
        windowWidth: 1440,
    },
});
