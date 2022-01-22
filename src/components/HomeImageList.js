import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import intel from '../assets/intel.png';
import hp from '../assets/hp.png';
import cisco from '../assets/cisco.png';
import microsoft from '../assets/microsoft.png';
import vidizayn from '../assets/vidizayn.png';
import ofisim from '../assets/ofisim.png';
import virtuatic from '../assets/virtuatic.png';
;


export default function HomeImageList() {
  return (
    <ImageList sx={{ width:"100%",height: '270px'}} cols={4} rowHeight={70}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={item.img}
            srcSet={item.img}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: hp,
    title: 'hp',
  },
  {
    img: intel,
    title: 'intel',
  },
  {
    img: cisco,
    title: 'cisco',
  },
  {
    img: microsoft,
    title: 'microsoft',
  },
  {
    img: vidizayn,
    title: 'vidizayn',
  },
  {
    img: ofisim,
    title: 'ofisim',
  },
  {
    img: virtuatic,
    title: 'virtuatic',
  },
];
