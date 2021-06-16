import React from 'react';
import './App.css';
import AppStateProvider from './AppStateProvider';
import Header from './components/header/Header';
import Playground from './components/playground/Playground';

export default function App() {
  return (
    <AppStateProvider>
      <Header />

      <main className="container my-4">
        <Playground />
      </main>
    </AppStateProvider>
  );
}
