# Death Cab
> Documento de diseño de videojuego.
> Versión 2 – 3 de Noviembre, 2023.
> - Adrián Castellanos Ormeño.
> - Daniel Moreno Álvarez.
> - Jiale He.
> - Nicolás Besteiro Martín.
> - Paula Sierra Luque.

## 1. Ficha técnica
- Título: Death Cab.
- Género: Conducción, Aventura conversacional.
- Target: Público amplio.
- Rating: Pegi 16+.
- Plataforma: Navegador Web.
- Modos de juego: Un jugador.

## 2. Descripción
La Muerte no puede permitirse pagar el alquiler en el inframundo, y por ello conseguirá
trabajo como taxista. Cada día la radio informará de un crimen. El objetivo de la Muerte es
recoger gente por la ciudad ejerciendo su profesión. A medida que fluye la conversación con
el cliente, la Muerte tendrá que decidir si llevar a su cliente al infierno, al cielo o dejarlo vivir
dependiendo de la intuición del jugador y de la personalidad de los personajes, viendo si es
una posible víctima o culpable del crimen o tan solo un viandante.
El jugador tendrá que decidir el destino de cada pasajero para ser recompensado y con ello
perdurar en el juego.

## 3. Jugabilidad
### Cámara
En la fase de conducción, la cámara sería “Top Down” en el estilo de los juegos 2D de GTA.
Seguirá al taxi de modo que esté centrado.

### Mecánicas de conducción
El jugador conducirá un taxi desde una vista “Top Down” (cenital), mediante el cual podrá
interactuar con ciertos objetos del entorno (papeleras, farolas...) y en el que podrá recoger
gente, una vez que recoja a alguien se pasará a la parte de diálogo.
- El coche se moverá con las teclas “W” (acelerar) “A” (izquierda) “S” (marcha atrás)
“D” (derecha), cambiando su ángulo y movimiento en esa dirección. Rotará según la
dirección de la fuerza aplicada del vector u 8 direcciones (dependiendo de qué sea
más sencillo).
- El coche se podrá frenar con la tecla SPACE.
En el mapa se encuentran diferentes objetos con los que el taxi puede chocar: Edificios,
Cubos de basura, Farolas, Semáforos, Coches...Que el jugador deberá sortear para seguir
avanzando por la carretera.

### Mecánicas de diálogo
Una vez entrado en el minijuego conversacional, comenzará la conversación taxista-cliente.
Aquí es donde aparece la temática de las personalidades, las conversaciones serán
diferentes según el personaje al que se recoja. Se tendrá en cuenta lo malo y lo bueno de
cada una y si encajan con la descripción que da la radio todos los días. A partir de ahí
construiremos los diálogos. Irán apareciendo y desapareciendo los bocadillos de
conversación a medida que se elija la contestación. No se podrá volver atrás en la
conversación para recordar qué se ha dicho.
Cada vez que el cliente cuente algo, aparecerán dos recuadros con las opciones para
contestarle. Según lo que el jugador elija, la conversación fluirá de una manera u otra,
especificada en el guión del juego. Para elegir la opción, se usará el ratón y el click
izquierdo. (IA?)

### Sistema monetario
La moneda principal del juego son años de vida. Para ganar años de vida, la Muerte tendrá
que llevar a un cliente al infierno o al cielo. En este apartado hay que describir las distintas
posibilidades en las que se podría perder dinero.
- Si dejas vivir a un cliente y es alguien que no tenía nada que ver con un crimen, no
se ganará dinero pero no habrá penalización.
- Si aciertas, ganarás los años de edad que tenga la persona. Acertar conlleva: +25.
  - Llevar a un culpable al infierno.
  - Llevar a una víctima al cielo.
De esta forma tendremos que haber llevado como mínimo a 4 personas.
- Si fallas, habrá penalizaciones, como:
  - Llevar a un culpable al cielo. Penalización de -15 (por ejemplo).
  - Llevar a una víctima al infierno. Penalización de -15 (por ejemplo)
  - Si era culpable y se le deja vivo. Habrá consecuencias al día siguiente, ya
que el culpable seguirá matando (enviando más trabajo al cielo/infierno) y por
ello penalización de -10 por gastos de gestión. (por ejemplo)
○ Si era víctima y se le deja vivo. Habrá consecuencias al día siguiente, ya que
por su trauma, se suicidará (enviando más trabajo al cielo/infierno) y por ello
penalización de -5 por gastos de gestión. (por ejemplo)

