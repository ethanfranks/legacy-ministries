import React from "react"
import { Card } from "./Card"
import { Product } from "data-temp/products"

export default function PLPCard(product: Product) {
  const formatter = new Intl.NumberFormat('default', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <Card heading={product.name} content={product.detailedDescription} footer={formatter.format(product.price)} />
  )
}
