
import React, { Component, useEffect } from 'react';


function randomNumber(max){
   return Math.floor(Math.random() * Math.floor(max));
}

function Expression() {

   let left = randomNumber(10);
   let right = randomNumber(10);
   let correctAnwser=left*right;

   useEffect(()=>{
      console.log("UseEFFECT");
      this.state.currentProblem=Expression();
   });

   //logic
   return(left+" * "+right);
}

function AnswerChoices(){



}



class Main extends Component{
   constructor(props){
      super(props);
      this.state= {
         currentProblem: null,

      };
   }



   render(){
      return (

         <div>
            <h1>{this.state.currentProblem}</h1>



         </div>

      );

   }



}

export default Main;