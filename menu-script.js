const cart = {};

// Menu items data
const supZZMenuItems = [
    { id: 1, name: "Sup Gearbox Kambing", price: "19.00", image: "Menu Image/sup gearbox.jfif" },
    { id: 2, name: "Sup Kambing", price: "20.00", image: "Menu Image/sup kambing.jpg" },
    { id: 3, name: "Sup Daging", price: "8.00", image: "Menu Image/sup daging.jfif" },
    { id: 4, name: "Sup Ayam", price: "7.00", image: "Menu Image/sup ayam.jpg" },
    { id: 5, name: "Add on - Mee", price: "2.00", image: "Menu Image/mee.jpg" },
    { id: 6, name: "Add on - Mee Hoon", price: "2.00", image: "Menu Image/mee hoon.jfif" },
    { id: 7, name: "Add on - Kuey Teow", price: "2.00", image: "Menu Image/keuy teow.webp" },
    { id: 8, name: "Add on set - Nasi Putih & Telur Dadar & Sambal Belacan & Ulaman", price: "5.00", image: "Menu Image/nasi putih.webp" },
    { id: 9, name: "Add on - Roti Francis", price: "2.50", image: "Menu Image/roti francis.jpg" },
    { id: 10, name: "Add on - Roti Gardenia", price: "2.50", image: "Menu Image/roti gardenia.jfif" }
]

const meeRebusMenuItems = [
    { id: 11, name: "Mee Rebus Gearbox Kambing", price: "20.00", image: "Menu Image/mee rebus gearbox.jpg" },
    { id: 12, name: "Mee Rebus Daging", price: "9.50", image: "Menu Image/mee rebus daging.jpg" },
    { id: 13, name: "Mee Rebus Ayam", price: "9.00", image: "Menu Image/mee rebus ayam.jpg" }
]

const makananPanasMenuItems = [
    { id: 14, name: "Lontong Kuah", price: "7.50", image: "Menu Image/lontong kuah.jpeg" },
    { id: 15, name: "Lontong Kering Ayam", price: "9.50", image: "Menu Image/lontong kering.jfif" },
    { id: 16, name: "Lontong Kering Daging", price: "9.00", image: "Menu Image/lontong kering.jfif" },
    { id: 17, name: "Nasi Lemak Basmathi Telur", price: "6.00", image: "Menu Image/nasi lemak basmathi.jfif" },
    { id: 18, name: "Nasi Lemak Basmathi Ayam", price: "9.00", image: "Menu Image/nasi lemak basmathi.jfif" },
    { id: 19, name: "Lontong Kuah", price: "7.50", image: "Menu Image/lontong kuah.jpeg" },
    { id: 20, name: "Lontong Kering Ayam", price: "9.50", image: "Menu Image/lontong kering.jfif" },
    { id: 21, name: "Lontong Kering Daging", price: "9.00", image: "Menu Image/lontong kering.jfif" },
    { id: 22, name: "Nasi Lemak Basmathi Telur", price: "6.00", image: "Menu Image/nasi lemak basmathi.jfif" },
    { id: 23, name: "Nasi Lemak Basmathi Ayam", price: "9.00", image: "Menu Image/nasi lemak basmathi.jfif" },
    { id: 24, name: "Nasi Lemak Rendang Ayam", price: "8.50", image: "Menu Image/nasi lemak rendang.jpg" },
    { id: 25, name: "Nasi Lemak Rendang Daging", price: "9.50", image: "Menu Image/nasi lemak rendang.jpg" },
    { id: 26, name: "Nasi Ayam Basmathi", price: "12.00", image: "Menu Image/nasi ayam basmathi.jpg" },
    { id: 27, name: "Nasi Ambang", price: "9.50", image: "Menu Image/nasi ambang.jpg" },
    { id: 28, name: "Bubur Nasi", price: "7.50", image: "Menu Image/bubur nasi.jpg" },
    { id: 29, name: "Bubur Ayam", price: "7.00", image: "Menu Image/bubur ayam.jpg" },
    { id: 30, name: "Laksa Johor", price: "8.00", image: "Menu Image/laksa johor.jfif" },
    { id: 31, name: "Laksa Penang", price: "7.50", image: "Menu Image/laksa penang.jpg" },
    { id: 32, name: "Bakso Mee", price: "7.50", image: "Menu Image/bakso.jfif" },
    { id: 33, name: "Bakso Mee Hoon", price: "7.50", image: "Menu Image/bakso.jfif" },
    { id: 34, name: "Bakso Nasi", price: "7.50", image: "Menu Image/bakso.jfif" },
    { id: 35, name: "Soto Mee", price: "8.00", image: "Menu Image/soto.jfif" },
    { id: 36, name: "Soto Mee Hoon", price: "8.00", image: "Menu Image/soto.jfif" },
    { id: 37, name: "Soto Nasi", price: "8.00", image: "Menu Image/soto.jfif" }

]

