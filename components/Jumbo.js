import React, { Component } from 'react'
import web3 from '../ethereum/web3'

export default class Jumbo extends Component {

  state = {
    account: '',
    balance:''
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    console.log(this.state.account)

    await web3.eth.getBalance(this.account, (err, balances) => {
      this.setState({balance: balances})
    });
    console.log(this.state.balance)
  }
  
    render() {
        return (
            <div className="container-fluid">
            <div className="jumbotron"  
              style={{ 
               background: '#c0c0aa;',
               background: '-webkit-linear-gradient(to right, #1cefff, #c0c0aa);  /* Chrome 10-25, Safari 5.1-6',
               background: 'linear-gradient(to right, #1cefff, #c0c0aa); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+'
               }}
            >
               <h2>Crowd Rase</h2>
               <h4>A crowd funding platform Using Blockchain Technology</h4>
              <h6 className="text-mute">Your Account Address: {this.state.account} </h6>
              <h6 className="text-mute">Your Account Balance:  {window.web3.utils.fromWei(this.state.balance.toString(), 'Ether')} Eth </h6>
            </div>
          </div>
        )
    }
}
