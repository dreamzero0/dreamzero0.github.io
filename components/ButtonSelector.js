import styles from '../styles/Home.module.css';

const ButtonSelector = ({ options, selectedId, onSelect }) => {
  return (
    <div className={styles.buttonWrapper}>
      {options.map((option) => (
        <button
          key={option.id}
          className={`${styles.behaviorButton} ${selectedId === option.id ? styles.selected : ''}`}
          onClick={() => onSelect(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonSelector; 