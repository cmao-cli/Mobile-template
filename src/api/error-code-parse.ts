/**
 * error code parse
 */

type CodeParse = {
  [key:string]:string;
};

const codeParse:CodeParse = {
  'A_0': '未知错误',
};

export const errorParse = (errCode:string) : string => {
  return codeParse[errCode] || '未知错误';
};