import React from 'react';
import styled from 'styled-components';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searcheFile: ""
    }
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  };

  handleChange = (e) => {
    this.setState({ searcheFile: e.target.value })
  }

  render() {

    const { monsters, searcheFile } = this.state
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searcheFile.toLowerCase())
    );

    return (
     
        <Container>

          <H1>Monsters Roledex</H1>

          <SearchBox
            placeholder="serche file"
            handleChange={this.handleChange}
          />

          <CardList monsters={filterMonsters} />

        </Container>

    );
  }
}

export default App;

const Container = styled.div`
   text-align: center;
`;

const H1 = styled.h1`
   font-family:'Bigelow Rules';
   font-size:72px;
   color:#0ccac4;
`;

