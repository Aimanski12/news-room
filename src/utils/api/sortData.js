// function to sort data
export function sortData(a, b, c, d, e, f, g){
  let item1 = filterTo5(a)
  let item2 = filterTo5(filterB(item1, b))
  let item3 = c ? filterTo5(filterC(item1, item2, c)) : null
  let item4 = d ? filterTo5(filterD(item1, item2, item3, d)) : null
  let item5 = e ? filterTo5(filterE(item1, item2, item3, item4, e)) : null
  let item6 = f ? filterTo5(filterF(item1, item2, item3, item4, item5, f)) : null
  let item7 = g ? filterTo5(
                    filterG(item1, item2, item3, item4, item5, item6, g)) : null
  return {item1, item2, item3, item4, item5, item6, item7}
}

function filterG(a, b, c, d, e, f, g) {
  let g1 = filterF(a, b, c, d, e, g)
  let g2 = filterB(f, g1)
  return g2
}

function filterF(a, b, c, d, e, f) {
  let f1 = filterE(a, b, c, d, f)
  let f2 = filterB(e, f1)
  return f2
}

function filterE(a, b, c, d, e) {
  let e1 = filterD(a, b, c, e)
  let e2 = filterB(d, e1)
  return e2
}

function filterD (a, b, c, d){
  let d1 = filterC(a, b, d)
  let d2 = filterB(c, d1)
  return d2
}

function filterC (a, b, c){
  let c1 = filterB(a, c)
  let c2 = filterB(b, c1)
  return c2
}

function filterB(a, b){
  let y = b.filter((val, i) => {
    if(!check(val, a)) return val
  })
  return y
}

function check(i, a){
  let result =false
  for (let x=0; x < a.length; x++){
    if(a[x].id === i.id){
      result = true
    }
  }
  return result
}

// filter data to 5 items
function filterTo5(data){
  return data.filter((d, i) => {
    if(i<8) return d
  })
}
