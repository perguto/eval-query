const url = new URL(location.href)
const params = url.searchParams
const q = params.get('q')

eval(q)

const result = eval(q)
const textField = document.createElement('code')

textField.innerText = result
document.body.append(textField)

