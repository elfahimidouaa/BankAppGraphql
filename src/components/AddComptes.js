import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_COMPTE, GET_ALL_COMPTES } from '../graphql/queries';

const AddComptes = () => {
  const [solde, setSolde] = useState('');
  const [type, setType] = useState('COURANT'); 
  const [datecreation, setDateCreation] = useState(new Date().toISOString()); 

  const [saveCompte, { error }] = useMutation(SAVE_COMPTE, {
    refetchQueries: [{ query: GET_ALL_COMPTES }],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Appeler la mutation avec solde, type et datecreation
      await saveCompte({
        variables: {
          compte: {
            solde: parseFloat(solde),
            type,
            datecreation,
          },
        },
      });
      setSolde('');
      setType('COURANT');
      setDateCreation(new Date().toISOString());
    } catch (err) {
      console.error(err);
    }
  };

  if (error) return <p>Erreur lors de l'ajout du compte : {error.message}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="number"
          value={solde}
          onChange={(e) => setSolde(e.target.value)}
          placeholder="Solde"
        />
      </div>

      <div>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="COURANT">COURANT</option>
          <option value="EPARGNE">EPARGNE</option>
        </select>
      </div>

      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddComptes;
