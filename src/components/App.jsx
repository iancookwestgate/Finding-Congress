import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Results from './Results/Results';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import '../scss/styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArray: []
    };
    this.onAPIChange = this.onAPIChange.bind(this);
    this.newsPrep = this.newsPrep.bind(this);
  }

  onAPIChange(e) {
    this.setState({newsArray: e});
  }

  newsPrep(e) {
    this.setState({newsPrep: e});
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() =><Home newsArray={this.state.newsArray} onChange={this.onAPIChange} onNewsPrep={this.newsPrep} />} />
          <Route path='/Results' render={() => <Results newsPrep={this.state.newsPrep} />}/>
          <Route component={Error404}/>
        </Switch>
        <Navbar/>
      </div>
    );
  }
}

export default App;
