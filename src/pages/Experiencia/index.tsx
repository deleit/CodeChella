import Banner from "components/Banner";
import BannerExperiencia from "assets/BannerExperiencia.jpg";
import SecaoExperiencia from "components/SecaoExperiencia";

export default function Experiencia() {
  return (
    <>
    <Banner src={BannerExperiencia}>
      A Experiência
    </Banner>
    <main>
      <SecaoExperiencia />
    </main>
    </>
  );
}