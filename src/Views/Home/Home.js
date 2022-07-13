import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";

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
    author: "Jim",
    name: "Chicken Curry",
    label: "Chicken Curry",
    description: "Delicious spicy chicken curry",
    image: ChickenCurry,
    mainIngredients: "One Whole Chicken",
    subIngredients:
      "Water, Curry Powder, Chillies, Tomatoes, Water, Onion, Garlic",
    instructions:
      "Heat the butter in a large frying pan over medium-high heat, then add the chicken and cook until it browns....",
  },
  {
    key: "2",
    author: "Aravind",
    name: "Hamburger",
    label: "Hamburger",
    description: "Juicy burger with toppings and a soft bun",
    image: Hamburger,
    mainIngredients: "Burger Buns",
    subIngredients:
      "Water, Curry Powder, Chillies, Tomatoes, Water, Onion, Garlic",
    instructions:
      "Heat the butter in a large frying pan over medium-high heat, then add the chicken and cook until it browns....",
  },
  {
    key: "3",
    author: "Stuart",
    name: "Fried Chicken",
    label: "Friend Chicken",
    description: "American style friend chicken with the condiments",
    image: FriedChicken,
    mainIngredients: "One Whole Chicken",
    subIngredients:
      "Water, Curry Powder, Chillies, Tomatoes, Water, Onion, Garlic",
    instructions:
      "Heat the butter in a large frying pan over medium-high heat, then add the chicken and cook until it browns....",
  },
  {
    key: "4",
    author: "Lee",
    name: "Cheeseburger",
    label: "Cheeseburger",
    description: "Juicy Cheese burger with three toppings and a soft bun",
    image: Cheeseburger,
    mainIngredients: "Burger Buns",
    subIngredients:
      "Water, Curry Powder, Chillies, Tomatoes, Water, Onion, Garlic",
    instructions:
      "Heat the butter in a large frying pan over medium-high heat, then add the chicken and cook until it browns....",
  },
];

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [current, setCurrent] = useState("1");

  const [selectedRecipe, setSelectedRecipe] = useState({});

  const onClick = (e) => {
    setCurrent(e.key);
    onRecipeChange(e.key);
  };

  const onRecipeChange = (value) => {
    const selectedOption = recipes.filter((recipe) => recipe.key === value);
    setSelectedRecipe(...selectedOption);
  };

  useEffect(() => {
    console.log(selectedRecipe, "SELECTED");
  }, [selectedRecipe]);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          //defaultSelectedKeys={["1"]}
          items={recipes}
          onClick={onClick}
        />
      </Sider>

      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {selectedRecipe && (
            <div className="recipe-container">
              <h1 className="heading-text">
                Please Select a Receipe from the left
              </h1>
              <img
                src={selectedRecipe.image ?? Placeholder}
                width={400}
                height={250}
              />
              <div className="text-container">
                <h1 className="title-text">{selectedRecipe.label}</h1>
                <p className="description-text">{selectedRecipe.description}</p>
                <p className="mainIngredients-text">
                  {selectedRecipe.mainIngredients
                    ? `What are the main Ingredients: ${selectedRecipe.mainIngredients}`
                    : ``}
                </p>
                <p className="subIngredients-text">
                  {selectedRecipe.subIngredients
                    ? `All the other Ingredients: ${selectedRecipe.subIngredients}`
                    : ``}
                </p>
                <p className="instructions-text">
                  {selectedRecipe.instructions
                    ? `How to Cook this item?: ${selectedRecipe.instructions}`
                    : ``}
                </p>
              </div>
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
