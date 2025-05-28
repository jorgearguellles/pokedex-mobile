# Pokédex Mobile App 🎮

Una aplicación móvil moderna de Pokédex desarrollada con React Native y Expo, que permite a los usuarios explorar, buscar y guardar sus Pokémon favoritos.

## 🚀 Características Principales

- **Exploración de Pokémon**: Navega por una lista completa de Pokémon con detalles detallados
- **Sistema de Autenticación**: Login seguro con validación de formularios
- **Favoritos**: Guarda tus Pokémon favoritos para acceso rápido
- **Detalles Detallados**: Visualiza estadísticas, tipos y características de cada Pokémon
- **Diseño Responsivo**: Interfaz adaptada para iOS y Android
- **Navegación Intuitiva**: Sistema de navegación con tabs y stack navigation

## 📸 Capturas de Pantalla

### Pantalla de Inicio

![Pantalla de Inicio](https://raw.githubusercontent.com/[tu-usuario]/pokedex-mobile/main/assets/screenshots/home.png)
_Lista principal de Pokémon con diseño moderno_

### Detalles del Pokémon

![Detalles del Pokémon](https://raw.githubusercontent.com/[tu-usuario]/pokedex-mobile/main/assets/screenshots/pokemon-details.png)
_Vista detallada con estadísticas y características_

### Sistema de Favoritos

![Favoritos](https://raw.githubusercontent.com/[tu-usuario]/pokedex-mobile/main/assets/screenshots/favorites.png)
_Lista de Pokémon favoritos guardados_

### Perfil de Usuario

![Perfil](https://raw.githubusercontent.com/[tu-usuario]/pokedex-mobile/main/assets/screenshots/profile.png)
_Perfil de usuario con información personal_

### Login

![Login](https://raw.githubusercontent.com/[tu-usuario]/pokedex-mobile/main/assets/screenshots/login.png)
_Pantalla de inicio de sesión con validación_

## 🛠 Tecnologías Utilizadas

- **React Native**: Framework principal para desarrollo móvil
- **Expo**: Plataforma para desarrollo y despliegue
- **React Navigation**: Sistema de navegación
- **Formik & Yup**: Manejo y validación de formularios
- **AsyncStorage**: Almacenamiento local
- **React Native Vector Icons**: Iconografía
- **PokeAPI**: API para datos de Pokémon

## 📱 Arquitectura del Proyecto

```
src/
├── api/          # Llamadas a la API
├── components/   # Componentes reutilizables
│   ├── Auth/     # Componentes de autenticación
│   └── pokemonDetails/ # Componentes de detalles de Pokémon
├── context/      # Contextos de React (Auth, etc.)
├── hooks/        # Custom hooks
├── navigation/   # Configuración de navegación
├── screens/      # Pantallas principales
├── utils/        # Utilidades y constantes
└── assets/       # Recursos estáticos
```

## 🎨 Patrones de Diseño Implementados

### 1. Arquitectura de Componentes

- **Componentes Presentacionales**: Componentes UI puros
- **Componentes de Contenedor**: Manejan la lógica de negocio
- **Componentes Compuestos**: Combinación de componentes más pequeños

### 2. Gestión de Estado

- **Context API**: Para estado global (autenticación)
- **Hooks Personalizados**: Para lógica reutilizable
- **Estado Local**: Para UI y datos temporales

### 3. Patrones de Navegación

- **Stack Navigation**: Para flujos de navegación
- **Tab Navigation**: Para navegación principal
- **Navegación Anidada**: Combinación de stack y tabs

### 4. Patrones de Formularios

- **Formik**: Para manejo de formularios
- **Yup**: Para validación de esquemas
- **Manejo de Errores**: Validación en tiempo real

## 🔑 Funcionalidades Detalladas

### Autenticación

- Login con validación de formularios
- Persistencia de sesión
- Protección de rutas

### Exploración de Pokémon

- Lista paginada de Pokémon
- Búsqueda y filtrado
- Detalles completos de cada Pokémon

### Sistema de Favoritos

- Guardar Pokémon favoritos
- Persistencia local
- Acceso rápido a favoritos

### UI/UX

- Diseño moderno y responsive
- Animaciones suaves
- Feedback visual para acciones
- Temas basados en tipos de Pokémon

## 🚀 Instalación y Ejecución

1. Clona el repositorio:

```bash
git clone [url-del-repositorio]
```

2. Instala las dependencias:

```bash
yarn install
```

3. Inicia el proyecto:

```bash
yarn start
```

4. Ejecuta en iOS o Android:

```bash
yarn ios
# o
yarn android
```

## 📱 Requisitos del Sistema

- Node.js >= 14
- Yarn o npm
- Expo CLI
- Xcode (para iOS)
- Android Studio (para Android)

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, lee las guías de contribución antes de enviar un pull request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

[Jorge Arias] - Desarrollador Full Stack

## 🙏 Agradecimientos

- PokeAPI por proporcionar los datos de Pokémon
- La comunidad de React Native y Expo
- Todos los contribuidores del proyecto
