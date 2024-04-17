import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user = 'Ozcan';
  items = [
    {description: "Kahvaltı", action: "No"},
    {description: "Ders Çalışma", action: "No"},
    {description: "Spor", action: "No"},
    {description: "Sinema", action: "No"}
  ];
}
