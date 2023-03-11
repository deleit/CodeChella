import Banner from "components/Banner";
import BannerIngresso from "assets/BannerIngresso.jpeg";
import BannerIngressoComprado from "assets/BannerIngressoComprado.jpeg";
import SecaoIngresso from "components/SecaoIngresso";
import SecaoIngressoComprado from "components/SecaoIngressoComprado";
import IIngresso from "interfaces/IIngresso";

export default function Ingresso() {
  const ingresso: string | null = sessionStorage.getItem("ingresso");
  const ingressoComprado:boolean = ingresso !== null;
  let ingressoJson:IIngresso = JSON.parse(ingresso ?? "{}");

  return (
    <>
      {
        ingressoComprado
        ? 
          <Banner src={BannerIngressoComprado}>
            Seu ingresso está aqui!
          </Banner>
        :
          <Banner src={BannerIngresso}>
            Garanta seu Ingresso
          </Banner>
      }
      <main>
        {
          ingressoComprado
          ? <SecaoIngressoComprado ingresso={ingressoJson} />
          : <SecaoIngresso />
        }
      </main>
    </>
  );
}