El precio del alquiler será de 100 años de vida. Se pagará cada día con el dinero acumulado
o con las ganancias.

### Salud del taxi (extra si da tiempo)
El taxi conducido, podrá estrellarse con elementos de la carretera, especificados en el
contenido del juego. Si se estrella, perderá puntos de salud. Por lo que habrá que conducir
el taxi a una zona de reparación.
El juego empezará con el 100% de salud. Cada vez que se estrelle, perderá 25% de salud.
Si se llega al 0%, se perderá el juego, teniendo que volver a empezar desde el principio.
En las zonas de reparación habrá que pagar para reparar el taxi. Costará 10 años de vida
(por ejemplo).

## 4. Dinámica
### Diseño de niveles: el mapa.
Es una zona del pueblo de Alcázar de San Juan donde conduciremos buscando clientes. Se
podrán distinguir las carreteras fácilmente. Habrá zonas de colisión (edificadas), elementos
que exploten (farolas, postes...). Cada nivel se distinguirá por las zonas de aparición de
clientes, pero siempre será el mismo mapa.
He aquí el primer boceto del mapa:

![Mapa](/assets/Mapas/mapa.png)

### Diseño de niveles: los crímenes.
Cada nivel (o cada día) se distingue por un crimen. (Se adjuntará un pdf cuando estén
acabados).
1. Un robo.
2. Caso de violencia de género.
3. Creación de una plaga de chinches.
4. Crimen falso.
5. Asesino en serie.
En el guión se encontrará una descripción detallada de cada crimen, para ayudar a
desarrollar cada nivel, donde se informa de quién es el culpable y la víctima, o si hay alguna
persona no implicada. Se enseña también el guión de la radio, con datos que sí que
conocerá el jugador. En cada nivel se hablará con 3 clientes, por ello hay preguntas y
respuestas predeterminadas para cada uno, enfocadas en sus personalidades. El jugador
elige entre 4 preguntas para averiguar si el cliente es una víctima, un culpable, o alguien
que no está implicado.

### Descripción de partida típica
1. Presentación del día. Se muestra en qué día estamos (habrá 5 días), y comienzan
las noticias en la radio. Se explica un crimen que ha sucedido, qué número de
personas hay implicadas y una breve descripción de cada una (sobre todo hablando
de su personalidad).
2. Conducción del taxi.
Pasamos la vista desde arriba de la ciudad. Se buscan posibles clientes por el
mapa. Habrá que pararse en un rango cerca del cliente para poder recogerlo y
continuar a la parte conversacional. Podremos colisionar con elementos de la ciudad
(farolas y postes).
3. Cuando se suba un cliente, entraremos en el minijuego conversacional. En él el
jugador tendrá que juzgar si su cliente es un posible culpable o víctima del crimen a
través del diálogo y lo que conoce sobre el crimen que ha contado la radio. Al final
de la conversación, el jugador tendrá que decidir si el cliente es una víctima, un
culpable o nada. Así acabará en el cielo, infierno o se le dejará vivir,
respectivamente.
4. Volveremos a la conducción en búsqueda de otros clientes. Se repetirán los pasos 2,
3 y 4 hasta pasar el número definido de personas al principio del día.
5. Al final de cada día, se nos presentará el resumen del día. En este el jugador
conocerá las ganancias que ha obtenido, pérdidas, y si puede o no pasar al
siguiente día (si podemos pagar el alquiler).
  5.1. En el caso de que sea el quinto y último día, la Muerte se cansará de las
aburridas personalidades de la gente del día a día y por ello, dimitirá para
buscarse otro trabajo. Se mostrarán los créditos y se habrá superado el
juego.
  5.2. En el caso de no poder pagar el alquiler, la Muerte será desterrada del
inframundo, y por ende, no se habrá superado el juego. Se tendrá que jugar
de nuevo, desde el día 1.

## 5. Estética
### HUD
(Provisional, la localización de los diferentes elementos puede variar dependiendo
de las necesidades que se tengan)

![HUDConducción](/assets/Imagenes/HUDConduccion.jpg)

Al principio de cada día se indicará el día en el que va a empezar (día 1, día 2...)
En la parte de conducción se mostrarán el número de almas que tiene el jugador.

![HUDDialogo](/assets/Imagenes/HUDDialogo.png)

