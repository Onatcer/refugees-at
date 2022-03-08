export type InitiativeType = 'donations' | 'participate' | 'commodity-contributions' | 'accommodation'

export interface MapPosition {
    lon: number,
    lat: number
}

export interface Initiative {
    name: string,
    slug: string,
    website: string,
    description: string,
    content?: string,
    type?: InitiativeType[]
    position?: MapPosition
}

export interface Organization {
    'name': string,
    'slug': string,
    'logo': string,
    'facebook'?: string
    'website': string,
    'description': string,
    initiatives: Initiative[]
}