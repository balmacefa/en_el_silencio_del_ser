// Catálogo de Asanas — investigación de referencia:
// yogajournal.com, yogabasics.com, insideyoga.org, myyogateacher.com,
// tummee.com, Wikipedia (Garudasana) y cymbiotika.com/blogs/health-hub
// (origen del nombre de las asanas en animales y naturaleza).

export const categories = [
  { id: 'animal', label: 'Animales', emoji: '🐾', tone: 'amber' },
  { id: 'naturaleza', label: 'Naturaleza', emoji: '🌿', tone: 'teal' },
  { id: 'geometria', label: 'Geometría', emoji: '📐', tone: 'indigo' },
];

export const asanas = [
  {
    slug: 'tadasana',
    sanskrit: 'Tadasana',
    popular: 'Postura de la Montaña',
    tags: ['naturaleza', 'geometria'],
    shape: 'Línea vertical',
    accent: 'teal',
    symbolism:
      'Tada significa "montaña" en sánscrito. Es la base de todas las posturas de pie: un cuerpo tan quieto, firme y erguido como una montaña, con los pies como cimiento y la coronilla apuntando al cielo.',
    benefits: ['Mejora la postura y la conciencia corporal', 'Fortalece pies, piernas y core', 'Calma la mente antes de una secuencia'],
    steps: {
      entrada: 'De pie, junta los pies o sepáralos al ancho de la cadera. Reparte el peso por igual entre los cuatro puntos de cada pie y deja caer los brazos a los costados.',
      mantenimiento: 'Activa los muslos, alarga la columna, abre el pecho y relaja los hombros lejos de las orejas. Respira 5–8 ciclos, imaginando un hilo que tira suavemente de la coronilla hacia el cielo.',
      salida: 'Suelta la activación con una exhalación, junta las manos frente al corazón en Anjali Mudra y cierra los ojos un instante antes de continuar.',
    },
    figures: {
      entrada: {
        accent: 'teal',
        head: [50, 15, 6],
        lines: [[50, 21, 50, 54], [50, 24, 42, 58], [50, 24, 58, 58], [50, 54, 46, 95], [50, 54, 54, 95]],
        joints: [[47, 76], [53, 76]],
      },
      mantenimiento: {
        accent: 'teal',
        head: [50, 13, 6],
        lines: [[50, 19, 50, 55], [50, 22, 40, 60], [50, 22, 60, 60], [50, 55, 47, 97], [50, 55, 53, 97]],
        joints: [[40, 60], [60, 60]],
      },
      salida: {
        accent: 'teal',
        head: [50, 15, 6],
        lines: [[50, 21, 50, 55], [50, 25, 50, 42], [50, 25, 50, 42], [50, 55, 47, 96], [50, 55, 53, 96]],
        joints: [[50, 42]],
      },
    },
  },
  {
    slug: 'vrksasana',
    sanskrit: 'Vrksasana',
    popular: 'Postura del Árbol',
    tags: ['naturaleza', 'geometria'],
    shape: 'Línea + triángulo',
    accent: 'teal',
    symbolism:
      'Vrksa significa "árbol". La postura imita el equilibrio silencioso de un árbol: raíces firmes en un solo pie mientras el resto del cuerpo crece hacia arriba y se mece con la respiración, sin perder el centro.',
    benefits: ['Desarrolla equilibrio y concentración', 'Fortalece tobillos y piernas', 'Abre las caderas'],
    steps: {
      entrada: 'Desde Tadasana, lleva el peso a una pierna y apoya la planta del pie contrario en el tobillo o la pantorrilla (nunca sobre la rodilla). Fija la mirada en un punto quieto.',
      mantenimiento: 'Presiona el pie flexionado contra la pierna de apoyo y esta contra el pie por igual. Eleva los brazos y junta las palmas sobre la cabeza, o llévalas al corazón. Mantén 5–10 respiraciones.',
      salida: 'Exhala, baja los brazos con control y libera el pie de vuelta al suelo despacio, regresando a Tadasana antes de repetir del otro lado.',
    },
    figures: {
      entrada: {
        accent: 'teal',
        head: [50, 14, 6],
        lines: [[50, 21, 50, 54], [50, 24, 42, 58], [50, 24, 58, 58], [50, 54, 47, 96], [50, 54, 62, 65], [62, 65, 51, 72]],
        joints: [[62, 65]],
      },
      mantenimiento: {
        accent: 'teal',
        head: [50, 12, 6],
        lines: [[50, 19, 50, 54], [50, 22, 46, 8], [50, 22, 54, 8], [50, 54, 47, 96], [50, 54, 66, 58], [66, 58, 49, 60]],
        joints: [[50, 8], [66, 58]],
      },
      salida: {
        accent: 'teal',
        head: [50, 13, 6],
        lines: [[50, 20, 50, 54], [50, 23, 42, 45], [50, 23, 58, 45], [50, 54, 47, 96], [50, 54, 60, 68], [60, 68, 50, 80]],
        joints: [[60, 68]],
      },
    },
  },
  {
    slug: 'bhujangasana',
    sanskrit: 'Bhujangasana',
    popular: 'Postura de la Cobra',
    tags: ['animal', 'geometria'],
    shape: 'Arco',
    accent: 'amber',
    symbolism:
      'Bhujanga significa "serpiente" o "cobra". La postura evoca a una cobra alzando la cabeza y el pecho del suelo, lista y alerta: un símbolo de renovación y energía ascendente en la columna.',
    benefits: ['Fortalece la espalda y los brazos', 'Abre el pecho y los hombros', 'Estimula el abdomen y mejora la digestión'],
    steps: {
      entrada: 'Recuéstate boca abajo con las piernas extendidas y el empeine en el suelo. Desliza las manos bajo los hombros con los codos pegados a las costillas y la frente apoyada.',
      mantenimiento: 'Inhala y presiona las manos para levantar cabeza, cuello y pecho, sin despegar el pubis del suelo. Lleva los hombros lejos de las orejas: es una elevación del pecho, no un pellizco lumbar. Sostén 3–5 respiraciones.',
      salida: 'Exhala y baja el torso lentamente hasta apoyar la frente, vértebra por vértebra, y descansa un momento con la cabeza girada hacia un lado.',
    },
    figures: {
      entrada: {
        accent: 'amber',
        head: [26, 88, 5],
        lines: [[32, 87, 64, 88], [34, 88, 29, 79], [64, 88, 97, 88]],
        joints: [[29, 79]],
      },
      mantenimiento: {
        accent: 'amber',
        head: [28, 58, 6],
        lines: [[34, 64, 64, 85], [37, 76, 32, 86], [64, 85, 97, 87]],
        joints: [[32, 86]],
      },
      salida: {
        accent: 'amber',
        head: [24, 80, 5],
        lines: [[30, 82, 64, 87], [32, 84, 29, 88], [64, 87, 97, 88]],
        joints: [[29, 88]],
      },
    },
  },
  {
    slug: 'adho-mukha-svanasana',
    sanskrit: 'Adho Mukha Svanasana',
    popular: 'Perro Boca Abajo',
    tags: ['animal', 'geometria'],
    shape: 'Triángulo invertido',
    accent: 'amber',
    symbolism:
      'Adho mukha svana significa literalmente "perro con el hocico hacia abajo": la postura reproduce el estiramiento instintivo que hacen los perros al despertar, alargando toda la espalda y los talones hacia el suelo.',
    benefits: ['Estira isquiotibiales, pantorrillas y columna', 'Fortalece brazos y hombros', 'Alivia la tensión y calma el sistema nervioso'],
    steps: {
      entrada: 'Desde cuatro apoyos, con manos bajo hombros y rodillas bajo caderas, mete los dedos de los pies y, al exhalar, comienza a levantar las rodillas del suelo.',
      mantenimiento: 'Extiende las piernas y empuja la pelvis hacia arriba y atrás, formando una V invertida. Presiona ambas manos contra el suelo, relaja la cabeza entre los brazos y pedalea suavemente los talones. Sostén 5–8 respiraciones.',
      salida: 'Dobla las rodillas al exhalar y baja con control hacia la postura del niño, o da un paso adelante entre las manos para incorporarte.',
    },
    figures: {
      entrada: {
        accent: 'amber',
        head: [66, 58, 5],
        lines: [[60, 56, 36, 58], [60, 58, 62, 84], [36, 58, 36, 84], [36, 84, 42, 88]],
        joints: [[36, 84]],
      },
      mantenimiento: {
        accent: 'amber',
        head: [66, 66, 5],
        lines: [[60, 55, 45, 38], [60, 55, 80, 88], [45, 38, 15, 88]],
        joints: [[45, 38]],
      },
      salida: {
        accent: 'amber',
        head: [66, 60, 5],
        lines: [[58, 56, 38, 60], [58, 58, 64, 82], [38, 60, 38, 80], [38, 80, 46, 86]],
        joints: [[38, 80]],
      },
    },
  },
  {
    slug: 'balasana',
    sanskrit: 'Balasana',
    popular: 'Postura del Niño',
    tags: ['naturaleza'],
    shape: 'Espiral / semilla',
    accent: 'teal',
    symbolism:
      'Bala significa "niño". Es una postura de repliegue: el cuerpo se enrosca sobre sí mismo como una semilla dormida bajo la tierra, un refugio para descansar antes de volver a crecer.',
    benefits: ['Relaja la espalda baja y los hombros', 'Calma el sistema nervioso', 'Contrapostura de descanso entre asanas'],
    steps: {
      entrada: 'Desde cuatro apoyos, junta los dedos gordos de los pies y separa las rodillas al ancho del mat. Comienza a llevar las caderas hacia los talones.',
      mantenimiento: 'Estira el torso hacia adelante y apoya la frente en el suelo, con los brazos extendidos frente a ti o relajados junto al cuerpo. Respira lento y profundo hacia la espalda baja durante el tiempo que necesites.',
      salida: 'Presiona las manos en el suelo y, al inhalar, enrolla la columna vértebra por vértebra hasta sentarte sobre los talones.',
    },
    figures: {
      entrada: {
        accent: 'teal',
        head: [62, 62, 5],
        lines: [[56, 58, 40, 74], [56, 60, 70, 85], [40, 74, 40, 86], [40, 86, 50, 90]],
        joints: [[40, 86]],
      },
      mantenimiento: {
        accent: 'teal',
        head: [70, 82, 5],
        lines: [[60, 70, 44, 84], [60, 72, 82, 88], [44, 84, 44, 90], [44, 90, 50, 92]],
        joints: [[70, 82]],
      },
      salida: {
        accent: 'teal',
        head: [64, 66, 5],
        lines: [[56, 60, 42, 78], [56, 62, 68, 82], [42, 78, 42, 88], [42, 88, 50, 90]],
        joints: [[42, 78]],
      },
    },
  },
  {
    slug: 'marjaryasana-bitilasana',
    sanskrit: 'Marjaryasana–Bitilasana',
    popular: 'Gato–Vaca',
    tags: ['animal', 'geometria'],
    shape: 'Arco',
    accent: 'amber',
    symbolism:
      'Marjari es "gato" y bitila es "vaca". El flujo combina el lomo redondeado y defensivo del gato con el vientre relajado y la mirada elevada de la vaca: dos gestos animales opuestos unidos por la respiración.',
    benefits: ['Moviliza la columna vertebra por vértebra', 'Libera tensión de espalda y cuello', 'Sincroniza respiración y movimiento'],
    steps: {
      entrada: 'Ponte en cuatro apoyos con las manos bajo los hombros y las rodillas bajo las caderas, columna neutra y mirada al suelo.',
      mantenimiento: 'Al exhalar (Gato), redondea la espalda, mete el mentón y el coxis. Al inhalar (Vaca), hunde el vientre, abre el pecho y eleva la mirada y el coxis. Repite el flujo 6–10 rondas siguiendo tu respiración.',
      salida: 'Termina en columna neutra, exhala y lleva las caderas hacia los talones para descansar en Balasana.',
    },
    figures: {
      entrada: {
        accent: 'amber',
        head: [68, 55, 5],
        lines: [[60, 52, 36, 56], [60, 54, 62, 82], [36, 56, 36, 84], [36, 84, 42, 88]],
        joints: [[36, 84]],
      },
      mantenimiento: {
        accent: 'amber',
        head: [66, 66, 5],
        lines: [[60, 50, 48, 42], [48, 42, 36, 52], [60, 52, 62, 82], [36, 52, 36, 84], [36, 84, 42, 88]],
        joints: [[48, 42]],
      },
      salida: {
        accent: 'amber',
        head: [70, 48, 5],
        lines: [[60, 56, 48, 62], [48, 62, 36, 58], [60, 58, 62, 84], [36, 58, 36, 86], [36, 86, 42, 90]],
        joints: [[48, 62]],
      },
    },
  },
  {
    slug: 'trikonasana',
    sanskrit: 'Utthita Trikonasana',
    popular: 'Postura del Triángulo Extendido',
    tags: ['geometria'],
    shape: 'Triángulo',
    accent: 'indigo',
    symbolism:
      'Trikona significa literalmente "tres ángulos". Es una de las asanas cuyo nombre no proviene de un ser vivo sino de la geometría pura: piernas, torso y brazo forman líneas rectas que dibujan un triángulo en el espacio.',
    benefits: ['Estira piernas, ingles y costados del torso', 'Fortalece rodillas y tobillos', 'Mejora el equilibrio y abre el pecho'],
    steps: {
      entrada: 'Separa los pies un metro aproximadamente, gira el pie derecho 90° y el izquierdo ligeramente hacia adentro. Extiende los brazos en cruz, a la altura de los hombros.',
      mantenimiento: 'Al exhalar, inclina el torso hacia el pie derecho desde la cadera, no desde la cintura. Apoya la mano derecha en la espinilla, el tobillo o el suelo, y extiende la mano izquierda hacia el techo. Mira hacia arriba y sostén 5 respiraciones.',
      salida: 'Inhala, presiona los pies contra el suelo y usa el core para regresar el torso a vertical con los brazos aún en cruz, antes de repetir del otro lado.',
    },
    figures: {
      entrada: {
        accent: 'indigo',
        head: [50, 20, 6],
        lines: [[50, 26, 50, 58], [50, 30, 20, 30], [50, 30, 80, 30], [50, 58, 25, 96], [50, 58, 75, 96]],
        joints: [],
      },
      mantenimiento: {
        accent: 'indigo',
        head: [26, 55, 6],
        lines: [[50, 58, 28, 50], [28, 50, 20, 80], [28, 50, 60, 20], [50, 58, 25, 96], [50, 58, 75, 96]],
        joints: [[28, 50]],
      },
      salida: {
        accent: 'indigo',
        head: [50, 22, 6],
        lines: [[50, 28, 50, 58], [50, 32, 25, 40], [50, 32, 75, 40], [50, 58, 25, 96], [50, 58, 75, 96]],
        joints: [],
      },
    },
  },
  {
    slug: 'setu-bandhasana',
    sanskrit: 'Setu Bandhasana',
    popular: 'Postura del Puente',
    tags: ['naturaleza', 'geometria'],
    shape: 'Arco',
    accent: 'teal',
    symbolism:
      'Setu Bandha significa "construcción de un puente". El cuerpo se eleva desde el suelo formando un arco firme, como un puente que conecta dos orillas, apoyado en los pies y sostenido por la fuerza de las piernas y los glúteos.',
    benefits: ['Fortalece glúteos, piernas y espalda', 'Abre el pecho y los hombros', 'Contrapostura suave para la columna'],
    steps: {
      entrada: 'Recuéstate boca arriba, dobla las rodillas y apoya los pies en el suelo cerca de los glúteos, separados al ancho de la cadera. Brazos junto al cuerpo, palmas hacia abajo.',
      mantenimiento: 'Al inhalar, presiona los pies y los brazos contra el suelo para elevar las caderas. Entrelaza las manos bajo la espalda si es cómodo y mantén los muslos paralelos. Sostén 5–8 respiraciones.',
      salida: 'Exhala y baja la columna hacia el suelo lentamente, vértebra por vértebra, desde la parte alta de la espalda hasta el coxis.',
    },
    figures: {
      entrada: {
        accent: 'teal',
        head: [16, 88, 5],
        lines: [[22, 86, 52, 86], [22, 86, 20, 72], [52, 86, 66, 70], [66, 70, 66, 88]],
        joints: [[66, 70]],
      },
      mantenimiento: {
        accent: 'teal',
        head: [16, 88, 5],
        lines: [[22, 86, 55, 60], [22, 86, 18, 74], [55, 60, 68, 68], [68, 68, 70, 88]],
        joints: [[55, 60]],
      },
      salida: {
        accent: 'teal',
        head: [16, 88, 5],
        lines: [[22, 86, 54, 78], [22, 86, 19, 73], [54, 78, 67, 69], [67, 69, 68, 88]],
        joints: [[54, 78]],
      },
    },
  },
  {
    slug: 'garudasana',
    sanskrit: 'Garudasana',
    popular: 'Postura del Águila',
    tags: ['animal', 'geometria'],
    shape: 'Espiral',
    accent: 'amber',
    symbolism:
      'Garuda es el ave mítica montura del dios Vishnú, considerada el rey de las aves. Brazos y piernas se envuelven entre sí como alas plegadas, exigiendo el mismo enfoque agudo y equilibrado de un águila en vuelo.',
    benefits: ['Mejora el equilibrio y la concentración', 'Estira hombros, espalda alta y caderas', 'Fortalece tobillos y piernas'],
    steps: {
      entrada: 'De pie, flexiona ligeramente las rodillas, cruza el muslo izquierdo sobre el derecho y engancha el pie izquierdo detrás de la pantorrilla si llegas. Cruza los codos, izquierdo sobre derecho, frente al pecho.',
      mantenimiento: 'Une las palmas o los dorsos de las manos, eleva los codos y baja las caderas ligeramente, como si te sentaras. Mira hacia adelante y por encima de los antebrazos, sosteniendo 3–5 respiraciones.',
      salida: 'Desenrosca brazos y piernas con cuidado, sacude suavemente las extremidades y vuelve a Tadasana antes de repetir del otro lado.',
    },
    figures: {
      entrada: {
        accent: 'amber',
        head: [50, 16, 6],
        lines: [[50, 22, 50, 55], [50, 26, 44, 40], [50, 26, 56, 40], [50, 55, 46, 96], [50, 55, 56, 70]],
        joints: [[56, 70]],
      },
      mantenimiento: {
        accent: 'amber',
        head: [50, 14, 6],
        lines: [[50, 20, 50, 54], [50, 24, 58, 34], [58, 34, 50, 44], [50, 24, 42, 34], [42, 34, 50, 44], [50, 54, 47, 96], [50, 54, 58, 64], [58, 64, 48, 72]],
        joints: [[50, 44], [58, 64]],
      },
      salida: {
        accent: 'amber',
        head: [50, 16, 6],
        lines: [[50, 22, 50, 55], [50, 26, 42, 44], [50, 26, 58, 44], [50, 55, 47, 96], [50, 55, 55, 74]],
        joints: [[55, 74]],
      },
    },
  },
  {
    slug: 'ustrasana',
    sanskrit: 'Ustrasana',
    popular: 'Postura del Camello',
    tags: ['animal', 'geometria'],
    shape: 'Arco',
    accent: 'amber',
    symbolism:
      'Ustra significa "camello". La curva profunda del pecho hacia atrás y el cuello recuerda la giba y el andar erguido del camello, capaz de sostener grandes cargas atravesando el desierto sin perder su centro.',
    benefits: ['Abre el pecho, los hombros y los flexores de cadera', 'Fortalece la espalda', 'Contrarresta horas de estar sentado'],
    steps: {
      entrada: 'Arrodíllate con las caderas apiladas sobre las rodillas, separadas al ancho de la cadera. Apoya las manos en la parte baja de la espalda, dedos hacia abajo, y presiona el pubis hacia adelante.',
      mantenimiento: 'Inhala y arquea el pecho hacia el techo, llevando las manos a los talones si es accesible, sin dejar caer el peso hacia atrás. Deja que la cabeza se relaje hacia atrás solo si el cuello está cómodo. Sostén 3–5 respiraciones.',
      salida: 'Lleva una mano a la vez de vuelta a la espalda baja y, guiando con el pecho, incorpórate lentamente a vertical antes de descansar en postura del niño.',
    },
    figures: {
      entrada: {
        accent: 'amber',
        head: [54, 30, 6],
        lines: [[52, 36, 50, 66], [52, 40, 58, 58], [50, 66, 50, 88], [50, 88, 60, 90]],
        joints: [[58, 58]],
      },
      mantenimiento: {
        accent: 'amber',
        head: [70, 52, 6],
        lines: [[50, 66, 58, 42], [58, 46, 66, 72], [50, 66, 50, 88], [50, 88, 60, 90]],
        joints: [[66, 72]],
      },
      salida: {
        accent: 'amber',
        head: [56, 32, 6],
        lines: [[52, 38, 50, 66], [52, 42, 60, 60], [50, 66, 50, 88], [50, 88, 60, 90]],
        joints: [[60, 60]],
      },
    },
  },
  {
    slug: 'bakasana',
    sanskrit: 'Bakasana',
    popular: 'Postura del Cuervo',
    tags: ['animal', 'geometria'],
    shape: 'Triángulo compacto',
    accent: 'amber',
    symbolism:
      'Baka significa "grulla" o "cuervo" según la tradición. El cuerpo se compacta sobre las manos como un ave posada en una rama delgada: ligera, equilibrada y enfocada en un único punto de apoyo.',
    benefits: ['Fortalece brazos, muñecas y core', 'Desarrolla equilibrio y enfoque mental', 'Introduce a los balanceos sobre brazos'],
    steps: {
      entrada: 'En cuclillas, planta las manos en el suelo al ancho de los hombros, dedos bien abiertos. Lleva las rodillas hacia la parte alta de los brazos (triceps), cerca de las axilas.',
      mantenimiento: 'Inclina el peso hacia adelante sobre las manos, redondea la espalda y despega los pies del suelo uno a la vez, apretando las rodillas contra los brazos. Mira ligeramente hacia adelante y sostén 3–5 respiraciones.',
      salida: 'Exhala y baja los pies de vuelta al suelo con control, o retrocede hacia una zancada si prefieres una salida más suave.',
    },
    figures: {
      entrada: {
        accent: 'amber',
        head: [70, 66, 5],
        lines: [[64, 60, 50, 66], [64, 62, 60, 86], [50, 66, 56, 60], [56, 60, 48, 80]],
        joints: [[56, 60]],
      },
      mantenimiento: {
        accent: 'amber',
        head: [66, 58, 5],
        lines: [[60, 52, 48, 60], [60, 54, 58, 82], [48, 60, 54, 54], [54, 54, 38, 50]],
        joints: [[54, 54]],
      },
      salida: {
        accent: 'amber',
        head: [70, 64, 5],
        lines: [[64, 58, 50, 64], [64, 60, 60, 84], [50, 64, 56, 58], [56, 58, 44, 74]],
        joints: [[56, 58]],
      },
    },
  },
  {
    slug: 'padmasana',
    sanskrit: 'Padmasana',
    popular: 'Postura del Loto',
    tags: ['naturaleza', 'geometria'],
    shape: 'Círculo / mandala',
    accent: 'teal',
    symbolism:
      'Padma significa "loto", la flor que crece desde el barro del fondo de un estanque y se abre inmaculada hacia la luz. La postura simboliza el florecimiento de la conciencia a pesar de las condiciones de las que surge.',
    benefits: ['Estira caderas, rodillas y tobillos', 'Favorece una columna erguida para meditar', 'Calma la mente y estabiliza la respiración'],
    steps: {
      entrada: 'Siéntate con las piernas extendidas. Dobla una rodilla y lleva el pie hacia la cadera opuesta apoyándolo en la parte alta del muslo, con cuidado de rotar desde la cadera y no forzar la rodilla.',
      mantenimiento: 'Repite con la otra pierna, cruzando el segundo pie sobre el muslo contrario. Apoya las manos sobre las rodillas en un mudra, alarga la columna desde la base y relaja los hombros. Permanece el tiempo que sea cómodo, respirando con calma.',
      salida: 'Apoya las manos en el suelo y descruza las piernas despacio, primero una y luego la otra, extendiéndolas al frente para liberar rodillas y caderas.',
    },
    figures: {
      entrada: {
        accent: 'teal',
        head: [50, 26, 6],
        lines: [[50, 32, 50, 60], [50, 40, 38, 58], [50, 40, 62, 58], [50, 60, 34, 72], [50, 60, 66, 72]],
        joints: [],
      },
      mantenimiento: {
        accent: 'teal',
        head: [50, 22, 6],
        lines: [[50, 28, 50, 58], [50, 38, 32, 60], [50, 38, 68, 60], [50, 58, 30, 52], [50, 58, 70, 52]],
        joints: [[30, 52], [70, 52]],
      },
      salida: {
        accent: 'teal',
        head: [50, 24, 6],
        lines: [[50, 30, 50, 60], [50, 38, 36, 56], [50, 38, 64, 56], [50, 60, 32, 68], [50, 60, 68, 68]],
        joints: [],
      },
    },
  },
];
