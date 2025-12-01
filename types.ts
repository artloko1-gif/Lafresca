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

// Administration & Content Types
export interface ContentState {
  [key: string]: string; // Maps ID -> Text Content or Image Base64
}

export interface ContentContextType {
  content: ContentState;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
  updateContent: (id: string, value: string) => void;
  isEditing: boolean;
  toggleEditing: () => void;
}
