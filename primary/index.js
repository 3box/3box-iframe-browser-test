const IFRAME_STORE_URL = "http://230242fb.ngrok.io"

startButton.addEventListener('click', () => {
  console.log('click!')
  const iframe = document.createElement('iframe')
  iframe.src = IFRAME_STORE_URL
  iframe.style = 'width:0; height:0; border:0; border:none !important'
  document.body.appendChild(iframe)
})
