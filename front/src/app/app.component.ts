import { Component, OnInit } from '@angular/core';
import { WalletService } from './services/wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web3';
  public walletConnected: boolean = false;
  public walletId: string = '';

  constructor(private walletService: WalletService) {}

  connectToWallet  = () => {
    this.walletService.connectWallet();
  }  

  checkWalletConnected = async () => {
    const accounts = await this.walletService.checkWalletConnected();
    if(accounts.length > 0){
      this.walletConnected = true;
      this.walletId = accounts[0];
      console.log(this.walletId)
    }
  }

  ngOnInit(): void {
    this.checkWalletConnected();
  }
}
