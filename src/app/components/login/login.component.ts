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


  login(form: NgForm){
    console.log(form.value);

    let usuarios = JSON.parse(localStorage.getItem("eUsuarios"));

    for(var i in usuarios){
      var x = JSON.parse(usuarios[i]);
      if (form.value.Usuario === x.Usuario) {
        if (form.value.Contraseña === x.Contraseña) {
          alert("Credenciales correctas.");
          this.router.navigate(['/medicorp']);
        }else{
          alert("Contraseña incorrecta.");
        }
      }else{
        alert("Credenciales incorrectas.");
      }
    }

  }


  constructor(private Scripts: JSService, private router: Router, private Data: DataService) {
    Scripts.CargaLoginHeadCSS(["style"]);
    Scripts.CargaLogin(["jquery","app","main"]);
    Scripts.CargaLoginHead(["https://kit.fontawesome.com/64d58efce2"]);
    
    
  }

  ngOnInit(): void {
  }

}
