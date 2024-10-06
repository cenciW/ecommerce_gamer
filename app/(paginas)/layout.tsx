import Pagina from "../components/template/Pagina";

export default function Layout(props: any) {
  //sem o pagina, o layout não terá o cabeçalho e rodapé
  return <Pagina>{props.children}</Pagina>;
}
