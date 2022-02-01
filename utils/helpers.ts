export const toImageUrl = (url: string) => {
  return url.split('?')[0]
}
export const formatDate = (isoString: string) => {
  const date = new Date(isoString)

  return new Intl.DateTimeFormat('en-UK', {
    day: 'numeric',
    month: 'numeric',
    year: '2-digit'
  }).format(date)
}
