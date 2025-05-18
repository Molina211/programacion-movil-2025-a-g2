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
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'lista-salas',
    loadComponent: () => import('./lista-salas/lista-salas.page').then( m => m.ListaSalasPage)
  },
  {
    path: 'reserva',
    loadComponent: () => import('./reserva/reserva.page').then( m => m.ReservaPage)
  },
  {
    path: 'resumen-reserva',
    loadComponent: () => import('./resumen-reserva/resumen-reserva.page').then( m => m.ResumenReservaPage)
  },
  {
    path: 'confirmar-reserva',
    loadComponent: () => import('./confirmar-reserva/confirmar-reserva.page').then( m => m.ConfirmarReservaPage)
  },
];