## 6. Contenido
### Personajes
Las personalidades de los clientes estarán basadas en los tipos del indicador Myers-Briggs
o inventario tipológico de Myers-Briggs, (también conocido como MBTI), un cuestionario
autorreportado que evalúa cómo las personas perciben el entorno y toman decisiones.
Nuestras interacciones con estos estarán muy marcadas con la personalidad de los clientes
quienes se comportan de cierta forma dependiendo de su tipo de personalidad. Habrá
clientes basados en cada uno de los cuatro grupos principales de personalidad
(representado por colores) y debido a la mecánica de personalidades, alguno de los clientes
malos serán mucho más inesperados ya que algunas personalidades son naturalmente
relacionadas con gente buena.

| Personaje | Descripción |
|-------------|-------------|
| La Muerte   | Parado y con apenas dinero para pagar el alquiler del mes, este coge un trabajo como taxista para sobrevivir un poco más. Es el protagonista de nuestro juego, y el único personaje jugable. Tendrá la habilidad de conducir y de decidir quien vive y quien muere.   |
| Cliente Centinela   | Son cooperativos, prácticos y fundamentados. Se sienten cómodos con quienes son y se enorgullecen de su buen carácter y su competencia. Estos tipos de personalidad buscan orden, seguridad y estabilidad. Trabajan duro y aspiran a no defraudar a nadie, y esperan que otras personas también adopten esta misma ética.   |
| Cliente Analista   | Conocidos por su amor a la racionalidad, tomando decisiones con la cabeza. Caracterizados por idear estrategias creativas y por la motivación para explorar las cosas. Corren el riesgo de ser superados por aquellos que simplemente se sientan y hacen el trabajo. Además de ser lobos solitarios sin preocuparse por hacer amigos.   |
| Cliente Diplomático   | Se preocupan por ayudar y conectarse con los demás. Priorizan ser amables y generosos y, en general, prefieren cooperar que competir. Son sensibles a los sentimientos de otras personas y quieren empujar a las personas que los rodean en direcciones positivas. Sin embargo, si no se controla, este rasgo de personalidad puede desencadenar superioridad moral o determinación.   |
| Cliente Explorador   | Tienden a ser autosuficientes y de pensamiento rápido. Viven de manejar situaciones inciertas. Su flexibilidad les ayuda a adaptarse al momento. Generalmente prefieren la trabajabilidad y la utilidad a la perfección. Sin embargo no les gusta la monotonía y pueden desviarse de sus obligaciones para probar cosas nuevas.   |

### Elementos del minijuego de conducción
En el minijuego de conducción, nos encontraremos distintos elementos repartidos por la ciudad que tendrán físicas propias.
| Nombre del elemento | Utilidad | Descripción |
|-------------|-------------|-------------|
| Carreteras   | Zona por donde será posible la conducción.   | Carriles de color gris oscuro, con líneas blancas que lo delimitan.   |
| Aceras   | Zona donde aparecerán los clientes.   | De un color más claro que la carretera para que sea distinguible. Cuando haya un cliente parado en la acera, aparecerá un círculo, donde tendremos que parar el taxi para que se suba.   |
| Edificios   | Zona no transitable delimitada por un colisionador que no se podrá atravesar   | Edificios vistos desde arriba.   |
| Obstáculos   | Obstáculo en la carretera con el que el taxi podrá colisionar, y que producirá una fuerza opuesta a la dirección del taxi. Si se colisiona con alguno, explota y causará daños al taxi. Son farolas, postes, cubos de basura, semáforos y otros coches.   | De distintos colores.   |

### Diálogos
Al ser una aventura conversacional, destacarán los diálogos entre la Muerte y sus clientes.
Se adjunta un enlace al documento con el guión del juego. (cuando esté en pdf pondremos
el enlace bueno)
En el juego distinguiremos dos tipos de conversaciones.
- Se definirán algunas preguntas y respuestas predeterminadas, que se irán
mezclando para que surja una conversación con sentido.
- Diálogos acorde al crimen del día, irán contando una historia a medida que la
Muerte pregunte.

## 7. Referencias
Para el diseño y desarrollo de Death Cab, se han tomado los siguientes juegos como
inspiración y de referencia:
- Papers Please. El jugador toma la decisión, arriesgándose a perder dinero, de dejar
pasar o no a un viajero.
- Crazy Taxi. SEGA. La recogida de los clientes y la caótica conducción del juego.
- Grand Theft Auto 2. Rockstar Games. El caos de la conducción, la conducción en la
ciudad, la vida desde arriba.
- Phoenix Wright: Ace Attorney. Capcom. Interrogaciones a los clientes para juzgar si
es víctima o culpable.
