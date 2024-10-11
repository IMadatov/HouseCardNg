export interface Housinglocation {
  houseId: number;
  houseName: string | null | undefined;
  city: string | null | undefined;
  state: string | null | undefined;
  availableUnits: number | null | undefined;
  wifi: boolean | null | undefined;
  loundry: boolean | null | undefined;
  price:string|null|undefined;
  photoId: number;
  createdUserId: number;
  isNew?: boolean;
}
/**
 *{
    "houseId": 0,
    "houseName": "string",
    "city": "string",
    "state": "string",
    "availableUnits": 0,
    "wifi": true,
    "loundry": true,
    "createdUserId": 0,
    "photoId": 0
  }
 */
