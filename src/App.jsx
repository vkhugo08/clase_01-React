import './App.css'
import Card from'./components/Card'
import CardsPerson from'./components/CardsPerson'

function App() {

  const hobbies = ["Video juegos", "hacer ejecicio", "pasar tiempo con amigos",'chilear'];
  const footfav = ['Pizza','Hamburguesa','Empanadas','Pastica'];
  const stackTech = ['Html','JavaScript','Css','React'];

  return (
    <div className="App">
      <CardsPerson/>
      <Card
        title='hobbies' 
        content={hobbies}
        color='white'
        background='green'
        />
        <Card
        title='Foot' 
        content={footfav}
        color='white'
        background='red'
        />
        <Card
        title='Abilites' 
        content={stackTech}
        color='white'
        background='black'
        />
    </div>
    
  );
}

export default App
