export type BarItem = {
  id: number;
  className: string;
  image: string;
  alt?: string;
};

export type BarGroup = {
  id: number;
  items: BarItem[];
};
