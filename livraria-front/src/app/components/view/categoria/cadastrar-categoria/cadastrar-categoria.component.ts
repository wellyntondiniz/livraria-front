import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-categoria',
  templateUrl: './cadastrar-categoria.component.html',
  styleUrls: ['./cadastrar-categoria.component.css']
})
export class CadastrarCategoriaComponent implements OnInit {
  
    categoria: Categoria = {
      nome: '',
      descricao: ''
    }
  
    constructor(private service: CategoriaService, private router: Router) { }
  
    ngOnInit(): void {
    }
  
    create(): void {
      this.service.create(this.categoria).subscribe((resposta) => {
        this.router.navigate(['categorias'])
        this.service.mensagem('Categoria criada com sucesso!');
      }, err => {
        for(let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem(err.error.errors[i].message)
        }
      })
    }
  
    cancel(): void {
      this.router.navigate(['categorias'])
    }
  
}
  