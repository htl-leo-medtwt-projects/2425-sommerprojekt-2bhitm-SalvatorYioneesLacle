let devices = [
    {
        type: [
            {
                name: "OMEN Gaming Laptop 17-db0575ng (A5SG7EA)",
                img: `./img/laptops/OMEN-Gaming-Laptop-17-db0575ng.png`,
                os: "Windows 11 Home",
                displaySize: 17.3,
                displayRes: 1080,
                ram: 16,
                rom: 1024,
                cpu: "AMD Ryzen™ 7 8845HS",
                price: 1438.00,
                batteryLife: 7,
                usage: 'Gaming'
            },
            {
                name: "HP EliteBook 1040 14 Zoll G11 Notebook-PC (A26RLEA)",
                img: `./img/laptops/hp-elitebook-1040-g11.png`,
                os: "Windows 11 Pro",
                displaySize: 14,
                displayRes: 1200,
                ram: 16,
                rom: 512,
                cpu: "Intel® Core™ Ultra 7 155H",
                price: 2255.00,
                batteryLife: 7,
                usage: 'Home'
            },
            {
                name: "Victus Gaming Laptop 15-fb2801ng (A2VD1EA)",
                img: `./img/laptops/Victus-Gaming-Laptop-15.png`,
                os: "Windows 11 Home",
                displaySize: 15.6,
                displayRes: 1080,
                ram: 16,
                rom: 512,
                cpu: "AMD Ryzen™ 5 8645HS",
                price: 899.00,
                batteryLife: 7.75,
                usage: 'Gaming'
            },
            {
                name: "HP EliteBook Ultra 14 Zoll G1q Notebook-AI-PC (A26TLEA)",
                img: `./img/laptops/HP-EliteBook-Ultra-14.png`,
                os: "Windows 11 Pro",
                displaySize: 14,
                displayRes: 2200,
                ram: 16,
                rom: 1024,
                cpu: "Qualcomm® Snapdragon® X1E-78-100",
                price: 2219.00,
                batteryLife: -1,
                usage: 'Home'
            },
            {
                name: "HP Elite x360 1040 14 Zoll G11 2-in-1-Notebook-PC (A26QTEA)",
                img: `./img/laptops/HP-Elite-x360-1040-14-Zoll-G11.png`,
                os: "Windows 11 Pro",
                displaySize: 14,
                displayRes: 2800,
                ram: 32,
                rom: 1024,
                cpu: "Intel® Core™ Ultra 7 155H",
                price: 2489.00,
                batteryLife: -1,
                usage: 'Home'
            },
            {
                name: "HP Laptop 17-cp0147ng (A17ZFEA)",
                img: `./img/laptops/HP-Laptop-17-cp0147ng-(A17ZFEA).png`,
                os: "FreeDOS 3.0",
                displaySize: 17.3,
                displayRes: 1080,
                ram: 16,
                rom: 512,
                cpu: "AMD Ryzen™ 5 5500U",
                price: 499.00,
                batteryLife: 8.25,
                usage: 'Home/Business'
            },
            {
                name: "HP ProBook 440 14 Zoll G11 Notebook-PC (9C0C1EA)",
                img: `./img/laptops/HP-ProBook-440-14-Zoll-G11.png`,
                os: "Windows 11 Pro",
                displaySize: 14,
                displayRes: 1200, // If displayRes == 1200: WUXGA
                ram: 8,
                rom: 256,
                cpu: "Intel® Core™ Ultra 5 125U",
                price: 1029.00,
                batteryLife: -1,
                usage: 'Business'
            },
            {
                name: "HP Spectre x360 2-in-1 Laptop 14-eu0769ng (A95HXEA)",
                img: `./img/laptops/HP-Spectre-x360-2-in-1.png`,
                os: "Windows 11 Home",
                displaySize: 14,
                displayRes: 3000,
                ram: 32,
                rom: 2048,
                cpu: "Intel® Core™ Ultra 7 155H",
                price: 1899.00,
                batteryLife: 13,
                usage: 'Home'
            },
            {
                name: "OMEN Gaming Laptop 16-wf1901ng (9V2R1EA)",
                img: `./img/laptops/OMEN-Gaming-Laptop-16.png`,
                os: "Windows 11 Home",
                displaySize: 16.1,
                displayRes: 1440,
                ram: 32,
                rom: 2048,
                cpu: "Intel® Core™ i9 14900HX",
                price: 2873.86,
                batteryLife: 4.75,
                usage: 'Gaming'
            },
            {
                name: "HP Dragonfly 13,5 Zoll G4 Notebook-PC (818N4EA)",
                img: `./img/laptops/HP-Dragonfly-13,5-Zoll-G4.png`,
                os: "Windows 11 Pro",
                displaySize: 13.5,
                displayRes: 1280, // 1280 = WUXGA+
                ram: 16,
                rom: 512,
                cpu: "Intel® Core™ i5 1335U",
                price: 1925.00,
                batteryLife: -1,
                usage: 'Home'
            }
        ]
    },
    {
        type: [
            {
                name: "HP DeskJet 4220e All-in-One-Drucker (588K4B)",
                img: `./img/printers/HP-DeskJet-4220e.png`,
                speedBW: 8.5,
                speedCol: 5.5,
                speedLoss: 3,
                maxPaper: 60,
                abilities: 'Print, copy, scan',
                mobilePrinting: 'HP+; Apple AirPrint™; Chrome OS; Mopria-certified; HP App',
                price: 109.00
            }, 
            {
                name: "HP Smart Tank 7005 All-in-One (28B54A)",
                img: `./img/printers/HP-Smart-Tank-7005.png`,
                speedBW: 15,
                speedCol: 9,
                speedLoss: 6,
                maxPaper: 250,
                abilities: 'Print, copy, scan, wireless',
                mobilePrinting: 'Apple AirPrint™; Mopria-certified; HP Print Service Plug-In (Android print); HP Smart App; Wi-Fi Direct Printing',
                price: 243.99
            }, 
            {
                name: "HP Smart Tank 7305 All-in-One (28B75A)",
                img: `./img/printers/HP-Smart-Tank-7305.png`,
                speedBW: 15,
                speedCol: 9,
                speedLoss: 6,
                maxPaper: 250,
                abilities: 'Print, copy, scan, ADF, wireless',
                mobilePrinting: 'Apple AirPrint™; Mopria-certified; HP Print Service Plug-In (Android print); HP Smart App; Wi-Fi Direct Printing',
                price: 359.99
            }, 
            {
                name: "HP ENVY 6420e All-in-One-Drucker (223R4B)",
                img: `./img/printers/HP-ENVY-6420e.png`,
                speedBW: 10,
                speedCol: 7,
                speedLoss: 3,
                maxPaper: 100,
                abilities: 'Print, copy, scan, mobile Fax',
                mobilePrinting: 'Apple AirPrint™; Chrome OS; Mopria-certified; HP Smart App',
                price: 154.46
            }, 
            {
                name: "HP Smart Tank Plus 570 Wireless All-in-One-Technologie (5HX14A)",
                img: `./img/printers/HP-Smart-Tank-Plus-570.png`,
                speedBW: 11,
                speedCol: 5,
                speedLoss: 6,
                maxPaper: 100,
                abilities: 'Print, copy, scan, ADF, wireless',
                mobilePrinting: 'Apple AirPrint™; HP Smart App; Mopria-certified; Fire™; Google Cloud Print 2.0; HP ePrint; print via Android; Wireless Direct Printing',
                price: 226.88
            }
        ]
    }
]

