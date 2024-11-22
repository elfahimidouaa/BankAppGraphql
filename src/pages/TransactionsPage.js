import React, { useState } from 'react';
import AddTransaction from '../components/AddTransaction';
import Transactions from '../components/Transactions';

const TransactionsPage = () => {
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  return (
    <div className="transactions-page">
      <h2 className="section-title">Transactions</h2>
      <Transactions />
      <div className="button-group">
        <button
          className="action-button"
          onClick={() => setShowAddTransaction(!showAddTransaction)}
        >
          {showAddTransaction ? 'Masquer Ajouter Transaction' : 'Ajouter Transaction'}
        </button>
      </div>
      {showAddTransaction && <AddTransaction />}
    </div>
  );
};

export default TransactionsPage;
