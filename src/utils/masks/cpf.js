export default cpf => {
  // Remove letters dots and hyphens
  if (cpf) {
    let numbers = cpf.toString().replace(/[A-Z]|[a-z]|\.|\-/g, '')
    const part1 = numbers.substr(0, 3)
    const part2 = numbers.substr(3, 3)
    const part3 = numbers.substr(6, 3)
    const part4 = numbers.substr(9, 2)
    let newCpf = part1
    if (part2) {
      newCpf += '.' + part2
    }
    if (part3) {
      newCpf += '.' + part3
    }
    if (part4) {
      newCpf += '-' + part4
    }
    return newCpf
  }

  return cpf
}
