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
  