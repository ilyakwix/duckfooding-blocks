import { createBoard } from '@wixc3/react-board';
import { CtaSectionWithQuote } from '../../../components/cta-section-with-quote/cta-section-with-quote';

export default createBoard({
    name: 'CTA Section with Quote',
    Board: () => (
        <CtaSectionWithQuote
            title="Premature optimization is the root of all evil"
            description='Donald Knuth is known for his comprehensive multi-volume work "The Art of Computer Programming." He emphasizes the importance of writing clear, correct, and efficient code.'
            buttonLabel="Edit in Codux"
            author="ChatGPT"
            quote="While optimization is important, especially in performance-critical applications, it needs to be balanced with the practical requirements of finishing products, maintaining them, and the real-world impact of the optimizations. This is a paragraph."
            to="codux.com"
            reference="on Donald Knuth"
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
