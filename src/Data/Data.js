import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  //   UilPackage,
  UilMoneyWithdrawal,
  UilUsdSquare,
  UilChart,
} from "@iconscout/react-unicons";

export const sidebarData = [
  {
    id: "d1",
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    id: "d2",
    icon: UilUsersAlt,
    heading: "Users",
  },
  {
    id: "d3",
    icon: UilClipboardAlt,
    heading: "Reports",
  },
  {
    id: "d4",
    icon: UilChart,
    heading: "Analatics",
  },
];

export const cardsData = [
  {
    title: "Posts",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    icon: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 43, 100, 120],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,470",
    icon: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #f9d59b",
    },
    barValue: 60,
    value: "5,970",
    icon: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 32, 12, 43, 13, 53, 20],
      },
    ],
  },
];
