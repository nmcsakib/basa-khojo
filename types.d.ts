interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

interface Post {
    
    _id: string;
  title: string;
  gender: string;
  token: string;
  location: LocationObject;
  accLoc: string;
  contacts: string[];
  facebook: string;
  rent: string;
  availableRooms: string;
  description: string;
  balcony: string;
  kitchen: string;
  wifi: string;
  images: string[];
  lastUpdate: string;
  status: string;
    }

interface DropdownProp {
  setLocation: (location: {
    division?: string;
    district?: string;
    upazila?: string;
    union?: string;
    div_en?: string
    dis_en?: string
    upa_en?: string
    uni_en?: string
    university?: {
    
    "id": string,
    "bn_name": string,
    "en_name": string,
    "short_form": string,
    "district": string
    };
  }) => void;
  uni: boolean
}


interface LocationObject {
  division?: string;
  district?: string;
  upazila?: string;
  union?: string;
  div_en?: string;
  dis_en?: string;
  upa_en?: string;
  uni_en?: string;
  university?: {
    id: string;
    bn_name: string;
    en_name: string;
    short_form: string;
    district: string;
  };
}