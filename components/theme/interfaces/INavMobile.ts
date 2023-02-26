export interface IsliderNavMobile {
  section: string;
  urlsArray: {
    name: string;
    urlPage: string;
    component?: React.ReactElement | null;
  }[];
}

export interface INavDesktop {
  section: string;
  urlsArray: {
    name: string;
    urlPage: string;
    component?: React.ReactElement | null;
  }[];
}