const rotiBakarMenuItems = [
    { id: 38, name: "Roti Bakar", price: "2.50", image: "Menu Image/roti bakar.jpg" },
    { id: 39, name: "Roti Kaya", price: "3.50", image: "Menu Image/roti kaya.jpg" },
    { id: 40, name: "Roti Garlic", price: "3.50", image: "Menu Image/roti garlic.jfif" },
    { id: 41, name: "Add On- Telur 1/2 masak", price: "3.50", image: "Menu Image/telur.jfif" }
]

const rotiCanaiMenuItems = [
    { id: 42, name: "Roti Kosong", price: "1.50", image: "Menu Image/roti canai.jfif" },
    { id: 43, name: "Roti Kosong Bawang", price: "2.00", image: "Menu Image/roti bawang.jpeg" },
    { id: 44, name: "Roti Tampal", price: "2.80", image: "Menu Image/roti canai.jfif" },
    { id: 45, name: "Roti Telur", price: "2.80", image: "Menu Image/roti telur.jpg" },
    { id: 46, name: "Roti Telur Bawang", price: "3.50", image: "Menu Image/roti canai.jfif" },
    { id: 47, name: "Roti Telur Double Jantan", price: "5.50", image: "Menu Image/roti bawang.jpeg" },
    { id: 48, name: "Roti Pisang", price: "4.50", image: "Menu Image/roti canai.jfif" },
    { id: 49, name: "Roti Sardin", price: "6.00", image: "Menu Image/roti telur.jpg" },
    { id: 50, name: "Roti Bom", price: "4.50", image: "Menu Image/roti canai.jfif" },
    { id: 51, name: "Roti Planta", price: "6.00", image: "Menu Image/roti telur.jpg" },
    { id: 52, name: "Roti Sarang Burung Daging", price: "6.00", image: "Menu Image/roti telur.jpg" }
]

const setNasiLaukMenuItems = [
    { id: 53, name: "Nasi Bawal Goreng Berlado", price: "9.00", image: "Menu Image/nasi bawal goreng.webp" },
    { id: 54, name: "Nasi Siakap Goreng Berlado", price: "15.00", image: "Menu Image/nasi siakap goreng.jfif" },
    { id: 55, name: "Nasi Keli Goreng Berlado", price: "10.90", image: "Menu Image/nasi keli goreng.jfif" },
    { id: 56, name: "Nasi Ayam Goreng Berlado", price: "8.50", image: "Menu Image/nasi ayam goreng.jfif" },
]

