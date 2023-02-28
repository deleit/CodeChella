import Banner from "components/Banner";
import TopBanner from "assets/TopBannerVerao.jpg";

export default function Home() {
  return(
    <main>
      <Banner src={TopBanner}>
        Boas-vindas ao <br/>#CodeChella2023!
      </Banner>
    </main>
  )
}