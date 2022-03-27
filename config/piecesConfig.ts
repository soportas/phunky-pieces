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
    title: "See-through Text",
    path: "/pieces/01-see-through-text",
    color: "#E66C37",
    index: 1,
  },
  {
    title: "Frosted Glass Effect",
    path: "/pieces/02-frosted-glass-effect",
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
