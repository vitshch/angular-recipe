import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../model/Recipe';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.recipeService.getRecipeById(parseInt(params.get('recipe_id'), 10))
        .subscribe((recipe) => this.recipe = recipe.data);
    });
  }

  private goBack() {
    this.location.back();
  }

}
