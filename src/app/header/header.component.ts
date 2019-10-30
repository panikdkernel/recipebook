import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    
    @Output() sendActive = new EventEmitter<string>();

    active = "recipes";
    
    constructor() {
        
    }

    ngOnInit() {
  }

  recipesActive() {
    this.active = "recipes";
    this.sendActive.emit(this.active);
  }

  shoppingListActive() {
    this.active = "shoppingList";
    this.sendActive.emit(this.active); 
  }

  newRecepieActive() {
    this.active = "addRecepie";
    this.sendActive.emit(this.active); 
  }
    
}