import assets from "./assets";

export const Items = [
    {
      id: 1,
      category: 'product',
      productName: 'Ladrillo Hueco',
      presentation:  "12 x 18 x 33 cm.",
      productPrice: 220,
      description:
          "El ladrillo hueco es un tipo de ladrillo que tiene la característica de tener unos orificios pasantes en su interior en sentido longitudinal. El volumen total de los huecos debe ser igual o mayor al 70% del volumen total del ladrillo.",
      isOff: true,
      offPercentage: 10,
      productImage: require('../assets/images/Mats/Ladrillo_hueco.jpg'),
      isAvailable: true,
      productImageList: [
        require("../assets/images/Mats/Ladrillo_hueco.jpg"),
        require("../assets/images/Mats/Ladrillo_hueco.jpg"),
        require("../assets/images/Mats/Ladrillo_hueco.jpg"),
      ],
      bids: [
        {
          id: "PROV-11",
          name: "Bercovich",
          price: 220,
          image: assets.Bercovich,
          date: "Av. 24 de Septiembre 744, San Miguel de Tucumán, Tucumán",
        },
        {
          id: "PROV-12",
          name: "Rosso Materiales",
          price: 225,
          image: assets.Rosso,
          date: "Av. Alem 595, San Miguel de Tucumán, Tucumán",
        },
        {
          id: "PROV-13",
          name: "Distribuidora Lamadrid",
          price: 224,
          image: assets.Distlam,
          date: "Av. Ejército del Nte. 395, San Miguel de Tucumán, Tucumán",
        },
      ],
    },
    {
      id: 2,
      category: 'product',
      productName: 'Cemento Loma Negra',
      presentation: "Bolsa de 50 Kgs.",
      productPrice: 1890,
      description:
        "El cemento es un conglomerante formado a partir de una mezcla de caliza y arcilla calcinadas y posteriormente molidas, que tiene la propiedad de endurecerse después de ponerse en contacto con el agua. El producto resultante de la molienda de estas rocas es llamado clinker y se convierte en cemento cuando se le agrega una pequeña cantidad de yeso para evitar la contracción de la mezcla al fraguar cuando se le añade agua y endurecerse posteriormente.",
      isOff: false,
      productImage: require('../assets/images/Mats/Cemento.jpg'),
      isAvailable: true,
      productImageList: [
        require("../assets/images/Mats/Cemento.jpg"),
        require("../assets/images/Mats/Cemento.jpg"),
        require("../assets/images/Mats/Cemento.jpg"),
      ],
      bids: [
        {
          id: "PROV-21",
          name: "Bercovich",
          price: 1890,
          image: assets.Bercovich,
          date: "Av. 24 de Septiembre 744, San Miguel de Tucumán, Tucumán",
        },
        {
          id: "PROV-22",
          name: "Rosso Materiales",
          price: 1899,
          image: assets.Rosso,
          date: "Av. Alem 595, San Miguel de Tucumán, Tucumán",
        },
        {
          id: "PROV-23",
          name: "Distribuidora Lamadrid",
          price: 1910,
          image: assets.Distlam,
          date: "Av. Ejército del Nte. 395, San Miguel de Tucumán, Tucumán",
        },
      ],
    },
    {
      id: 3,
      category: 'product',
      productName: "Pastina Klaukol",
      presentation: "Alta performance - 1 Kg.",
      productPrice: 1620,
      description:
        "Klaukol Impermeable Potenciado es un adhesivo para la colocación de pisos y revestimientos cerámicos de media y alta absorción. Es una mezcla en polvo a base cementicia, arenas de granulometría seleccionada, resinas sintéticas y aditivos especiales que garantizan una perfecta adhesión.",
      isOff: true,
      offPercentage: 18,
      productImage: require('../assets/images/Mats/Klaukol.jpg'),
      isAvailable: true,
      productImageList: [
        require("../assets/images/Mats/Klaukol.jpg"),
        require("../assets/images/Mats/Klaukol.jpg"),
        require("../assets/images/Mats/Klaukol.jpg"),
      ],
      bids: [
        {
          id: "PROV-31",
          name: "Bercovich",
          price: 1700,
          image: assets.Bercovich,
          date: "Av. 24 de Septiembre 744, San Miguel de Tucumán, Tucumán",
        },
        {
          id: "PROV-32",
          name: "Rosso Materiales",
          price: 1620,
          image: assets.Rosso,
          date: "Av. Alem 595, San Miguel de Tucumán, Tucumán",
        },
        {
          id: "PROV-33",
          name: "Distribuidora Lamadrid",
          price: 1650,
          image: assets.Distlam,
          date: "Av. Ejército del Nte. 395, San Miguel de Tucumán, Tucumán",
        },
      ],
    },
    {
      id: 4,
      category: 'product',
      productName: 'Alambre Galvanizado Acindar',
      presentation: "1,6 mm. de espesor - Rollo x 1 Kg.",
      productPrice: 1233,
      description:
        "Es una alambre brillante que se ha sometido a un recubrimiento por inmersión de zinc fundido o por electrólosis, este proceso mejora la resistencia a la corrosión del acero y generalmente, se modifican las propiedades mecánicas mediante tratamientos térmicos, ofreciendo diferentes clases de productos como alambres galvanizados suaves en estado recocido alto, alambres galvanizados medios en estado recocido intermedio, alambres galvanizados sin recocido.",
      isOff: false,
      productImage: require('../assets/images/Mats/Alambre.jpg'),
      isAvailable: true,
      productImageList: [
        require("../assets/images/Mats/Alambre.jpg"),
        require("../assets/images/Mats/Alambre.jpg"),
        require("../assets/images/Mats/Alambre.jpg"),
      ],
      bids: [
        {
          id: "PROV-31",
          name: "Bercovich",
          price: 1240,
          image: assets.Bercovich,
          date: "Av. 24 de Septiembre 744, San Miguel de Tucumán, Tucumán",
        },
        {
          id: "PROV-32",
          name: "Rosso Materiales",
          price: 1233,
          image: assets.Rosso,
          date: "Av. Alem 595, San Miguel de Tucumán, Tucumán",
        },
        {
          id: "PROV-33",
          name: "Distribuidora Lamadrid",
          price: 1300,
          image: assets.Distlam,
          date: "Av. Ejército del Nte. 395, San Miguel de Tucumán, Tucumán",
        },
      ],
    },
    {
      id: 5,
      category: 'product',
      productName: "Tornillos FIX rosca gruesa",
      presentation: "Negro - x1000 u.",
      productPrice: 2530,
      description:
        "Este tipo de tornillos fix para metal tienen rosca fina y cuenta con una punta aguda tipo aguja, que no necesita de perforación preliminar gracias a su cuerpo delgado y sus filetes en las roscas cortantes, las cuales facilitan su penetración y ensamble.",
      isOff: false,
      productImage: require('../assets/images/Mats/Tornillos.jpeg'),
      isAvailable: false,
      productImageList: [
        require("../assets/images/Mats/Tornillos.jpeg"),
        require("../assets/images/Mats/Tornillos.jpeg"),
        require("../assets/images/Mats/Tornillos.jpeg"),
      ],
      bids: [
        {
          id: "PROV-31",
          name: "Bercovich",
          price: 2535,
          image: assets.Bercovich,
          date: "Av. 24 de Septiembre 744, San Miguel de Tucumán, Tucumán",
        },
        {
          id: "PROV-32",
          name: "Rosso Materiales",
          price: 2535,
          image: assets.Rosso,
          date: "Av. Alem 595, San Miguel de Tucumán, Tucumán",
        },
        {
          id: "PROV-33",
          name: "Distribuidora Lamadrid",
          price: 2530,
          image: assets.Distlam,
          date: "Av. Ejército del Nte. 395, San Miguel de Tucumán, Tucumán",
        },
      ],
    },
    {
      id: 6,
      category: 'product',
      productName: 'Hierro torsionado de 8mm.',
      presentation: "Varillas x 12mts. (x10 u.)",
      productPrice: 18550,
      description:
        "El hierro ADN-420 (dureza natural) o hierro torsionado es un acero al carbono destinado a la construcción. Su superficie es conformada con dos nervaduras longitudinales, y nervaduras transversales a la barra.",
      isOff: false,
      productImage: require('../assets/images/Mats/Hierro.jpg'),
      isAvailable: true,
      productImageList: [
        require("../assets/images/Mats/Hierro.jpg"),
        require("../assets/images/Mats/Hierro.jpg"),
        require("../assets/images/Mats/Hierro.jpg"),
      ],
      bids: [
        {
          id: "PROV-31",
          name: "Bercovich",
          price: 18550,
          image: assets.Bercovich,
          date: "Av. 24 de Septiembre 744, San Miguel de Tucumán, Tucumán",
        },
        {
          id: "PROV-32",
          name: "Rosso Materiales",
          price: 19000,
          image: assets.Rosso,
          date: "Av. Alem 595, San Miguel de Tucumán, Tucumán",
        },
        {
          id: "PROV-33",
          name: "Distribuidora Lamadrid",
          price: 18830,
          image: assets.Distlam,
          date: "Av. Ejército del Nte. 395, San Miguel de Tucumán, Tucumán",
        },
      ],
    },
    {
      id: 7,
      category: 'product',
      productName: 'Cable unipolar',
      presentation: "4 mm. - Rollo x100 mts.",
      productPrice: 7740,
      description:
        "Los cables que se usan para conducir electricidad se fabrican generalmente de cobre,2​ debido a la excelente conductividad de este material, o de aluminio que aunque posee menor conductividad es más ligero para la misma capacidad y típicamente más económico que el cobre.",
      isOff: false,
      productImage: require('../assets/images/Mats/Cable.jpg'),
      isAvailable: true,
      productImageList: [
        require("../assets/images/Mats/Cable.jpg"),
        require("../assets/images/Mats/Cable.jpg"),
        require("../assets/images/Mats/Cable.jpg"),
      ],
      bids: [
      {
        id: "PROV-31",
        name: "Bercovich",
        price: 7780,
        image: assets.Bercovich,
        date: "Av. 24 de Septiembre 744, San Miguel de Tucumán, Tucumán",
      },
      {
        id: "PROV-32",
        name: "Rosso Materiales",
        price: 7740,
        image: assets.Rosso,
        date: "Av. Alem 595, San Miguel de Tucumán, Tucumán",
      },
      {
        id: "PROV-33",
        name: "Distribuidora Lamadrid",
        price: 7740,
        image: assets.Distlam,
        date: "Av. Ejército del Nte. 395, San Miguel de Tucumán, Tucumán",
      },
    ],
    },
  ];