import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { Usuario } from '../../auth/interfaces/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements AfterViewInit {

  usuarioActual:Usuario = {
    uid: '',
    name: '',
    email: ''
    
  }; 

  get usuario(){
    return this.authService.usuario;
  }

  constructor( private router:Router,
               private authService: AuthService ) { }
  ngAfterViewInit(): void {
    this.usuarioActual = this.usuario;
  }

  logout(){
      this.authService.logout();
      this.router.navigateByUrl('*');
  }
}
