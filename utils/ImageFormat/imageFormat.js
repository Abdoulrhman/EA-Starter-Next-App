export function getImageUrl(url, w, h) {
  const newUrl = url?.replace('t_,w_[w],h_[h]', `t_,w_${w},h_${h}`)
  return newUrl
}
