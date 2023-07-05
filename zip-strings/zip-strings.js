function zipStrings(strA, strB) {
  let result = "";
  for (let i = 0; i < strA.length || i < strB.length; i++) {
    if (i < strA.length) {
      result += strA.charAt(i);
    }
    if (i < strB.length) {
      result += strB.charAt(i);
    }
  }

  return result;
}