const makananPanas2MenuItems = [
    { id: 57, name: "Bubur Ayam", price: "6.50", image: "Menu Image/bubur ayam.jpg" },
    { id: 58, name: "Bubur Nasi", price: "7.50", image: "Menu Image/bubur nasi.jpg" },
    { id: 59, name: "Bakso Mee", price: "7.50", image: "Menu Image/bakso.jfif" },
    { id: 60, name: "Bakso Mee Hoon", price: "7.50", image: "Menu Image/bakso.jfif" },
    { id: 61, name: "Laksa Johor", price: "8.00", image: "Menu Image/laksa johor.jfif" },
    { id: 62, name: "Laksa Penang", price: "7.50", image: "Menu Image/laksa penang.jpg" },
    { id: 63, name: "Soto Mee", price: "8.00", image: "Menu Image/soto.jfif" },
    { id: 64, name: "Soto Mee Hoon", price: "8.00", image: "Menu Image/soto.jfif" },
    { id: 65, name: "Nasi Lemak Basmathi Telur", price: "6.00", image: "Menu Image/nasi lemak basmathi.jfif" },
    { id: 66, name: "Nasi Lemak Basmathi Ayam", price: "9.00", image: "Menu Image/nasi lemak basmathi.jfif" }
]
 const ikanSiakapMenuItems = [
    { id: 67, name: "Ikan Siakap Tiga Rasa", price: "35-40", image: "Menu Image/ikan siakap 3 rasa.webp" },
    { id: 68, name: "Ikan Siakap Masam Manis", price: "35-40", image: "Menu Image/ikan siakap masam manis.jpg" },
    { id: 69, name: "Ikan Siakap Steam Lemon", price: "35-40", image: "Menu Image/ikan siakap steam lemon.webp" },
    { id: 70, name: "Ikan Siakap Laprik", price: "35-40", image: "Menu Image/ikan siakap laprik.jpg" },
    { id: 71, name: "Ikan Siakap Goreng Kunyit", price: "35-40", image: "Menu Image/ikan siakap goreng kunyit.jfif" }
]

const bakarBakarMenuItems = [
    { id: 72, name: "Ikan Siakap Bakar", price: "35-40", image: "Menu Image/ikan siakap bakar.jpg" },
    { id: 73, name: "Ikan Kerapu Bakar", price: "8.00-15.00", image: "Menu Image/ikan kerapu bakar.jpg" },
    { id: 74, name: "Ikan Caru Bakar", price: "15.00", image: "Menu Image/caru bakar.jfif" },
    { id: 75, name: "Kerang Bakar", price: "15.00", image: "Menu Image/kerang bakar.jfif" },
    { id: 76, name: "Sotong Bakar", price: "15.00", image: "Menu Image/sotong bakar.jpe" }
]

const sayurMenuItems = [
    { id: 77, name: "Kailan Biasa", price: "7.00", image: "Menu Image/kailan.jpg" }, 
    { id: 78, name: "Kailan Ikan Masin", price: "7.00", image: "Menu Image/kailan.jpg" }, 
    { id: 79, name: "Kangkung Biasa", price: "7.00", image: "Menu Image/kangkung.jpg" }, 
    { id: 80, name: "Kangkung Belacan", price: "7.00", image: "Menu Image/kangkung.jpg" }, 
    { id: 81, name: "Taugeh Biasa", price: "7.00", image: "Menu Image/taugeh.jfif" }, 
    { id: 82, name: "Taugeh Ikan Masin", price: "7.00", image: "Menu Image/taugeh.jfif" }, 
    { id: 83, name: "Sawi Biasa", price: "7.00", image: "Menu Image/sawi.jpg" }, 
    { id: 84, name: "Sawi Ikan Masin", price: "7.00", image: "Menu Image/sawi.jpg" }, 
    { id: 85, name: "Cendawan Goreng Biasa", price: "7.00", image: "Menu Image/cendawan.jfif" }
]

