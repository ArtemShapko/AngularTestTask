interface name {
  first: string;
  last: string;
}

export interface Card {
  _id: string;
  amount: number;
  type: string;
  name: name;
  company: string;
  email: string;
  phone: string;
  address: string;
}
