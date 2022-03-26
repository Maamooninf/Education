type FDigit = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type Digit = "0" | FDigit;
type Dig = `${FDigit}${Digit}${Digit}` | `${FDigit}${Digit}`;
type NegDig = `-${FDigit}${Digit}${Digit}` | `-${FDigit}${Digit}`;
export interface ScreenShap {
  backgroundColor: string;
  height: Dig;
  width: Dig;
  borderRadius: any;
  top: Dig | NegDig | "0";
  right: Dig | NegDig | "0";
  zIndex: number;
}

export interface Signpara {
  error?: boolean;
  color?: string;
}
