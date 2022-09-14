const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  if(rowsPerPage == null || undefined){
    // console.log(1)
    return 1
  }
  else if(arrayItems == null || undefined){
    // console.log(undefined)
    return undefined
  }
  else{
    page = arrayItems.length/rowsPerPage
    if(page != Infinity){
      return Math.ceil(page)
    }
    else{return 1}
    // console.log(page)
  }

}
module.exports = totalPages
