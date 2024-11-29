export const products = [
  {
    id: '1',
    name: 'MacBook Pro M2',
    category: 'Laptops',
    description: 'La laptop más potente de Apple con el nuevo chip M2',
    fullDescription: `
      El nuevo MacBook Pro viene equipado con el revolucionario chip M2 de Apple,
      ofreciendo un rendimiento excepcional y una eficiencia energética sin precedentes.
      Características principales:
      - Pantalla Liquid Retina XDR de 14"
      - Hasta 20 horas de duración de batería
      - Neural Engine de 16 núcleos
      - GPU de 10 núcleos
      - 16GB de memoria unificada
    `,
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop',
    specs: [
      { name: 'Procesador', value: 'Apple M2' },
      { name: 'RAM', value: '16GB' },
      { name: 'Almacenamiento', value: '512GB SSD' },
      { name: 'Pantalla', value: '14 pulgadas Liquid Retina XDR' },
      { name: 'Sistema Operativo', value: 'macOS Ventura' }
    ],
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '2',
    name: 'Samsung Galaxy S21',
    category: 'Smartphones',
    description: 'El smartphone de última generación de Samsung',
    fullDescription: `
      El Samsung Galaxy S21 ofrece una experiencia móvil de alta gama con su pantalla Dynamic AMOLED 2X,
      cámara de alta resolución y un procesador Exynos 2100.
      Características principales:
      - Pantalla Dynamic AMOLED 2X de 6.2"
      - Cámara de 64MP
      - Procesador Exynos 2100
      - 8GB de RAM
      - 4000mAh de batería
    `,
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&h=600&fit=crop',
    specs: [
      { name: 'Pantalla', value: '6.2 pulgadas Dynamic AMOLED 2X' },
      { name: 'Cámara', value: '64MP' },
      { name: 'Procesador', value: 'Exynos 2100' },
      { name: 'RAM', value: '8GB' },
      { name: 'Batería', value: '4000mAh' }
    ],
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1573920011462-eb3003086611?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '3',
    name: 'Sony WH-1000XM4',
    category: 'Auriculares',
    description: 'Auriculares inalámbricos con cancelación de ruido líder en la industria',
    fullDescription: `
      Los Sony WH-1000XM4 ofrecen una cancelación de ruido excepcional, calidad de sonido superior y
      una experiencia de escucha cómoda y sin cables.
      Características principales:
      - Cancelación de ruido líder en la industria
      - Hasta 30 horas de duración de batería
      - Conectividad Bluetooth
      - Controles táctiles
      - Asistente de voz
    `,
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&h=600&fit=crop',
    specs: [
      { name: 'Cancelación de Ruido', value: 'Sí' },
      { name: 'Duración de Batería', value: '30 horas' },
      { name: 'Conectividad', value: 'Bluetooth' },
      { name: 'Controles', value: 'Táctiles' },
      { name: 'Asistente de Voz', value: 'Sí' }
    ],
    images: [
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '4',
    name: 'iPad Pro 12.9',
    category: 'Tablets',
    description: 'La tablet más avanzada de Apple con pantalla Liquid Retina XDR',
    fullDescription: `
      El iPad Pro 12.9 ofrece un rendimiento sin igual con el chip M1 de Apple y una pantalla Liquid Retina XDR
      que proporciona colores vibrantes y un brillo increíble.
      Características principales:
      - Pantalla Liquid Retina XDR de 12.9"
      - Chip M1 de Apple
      - Compatible con Apple Pencil (2ª generación)
      - 5G
      - Hasta 10 horas de duración de batería
    `,
    price: 1099.99,
    image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=800&h=600&fit=crop',
    specs: [
      { name: 'Pantalla', value: '12.9 pulgadas Liquid Retina XDR' },
      { name: 'Chip', value: 'M1 de Apple' },
      { name: 'Compatibilidad', value: 'Apple Pencil (2ª generación)' },
      { name: 'Conectividad', value: '5G' },
      { name: 'Duración de Batería', value: '10 horas' }
    ],
    images: [
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '5',
    name: 'LG OLED55CXPUA',
    category: 'TVs',
    description: 'Televisor OLED 4K UHD con inteligencia artificial y Dolby Vision',
    fullDescription: `
      El LG OLED55CXPUA ofrece una calidad de imagen impresionante con tecnología OLED y soporte para Dolby Vision,
      junto con inteligencia artificial para mejorar la experiencia de visualización.
      Características principales:
      - Pantalla OLED 4K UHD
      - Dolby Vision y Dolby Atmos
      - Procesador AI Picture Pro
      - ThinQ AI
      - Compatible con Google Assistant y Alexa
    `,
    price: 1499.99,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&h=600&fit=crop',
    specs: [
      { name: 'Pantalla', value: 'OLED 4K UHD' },
      { name: 'Dolby', value: 'Vision y Atmos' },
      { name: 'Procesador', value: 'AI Picture Pro' },
      { name: 'AI', value: 'ThinQ AI' },
      { name: 'Compatibilidad', value: 'Google Assistant y Alexa' }
    ],
    images: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '6',
    name: 'DJI Mavic Air 2',
    category: 'Drones',
    description: 'Drone con cámara 4K y funciones avanzadas de vuelo',
    fullDescription: `
      El DJI Mavic Air 2 combina una cámara de alta calidad con funciones avanzadas de vuelo,
      ofreciendo una experiencia de vuelo inigualable y capturas impresionantes.
      Características principales:
      - Cámara 4K
      - Tiempo de vuelo de hasta 34 minutos
      - Transmisión de video OcuSync 2.0
      - Evitación de obstáculos
      - Modos de vuelo inteligentes
    `,
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=800&h=600&fit=crop',
    specs: [
      { name: 'Cámara', value: '4K' },
      { name: 'Tiempo de Vuelo', value: '34 minutos' },
      { name: 'Transmisión', value: 'OcuSync 2.0' },
      { name: 'Evitación de Obstáculos', value: 'Sí' },
      { name: 'Modos de Vuelo', value: 'Inteligentes' }
    ],
    images: [
      'https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '7',
    name: 'Dell XPS 15',
    category: 'Laptops',
    description: 'Laptop de alto rendimiento para profesionales creativos',
    fullDescription: `
      El Dell XPS 15 ofrece un rendimiento excepcional con procesador Intel Core i7,
      tarjeta gráfica NVIDIA y pantalla 4K OLED.
      Características principales:
      - Pantalla OLED 4K de 15.6"
      - Procesador Intel Core i7
      - NVIDIA GeForce RTX 3050 Ti
      - 16GB RAM
      - SSD de 1TB
    `,
    price: 1799.99,
    image: 'https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?w=800&h=600&fit=crop',
    specs: [
      { name: 'Procesador', value: 'Intel Core i7' },
      { name: 'RAM', value: '16GB' },
      { name: 'Almacenamiento', value: '1TB SSD' },
      { name: 'Pantalla', value: '15.6" OLED 4K' },
      { name: 'Gráficos', value: 'NVIDIA GeForce RTX 3050 Ti' }
    ],
    images: [
      'https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '8',
    name: 'Google Pixel 6 Pro',
    category: 'Smartphones',
    description: 'Smartphone con sistema de cámara avanzado y procesador Tensor',
    fullDescription: `
      El Google Pixel 6 Pro destaca por su sistema de cámara inteligente y el procesador
      personalizado Tensor, diseñado para mejorar la experiencia de IA.
      Características principales:
      - Pantalla OLED de 6.7"
      - Procesador Google Tensor
      - Sistema de cámara triple de 50MP
      - 5G
      - Batería de 5003 mAh
    `,
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=800&h=600&fit=crop',
    specs: [
      { name: 'Pantalla', value: '6.7" OLED' },
      { name: 'Procesador', value: 'Google Tensor' },
      { name: 'Cámara', value: 'Triple 50MP' },
      { name: 'Conectividad', value: '5G' },
      { name: 'Batería', value: '5003 mAh' }
    ],
    images: [
      'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '9',
    name: 'Bose QuietComfort 45',
    category: 'Auriculares',
    description: 'Auriculares inalámbricos con cancelación de ruido líder',
    fullDescription: `
      Los Bose QuietComfort 45 ofrecen una experiencia de audio inmersiva con
      cancelación de ruido líder en la industria y un diseño cómodo y elegante.
      Características principales:
      - Cancelación de ruido ajustable
      - Hasta 24 horas de duración de batería
      - Conectividad Bluetooth
      - Modo de sonido personalizable
      - Carga rápida
    `,
    price: 329.99,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&h=600&fit=crop',
    specs: [
      { name: 'Cancelación de Ruido', value: 'Ajustable' },
      { name: 'Duración de Batería', value: '24 horas' },
      { name: 'Conectividad', value: 'Bluetooth' },
      { name: 'Carga', value: 'Rápida' },
      { name: 'Peso', value: '240g' }
    ],
    images: [
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '10',
    name: 'Samsung Galaxy Tab S7+',
    category: 'Tablets',
    description: 'Tablet premium con S Pen y pantalla Super AMOLED',
    fullDescription: `
      El Samsung Galaxy Tab S7+ es una tablet de gama alta diseñada para
      productividad y creatividad, con una pantalla Super AMOLED y S Pen incluido.
      Características principales:
      - Pantalla Super AMOLED de 12.4"
      - Procesador Snapdragon 865+
      - 6GB de RAM
      - 128GB de almacenamiento
      - S Pen incluido
    `,
    price: 849.99,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop',
    specs: [
      { name: 'Pantalla', value: '12.4" Super AMOLED' },
      { name: 'Procesador', value: 'Snapdragon 865+' },
      { name: 'RAM', value: '6GB' },
      { name: 'Almacenamiento', value: '128GB' },
      { name: 'Incluye', value: 'S Pen' }
    ],
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '11',
    name: 'LG OLED C1 Series',
    category: 'TVs',
    description: 'Televisor OLED 4K con tecnología AI para imagen y sonido',
    fullDescription: `
      El LG OLED C1 Series ofrece una calidad de imagen impresionante con
      tecnología OLED, procesamiento AI y características avanzadas de gaming.
      Características principales:
      - Pantalla OLED 4K de 55"
      - Procesador α9 Gen 4 AI
      - HDMI 2.1 para gaming
      - Dolby Vision IQ y Atmos
      - Modo Filmmaker
    `,
    price: 1599.99,
    image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=800&h=600&fit=crop',
    specs: [
      { name: 'Pantalla', value: '55" OLED 4K' },
      { name: 'Procesador', value: 'α9 Gen 4 AI' },
      { name: 'HDMI', value: '2.1' },
      { name: 'Dolby', value: 'Vision IQ y Atmos' },
      { name: 'Modo', value: 'Filmmaker' }
    ],
    images: [
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '12',
    name: 'DJI Mavic 3',
    category: 'Drones',
    description: 'Drone profesional con sistema de cámara dual Hasselblad',
    fullDescription: `
      El DJI Mavic 3 es un drone de nivel profesional con un sistema de cámara
      dual Hasselblad, ofreciendo una calidad de imagen y video sin precedentes.
      Características principales:
      - Cámara dual Hasselblad
      - Sensor de 4/3 CMOS
      - Hasta 46 minutos de tiempo de vuelo
      - Transmisión O3+
      - Detección de obstáculos omnidireccional
    `,
    price: 2049.99,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
    specs: [
      { name: 'Cámara', value: 'Dual Hasselblad' },
      { name: 'Sensor', value: '4/3 CMOS' },
      { name: 'Tiempo de Vuelo', value: '46 minutos' },
      { name: 'Transmisión', value: 'O3+' },
      { name: 'Detección de Obstáculos', value: 'Omnidireccional' }
    ],
    images: [
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '13',
    name: 'Lenovo ThinkPad X1 Carbon',
    category: 'Laptops',
    description: 'Laptop ultradelgada para profesionales empresariales',
    fullDescription: `
      El Lenovo ThinkPad X1 Carbon es una laptop ultradelgada y ligera,
      diseñada para profesionales que requieren rendimiento y portabilidad.
      Características principales:
      - Pantalla de 14" con resolución 4K
      - Procesador Intel Core i7
      - 16GB de RAM
      - SSD de 512GB
      - Batería de larga duración
    `,
    price: 1599.99,
    image: 'https://images.unsplash.com/photo-1529336953128-a85760f58cb5?w=800&h=600&fit=crop',
    specs: [
      { name: 'Pantalla', value: '14" 4K' },
      { name: 'Procesador', value: 'Intel Core i7' },
      { name: 'RAM', value: '16GB' },
      { name: 'Almacenamiento', value: '512GB SSD' },
      { name: 'Peso', value: '1.1 kg' }
    ],
    images: [
      'https://images.unsplash.com/photo-1529336953128-a85760f58cb5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1529336953128-a85760f58cb5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1529336953128-a85760f58cb5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '14',
    name: 'Apple iPhone 13 Pro',
    category: 'Smartphones',
    description: 'Smartphone de alta gama con sistema de cámaras profesional',
    fullDescription: `
      El iPhone 13 Pro ofrece un rendimiento excepcional con el chip A15 Bionic,
      un sistema de cámaras profesional y un diseño elegante.
      Características principales:
      - Pantalla Super Retina XDR de 6.1"
      - Chip A15 Bionic
      - Sistema de triple cámara de 12MP
      - 5G
      - Ceramic Shield
    `,
    price: 999.99,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000',
    specs: [
      { name: 'Pantalla', value: '6.1" Super Retina XDR' },
      { name: 'Procesador', value: 'A15 Bionic' },
      { name: 'Cámara', value: 'Triple 12MP' },
      { name: 'Conectividad', value: '5G' },
      { name: 'Protección', value: 'Ceramic Shield' }
    ],
    images: [
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000'
    ]
  },
  {
    id: '15',
    name: 'Sony WF-1000XM4',
    category: 'Auriculares',
    description: 'Auriculares inalámbricos true wireless con cancelación de ruido',
    fullDescription: `
      Los Sony WF-1000XM4 ofrecen una experiencia de audio premium con
      cancelación de ruido líder en su clase y un diseño compacto.
      Características principales:
      - Cancelación de ruido líder en la industria
      - Hasta 8 horas de duración de batería
      - Sonido de alta resolución
      - Resistencia al agua IPX4
      - Carga inalámbrica
    `,
    price: 279.99,
    image: 'https://www.sony.com/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=660&hei=660',
    specs: [
      { name: 'Cancelación de Ruido', value: 'Líder en la industria' },
      { name: 'Duración de Batería', value: '8 horas' },
      { name: 'Sonido', value: 'Alta resolución' },
      { name: 'Resistencia', value: 'IPX4' },
      { name: 'Carga', value: 'Inalámbrica' }
    ],
    images: [
      'https://www.sony.com/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=660&hei=660',
      'https://www.sony.com/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=660&hei=660',
      'https://www.sony.com/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=660&hei=660'
    ]
  },
  {
    id: '16',
    name: 'iPad Air 5ta Generación',
    category: 'Tablets',
    description: 'Tablet versátil con chip M1 y diseño moderno',
    fullDescription: `
      El iPad Air 5ta Generación combina rendimiento y portabilidad,
      equipado con el potente chip M1 de Apple y un diseño elegante.
      Características principales:
      - Pantalla Liquid Retina de 10.9"
      - Chip M1 de Apple
      - Compatibilidad con Apple Pencil (2ª generación)
      - Cámara frontal ultra gran angular
      - 5G
    `,
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop',
    specs: [
      { name: 'Pantalla', value: '10.9" Liquid Retina' },
      { name: 'Procesador', value: 'Chip M1' },
      { name: 'Apple Pencil', value: '2ª generación' },
      { name: 'Cámara Frontal', value: 'Ultra gran angular' },
      { name: 'Conectividad', value: '5G' }
    ],
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '17',
    name: 'Samsung Neo QLED 8K',
    category: 'TVs',
    description: 'Televisor 8K con tecnología Quantum Matrix y IA',
    fullDescription: `
      El Samsung Neo QLED 8K ofrece una calidad de imagen revolucionaria
      con resolución 8K, tecnología Quantum Matrix y procesamiento AI.
      Características principales:
      - Pantalla Quantum Matrix de 75"
      - Resolución 8K
      - Procesador Neo Quantum 8K
      - Object Tracking Sound+
      - Gaming Hub
    `,
    price: 3499.99,
    image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=800&h=600&fit=crop',
    specs: [
      { name: 'Pantalla', value: '75" Quantum Matrix' },
      { name: 'Resolución', value: '8K' },
      { name: 'Procesador', value: 'Neo Quantum 8K' },
      { name: 'Sonido', value: 'Object Tracking Sound+' },
      { name: 'Modo Gaming', value: 'Gaming Hub' }
    ],
    images: [
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '18',
    name: 'DJI FPV Combo',
    category: 'Drones',
    description: 'Drone de carreras con experiencia de vuelo inmersiva',
    fullDescription: `
      El DJI FPV Combo ofrece una experiencia de vuelo única con
      visión en primera persona y un rendimiento de alta velocidad.
      Características principales:
      - Transmisión de video HD de baja latencia
      - Velocidad máxima de 140 km/h
      - Modo de vuelo S, Normal y Manual
      - Cámara 4K a 60fps
      - Gafas de visión FPV incluidas
    `,
    price: 1299.99,
    image: 'https://tecnoplanet.mx/media/catalog/product/cache/8cd5a230797067cb5ac02bf70ef67749/1/6/1618476425_img_1512528.jpg',
    specs: [
      { name: 'Transmisión de Video', value: 'HD baja latencia' },
      { name: 'Velocidad Máxima', value: '140 km/h' },
      { name: 'Modos de Vuelo', value: 'S, Normal, Manual' },
      { name: 'Cámara', value: '4K 60fps' },
      { name: 'Incluye', value: 'Gafas FPV' }
    ],
    images: [
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '19',
    name: 'Razer Blade 14',
    category: 'Laptops',
    description: 'Laptop gaming de alto rendimiento compacta',
    fullDescription: `
      El Razer Blade 14 combina potencia de juego y portabilidad,
      con un diseño premium y componentes de última generación.
      Características principales:
      - Pantalla QHD de 14"
      - Procesador AMD Ryzen 9
      - NVIDIA GeForce RTX 3080
      - 16GB de RAM
      - SSD de 1TB
    `,
    price: 2199.99,
    image: 'https://images.unsplash.com/photo-1529336953128-a85760f58cb5?w=800&h=600&fit=crop',
    specs: [
      { name: 'Pantalla', value: '14" QHD' },
      { name: 'Procesador', value: 'AMD Ryzen 9' },
      { name: 'Gráficos', value: 'NVIDIA GeForce RTX 3080' },
      { name: 'RAM', value: '16GB' },
      { name: 'Almacenamiento', value: '1TB SSD' }
    ],
    images: [
      'https://images.unsplash.com/photo-1529336953128-a85760f58cb5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1529336953128-a85760f58cb5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1529336953128-a85760f58cb5?w=800&h=600&fit=crop'
    ]
  }
];
