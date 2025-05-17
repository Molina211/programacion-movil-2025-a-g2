import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'interfaz-principal',
    loadComponent: () => import('./interfaz-principal/interfaz-principal.page').then( m => m.InterfazPrincipalPage)
  },
  {
    path: '',
    redirectTo: 'interfaz-principal',
    pathMatch: 'full',
  },
  {
    path: 'registrar-usuario',
    loadComponent: () => import('./registrar-usuario/registrar-usuario.page').then( m => m.RegistrarUsuarioPage)
  },
  {
    path: 'iniciar-sesion',
    loadComponent: () => import('./iniciar-sesion/iniciar-sesion.page').then( m => m.IniciarSesionPage)
  },
  {
    path: 'verificar-correo',
    loadComponent: () => import('./verificar-correo/verificar-correo.page').then( m => m.VerificarCorreoPage)
  },
];
