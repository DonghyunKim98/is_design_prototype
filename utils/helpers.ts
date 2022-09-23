export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

type StringConvert = (str: string) => string;

export const replaceAllSpaceAndSpecialSymbol: StringConvert = (str) => {
  const newStr = str.replaceAll(' ', '').replaceAll('·', '');

  return newStr;
};
