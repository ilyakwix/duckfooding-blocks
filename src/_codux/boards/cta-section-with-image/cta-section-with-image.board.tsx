import { createBoard } from '@wixc3/react-board';
import { CtaSectionWithImage } from '../../../components/cta-section-with-image/cta-section-with-image';
import AbstractWebp from '../../../assets/abstract.webp';

export default createBoard({
    name: 'CtaSectionWithImage',
    Board: () => (
        <CtaSectionWithImage
            kicker="Linus Torvalds"
            to="codux.com"
            imageUrl={AbstractWebp}
            buttonLabel="Edit in Codux"
            title="Talk is cheap. Show me the code."
        />
    ),
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