const anekaLaukThaiMenuItems = [
    { id: 86, name: "Ayam Black Pepper", price: "7.50", image: "Menu Image/ayam black pepper.jpg" }, 
    { id: 87, name: "Daging Black Pepper", price: "8.50", image: "Menu Image/ayam black pepper.jpg" }, 
    { id: 88, name: "Sotong Black Pepper", price: "9.50", image: "Menu Image/sotong black pepper.jpg" }, 
    { id: 89, name: "Ayam Sambal", price: "7.50", image: "Menu Image/ayam sambal.webp" }, 
    { id: 90, name: "Daging Sambal", price: "8.50", image: "Menu Image/ayam sambal.webp" }, 
    { id: 87, name: "Sotong Sambal", price: "9.50", image: "Menu Image/ayam sambal.webp" }, 
    { id: 88, name: "Ayam Merah", price: "7.50", image: "Menu Image/ayam merah.webp" }, 
    { id: 89, name: "Daging Merah", price: "8.50", image: "Menu Image/ayam merah.webp" }, 
    { id: 90, name: "Sotong Merah", price: "9.50", image: "Menu Image/ayam merah.webp" }, 
    { id: 91, name: "Ayam Paprik", price: "7.50", image: "Menu Image/paprik.avif" }, 
    { id: 92, name: "Daging Paprik", price: "8.50", image: "Menu Image/paprik.avif" }, 
    { id: 93, name: "Sotong Paprik", price: "9.50", image: "Menu Image/paprik.avif" }, 
    { id: 94, name: "Ayam Pha Khra Phao", price: "8.00", image: "Menu Image/pha khra phao.jpg" }, 
    { id: 95, name: "Daging Pha Khra Phao", price: "9.00", image: "Menu Image/pha khra phao.jpg" }, 
    { id: 96, name: "Ayam Kunyit", price: "7.50", image: "Menu Image/kunyit.jpg" }, 
    { id: 97, name: "Daging Kunyit", price: "9.50", image: "Menu Image/kunyit.jpg" }, 
    { id: 98, name: "Sotong Kunyit", price: "9.50", image: "Menu Image/kunyit.jpg" }, 
    { id: 99, name: "Udang Kunyit", price: "9.50", image: "Menu Image/kunyit.jpg" }, 
    { id: 100, name: "Add on - Nasi Putih", price: "2.00", image: "Menu Image/nasi putih 2.jfif" }, 
    { id: 101, name: "Add on - Nasi Goreng", price: "3.00", image: "Menu Image/nasi goreng.jpg" }
    
]

const gorengTepungMenuItems = [
    { id: 102, name: "Goreng Tepung Sotong", price: "10.50", image: "Menu Image/goreng tepung sotong.jpg" }, 
    { id: 103, name: "Goreng Tepung Udang", price: "10.50", image: "Menu Image/goreng tepung udang.jfif" }, 
    { id: 104, name: "Goreng Tepung Cendawan", price: "7.00", image: "Menu Image/goreng tepung cendawan.jpg" }, 
    { id: 105, name: "Goreng Tepung Inoki", price: "7.00", image: "Menu Image/goreng tepung inoki.jpg" }
]

const supAlaThaiMenuItems = [
    { id: 106, name: "Sup Ayam Ala Thai", price: "8.00", image: "Menu Image/sup ala thai.jfif" }, 
    { id: 107, name: "Sup Daging Ala Thai", price: "9.00", image: "Menu Image/sup ala thai.jfif" }, 
    { id: 108, name: "Add on - Mee", price: "2.00", image: "Menu Image/mee.jpg" },
    { id: 109, name: "Add on - Mee Hoon", price: "2.00", image: "Menu Image/mee hoon.jfif" },
    { id: 110, name: "Add on - Kuey Teow", price: "2.00", image: "Menu Image/keuy teow.webp" },
]

const tomyamMenuItems = [
    { id: 111, name: "Tom Yam Seekaw", price: "8.00", image: "Menu Image/tom yam.jfif" },
    { id: 112, name: "Tom Yam Sideng", price: "8.00", image: "Menu Image/tom yam.jfif" },
    { id: 113, name: "Tom Yam Ayam", price: "8.00", image: "Menu Image/tom yam.jfif" },
    { id: 114, name: "Tom Yam Daging", price: "9.00", image: "Menu Image/tom yam.jfif" },
    { id: 115, name: "Tom Yam Ayam + Daging", price: "12.00", image: "Menu Image/tom yam.jfif" },
    { id: 116, name: "Tom Yam Seafood", price: "13.00", image: "Menu Image/tom yam.jfif" },
    { id: 117, name: "Tom Yam Campur", price: "13.00", image: "Menu Image/tom yam.jfif" },
    { id: 118, name: "Tom Yam Sayur", price: "8.00", image: "Menu Image/tom yam.jfif" },
    { id: 119, name: "Tom Yam Cendawan", price: "8.00", image: "Menu Image/tom yam.jfif" },
    { id: 120, name: "Add on - Mee", price: "2.00", image: "Menu Image/mee.jpg" },
    { id: 121, name: "Add on - Mee Hoon", price: "2.00", image: "Menu Image/mee hoon.jfif" },
    { id: 122, name: "Add on - Kuey Teow", price: "2.00", image: "Menu Image/keuy teow.webp" },

]

