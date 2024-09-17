export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Device = {
  id: string;
  name:string;
  location: string;
  intensity: number;
  status: 'on' | 'off';
  color: string;
};

export type DeviceTable = {
  id: string;
  name:string;
  location: string;
  intensity: number;
  status: 'on' | 'off';
  color: string;
};