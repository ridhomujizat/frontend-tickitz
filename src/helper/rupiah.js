function rupiah (number) {
  if (number) {
    const numberStrinng = number.toString().replace(/[^0-9]/g, '')
    const split = numberStrinng.split(',')
    const sisa = split[0].length % 3
    let rupiahNumber = split[0].substr(0, sisa)
    const ribuan = split[0].substr(sisa).match(/\d{1,3}/gi)

    if (ribuan) {
      const separator = sisa ? '.' : ''
      rupiahNumber += separator + ribuan.join('.')
    }
    rupiahNumber = split[1] !== undefined ? rupiahNumber + ',' + split[1] : rupiahNumber
    return rupiahNumber
  }
}

export default rupiah
