export type PostType = {
  // userId: string;
  id: string;
  title: string;
  body: string;
};

export type User = {
  id: string;
  name: string;
  address: { city: string };
  email: string;
  phone: string;
};
