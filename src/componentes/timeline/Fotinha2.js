import Imagem from './Imagem';
import { BsSuitHeart } from 'react-icons/bs';
import { BiMessageRounded } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';
import { BiCollection } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import img1 from './imagens/hal.png';
import img2 from './imagens/tt.jpg';

function Fotinha2(props){
    return(
        <div className="fotinha" >
           <div className="foto_nome">
            <img className='img_perfil_fotinha' src={img1} />
            <h4 className="nome_fotinha"> Halsey </h4> 
            <span className="icone">{props.icone}</span>
            </div>
        
            <div className="img_timeline">
            <img className='img_timeline2' src="https://i1.wp.com/pagesix.com/wp-content/uploads/sites/3/2020/02/halsey.jpg?quality=90&strip=all&ssl=1" />
            </div>
            

            <div className='curtidas_pai'>
            <div className='curtidas'>
            <Imagem icone={<BsSuitHeart />} />
            <Imagem icone={<BiMessageRounded />} />
            <Imagem icone={<FiSend />} />
            
            <div className='icone_curtidas'>
            <Imagem icone={<BiCollection />} />
            </div>

            </div>
            </div>

            <div className='detalhes_timeline'>
             <div className='detalhes_conteudo'>
                <img className='img_icone_curtida' src='https://noticiastu.com/wp-content/uploads/2018/08/Poses-de-Fotos-de-Perfil-2.jpg' />
                <div className='as'>
                <a className='a_time'>Curtido por vitorls e mais 1M pessoas</a>
                <a className='a1'> <b>Halsey </b> {<BsSuitHeart />}  </a>
                <a className='a2'> ver todos os 10 comentarios  </a>
                <a className='a1'> <b>ken_io </b> Perfect   </a>
                <a className='a1'> <b>kory</b> wow  </a>
                <a className='a3'> Há 3 horas </a>
                
               
                
                <div className="pesquisar_detalhes">
                <div className='coments'>
                <span className="icone_coments"> <Imagem icone={<BsEmojiSmile />} /> </span>
                <h4 className="nome_fotinha_coments"> Adicione um comentario... </h4>
                <h4 className="nome_fotinha_pub"> PUBLICAR </h4>
                
                
                </div>
                </div>
                </div>
                </div>
            </div>
            </div>

        

        

    )
}

export default Fotinha2;