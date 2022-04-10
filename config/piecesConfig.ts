export interface PieceConfig {
  title: string;
  path: string;
  index: number;
}

const config: PieceConfig[] = [
  {
    title: "Typing Effect",
    path: "/pieces/00-typing-effect",
    index: 0,
  },
  {
    title: "See-through Text",
    path: "/pieces/01-see-through-text",
    index: 1,
  },
  {
    title: "Frosted Glass Effect",
    path: "/pieces/02-frosted-glass-effect",
    index: 2,
  },
  {
    title: "Screen Curtain Effect",
    path: "/pieces/03-screen-curtain-effect",
    index: 3,
  },
  {
    title: "Hoverable Header",
    path: "/pieces/04-hoverable-header",
    index: 4,
  },
  {
    title: "Typing Effect",
    path: "/pieces/01-typing-effect",
    index: 5,
  },
  {
    title: "Typing Effect",
    path: "/pieces/01-typing-effect",
    index: 6,
  },
  {
    title: "Typing Effect",
    path: "/pieces/01-typing-effect",
    index: 7,
  },
  {
    title: "Typing Effect",
    path: "/pieces/01-typing-effect",
    index: 8,
  },
  {
    title: "Typing Effect",
    path: "/pieces/01-typing-effect",
    index: 9,
  },
  {
    title: "Typing Effect",
    path: "/pieces/01-typing-effect",
    index: 10,
  },
  {
    title: "Typing Effect",
    path: "/pieces/01-typing-effect",
    index: 11,
  },
  {
    title: "Typing Effect",
    path: "/pieces/01-typing-effect",
    index: 12,
  },
  {
    title: "Typing Effect",
    path: "/pieces/01-typing-effect",
    index: 13,
  },
];

export default config;

const colors = [
  "#2196F3",
  "#FF8200",
  "#D6001C",
  "#fd625e",
  "#01735C",
  "#A8A9AD",
  "#fcb714",
  "#3049ad",
  "#af916d",
  "#009A44",
  "#8d6fd1",
  "#F7BCAC",
];

export function getPieceColor(index: number): string {
  const colorOffset: number = index % 12;
  return colors[colorOffset];
}

export function getPieceConfig(path: string): PieceConfig {
  for (const configItem of config) {
    if (configItem.path === path) {
      return configItem;
    }
  }
}
