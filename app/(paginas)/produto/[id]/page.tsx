import ProdutoNaoEncontrado from "@/app/components/produto/ProdutoNaoEncontrado";
import { produtos } from "@/app/core";

export default function PaginaProduto(props: any) {
  const id = +props.params.id;
  const produto = produtos.find((produto) => produto.id === id);
  return produto ? (
    <div>
      <h1>Produto: {produto?.nome}</h1>
    </div>
  ) : (
    <ProdutoNaoEncontrado />
  );
}
