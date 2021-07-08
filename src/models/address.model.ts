import {Entity, model, property} from '@loopback/repository';


@model()
export class Address extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    defaultFn: "uuidV4"
  })
  id?: string;

  @property({
    type: 'string',
    required: true
  })
  houseNumber: string;
  @property({
    type: 'string',
    required: true
  })
  locality: string;

  @property({
    type: 'string'
  })
  landmark?: string;

  @property({
    type: 'number',
    required: true
  })
  pincode: number;

  constructor(data?: Partial<Address>) {
    super(data);
  }
}
export interface AddressRelations {
  // describe navigational properties here
}

export type AddressModel = Address & AddressRelations;
