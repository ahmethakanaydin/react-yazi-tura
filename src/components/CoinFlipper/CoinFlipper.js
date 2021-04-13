import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      counter: 0,
      yazi: 0,
      tura: 0
    };
  }
  handleClick = () => {
    let counter = this.state.counter;
    let side = Math.round(Math.random())
    
    counter++
    this.setState({counter: counter})

    if (side === 1){
      this.setState((state) => ({
        side: "yazi",
        yazi : this.state.yazi+1,
        flipping: true // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
      }))
    }
    else {
      this.setState((state) => ({
        side: "tura",
        tura : this.state.tura+1,
        flipping: true // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
      }))
    }

    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.counter} </strong>
          atıştan
          <p><strong> {this.state.tura} </strong> Tura</p>
          <strong> {this.state.yazi} </strong>
          Yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
