import { Component, OnInit } from '@angular/core';
import { JSService } from 'src/app/services/js.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../assets/login/style.css']
})
export class LoginComponent implements OnInit {

  constructor(private Scripts: JSService, private router: Router, private Data: DataService) {
    Scripts.CargaLogin(["jquery","app","main"]);
    
    Scripts.CargaLoginHeadCSS(["style"]);
    Scripts.CargaLoginHead(["https://kit.fontawesome.com/64d58efce2"]);
    
    
  }

  ngOnInit(): void {
  }

}
