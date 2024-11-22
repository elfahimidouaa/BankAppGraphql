import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TRANSACTION } from '../graphql/queries'; 

const AddTransaction = ({ refetch }) => {
  const [montant, setMontant] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('DEPOT');
  const [compteId, setCompteId] = useState('');
  const [compteSolde, setCompteSolde] = useState(null); 

  const [addTransaction] = useMutation(ADD_TRANSACTION, {
    onCompleted: (data) => {
      setCompteSolde(data.addTransaction.compte.solde);
      refetch(); 
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addTransaction({
        variables: {
          transactionReq: {
            montant: parseFloat(montant),
            date,
            type,
            compteId: parseInt(compteId),
          },
        },
      });
      alert('Transaction ajoutée avec succès!');
      console.log('Nouveau solde du compte:', response.data.addTransaction.compte.solde);
    } catch (err) {
      console.error("Erreur lors de l'ajout de la transaction:", err);
      alert('Échec de l\'ajout de la transaction');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter une Transaction</h2>
      <div>
        <label>Montant:</label>
        <input
          type="number"
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="DEPOT">DEPOT</option>
          <option value="RETRAIT">RETRAIT</option>
        </select>
      </div>
      <div>
        <label>Compte ID:</label>
        <input
          type="number"
          value={compteId}
          onChange={(e) => setCompteId(e.target.value)}
        />
      </div>
      <button type="submit">Ajouter Transaction</button>

      {compteSolde !== null && (
        <div>
          <h3>Solde du compte après la transaction: {compteSolde}€</h3>
        </div>
      )}
    </form>
  );
};

export default AddTransaction;
