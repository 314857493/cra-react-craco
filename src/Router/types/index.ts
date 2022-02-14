export interface MyRoute {
  path: string;
  Component?: React.FunctionComponent;
  title: string;
  name: string;
  requireAuth?: boolean;
  children?: MyRoute[];
}
