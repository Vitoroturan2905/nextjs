function Item (props){
    return(
        <div className="item">
               <span className="iconeItem">{props.icone}</span>         
                <span>{props.nome}</span>

                

                </div>
                
            
    )
}

export default Item;