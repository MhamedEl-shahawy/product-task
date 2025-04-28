import { Product, ProductsResponse } from "@/types/product";

const API_URL = "https://dummyjson.com";

export async function searchProducts(query: string) {
  const response = await fetch(`${API_URL}/products/search?q=${query}`);
  if (!response.ok) throw new Error("Failed to fetch products");
  return response.json() as Promise<ProductsResponse>;
}

export async function getProduct(id: string) {
  const response = await fetch(`${API_URL}/products/${id}`);
  if (!response.ok) throw new Error("Failed to fetch product");
  return response.json() as Promise<Product>;
}
