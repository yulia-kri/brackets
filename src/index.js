module.exports = function check(str, bracketsConfig) {
  const bracketPairs = bracketsConfig.map(bracket => bracket.join(''));

  let previousStr = str;

  do {
    bracketPairs.forEach((bracketPair, i) => {
      str = str.replace(bracketPair, '');
      return str;
    });

    if (previousStr === str) {
      return false;
    }

    previousStr = str;
  } while (str.length !== 0)
  
  return true;
}
