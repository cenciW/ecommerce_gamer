import { CalcularParcelamento } from "@/app/core";

export default function useParcelamento(
  valor: number,
  qtdParcelas: number = 12
) {
  const parcelamento = new CalcularParcelamento().executar(valor, qtdParcelas);
  return parcelamento;
}
