const url = new URL(location.href)
const params = url.searchParams
const q = params.get('q')

const result = eval(q)
alert(result)
