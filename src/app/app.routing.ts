import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  {
    path: 'inicio', title: 'Inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'nosotros', title: 'Nosotros',
    loadChildren: () => import('./pages/nosotros/nosotros.module').then(m => m.NosotrosModule)
  },
  {
    path: 'servicios', title: 'Servicio',
    loadChildren: () => import('./pages/servicio/servicio.module').then(m => m.ServicioModule)
  },
  {
    path: 'tienda', title: 'Tienda',
    loadChildren: () => import('./pages/tienda/tienda.module').then(m => m.TiendaModule)
  },
  {
    path: 'contacto', title: 'Contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then(m => m.ContactoModule)
  },

  { path: '', pathMatch: 'full', redirectTo: 'inicio' },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    useHash: true,
    scrollPositionRestoration: 'enabled',
  }

  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
