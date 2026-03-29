import { products, getProductById, getRelatedProducts } from "@/data/products";
import ProductDetail from "./ProductDetail";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(Number(id));

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  return <ProductDetail product={product} relatedProducts={relatedProducts} />;
}
