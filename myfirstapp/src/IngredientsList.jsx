function IngredientsList({items, combo}) {

    console.log(combo);

    return (
        <div>
            <h1>Ingredients List</h1>
            <ul class="ingredients">
                {/* <li>1 cup unsalted butter</li>
                <li>1 cup crunchy peanut butter</li>
                <li>1 cup brown sugar</li>
                <li>1 cup white sugar</li>
                <li>2 eggs</li>
                <li>2.5 cups all purpose flour</li>
                <li>1 teaspoon baking powder</li>
                <li>0.5 teaspoon salt</li> */}

                {items.map((ingredient, index)=>(
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
}

export default IngredientsList;