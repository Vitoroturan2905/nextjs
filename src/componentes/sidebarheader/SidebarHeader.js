import './SidebarHeader.css';
import logoHome from './imagens/j5.png';
import Item from './componentes/Item';
import { FaBeer } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { BsSearch } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg'; 
import {AiOutlineSearch} from 'react-icons/ai';
import {BiMessageDetail} from 'react-icons/bi';
import {GrAddCircle} from 'react-icons/gr';
import {AiOutlineCompass} from 'react-icons/ai';
import {BsHeart} from 'react-icons/bs';
import Pesquisar from './componentes/Pesquisar';


function SidebarHeader(props){
    return(
        <div className='sidebar-header'>
          <img src={props.logo} alt="Logo do instagram" className="logoInstagram" />

          <div className='pesquisar'>
          <Pesquisar icone ={<AiOutlineSearch />} nome="Home" />
          </div>

          <div className="listItem">
            <Item icone ={<FiHome />}  />
            <Item icone ={<BiMessageDetail />}  />
            <Item icone ={<GrAddCircle />} />
            <Item icone ={<AiOutlineCompass />}  />
            <Item icone ={<BsHeart />}  />
            <Item icone ={<CgProfile />}  />
            
            
          </div>
        </div>
      
        
    )

}
export default SidebarHeader;