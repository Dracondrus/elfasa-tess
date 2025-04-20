import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Импортируем необходимые компоненты из react-router-dom
import FirstLayout from "./features/app/components/desktopv1/MainLayout";

import "./styles/main.scss";
import GoogleSheetsForm from './features/app/components/googleSheet/GoogleSheet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstLayout />} /> 
        <Route path="/register" element={<GoogleSheetsForm />} /> 
      </Routes>
    </Router>
  );
}

export default App;
