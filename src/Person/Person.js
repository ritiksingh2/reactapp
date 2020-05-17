import React from 'react';
//import './person.css';
import styled from 'styled-components';
const StyledDiv = styled.div`
width:60%;
margin: 16px auto;
border: 2px solid #eee ;
box-shadow: 2px 2px 3px #cceeec;
padding: 16px;
text-align: center;

@media (min-width: 500px){
    width:450px;
}
`;

const person = (props) => {
return (
<StyledDiv>
<p onClick={props.click} >I'm a {props.name} and I'm {props.age} year old </p>

<p>{props.children}</p>
<ul>{props.children}
</ul>
Name<br></br>
<input type="text" onChange={props.changed} value={props.name}/>
<br></br>
Age<br></br>
<input type="text" onChange={props.update} value={props.age}/>
</StyledDiv>
)
 };
export default person;