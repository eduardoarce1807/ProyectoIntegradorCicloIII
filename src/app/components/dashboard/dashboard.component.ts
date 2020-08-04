import { Component, OnInit } from '@angular/core';
import { JSService } from 'src/app/services/js.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../../assets/dashboard/css/style.css']
})
export class DashboardComponent implements OnInit {

  constructor(private Script: JSService) {
    Script.CargaTopBarScriptLink(["https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min",
    "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.bundle.min",
    "https://cdnjs.cloudflare.com/ajax/libs/jQuery-slimScroll/1.3.8/jquery.slimscroll.min"]);
    Script.CargaTopBarCSSLink(["https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min",
    "https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min"]);
    
    Script.CargaTopBarScript(["script"]);
  }

  ngOnInit(): void {
  }

}
