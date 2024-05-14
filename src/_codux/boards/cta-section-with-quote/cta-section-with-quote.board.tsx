import { createBoard } from '@wixc3/react-board';
import { CtaSectionWithQuote } from '../../../components/cta-section-with-quote/cta-section-with-quote';

export default createBoard({
    name: 'CTA Section with Quote',
    Board: () => (
        <div>
            <CtaSectionWithQuote
                title="Premature optimization is the root of all evil"
                description='Donald Knuth is known for his comprehensive multi-volume work "The Art of Computer Programming." He emphasizes the importance of writing clear, correct, and efficient code.'
                buttonLabel="Edit in Codux"
                author="ChatGPT"
                quote="While optimization is important, especially in performance-critical applications, it needs to be balanced with the practical requirements of finishing products, maintaining them, and the real-world impact of the optimizations."
                reference="on Donald Knuth"
                backgroundColor="primary"
            />
            <CtaSectionWithQuote
                title="Premature optimization is the root of all evil"
                description='Donald Knuth is known for his comprehensive multi-volume work "The Art of Computer Programming." He emphasizes the importance of writing clear, correct, and efficient code.'
                buttonLabel="Edit in Codux"
                author="ChatGPT"
                quote="While optimization is important, especially in performance-critical applications, it needs to be balanced with the practical requirements of finishing products, maintaining them, and the real-world impact of the optimizations."
                reference="on Donald Knuth"
                backgroundColor="secondary"
            />
            <CtaSectionWithQuote
                title="Premature optimization is the root of all evil"
                description='Donald Knuth is known for his comprehensive multi-volume work "The Art of Computer Programming." He emphasizes the importance of writing clear, correct, and efficient code.'
                buttonLabel="Edit in Codux"
                author="ChatGPT"
                quote="While optimization is important, especially in performance-critical applications, it needs to be balanced with the practical requirements of finishing products, maintaining them, and the real-world impact of the optimizations."
                reference="on Donald Knuth"
                backgroundColor="white"
            />
            <CtaSectionWithQuote
                title="Premature optimization is the root of all evil"
                description='Donald Knuth is known for his comprehensive multi-volume work "The Art of Computer Programming." He emphasizes the importance of writing clear, correct, and efficient code.'
                buttonLabel="Edit in Codux"
                author="ChatGPT"
                quote="While optimization is important, especially in performance-critical applications, it needs to be balanced with the practical requirements of finishing products, maintaining them, and the real-world impact of the optimizations."
                reference="on Donald Knuth"
                backgroundColor="gray1"
            />
            <CtaSectionWithQuote
                title="Premature optimization is the root of all evil"
                description='Donald Knuth is known for his comprehensive multi-volume work "The Art of Computer Programming." He emphasizes the importance of writing clear, correct, and efficient code.'
                buttonLabel="Edit in Codux"
                author="ChatGPT"
                quote="While optimization is important, especially in performance-critical applications, it needs to be balanced with the practical requirements of finishing products, maintaining them, and the real-world impact of the optimizations."
                reference="on Donald Knuth"
                backgroundColor="gray2"
            />
            <CtaSectionWithQuote
                title="Premature optimization is the root of all evil"
                description='Donald Knuth is known for his comprehensive multi-volume work "The Art of Computer Programming." He emphasizes the importance of writing clear, correct, and efficient code.'
                buttonLabel="Edit in Codux"
                author="ChatGPT"
                quote="While optimization is important, especially in performance-critical applications, it needs to be balanced with the practical requirements of finishing products, maintaining them, and the real-world impact of the optimizations."
                reference="on Donald Knuth"
                backgroundColor="gray3"
            />
            <CtaSectionWithQuote
                title="Premature optimization is the root of all evil"
                description='Donald Knuth is known for his comprehensive multi-volume work "The Art of Computer Programming." He emphasizes the importance of writing clear, correct, and efficient code.'
                buttonLabel="Edit in Codux"
                author="ChatGPT"
                quote="While optimization is important, especially in performance-critical applications, it needs to be balanced with the practical requirements of finishing products, maintaining them, and the real-world impact of the optimizations."
                reference="on Donald Knuth"
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
