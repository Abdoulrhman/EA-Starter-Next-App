export function getRemainingTime(endDate) {
  const fromatEndDate = new Date(endDate).getTime()
  const fromatNowDate = new Date().getTime()
  const diff = fromatEndDate - fromatNowDate
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  return `${days}D:${hours}H:${minutes}M `
}
