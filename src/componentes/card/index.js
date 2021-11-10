import {useState} from 'react';   //desestrutura o proprio REact // o useState Traz uma variavel e uma Função
import Button from '../button';

const Card = (props) => {
  //passar uma propriedade noitem
   
   const [valor, setValor]= useState(4); //indica que a variavel vai começar em zero
   
   function Incrementa(){
       setValor(valor+1)
   }
   function Decrementa(){
    setValor(valor-1)
   }
  
 

  return (
    <div className="card">
      <div className="card-header">Card</div>
      <div className="card-body">        
        <button 
        type="button" 
        className="btn btn-success"
        onClick={Incrementa}
        >
            Almenta
        </button>
        
        <Button
           className="btn btn-danger"
           onClick={Decrementa}
           >
             Diminue
        </Button>
        <p>{valor}</p>
       

      </div>
    </div>
  );
};
export default Card;
