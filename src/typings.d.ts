interface Window {
  app1Url: string;
}

declare module "app2/Chip" {
  const Chip: () => JSX.Element;
  export default Chip;
}

declare module "app2" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
