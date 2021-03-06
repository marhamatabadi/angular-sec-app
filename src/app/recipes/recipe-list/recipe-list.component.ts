import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is a simple test',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png'),

    new Recipe('Test recipe', 'This is a simple test',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png'),

    new Recipe('Test recipe', 'This is a simple test',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
