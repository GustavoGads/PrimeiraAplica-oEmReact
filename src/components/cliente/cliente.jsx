import { useState } from "react";
import "./cliente.css";
function Cliente(props) {

    // let exibirTexto = false
    const [exibirTexto, setExibirTexto] = useState(false)

    function ExibirOuEsconder() {
        setExibirTexto(!exibirTexto)
    }

    return     <div>
        
    <b>{props.nome}</b> {
            props.amei == "Curti" ?
            <img className="curti" src="https://icones.pro/wp-content/uploads/2021/02/icone-de-coeur-rouge-1.png"/>
            : <img className="curti" src="https://static.vecteezy.com/ti/vetor-gratis/p1/5720499-icone-de-coracao-design-elemento-logotipo-elemento-ilustracao-icone-simbolo-amor-gratis-vetor.jpg"/>
        } <br/>
    {props.cidade} - {props.uf} <br /> <br/>
    <input className="btnMaisDetalhes"
           type="button"
           value="Mais Detalhes"
           onClick={ExibirOuEsconder}/>

    {
        exibirTexto == true 
        ? 
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda accusantium totam eum ad culpa molestiae alias, facere mollitia maxime voluptas, in, amet delectus asperiores vero esse velit? Nihil, necessitatibus illo.</p>
        :
            null
    }
    
    <hr/>
  </div>
}

export default Cliente