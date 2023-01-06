export interface Iurls {
  section: string;
  urlsArray: {
    name: string;
    urlPage: string;
    component?: React.ReactElement | null;
  }[];
}
