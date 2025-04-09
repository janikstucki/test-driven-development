export function isValid(isbn13: string): boolean {
  
  
  const zahlen: number[] = isbn13.split('').map(Number);
  //teilt die Zahen auf und durch map werden die einzelen Strings in Zahlen umgewandelt

  let z1 = zahlen[0];
  let z2 = zahlen[1];
  let z3 = zahlen[2];
  let z4 = zahlen[3];
  let z5 = zahlen[4];
  let z6 = zahlen[5];
  let z7 = zahlen[6];
  let z8 = zahlen[7];
  let z9 = zahlen[8];
  let z10 = zahlen[9];
  let z11 = zahlen[10];
  let z12 = zahlen[11];
  let z13 = zahlen[12];

  if ((z1 + z3 + z5 + z7 + z9 + z11 + 3 * (z2 + z4 + z6 + z8 + z10 + z12)) % 10 == 0) 
  {
    return true
  }
  else
  {
    return false
  }
}
