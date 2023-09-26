import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuardService } from './guardAuth/auth-guard.service';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { HotelComponent } from './componentes/hotel/hotel.component';

const routes: Routes = [
  {path: 'Menu',component:MenuComponent},
  {path: 'User', component:UsuarioComponent},
  {path: 'Reserva',component:ReservaComponent},
  {path: 'Hotel',component:HotelComponent, canActivate: [AuthGuardService]},
  {path: 'login',component:LoginComponent},
  {path:'lista',component:ListaComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
