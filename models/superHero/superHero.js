const fs = require("fs/promises");
const path = require("path");

const productModule = require("../products");

const cartPath = path.join(__dirname, "cart.json");

const getAll = async () => {
  const data = await fs.readFile(cartPath);
  return JSON.parse(data);
};

const addProductToCart = async ({ productId }) => {
  const allProducts = await productModule.getAll();

  const cart = await getAll();

  const product = allProducts.find((item) => item.id === productId);
  cart.push(product);
  await fs.writeFile(cartPath, JSON.stringify(cart, null, 2));
  return product;
};

const deleteById = async ({ productId }) => {
  const cart = await getAll();
  const index = cart.findIndex((item) => item.id === productId);
  if (index === -1) {
    return null;
  }
  const [result] = cart.splice(index, 1);
  await fs.writeFile(cartPath, JSON.stringify(cart, null, 2));
  return result;
};

module.exports = {
  getAll,
  addProductToCart,
  deleteById,
};
