import { FooterVariation, FooterCardVariation } from "@digi/arbetsformedlingen";
import {
  DigiFooter,
  DigiFooterCard,
} from "@digi/arbetsformedlingen-react";

export const Footer = () => {
  return (
    <footer>
      <DigiFooter afVariation={FooterVariation.SMALL}>
        <div slot="content-top">
        </div>
        <div slot="content-bottom-left">
            <DigiFooterCard afType={FooterCardVariation.BORDER}>
              <a href="#">Om tjänsten LIA4U</a>
              <p>
                Systemversion: 0.8 <br /> Ansvarig: Grupp 3
              </p>
            </DigiFooterCard>
        </div>
        <div slot="content-bottom-right">
          <p>Följ oss på</p>
          <a href="#">Facebook</a>
          <a href="#">Youtube</a>
          <a href="#">Linkedin</a>
          <a href="#">Instagram</a>
        </div>
      </DigiFooter>
    </footer>
  );
};
