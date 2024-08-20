const Card = ({
  reciper: {
    recipe: { image, label, cuisineType, mealType, dishType },
  },
}) => {
  return (
    <div className="reciper border rounded-xl bg-slate-300 shadow-md p-5 w-72 h-80 m-6 ">
      <h3 className=" capitalize  pb-4 font-bold ">{label}</h3>

      <div className=" flex flex-row gap-5 justify-center">
        <img className="w-32 rounded-xl" src={image} alt="" />
        <p className="bg-white p-2 text-xs rounded-xl h-8 mt-10 inline-block ">
          {mealType}
        </p>
      </div>

      <p className=" font-serif  before:content-['CuisineType:'] before:pr-2 capitalize pt-4 ">
        {cuisineType}
      </p>

      <p className=" font-serif before:content-['MealType:'] before:pr-2 capitalize pt-4">
        {dishType}
      </p>
    </div>
  );
};
export default Card;
