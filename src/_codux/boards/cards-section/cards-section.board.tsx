import { createBoard } from '@wixc3/react-board';
import { CardsSection } from '../../../components/cards-section/cards-section';

export default createBoard({
    name: 'CardsSection',
    Board: () => <CardsSection backgroundColor="secondary" />,
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            left: 0,
            top: 0,
            right: 0,
        },
    },
});
