import spinnakerVisual from '../../content/spinnaker.svg?raw'
import kanmVisual from '../../content/radio.svg?raw'
import pobVisual from '../../content/pob.svg?raw'
import bitjockeyVisual from '../../content/bitjockey.svg?raw'
import isabellaVisual from '../../content/isabella.svg?raw'
import mechanixVisual from '../../content/mechanix.svg?raw'



export const projects = [
  {
    title: "spinnaker",
    description: "Product improvements for Netflix's CI/CD system",
    link: "https://spinnaker.io/",
    visual: spinnakerVisual

  },
  {
    title: "kanm",
    description: "Website redesign for KANM Student Radio",
    link: "https://kanm.org/",
    visual: kanmVisual

  },
  {
    title: "bitjockey",
    description: "Open source DJ automation software",
    link: "https://bitjockey.kanm.org/",
    visual: bitjockeyVisual

  },
  {
    title: "mechanix",
    description: "Research for a sketch recognition physics teaching tool",
    link: "https://srltamu.com/mechanix.php",
    visual: mechanixVisual

  },
  {
    title: "isabella",
    description: "My personal media homelab",
    link: "/projects/isabella",
    visual: isabellaVisual

  },
  {
    title: "pob phoenix",
    description: "Personnel cataloging tool built for offshore operations",
    link: "/projects/phoenix",
    visual: pobVisual
  }
];