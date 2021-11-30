import React,{createRef} from 'react';

class Calculatrice extends React.Component{
  constructor(props){
    super(props)
    this.state = {arr:[],tempArr:[],lastNums:null}
    this.spanAffichage = createRef()
  }

  addNumbersDots  = (numDots) => {
    this.setState({
      tempArr: [...this.state.tempArr, numDots]
    })
  }
  addLastNum  = () => {
    this.setState({
      tempArr: [this.state.lastNums]
    })
  }
  deleteLastElements = () => {
    let tempoArray = this.state.tempArr
    tempoArray.pop()
    this.setState({
      tempArr: [...tempoArray]
    })
  }
  deleteAllElements = () => {
    this.setState({
      tempArr: [],
      arr:[],
      lastNums:null
    })
  } 
  addSigne = (signe) => {
    let tempoString = this.state.tempArr.join("")
    if (this.state.arr.length>=2){
      this.equalElements(signe)
    }else{
      this.setState({
        arr:[...this.state.arr,tempoString,signe],
        tempArr: []})
      }
    }
  equalElements = (signe=null) => {
    if (this.state.arr.length===2) {
      let tempoCalcule = 0;
      switch (this.state.arr[1]) {        
        case '+':
          tempoCalcule = parseFloat(this.state.arr[0]) + parseFloat(this.state.tempArr.join(""))
          break
        case '-':
          tempoCalcule = parseFloat(this.state.arr[0]) - parseFloat(this.state.tempArr.join(""))
          break
        case '*':
          tempoCalcule = parseFloat(this.state.arr[0]) * parseFloat(this.state.tempArr.join(""))
          break
        case '/':
            tempoCalcule = parseFloat(this.state.arr[0]) / parseFloat(this.state.tempArr.join(""))
            break
        default:
          console.log("Error");
      }
      if (signe===null) {
        this.setState({
          arr:[],
          tempArr:[],
          lastNums:tempoCalcule
        })
      }else{
        this.setState({
          arr:[tempoCalcule,signe],
          tempArr:[],
          lastNums:tempoCalcule
        })
      }

    }
  }
  render() {
    if (this.spanAffichage.current!==null) {
      if (this.state.lastNums!==null && this.state.arr.length===0) {
        this.spanAffichage.current.innerHTML = this.state.lastNums

      }else{
        this.spanAffichage.current.innerHTML = this.state.arr.join(" ")
      }
    }
    return (
      <div>
        <h1 className="text-center">Caculatrice</h1>
        <div className="row">
          <div className="col-3 mx-auto bg-info rounded py-2">
            <div className="row mt-2 mb-1">
              <div className="col-12">
                  <div className="bg-dark text-white rounded text-end d-flex flex-column">
                    <span ref={this.spanAffichage} className="affichageCalculatricePrecedent"></span>
                    <span className="affichageCalculatriceTemp">{this.state.tempArr}</span>
                  </div>
              </div>
            </div>
            <div className="row my-1">
              <div className="col-3">
                <div className="d-grid">
                  <button className="btn btn-light" type="button" onClick={this.deleteAllElements}>C</button>
                </div>
              </div>
              <div className="col-3">
                <div className="d-grid">
                  <button className="btn btn-light" type="button" onClick={this.deleteLastElements}>CE</button>
                </div>
              </div>
              <div className="col-3">
                <div className="d-grid">
                  <button className="btn btn-light" type="button" onClick={(e) => this.addLastNum()}>ANS</button>
                </div>
              </div>
              <div className="col-3">
                <div className="d-grid">
                  <button className="btn btn-light" type="button">%</button>
                </div>
              </div>
            </div>
            <div className="row my-1">
              <div className="col-3">
                <div className="d-grid">
                  <button className="btn btn-light" type="button" onClick={(e) => this.addNumbersDots(0)}>0</button>
                </div>
              </div>
              <div className="col-3">
                <div className="d-grid">
                  <button className="btn btn-light" type="button"  onClick={(e) => this.addNumbersDots(1)}>1</button>
                </div>
              </div>
              <div className="col-3">
                <div className="d-grid">
                  <button className="btn btn-light" type="button"  onClick={(e) => this.addNumbersDots(2)}>2</button>
                </div>
              </div>
              <div className="col-3">
                <div className="d-grid">
                  <button className="btn btn-primary" type="button" onClick={(e) => this.addSigne("+")}>+</button>
                </div>
              </div>
            </div>
            <div className="row my-1">
              <div className="col-3">
                <div className="d-grid">
                  <button className="btn btn-light" type="button" onClick={(e) => this.addNumbersDots(3)}>3</button>
                </div>
              </div>
              <div className="col-3">
                <div className="d-grid">
                  <button className="btn btn-light" type="button" onClick={(e) => this.addNumbersDots(4)}>4</button>
                </div>
              </div>
              <div className="col-3">
                <div className="d-grid">
                  <button className="btn btn-light" type="button" onClick={(e) => this.addNumbersDots(5)}>5</button>
                </div>
              </div>
              <div className="col-3">
                <div className="d-grid">
                  <button className="btn btn-primary" type="button" onClick={(e) => this.addSigne("-")}>-</button>
                </div>
              </div>
            </div>
            <div className="row my-1">
              <div className="col-3">
                <div className="d-grid">
                  <button className="btn btn-light" type="button" onClick={(e) => this.addNumbersDots(6)}>6</button>
                </div>
              </div>
              <div className="col-3">
                <div className="d-grid">
                  <button className="btn btn-light" type="button" onClick={(e) => this.addNumbersDots(7)}>7</button>
                </div>
              </div>
              <div className="col-3">
                <div className="d-grid">
                  <button className="btn btn-light" type="button" onClick={(e) => this.addNumbersDots(8)}>8</button>
                </div>
              </div>
              <div className="col-3">
                <div className="d-grid">
                  <button className="btn btn-primary" type="button" onClick={(e) => this.addSigne("*")}>*</button>
                </div>
              </div>
            </div>
            <div className="row my-1">
              <div className="col-3">
                <div className="d-grid">
                  <button className="btn btn-light" type="button" onClick={(e) => this.addNumbersDots(9)}>9</button>
                </div>
              </div>
              <div className="col-3">
                <div className="d-grid">
                  <button className="btn btn-light" type="button" onClick={(e) => this.addNumbersDots(".")}>.</button>
                </div>
              </div>
              <div className="col-3">
                <div className="d-grid">
                  <button className="btn btn-light" type="button" onClick={(e) => this.equalElements()}>=</button>
                </div>
              </div>
              <div className="col-3">
                <div className="d-grid">
                  <button className="btn btn-primary" type="button" onClick={(e) => this.addSigne("/")}>/</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Calculatrice;
