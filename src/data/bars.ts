import type { BarGroup } from "../types/Bars";

export const barsData: BarGroup[] = [
  {
    id: 1,
    items: [
      {
        id: 101,
        className: "bar--long",
        image: "/img/bars/long.svg",
      },
      {
        id: 102,
        className: "bar--small",
        image: "/img/bars/sm.svg",
      },
    ],
  },
  {
    id: 2,
    items: [
      {
        id: 201,
        className: "bar--medium",
        image: "/img/bars/md-blue.svg",
      },
      { id: 202, className: "bar--dot", image: "/img/bars/dot1.svg" },
      {
        id: 203,
        className: "bar--medium",
        image: "/img/bars/md-green.svg",
      },
    ],
  },
  {
    id: 3,
    items: [
      {
        id: 301,
        className: "bar--small",
        image: "/img/bars/small-green.svg",
      },
      { id: 302, className: "bar--long", image: "/img/bars/long.svg" },
    ],
  },
  {
    id: 4,
    items: [
      { id: 401, className: "bar--small", image: "/img/bars/sm.svg" },
      { id: 402, className: "bar--dot", image: "/img/bars/dot-y.svg" },
      { id: 403, className: "bar--medium", image: "/img/bars/md.svg" },
    ],
  },
  {
    id: 5,
    items: [
      {
        id: 501,
        className: "bar--medium",
        image: "/img/bars/md-green.svg",
      },
    ],
  },
];
