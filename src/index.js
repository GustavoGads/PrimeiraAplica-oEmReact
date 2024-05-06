import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Main from './components/main/main.jsx';

const nome = "Gustavo"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <Header />
    <Main />
    <Footer />
    
</>
);