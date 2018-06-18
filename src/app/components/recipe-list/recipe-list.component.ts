import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../model/Recipe';
import {Router} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  newRecipe: Recipe;

  recipeLoaded: boolean;

  styleClasses: any;
  fontSize: string;

  constructor(private router: Router,
              private recipeService: RecipeService) {
    this.styleClasses = {'graybg': false};
    this.fontSize = '120%';

    this.newRecipe = Recipe.createNew();
  }

  ngOnInit(): void {
    this.recipeService
      .getRecipes().subscribe((response) => this.recipes = response.data);
    // old way
    // this.recipeService.getAllRecipes()
    //   .then((recipes) => {
    //     this.recipeLoaded = true;
    //     this.recipes = recipes;
    //   });
  }

  public userClickedOnRecipe(recipe_id: number): void {
    this.router.navigateByUrl('/recipes/' + recipe_id);
  }

  public toggleBg() {
    const toggle = !this.styleClasses['graybg'];
    this.styleClasses = {'graybg': toggle};
  }

  public toggleFontSize() {
    if (this.fontSize === '120%') {
      this.fontSize = '140%';
    } else {
      this.fontSize = '120%';
    }
  }

  public addNewRecipe(): void {
    this.router.navigateByUrl('/editnewrecipe');
  }
}
