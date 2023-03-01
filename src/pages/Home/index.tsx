import Banner from "components/Banner";
import TopBanner from "assets/TopBannerVerao.jpg";
import SecaoDatas from "components/SecaoDatas";

export default function Home() {
  return(
    <>
      <Banner src={TopBanner}>
          Boas-vindas ao <br/>#CodeChella2023!
      </Banner>
      <main>
        <SecaoDatas />
      </main>
    </>
  )
}