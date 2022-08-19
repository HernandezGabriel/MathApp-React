import React, { Component } from "react"


// function randomNumber(max){  //i think i had functions kind of wrong! i believe the funciton keyword is for REACT components and not methods.
//   return Math.floor(Math.random() * Math.floor(max));
// }

class Logic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProblem: '',
      currentCorrectAnswer: '',
      choices: [0, 1, 2, 3],
      score: 0,
      count: 0
    }
  }
  randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getNewProblem() {
    let left = this.randomNumber(10);
    let right = this.randomNumber(10);
    let correctAnwser = left * right;

    this.setState({ currentProblem: `${left} * ${right}` }); //special string ${holds variable}
    this.setState({ currentCorrectAnswer: correctAnwser});
    this.setState({ count: this.state.count+1});

    this.getNewAnwsers(left * right);

  }

  getNewAnwsers(correctAnswer) {
    let list = [0, 1, 2, 3];
    let correctSpot = Math.floor(Math.random() * Math.floor(4))
    list.forEach((x) => {
      list[x] = Math.floor(Math.random() * Math.floor(82)).toString();
    });
    list[correctSpot] = correctAnswer;

    this.setState({choices: list});

  }

  checkAnwser(spot){
    let answer = this.state.choices[spot];

    if(answer===this.state.currentCorrectAnswer){
    this.setState({ score: this.state.score+1 });

    }

    if(this.state.currentProblem==10){
        //exit;
    }

    this.getNewProblem();

  }



  componentDidMount() {
    this.getNewProblem();
  }

  render() {
    return (
      <>
        <main>
          <section id="problem">
            <div className="expression show-hide">{this.state.currentProblem}</div>

            <p>
              Problem: <span className="currentProblem">{this.state.count}</span>/10 | Score: <span class="currentScore">{this.state.score}</span>
            </p>
          </section>
          <section id="answers" className="show-hide">
            <ul >
              <li onClick={() => this.checkAnwser(0)}>{this.state.choices.at(0)}</li>
              <li onClick={() => this.checkAnwser(1)}>{this.state.choices.at(1)}</li>
              <li onClick={() => this.checkAnwser(2)}>{this.state.choices.at(2)}</li>
              <li onClick={() => this.checkAnwser(3)} >{this.state.choices.at(3)}</li>
            </ul>
          </section>
          <button id="btnStartOver">Start Over</button>
        </main>
      </>
    )
  }
}
export default Logic;