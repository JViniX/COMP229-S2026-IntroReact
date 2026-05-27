import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import IngredientsList from './IngredientsList'

const itemsList = [
  "1 cup unsalted butter",
  "1 cup crunchy peanut butter",
  "1 cup brown sugar",
  "1 cup white sugar",
  "2 eggs",
  "2.5 cups all purpose flour",
  "1 teaspoon baking powder",
  "0.5 teaspoon salt"
];

const data = [
  {
    title: 'Title 01',
    text: 'This is the first item'
  },
  { 
    title: 'Title 02', 
    text: 'This is the second item' 
  },
  { title: 'Title 03', text: 'This is the third item' },
];

function Welcome() {

  return (
    <>
      <h1>Hello World!</h1>
      <IngredientsList items={itemsList} combo={data}/>
    </>
  )
}

export default Welcome
