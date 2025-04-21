import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './GoogleSheetsForm.module.scss';

const GoogleSheetsForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Валидация телефона
    if (!phone || phone.length !== 13 || !/^\+998\d{9}$/.test(phone)) {
      alert("Iltimos, telefon raqamni to'g'ri kiriting (+998XXXXXXXXX)");
      setIsSubmitting(false);
      return;
    }

    const scriptUrl = 'https://script.google.com/macros/s/AKfycbzL1kXK98jeOh6tbAS0RCk7Uu06ilXrQLHDi0T8hV_NgAALtlysTTgWAAPlo4-CG1A/exec';

    try {
      // Формируем URL с параметрами
      const params = new URLSearchParams();
      params.append('Name', name);
      params.append('Phone', phone);

      const response = await fetch(`${scriptUrl}?${params.toString()}`, {
        method: 'POST',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      // Проверяем успешность запроса
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.text();
      console.log('Success:', result);
      alert('Ma\'lumotlar muvaffaqiyatli yuborildi!');
      setName('');
      setPhone('');
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
      alert('Ma\'lumotlarni yuborishda xatolik yuz berdi. Iltimos, keyinroq urunib ko\'ring.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/[^0-9+]/.test(value)) return;
    if (value.length > 13) return;
    setPhone(value);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className={styles.whiteBackground}>
      <form onSubmit={handleSubmit} className={styles.googleSheetsForm}>
        <div className={styles.formGroup}>
          <label>
            Ism:
            <input
              name="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.inputField}
              disabled={isSubmitting}
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label>
            Telefon raqam:
            <input
              name="Phone"
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="+998 __ ___ __ __"
              maxLength={13}
              required
              className={styles.inputField}
              disabled={isSubmitting}
            />
          </label>
        </div>
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Yuborilmoqda...' : 'Yuborish'}
        </button>
        <button 
          type="button" 
          onClick={handleBackClick} 
          className={styles.backButton}
          disabled={isSubmitting}
        >
          Orqaga
        </button>
      </form>
    </div>
  );
};

export default GoogleSheetsForm;