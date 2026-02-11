import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required.";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientList = ingredients
        .split("\n")
        .filter((item) => item.trim() !== "");
      if (ingredientList.length < 2) {
        newErrors.ingredients =
          "Please include at least two ingredients.";
      }
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newRecipe = {
        title,
        ingredients: ingredients.split("\n"),
        instructions: steps,
      };

      console.log("New Recipe Submitted:", newRecipe);

      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Add New Recipe
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
          
          {/* Title */}
          <div>
            <label className="block mb-2 font-medium">
              Recipe Title
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title}
              </p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block mb-2 font-medium">
              Ingredients (one per line)
            </label>
            <textarea
              rows="4"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">
                {errors.ingredients}
              </p>
            )}
          </div>

          {/* Steps */}
          <div>
            <label className="block mb-2 font-medium">
              Preparation Steps
            </label>
            <textarea
              rows="5"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
            />
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">
                {errors.steps}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
