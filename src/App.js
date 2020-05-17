import React,{ Component }  from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton=styled.button`
        background-color:${props => props.alt ? 'red ' : 'green'};
        color:white;
        font:inherit;
        border:1px solid blue;
        padding:10px;
        cursor: pointer;
        &:hover{
          background-color:${props => props.alt ? 'salmon ' : 'lightgreen'};
          color:black
`;
class  App extends Component {
 
  state = {
      person: [
        { id:'tukjb', name:"ritik" ,age:20 },
        { id:'lherk',name:"vijay", age:18 },
        { id:'mjbbf',name:"parlu",age:18  }
      ],
      showPerson:false
    }
    switchnameHandler = (newName) => 
    {
      this.setState(
        {
          person: [
            { name:"ritik" ,age:20 },
           { name:newName, age:18 },
            { name:"parlu",age:19 }
          ]
        }

      )
    
      }
       
      nameChangedHandler = (event,id) =>
      {
        const personIndex =this.state.person.findIndex(
          p=>{
            return p.id=== id;
          }
        );
        const ritik ={
          ...this.state.person[personIndex]
        };
        ritik.name=event.target.value;
        const person =[...this.state.person];
        person[personIndex]=ritik;
        
        this.setState(
          {
            person:person
          }
       )
      }
      ageUpdater = (event,id)=>{
        const personIndex =this.state.person.findIndex(
          p=>{
            return p.id=== id;
          }
        );
        const ritik ={
          ...this.state.person[personIndex]
        };
        ritik.age=event.target.value;
        const person =[...this.state.person];
        person[personIndex]=ritik;
        
        this.setState(
          {
            person:person
          }
       )
      }
      toggleNameHandler=()=> {
       const doesShow = this.state.showPerson;
       this.setState({showPerson: !doesShow});
      }
      deletePersonHandler=(perIndex)=>{
       const person= this.state.person;
       person.splice(perIndex, 1);
       this.setState({ person:person})
      }
      
    render (){
      const style={
        backgroundColor: 'green',
        color:'white',
        font:'inherit',
        border:'1px solid blue ',
        padding:'10px',
        cursor:'pointer',
        ':hover':{
          backgroundColor:'lightgreen',
          color:'black'
        }
        
      };
      let person = null;
      if(this.state.showPerson){
        person= (
        <div>
        {
          this.state.person.map((per,index) => {
           return <Person 
            click={()=>this.deletePersonHandler(index)}
            name={per.name}
            age={per.age}
            key={per.id}
            changed={(event)=>{this.nameChangedHandler(event , per.id)}}
            update={(event)=>{this.ageUpdater(event , per.id)}}/>
          })
        }
        </div>
         );
         style.backgroundColor='red';
        style[ ':hover'] ={
          backgroundColor:'salmon',
          color:'black'
        }
      }
     let  classes=[];
      if(this.state.person.length <= 2){
      classes.push('red');
      }
     if(this.state.person.length<=1){
       classes.push('bold');
     }
  return (
    <div className="App">
      <h1>I'm react app </h1>
      <p className={classes.join(' ')}>It's working </p>
      <StyledButton
      //style={style}
      const alt={this.state.showPerson}
      onClick={ this.toggleNameHandler}>Toggle name </StyledButton>
     {person}
      </div>
   );
  }
}

export default App;
