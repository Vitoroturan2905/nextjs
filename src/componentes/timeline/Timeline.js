import Fotinha from './Fotinha';
import './Timeline.css';
import { FiHome } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';
import { BsSuitHeart } from 'react-icons/bs';
import Imagem from './Imagem';
import Sugestoes from '../sugest/Sugestoes';
import img1 from './imagens/t.png';



function Timeline (){
    return(
        
        <div className='geral_timeline'>
            <Fotinha icone={<BsThreeDots />} />
            
            

        </div>
       
    )
}
export default Timeline;