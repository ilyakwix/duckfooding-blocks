import { createBoard } from '@wixc3/react-board';
import { CtaSectionWithImage } from '../../../components/cta-section-with-image/cta-section-with-image';
import AbstractWebp from '../../../assets/abstract.webp';

export default createBoard({
    name: 'CTA Section with Image',
    Board: () => (
        <div>
            <CtaSectionWithImage
                kicker="Linus Torvalds"
                to="codux.com"
                imageUrl={AbstractWebp}
                buttonLabel="Edit in Codux"
                title="Talk is cheap. Show me the code."
                backgroundColor="primary"
            />
            <CtaSectionWithImage
                kicker="Linus Torvalds"
                to="codux.com"
                imageUrl={AbstractWebp}
                buttonLabel="Edit in Codux"
                title="Talk is cheap. Show me the code."
                backgroundColor="secondary"
            />
            <CtaSectionWithImage
                kicker="Linus Torvalds"
                to="codux.com"
                imageUrl={AbstractWebp}
                buttonLabel="Edit in Codux"
                title="Talk is cheap. Show me the code."
                backgroundColor="white"
            />
            <CtaSectionWithImage
                kicker="Linus Torvalds"
                to="codux.com"
                imageUrl={AbstractWebp}
                buttonLabel="Edit in Codux"
                title="Talk is cheap. Show me the code."
                backgroundColor="gray1"
            />
            <CtaSectionWithImage
                kicker="Linus Torvalds"
                to="codux.com"
                imageUrl={AbstractWebp}
                buttonLabel="Edit in Codux"
                title="Talk is cheap. Show me the code."
                backgroundColor="gray2"
            />
            <CtaSectionWithImage
                kicker="Linus Torvalds"
                to="codux.com"
                imageUrl={AbstractWebp}
                buttonLabel="Edit in Codux"
                title="Talk is cheap. Show me the code."
                backgroundColor="gray3"
            />
            <CtaSectionWithImage
                kicker="Linus Torvalds"
                to="codux.com"
                imageUrl={AbstractWebp}
                buttonLabel="Edit in Codux"
                title="Talk is cheap. Show me the code."
                backgroundColor="black"
            />
        </div>
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
