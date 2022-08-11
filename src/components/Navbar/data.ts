interface BaseNavigationType {
  id: number;
  title: string;
  href: string;
}
export interface NavigationType extends BaseNavigationType {
  children?: NavigationType[];
}
export const navigationItems: NavigationType[] = [
  {
    id: 1,
    title: "Explore",
    href: "#",
  },
  { id: 2, title: "Jobs", href: "/find-jobs" },
];
