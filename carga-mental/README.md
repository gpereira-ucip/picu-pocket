# Carga Mental: la app de la casa

PWA para Gonzalo, Dani (esposa) y Daniela (empleada de limpieza). Sirve para compras, tareas, Joaco y mensajes.

## 1. Dónde está publicada
En https://gpereira-ucip.github.io/picu-pocket/carga-mental/ (carpeta `carga-mental/` del repo picu-pocket). La tarea programada diaria la actualiza sola.

## 2. Sincronizar entre los teléfonos (Firebase, gratis)
1. Entrar a https://console.firebase.google.com y crear un proyecto nuevo ("carga-mental"). Analytics no hace falta.
2. Ir a **Build → Authentication → Comenzar** y en **Sign-in method** habilitar **Anónimo**.
3. Ir a **Build → Firestore Database → Crear base de datos**, elegir la ubicación `southamerica-east1` y modo producción.
4. En la pestaña **Reglas** de Firestore, pegar esto y publicar:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{db}/documents {
       match /hogares/{hogar}/{doc=**} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```
5. Ir a **Configuración del proyecto (⚙) → Tus apps → Web (</>)**, registrar la app y copiar el bloque `const firebaseConfig = {...}`.
6. En la app, abrir ⚙, pegar ese bloque y tocar **Conectar**.
7. Tocar **📲 Invitar por WhatsApp** y mandarle el link a Dani y a Daniela. Cada una lo abre en Chrome, elige quién es y después usa ⋮ → **Agregar a pantalla principal**.

El código del hogar funciona como contraseña: no lo compartan fuera de la familia.

## Avisos
- Si la app está abierta o en segundo plano, avisa cuando otro marca algo o manda un mensaje. Hay que activar los avisos en ⚙.
- Para que lleguen avisos con la app **totalmente cerrada** hace falta Firebase Cloud Messaging más una Cloud Function. Eso requiere el plan Blaze, que es de pago por uso y para una familia sale prácticamente gratis. Es el próximo paso posible.

Creada por Gonzalo Gabriel Pereira.
