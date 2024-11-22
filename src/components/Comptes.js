import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_COMPTES } from '../graphql/queries';
import './style.css';
const Comptes = () => {
  const { loading, error, data } = useQuery(GET_ALL_COMPTES);
  const [compteId, setCompteId] = useState('');
  const [filteredComptes, setFilteredComptes] = useState([]);

  const handleSearchChange = (event) => {
    setCompteId(event.target.value);
  };

  const handleSearchClick = (event) => {
    event.preventDefault();
    if (compteId) {
      const foundCompte = data.allComptes.filter(compte => compte.id === compteId);
      setFilteredComptes(foundCompte);
    } else {
      setFilteredComptes(data.allComptes);
    }
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error.message}</p>;

  const comptesToDisplay = filteredComptes.length > 0 ? filteredComptes : data.allComptes;

  return (
    <div className="comptes-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Chercher un compte par ID"
          value={compteId}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchClick}>Chercher</button>
      </div>

      <div className="comptes-cards">
        {comptesToDisplay.map((compte) => (
          <div className="compte-card" key={compte.id}>
            <h4>Compte ID: {compte.id}</h4>
            <p><strong>Solde:</strong> {compte.solde}€</p>
            <p><strong>Date de création:</strong> {compte.dateCreation}</p>
            <p><strong>Type:</strong> {compte.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comptes;
