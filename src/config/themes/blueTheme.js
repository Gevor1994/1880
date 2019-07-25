const theme = {};

theme.name = 'blue';

theme.palette = {
  bgColor: [
    '#ffffff', // 0: Main content layout
    '#0e4272', // 1: Topbar
    '#0e4272', // 2: Navbar
    '#e8f1f6', // 3: SecondBar light-blue
    '#f50c14', // 4: Red
    '#000000', // 5: Footer
    // '#313144', // 6: Table row bg
    // '#301a5b', // 7: Filter top bg
    // '#303042', // 8: Checkbox bg
    // '#606186', // 9: Odd added in betslip (td in table)
    // 'rgba(22, 22, 30, .95)', // 10: dropdown profile bg
    // 'rgba(0, 0, 0, .1)', // 11: multiview userBlock background
    // '#282837', // 12: sidebar bg dark
    // '#182323', // 13: Search Input Background
    // '#2d5369', // 14: Winners List Title Background
    // '#223b44', // 15: Winners List Background
    // '#061a32', // 16: Game Category Switcher Background
    // '#061a32', // 17: Game Category Switcher Background (active tab)
    // '#333333', // 18: Footer Content hover background
    // '#d4d4d4', // 19: Payment content divider
    // '#031223', // 20: Logo-line background
  ],

  // modal: [
  //   '#f2f2f2', // 0: modal bg
  //   '#2e2e4b', // 1: cancel btn color
  //   '#5a5a7c', // 2: title color
  //   '#333333', // 3: subtitle color
  //   '#b2b2b2', // 4: text color
  //   '#808080', // 5: label text color
  //   '#e6e6e6', // 6: border input color
  //   '#e4e4e4', // 7: trackbar color
  //   '#666666', // 8: input color
  //   '#4c4c4c', // 9: payment info label
  //   '#dadada', // 10: modal input border
  //   '#ffffff', // 11: block background
  //   '#999999', // 12: text color
  //   '#464662', // 13: league background
  //   '#00cc78', // 14: register modal green color,
  //   '#d9d9d9', // 15: Close mobile background,
  //   '#2d2d4b', // 16: Icon color,
  //   '#ae0101', // 17: Error color,
  //   '#00b533', // 18: Success color
  // ],

  topBar: [
    '#ffffff', // 0: Main text color
    '#ffd700', // 1: Orange text
    '#4d4d4d', // 2: Switch label color
    '#051a32', // 3: Profile select bg
  ],

  text: [
    '#ffffff', // 0: Main text
    '#6f97bd', // 1: Light blue text
    '#02cad1', // 2: Active text
    '#8d8d8d', // 3: Grey text
    '#5e5e5e', // 4: Footer column items color
  ],

  border: [
    '#bbbcbc', // 0: grey border
  ],

  card: [
    '#50506e', // 0: Title backgroung
    '#474762', // 1: List Item backgroung
    '#3a3a50', // 2: List Item Data background
    '#5a5a7c', // 3: Card tab background
    '#29755c', // 4: Card tab selected border
    '#555575', // 5: Light item header
    '#5f5f83', // 6: Light item header #2
    '#6a6a92', // 7: Light card header #3
    '#616186', // 8: Light card background
  ],

  collapse: [
    '#50506e', // 0: Title backgroung
    '#404058', // 1: Body background
    '#42425b', // 2: List Item backgroung
    '#353549', // 3: Cell border
    '#222222', // 4: Cell box-shadow
    '#ffffff', // 5: light border #1
    '#545474', // 6: light border #2
    '#58587a', // 7: light border #3
    '#21212d', // 8: topbar select border
  ], 

  rgba: [
    '255,215,0',   // 0: orange shadow
    '255,255,255', // 1: white
    '0,0,0',       // 2: black
    '24,35,35',    // 3: Search Input background
    '35,59,68',    // 4: Latest winners gradient - 0%
    '59,77,62',    // 5: Latest winners gradient - 50%
    '66,82,61',    // 6: Latest winners gradient - 100%
    '214,214,214', // 7: Modal Profile - Content Block shadow
    '115,115,115', // 8: Modal Profile - Bet History collapse head shadow
    '7,39,77',     // 9: Navbar
    '47,83,105',   // 10: Latest winners background
  ]
};

theme.fontSizes = {
  star: '20px',
  dragIcon: '16px',
  arrow: '8px',
  xs: '10px',
  sm: '11px',
  md: '12px',
  lg: '13px',
  xl: '14px',
  modal: {
    title: '21px',
    subtitle: '14px',
    text: '12px',
    arrow: '8px',
    checkbox: '11px',
    paymentTitle: '16px',
    profileInfo: '18px',
    mobile: {
      md: '15px',
      sm: '14px'
    }
  },
};

theme.fonts = {
  primary: 'Helvetica, Arial, Roboto, Liberation, DejaVu, Meera, Monaco',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace'
};

theme.classes = {
  topbarDropdownMenu: 'topbar-dropdown-menu-default'
};

export default theme;
