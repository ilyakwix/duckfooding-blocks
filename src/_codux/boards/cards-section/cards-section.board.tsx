import { createBoard } from '@wixc3/react-board';
import { CardsSection } from '../../../components/cards-section/cards-section';

export default createBoard({
    name: 'Cards Section',
    Board: () => (
        <div>
            <CardsSection backgroundColor="primary" />
            <CardsSection backgroundColor="secondary" />
            <CardsSection backgroundColor="white" />
            <CardsSection backgroundColor="gray1" />
            <CardsSection backgroundColor="gray2" />
            <CardsSection backgroundColor="gray3" />
            <CardsSection backgroundColor="black" />
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            left: 0,
            top: 0,
            right: 0,
        },
    },
});
