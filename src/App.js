import './App.css';
import './Components/Card'
import CardPersonal from './Components/Card';

function App() {
  const alunos = [{name: "Maria"},{name:'Joao'},{name: 'Gustin'}]
  const allAlunos = alunos.map((item) =>
    <div>
     <CardPersonal name={item.name}/>
    </div>
  )
  return (
    <div className="App">
      <header className="App-header">
       {allAlunos}
      </header>
    </div>
  );
}

export default App;
