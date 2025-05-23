import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'interfaz-principal',
    loadComponent: () => import('./view/interfaz-principal/interfaz-principal.page').then( m => m.InterfazPrincipalPage)
  },
  {
    path: '',
    redirectTo: 'interfaz-principal',
    pathMatch: 'full',
  },
  {
    path: 'registrar-usuario',
    loadComponent: () => import('./view/registrar-usuario/registrar-usuario.page').then( m => m.RegistrarUsuarioPage)
  },
  {
    path: 'iniciar-sesion',
    loadComponent: () => import('./view/iniciar-sesion/iniciar-sesion.page').then( m => m.IniciarSesionPage)
  },
  {
    path: 'verificar-correo',
    loadComponent: () => import('./view/verificar-correo/verificar-correo.page').then( m => m.VerificarCorreoPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./view/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'lista-salas',
    loadComponent: () => import('./view/lista-salas/lista-salas.page').then( m => m.ListaSalasPage)
  },
  {
    path: 'reserva',
    loadComponent: () => import('./view/reserva/reserva.page').then( m => m.ReservaPage)
  },
  {
    path: 'resumen-reserva',
    loadComponent: () => import('./view/resumen-reserva/resumen-reserva.page').then( m => m.ResumenReservaPage)
  },
  {
    path: 'confirmar-reserva',
    loadComponent: () => import('./view/confirmar-reserva/confirmar-reserva.page').then( m => m.ConfirmarReservaPage)
  },
  {
    path: 'inicio-empleado',
    loadComponent: () => import('./view/inicio-empleado/inicio-empleado.page').then( m => m.InicioEmpleadoPage)
  },
  {
    path: 'lista-estudiantes',
    loadComponent: () => import('./view/lista-estudiantes/lista-estudiantes.page').then( m => m.ListaEstudiantesPage)
  },
  {
    path: 'info-estudiante-empleado',
    loadComponent: () => import('./view/info-estudiante-empleado/info-estudiante-empleado.page').then( m => m.InfoEstudianteEmpleadoPage)
  },
  {
    path: 'lista-reservas',
    loadComponent: () => import('./view/lista-reservas/lista-reservas.page').then( m => m.ListaReservasPage)
  },
  {
    path: 'resumen-reserva-empleado/:id',
    loadComponent: () => import('./view/resumen-reserva-empleado/resumen-reserva-empleado.page').then( m => m.ResumenReservaEmpleadoPage)
  },
  {
    path: 'lista-admin',
    loadComponent: () => import('./view/lista-admin/lista-admin.page').then( m => m.ListaAdminPage)
  },
  {
    path: 'info-estudiante-admin',
    loadComponent: () => import('./view/info-estudiante-admin/info-estudiante-admin.page').then( m => m.InfoEstudianteAdminPage)
  },
  {
    path: 'info-admin-admin',
    loadComponent: () => import('./view/info-admin-admin/info-admin-admin.page').then( m => m.InfoAdminAdminPage)
  },
  {
    path: 'registrar-admin',
    loadComponent: () => import('./view/registrar-admin/registrar-admin.page').then( m => m.RegistrarAdminPage)
  },
    {
      path: 'lista-empleado-admin',
      loadComponent: () => import('./view/lista-empleado/lista-empleado.page').then( m => m.ListaEmpleadoPage)
    },
  {
    path: 'lista-empleado',
    loadComponent: () => import('./view/lista-empleado/lista-empleado.page').then( m => m.ListaEmpleadoPage)
  },
  {
    path: 'info-empleado-admin',
    loadComponent: () => import('./view/info-empleado-admin/info-empleado-admin.page').then( m => m.InfoEmpleadoAdminPage)
  },
  {
    path: 'registrar-empleado',
    loadComponent: () => import('./view/registrar-empleado/registrar-empleado.page').then( m => m.RegistrarEmpleadoPage)
  },  {
    path: 'perfil-admin',
    loadComponent: () => import('./view/perfil-admin/perfil-admin.page').then( m => m.PerfilAdminPage)
  },
  {
    path: 'perfil-empleado',
    loadComponent: () => import('./view/perfil-empleado/perfil-empleado.page').then( m => m.PerfilEmpleadoPage)
  },
  {
    path: 'perfil-estudiante',
    loadComponent: () => import('./view/perfil-estudiante/perfil-estudiante.page').then( m => m.PerfilEstudiantePage)
  },

];
