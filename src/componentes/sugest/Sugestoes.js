import './Sugestoes.css';
import img1 from './imagens/euu.png';

function Sugestoes(){
    return(
        <div className="sugest">
          
            <div className='foto_nome_sugest1'>
            <img className='img_perfil_fotinha' src={img1} />
            <h4 className="nome_fotinha1"> Vitorls </h4> 
            <h5  className="nome_fotinha1"  >MUDAR</h5>

            
            </div>
            <a className='legenda_sugest'>Sugestoes para você</a>
            <div className='foto_nome_sugest3'>
            <img className='img_perfil_fotinha' src="https://www.energpower.it/wp-content/uploads/2020/12/EPI-alberto.png"></img>
            
            <h4 className="nome_fotinha1">  Rog_gue </h4>
            <h5  className="nome_fotinha1"  >SEGUIR</h5>
            </div>

            <div className='foto_nome_sugest3'>
            <img className='img_perfil_fotinha' src="https://noticiastu.com/wp-content/uploads/2018/08/Poses-de-Fotos-de-Perfil-18.jpg"></img>
            <h4 className="nome_fotinha1">  An_aj </h4> 
            <h5  className="nome_fotinha1"  >SEGUIR</h5>
            </div>

            

            <div className='foto_nome_sugest4'>
            <img className='img_perfil_fotinha' src="https://th.bing.com/th/id/R.298a8fd22644194073c11d2255b642fc?rik=iPNp6I9uYgx%2fNA&pid=ImgRaw&r=0"></img>
            <h4 className="nome_fotinha1">  Messi </h4> 
            <h5  className="nome_fotinha1"  >SEGUIR</h5>
            </div>

            

        </div>
        
    )
}

export default Sugestoes;