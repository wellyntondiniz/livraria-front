import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = "http://localhost:8080";

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Categoria[]> {
    const url = this.baseUrl +'/categoria'
    return this.http.get<Categoria[]>(url)
  }

  findById(id: String): Observable<Categoria> {
    const url = `${this.baseUrl}/categoria/${id}`
    return this.http.get<Categoria>(url)
  }

  create(categoria: Categoria): Observable<Categoria>{
    const url = `${this.baseUrl}/categoria`
    return this.http.post<Categoria>(url, categoria);
  }

  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/categoria/${id}`
    return this.http.delete<void>(url)
  }

  update(categoria: Categoria):Observable<void> {
    const url = `${this.baseUrl}/categoria/${categoria.id}`
    return this.http.put<void>(url, categoria)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}