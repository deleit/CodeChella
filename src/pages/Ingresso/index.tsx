import Banner from "components/Banner";
import BannerIngresso from "assets/BannerIngresso.jpeg";
import SecaoIngresso from "components/SecaoIngresso";

export default function Ingresso() {
  return (
    <>
      <Banner src={BannerIngresso}>
        Garanta seu Ingresso
      </Banner>
      <main>
        <SecaoIngresso />
      </main>
    </>
  );
}