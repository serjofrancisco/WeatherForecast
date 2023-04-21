export interface ILocation {
  'annotations': {
    'DMS': {
      'lat': string,
      'lng': string
    },
    'MGRS': string,
    'Maidenhead': string,
    'Mercator': {
      'x': number,
      'y': number
    },
    'OSM': {
      'edit_url': string,
      'note_url': string,
      'url': string // leva pra um mapa
    },
    'UN_M49': {
      'regions': {
        'AMERICAS': string,
        'BR': string,
        'LATIN_AMERICA': string,
        'SOUTH_AMERICA': string,
        'WORLD': string
      },
      'statistical_groupings': string[]
    },
    'callingcode': number,
    'currency': { // informações sobre a moeda local
      'decimal_mark': string,
      'html_entity': string,
      'iso_code': string,
      'iso_numeric': string,
      'name': string,
      'smallest_denomination': number,
      'subunit': string,
      'subunit_to_unit': number,
      'symbol': string,
      'symbol_first': number,
      'thousands_separator': string
    },
    'flag': string,
    'geohash': string,
    'qibla': number,
    'roadinfo': {
      'drive_on': string,
      'road': string,
      'road_type': string,
      'speed_in': string
    },
    'sun': {
      'rise': { // horário do nascer do sol
        'apparent': number,
        'astronomical': number,
        'civil': number,
        'nautical': number
      },
      'set': { // horário do pôr do sol
        'apparent': number,
        'astronomical': number,
        'civil': number,
        'nautical': number
      }
    },
    'timezone': { // informações sobre o fuso horário
      'name': string,
      'now_in_dst': number,
      'offset_sec': number,
      'offset_string': string,
      'short_name': string
    },
    'what3words': {
      'words': string
    }
  },
  'bounds': {
    'northeast': {
      'lat': number,
      'lng': number
    },
    'southwest': {
      'lat': number,
      'lng': number
    }
  },
  'components': {
    'ISO_3166-1_alpha-2': string,
    'ISO_3166-1_alpha-3': string,
    'ISO_3166-2': string[], // Codigo pais e estado no formado [pais-estado]
    '_category': string,
    '_type': string,
    'city': string,
    'city_district': string,
    'continent': string,
    'country': string,
    'country_code': string,
    'county': string,
    'municipality': string,
    'postcode': string,
    'region': string,
    'road': string,
    'road_type': string,
    'state': string,
    'state_code': string,
    'state_district': string,
    'suburb': string
  },
  'confidence': number,
  'formatted': string,
  'geometry': {
    'lat': number,
    'lng': number
  }
}
