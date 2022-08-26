import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  element : {
    name: "Server_10.12.1.4.1003",
    type: "server",
    content: "This server is originated from Simla"
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  serverElements = [];
  newServerName = '';
  newServerContent = '';

}
