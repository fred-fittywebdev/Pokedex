import React, {FunctionComponent} from 'react';
import PokemonList from './pages/PokemonList';
import PokemonsDetail from './pages/PokemonDetail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import PokemonEdit from './pages/PokemonEdit';
import PokemonAdd from './pages/PokemonAdd';
  
const App: FunctionComponent = () => {
    // hook d'état, useState('React') => Etat initial du composant
    // typage avec Typescript => généricité
 //const [name, setName] = useState<String>('React')

    
 return (
  <Router>
      <div>
          {/* La barre de navigation */}
          <nav>
            <div className="nav-wrapper teal">
                <Link to='/' className='brand-logo center'>Pokédéx</Link>
            </div>
          </nav>
          {/* Le système de route */}
          <Switch>
              <Route exact path="/" component={PokemonList} />
              <Route exact path="/pokemons" component={PokemonList} />
              <Route exact path='/pokemons/add' component={PokemonAdd} />
              <Route exact path="/pokemons/:id" component={PokemonsDetail} />
              <Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
              <Route component={PageNotFound} />
          </Switch>
      </div>
  </Router>
 )
}
  
export default App;

/* le même composant avec un class Component

export default class App extends React.Component {
    const name: string = "React";

    render() {
        return <h1>Hello, {name}</h1>
    }
}

*/