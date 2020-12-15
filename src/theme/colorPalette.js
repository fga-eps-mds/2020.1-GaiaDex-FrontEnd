function getColor(str, opacity) {
  return opacity ? str.replace('1.0', opacity) : str;
}
export const purple = {
  frenchLilacLighter: (o) => getColor('rgba(242,224,245,1.0)', o),
  frenchLilacMedium: (o) => getColor('rgba(229,194,235,1.0)', o),
  lightWisteriaLighter: (o) => getColor('rgba(216,163,224,1.0)', o),
  lightWisteria: (o) => getColor('rgba(203,133,214,1.0)', o),
  amethyst: (o) => getColor('rgba(190,102,204,1.0)', o),
  vividViolet: (o) => getColor('rgba(140,50,154,1.0)', o),
  eminence: (o) => getColor('rgba(112,40,123,1.0)', o),
  honeyFlower: (o) => getColor('rgba(98,35,108,1.0)', o),
  grapeDark: (o) => getColor('rgba(56,20,62,1.0)', o),
};

export const green = {
  whiteIce: (o) => getColor('rgba(219,250,230,1.0)', o),
  magicMint: (o) => getColor('rgba(183,245,205,1.0)', o),
  pastelGreen: (o) => getColor('rgba(75,231,130,1.0)', o),
  malachite: (o) => getColor('rgba(40,226,105,1.0)', o),
  mountainMeadow: (o) => getColor('rgba(25,187,83,1.0)', o),
  salem: (o) => getColor('rgba(15,128,56,1.0)', o),
  jewel: (o) => getColor('rgba(13,109,48,1.0)', o),
  darkFern: (o) => getColor('rgba(9,72,32,1.0)', o),
  zuccini: (o) => getColor('rgba(6,55,24,1.0)', o),
};

export const gray = {
  iron: (o) => getColor('rgba(214,218,223,1.0)', o),
  silver: (o) => getColor('rgba(196,196,196,1.0)', o),
  grayChateau: (o) => getColor('rgba(168,175,185,1.0)', o),
  rollingStone: (o) => getColor('rgba(124,130,138,1.0)', o),
  abbey: (o) => getColor('rgba(77,82,90,1.0)', o),
  outerSpace: (o) => getColor('rgba(49,53,58,1.0)', o),
  shark: (o) => getColor('rgba(36,37,40,1.0)', o),
};

export const highlight = {
  cinnabar: (o) => getColor('rgba(228,87,46,1.0)', o),
  lightningYellow: (o) => getColor('rgba(255,201,20,1.0)', o),
  lochmara: (o) => getColor('rgba(5,130,202,1.0)', o),
  cranberry: (o) => getColor('rgba(225,90,151,1.0)', o),
};
