import './App.scss';
import team from "./data/team";
import Employees from './components/Employees';
import TicketCounter from './components/TicketCounter';


const App = () => {
  return (
    <div className="App">
      <div>
        <header className="title">Ticket Tracker  
        </header>
        <section>
          <Employees empArr={team}/>
        </section>
      </div> 
    </div>
  );
}

export default App;
