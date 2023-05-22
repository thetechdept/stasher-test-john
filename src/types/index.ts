export interface IStashpointsData {
  has_next: boolean
  has_prev: boolean
  items: IStashpoint[]
  page: number
  pages: number
  total: number
}

export interface IStashpoint {
    open_late: boolean
    type: string
    deactivated_at: string | null
    upsell_link: string | null
    id: string
    booking_fee: number
    capacity: number
    address: string
    latitude: number
    nearest_city: INearestCity
    rating_count: number
    opening_hours: IOpeningHours[]
    created: string
    name: string
    featured: true
    postal_code: string
    longitude: number
    country_code: string
    host_id: string
    location_name: string,
    upsell_photo: string | null
    rating: number
    opening_hours_exceptions: IOpeningHoursException[]
    photos: string[]
    upsell_text: string | null
    bagday_price: number
    timezone: string
    holiday_open_type: string
    activated_at: string
    tree_price: number
    slug: string | null
    open_twentyfour_seven: boolean
    description: string | null
    pricing_structure: IPricingStructure
}

export interface INearestCity {
  partner_promo_text: string | null
  slug: string
  bbox: {
    northeast: {
      lat: number
      lng: number
    },
    southwest: {
      lat: number
      lng: number
    }
  },
  partner_promo_photo: string | null,
  name: string,
  partner_promo_link: string | null,
  parent_id: string,
  id: string
}

export interface IOpeningHours {
  open: string
  close: string
  day: number
}

export interface IOpeningHoursException {
  type: string
  date: string
  name: string
  start_time: string
  end_time: string
}

export interface IPricingStructure {
  extra_day_cost: number
  first_day_cost: number
  ccy_symbol: string
  ccy_minor_in_major: number
  ccy: string
}

