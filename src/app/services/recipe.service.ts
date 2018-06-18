import {Injectable} from '@angular/core';
import {Recipe} from '../model/Recipe';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private BASE_URL = 'http://localhost:8080';

  recipes: Recipe[];

  constructor(private http: Http,
              private httpClient: HttpClient) {
  }

  getRecipes(): Observable<Array<Recipe>> {
    return this.httpClient
      .get<Array<Recipe>>(this.BASE_URL + '/v1/recipes.json');
  }

  getAllRecipes(): Promise<Recipe[]> {
    return this.http
      .get(this.BASE_URL + '/v1/recipes.json')
      .toPromise()
      .then(response => response.json().data as Recipe[]);
  }

  getRecipeById(recipeId: number): Promise<Recipe> {
    return this.http
      .get(this.BASE_URL + `/v1/recipes/${recipeId}.json`)
      .toPromise()
      .then(response => response.json().data as Recipe);
  }

  addNewRecipe(recipe: Recipe): Promise<Recipe> {
    console.log(recipe);
    return this.http
      .put(this.BASE_URL + '/v1/recipes.json', recipe)
      .toPromise()
      .then(response => response.json().data as Recipe);
  }
}
