import BannerCompra from "@/app/components/produto/BannerCompra";
import InformacoesProduto from "@/app/components/produto/InformacoesProduto";
import ProdutoNaoEncontrado from "@/app/components/produto/ProdutoNaoEncontrado";
import TituloProduto from "@/app/components/produto/TituloProduto";
import { produtos } from "@/app/core";

export default function PaginaProduto(props: any) {
  const id = +props.params.id;
  const produto = produtos.find((produto) => produto.id === id);

  return produto ? (
    <div className="flex flex-col gap-20 container py-10">
      <div className="flex flex-col gap-10">
        <TituloProduto produto={produto} />
        <InformacoesProduto produto={produto} />
        <BannerCompra produto={produto}></BannerCompra>
      </div>
    </div>
  ) : (
    <ProdutoNaoEncontrado />
  );
}
