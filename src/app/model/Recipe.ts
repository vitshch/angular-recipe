export interface Ingredient {
  ingredient: string;
  measure: string;
}

export interface Instruction {
  instruction: string;
  photo: string;
}

export class Recipe {
  id: number;
  title: string;
  description: string;
  coverPhoto: string;
  preparationTime: number;
  personNumber: number;
  keywords: string[];
  ingredients: Ingredient[];
  instructions: Instruction[];

  constructor(id: number, title: string, description: string, coverPhoto: string,
              preparationTime: number, personNumber: number, keywords: string[],
              ingredients: Ingredient[], instructions: Instruction[]) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.coverPhoto = coverPhoto;
    this.preparationTime = preparationTime;
    this.personNumber = personNumber;
    this.keywords = keywords;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }

  public static recipeFromJSON(obj: any): Recipe {
    console.log(obj);
    return new Recipe(obj.id, obj.title, obj.description, obj.coverPhoto, obj.preparationTime,
      obj.personNumber, obj.keywords, obj.ingredients, obj.instructions);
  }

  static createNew(): Recipe {
    return new Recipe(0, '', '', null, 1, 1,
      [], [], []);
  }
}
