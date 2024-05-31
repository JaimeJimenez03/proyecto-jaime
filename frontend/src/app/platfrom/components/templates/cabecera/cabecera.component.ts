import { Component } from '@angular/core';
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [MenuLateralComponent],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {

  public menuOpen: boolean = false;

  menu() {
    this.menuOpen = !this.menuOpen;
  }

}
