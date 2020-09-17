import React from 'react';
import styled from 'styled-components';

import Card from '../card/card.component';

const CardList = props => {

    return (
        <Container>
            {props.monsters.map((monster) => (
               <Card key={monster.id}  monster={monster} />
            ))}
        </Container>
    )
}

export default CardList;

const Container = styled.div`
   width:85vw;
   margin: 0 auto;
   display:grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-gap: 25px;
`;