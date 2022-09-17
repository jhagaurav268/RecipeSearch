import { LightningElement } from "lwc";
import getRandomRecipe from "@salesforce/apex/Spoonacular.getRandomRecipe";
import getRecipeByIngredients from "@salesforce/apex/Spoonacular.getRecipeByIngredients";

export default class RecipeSearch extends LightningElement {
  recipes = [];
  fetchRandomRecipe() {
    getRandomRecipe()
      .then((data) => {
        this.recipes =
          JSON.parse(data) && JSON.parse(data).recipes
            ? JSON.parse(data).recipes
            : [];
      })
      .catch((error) => {
        console.error(error);
      });
  }

  fetchRecipesByIngredients() {
    let ingredients = this.template.querySelector(".ingredient-input").value;
    console.log('Ingredient Type is ', typeof ingredients);
    getRecipeByIngredients({ ingredients })
      .then((data) => {
        this.recipes = JSON.parse(data);
        console.log('Type Is ' , typeof this.recipes)
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
