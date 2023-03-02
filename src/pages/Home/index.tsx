import Banner from "components/Banner";
import TopBanner from "assets/TopBannerVerao.jpg";
import SecaoDatas from "components/SecaoDatas";
import SecaoLineup from "components/SecaoLineup";
import BottomBanner from "components/BottomBanner";

export default function Home() {
  return(
    <>
      <Banner src={TopBanner}>
          Boas-vindas ao <br/>#CodeChella2023!
      </Banner>
      <main>
        <SecaoDatas />
        <SecaoLineup />
        <BottomBanner />
      </main>
    </>
  )
}