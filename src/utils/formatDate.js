function formatDate (date, showTime = true) {
  const dateString = date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })

  const timeString = showTime
    ? date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    })
    : ''

  return showTime ? `${dateString} • ${timeString}` : dateString
}

export default formatDate
