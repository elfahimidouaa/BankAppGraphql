import { gql } from '@apollo/client';

// Query pour obtenir tous les comptes
export const GET_ALL_COMPTES = gql`
  query {
    allComptes {
      id
      solde
      datecreation
      type
    }
  }
`;

// Query pour obtenir un compte par ID
export const GET_COMPTE_BY_ID = gql`
  query ($id: ID!) {
    compteById(id: $id) {
      id
      solde
      datecreation
      type
    }
  }
`;
export const SAVE_COMPTE = gql`
  mutation SaveCompte($compte: CompteRequest!) {
    saveCompte(compte: $compte) {
      id
      solde
      datecreation
      type
    }
  }
`;

// Query pour le total du solde
export const GET_TOTAL_SOLDE = gql`
  query {
    totalSolde {
      count
      sum
      average
    }
  }
`;



// Mutation pour ajouter une transaction (si nécessaire)
export const ADD_TRANSACTION = gql`
mutation AddTransaction($transactionReq: TransactionReq!) {
    addTransaction(transactionReq: $transactionReq) {
      id
      montant
      date
      type
      compte {
        id
        solde
      }
    }
  }
`;
export const GET_ALL_TRANSACTIONS = gql`
  query GetAllTransactions {
  allTransactions {
    id
    montant
    date
    type
    compte {
      id
      solde
    }
  }
}
`;
