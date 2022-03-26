export interface PieceConfig {
  title: string;
  path: string;
  color: string;
  index: number;
}

const config: PieceConfig[] = [
  {
    title: "Typing Effect",
    path: "/pieces/00-typing-effect",
    color: "#2196F3",
    index: 0,
  },
  {
    title: "Thingy 1 Effect",
    path: "/pieces/01-thingy",
    color: "#E66C37",
    index: 1,
  },
  {
    title: "Thingy 2 Effect",
    path: "/pieces/02-thingy",
    color: "#a80000",
    index: 2,
  },
  {
    title: "Typing Effect",
    path: "/pieces/01-typing-effect",
    color: "#fd625e",
    index: 3,
  },
  {
    title: "Typing Effect",
    path: "/pieces/01-typing-effect",
    color: "#004b50",
    index: 4,
  },
  {
    title: "Typing Effect",
    path: "/pieces/01-typing-effect",
    color: "#8d6fd1",
    index: 5,
  },
  {
    title: "Typing Effect",
    path: "/pieces/01-typing-effect",
    color: "#fcb714",
    index: 6,
  },
  {
    title: "Typing Effect",
    path: "/pieces/01-typing-effect",
    color: "#3049ad",
    index: 7,
  },
  {
    title: "Typing Effect",
    path: "/pieces/01-typing-effect",
    color: "#af916d",
    index: 8,
  },
];

export default config;

export function getPieceConfig(path: string): PieceConfig {
  for (const configItem of config) {
    if (configItem.path === path) {
      return configItem;
    }
  }
}
