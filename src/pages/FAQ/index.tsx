import Banner from "components/Banner";
import BannerFAQ from "assets/BannerFAQ.jpeg";
import SecaoFAQ from "components/SecaoFAQ";

export default function FAQ() {
  return (
    <>
      <Banner src={BannerFAQ}>
        Informações Gerais
      </Banner>
      <main>
        <SecaoFAQ />
      </main>
    </>
  );
}