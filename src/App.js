import './App.css';
import AddTransaction from './components/AddTransaction/AddTransaction';
import Balance from './components/Balance/Balance';
import Header from './components/Header/Header';
import IncomeExpenses from './components/IncomeExpenses/IncomeExpenses';
import TransactionList from './components/TransactionList/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
