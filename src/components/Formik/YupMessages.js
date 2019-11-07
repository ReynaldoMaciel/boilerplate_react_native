export default {
  mixed: {
    default: '${path} inserido(a) não é válido(a)',
    required: 'Campo "${path}" é obrigatório',
    oneOf:
      '${path} náo é válido(a), informe um dos seguintes valores: ${values}',
  },
  string: {
    email: 'Valor do campo "${path}" não é um e-mail válido',
    matches: '${path} inserido(a) não é válido(a)',
    url: '${path} deve ter um formato de URL válida',
    trim: '${path} não deve conter espaços no início ou no fim.',
    lowercase: '${path} deve estar em maiúsculo',
    uppercase: '${path} deve estar em minúsculo',
  },
  number: {
    min: '${path} deve ser no mínimo ${min}',
    max: '${path} deve ser no máximo ${max}',
    lessThan: '${path} deve ser menor que ${less}',
    moreThan: '${path} deve ser maior que ${more}',
    notEqual: '${path} não pode ser igual à ${notEqual}',
    positive: '${path} deve ser um número posítivo',
    negative: '${path} deve ser um número negativo',
    integer: '${path} deve ser um número inteiro',
  },
  date: {
    min: '${path} deve ser maior que a data ${min}',
    max: '${path} deve ser menor que a data ${max}',
  },
  array: {
    min: '${path} deve ter no mínimo ${min} itens',
    max: '${path} deve ter no máximo ${max} itens',
  },
}
