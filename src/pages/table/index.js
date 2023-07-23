import './styles.css';
import cardBack from '../../assets/card-back.png';
import congratsImage from '../../assets/congrats.png';

export default function Table({ stateCards, setStateCards }) {

    function foldCard(cardId) {
        const localCards = [...stateCards];
        const clickedCardIndex = localCards.findIndex((index) => index.id === cardId);
        const clickedCard = localCards[clickedCardIndex];

        const onlyFoldCards = localCards.filter((item) => item.turned);

        if (onlyFoldCards.length > 1) return;

        if (onlyFoldCards.length > 0 && clickedCard.slug === onlyFoldCards[0].slug) {
            clickedCard.turned = !clickedCard.turned;
            setStateCards([...localCards]);

            setTimeout(() => {
                if (clickedCard.id === onlyFoldCards[0].id) {
                    return;
                }

                const filteredCards = localCards.filter((item) =>
                    item.id !== clickedCard.id && item.id !== onlyFoldCards[0].id);

                setStateCards(filteredCards);

            }, 1000);

            return;

        }

        clickedCard.turned = !clickedCard.turned;
        setStateCards([...localCards]);

        setTimeout(() => {
            if (onlyFoldCards.length > 0) {
                localCards.forEach((item) => item.turned = false);
                setStateCards([...localCards]);
            }
        }, 1000);

    }

    return (
        <div className='table-container'>
            {stateCards.length ?
                stateCards.map((card) => {
                    return (<div
                        key={card.id}
                        className='card'
                        style={{ backgroundImage: `url(${card.turned ? card.image : cardBack})` }}
                        onClick={() => foldCard(card.id)}
                    />)
                }
                )
                : <img src={congratsImage} alt="Congrats!" />}
        </div>
    )
}