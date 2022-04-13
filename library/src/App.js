import './app.css'
import TableItems from './components/MainTable';
import ModalAdd from './components/Modal';

function App() {
  return (
    <div className='container'>
      <TableItems/>
      <ModalAdd/>
    </div>
  );
}

export default App;
