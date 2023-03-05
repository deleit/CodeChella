import Banner from "components/Banner";
import BannerSetores from "../../assets/BannerSetores.jpg";
import SecaoMapa from "components/SecaoMapa/indext";
import SecaoDetalhes from "components/SecaoDetalhes";

export default function Setores() {
  return (
    <>
    <Banner src={BannerSetores}>
      Mapa de Setores
    </Banner>
    <main>
      <SecaoMapa />
      <SecaoDetalhes />
    </main>
    </>
  );
}