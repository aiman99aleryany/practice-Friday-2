import React from 'react';
import { createRoot } from 'react-dom/client';
import Container from './Container';
import './index.css';

const contain = document.querySelector('#root');
const root = createRoot(contain);

root.render(<Container />);
