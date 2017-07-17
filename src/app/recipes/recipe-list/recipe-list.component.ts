import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('Fries','French fries made in france ofc duh!','https://i.ytimg.com/vi/ETTyVQrUZt8/maxresdefault.jpg')];
  constructor() { }

  ngOnInit() {
  }

}
