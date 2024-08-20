import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
function Food() {
  const [searchrecipes, setsearchRecipes] = useState("");
  const [recipes, setRecipes] = useState([]);
  async function findRecipes() {
    const recipes = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchrecipes}&app_id=7c6d3dc6&app_key=69979be74ae5fcd1b58de356b90ccf82%09`
    );
    const response = await recipes.json();
    console.log(response);
    setRecipes(response.hits);
  }

  useEffect(() => {
    findRecipes();
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-center items-center gap-10 mt-20 mb-10  ">
        <input
          type="text"
          placeholder="Enter Ingredient"
          className="border border-black font-mono pl-5 h-10 rounded-md "
          value={searchrecipes}
          onChange={(e) => setsearchRecipes(e.target.value)}
        />
        <button
          className="border border-gray-900 h-8 w-20 rounded-md text-sm"
          onClick={findRecipes}
        >
          Search
        </button>
      </div>

      <div className="container flex flex-row gap-4  flex-wrap justify-center mb-10">
        {recipes.map((reciper, index) => (
          <Card key={index} reciper={reciper} />
        ))}
      </div>
    </div>
  );
}

export default Food;
