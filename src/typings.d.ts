interface Window {
  app1Url: string;
}

declare module "app2/Chip" {
  const Chip: () => JSX.Element;
  export default Chip;
}
declare module "app2/components" {
  const componentscomponents: { readonly [key: any]: any };
  export default components;
}
