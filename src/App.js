import logo from './logo.svg';
import './App.css';
import logoInsta from './Instagram_logo.svg.png'; 
import SidebarHeader from './componentes/sidebarheader/SidebarHeader';
import Storys from './componentes/storys/Storys';
import Timeline from './componentes/timeline/Timeline';
import Sugestoes from './componentes/sugest/Sugestoes';
import Timeline2 from './componentes/timeline/Timeline2';
import ImagemP from './componentes/imagens/tt.jpg';


function App() {
  return (
    <div className="App">
      
        <SidebarHeader logo={logoInsta}/>
        
        <div className='geral_pag'>
        <div className='story_timeline'>
        <Storys />
        <Timeline />
        <Timeline2 />
        </div>

        <div className='geral_sugest'>
            <Sugestoes />
            </div>
        </div>
        
        
      

      
    
    </div>
  );
}

export default App;
