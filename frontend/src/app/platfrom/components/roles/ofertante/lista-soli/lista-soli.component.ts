import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CabeceraComponent } from '../../../templates/cabecera/cabecera.component';
import { fadeInOutAnimation } from '../../../animations';
import { SolicitudActividad } from '../../../../models/solicitud-actividad';
import { SolicitudService } from '../../../../services/solicitud.service';

@Component({
  selector: 'app-lista-soli',
  standalone: true,
  imports: [NgFor, ButtonModule, TableModule, CabeceraComponent, FormsModule, RouterLink],
  templateUrl: './lista-soli.component.html',
  styleUrl: './lista-soli.component.css',
  animations: [fadeInOutAnimation]
})
export class ListaSoliComponent {
  usuarioLogueado: any;

  listaSolicitudes: SolicitudActividad[] = [];

  abrirEditSoli: Boolean = false;
  solicitud!: SolicitudActividad;

  public showModalConfirm: boolean = false;


  constructor(private solicitudService: SolicitudService, private router: Router) {

  }

  ngOnInit(): void {
    this.usuarioLogueado = JSON.parse(sessionStorage.getItem('userLogin')!)
    this.solicitudService.getAllSolicitudes().subscribe(
      resp => {
        this.listaSolicitudes = resp;
      }
    )
  }

  redireccion() {
    this.router.navigate(["/login"]);
  }

}
