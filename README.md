# Sistema de Gestión de Formatos para la FISEI - Documentación para el Desarrollador

Este archivo README.md contiene información esencial para los desarrolladores que trabajan en el sistema de gestión de formatos para la Facultad de Ingeniería en Sistemas Electrónica e Industrial (FISEI) de la Universidad Técnica de Ambato.

## Acerca del proyecto

El proyecto es un aplicativo web que permitira la gestion de documentos y formatos para la elaboracion
de documentos legales para la Universidad Tecnica de Ambato.

## Descripción

El sistema de gestión de formatos es una aplicación web desarrollada en React. Su objetivo es ayudar a gestionar los diferentes procesos académicos de la FISEI, permitiendo a estudiantes, docentes y secretarias acceder y actualizar los formatos según corresponda al periodo académico. En lugar de utilizar una base de datos tradicional, el sistema se integra con la API de Google Drive para almacenar y gestionar los formatos.

## Características

- Gestión de formatos académicos para la FISEI.
- Acceso y actualización de formatos para estudiantes, docentes y secretarias.
- Integración con la API de Google Drive para almacenamiento de formatos.
- Autenticación mediante Microsoft para iniciar sesión en el sistema.

## Repositorio del Proyecto

El código fuente del proyecto se encuentra alojado en [GitHub](https://github.com/FaridRuano/utaForms.git). Puedes acceder al repositorio para obtener más detalles y contribuir al desarrollo del sistema de gestión de formatos.

## Requisitos previos

Antes de instalar y ejecutar el sistema de gestión de formatos, asegúrate de tener instalado lo siguiente:

- Node.js (v18.16.0)
- npm (versión 9.5.1)

## Instalación

Sigue los pasos a continuación para instalar el sistema de gestión de formatos localmente:

1. Clona el repositorio en tu máquina local:
    - git clone https://github.com/FaridRuano/utaForms.git

2. Navega al directorio del proyecto:
    - cd path-del-proyecto/utaForms

3. Instala las dependencias necesarias:
    - npm install

4. Configuración de la API de Microsoft Graph y OneDrive:
   - Crea una aplicación en el Portal de registro de aplicaciones de Azure.
   - Obtén las credenciales de la aplicación.
   - Copia las credenciales en el archivo de configuración correspondiente.

5. Inicia la aplicación:
    - npm start

6. Si no se ha abierto ninguna ventana del navegador automáticamente abre tu navegador e ingresa `http://localhost:3000/` para acceder al sistema.

## Uso
Una vez que hayas instalado y configurado el sistema de gestión de formatos, podrás utilizar las siguientes funcionalidades:

- Inicia sesión con tu cuenta de Microsoft para acceder al sistema.
- Explora los diferentes formatos disponibles.
- Actualiza los formatos según corresponda al periodo académico.
- Los formatos se guardarán y gestionarán mediante la integración con la API de Microsoft Graph y OneDrive.

## Contribución

Si deseas contribuir al desarrollo del sistema de gestión de formatos, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios y haz commit de tus modificaciones (`git commit -m 'Agrega nueva funcionalidad'`).
4. Sube tus cambios a tu repositorio fork (`git push origin feature/nueva-funcionalidad`).
5. Abre una solicitud de extracción en el repositorio original.

Si no sabes lo que es un `fork`, es una copia exacta del repositorio en tu propia cuenta de GitHub. De esta manera tendrás una versión independiente del repositorio original en el que puedes trabajar y realizar cambios sin afectar el proyecto principal.

## Autores

Este proyecto fue desarrollado por:
- Farid Ruano
- Kevin Alvear
- Daniel Galarza
- Diego Cata
- Lenin Moreno