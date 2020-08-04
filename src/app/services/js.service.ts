import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JSService {

  constructor() { }

  CargaLoginHeadCSS( archivos: string[] ){
    for( let archivo of archivos ){
      let css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = "../../assets/login/" + archivo + ".css";
      let head = document.getElementsByTagName("head")[0];
      head.appendChild(css);
    }
  }

  CargaLogin( archivos: string[] ){
    for( let archivo of archivos ){
      let script = document.createElement("script");
      script.src = "../../assets/login/js/" + archivo + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

  CargaLoginHead( archivos: string[] ){
    for( let archivo of archivos ){
      let script = document.createElement("script");
      script.src = archivo + ".js";
      let head = document.getElementsByTagName("head")[0];
      head.appendChild(script);
    }
  }

  CargaMedicorp( archivos: string[] ){
    for( let archivo of archivos ){
      let script = document.createElement("script");
      script.src = "../../assets/medicorp/js/" + archivo + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

  CargaMedicorpHeadScript( archivos: string[] ){
    for( let archivo of archivos ){
      let script = document.createElement("script");
      script.src = "../../assets/medicorp/js/" + archivo + ".js";
      let head = document.getElementsByTagName("head")[0];
      head.appendChild(script);
    }
  }

  CargaMedicorpLink( archivos: string[] ){
    for( let archivo of archivos ){
      let script = document.createElement("script");
      script.src = archivo + ".js";
      script.type = "text/javascript";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

  CargaMedicorpHeadCSS( archivos: string[] ){
    for( let archivo of archivos ){
      let css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = "../../assets/medicorp/css/" + archivo + ".css";
      let head = document.getElementsByTagName("head")[0];
      head.appendChild(css);
    }
  }

  CargaFarmaciaScript( archivos: string[] ){
    for( let archivo of archivos ){
      let script = document.createElement("script");
      script.src = "../../assets/farmacia/js/" + archivo + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

  CargaFarmaciaScriptLink( archivos: string[], integridades: string[] ){
    for( let archivo of archivos ){
      let script = document.createElement("script");
      script.integrity = integridades + "";
      script.src = archivo + ".js";
      script.crossOrigin ="anonymous";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

  CargaFarmaciaScriptLink2( archivos: string[] ){
    for( let archivo of archivos ){
      let script = document.createElement("script");
      script.src = archivo + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

  CargaFarmaciaHeadCSS( archivos: string[] ){
    for( let archivo of archivos ){
      let css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = "../../assets/farmacia/css/" + archivo + ".css";
      let head = document.getElementsByTagName("head")[0];
      head.appendChild(css);
    }
  }

  CargaFarmaciaHeadCSSLink( archivos: string[] ){
    for( let archivo of archivos ){
      let css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = archivo + "";
      let head = document.getElementsByTagName("head")[0];
      head.appendChild(css);
    }
  }

  CargaProductoScript( archivos: string[] ){
    for( let archivo of archivos ){
      let script = document.createElement("script");
      script.src = "../../assets/farmacia/productos/js/" + archivo + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

}
