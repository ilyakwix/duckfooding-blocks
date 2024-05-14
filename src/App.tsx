import styles from './App.module.scss';
import { CtaSectionWithImage } from './components/cta-section-with-image/cta-section-with-image';
import { CtaSectionWithQuote } from './components/cta-section-with-quote/cta-section-with-quote';
import AbstractWebp from './assets/abstract.webp';
import { CardsSection } from './components/cards-section/cards-section';
import { cards, terminatorCards, cardsWithoutImages } from './content/cards';

function App() {
    return (
        <div className={styles.root}>
            <CtaSectionWithQuote
                title="Premature optimization is the root of all evil"
                description='Donald Knuth is known for his comprehensive multi-volume work "The Art of Computer Programming." He emphasizes the importance of writing clear, correct, and efficient code.'
                buttonLabel="Edit in Codux"
                author="ChatGPT"
                quote="While optimization is important, especially in performance-critical applications, it needs to be balanced with the practical requirements of finishing products, maintaining them, and the real-world impact of the optimizations."
                to="codux.com"
                reference="on Donald Knuth"
            />
            <CtaSectionWithImage
                kicker="Linus Torvalds"
                to="codux.com"
                imageUrl={AbstractWebp}
                buttonLabel="Edit in Codux"
                title="Talk is cheap. Show me the code."
            />
            <CardsSection cards={cards} backgroundColor="gray1" />
            <CardsSection
                cards={terminatorCards}
                backgroundColor="white"
                cardAlignment="left"
                cardVariant="small"
                columns={4}
                imageAspectRatio="square"
            />
            <CardsSection cards={cardsWithoutImages} backgroundColor="secondary" />
        </div>
    );
}

export default App;
