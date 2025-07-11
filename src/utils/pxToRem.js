const pxToRem = (pixels) => {
  const htmlElementFontSize = parseInt(
    getComputedStyle(document.documentElement).fontSize
  )

  return pixels / htmlElementFontSize
}

export default pxToRem
