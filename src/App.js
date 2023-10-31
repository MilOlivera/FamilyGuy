import { useState } from 'react';
import logo from './img/logo.png'
import data from './data'
import { Character } from './Components/Character';

function App() {

  const [characters] = useState(data);
  const [activeChar, setActiveChar] = useState(characters[0])

  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="character-con">
        {
          characters.map((valor) => {
            const {id, image} = valor;

            return <li key={id} className={`${activeChar.id === id ? 'active' : ''}`} onClick={ () => setActiveChar(valor) }>
              <div className="characters">
                <img src={image} alt="" />
              </div>
            </li>
          })
        }
      </ul>

      <Character {...activeChar} />
    </div>
  );
}

export default App;
