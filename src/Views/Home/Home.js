import { Layout, Menu } from "antd";
import React, { useState } from "react";

// Components
import Label from "../../Components/Label/Label";
import OtherTitle from "../../Components/OtherTitle/OtherTitle";
import IngredientPicture from "../../Components/IngredientPicture/IngredientPicture";

// Assets
import Placeholder from "../../Assets/img/placeholder.png";
import Hamburger from "../../Assets/img/hamburger.png";
import Cheeseburger from "../../Assets/img/cheeseburger.png";
import FriedChicken from "../../Assets/img/fried-chicken.png";
import ChickenCurry from "../../Assets/img/chicken-curry.png";

// styles
import "./Home.scss";

const { Sider, Content } = Layout;

const recipes = [
  {
    key: "1",
    author: "Jim Halpert",
    name: "Chicken Curry",
    label: "Chicken Curry",
    description: "Delicious spicy chicken curry",
    image: ChickenCurry,
    mainingredients: "One Whole Chicken",
    subingredients:
      "Water, Curry Powder, Chillies, Tomatoes, Water, Onion, Garlic",
    instructions:
      "Heat the butter in a large frying pan over medium-high heat, then add the chicken and cook until it turns browns....",
  },
  {
    key: "2",
    author: "Micheal Scott",
    name: "Hamburger",
    label: "Hamburger",
    description: "Juicy burger with toppings and a soft bun",
    image: Hamburger,
    mainingredients: "Burger Buns",
    subingredients:
      "Hamburger Patty, Tomatotes, Cheese, Olives, Salad Leaves, Onion",
    instructions:
      "Toast the bun firstly, then cook up the patty till its nice and grilled, add other ingredients on top......",
  },
  {
    key: "3",
    author: "Stuart Little",
    name: "Fried Chicken",
    label: "Friend Chicken",
    description: "American style friend chicken with the condiments",
    image: FriedChicken,
    mainingredients: "One Whole Chicken",
    subingredients: "Bread Crumbs, Honey Sauce, Chilly Powder, Cooking Oil",
    instructions:
      "Firstly Heat up the Cooking oil, Smother the chicken in Honey sauce, bread crums and the chilly powder, then dip it in Hot Oil.....",
  },
  {
    key: "4",
    author: "Bruce Lee",
    name: "Cheeseburger",
    label: "Cheeseburger",
    description: "Juicy Cheese burger with three toppings and a soft bun",
    image: Cheeseburger,
    mainingredients: "Burger Buns",
    subingredients:
      "Cheese Slices, Chicken Patty, Tomatoes, Olives, Salad Leaves, Onion",
    instructions:
      "Toast the bun firstly, then cook up the patty till its nice and grilled along with cheese slices, add other ingredients...",
  },
];

function Home() {
  const [selectedRecipe, setSelectedRecipe] = useState({});

  const onClick = (e) => {
    onRecipeChange(e.key);
  };

  const onRecipeChange = (value) => {
    const selectedOption = recipes
      .filter((recipe) => recipe.key === value)
      .pop();
    setSelectedRecipe(selectedOption);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={false}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" items={recipes} onClick={onClick} />
      </Sider>

      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          <div className="recipe-container">
            <h1 className="heading-text">
              Please Select a Receipe from the left
            </h1>

            <div>
              <IngredientPicture image={selectedRecipe.image ?? Placeholder} />
            </div>

            <div className="text-container">
              <Label
                label={selectedRecipe.label}
                author={selectedRecipe.author}
              />

              {selectedRecipe.description && (
                <p className="description-text">{selectedRecipe.description}</p>
              )}

              {selectedRecipe.description && (
                <div className="divider-container">
                  <h1 className="divider-text">
                    So, Let's start cooking shall we?
                  </h1>
                </div>
              )}

              {selectedRecipe.mainingredients && (
                <OtherTitle
                  heading={"What are the Main Ingredients?: "}
                  text={selectedRecipe.mainingredients}
                />
              )}

              {selectedRecipe.subingredients && (
                <OtherTitle
                  heading={"All the Other Ingredients: "}
                  text={selectedRecipe.subingredients}
                />
              )}

              {selectedRecipe.instructions && (
                <OtherTitle
                  heading={"How to Cook this item: "}
                  text={selectedRecipe.instructions}
                />
              )}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;
