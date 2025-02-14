# Marco Antonio Bustillos Quiroz Games API

## Descripción
Esta API permite gestionar una lista de juegos. Proporciona endpoints para ver todos los juegos, ver un juego por su ID, crear un nuevo juego, actualizar un juego existente y eliminar un juego por su ID.

## Endpoints

### Obtener todos los juegos
- **URL:** `/api/games`
- **Método:** `GET`
- **Descripción:** Obtiene una lista de todos los juegos.
- **Ejemplo de solicitud:**
  ```sh
  curl -X GET "http://localhost:3002/api/games"
  ```

### Obtener un juego por ID
- **URL:** `/api/games/:id`
- **Método:** `GET`
- **Descripción:** Obtiene una lista de todos los juegos.
- **Ejemplo de solicitud:**
  ```sh
  curl -X GET "http://localhost:3002/api/games/1"
  ```

### Crear un nuevo juego
- **URL:** `/api/games`
- **Método:** `POST`
- **Descripción:** Crea un nuevo juego.
- **PayLoad:** 
 ```sh
  {
  "name": "Quake 3 Arena",
  "description": "Quake III Arena is a 1999 multiplayer-focused first-person shooter developed by id Software. The third installment of the Quake series, Arena differs from previous games by excluding a story-based single-player mode and focusing primarily on multiplayer gameplay. The single-player mode is played against computer-controlled bots. It features music composed by Sonic Mayhem and Front Line Assembly founder Bill Leeb."
}
  ```
- **Ejemplo de solicitud:**
  ```sh
  curl -X POST "http://localhost:3002/api/games" -H "Content-Type: application/json" -d '{
  "name": "Quake 3 Arena",
  "description": "Quake III Arena is a 1999 multiplayer-focused first-person shooter developed by id Software. The third installment of the Quake series, Arena differs from previous games by excluding a story-based single-player mode and focusing primarily on multiplayer gameplay. The single-player mode is played against computer-controlled bots. It features music composed by Sonic Mayhem and Front Line Assembly founder Bill Leeb."
  }'
  ```


### Actualizar un juego por ID
- **URL:** `/api/games/:id`
- **Método:** `PUT`
- **Descripción:** Actualiza un juego existente por su ID.
- **PayLoad:** 
 ```sh
  {
  "name": "Quake 3 Arena",
  "description": "Quake III Arena is a 1999 multiplayer-focused first-person shooter developed by id Software. The third installment of the Quake series, Arena differs from previous games by excluding a story-based single-player mode and focusing primarily on multiplayer gameplay. The single-player mode is played against computer-controlled bots. It features music composed by Sonic Mayhem and Front Line Assembly founder Bill Leeb."
}
  ```
- **Ejemplo de solicitud:**
  ```sh
  curl -X PUT "http://localhost:3002/api/games/2" -H "Content-Type: application/json" -d '{
  "name": "Quake III Arena",
  "description": "Quake III Arena is a 1999 multiplayer-focused first-person shooter developed by id Software. The third installment of the Quake series, Arena differs from previous games by excluding a story-based single-player mode and focusing primarily on multiplayer gameplay. The single-player mode is played against computer-controlled bots. It features music composed by Sonic Mayhem and Front Line Assembly founder Bill Leeb."
  }'
  ```

### Eliminar un juego por ID
- **URL:** `/api/games/:id`
- **Método:** `DELETE`
- **Descripción:** Elimina un juego por ID
- **Ejemplo de solicitud:**
  ```sh
  curl -X DELETE "http://localhost:3002/api/games/1"
  ```