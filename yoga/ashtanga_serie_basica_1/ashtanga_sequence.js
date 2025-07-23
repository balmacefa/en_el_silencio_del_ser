// Ashtanga Yoga - Primera Serie (Yoga Chikitsa)
// Secuencia completa basada en la lista de imágenes proporcionada.

const ashtangaSequence = [
  // --- Posturas de Pie ---
  {
    sanskrit: "Samasthiti",
    popular: "Postura de la Montaña / Bipedestación",
    description:
      "Párate al frente de tu mat con los pies juntos. Activa las piernas, alarga la columna y relaja los hombros. Brazos a los lados.",
    anotaciones: "Postura fundamental de alineación y presencia.",
    image: "./imgs/samasthiti.png",
  },
  {
    sanskrit: "Padangusthasana",
    popular: "Postura del Dedo Gordo del Pie",
    description:
      "Con los pies separados al ancho de las caderas, dóblate hacia adelante y sujeta los dedos gordos. Inhala para alargar la espalda, exhala para plegarte.",
    anotaciones:
      "Estira profundamente los isquiotibiales. Mantén las piernas activas.",
    image: "./imgs/padangusth_asana.png",
  },
  {
    sanskrit: "Padahastasana",
    popular: "Postura de las Manos bajo los Pies",
    description:
      "Desliza las palmas de las manos debajo de las plantas de los pies. Inhala para alargar, exhala para profundizar la flexión.",
    anotaciones: "Añade un estiramiento para las muñecas.",
    image: "./imgs/padahasth_asana.png",
  },
  {
    sanskrit: "Utthita Trikonasana",
    popular: "Postura del Triángulo Extendido",
    description:
      "Da un paso atrás y abre los brazos. Extiéndete lateralmente y baja una mano al tobillo o al suelo, mientras la otra se eleva. Abre el pecho.",
    anotaciones:
      "Crea espacio en los costados del cuerpo. Mantén ambas piernas estiradas.",
    image: "./imgs/uttihita_trikonasana.png",
    sides: true,
  },
  {
    sanskrit: "Parivrtta Trikonasana",
    popular: "Postura del Triángulo en Torsión",
    description:
      "Desde una base similar al triángulo, gira el torso y lleva la mano opuesta al exterior del pie delantero. El otro brazo se eleva.",
    anotaciones:
      "Una torsión profunda que desafía el equilibrio. Mantén las caderas niveladas.",
    image: "./imgs/parivrtta_trikonasana.png",
    sides: true,
  },
  {
    sanskrit: "Utthita Parsvakonasana",
    popular: "Postura del Ángulo Lateral Extendido",
    description:
      "Dobla la rodilla delantera a 90 grados. Lleva la mano al suelo por fuera del pie y extiende el brazo superior por encima de la cabeza.",
    anotaciones:
      "Crea una línea de energía desde el talón hasta la punta de los dedos.",
    image: "./imgs/utthita_parsvakonasana.png",
    sides: true,
  },
  {
    sanskrit: "Parivrtta Parsvakonasana",
    popular: "Postura del Ángulo Lateral en Torsión",
    description:
      "Desde una estocada, gira y engancha el codo opuesto fuera de la rodilla delantera. Junta las palmas y presiona para profundizar la torsión.",
    anotaciones: "Intensa torsión y fortalecimiento de piernas.",
    image: "./imgs/parivrtta_parsvakonasana.png",
    sides: true,
  },
  {
    sanskrit: "Prasarita Padottanasana A, B, C, D",
    popular: "Flexión Adelante con Piernas Separadas",
    description:
      "Cuatro variaciones de flexión hacia adelante con las piernas bien separadas. A: manos en el suelo. B: manos en las caderas. C: manos entrelazadas detrás. D: agarrando los dedos gordos.",
    anotaciones:
      "Estira isquiotibiales y aductores. Calma el sistema nervioso.",
    image: "./imgs/prasarita_padottanasana_a.png", // Usamos la imagen A como representativa
  },
  {
    sanskrit: "Parsvottanasana",
    popular: "Postura de la Pirámide",
    description:
      "Con los pies en una postura más corta, junta las palmas en saludo invertido detrás de la espalda. Dóblate sobre la pierna delantera.",
    anotaciones: "Intenso estiramiento de hombros e isquiotibiales.",
    image: "./imgs/parsvottanasana.png",
    sides: true,
  },
  {
    sanskrit: "Utthita Hasta Padangusthasana",
    popular: "Postura de la Mano al Dedo Gordo del Pie",
    description:
      "De pie, levanta una pierna y sujeta el dedo gordo. Estira la pierna hacia adelante, luego hacia el lado, y finalmente pliega la cabeza hacia la rodilla.",
    anotaciones: "Postura de equilibrio y flexibilidad.",
    image: "./imgs/utthita_hasta_pasangusthasana_a.png", // Representativa
    sides: true,
  },
  {
    sanskrit: "Ardha Baddha Padmottanasana",
    popular: "Media Atadura de Loto en Flexión",
    description:
      "Coloca un pie en medio loto. Rodea la espalda con el brazo para sujetar el pie y dóblate hacia adelante.",
    anotaciones: "Abre la cadera y el hombro.",
    image: "./imgs/ardha_baddha_padmottan_asana.png",
    sides: true,
  },
  {
    sanskrit: "Utkatasana",
    popular: "Postura de la Silla",
    description:
      "Dobla las rodillas como si te sentaras en una silla. Eleva los brazos con las palmas juntas y mira hacia los pulgares.",
    anotaciones: "Fortalece piernas y espalda.",
    image: "./imgs/utkatasana.png",
  },
  {
    sanskrit: "Virabhadrasana A & B",
    popular: "Guerrero A & B",
    description:
      "Desde una estocada profunda, en la versión A los brazos suben y las caderas se cuadran. En la B, los brazos se abren paralelos al suelo y las caderas se abren.",
    anotaciones: "Posturas de poder y enfoque.",
    image: "./imgs/virabhadrasana_a.png", // Representativa
    sides: true,
  },

  // --- Posturas Sentadas ---
  {
    sanskrit: "Dandasana",
    popular: "Postura del Bastón",
    description:
      "Siéntate con las piernas estiradas al frente. Espalda recta a 90 grados, manos en el suelo junto a las caderas. Activa los pies.",
    anotaciones: "La base para todas las posturas sentadas.",
    image: "./imgs/dandasana.png",
  },
  {
    sanskrit: "Paschimottanasana",
    popular: "Flexión Sentada hacia Adelante",
    description:
      "Flexiónate sobre las piernas estiradas, sujetando los pies. Inhala para alargar, exhala para profundizar.",
    anotaciones: "Estiramiento profundo de toda la parte posterior del cuerpo.",
    image: "./imgs/paschmattanasana.png", // Usamos la imagen genérica
  },
  {
    sanskrit: "Purvottanasana",
    popular: "Postura de la Plancha Invertida",
    description:
      "Desde Dandasana, coloca las manos detrás de ti y eleva las caderas, formando una línea recta. La cabeza puede caer hacia atrás si es cómodo.",
    anotaciones: "Contrapostura que abre la parte frontal del cuerpo.",
    image: "./imgs/purvattanasana.png",
  },
  {
    sanskrit: "Janu Sirsasana A, B, C",
    popular: "Postura de la Cabeza a la Rodilla",
    description:
      "Flexiones hacia adelante con una pierna doblada. A: talón en el perineo. B: sentado sobre el talón. C: dedos del pie doblados.",
    anotaciones:
      "Estiramiento asimétrico que trabaja caderas e isquiotibiales.",
    image: "./imgs/janu_sirsasana_a.png", // Representativa
    sides: true,
  },
  {
    sanskrit: "Marichyasana A, B, C, D",
    popular: "Postura dedicada al sabio Marichi",
    description:
      "Serie de cuatro posturas con ataduras y torsiones. A y B son flexiones. C y D son torsiones.",
    anotaciones:
      "Desintoxican los órganos y aumentan la flexibilidad de la columna.",
    image: "./imgs/marichyasana_a.png", // Representativa
    sides: true,
  },
  {
    sanskrit: "Navasana",
    popular: "Postura del Bote",
    description:
      "Equilibrio sobre los isquiones, con las piernas y el torso elevados, formando una 'V'. Se repite 5 veces.",
    anotaciones: "Fortalece profundamente el centro abdominal (core).",
    image: "./imgs/navasana.png",
  },
  {
    sanskrit: "Bhujapidasana",
    popular: "Postura de Presión en los Hombros",
    description:
      "Balance de brazos donde las piernas se cruzan frente a los brazos, que actúan como estantes.",
    anotaciones: "Primer balance de brazos de la serie.",
    image: "./imgs/bhujapidasana.png",
  },
  {
    sanskrit: "Kurmasana",
    popular: "Postura de la Tortuga",
    description:
      "Flexión sentada con piernas abiertas, deslizando los brazos por debajo de las rodillas hacia los lados.",
    anotaciones: "Apertura de cadera y hombros muy profunda.",
    image: "./imgs/kurmasana.png",
  },
  {
    sanskrit: "Supta Kurmasana",
    popular: "Postura de la Tortuga Dormida",
    description:
      "Desde Kurmasana, se cruzan los tobillos detrás de la cabeza y se atan las manos detrás de la espalda.",
    anotaciones: "Postura muy avanzada que induce a la introspección.",
    image: "./imgs/supta_kurmasana.png",
  },
  {
    sanskrit: "Baddha Konasana",
    popular: "Postura del Zapatero",
    description:
      "Junta las plantas de los pies, acerca los talones al perineo. En la versión A, espalda recta. En la B, flexión hacia adelante.",
    anotaciones: "Abre las caderas y la ingle.",
    image: "./imgs/baddha_konasana_a.png", // Representativa
  },
  {
    sanskrit: "Upavishta Konasana",
    popular: "Flexión Sentada con Ángulo Abierto",
    description:
      "Sentado con las piernas bien abiertas, flexiónate hacia adelante con la espalda recta.",
    anotaciones: "Estira intensamente los aductores e isquiotibiales.",
    image: "./imgs/upavishta_konasana_a.png", // Representativa
  },

  // --- Secuencia Final ---
  {
    sanskrit: "Urdhva Dhanurasana",
    popular: "Postura del Arco hacia Arriba (Rueda)",
    description:
      "Acuéstate boca arriba, coloca las manos junto a las orejas y los pies cerca de los glúteos. Presiona para elevar caderas y pecho.",
    anotaciones: "Potente apertura de pecho y flexión de espalda.",
    image: "./imgs/urdhva_dhanurasana.png",
  },
  {
    sanskrit: "Salamba Sarvangasana",
    popular: "Postura de la Vela (Parada de Hombros)",
    description:
      "Eleva las piernas y la espalda, soportando el peso en los hombros y la parte superior de los brazos. Manos en la espalda baja.",
    anotaciones:
      "Considerada la 'reina' de las asanas por sus beneficios circulatorios y calmantes.",
    image: "./imgs/salamba_sarvangasana.png",
  },
  {
    sanskrit: "Halasana",
    popular: "Postura del Arado",
    description:
      "Desde Sarvangasana, baja las piernas por detrás de la cabeza hasta que los pies toquen el suelo.",
    anotaciones: "Estira la columna vertebral y los hombros.",
    image: "./imgs/halasana.png",
  },
  {
    sanskrit: "Karnapidasana",
    popular: "Postura de Presión en las Orejas",
    description:
      "Desde Halasana, dobla las rodillas y llévalas a los lados de las orejas.",
    anotaciones:
      "Profundiza la flexión y promueve la introspección (pratyahara).",
    image: "./imgs/karnapidasana.png",
  },
  {
    sanskrit: "Matsyasana",
    popular: "Postura del Pez",
    description:
      "Contrapostura de la serie de inversión. Arquea la espalda y apoya la coronilla en el suelo, abriendo la garganta.",
    anotaciones: "Abre el chakra del corazón y la garganta.",
    image: "./imgs/mathsyasana.png",
  },
  {
    sanskrit: "Sirsasana",
    popular: "Postura sobre la Cabeza (Parada de Cabeza)",
    description:
      "Balance sobre la cabeza y los antebrazos, formando un trípode estable. Eleva las piernas.",
    anotaciones:
      "El 'rey' de las asanas. Desarrolla fuerza, equilibrio y concentración.",
    image: "./imgs/sirsasana.png",
  },
  {
    sanskrit: "Baddha Padmasana",
    popular: "Postura del Loto Atado",
    description:
      "En la postura del loto, cruza los brazos por detrás de la espalda para sujetar los dedos de los pies opuestos.",
    anotaciones: "Sella la energía de la práctica.",
    image: "./imgs/baddha_padmasana.png",
  },
  {
    sanskrit: "Utpluthih",
    popular: "Elevación / Postura de la Balanza",
    description:
      "En loto, presiona las manos contra el suelo y levanta todo el cuerpo. Mantén la elevación durante 10 a 25 respiraciones.",
    anotaciones: "Último esfuerzo, construye fuerza y calor.",
    image: "./imgs/utpluthih.png",
  },
  {
    sanskrit: "Savasana",
    popular: "Postura del Cadáver",
    description:
      "Túmbate boca arriba, con los brazos y piernas relajados, ligeramente separados del cuerpo. Cierra los ojos y relájate completamente.",
    anotaciones:
      "La postura más importante. Permite la integración de los beneficios de la práctica.",
    image: "./imgs/savasana.png",
  },
];