const meeKuahMenuItems = [
    { id: 123, name: "Mee Kuah Mee", price: "10.50", image: "Menu Image/mee kuah.jpg" }, 
    { id: 124, name: "Mee Kuah Mee Hoon", price: "10.50", image: "Menu Image/mee kuah.jpg" }, 
    { id: 125, name: "Mee Kuah Kuey Teow", price: "10.50", image: "Menu Image/mee kuah.jpg" }, 
    { id: 126, name: "Mee Kuah Bandung", price: "10.50", image: "Menu Image/mee kuah bandung.jfif" }, 
    { id: 127, name: "Mee Kuah Hong Kong", price: "10.50", image: "Menu Image/mee_kuah_hong_kong.jpg" }, 
    { id: 128, name: "Mee Kuah Hailam", price: "10.50", image: "Menu Image/mee kuah hailam.png" }, 
    { id: 129, name: "Mee Kuah Kung Fu", price: "10.50", image: "Menu Image/mee kuah kung fu.jfif" } 
]

const friedGrillMenuItems = [
    { id: 130, name: "FriedChicken Chop", price: "16.50", image: "Menu Image/chicken_chop_fried.jfif" }, 
    { id: 131, name: "Grill Chicken Chop", price: "18.50", image: "Menu Image/chicken_chop_grill.webp" }, 
    { id: 132, name: "Fish N Chips", price: "16.50", image: "Menu Image/fish n chip.webp" }, 
    { id: 133, name: "Lamb Chop", price: "30.90", image: "Menu Image/lamb_chop.webp" }, 
]

const spaghettiMenuItems = [
    { id: 134, name: "Aglio Olio Seafood", price: "17.00", image: "Menu Image/aglio olio.avif" }, 
    { id: 135, name: "Aglio Olio Beef Bacon", price: "15.00", image: "Menu Image/aglio olio.avif" }, 
    { id: 136, name: "Aglio Olio Chicken", price: "13.00", image: "Menu Image/aglio olio.avif" }, 
    { id: 137, name: "Carbonara Seafood", price: "18.00", image: "Menu Image/carbonara.jpeg" }, 
    { id: 138, name: "Carbonara Beef Bacon", price: "16.00", image: "Menu Image/carbonara.jpeg" }, 
    { id: 139, name: "Carbonara Chicken", price: "14.00", image: "Menu Image/carbonara.jpeg" }, 
    { id: 140, name: "Bolognese", price: "15.00", image: "Menu Image/bolognese.jpg" }, 
    { id: 141, name: "Mac & Cheese", price: "12.00", image: "Menu Image/mac_and_cheese.avif" } 
]

const burgerMenuItems = [
    { id: 142, name: "Smash Beef Burger - Single", price: "8.00", image: "Menu Image/smash_beef_burger_single.jfif" },
  { id: 143, name: "Smash Beef Burger - Double", price: "10.00", image: "Menu Image/smash_beef_burger_double.avif" },
  { id: 144, name: "Crispy Chicken Burger", price: "7.50", image: "Menu Image/chicken_burger.jfif" },
  { id: 145, name: "Add on - Fries", price: "2.00", image: "Menu Image/fries.jfif" },

]

const sidesMenuItems = [
    { id: 146, name: "Fries", price: "7.50", image: "Menu Image/fries.jfif" },
    { id: 147, name: "Nugget 8pcs", price: "8.00", image: "Menu Image/nugget.jfif" },
    { id: 148, name: "Cheesy Wedges", price: "8.50", image: "Menu Image/cheesy_wedges.jpg" }
]

