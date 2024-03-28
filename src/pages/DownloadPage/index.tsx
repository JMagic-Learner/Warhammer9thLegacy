import React from "react";
import { Navigation } from "../../components/Navigation/index";
import { Banner } from "../../components/Banner/index";
import Warhammer9thBanner from "../../assets/w40k9.jpg";
import { GenericFAQColumn } from "../../components/FAQColumn/index";
import { FAQObject } from "../../types/faq-props-type";

const CoreFAQs: Array<FAQObject> = [
  {
    source: "Warhammer40k9thEditionCoreBookIndomitus1.3.pdf",
    pdfName: "Warhammer40k9thEditionCoreBookIndomitus1.3.pdf",
    link: "9th Edition Core Rules Indomitus 1.3 FAQ",
  },
  {
    source: "Warhammer40k9thEditionImperialArmorCompendiumIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionImperialArmorCompendiumIndomitus1.0.pdf",
    link: "9th Edition Imperial Armor Indomitus 1.0 FAQ",
  },
  {
    source: "Warhammer40k9thEditionQ2BalanceDataSlate2023.pdf",
    pdfName: "Warhammer40k9thEditionQ2BalanceDataSlate2023.pdf",
    link: "9th Edition Q2 Balance Dataslate 2023",
  },
  {
    source: "Warhammer40k9thEditionMunitorumFieldManual2023.pdf",
    pdfName: "Warhammer40k9thEditionMunitorumFieldManual2023.pdf",
    link: "9th Edition Field Munitorum 2023",
  },
];

const ImperiumFAQs: Array<FAQObject> = [
  {
    source: "Warhammer40k9thEditionAdeptaSororitasIndomitus1.1.pdf",
    pdfName: "Warhammer40k9thEditionAdeptaSororitasIndomitus1.1.pdf",
    link: "Adepta Sororitas 9th Edition Indomitus 1.1 FAQ",
  },
  {
    source: "Warhammer40k9thEditionAdmechIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionAdmechIndomitus1.0.pdf",
    link: "Admech 9th Edition Indomitus 1.0 FAQ",
  },
  {
    source: "Warhammer40k9thEditionAstraMilitarumIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionAstraMilitarumIndomitus1.0.pdf",
    link: "Astra Militarum 9th Edition Indomitus 1.0 FAQ",
  },
  {
    source: "Warhammer40k9thEditionBloodAngelsIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionBloodAngelsIndomitus1.0.pdf",
    link: "Blood Angels 9th Edition Indomitus 1.0 FAQ",
  },
  {
    source: "Warhammer40k9thEditionDarkAngelsIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionDarkAngelsIndomitus1.0.pdf",
    link: "Dark Angels 9th Edition Indomitus 1.0 FAQ",
  },
  {
    source: "Warhammer40k9thEditionDeathWatchIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionDeathWatchIndomitus1.0.pdf",
    link: "Death Watch 9th Edition Indomitus 1.0 FAQ",
  },
  {
    source: "Warhammer40k9thEditionGreyKnightsFAQIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionGreyKnightsFAQIndomitus1.0.pdf",
    link: "Grey Knights 9th Edition Indomitus 1.0 FAQ",
  },
  {
    source: "Warhammer40k9thEditionImperialFistsIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionImperialFistsIndomitus1.0.pdf",
    link: "Imperial Fists 9th Edition Indomitus 1.0 FAQ",
  },
  {
    source: "Warhammer40k9thEditionImperialKnightsIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionImperialKnightsIndomitus1.0.pdf",
    link: "Imperial Knights 9th Edition Indomitus 1.0 FAQ",
  },
  {
    source: "Warhammer40k9thEditionIronHandsIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionIronHandsIndomitus1.0.pdf",
    link: "Iron Hands 9th Edition Indomitus 1.0 FAQ",
  },
  {
    source: "Warhammer40k9thEditionSalamandersIndomitus1.1.pdf",
    pdfName: "Warhammer40k9thEditionSalamandersIndomitus1.1.pdf",
    link: "Salamanders 9th Edition Indomitus 1.1 FAQ",
  },
  {
    source: "Warhammer40k9thEditionSpaceMarinesIndomitus1.1.pdf",
    pdfName: "Warhammer40k9thEditionSpaceMarinesIndomitus1.1.pdf",
    link: "Space Marines 9th Edition Indomitus 1.1 FAQ",
  },
  {
    source: "Warhammer40k9thEditionSpaceWolvesIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionSpaceWolvesIndomitus1.0.pdf",
    link: "Space Wolves 9th Edition Indomitus 1.0 FAQ",
  },
  {
    source: "Warhammer40k9thEditionUltraMarineIndomitus1.2.pdf",
    pdfName: "Warhammer40k9thEditionUltraMarineIndomitus1.2.pdf",
    link: "Ultra Marines 9th Edition Indomitus 1.2 FAQ",
  },
];

