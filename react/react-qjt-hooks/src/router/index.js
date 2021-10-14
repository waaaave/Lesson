import Index from '../view/index';
const route = [
  {
      path: "/",
      exact: true,
      render(porps) {
        return <Index />
      }
  }
]

const nav = [
  {
      to: "/",
      txt: "首页",
  },
  {
      to: "/getStart",
      txt: "新手入门",
  },
  {
      to: "/about",
      txt: "关于",
  },
];


export { route,nav }