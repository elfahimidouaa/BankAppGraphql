import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_TRANSACTIONS } from '../graphql/queries';
import './style.css';
const Transactions = () => {
  const { loading, error, data } = useQuery(GET_ALL_TRANSACTIONS);

  if (loading) return <p>Chargement...</p>;
  if (error) {
    console.error('Erreur GraphQL:', error);
    return <p>Erreur: {error.message}</p>;
  }

  return (
    <div className="transactions-container">
      <div className="transactions-cards">
        {data.allTransactions.map((transaction) => (
          <div className="transaction-card" key={transaction.id}>
            <h4>Transaction ID: {transaction.id}</h4>
            <p><strong>Montant:</strong> {transaction.montant}€</p>
            <p><strong>Date:</strong> {transaction.date}</p>
            <p><strong>Type:</strong> {transaction.type}</p>
            <p><strong>Compte ID:</strong> {transaction.compte.id}</p>
            <p><strong>Solde:</strong> {transaction.compte.solde}€</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
