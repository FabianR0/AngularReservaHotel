import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuardService } from './guardAuth/auth-guard.service';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { ListaComponent } from './componentes/lista/lista.component';

const routes: Routes = [
  {path: 'Menu',component:MenuComponent, canActivate: [AuthGuardService]},
  {path: 'User', component:UsuarioComponent},
  {path: 'Reserva',component:ReservaComponent},
  {path: 'login',component:LoginComponent},
  {path:'lista',component:ListaComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
