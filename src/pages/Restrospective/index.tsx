import React from "react";
import { Warhammer9thBanner } from "../../Assets/index.tsx";
import { Navigation } from "../../Components/Navigation/index.js";
import { TextBox } from "../../Components/TextBox/index.tsx";
import { TextBoxProps } from "../../Types/text-box-props-type.ts";

const AboutArray: Array<TextBoxProps> = [
  {
    title: "Overview",
    image: Warhammer9thBanner,
    alignment: "left",
    paragraph1:
      "Warhammer 9th Edition Legacy is a open resource reference for Warhammer 9th Edition rules, missions, and dataslates. Warhammer 9th Edition released in July 2020, and introduced active balancing with seasonal and quarterly updates. Warhammer 9th Edition progressive scoring is based off both Codex specific secondary missions, and generic primary missions",
    paragraph2:
      "Warhammer 9th Edition continued the use of Command Points and Stratagems from 8th edition. It also introduced the idea of [CORE] units. One of they ideas behind 9th Edition was to `tone` down the number of rerolls available to units. As to whether or not GW was succesfull in this venture,  is debateble",
    paragraph3:
      "9th Edition was fraught with certain codexes being too powerful on release. The competitive scene routinely saw recently released codexes reach 60+% winrates in competitive scenes. GW would then adjust via points and FAQs problemeatic armies to bring them back in line",
  },
  {
    title: "9th Edition at the End",
    image: Warhammer9thBanner,
    alignment: "left",
    paragraph1:
      "At the tail end of 9th Edition, GW released Arks of Omen, a three part expansion that revamped mission sets, detachments and CP allotment",
    paragraph2:
      "It also saw the (re-) release of Votann, World Eaters, and the Astra Militarum codexes. The ending days of 9th edition was quite strange, as the numerous balance passes from GW have more or less hampered the insanity of certain 9th Edition armies and units.",
    paragraph3:
      "When 10th Edition was introduced, it removed point costs and a ton of army specific flavor. It also bundled together artifacts and warlord traits, two features that have been a staple since 8th edition. 10th Edition also went back to HQ units being attached to units, although these leaders were heavily restricted in unit attachments. 10th Edition assigned stratagems to per detachment",
  },
];

export function Retrospective() {
  return (
    <div className="App">
      <Navigation />

      <div className="w-90 mx-auto">
        {AboutArray.map((textBox) => {
          return (
            <TextBox
              title={textBox.title}
              paragraph1={textBox.paragraph1}
              paragraph2={textBox.paragraph2}
              paragraph3={textBox.paragraph3}
              image={textBox.image}
              alignment={textBox.alignment}
            />
          );
        })}
      </div>
    </div>
  );
}
