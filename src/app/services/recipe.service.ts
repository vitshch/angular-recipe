import {Injectable} from '@angular/core';
import {Recipe} from '../model/Recipe';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

interface Response {
  data: Recipe[];
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private BASE_URL = 'http://localhost:8080';

  recipes: Recipe[];

  constructor(private http: Http,
              private httpClient: HttpClient) {
  }

  getRecipes(): Observable<any> {
    return this.httpClient
      .get(`${this.BASE_URL}/v1/recipes.json`);
  }

  getRecipeById(recipeId: number): Observable<any> {
    return this.httpClient
      .get( `${this.BASE_URL}/v1/recipes/${recipeId}.json`);
  }

  addNewRecipe(recipe: Recipe): Observable<any> {
    console.log(recipe);
    return this.httpClient
      .put( `${this.BASE_URL}/v1/recipes.json`, recipe);
  }
}
