import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { PokemonApp } from './pages/PokemonApp'
import { PokemonDetails } from './cmps/PokemonDetails'
import { PokemonPreview } from './cmps/PokemonPreview'
import Header from './cmps/Header'


export function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        {/* <Search/> */}
        <PokemonPreview />
        <main>
          <Switch>
            <Route to path="/:id" component={PokemonDetails} />
            <Route path="/" component={PokemonApp} />
          </Switch>
        </main>

      </Router>

    </div>
  );
}

export default App;
