

const global=[
  {
    id: "1",
    model: "Dell XPS 13",
    category:"laptop",
    image: "https://detec.in/cdn/shop/products/WhatsAppImage2021-10-27at3.18.26PM_590x.jpg?v=1635328260",
    price: "89,999",
    specs: {
      RAM: "16 GB",
      ROM: "256 GB SSD",
      expandableMemory: "Not Expandable",
      display: "13.4-inch 4K Ultra HD InfinityEdge Display",
      processor: "Intel Core i7",
      graphics: "Intel Iris Xe Graphics",
      operatingSystem: "Windows 11",
      battery: "Up to 12 hours",
    }
  },
  {
    id: "2",
    model: "Lenovo Yoga C940",
    category:"laptop",
    image: "https://m.media-amazon.com/images/I/71w0QN1kgvL._AC_SL1500_.jpg",
    price: " 92,999",
    specs: {
      RAM: "16 GB",
      ROM: "512 GB SSD",
      expandableMemory: "Not Expandable",
      display: "14-inch 4K Ultra HD Touchscreen",
      processor: "Intel Core i7",
      graphics: "Intel Iris Plus",
      operatingSystem: "Windows 10",
      battery: "Up to 10 hours",
    }
  },
  {
    id: "3",
    model: "HP Spectre x360 13",
    category:"laptop",
    image: "https://images-cdn.ubuy.co.in/6351fe1d682e574f8b33166e-hp-spectre-x360-13-home.jpg",
    price: "86,499",
    specs: {
      RAM: "16 GB",
      ROM: "1 TB SSD",
      expandableMemory: "Not Expandable",
      display: "13.3-inch Full HD Touchscreen",
      processor: "Intel Core i7",
      graphics: "Intel Iris Xe",
      operatingSystem: "Windows 11",
      battery: "Up to 14 hours",
    }
  },
  {
    id: "4",
    model: "Asus ROG Zephyrus G14",
    category:"laptop",
    image: "https://m.media-amazon.com/images/I/61c8gW64GuL._AC_SL1500_.jpg",
    price: "109,999",
    specs: {
      RAM: "32 GB",
      ROM: "1 TB SSD",
      expandableMemory: "Not Expandable",
      display: "14-inch QHD 120Hz",
      processor: "AMD Ryzen 9",
      graphics: "NVIDIA RTX 3060",
      operatingSystem: "Windows 10",
      battery: "Up to 10 hours",
    }
  },
  {
    id: "5",
    model: "MacBook Air M2",
    category:"laptop",
    image: "https://images-cdn.ubuy.co.in/654937edaeeb923bea0b4285-apple-2023-macbook-air-m2-15.jpg",
    price: "99,999",
    specs: {
      RAM: "8 GB",
      ROM: "256 GB SSD",
      expandableMemory: "Not Expandable",
      display: "13.3-inch Retina Display",
      processor: "Apple M2",
      graphics: "Apple GPU",
      operatingSystem: "macOS Monterey",
      battery: "Up to 15 hours",
    }
  },
  {
    id: "6",
    model: "Acer Predator Helios 300",
    category:"laptop",
    image: "https://images-cdn.ubuy.co.in/633a9cd981792051c9028d68-acer-ph31554748y-predator-helios-300.jpg",
    price: "79,999",
    specs: {
      RAM: "16 GB",
      ROM: "512 GB SSD",
      expandableMemory: "Not Expandable",
      display: "15.6-inch Full HD 144Hz",
      processor: "Intel Core i7",
      graphics: "NVIDIA RTX 3060",
      operatingSystem: "Windows 10",
      battery: "Up to 6 hours",
    }
  },
  {
    id: "7",
    model: "Microsoft Surface Laptop 4",
    category:"laptop",
    image: "https://images-cdn.ubuy.co.in/6505b029b8129750ee4edadb-microsoft-surface-laptop-4-13-inch.jpg",
    price: "94,999",
    specs: {
      RAM: "16 GB",
      ROM: "512 GB SSD",
      expandableMemory: "Not Expandable",
      display: "13.5-inch PixelSense Touchscreen",
      processor: "Intel Core i7",
      graphics: "Intel Iris Xe",
      operatingSystem: "Windows 10",
      battery: "Up to 15.5 hours",
    }
  },
  {
    id: "8",
    model: "Razer Blade 15",
    category:"laptop",
    image: "https://i.ebayimg.com/images/g/WHsAAOSwgZ9kAgYd/s-l500.jpg",
    price: "139,999",
    specs: {
      RAM: "32 GB",
      ROM: "1 TB SSD",
      expandableMemory: "Not Expandable",
      display: "15.6-inch 4K OLED Touchscreen",
      processor: "Intel Core i9",
      graphics: "NVIDIA RTX 3080",
      operatingSystem: "Windows 11",
      battery: "Up to 6 hours",
    }
  },
  {
    id: "9",
    model: "Lenovo ThinkPad X1 Carbon",
    category:"laptop",
    image: "https://images-cdn.ubuy.co.in/6549395e52b5c551e422f2b5-lenovo-thinkpad-x1-carbon-gen-9-14.jpg",
    price: "109,999",
    specs: {
      RAM: "16 GB",
      ROM: "512 GB SSD",
      expandableMemory: "Not Expandable",
      display: "14-inch WQHD",
      processor: "Intel Core i7",
      graphics: "Intel Iris Xe",
      operatingSystem: "Windows 10",
      battery: "Up to 15 hours",
    }
  },
  {
    id: "10",
    model: "Alienware m15 R6",
    category:"laptop",
    image: "https://images-cdn.ubuy.co.in/654939f758644426712def24-alienware-m15-r6-gaming-laptop-1t-ssd.jpg",
    price: "124,999",
    specs: {
      RAM: "32 GB",
      ROM: "1 TB SSD",
      expandableMemory: "Not Expandable",
      display: "15.6-inch FHD 360Hz",
      processor: "Intel Core i7",
      graphics: "NVIDIA RTX 3080",
      operatingSystem: "Windows 11",
      battery: "Up to 5 hours",
    }
  },
  {
    id: "11",
    model: "HP Envy x360",
    category:"laptop",
    image: "https://i.ebayimg.com/images/g/lS4AAOSwE7BkekDp/s-l500.jpg",
    price: "84,999",
    specs: {
      RAM: "16 GB",
      ROM: "512 GB SSD",
      expandableMemory: "Not Expandable",
      display: "13.3-inch Full HD Touchscreen",
      processor: "AMD Ryzen 7",
      graphics: "AMD Radeon Vega",
      operatingSystem: "Windows 11",
      battery: "Up to 12 hours",
    }
  },
  {
    id: "12",
    model: "Acer Swift 3",
    category:"laptop",
    image: "https://m.media-amazon.com/images/I/71Tllo8Gh+L._AC_SL1500_.jpg",
    price: "64,999",
    specs: {
      RAM: "8 GB",
      ROM: "512 GB SSD",
      expandableMemory: "Not Expandable",
      display: "14-inch Full HD IPS",
      processor: "AMD Ryzen 5",
      graphics: "AMD Radeon",
      operatingSystem: "Windows 10",
      battery: "Up to 8 hours",
    }

  },
  // hp

  {
    id: "13",
    model: "HP Spectre x360",
    category:"hp",
    image: "https://laptopmedia.com/wp-content/uploads/2023/11/61K5ZmebEEL._AC_SL1500_-680x521.jpg",
    price: "89,999",
    specs: {
      RAM: "16 GB",
      ROM: "512 GB SSD",
      expandableMemory: "Not Expandable",
      display: "13.3-inch 4K OLED Touchscreen",
      processor: "Intel Core i7",
      graphics: "Intel Iris Xe",
      operatingSystem: "Windows 11",
      battery: "Up to 10 hours",
    }
  },
  {
    id: "14",
    model: "HP Envy 15",
    category:"hp",
    image: "https://laptopmedia.com/wp-content/uploads/2023/11/61K5ZmebEEL._AC_SL1500_-680x521.jpg",
    price: "64,999",
    specs: {
      RAM: "12 GB",
      ROM: "1 TB HDD",
      expandableMemory: "Not Expandable",
      display: "15.6-inch Full HD IPS Touchscreen",
      processor: "Intel Core i5",
      graphics: "Intel UHD Graphics",
      operatingSystem: "Windows 10",
      battery: "Up to 7 hours",
    }
  },
  {
    id: "15",
    model: "HP Pavilion x360",
    category:"hp",
    image: "https://laptopmedia.com/wp-content/uploads/2020/07/1-37-680x561.jpg",
    price: "54,999",
    specs: {
      RAM: "8 GB",
      ROM: "256 GB SSD",
      expandableMemory: "Not Expandable",
      display: "14-inch Full HD IPS Touchscreen",
      processor: "Intel Core i3",
      graphics: "Intel UHD Graphics",
      operatingSystem: "Windows 10",
      battery: "Up to 6 hours",
    }
  },
  {
    id: "16",
    model: "HP Omen 15",
    category:"hp",
    image: "https://laptopmedia.com/wp-content/uploads/2023/06/71trlZDDb0L._AC_SL1500_-680x667.jpg",
    price: "79,999",
    specs: {
      RAM: "16 GB",
      ROM: "512 GB SSD",
      expandableMemory: "Not Expandable",
      display: "15.6-inch Full HD 144Hz",
      processor: "Intel Core i7",
      graphics: "NVIDIA GeForce GTX 1660 Ti",
      operatingSystem: "Windows 10",
      battery: "Up to 5 hours",
    }
  },
  {
    id: "17",
    model: "HP ProBook 450",
    category:"hp",
    image: "https://laptopmedia.com/wp-content/uploads/2023/09/71Eaw3tdYfL._AC_SL1500_-680x557.jpg",
    price: "54,999",
    specs: {
      RAM: "8 GB",
      ROM: "256 GB SSD",
      expandableMemory: "Not Expandable",
      display: "15.6-inch Full HD",
      processor: "Intel Core i5",
      graphics: "Intel UHD Graphics",
      operatingSystem: "Windows 10",
      battery: "Up to 8 hours",
    }
  },
  {
    id: "18",
    model: "HP Stream 14",
    category:"hp",
    image: "https://laptopmedia.com/wp-content/uploads/2020/07/1.1-680x452.jpg",
    price: "29,999",
    specs: {
      RAM: "4 GB",
      ROM: "64 GB eMMC",
      expandableMemory: "MicroSD Card Slot",
      display: "14-inch HD SVA",
      processor: "Intel Celeron",
      graphics: "Intel UHD Graphics",
      operatingSystem: "Windows 10",
      battery: "Up to 7 hours",
    }
  },
  {
    id: "19",
    model: "HP EliteBook 840",
    category:"hp",
    image: "https://laptopmedia.com/wp-content/uploads/2023/09/61f2N5Jz-8L._AC_SL1500_-680x572.jpg",
    price: "74,999",
    specs: {
      RAM: "16 GB",
      ROM: "512 GB SSD",
      expandableMemory: "Not Expandable",
      display: "14-inch Full HD",
      processor: "Intel Core i7",
      graphics: "Intel UHD Graphics",
      operatingSystem: "Windows 10",
      battery: "Up to 9 hours",
    }
  },
  {
    id: "20",
    model: "HP Chromebook 14",
    category:"hp",
    image: "https://laptopmedia.com/wp-content/uploads/2023/09/515d9dreY-L._AC_SL1280_-680x490.jpg",
    price: "24,999",
    specs: {
      RAM: "4 GB",
      ROM: "32 GB eMMC",
      expandableMemory: "MicroSD Card Slot",
      display: "14-inch HD SVA",
      processor: "Intel Celeron",
      graphics: "Intel HD Graphics",
      operatingSystem: "Chrome OS",
      battery: "Up to 12 hours",
    }
  },
  // lenovo
  {
    id: "21",
    model: "Lenovo ThinkPad X1 Carbon",
    category:"lenovo",
    image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "99,999",
    specs: {
      RAM: "16 GB",
      ROM: "512 GB SSD",
      expandableMemory: "Not Expandable",
      display: "14-inch 4K UHD Display",
      processor: "Intel Core i7",
      graphics: "Intel UHD Graphics",
      operatingSystem: "Windows 11",
      battery: "Up to 15 hours",
    }
  },
  {
    id: "22",
    model: "Lenovo IdeaPad 5",
    category:"lenovo",
    image: "https://www.notebookcheck.net/typo3temp/_processed_/3/9/csm_Lenovo_IdeaPad_5_15ALC05_Test_ce3caab4d3.jpg",
    price: "59,999",
    specs: {
      RAM: "12 GB",
      ROM: "1 TB HDD",
      expandableMemory: "Not Expandable",
      display: "15.6-inch Full HD IPS",
      processor: "AMD Ryzen 7",
      graphics: "AMD Radeon Graphics",
      operatingSystem: "Windows 10",
      battery: "Up to 8 hours",
    }
  },
  {
    id: "23",
    model: "Lenovo Yoga C940",
    category:"lenovo",
    image: "https://sm.mashable.com/t/mashable_in/review/l/lenovo-yog/lenovo-yoga-c940-14-inch-review-a-powerful-laptop-that-adapt_698k.1248.jpg",
    price: "79,999",
    specs: {
      RAM: "16 GB",
      ROM: "512 GB SSD",
      expandableMemory: "Not Expandable",
      display: "14-inch 4K UHD Touchscreen",
      processor: "Intel Core i5",
      graphics: "Intel Iris Plus Graphics",
      operatingSystem: "Windows 10",
      battery: "Up to 11 hours",
    }
  },
  {
    id: "24",
    model: "Lenovo Legion 5",
    category:"lenovo",
    image: "https://dolphincom.in/Admin/ProductImages/big/475_2547_RAW1.jpg",
    price: "74,999",
    specs: {
      RAM: "16 GB",
      ROM: "512 GB SSD",
      expandableMemory: "Not Expandable",
      display: "15.6-inch Full HD 144Hz",
      processor: "AMD Ryzen 5",
      graphics: "NVIDIA GeForce GTX 1650",
      operatingSystem: "Windows 10",
      battery: "Up to 6 hours",
    }
  },
  {
    id: "25",
    model: "Lenovo Flex 5",
    category:"lenovo",
    image: "https://laptopmedia.com/wp-content/uploads/2020/08/4-40-680x440.jpg",
    price: "49,999",
    specs: {
      RAM: "8 GB",
      ROM: "256 GB SSD",
      expandableMemory: "Not Expandable",
      display: "14-inch Full HD Touchscreen",
      processor: "AMD Ryzen 3",
      graphics: "AMD Radeon Graphics",
      operatingSystem: "Windows 10",
      battery: "Up to 10 hours",
    }
  },
  {
    id: "26",
    model: "Lenovo Chromebook Duet",
    category:"lenovo",
    image: "https://laptopmedia.com/wp-content/uploads/2021/11/1-27-e1637938722391-680x462.jpg",
    price: "24,999",
    specs: {
      RAM: "4 GB",
      ROM: "128 GB eMMC",
      expandableMemory: "Not Expandable",
      display: "10.1-inch FHD Touchscreen",
      processor: "MediaTek Helio P60T",
      graphics: "ARM Mali-G72 MP3",
      operatingSystem: "Chrome OS",
      battery: "Up to 10 hours",
    }
  },
  {
    id: "27",
    model: "Lenovo ThinkBook 14s",
    category:"lenovo",
    image: "https://laptopmedia.com/wp-content/uploads/2023/05/5-43-e1685532811759-680x652.jpg",
    price: "69,999",
    specs: {
      RAM: "16 GB",
      ROM: "512 GB SSD",
      expandableMemory: "Not Expandable",
      display: "14-inch Full HD IPS",
      processor: "Intel Core i5",
      graphics: "Intel UHD Graphics",
      operatingSystem: "Windows 10",
      battery: "Up to 8 hours",
    }
  },
  {
    id: "28",
    model: "Lenovo IdeaPad 3",
    category:"lenovo",
    image: "https://laptopmedia.com/wp-content/uploads/2021/05/2-53-e1621423361974.jpg",
    price: "34,999",
    specs: {
      RAM: "8 GB",
      ROM: "256 GB SSD",
      expandableMemory: "MicroSD Card Slot",
      display: "15.6-inch Full HD",
      processor: "AMD Ryzen 5",
      graphics: "AMD Radeon Graphics",
      operatingSystem: "Windows 10",
      battery: "Up to 6 hours",
    }
  },
  // mobiles

  {
    id: "29",
    category: "mobile",
    model: "iPhone 13 Pro",
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg",
    price: "99,999",
    specs: {
      RAM: "6 GB",
      ROM: "128 GB",
      expandableMemory: "Not Expandable",
      display: "6.1-inch Super Retina XDR",
      processor: "Apple A15 Bionic",
      camera: "Triple 12MP",
      operatingSystem: "iOS 15",
      battery: "Up to 75 hours audio playback",
    }
  },
  {
    id: "30",
    category: "mobile",
    model: "Samsung Galaxy S21 Ultra",
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg",
    price: "94,999",
    specs: {
      RAM: "12 GB",
      ROM: "128 GB",
      expandableMemory: "Up to 1 TB",
      display: "6.8-inch Dynamic AMOLED 2X",
      processor: "Exynos 2100",
      camera: "Quad 108MP",
      operatingSystem: "Android 11",
      battery: "Up to 25 hours talk time",
    }
  },
  {
    id: "31",
    category: "mobile",
    model: "Google Pixel 6 Pro",
    image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-6-pro-1.jpg",
    price: "89,499",
    specs: {
      RAM: "12 GB",
      ROM: "128 GB",
      expandableMemory: "Not Expandable",
      display: "6.7-inch P-OLED",
      processor: "Google Tensor",
      camera: "Triple 50MP",
      operatingSystem: "Android 12",
      battery: "Up to 34 hours talk time",
    }
  },
  {
    id: "32",
    category: "mobile",
    model: "OnePlus 9 Pro",
    image: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-9-pro-1.jpg",
    price: "64,999",
    specs: {
      RAM: "8 GB",
      ROM: "128 GB",
      expandableMemory: "Not Expandable",
      display: "6.7-inch Fluid AMOLED",
      processor: "Qualcomm Snapdragon 888",
      camera: "Quad 48MP",
      operatingSystem: "OxygenOS 11",
      battery: "Up to 30 hours talk time",
    }
  },
  {
    id: "33",
    category: "mobile",
    model: "Xiaomi Mi 11",
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-mi11-1.jpg",
    price: "49,999",
    specs: {
      RAM: "8 GB",
      ROM: "128 GB",
      expandableMemory: "Not Expandable",
      display: "6.81-inch AMOLED",
      processor: "Qualcomm Snapdragon 888",
      camera: "Triple 108MP",
      operatingSystem: "MIUI 12",
      battery: "Up to 21 hours talk time",
    }
  },
  {
    id: "34",
    category: "mobile",
    model: "Sony Xperia 1 III",
    image: "https://fdn2.gsmarena.com/vv/pics/sony/sony-xperia-1-iii-02.jpg",
    price: "84,999",
    specs: {
      RAM: "12 GB",
      ROM: "256 GB",
      expandableMemory: "Up to 1 TB",
      display: "6.5-inch 4K OLED",
      processor: "Qualcomm Snapdragon 888",
      camera: "Triple 12MP",
      operatingSystem: "Android 11",
      battery: "Up to 30 hours talk time",
    }
  },
  {
    id: "36",
    category: "mobile",
    model: "OnePlus Nord N20",
    image: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-n20-5g-1.jpg",
    price: "24,999",
    specs: {
      RAM: "4 GB",
      ROM: "64 GB",
      expandableMemory: "Up to 256 GB",
      display: "6.49-inch IPS LCD",
      processor: "Qualcomm Snapdragon 480",
      camera: "Triple 13MP",
      operatingSystem: "OxygenOS 11",
      battery: "Up to 30 hours talk time",
    }
  },
  {
    id: "37",
    category: "mobile",
    model: "Realme 8 Pro",
    image: "https://fdn2.gsmarena.com/vv/pics/realme/realme-8-pro-ofic-1.jpg",
    price: "16,999",
    specs: {
      RAM: "6 GB",
      ROM: "128 GB",
      expandableMemory: "Up to 256 GB",
      display: "6.4-inch Super AMOLED",
      processor: "Qualcomm Snapdragon 720G",
      camera: "Quad 108MP",
      operatingSystem: "Realme UI 2.0",
      battery: "Up to 35 hours talk time",
    }
  },
  {
    id: "38",
    category: "mobile",
    model: "Nokia X200",
    image: "https://techsomewhere.com/wp-content/uploads/2022/08/Nokia-X200-Ultra-2022-Specs-Price-Release-Date.jpg.jpeg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1",
    price: "22,999",
    specs: {
      RAM: "6 GB",
      ROM: "128 GB",
      expandableMemory: "Up to 512 GB",
      display: "6.67-inch IPS LCD",
      processor: "Qualcomm Snapdragon 480",
      camera: "Quad 64MP",
      operatingSystem: "Android 11",
      battery: "Up to 24 hours talk time",
    }
  },
  {
    id: "39",
    category: "mobile",
    model: "Oppo Find X3 Pro",
    image: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x3-pro-1.jpg",
    price: "74,999",
    specs: {
      RAM: "12 GB",
      ROM: "256 GB",
      expandableMemory: "Not Expandable",
      display: "6.7-inch AMOLED",
      processor: "Qualcomm Snapdragon 888",
      camera: "Quad 50MP",
      operatingSystem: "ColorOS 11",
      battery: "Up to 28 hours talk time",
    }
  },
  {
    id: "40",
    category: "mobile",
    model: "LG Velvet",
    image: "https://fdn2.gsmarena.com/vv/pics/lg/lg-velvet-1.jpg",
    price: "34,999",
    specs: {
      RAM: "6 GB",
      ROM: "128 GB",
      expandableMemory: "Up to 2 TB",
      display: "6.8-inch P-OLED",
      processor: "Qualcomm Snapdragon 765G",
      camera: "Triple 48MP",
      operatingSystem: "Android 10",
      battery: "Up to 25 hours talk time",
    }
  },
  {
    id: "41",
    category: "mobile",
    model: "Motorola Moto G Power (2021)",
    image: "https://fdn2.gsmarena.com/vv/pics/motorola/motorola-moto-g9-power-2021-1.jpg",
    price: "14,999",
    specs: {
      RAM: "4 GB",
      ROM: "64 GB",
      expandableMemory: "Up to 512 GB",
      display: "6.6-inch IPS LCD",
      processor: "Qualcomm Snapdragon 662",
      camera: "Triple 48MP",
      operatingSystem: "Android 10",
      battery: "Up to 51 hours talk time",
    }
  },

  // mi
  
    {
      id: "42",
      category: "mi",
      brand: "Xiaomi",
      model: "Mi 11",
      image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-mi11-1.jpg",
      price: "34,999",
      specs: {
        display: "6.81-inch AMOLED",
        processor: "Qualcomm Snapdragon 888",
        RAM: "8 GB",
        ROM: "128 GB",
        camera: "108MP Triple Rear, 20MP Front",
        battery: "4,600mAh",
        operatingSystem: "MIUI 12 based on Android 11",
      }
    },
    {
      id: "43",
      category: "mi",
      brand: "Xiaomi",
      model: "Mi 10T Pro",
      image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-mi-10t-pro-02.jpg",
      price: "29,999",
      specs: {
        display: "6.67-inch IPS LCD",
        processor: "Qualcomm Snapdragon 865",
        RAM: "8 GB",
        ROM: "128 GB",
        camera: "108MP Triple Rear, 20MP Front",
        battery: "5,000mAh",
        operatingSystem: "MIUI 12 based on Android 10",
      }
    },
    {
      id: "44",
      category: "mi",
      brand: "Xiaomi",
      model: "Redmi Note 10",
      image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note10-1.jpg",
      price: "13,999",
      specs: {
        display: "6.43-inch Super AMOLED",
        processor: "Qualcomm Snapdragon 678",
        RAM: "6 GB",
        ROM: "64 GB",
        camera: "48MP Quad Rear, 13MP Front",
        battery: "5,000mAh",
        operatingSystem: "MIUI 12 based on Android 11",
      }
    },
    {
      id: "45",
      category: "mi",
      brand: "Xiaomi",
      model: "Mi 11X Pro",
      image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-mi11x-pro-0.jpg",
      price: "39,999",
      specs: {
        display: "6.67-inch Super AMOLED",
        processor: "Qualcomm Snapdragon 888",
        RAM: "8 GB",
        ROM: "128 GB",
        camera: "108MP Triple Rear, 20MP Front",
        battery: "4,520mAh",
        operatingSystem: "MIUI 12 based on Android 11",
      }
    },
    {
      id: "46",
      category: "mi",
      brand: "Xiaomi",
      model: "Redmi 9",
      image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-9-0.jpg",
      price: "8,999",
      specs: {
        display: "6.53-inch IPS LCD",
        processor: "MediaTek Helio G80",
        RAM: "4 GB",
        ROM: "64 GB",
        camera: "13MP Quad Rear, 5MP Front",
        battery: "5,000mAh",
        operatingSystem: "MIUI 12 based on Android 10",
      }
    },
    {
      id: "47",
      category: "mi",
      brand: "Xiaomi",
      model: "Poco X3",
      image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-poco-x3-1.jpg",
      price: "16,999",
      specs: {
        display: "6.67-inch IPS LCD",
        processor: "Qualcomm Snapdragon 732G",
        RAM: "6 GB",
        ROM: "64 GB",
        camera: "64MP Quad Rear, 20MP Front",
        battery: "6,000mAh",
        operatingSystem: "MIUI 12 based on Android 10",
      }
    },
    {
      id: "48",
      category: "mi",
      brand: "Xiaomi",
      model: "Mi 10",
      image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-mi-10-5g-3.jpg",
      price: "44,999",
      specs: {
        display: "6.67-inch AMOLED",
        processor: "Qualcomm Snapdragon 865",
        RAM: "8 GB",
        ROM: "128 GB",
        camera: "108MP Quad Rear, 20MP Front",
        battery: "4,780mAh",
        operatingSystem: "MIUI 11 based on Android 10",
      }
    },
    {
      id: "49",
      category: "mi",
      brand: "Xiaomi",
      model: "Redmi 9A",
      image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/redmi-9a-01.jpg",
      price: "6,799",
      specs: {
        display: "6.53-inch IPS LCD",
        processor: "MediaTek Helio G25",
        RAM: "2 GB",
        ROM: "32 GB",
        camera: "13MP Rear, 5MP Front",
        battery: "5,000mAh",
        operatingSystem: "MIUI 12 based on Android 10",
      }
    },
  // iphone
 
    {
      id: "50",
      category: "iphone",
      brand: "Apple",
      model: "iPhone 13 Pro",
      image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg",
      price: "1,19,900",
      specs: {
        display: "6.1-inch Super Retina XDR",
        processor: "Apple A15 Bionic",
        RAM: "6 GB",
        storage: "128 GB",
        camera: "12MP Triple Rear, 12MP Front",
        battery: "3,240mAh",
        operatingSystem: "iOS 15",
      }
    },
    {
      id: "51",
      category: "iphone",
      brand: "Apple",
      model: "iPhone 13",
      image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg",
      price: "79,900",
      specs: {
        display: "6.1-inch Super Retina XDR",
        processor: "Apple A15 Bionic",
        RAM: "4 GB",
        storage: "128 GB",
        camera: "12MP Dual Rear, 12MP Front",
        battery: "3,240mAh",
        operatingSystem: "iOS 15",
      }
    },
    {
      id: "52",
      category: "iphone",
      brand: "Apple",
      model: "iPhone 13 mini",
      image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-mini-3.jpg",
      price: "69,900",
      specs: {
        display: "5.4-inch Super Retina XDR",
        processor: "Apple A15 Bionic",
        RAM: "4 GB",
        storage: "128 GB",
        camera: "12MP Dual Rear, 12MP Front",
        battery: "2,438mAh",
        operatingSystem: "iOS 15",
      }
    },
    {
      id: "53",
      category: "iphone",
      brand: "Apple",
      model: "iPhone 12 Pro Max",
      image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-3.jpg",
      price: "1,29,900",
      specs: {
        display: "6.7-inch Super Retina XDR",
        processor: "Apple A14 Bionic",
        RAM: "6 GB",
        storage: "128 GB",
        camera: "12MP Triple Rear, 12MP Front",
        battery: "3,687mAh",
        operatingSystem: "iOS 14",
      }
    },
    {
      id: "54",
      category: "iphone",
      brand: "Apple",
      model: "iPhone 12",
      image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg",
      price: "79,900",
      specs: {
        display: "6.1-inch Super Retina XDR",
        processor: "Apple A14 Bionic",
        RAM: "4 GB",
        storage: "128 GB",
        camera: "12MP Dual Rear, 12MP Front",
        battery: "2,815mAh",
        operatingSystem: "iOS 14",
      }
    },
    {
      id: "55",
      category: "iphone",
      brand: "Apple",
      model: "iPhone SE (2nd Gen)",
      image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-se-2020-1.jpg",
      price: "37,900",
      specs: {
        display: "4.7-inch Retina HD",
        processor: "Apple A13 Bionic",
        RAM: "3 GB",
        storage: "64 GB",
        camera: "12MP Single Rear, 7MP Front",
        battery: "1,821mAh",
        operatingSystem: "iOS 13",
      }
    },
    {
      id: "56",
      category: "iphone",
      brand: "Apple",
      model: "iPhone 11",
      image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-1.jpg",
      price: "54,900",
      specs: {
        display: "6.1-inch Liquid Retina",
        processor: "Apple A13 Bionic",
        RAM: "4 GB",
        storage: "64 GB",
        camera: "12MP Dual Rear, 12MP Front",
        battery: "3,110mAh",
        operatingSystem: "iOS 13",
      }
    },
    {
      id: "57",
      category: "iphone",
      brand: "Apple",
      model: "iPhone XR",
      image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-xr-6.jpg",
      price: "47,900",
      specs: {
        display: "6.1-inch Liquid Retina",
        processor: "Apple A12 Bionic",
        RAM: "3 GB",
        storage: "64 GB",
        camera: "12MP Single Rear, 7MP Front",
        battery: "2,942mAh",
        operatingSystem: "iOS 12",
      }
    },

    // electronics
  
      {
        id: "58",
        category: "electronics",
        model: "Samsung Front Load Washer",
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/ww80t504dan-tl/gallery/in-front-loading-washer-ww10t534daws1-374541-ww80t504dan-tl-383418985?$1300_1038_PNG$",
        price: "28,999",
        specs: {
          type: "Front Load",
          capacity: "7.5 kg",
          washPrograms: "12",
          energyRating: "4-star",
          features: "Quick Wash, Inverter Motor",
        }
      },
      {
        id: "59",
        category: "electronics",
        model: "Sony 55-inch 4K Smart TV",
        image: "https://d2xamzlzrdbdbn.cloudfront.net/products/c65b6ac9-3d4c-465c-8fd7-afe7cef689fc23091042.jpg",
        price: "56,999",
        specs: {
          type: "4K LED Smart TV",
          size: "55 inches",
          resolution: "4K Ultra HD",
          smartFeatures: "Android TV, Voice Remote",
        }
      },
      {
        id: "60",
        category: "electronics",
        model: "LG 1.5 Ton Split AC",
        image: "https://d2xamzlzrdbdbn.cloudfront.net/products/6816da32-32f6-4204-b096-bd764c5eed8d23311010.jpg",
        price: "36,499",
        specs: {
          type: "Split AC",
          coolingCapacity: "1.5 Ton",
          energyRating: "3-star",
          features: "Dual Inverter, Sleep Mode",
        }
      },
      {
        id: "61",
        category: "electronics",
        model: "OnePlus 9",
        image: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-9-pro-1.jpg",
        price: "39,999",
        specs: {
          RAM: "8 GB",
          ROM: "128 GB",
          expandableMemory: "Not Expandable",
          display: "6.55-inch Fluid AMOLED",
          processor: "Qualcomm Snapdragon 888",
          camera: "Triple 48MP",
          operatingSystem: "OxygenOS 11",
          battery: "Up to 28 hours talk time",
        }
      },
      {
        id: "62",
        category: "electronics",
        model: "Acer Aspire 5",
        image: "https://www.notebookcheck.net/fileadmin/_processed_/8/7/csm_Acer_Aspire_5_A515_56_Intro_eca7c37ead.jpg",
        price: "49,999",
        specs: {
          RAM: "8 GB",
          ROM: "256 GB SSD",
          expandableMemory: "Not Expandable",
          display: "15.6-inch Full HD",
          processor: "AMD Ryzen 5",
          graphics: "AMD Radeon Vega",
          operatingSystem: "Windows 10",
          battery: "Up to 7 hours",
        }
      },
      {
        id: "63",
        category: "electronics",
        model: "Whirlpool Double Door Refrigerator",
        image: "https://ganeshmarketing.myshopify.com/cdn/shop/products/51IsH5YKG1L._SL1100_716x@2x.progressive.jpg?v=1627825022",
        price: "25,999",
        specs: {
          type: "Double Door",
          capacity: "245 liters",
          defrostType: "Frost-Free",
          features: "Convertible, 6th Sense DeepFreeze",
        }
      },
      {
        id: "64",
        category: "electronics",
        model: "LG Top Load Washer",
        image: "https://static.toiimg.com/thumb/resizemode-4,msid-97099786,width-250,imgv-7/97099786.jpg",
        price: "22,499",
        specs: {
          type: "Top Load",
          capacity: "6.5 kg",
          washPrograms: "10",
          energyRating: "3-star",
          features: "Turbo Drum, Smart Diagnosis",
        }
      },
      {
        id: "65",
        category: "electronics",
        model: "Samsung 75-inch QLED TV",
        image: "https://d2xamzlzrdbdbn.cloudfront.net/products/50103063-2805-4cd4-abf4-0c1c5565869d23050639.jpg",
        price: "109,999",
        specs: {
          type: "QLED Smart TV",
          size: "75 inches",
          resolution: "4K Ultra HD",
          smartFeatures: "Tizen OS, Quantum HDR",
        }
      },
      {
        id: "66",
        category: "electronics",
        model: "Daikin 2 Ton Split AC",
        image: "https://www.aldahome.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/d/a/daikin-gtkl71tv16t-2-2-ton-3-star-inverter-split-ac.jpg",
        price: "54,999",
        specs: {
          type: "Split AC",
          coolingCapacity: "2 Ton",
          energyRating: "5-star",
          features: "Neo Swing Inverter, Econo Mode",
        }
      },
      {
        id: "67",
        category: "electronics",
        model: "Xiaomi Redmi Note 10 Pro",
        image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note10-pro-1.jpg",
        price: "17,999",
        specs: {
          RAM: "6 GB",
          ROM: "128 GB",
          expandableMemory: "Up to 512 GB",
          display: "6.67-inch Super AMOLED",
          processor: "Qualcomm Snapdragon 732G",
          camera: "Quad 64MP",
          operatingSystem: "MIUI 12",
          battery: "Up to 25 hours talk time",
        }
      },
      {
        id: "68",
        category: "electronics",
        model: "Dell Inspiron 14",
        image: "https://cdn1.smartprix.com/rx-iIlXYbnIq-w420-h420/dell-inspiron-14-543.webp",
        price: "52,999",
        specs: {
          RAM: "8 GB",
          ROM: "512 GB SSD",
          expandableMemory: "Not Expandable",
          display: "14-inch Full HD",
          processor: "Intel Core i5",
          graphics: "Intel UHD Graphics",
          operatingSystem: "Windows 10",
          battery: "Up to 8 hours",
        }
      },
      {
        id: "69",
        category: "electronics",
        model: "LG Side-by-Side Refrigerator",
        image: "https://jamesandco.in/cdn/shop/files/613Lg-geumL._SL1500_600x.jpg?v=1695120131",
        price: "74,999",
        specs: {
          type: "Side-by-Side",
          capacity: "601 liters",
          defrostType: "Frost-Free",
          features: "Inverter Linear Compressor, DoorCooling+",
        }
      },
      // fashion
      
        {
          id: "70",
          category: "fashion",
          product: "Men's Leather Jacket",
          image: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: "2,999",
          specs: {
            material: "Genuine Leather",
            size: "M",
            color: "Black",
            features: "Zipper Closure, Pockets",
          }
        },
 
        {
          id: "71",
          category: "fashion",
          product: "Men's Classic Oxford Shirt",
          image: "https://images.pexels.com/photos/12793815/pexels-photo-12793815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: "899",
          specs: {
            material: "Cotton",
            size: "L",
            color: "White",
            features: "Button-Down Collar, Long Sleeves",
          }
        },

        {
          id: "72",
          category: "fashion",
          product: "Men's Sneakers",
          image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: "1,499",
          specs: {
            material: "Canvas",
            size: "9",
            color: "Red",
            features: "Lace-up Closure, Rubber Sole",
          }
        },
        {
          id: "73",
          category: "fashion",
          product: "Women's Crossbody Bag",
          image: "https://images.pexels.com/photos/167703/pexels-photo-167703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: "799",
          specs: {
            material: "Faux Leather",
            color: "Brown",
            features: "Adjustable Strap, Zipper Closure",
          }
        },
        {
          id: "74",
          category: "fashion",
          product: "Men's Formal Suit",
          image: "https://images.pexels.com/photos/4963371/pexels-photo-4963371.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: "4,999",
          specs: {
            material: "Wool Blend",
            size: "42R",
            color: "Navy Blue",
            features: "Single-Breasted, Two-Piece",
          }
        },
        {
          id: "75",
          category: "fashion",
          product: "Women's Ankle Boots",
          image: "https://media.istockphoto.com/id/627429942/photo/womens-shoes.jpg?s=2048x2048&w=is&k=20&c=5gHrfiW8Aj_C3MlqA9uAsvRnEaJW7f5Mwx2vNhIqFq4=",
          price: "2,199",
          specs: {
            material: "Suede",
            size: "8",
            color: "Black",
            features: "Block Heel, Zipper Closure",
          }
        },
        {
          id: "76",
          category: "fashion",
          product: "Men's Polo Shirt",
          image: "https://neemans.com/cdn/shop/products/ND-RelivePolo-ClassicBlackb_1000x.jpg?v=1684570237",
          price: "699",
          specs: {
            material: "Cotton",
            size: "XL",
            color: "Green",
            features: "Short Sleeves, Embroidered Logo",
          }
        },
        {
          id: "77",
          category: "fashion",
          product: "Women's Sunglasses",
          image: "https://images.unsplash.com/photo-1547194444-a435dc9fc2aa?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: "499",
          specs: {
            frameMaterial: "Acetate",
            lensColor: "Brown",
            features: "UV Protection, Oversized Frames",
          }
        },
        {
          id: "78",
          category: "fashion",
          product: "Men's Cargo Shorts",
          image: "https://contents.mediadecathlon.com/p2481093/3ff85525603376cba609c96248875e40/p2481093.jpg?format=auto&quality=70&f=1024x0",
          price: "899",
          specs: {
            material: "Cotton",
            size: "L",
            color: "Khaki",
            features: "Multiple Pockets, Belt Loops",
          }
        },
        {
          id: "79",
          category: "fashion",
          product: "Women's Cardigan Sweater",
          image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: "1,199",
          specs: {
            material: "Knit",
            size: "M",
            color: "Gray",
            features: "Button Front, Ribbed Hem",
          }

        },

        // change it
        {
          id: "80",
          category: "fashion",
          product: "Women's Cardigan Sweater",
          image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: "1,199",
          specs: {
            material: "Knit",
            size: "M",
            color: "Gray",
            features: "Button Front, Ribbed Hem",
          }

        },
        {
          id: "81",
          category: "fashion",
          product: "Women's Cardigan Sweater",
          image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: "1,199",
          specs: {
            material: "Knit",
            size: "M",
            color: "Gray",
            features: "Button Front, Ribbed Hem",
          }

        },
// grocery....

  {
    id: "82",
    category: "grocery",
    product: "Organic Apples",
    image: "https://freshindiaorganics.com/cdn/shop/files/Untitleddesign_16.png?v=1686739530",
    price: "99 per kg",
    specs: {
      type: "Red Delicious",
      origin: "Local",
      weight: "1 kg",
      features: "Organically Grown",
    }
  },
  {
    id: "83",
    category: "grocery",
    product: "Basmati Rice",
    image: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1fe016dc-f8ca-4934-94ad-1a72eea9b142_425x425.jpg",
    price: "349 for 5 kg",
    specs: {
      type: "Basmati",
      brand: "Best Quality",
      weight: "5 kg",
      features: "Long-Grain, Aromatic",
    }
  },
  {
    id: "84",
    category: "grocery",
    product: "Fresh Milk",
    image: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1000644_1_425x425.jpg",
    price: "42 per liter",
    specs: {
      type: "Cow's Milk",
      source: "Local Dairy",
      quantity: "1 liter",
      features: "Full Fat, Pasteurized",
    }
  },
  {
    id: "85",
    category: "grocery",
    product: "Whole Wheat Bread",
    image: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/653cc3d9-9b19-49b4-9162-bdebb1f8ebe5_425x425.jpg",
    price: "25 per loaf",
    specs: {
      brand: "NutriBake",
      type: "Whole Wheat",
      quantity: "1 loaf",
      features: "High Fiber, No Preservatives",
    }
  },
  {
    id: "86",
    category: "grocery",
    product: "Fresh Eggs",
    image: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/80dbaa87-f158-42e8-963a-3e72ed005729_425x425.jpg",
    price: "48 per dozen",
    specs: {
      type: "Farm Fresh",
      source: "Local Farm",
      quantity: "12 eggs",
      features: "Grade A, Cage-Free",
    }
  },
  {
    id: "87",
    category: "grocery",
    product: "Pasta",
    image: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1174253_1_425x425.jpg",
    price: "49 for 500g",
    specs: {
      type: "Spaghetti",
      brand: "Italian Delights",
      weight: "500g",
      features: "Durum Wheat Semolina",
    }
  },
  {
    id: "88",
    category: "grocery",
    product: "Fresh Oranges",
    image: "https://www.bigbasket.com/media/uploads/p/l/20000910_12-fresho-orange-imported.jpg?tr=w-640,q=80",
    price: "60 per dozen",
    specs: {
      type: "Navel Oranges",
      origin: "Local",
      quantity: "12 oranges",
      features: "Juicy, Vitamin C-rich",
    }
  },
  {
    id: "89",
    category: "grocery",
    product: "Ground Coffee",
    image: "https://www.bigbasket.com/media/uploads/p/l/40161608-5_2-continental-malgudi-filter-coffee-pouch-8020.jpg?tr=w-640,q=80",
    price: "199 for 250g",
    specs: {
      type: "Arabica",
      brand: "RoastMaster",
      weight: "250g",
      features: "Medium Roast, Fine Grind",
    }
  },
  {
    id: "90",
    category: "grocery",
    product: "Canned Tomatoes",
    image: "https://www.bigbasket.com/media/uploads/p/l/303001_4-spc-diced-tomatoes-onion-garlic-basil.jpg?tr=w-640,q=80",
    price: "30 per can",
    specs: {
      type: "Diced Tomatoes",
      brand: "Chef's Choice",
      quantity: "400g",
      features: "No Added Preservatives",
    }
  },
  {
    id: "91",
    category: "grocery",
    product: "Black Beans",
    image: "https://www.bigbasket.com/media/uploads/p/l/30000108_10-bb-royal-chawli-lobia-black-eye.jpg?tr=w-640,q=80",
    price: "35 per 500g",
    specs: {
      type: "Black Beans",
      brand: "Nature's Best",
      weight: "500g",
      features: "High in Protein, Fiber",
    }
  },
  {
    id: "92",
    category: "grocery",
    product: "Honey",
    image: "https://www.bigbasket.com/media/uploads/p/l/40295344-4_7-dabur-honey-100-pure-no-sugar-adulteration.jpg?tr=w-640,q=80",
    price: "75 for 250g",
    specs: {
      type: "Pure Honey",
      brand: "Golden Harvest",
      weight: "250g",
      features: "Unprocessed, Raw",
    }
  },
  {
    id: "93",
    category: "grocery",
    product: "Potatoes",
    image: "https://www.bigbasket.com/media/uploads/p/l/10000159_27-fresho-potato.jpg?tr=w-640,q=80",
    price: "30 per kg",
    specs: {
      type: "Russet Potatoes",
      origin: "Local",
      weight: "1 kg",
      features: "Fresh, Versatile",
    }
  },

  // mens
        {
          id: "94",
          category: "men",
          type: "Shirt",
          brand: "Hugo Boss",
          model: "Slim Fit Dress Shirt",
          color: "White",
          price: "2,499",
          material: "Cotton",
          size: "M",
          sleeveLength: "Long Sleeve",
          image: "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          id: "95",
          category: "men",
          type: "T-Shirt",
          brand: "Nike",
          model: "Sportswear Club Tee",
          color: "Black",
          price: "799",
          material: "Cotton",
          size: "L",
          sleeveLength: "Short Sleeve",
          image: "https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          id: "96",
          category: "men",
          type: "Jeans",
          brand: "Levi's",
          model: "501 Original Fit Jeans",
          color: "Blue",
          price: "2,299",
          material: "Denim",
          size: "32W x 32L",
          fit: "Regular",
          image: "https://images.pexels.com/photos/17504550/pexels-photo-17504550/free-photo-of-tattoos-on-man-arm.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          id: "97",
          category: "men",
          type: "Suit",
          brand: "Calvin Klein",
          model: "Modern Fit Suit",
          color: "Navy",
          price: "12,999",
          material: "Wool",
          size: "40R",
          includedItems: "Jacket, Pants",
          image: "https://images.pexels.com/photos/18983273/pexels-photo-18983273/free-photo-of-portrait-of-man-in-suit-and-sunglasses-by-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          id: "98",
          category: "men",
          type: "Sneakers",
          brand: "Adidas",
          model: "Originals Superstar",
          color: "White/Black",
          price: "4,999",
          material: "Leather",
          size: "9",
          image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id: "99",
          category: "men",
          type: "Jacket",
          brand: "The North Face",
          model: "Resolve 2 Jacket",
          color: "Red",
          price: "3,499",
          material: "Nylon",
          size: "L",
          image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id: "100",
          category: "men",
          type: "Polo Shirt",
          brand: "Ralph Lauren",
          model: "Classic Fit Polo",
          color: "Navy",
          price: "1,799",
          material: "Cotton",
          size: "XL",
          sleeveLength: "Short Sleeve",
          image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id: "101",
          category: "men",
          type: "Chinos",
          brand: "Dockers",
          model: "Alpha Khaki Pants",
          color: "Khaki",
          price: "1,299",
          material: "Cotton",
          size: "34W x 30L",
          fit: "Slim",
          image: "https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
      
    // womens
       
   
      {
        id: "102",
        category: "women",
        type: "Dress",
        brand: "Zara",
        model: "Floral Maxi Dress",
        color: "Red Floral",
        price: "1,499",
        material: "Polyester",
        size: "M",
        sleeveLength: "Sleeveless",
        image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
    
      {
        id: "103",
        category: "women",
        type: "Jeans",
        brand: "Levi's",
        model: "High-Rise Skinny Jeans",
        color: "Blue",
        price: "2,499",
        material: "Denim",
        size: "28W x 30L",
        fit: "Skinny",
        image: "https://5.imimg.com/data5/BK/MZ/BQ/SELLER-91626189/ladies-side-strip-denim-jeans-500x500.jpg"
      },
      {
        id: "104",
        category: "women",
        type: "Evening Gown",
        brand: "Vera Wang",
        model: "A-Line Evening Gown",
        color: "Navy",
        price: "8,999",
        material: "Satin",
        size: "6",
        image: "https://images.unsplash.com/photo-1581798149113-2e4c2e539c5a?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "105",
        category: "women",
        type: "Heels",
        brand: "Jimmy Choo",
        model: "Anouk Pointed-Toe Pumps",
        color: "Black",
        price: "6,499",
        material: "Leather",
        size: "US 8",
        image: "https://images.unsplash.com/photo-1613987876445-fcb353cd8e27?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "106",
        category: "women",
        type: "Coat",
        brand: "Burberry",
        model: "Trench Coat",
        color: "Beige",
        price: "12,999",
        material: "Cotton",
        size: "M",
        image: "https://plus.unsplash.com/premium_photo-1691367279381-0bc5f1048916?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
   
      {
        id: "107",
        category: "women",
        type: "Skirt",
        brand: "Gucci",
        model: "Pleated Mini Skirt",
        color: "Red",
        price: "2,799",
        material: "Wool",
        size: "S",
        image: "https://plus.unsplash.com/premium_photo-1675034373957-e43456dd3995?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "108",
        category: "women",
        type: "Lipstick",
        brand: "MAC",
        model: "Matte Lipstick",
        color: "Ruby Woo",
        price: "1,599",
        material: "Matte Finish",
        image: "https://images.unsplash.com/photo-1610844228349-76b56e6ac462?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
        {
        id: "109",
        category: "women",
        type: "Eyeliner",
        brand: "Maybelline",
        model: "Liquid Eyeliner",
        color: "Black",
        price: "299",
        material: "Liquid",
        image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      // accessories
       
      
        {
          id: "110",
          name: "Wireless Earbuds",
          category: "accessories",
          type: "Audio",
          image:"https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: "2,999",
          color: "Black",
          brand: "Sony",
        },
        {
          id: "111",
          name: "Smartwatch",
          category: "accessories",
          type: "Wearable",
          image:"https://images.pexels.com/photos/3783416/pexels-photo-3783416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: "4,499",
          color: "Silver",
          brand: "Samsung",
        },
        {
          id: "112",
          name: "Gaming Mouse",
          category: "accessories",
          type: "Gaming",
          image:"https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: "1,999",
          color: "RGB",
          brand: "Logitech",
        },
        {
          id: "113",
          name: "Laptop Backpack",
          category: "accessories",
          type: "Bags",
          image:"https://images.pexels.com/photos/9407366/pexels-photo-9407366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: "899",
          color: "Gray",
          brand: "HP",
        },
        {
          id: "114",
          name: "Wireless Charging Pad",
          category: "accessories",
          type: "Charging",
          image:"https://images.pexels.com/photos/7742588/pexels-photo-7742588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: "1,499",
          color: "White",
          brand: "Belkin",
        },
        {
          id: "115",
          name: "Bluetooth Speaker",
          category: "accessories",
          type: "Audio",
          image:"https://images.pexels.com/photos/9767549/pexels-photo-9767549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: "2,799",
          color: "Red",
          brand: "JBL",
        },
        {
          id: "116",
          name: "Webcam",
          category: "accessories",
          type: "Accessories",
          image:"https://images.pexels.com/photos/7172701/pexels-photo-7172701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: "999",
          color: "Black",
          brand: "Logitech",
        },
        {
          id: "117",
          name: "External Hard Drive",
          category: "accessories",
          type: "Storage",
          image:"https://images.pexels.com/photos/4633278/pexels-photo-4633278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: "3,299",
          color: "Silver",
          brand: "Seagate",
        },
        {
          id: "118",
          name: "USB-C Hub",
          category: "accessories",
          type: "Accessories",
          image:"https://images.pexels.com/photos/7742589/pexels-photo-7742589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: "899",
          color: "Silver",
          brand: "Anker",
        },
        {
          id: "119",
          name: "Screen Protector",
          category: "accessories",
          type: "Protection",
          image:"https://images.pexels.com/photos/3999536/pexels-photo-3999536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: "299",
          color: "Clear",
          brand: "Spigen",
        },
        {
          id: "120",
          name: "Wireless Mouse",
          category: "accessories",
          type: "Gaming",
          image:"https://images.pexels.com/photos/7006952/pexels-photo-7006952.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: "1,799",
          color: "Black",
          brand: "Razer",
        },
        {
          id: "121",
          name: "Phone Case",
          category: "accessories",
          type: "Protection",
          image:"https://images.pexels.com/photos/5531122/pexels-photo-5531122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: "499",
          color: "Blue",
          brand: "OtterBox",
        },


        // crousal...
        {id:"122",
        author:"Ben Moore",
        category: "crousal",
        download_url:"https://i.gadgets360cdn.com/large/big_diwali_sale_flipkart_1665408801338.jpg?downsize=950:*"
    },


        {id:"123",
         author:"Ilham Rahmansyah",
         category: "crousal",
        download_url:"https://img.freepik.com/free-vector/happy-diwali-sale-banner-with-discount-details-pink-background_1017-39845.jpg?w=1380&t=st=1699535609~exp=1699536209~hmac=ba57d51bf523d8d30997cd223b3a5c913513c2c76c5e4429501c66fbba769eea"
    },

        {id:"124",
        author:"Dyaa Eldin",
        category: "crousal",
        download_url:"https://img.freepik.com/free-vector/banner-online-black-friday-sale-with-smarthphone_125540-264.jpg?w=1060&t=st=1699535710~exp=1699536310~hmac=ac67f54193c7ec9d5ee22e1fc8f85143449cf9e64eb1c4b014be50cc25735315"
    },
       {id:"125",
        author:"Dyaa Eldin",
        category: "crousal",
        download_url:"https://img.freepik.com/free-vector/realistic-cyber-monday-twitter-header_23-2149816807.jpg?w=1380&t=st=1699536150~exp=1699536750~hmac=203172acaedc1d10569b47080cba2ffce1bde27feb76bb043e2cf5935e6ec7ca"
    },

    // home
    {
      id: "126",
      category: "home",
      model: "Sony 55-inch 4K Smart TV",
      image: "https://d2xamzlzrdbdbn.cloudfront.net/products/c65b6ac9-3d4c-465c-8fd7-afe7cef689fc23091042.jpg",
      price: "56,999",
      specs: {
        type: "4K LED Smart TV",
        size: "55 inches",
        resolution: "4K Ultra HD",
        smartFeatures: "Android TV, Voice Remote",
      }
    },
    {
      id: "127",
      category: "home",
      model: "OnePlus 9",
      image: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-9-pro-1.jpg",
      price: "39,999",
      specs: {
        RAM: "8 GB",
        ROM: "128 GB",
        expandableMemory: "Not Expandable",
        display: "6.55-inch Fluid AMOLED",
        processor: "Qualcomm Snapdragon 888",
        camera: "Triple 48MP",
        operatingSystem: "OxygenOS 11",
        battery: "Up to 28 hours talk time",
      }
    },
    {
      id: "128",
      category: "home",
      model: "Daikin 2 Ton Split AC",
      image: "https://www.aldahome.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/d/a/daikin-gtkl71tv16t-2-2-ton-3-star-inverter-split-ac.jpg",
      price: "54,999",
      specs: {
        type: "Split AC",
        coolingCapacity: "2 Ton",
        energyRating: "5-star",
        features: "Neo Swing Inverter, Econo Mode",
      }
    },
    {
      id: "129",
      model: "Lenovo Yoga C940",
      category:"home",
      image: "https://m.media-amazon.com/images/I/71w0QN1kgvL._AC_SL1500_.jpg",
      price: "92,999",
      specs: {
        RAM: "16 GB",
        ROM: "512 GB SSD",
        expandableMemory: "Not Expandable",
        display: "14-inch 4K Ultra HD Touchscreen",
        processor: "Intel Core i7",
        graphics: "Intel Iris Plus",
        operatingSystem: "Windows 10",
        battery: "Up to 10 hours",
      }
    },
    {
      id: "130",
      category: "home",
      model: "Xiaomi Mi 11",
      image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-mi11-1.jpg",
      price: "49,999",
      specs: {
        RAM: "8 GB",
        ROM: "128 GB",
        expandableMemory: "Not Expandable",
        display: "6.81-inch AMOLED",
        processor: "Qualcomm Snapdragon 888",
        camera: "Triple 108MP",
        operatingSystem: "MIUI 12",
        battery: "Up to 21 hours talk time",
      }
    },
    {
      id: "131",
      category: "home",
      product: "Men's Sneakers",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "1,499",
      specs: {
        material: "Canvas",
        size: "9",
        color: "Red",
        features: "Lace-up Closure, Rubber Sole",
      }
    },
    {
      id: "133",
      category: "home",
      product: "Women's Sunglasses",
      image: "https://images.unsplash.com/photo-1547194444-a435dc9fc2aa?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "499",
      specs: {
        frameMaterial: "Acetate",
        lensColor: "Brown",
        features: "UV Protection, Oversized Frames",
      }
    },
    {
      id: "134",
      category: "home",
      model: "Samsung Front Load Washer",
      image: "https://images.samsung.com/is/image/samsung/p6pim/in/ww80t504dan-tl/gallery/in-front-loading-washer-ww10t534daws1-374541-ww80t504dan-tl-383418985?$1300_1038_PNG$",
      price: "28,999",
      specs: {
        type: "Front Load",
        capacity: "7.5 kg",
        washPrograms: "12",
        energyRating: "4-star",
        features: "Quick Wash, Inverter Motor",
      }
    },

]







      
      module.exports={global}
      
    
      


      
      
      
      