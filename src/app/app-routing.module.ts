import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'cadastro-usuario',
    pathMatch: 'full'
  },
  {
    path: 'lancamentos',
    loadChildren: () => import('./cadastro-usuario/cadastro-usuario.module').then( m => m.CadastroUsuarioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'lancamentos',
    loadChildren: () => import('./lancamentos/lancamentos.module').then( m => m.LancamentosPageModule)
  },
  {
    path: 'registrar-lcmto',
    loadChildren: () => import('./registrar-lcmto/registrar-lcmto.module').then( m => m.RegistrarLcmtoPageModule)
  },
  {
    path: 'add-receita',
    loadChildren: () => import('./add-receita/add-receita.module').then( m => m.AddReceitaPageModule)
  },
  {
    path: 'add-despesa',
    loadChildren: () => import('./add-despesa/add-despesa.module').then( m => m.AddDespesaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
