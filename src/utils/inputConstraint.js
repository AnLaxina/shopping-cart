function constrainNumber(number, maxValue, minValue) {
  number = number > maxValue ? maxValue : number;
  number = number < minValue ? minValue : number;
  return number;
}

export default function constrainInput(
  inputElement,
  maxValue = 9999,
  minValue = 0
) {
  inputElement.value = constrainNumber(inputElement.value, maxValue, minValue);
}