const nasiGorengMenuItems = [
    { id: 149, name: "Nasi Goreng Biasa", price: "7.50", image: "Menu Image/nasi goreng.jpg" }, 
    { id: 150, name: "Nasi Goreng Kampung", price: "8.00", image: "Menu Image/nasi goreng.jpg" }, 
    { id: 151, name: "Nasi Goreng Cina", price: "7.50", image: "Menu Image/nasi goreng.jpg" }, 
    { id: 152, name: "Nasi Goreng Ikan Masin", price: "8.50", image: "Menu Image/nasi goreng.jpg" }, 
    { id: 153, name: "Nasi Goreng Cili Padi", price: "8.50", image: "Menu Image/nasi goreng.jpg" }, 
    { id: 154, name: "Nasi Goreng Pattaya", price: "8.50", image: "Menu Image/nasi goreng.jpg" }, 
    { id: 155, name: "Nasi Goreng Tom Yam", price: "9.00", image: "Menu Image/nasi goreng.jpg" }, 
    { id: 156, name: "Nasi Goreng Belacan", price: "12.00", image: "Menu Image/nasi goreng.jpg" },
    { id: 157, name: "Pilihan - Daging", price: "1.00", image: "Menu Image/no.jpg" }, 
    { id: 158, name: "Pilihan - Sotong", price: "3.00", image: "Menu Image/no.jpg" }, 
    { id: 159, name: "Pilihan - Udang", price: "3.00", image: "Menu Image/no.jpg" }
]

const meeGorengMenuItems = [
    { id: 160, name: "Mee Goreng", price: "7.50", image: "Menu Image/mee goreng.webp" }, 
    { id: 161, name: "Mee Hoon Goreng Singapore", price: "7.50", image: "Menu Image/mee_hoon_goreng_singapore.webp" }, 
    { id: 162, name: "Char Kuey Teow", price: "8.00", image: "Menu Image/char_kuey_teow.webp" },
    { id: 163, name: "Pilihan - Daging", price: "1.00", image: "Menu Image/no.jpg" }, 
    { id: 164, name: "Pilihan - Sotong", price: "3.00", image: "Menu Image/no.jpg" }, 
    { id: 165, name: "Pilihan - Udang", price: "3.00", image: "Menu Image/no.jpg" }
]

const nonCoffeeMenuItems = [
    { id: 166, name: "Teh O' (Hot)", price: "2.30", image: "Menu Image/teh_o.jpg" },     
    { id: 167, name: "Teh O' (Hot)", price: "2.50", image: "Menu Image/teh_o.jpg" },     
    { id: 168, name: "Teh Tarik (Hot)", price: "2.50", image: "Menu Image/teh_tarik.webp" },     
    { id: 169, name: "Teh Tarik (Cold)", price: "3.00", image: "Menu Image/teh_tarik.webp" }, 
    { id: 170, name: "Teh Halia (Hot)", price: "3.50", image: "Menu Image/teh_halia.jpg" }, 
    { id: 171, name: "Teh Halia (Cold)", price: "4.00", image: "Menu Image/teh_halia.jpg" }, 
    { id: 172, name: "Teh Sarbat (Hot)", price: "3.50", image: "Menu Image/teh_sarbat.jfif" }, 
    { id: 173, name: "Teh Sarbat (Cold)", price: "4.00", image: "Menu Image/teh_sarbat.jfif" }, 
    { id: 174, name: "Sirap (Hot)", price: "2.00", image: "Menu Image/sirap.webp" }, 
    { id: 175, name: "Sirap (Cold)", price: "2.50", image: "Menu Image/sirap.webp" }, 
    { id: 176, name: "Sirap Selasih (Hot)", price: "2.50", image: "Menu Image/sirap.jpg" }, 
    { id: 177, name: "Sirap Selasih (Cold)", price: "3.00", image: "Menu Image/sirap.jpg" }, 
    { id: 178, name: "Sirap Limau (Hot)", price: "2.70", image: "Menu Image/sirap_limau.webp" }, 
    { id: 179, name: "Sirap Limau (Cold)", price: "3.00", image: "Menu Image/sirap_limau.webp" }, 
    { id: 180, name: "Sirap Laici (Hot)", price: "5.00", image: "Menu Image/sirap_laici.jfif" }, 
    { id: 181, name: "Sirap Laici (Cold)", price: "5.50", image: "Menu Image/sirap_laici.jfif" }, 
    { id: 182, name: "Sirap Bandung (Cold)", price: "3.50", image: "Menu Image/bandung.jpg" }, 
    { id: 183, name: "Sirap Bandung Cincau (Cold)", price: "4.00", image: "Menu Image/bandung.jpg" }, 
    { id: 184, name: "Sirap Bandung Soda (Cold)", price: "4.00", image: "Menu Image/bandung.jpg" }, 
    { id: 185, name: "Limau (Hot)", price: "2.70", image: "Menu Image/limau.jpg" }, 
    { id: 186, name: "Limau (Cold)", price: "3.00", image: "Menu Image/limau.jpg" }, 
    { id: 187, name: "Asam Boy (Hot)", price: "2.70", image: "Menu Image/asam_boy.jfif" }, 
    { id: 188, name: "Asam Boy (Cold)", price: "3.00", image: "Menu Image/asam_boy.jfif" }, 
    { id: 189, name: "Extra Joss Susu Mangga (Cold)", price: "4.00", image: "Menu Image/extra_joss_susu.jpg" }, 
    { id: 190, name: "Extra Joss Susu Anggur (Cold)", price: "4.00", image: "Menu Image/extra_joss_susu_anggur.jpg" }, 
    { id: 191, name: "Vico (Hot)", price: "3.00", image: "Menu Image/vico.jpg" }, 
    { id: 192, name: "Vico (Cold)", price: "3.50", image: "Menu Image/vico.jpg" } 
]

