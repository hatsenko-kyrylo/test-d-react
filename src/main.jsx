import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../src/components/app/App.jsx';
import '../src/styles/index.css';

createRoot(document.getElementById('root')).render(
    <Router>
        <App />
    </Router>
);
