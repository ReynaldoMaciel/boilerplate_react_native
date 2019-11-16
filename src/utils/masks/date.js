export default date => {
  // Remove letters dots and hyphens
  if (date) {
    let numbers = date.toString().replace(/[A-Z]|[a-z]|\.|\//g, '')
    console.log(numbers)
    const part1 = numbers.substr(0, 2)
    const part2 = numbers.substr(2, 2)
    const part3 = numbers.substr(4, 4)
    console.log(part3)
    let newDate = part1
    if (part2) {
      newDate += '/' + part2
    }
    if (part3) {
      newDate += '/' + part3
    }
    return newDate
  }

  return date
}
