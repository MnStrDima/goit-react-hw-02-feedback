import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className={styles.buttonWrapper}>
      <button
        type="button"
        className={styles.button}
        id="good"
        onClick={e => onLeaveFeedback(e)}
      >
        Good
      </button>
      <button
        type="button"
        className={styles.button}
        id="neutral"
        onClick={e => onLeaveFeedback(e)}
      >
        Neutral
      </button>
      <button
        type="button"
        className={styles.button}
        id="bad"
        onClick={e => onLeaveFeedback(e)}
      >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
