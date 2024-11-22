import React, { useState } from 'react';
import AddCompte from '../components/AddComptes';
import Comptes from '../components/Comptes';

const ComptesPage = () => {
  const [showAddCompte, setShowAddCompte] = useState(false);

  return (
    <div className="comptes-page">
      <h2 className="section-title">Comptes</h2>
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
  );
};

export default ComptesPage;
