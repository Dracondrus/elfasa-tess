import { useEffect, useState } from 'react';
import { FaRegClock } from 'react-icons/fa';
import styles from './Timer.module.scss';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 минут в секундах

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${minutes} : ${secs}`;
  };

  return (
    <div className={styles.timerContainer}>
      <FaRegClock className={styles.icon} />
      <span className={styles.time}>{formatTime(timeLeft)}</span>
    </div>
  );
};

export default CountdownTimer;
