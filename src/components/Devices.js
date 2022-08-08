
const widths = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '500px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
    desktopL: '4000px'
  }
  
const devices = {
    mobileS: `(max-width: ${widths.mobileS})`,
    mobileM: `(max-width: ${widths.mobileM})`,
    mobileL: `(max-width: ${widths.mobileL})`,
    tablet: `(max-width: ${widths.tablet})`,
    laptop: `(max-width: ${widths.laptop})`,
    laptopL: `(max-width: ${widths.laptopL})`,
    desktop: `(min-width: ${widths.desktop})`,
    desktopL: `(max-width: ${widths.desktopL})`
  };

  export default devices
  
  
  
//example below

//   @media ${devices.mobileS} { 
//       max-width: 800px;
//     }
//   @media ${devices.mobileM} { 
//       max-width: 800px;
//     }
//   @media ${devices.mobileL} { 
//       max-width: 800px;
//     }
//   @media ${devices.tablet} { 
//       max-width: 800px;
//     }
//   @media ${devices.laptop} { 
//       max-width: 800px;
//     }
//   @media ${devices.laptopL} { 
//       max-width: 800px;
//     }
  
  //   @media ${devices.desktop} { 
//       max-width: 800px;
//     }
//   @media ${devices.desktopL} { 
//       max-width: 800px;
//     }
  
  