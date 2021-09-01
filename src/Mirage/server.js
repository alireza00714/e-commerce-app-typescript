import { createServer, Model } from "miragejs";
import mockProducts from "./mockProduct";
import mockCategories from "./mockCategory";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      product: Model,
      category: Model,
    },

    seeds(server) {
      mockProducts.forEach((product) => {
        server.create("product", {
          title: product.title,
          underTitle: product.underTitle,
          description: product.description,
          brand: product.brand,
          category: product.category,
          quantity: product.quantity,
          image1: product.image1,
          image2: product.image2,
          image3: product.image3,
          price: product.price,
        });
      });
      mockCategories.forEach((category) => {
        server.create("category", { name: category });
      });
    },

    routes() {
      this.namespace = "/api";

      this.get("/products", (schema) => {
        return schema.products.all();
      });

      this.get("/products/single/:id", (schema, request) => {
        let id = request.params.id;
        return schema.products.find(id);
      });

      this.get("/products/:categoryName", (schema, request) => {
        let categoryName = request.params.categoryName;
        return schema.products.where({ category: categoryName });
      });

      this.get("/categories", (schema) => {
        return schema.categories.all();
      });
    },
  });

  return server;
}
