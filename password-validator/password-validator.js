function validatePassword(password) {
  let result = {};
  result.reasons = [];

  let passwordChars = password.match(/[a-zA-Z]/gi);
  let passwordNums = password.match(/[0-9]/gi);
  let passwordSpecial = password.match(/[!?#]/gi);

  if (password.length < 10) {
    result.reasons.push("min length");
  }

  if (password.match(/[a-zA-Z]/gi) === false) {
    result.reasons.push("no character");
  }

  if (new Set(passwordChars).size !== passwordChars.length) {
    result.reasons.push("duplicate character");
  }

  if (password.match(/([a-zA-Z]){2}/gm)) {
    result.reasons.push("consecutive character");
  }

  if (password.match(/[0-9]/gi) === false) {
    result.reasons.push("no number");
  }

  if (new Set(passwordNums).size !== passwordNums.length) {
    result.reasons.push("duplicate number");
  }

  if (password.match(/([0-9]){2}/gm)) {
    result.reasons.push("consecutive number");
  }

  if (password.match(/[!?#]/gi) === false) {
    result.reasons.push("no special character");
  }

  if (new Set(passwordSpecial).size !== passwordSpecial.length) {
    result.reasons.push("duplicate special character");
  }

  if (result.reasons.length === 0) {
    result.valid = true;
  } else {
    result.valid = false;
  }

  return result;
}
