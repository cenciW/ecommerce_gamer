import ProdutoItem from "@/app/components/produto/ProdutoItem";
import { produtos } from "@/app/core";

export default function Home() {
  return (
    <div className="container grid grid-cols-4">
      {produtos.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} />
      ))}
    </div>
  );
}
