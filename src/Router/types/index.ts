export interface MyRoute {
  path: string;
  Component?:
    | JSX.Element
    | JSX.IntrinsicElements
    | React.ReactNode
    | React.FC
    | any;
  title: string;
  name: string;
  requireAuth?: boolean;
  children?: MyRoute[];
}
