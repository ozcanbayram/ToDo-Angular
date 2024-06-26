import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Model,TodoItem } from './model';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  model = new Model();
  isDisplay = false;
  getName(){
    return this.model.user;
  }
  getItems(){
    if(this.isDisplay){
      return this.model.items;
    }
    return this.model.items.filter(item=>!item.action); //Değeri false olanları listeler diğerlerini göstermez.
  }
  addItem(value:string){
    if(value!=""){
        this.model.items.push(new TodoItem(value,false));
    }
  }
  deleteItem(index: number) {
    // Validate index to prevent errors
    if (index >= 0 && index < this.model.items.length) {
      this.model.items.splice(index, 1); // Remove the item at the specified index
    } else {
      console.error('Invalid index for delete operation');
    }
  }
  
}
