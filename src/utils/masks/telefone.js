export default telefone => {
  // Remove letters dots and hyphens
  if (telefone) {
    let numbers = telefone.toString().replace(/[A-Z]|[a-z]|\.|\-|\(|\)\ /g, '')
    console.log(numbers)
    const part1 = numbers.substr(0, 2)
    const part2 = numbers.substr(2, 5)
    const part3 = numbers.substr(7, 4)
    console.log(part3)
    let newTelefone = `(${part1}) `
    if (part2) {
      newTelefone += part2
    }
    if (part3) {
      newTelefone += '-' + part3
    }
    return newTelefone
  }

  return telefone
}
