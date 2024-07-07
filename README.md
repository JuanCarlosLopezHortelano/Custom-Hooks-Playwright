# Prueba técnica para Juniors y Trainees de React en Live Coding.

APIs:

- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello

- Recupera un hecho aleatorio de gatos de la primera API
- Recuperar la primera palabra del hecho
- Muestra una imagen de un gato con la primera palabra.
-endpoint para usar ---> `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

# React_Prueba_Junior

-- Inicializado proyecto mediante npm create vite@latest -- seleccionando vanilla para simular prueba tecnica

-- $ npm install @vitejs/plugin-react -E

-- $ npm install react react-dom -E


## Crear archivo vite.config.js

import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

export default defineConfig(
    {
        plugins:[react()]
    }
)

## Modifica el main.js a main.jsx para que cargue eleementos jsx

import {createRoot} from 'react-dom/client'


const root = createRoot(document.getElementById('app'))


root.render(
  <h1>BUENAS</h1>
)


## modificamos el index para que cargue main.jsx en lugar de main.js
