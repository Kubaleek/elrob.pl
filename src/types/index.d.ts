interface Offer {
  id: number;
  label: string;
  url: string;
  customText: JSX.Element;
  details?: string[];
}

interface NavbarItem {
  id: number;
  label: string;
  url?: string;
  offer?: Offer[];
}

interface Author {
  name: string;
  url: string;
}
interface OpenGraph {
  type: string;
  locale: string;
  url: string;
  title: string;
  image: strtng;
  description: string;
  siteName: string;
}

interface Icon {
  url: string;
  sizes: string;
  type: string;
}

interface Icons {
  icon: Icon[];
}

interface Site {
  name: string;
  description: string;
  url: string;
  keywords: string[];
  authors: Author[];
  creator: string;
  publisher: string;
  icons: Icons;
  openGraph: OpenGraph;
  manifest: string;
}