const jusMenuItems = [
    { id: 193, name: "Jus Orange (Hot)", price: "4.70", image: "Menu Image/jus_oren.avif" },
    { id: 194, name: "Jus Orange (Cold)", price: "5.00", image: "Menu Image/jus_oren.avif" },
    { id: 195, name: "Jus Apple (Hot)", price: "4.70", image: "Menu Image/jus_apple.png" },
    { id: 196, name: "Jus Apple (Cold)", price: "5.00", image: "Menu Image/jus_apple.png" },
    { id: 197, name: "Jus Watermelon (Hot)", price: "4.70", image: "Menu Image/jus_watermelon.avif" },
    { id: 198, name: "Jus Watermelon (Cold)", price: "5.00", image: "Menu Image/jus_watermelon.avif" },
    { id: 199, name: "Jus Lychee (Hot)", price: "4.70", image: "Menu Image/jus_lychee.avif" },
    { id: 200, name: "Jus Lychee (Cold)", price: "5.00", image: "Menu Image/jus_lychee.avif" },
    { id: 201, name: "Jus Lemon (Hot)", price: "4.70", image: "Menu Image/jus_lemon.jpeg" },
    { id: 202, name: "Jus Lemon (Cold)", price: "5.00", image: "Menu Image/jus_lemon.jpeg" }
]

const coldDessertMenuItems = [
    { id: 203, name: "Cikong (Cold)", price: "6.00", image: "Menu Image/cikong.jpg" },
    { id: 204, name: "Ais Jelly Limau (Cold)", price: "6.00", image: "Menu Image/ais_jelly_limau.jfif" },
    { id: 205, name: "Cendol (Cold)", price: "6.00", image: "Menu Image/cendol.jpg" }
]

