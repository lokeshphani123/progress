import { Component, OnInit } from '@angular/core';
import { RSA_SSLV23_PADDING } from 'constants';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  allowNewClient: boolean = false;
  clientCreateStatus: string = "Add Client";

  constructor() { 
    setTimeout( () => {
      this.allowNewClient = true;
    },3000);
  }

  ngOnInit(): void {
    
  }

  onCreateClient(){
    this.clientCreateStatus = "New Client Added";
  }

  onUpdateClient(event:any){
    console.log(event);

  }


}