const XenosFAQs: Array<FAQObject> = [
  {
    source: "Warhammer40k9thEditionAeldariIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionAeldariIndomitus1.0.pdf",
    link: "Aeldari 9th Edition Indomitus 1.0 FAQ",
  },
  {
    source: "Warhammer40k9thEditionDrukhariIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionDrukhariIndomitus1.0.pdf",
    link: "Drukhari 9th Edition Indomitus 1.0 FAQ",
  },
  {
    source: "Warhammer40k9thEditionHarlequinsIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionHarlequinsIndomitus1.0.pdf",
    link: "Harlequinns 9th Edition Indomitus 1.0 FAQ",
  },
  {
    source: "Warhammer40k9thEditionNecronsIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionNecronsIndomitus1.0.pdf",
    link: "Necrons 9th Edition Indomitus 1.0 FAQ",
  },
  {
    source: "Warhammer40k9thEditionOrksIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionOrksIndomitus1.0.pdf",
    link: "Orks 9th Edition Indomitus 1.0 FAQ",
  },
  {
    source: "Warhammer40k9thEditionTauIndomitus1.2.pdf",
    pdfName: "Warhammer40k9thEditionTauIndomitus1.2.pdf",
    link: "Tau 9th Edition Indomitus 1.2 FAQ",
  },
  {
    source: "Warhammer40k9thEditionTyranidsIndomitus1.1.pdf",
    pdfName: "Warhammer40k9thEditionTyranidsIndomitus1.1.pdf",
    link: "Tyranids 9th Edition Indomitus 1.1 FAQ",
  },
  {
    source: "Warhammer40k9thEditionVotannIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionVotannIndomitus1.0.pdf",
    link: "Votann 9th Edition Indomitus 1.0 FAQ",
  },
];

const ChaosFAQs: Array<FAQObject> = [
  {
    source: "Warhammer40k9thEditionChaosDaemonsIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionChaosDaemonsIndomitus1.0.pdf",
    link: "Chaos Daemons 9th Edition Indomitus 1.0 FAQ",
  },
  {
    source: "Warhammer40k9thEditionChaosKnightsIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionChaosKnightsIndomitus1.0.pdf",
    link: "Chaos Knights 9th Edition Indomitus 1.0 FAQ",
  },
  {
    source: "Warhammer40k9thEditionChaosSpaceMarinesIndomitus1.1.pdf",
    pdfName: "Warhammer40k9thEditionChaosSpaceMarinesIndomitus1.1.pdf",
    link: "Chaos Space Marines 9th Edition Indomitus 1.1 FAQ",
  },
  {
    source: "Warhammer40k9thEditionDeathGuardIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionDeathGuardIndomitus1.0.pdf",
    link: "Death Guard 9th Edition Indomitus 1.0 FAQ",
  },
  {
    source: "Warhammer40k9thEditionThousandSonsIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionThousandSonsIndomitus1.0.pdf",
    link: "Thousand Sons 9th Edition Indomitus 1.0 FAQ",
  },
  {
    source: "Warhammer40k9thEditionWorldEatersIndomitus1.0.pdf",
    pdfName: "Warhammer40k9thEditionWorldEatersIndomitus1.0.pdf",
    link: "World Eaters 9th Edition Indomitus 1.0 FAQ",
  },
];

export function DownloadsSection() {
  return (
    <div className="App">
      <Navigation />
      <Banner image={Warhammer9thBanner} />
      <div className="w-100">
        <div className="row text-center">
          <GenericFAQColumn FAQArray={CoreFAQs} title={"Core Rules"} />
          <GenericFAQColumn FAQArray={ImperiumFAQs} title={"Imperium"} />
          <GenericFAQColumn FAQArray={XenosFAQs} title={"Xenos"} />
          <GenericFAQColumn FAQArray={ChaosFAQs} title={"Chaos"} />
        </div>
      </div>
    </div>
  );
}
