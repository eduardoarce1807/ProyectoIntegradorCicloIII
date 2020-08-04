import { Component, OnInit } from '@angular/core';
import { JSService } from 'src/app/services/js.service';

@Component({
  selector: 'app-medicorp',
  templateUrl: './medicorp.component.html',
  styleUrls: ['./medicorp.component.css']
})
export class MedicorpComponent implements OnInit {

  constructor(public Scripts: JSService) {
    Scripts.CargaMedicorpHeadScript(["all"]);
    Scripts.CargaMedicorpHeadCSS(["bootstrap.min","../style","colors","versions","responsive","custom"]);
    Scripts.CargaMedicorp(["main","custom", "custom2"]);
  }

  ngOnInit(): void {
  }

}
