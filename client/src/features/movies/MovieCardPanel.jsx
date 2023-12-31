import CloseButton from '../../ui/CloseButton';
import RatingPanel from '../../ui/RatingPanel';
import './movieCardPanel.scss';

export default function MovieCardPanel({ onSetIsPanelVisible }) {
    return (
        <div className='movie-card-panel'>
            <div className='movie-card-panel__close-button-container'>
                <CloseButton
                    onCloseHandler={() => onSetIsPanelVisible(false)}
                />
            </div>
            <RatingPanel />
        </div>
    )
}