import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCategoriaComponent } from './components/view/categoria/listar-categoria/listar-categoria.component';
import { CadastrarCategoriaComponent } from './components/view/categoria/cadastrar-categoria/cadastrar-categoria.component';
import { AlterarCategoriaComponent } from './components/view/categoria/alterar-categoria/alterar-categoria.component';
import { RemoverCategoriaComponent } from './components/view/categoria/remover-categoria/remover-categoria.component';

const routes: Routes = [
  {
    path: 'categorias',
    component: ListarCategoriaComponent
  },
  {
    path: 'categorias/cadastrar',
    component: CadastrarCategoriaComponent
  },
  {
    path: 'categorias/update/:id',
    component: AlterarCategoriaComponent
  },
  {
    path: 'categorias/delete/:id',
    component: RemoverCategoriaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
