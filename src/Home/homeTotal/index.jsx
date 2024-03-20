

import ContainerHome from "../container-home";

import ImageHome from "../imgae-home";
import Product from "../product";
import Support from "../support";
import TopSale from "../top-sale";

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
