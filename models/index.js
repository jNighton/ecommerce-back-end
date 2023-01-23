// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {foreignKey: "categoryId", onDelete: "cascade"});
// Categories have many Products
Category.hasMany(Product, {foreignKey: "categoryId"});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {thourgh: ProductTag, foreignKey: "productId"});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {thourgh: ProductTag, foreignKey: "tagId"});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
