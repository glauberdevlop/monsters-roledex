import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
    return (
        <Container>
            <Image alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            <H1>{props.monster.name}</H1>
            <Email>{props.monster.email}</Email>
        </Container>
    );
}

export default Card;

const Container = styled.div`
   display:flex;
   flex-direction:column;
   background-color:#95dada;
   border: 1px solid grey;
   border-radius:5px;
   padding:25px;
   cursor:pointer;
   -moz-osx-font-smoothing:greyscale;
   backface-visibility:hidden;
   transform:translateZ(0);
   transition:transform 0.25s ease-out;
   &:hover{
       transform:scale(1.05);
   }
`;

const H1 = styled.h1`
   
`;

const Email = styled.p`
   
`;

const Image = styled.img`
 
`;