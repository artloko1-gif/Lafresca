export interface MenuItem {
  name: string;
  description: string;
  price: string;
  allergens?: string;
}

export interface DailyMenuData {
  date: string;
  soup: MenuItem;
  mains: MenuItem[];
}

export interface Branch {
  id: string;
  name: string;
  type: 'office' | 'industry' | 'school';
  city: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  LOCATIONS = 'locations',
  NEWS = 'news',
  REFERENCES = 'references',
  CONTACT = 'contact',
}