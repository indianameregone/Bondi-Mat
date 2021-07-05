import React, { Component } from "react";
import bitcoinCoin from "../bitcoin.png";
import dollarCoin from "../Dolar-coin.png";
import bull from "../wallstreet.jpg";
import dai from "../dai.png";
import chainlink from "../chainlink.png";




class Main extends Component {
  //window.alert(this.props.priceContractAddress)
  render() {
    return (
      <div id="content" className="mt-3">
        <table className="table table-borderless text-muted text-center">
          <thead>
            <tr>
              <th scope="col">Your Current Matic: {this.props.balance}</th>
              <th scope="col">BondiMat Contract Address: {this.props.BondiMatContractAddress}</th>
            </tr>
          </thead>
        </table>  
      </div>
    );
  }
}

export default Main;
