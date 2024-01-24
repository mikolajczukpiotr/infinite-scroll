type Location = {
    city: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    country: string;
    postcode: number;
    state: string;
    street: {
      name: string;
      number: number;
    };
    timezone: {
      description: string;
      offset: string;
    };
  };
  
  type Login = {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
  };
  
  type Name = {
    first: string;
    last: string;
    title: string;
  };
  
  type Picture = {
    large: string;
    medium: string;
    thumbnail: string;
  };
  
  type Dob = {
    age: number;
    date: string;
  };
  
  type Registered = {
    age: number;
    date: string;
  };
  
  type Id = {
    name: string;
    value: string;
  };
  
  export type Result = {
    cell: string;
    dob: Dob;
    email: string;
    gender: string;
    id: Id;
    location: Location;
    login: Login;
    name: Name;
    nat: string;
    phone: string;
    picture: Picture;
    registered: Registered;
  };
  
  export type ResponseData = {
    results: Result[];
    info: {
      seed: string;
      results: number;
      page: number;
    };
  };

  export type OldData = {
    pageParams: (number | undefined)[];
    pages: ResponseData[];
  };