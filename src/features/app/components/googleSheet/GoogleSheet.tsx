import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Для навигации
import styles from './GoogleSheetsForm.module.scss'; // Импортируем стили

const GoogleSheetsForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Для навигации

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверка, что номер телефона заполнен корректно
    if (!phone || phone.length !== 13 || !/^\+998\d{9}$/.test(phone)) {
      setError('Tog\'ri kiriting telefon raqamni'); // Сообщение об ошибке
      return;
    }

    const sheetId = '1tEjSclR5Ji7Oz5WJCW6lD6_J-QgWFB-8LR47Fxf8sdo'; // Замените на ID вашего Google Sheets
    const apiKey = 'AIzaSyBGUm7Ag_RDfMi8W3YS39-qOJ0EPscFMfk'; // Замените на ваш API ключ

    try {
      // Отправляем данные в Google Sheets
      await axios.post(
        `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A1:B1:append?valueInputOption=RAW&key=${apiKey}`,
        {
          values: [
            [name, phone], // Данные, которые хотите отправить
          ],
        }
      );
      alert('Ma\'lumotlar muvaffaqiyatli yuborildi!');
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
      alert('Xatolik yuz berdi.');
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Форматируем номер телефона в виде +998 __ ___ __ __
    if (/[^0-9+]/.test(value)) return; // Разрешаем только цифры и плюс
    if (value.length > 13) return; // Не даём ввести больше символов
    setPhone(value);
  };

  const handleBackClick = () => {
    navigate('/'); // Перенаправляем на главную страницу
  };

  return (
    <div className={styles.whiteBackground}> {/* Этот контейнер накрывает весь экран белым фоном */}
      <form onSubmit={handleSubmit} className={styles.googleSheetsForm}>
        <div className={styles.formGroup}>
          <label>
            Ism:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label>
            Telefon raqam:
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="+998 __ ___ __ __"
              maxLength={13}
              required
              className={styles.inputField}
            />
          </label>
          {error && <p className={styles.errorText}>{error}</p>} {/* Сообщение об ошибке */}
        </div>
        <button type="submit" className={styles.submitButton}>Yuborish</button>
        <button type="button" onClick={handleBackClick} className={styles.backButton}>Orqaga</button>
      </form>
    </div>
  );
};

export default GoogleSheetsForm;
