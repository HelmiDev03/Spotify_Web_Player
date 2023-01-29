import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';

export const genres = [
  { title: 'POP', value: 'POP' },
  { title: 'HIP-HOP', value: 'HIP_HOP_RAP' },
  { title: 'DANCE', value: 'DANCE' },
  { title: 'ELECTRONIC', value: 'ELECTRONIC' },
  { title: 'SOUL', value: 'SOUL_RNB' },
  { title: 'ALTERNATIVE', value: 'ALTERNATIVE' },
  { title: 'ROCK', value: 'ROCK' },
  { title: 'LATIN', value: 'LATIN' },
  { title: 'FILM', value: 'FILM_TV' },
  { title: 'COUNTRY', value: 'COUNTRY' },
  { title: 'WORLDWIDE', value: 'WORLDWIDE' },
  { title: 'REGGAE', value: 'REGGAE_DANCE_HALL' },
  { title: 'HOUSE', value: 'HOUSE' },
  { title: 'KPOP', value: 'K_POP' },
];

export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];
