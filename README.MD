# 🔐 Generador de Contraseñas Seguras
# 🔐 Generador de Contraseñas Seguras

Proyecto desarrollado en Node.js para la generación de contraseñas seguras, orientado al uso de funcionarios o entornos organizacionales que requieran fortalecer sus políticas de seguridad.

---

## 📌 Información General

- **Nombre del proyecto:** Generador de Contraseñas Seguras  
- **Repositorio:** https://github.com/andrespayan19/generador_pass_node.git
- **Licencia:** MIT  
- **Tecnología principal:** Node.js  
- **Versión mínima requerida:** Node.js v16.0  

---

## ⚙️ Instalación

Antes de ejecutar el proyecto, asegúrate de tener instalado Node.js en tu equipo.

1. Clona el repositorio:
```bash
git clone https://github.com/andrespayan19/generador_pass_node.git
cd generador-pass-node
```

2. Instala las dependencias:
```bash
npm install
```

> ⚠️ Nota: Este paso es obligatorio debido al uso de la librería `chalk` para la visualización en consola.

---

## 🚀 Ejecución del Proyecto

Para iniciar el generador de contraseñas:

```bash
npm start
```

---

## 🧪 Pruebas de Seguridad

El proyecto incluye un script de validación para garantizar que no se repitan contraseñas generadas:

```bash
npm run test
```

---

## 🔧 Parámetros de Uso

El programa permite configurar la generación de contraseñas mediante los siguientes parámetros:

| Parámetro   | Tipo    | Descripción                                      | Valor por defecto | Rango / Opciones |
|------------|--------|--------------------------------------------------|------------------|------------------|
| `--longitud` | Número | Define la longitud de la contraseña              | 8                | Máx. 64          |
| `--simbolos` | Booleano | Incluye símbolos especiales en la contraseña   | true             | true / false     |
| `--numeros`  | Booleano | Incluye números en la contraseña              | true             | true / false     |

---

## 🧾 Ejemplo de Uso

```bash
npm start -- --longitud=12 --simbolos=false --numeros=true
```

**Salida esperada en consola:**
```
Tu nueva clave es: aB3dE8fG9hI1
```

> 💡 La salida se muestra en color verde brillante gracias a la librería `chalk`.

---

## 💾 Guardado de Contraseñas

Si deseas almacenar la contraseña generada en un archivo, puedes usar la bandera adicional:

```bash
--guardar
```

### Ejemplo:

```bash
npm start -- --longitud=12 --simbolos=false --numeros=true --guardar
```

Esto generará un archivo llamado:

```
mis_claves.txt
```

Donde se almacenará la contraseña generada.

---

## 📁 Estructura del Proyecto (Referencia)

```
generador-pass-node/
│── node_modules/
│── package.json
│── index.js
│── mis_claves.txt (se genera automáticamente)
```

---

## 🛡️ Consideraciones de Seguridad

- Evitar compartir el archivo `mis_claves.txt`.
- Utilizar longitudes de contraseña mayores a 12 caracteres para mayor seguridad.
- Activar símbolos y números siempre que sea posible.

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.

---

## 👨‍💻 Autor

Desarrollado por el equipo técnico.  
Documentación estructurada a partir de notas del líder técnico.

# Diagrama UML

@startuml
title Generador de Contraseñas Seguras - UML

actor Usuario

package "Proyecto Node.js" {

    class Index {
        +leerParametros()
        +generarPassword()
        +mostrarPassword()
        +guardarPassword()
    }

    class GeneradorPassword {
        -longitud : int
        -usarSimbolos : boolean
        -usarNumeros : boolean
        +crearPassword() : string
    }

    class Archivo {
        +guardarEnTXT(password)
    }

    class Consola {
        +mostrarMensaje()
    }

    class Chalk {
        +green(texto)
    }

    class FileSystem {
        +writeFile()
    }

}

Usuario --> Index : Ejecuta npm start

Index --> GeneradorPassword : Solicita contraseña
GeneradorPassword --> GeneradorPassword : Genera caracteres aleatorios

Index --> Consola : Mostrar contraseña
Consola --> Chalk : Aplicar color verde

Index --> Archivo : Guardar contraseña\n(si usa --guardar)
Archivo --> FileSystem : writeFile()

@enduml

