const { share, isSupported } = useShare()
export function startShare(text: string) {
  share({
    text,
    url: location.href,
  })
}
export function supportShare() {
  // eslint-disable-next-line no-console
  console.log(isSupported)
  return isSupported.value
}
