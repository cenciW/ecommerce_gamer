import ProdutoItem from "@/app/components/produto/ProdutoItem";
import { produtos } from "@/app/core";
import Pagina from "./components/template/Pagina";

export default function Home() {
  return (
    <Pagina>
      <div className="container grid grid-cols-4">
        {produtos.map((produto) => (
          <ProdutoItem key={produto.id} produto={produto} />
        ))}
      </div>
    </Pagina>
  );
}
