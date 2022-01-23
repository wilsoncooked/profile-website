export const toImageUrl = (url: string) => {
  return url.split('?')[0]
}
export const formatDate = (isoString: string) => {
  const date = new Date(isoString)

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date)
}
