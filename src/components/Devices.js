
const widths = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '500px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }
  
const devices = {
    mobileS: `(max-width: ${widths.mobileS})`,
    mobileM: `(max-width: ${widths.mobileM})`,
    mobileL: `(max-width: ${widths.mobileL})`,
    tablet: `(max-width: ${widths.tablet})`,
    laptop: `(max-width: ${widths.laptop})`,
    laptopL: `(max-width: ${widths.laptopL})`,
    desktop: `(max-width: ${widths.desktop})`,
    desktopL: `(max-width: ${widths.desktop})`
  };

  export default devices
  
  
  
//example below

//   @media ${device.laptop} { 
//       max-width: 800px;
//     }
  
  