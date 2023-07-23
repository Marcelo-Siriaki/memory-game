import puzzleIcon from "../../assets/puzzle-icon.png";
import './styles.css';

export default function Sidebar({ setStateCards, cards }) {

    function handleReset() {
        { cards.forEach((card) => card.turned = false) };
        setStateCards([...cards]);
    }

    return (
        <nav>
            <div className='sidebar-top'>
                <img src={puzzleIcon} alt='puzzle' />
                <span>
                    cubos puzzle
                </span>
            </div>
            <button
                className='btn-reset'
                onClick={handleReset}
            >Reset</button>
        </nav>
    )
}