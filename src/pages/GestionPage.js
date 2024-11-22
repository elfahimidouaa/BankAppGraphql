import React, { useState } from 'react';
import AddCompte from '../components/AddComptes';
import Comptes from '../components/Comptes';
import TransactionsPage from './TransactionsPage';

const GestionPage = () => {
  const [choix, setChoix] = useState('comptes');
  const [showAddCompte, setShowAddCompte] = useState(false);

  return (
    <div className="gestion-page">
      <h2 className="page-title">Gestion des Comptes et Transactions</h2>
      <div className="button-group">
        <button
          className={`action-button ${choix === 'comptes' ? 'active' : ''}`}
          onClick={() => setChoix('comptes')}
        >
          Gérer les Comptes
        </button>
        <button
          className={`action-button ${choix === 'transactions' ? 'active' : ''}`}
          onClick={() => setChoix('transactions')}
        >
          Gérer les Transactions
        </button>
      </div>
      <div className="content">
        {choix === 'comptes' && (
          <div>
            <Comptes />
            <div className="button-group">
              <button
                className="action-button"
                onClick={() => setShowAddCompte(!showAddCompte)}
              >
                {showAddCompte ? 'Masquer Ajouter Compte' : 'Ajouter Compte'}
              </button>
            </div>
            {showAddCompte && <AddCompte />}
          </div>
        )}
        {choix === 'transactions' && <TransactionsPage />}
      </div>
    </div>
  );
};

export default GestionPage;
