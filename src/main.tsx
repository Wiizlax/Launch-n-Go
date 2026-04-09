import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { setWasmUrl } from '@lottiefiles/dotlottie-react'
import wasmUrl from '@lottiefiles/dotlottie-web/dist/dotlottie-player.wasm?url'

import { App } from './App'
import './styles/index.css'

setWasmUrl(wasmUrl)

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('Élément #root introuvable')
}

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
)
