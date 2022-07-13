import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
const { Header, Sider, Content } = Layout;

const recipes = [
  {
    key: "1",
    author: "Jim",
    name: "Chicken Curry",
    label: "Chicken Curry",
    description: "Delicious spicy chicken curry",
  },
  {
    key: "2",
    author: "Aravind",
    name: "Hamburger",
    label: "Hamburger",
    description: "Juicy burger with toppings and a soft bun",
  },
  {
    key: "3",
    author: "Stuart",
    name: "Fried Chicken",
    label: "Friend Chicken",
    description: "American style friend chicken with the condiments",
  },
  {
    key: "4",
    author: "Lee",
    name: "Cheeseburger",
    label: "Cheeseburger",
    description: "Juicy Cheese burger with three toppings and a soft bun",
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
          {selectedRecipe && <p>{selectedRecipe.description}</p>}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
