import Item from "./componentes/item";
import Card from "./componentes/card";

const App = () => {
  return (
    <>
      <h2>Segunda aplicação React</h2>
      <ul>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </ul>
      <Card />
    </>
  );
};

export default App; //esxporto o componente para que ele possa ser usado em outro lugar
