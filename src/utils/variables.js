export const color = {
  blue: '#0ae',
};

// From https://living-apps.luca-d3.com/
// --blue: #007bff;
// --indigo: #6610f2;
// --purple: #6f42c1;
// --pink: #e83e8c;
// --red: #dc3545;
// --orange: #fd7e14;
// --yellow: #ffc107;
// --green: #28a745;
// --teal: #20c997;
// --cyan: #17a2b8;
// --white: #fff;
// --gray: #6c757d;
// --gray-dark: #343a40;
// --primary: #007bff;
// --secondary: #6c757d;
// --success: #28a745;
// --info: #17a2b8;
// --warning: #ffc107;
// --danger: #dc3545;
// --light: #f8f9fa;
// --dark: #343a40;
// --breakpoint-xs: 0;
// --breakpoint-xs-m: 450px;
// --breakpoint-sm: 768px;
// --breakpoint-md: 1024px;
// --breakpoint-lg: 1280px;
// --breakpoint-xl: 1600px;

export const breakpoint = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobileXL: '640px',
  tablet: '768px',
  tabletL: '900px',
  laptop: '1024px',
  laptopL: '1118px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${breakpoint.mobileS})`,
  mobileM: `(min-width: ${breakpoint.mobileM})`,
  mobileL: `(min-width: ${breakpoint.mobileL})`,
  mobileXL: `(min-width: ${breakpoint.mobileXL})`,
  tablet: `(min-width: ${breakpoint.tablet})`,
  tabletL: `(min-width: ${breakpoint.tabletL})`,
  laptop: `(min-width: ${breakpoint.laptop})`,
  laptopL: `(min-width: ${breakpoint.laptopL})`,
  desktop: `(min-width: ${breakpoint.desktop})`,
  desktopL: `(min-width: ${breakpoint.desktop})`,
};
