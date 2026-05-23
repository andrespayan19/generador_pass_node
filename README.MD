# 🔐 Generador de Contraseñas Seguras
![Arquitectura](https://camo.githubusercontent.com/b4ba68fb7704a954feb95308413562deb49e74feb076302abb9583785bc65774/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3138313731373f7374796c653d666c6174266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465)
![Arquitectura](https://camo.githubusercontent.com/b0a3f2227faaf3476bab224051b8d66bd533c564764fedba816ae7cb3439f654/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d61726b646f776e2d3030303030303f7374796c653d666c6174266c6f676f3d6d61726b646f776e266c6f676f436f6c6f723d7768697465)
![Arquitectura](https://camo.githubusercontent.com/605695c35c534419c80ebc82808f6ed63f0afd5e68b64a244b9c7d71d9002f64/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666c6174266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b)
![Arquitectura](https://camo.githubusercontent.com/5800b7f3ab010b92827a301febb492f7d897a7dbb7dbe97a7ab51d106b878a8b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3333393933333f7374796c653d666c6174266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465)
![Arquitectura](https://camo.githubusercontent.com/ba138b16fd81a1ec3a9a627218593e93332af4ca0ec9032873e470d839fec9d5/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f68656e726971756573656261737469616f2f6261646765733f7374796c653d666c617426636f6c6f723d323263353565)

Proyecto desarrollado en Node.js para la generación de contraseñas seguras, orientado al uso de funcionarios o entornos organizacionales que requieran fortalecer sus políticas de seguridad.

## 👨‍💻 Desarrollado por 
- **Kevin Andres Lopez Martinez**
- **Jonnier Romero**
- **Andres Felipe Payan G**
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

![arquitectura](https://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/andrespayan19/generador_pass_node/refs/heads/feature/docs/arquitectura.puml)



