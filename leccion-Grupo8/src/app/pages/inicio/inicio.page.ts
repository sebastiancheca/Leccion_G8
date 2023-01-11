import { Component, OnInit } from '@angular/core';


interface Componente {
  icon:string;
  name:string;
  redirecto:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  constructor() { }

  componentes: Componente[]=[
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirecto: '/action-shet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirecto: '/alert'
    },
    {
      icon: 'person-circle-outline',
      name: 'leccion',
      redirecto: '/leccion'
    }
  ]

  ngOnInit() {
  }

}