// Function to render menu items dynamically
function renderMenuItems(items, containerId) {
    const container = document.getElementById(containerId);

    items.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";

        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>RM${item.price}</p>
            </div>
            <div class="menu-item-action">
                <button data-item-id="${item.id}" onclick="addToCart(this)">Add to Cart</button>
                <div id="quantity-${item.id}" class="quantity" style="display: none;">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span id="quantity-value-${item.id}">0</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        `;
        container.appendChild(menuItem);
    });
}

// Add to cart functionality
function addToCart(button) {
    const itemId = button.getAttribute("data-item-id");
    const quantitySelector = document.getElementById(`quantity-${itemId}`);
    const quantityDisplay = document.getElementById(`quantity-value-${itemId}`);

    if (quantitySelector && quantityDisplay) {
        quantitySelector.style.display = "flex";

        if (!cart[itemId]) {
            cart[itemId] = 1;
            quantityDisplay.textContent = "1";
        }
        updateCartCounter();
    }
}

// Update quantity functionality
function updateQuantity(itemId, change) {
    const quantityDisplay = document.getElementById(`quantity-value-${itemId}`);
    const quantitySelector = document.getElementById(`quantity-${itemId}`);

    if (quantityDisplay && quantitySelector) {
        let quantity = cart[itemId] || 0;

        quantity = Math.max(0, quantity + change); // Prevent quantity from going below 0
        cart[itemId] = quantity; // Update cart object
        
        quantityDisplay.textContent = quantity;

        // If quantity is 0, hide the quantity selector
        if (quantity === 0) {
            delete cart[itemId];
            quantitySelector.style.display = "none";
        }

        updateCartCounter(); // Update the cart counter
    } else {
        console.error(`Quantity display or selector for item ${itemId} not found.`);
    }
}

// Update cart counter
function updateCartCounter() {
    const cartCounterBadge = document.getElementById("cart-counter-badge");
    const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    cartCounterBadge.textContent = totalItems;

    // Hide badge if cart is empty
    cartCounterBadge.style.display = totalItems > 0 ? "flex" : "none";
}

// Initialize menu items
renderMenuItems(supZZMenuItems, "menu-items-container-sup-zz");
renderMenuItems(meeRebusMenuItems, "menu-items-container-mee-rebus");
renderMenuItems(makananPanasMenuItems, "menu-items-container-makanan-panas");
renderMenuItems(rotiBakarMenuItems, "menu-items-container-roti-bakar");
renderMenuItems(rotiCanaiMenuItems, "menu-items-container-roti-canai");
renderMenuItems(setNasiLaukMenuItems, "menu-items-container-set-nasi-lauk");
renderMenuItems(makananPanas2MenuItems, "menu-items-container-makanan-panas-2");
renderMenuItems(ikanSiakapMenuItems, "menu-items-container-ikan-siakap");
renderMenuItems(bakarBakarMenuItems, "menu-items-container-bakar-bakar");
renderMenuItems(sayurMenuItems, "menu-items-container-sayur");
renderMenuItems(anekaLaukThaiMenuItems, "menu-items-container-aneka-lauk-thai");
renderMenuItems(gorengTepungMenuItems, "menu-items-container-goreng-tepung");
renderMenuItems(meeKuahMenuItems, "menu-items-container-mee-kuah");
renderMenuItems(supAlaThaiMenuItems, "menu-items-container-sup-ala-thai");
renderMenuItems(tomyamMenuItems, "menu-items-container-tomyam");
renderMenuItems(friedGrillMenuItems, "menu-items-container-fried-grill");
renderMenuItems(rotiBakarMenuItems, "menu-items-container-roti-bakar");
renderMenuItems(spaghettiMenuItems, "menu-items-container-spaghetti");
renderMenuItems(burgerMenuItems, "menu-items-container-burger");
renderMenuItems(sidesMenuItems, "menu-items-container-sides");
renderMenuItems(nasiGorengMenuItems, "menu-items-container-nasi-goreng");
renderMenuItems(meeGorengMenuItems, "menu-items-container-mee-goreng");
renderMenuItems(nonCoffeeMenuItems, "menu-items-container-non-coffee");
renderMenuItems(jusMenuItems, "menu-items-container-jus");
renderMenuItems(coldDessertMenuItems, "menu-items-container-cold-dessert");

// Checkout functionality
document.getElementById("checkout-button").addEventListener("click", () => {
    if (Object.keys(cart).length === 0) {
        alert("Your cart is empty!");
    } else {
        alert(`You have ${Object.values(cart).reduce((sum, qty) => sum + qty, 0)} items in your cart.`);
        console.log(cart);
    }
});
