

import ContainerHome from "./ContainerHome";

import ImageHome from "./ImageHome";
import Product from "./Product";
import Support from "./Support";
import TopSale from "./TopSale";

export default function Home() {
  return (
    <div>
      <ImageHome></ImageHome>
      <Product></Product>
      <Support></Support>
      <ContainerHome></ContainerHome>
      <TopSale></TopSale>
    </div>
  );
}
