"use strict";
const slugify = require("slugify");
const users = require("./../../seed/users.json");
const categoryData = require("./../../seed/categories.json");
const products = require("./../../seed/products.json");
/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

module.exports = async () => {
  if ((await strapi.services.category.count()) <= 0) {
    categoryData.forEach((item) => {
      strapi.services.category.create({
        name: item.name,
        slug: slugify(item.name),
      });
    });
  }

  if ((await strapi.services.product.count()) <= 0) {
    products.forEach((item) => {
      strapi.services.product.create({
        name: item.name,
        description: item.description,
        price: item.price,
        user: item.user,
        slug: slugify(item.name),
        category: item.category,
        active: item.active,
      });
    });
  }
};
