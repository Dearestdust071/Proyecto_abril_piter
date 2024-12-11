# Proyecto de Sistemas Distribuidos

Este repositorio contiene los diferentes módulos y servicios desarrollados como parte del proyecto de Sistemas Distribuidos. El proyecto incluye componentes desarrollados en Angular, Node.js, Laravel (PHP) y C#.

## Estructura del Proyecto

Este proyecto está dividido en varios subproyectos, cada uno con su propia configuración y dependencias.

- **DistribuidosAngular**: Frontend desarrollado en Angular.
- **DistribuidosNode2**: Backend desarrollado en Node.js.
- **DistribuidosPhp2**: Backend desarrollado en Laravel (PHP).
- **Distribuidos.Api**: Servicios adicionales desarrollados en C#.

## Inicialización de los Subproyectos

### 1. Inicializar DistribuidosAngular

1. Navega al directorio `DistribuidosAngular`:

    ```sh
    cd DistribuidosAngular
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

3. Inicia el servidor de desarrollo:

    ```sh
    ng serve
    ```

### 2. Inicializar DistribuidosNode2

1. Navega al directorio `DistribuidosNode2`:

    ```sh
    cd DistribuidosNode2
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

3. Inicia el servidor:

    ```sh
    npm start
    ```

### 3. Inicializar DistribuidosPhp2 (Laravel)

1. Navega al directorio `DistribuidosPhp2/DistribuidosLaravel`:

    ```sh
    cd DistribuidosPhp2/DistribuidosLaravel
    ```

2. Instala las dependencias con Composer:

    ```sh
    composer install
    ```

3. Copia el archivo `.env.example` a `.env` y configura tu base de datos:

    ```sh
    cp .env.example .env
    ```

4. Genera una nueva clave de aplicación:

    ```sh
    php artisan key:generate
    ```

5. Ejecuta las migraciones:

    ```sh
    php artisan migrate
    ```

6. Inicia el servidor de desarrollo:

    ```sh
    php artisan serve
    ```

### 4. Inicializar Distribuidos.Api (C#)

1. Navega al directorio `Distribuidos.Api`:

    ```sh
    cd csharp/Distribuidos.Api
    ```

2. Restaura las dependencias:

    ```sh
    dotnet restore
    ```

3. Compila y ejecuta la aplicación:

    ```sh
    dotnet run
    ```







Me voy a pegar un tiro y sera culpa de la miss Abril gracias por su atencion bonito dia <3
