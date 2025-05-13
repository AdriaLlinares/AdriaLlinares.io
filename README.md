# Este será el enlace a mi página web.

Estoy diseñando esta página web para M04UF1-Programació amb XML y que en un futuro puede llegar a ser mi portfolio.

[https://adriallinares.github.io/](https://adriallinares.github.io/)

## Explicación sobre los campos de formulario que hemos visto en clase.

A continuación tendremos una explicación sobre todos los campos de formulario que hemos visto en clase.

**1.** Este campo permite **ingresar texto libre**. Se utiliza para escribir datos como el **nombre** de una persona.

```html
<p><label for="campo-nombre">Nombre </label>
<input type="text" name="nombre" id="campo-nombre" /></p>
```

**2.** En el siguiente campo, está creado para **introducir contraseñas**, es como el campo anterior, solo que en este caso los caracteres **no se mostrarán**.

```html
<p>Pass <input type="password" name="pass" /></p>
```

**3.** El campo de fecha nos permite seleccionar **una fecha de un calendario**. Este tipo de formulario se utiliza para datos como la fecha de nacimiento.

```html
<p>Nacimiento <input type="date" name="date" /></p>
```

**4.** El campo de color abre una **paleta de colores** de la que el usuario podrá seleccionar uno. También tiene una herramienta que nos ***permite tomar referencia de cualquier color*** de la página llamada **pipeta** o **cuentagotas**.

```html
<p>Color <input type="color" name="color" /></p>
```

**5.** El siguiente campo nos permite ingresar un **número**, en este caso, la edad. Según el código, la edad ***mínima que podremos ingresar será 1 y la máxima 120, y el valor por defecto será 18.***

```html
<p>Edad <input type="number" name="edad" value="18" min="1" max="120" /></p>
```

**6.** Este campo es un campo de tipo **checkbox**. El usuario debe marcar las condiciones que indica el texto, **si no se aceptan, no se podrá continuar con el formulario**. Normalmente, se suele usar para el tema de ***términos y condiciones.***

```html
<p><input type="checkbox" name="subscribe" id="suscribe" /><label for="suscribe">Al no aceptar esta caja de texto no podras avanzar.</label></p>
```

**7.** Por último, el campo de botón de **envío**, es un botón que se usa para enviar los datos que se añaden al formulario una vez se completan todos los campos. Cuando el usuario hace clic en él, los datos se mandan ***a un servidor y se almacenan en una base de datos.***

```html
<p><input type="submit"/></p>
```

**8.** Este campo es una etiqueta que sirve para **redirecionarnos** a qualquier parte de **README.md**.

Este es un texto con una nota al pie.[^1]

[^1]: Esta es la explicación o referencia adicional de la nota.
