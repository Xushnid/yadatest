// Test ma'lumotlari
const questions = [
       {
    "question": "Deformasiyani o’lchash uchun qaysi o’zgartirgich qo’llaniladi:",
    "options": [
      " Tenzometr",
      " Manometr",
      " Avtomatik potensiometr",
      " Reostatli"
    ],
    "answer": " Tenzometr"
  },
  {
    "question": "Temperatura datchigini ko’rsating:",
    "options": [
      " Termopara",
      " Putevoy viklyuchatel",
      " Sensorli datchik",
      " Fotoelement"
    ],
    "answer": " Termopara"
  },
  {
    "question": "Temperaturani o’lchash va rostlash uchun qaysi datchik ishlatiladi:",
    "options": [
      " Manometrik termometr",
      " Trubka Burdona",
      " Struyniy datchik",
      " Diffmanometr"
    ],
    "answer": " Manometrik termometr"
  },
  {
    "question": "Avtomatikaning qaysi qurilmasi datchikdan signal olib bajaruvchi mexanizmni xarakatga keltira oladi:",
    "options": [
      " Magnit kuchaytirgich",
      " Taxogenerator",
      " Solenoid",
      " Termopara"
    ],
    "answer": " Magnit kuchaytirgich"
  },
  {
    "question": "Suyuqlik va gaz bosimini o’lchash uchun qaysi datchik qo’llaniladi:",
    "options": [
      " Manometr",
      " Taxometr",
      " Termopara",
      " P`yezoelektrik datchik"
    ],
    "answer": " Manometr"
  },
  {
    "question": "Atmosfera bosimini o’lchash uchun qaysi datchik qo’llaniladi:",
    "options": [
      " Barometr",
      " Diffmanometr",
      " Vakuummetr",
      " Taxometr"
    ],
    "answer": " Barometr"
  },
  {
    "question": "Bosimlar farqini o’lchash uchun qaysi datchik qo’llaniladi:",
    "options": [
      " Diffmanometr",
      " Barometr",
      " Vakuummetr",
      " Taxogenerator"
    ],
    "answer": " Diffmanometr"
  },
  {
    "question": "Elektr zanjirini yuklanishdan qaysi element himoya qiladi:",
    "options": [
      " Issiqlik relesi",
      " Avtomatik  viklyuchatel",
      " Kuchlanish relesi",
      " Transformator"
    ],
    "answer": " Issiqlik relesi"
  },
  {
    "question": "Termoelektrik termoparaning ishlashi fizikaning qaysi qonuniga asoslangan:",
    "options": [
      " Kvant mexanikasi",
      " Akustika",
      " Mexanika",
      " Optika"
    ],
    "answer": " Kvant mexanikasi"
  },
  {
    "question": "Avtomatikaning qaysi elementi texnologik parametrlari xolati haqida ma`lumotni qabul qiladi va uzgartiradi:",
    "options": [
      " Datchiklar",
      " Kuchaytiruvchi elementlari",
      " Bajaruvchi elemetlar",
      " Rostlovchi organlar"
    ],
    "answer": " Datchiklar"
  },
  {
    "question": "Mexanik kattalikning o’zgarish tezligini induktiv EYukga aylantiruvchi qurilma qanday ataladi:",
    "options": [
      " Induksion",
      " Sig’im",
      " Reostatli",
      " Termoelektrik"
    ],
    "answer": " Induksion"
  },
  {
    "question": "Qaysi pribor magnitostriksiya effektiga asoslangan:",
    "options": [
      " Gerkon",
      " Element Xolla",
      " Magnit o’zgartirgich",
      " Sig’im o’zgartirgich"
    ],
    "answer": " Gerkon"
  },
  {
    "question": "Qanday fotoelektrik o’zgartirgich fotoeffekt prinsipga asoslangan:",
    "options": [
      " Fotoqarshilik",
      " Vakuumli fotoelement",
      " Fotodiod",
      " Fototranzistor"
    ],
    "answer": " Fotoqarshilik"
  },
  {
    "question": "Burchak siljishiga asoslangan datchikni ko’rsating:",
    "options": [
      " Sel`sin",
      " Polyarografik",
      " Ximotron o’zgartirgich",
      " Avtoelektron o’zgartirgich"
    ],
    "answer": " Sel`sin"
  },
  {
    "question": "Siljishni o’lchovchi datchikni ko’rsating:",
    "options": [
      " Reostatli",
      " Termoelektrik",
      " Fotoelektrik",
      " Taxometrik"
    ],
    "answer": " Reostatli"
  },
  {
    "question": "To’qima maxsulotlarining chiziqli zichlik datchigini ko’rsating:",
    "options": [
      " Rolikli",
      " Dinamometrik",
      " Konduktometrik",
      " Termoelektrik"
    ],
    "answer": " Rolikli"
  },
  {
    "question": "Qanday datchik yordamida satxni, chiziqli zichlikni va suyuqlik koeffisiyentini aniqlash mumkin:",
    "options": [
      " Fotoelektrik",
      " Diel`kometrik",
      " Sigimli",
      " Potensiometrik"
    ],
    "answer": " Fotoelektrik"
  },
  {
    "question": "Optoelektron usul yordamida qaysi parametrlarni o’lchash mumkin:",
    "options": [
      " To’qima maxsulotining chiziqli zichligi",
      " Ipning chuziluvchanligi",
      " Materialning xarakat tezligi",
      " Stanokning maxsuldorligi"
    ],
    "answer": " To’qima maxsulotining chiziqli zichligi"
  },
  {
    "question": "O’zgartirgichning statik xarakterichtikasi deb:",
    "options": [
      " Muvozanat xolatda chiqish kattaligini kirish kattaligiga bog’liqligi",
      " Kirish kattaligi sakrashsimon o’zgarganda, chiqish kattaligi o’zgaradi",
      " O’zgartirgichning ichki xossalari o’zgarishi natijasida xosil bo’ladigan tebranishga",
      " O’tkinchi rejimda kirish va chiqish kattaligi orasidagi bog’lanishga"
    ],
    "answer": " Muvozanat xolatda chiqish kattaligini kirish kattaligiga bog’liqligi"
  },
  {
    "question": "Datchikni tanlashda qaysi kattalik asosiy hisoblanadi:",
    "options": [
      " Sezgirlik",
      " Mustaxkamlik",
      " Uzoq ishlashi",
      " Remontbobligi"
    ],
    "answer": " Sezgirlik"
  },
  {
    "question": "Bosim datchigi va manometrik termometr o’rtasidagi umumiylik nima:",
    "options": [
      " Trubka Burdona",
      " Turli simlar",
      " Dilatometrik  plastina",
      " Element Xolla"
    ],
    "answer": " Trubka Burdona"
  },
  {
    "question": "Bir necha kilovatt quvvatni kuchaytiruvchi kuchaytirgich qaysi:",
    "options": [
      " Magnit",
      " Elektron",
      " Pnevmatik",
      " Gidravlik"
    ],
    "answer": " Magnit"
  },
  {
    "question": "Avtomatik elektrik yuritmalarida qaysi kuchaytirgich qo’llanilmaydi:",
    "options": [
      " Gidravlik",
      " Elektron",
      " Elektromagnitli",
      " Poluprovodnik"
    ],
    "answer": " Gidravlik"
  },
  {
    "question": "Struyniy avtomatika qanday ataladi:",
    "options": [
      " Pnevmonika",
      " Gidravlika",
      " Pnevmatika",
      " Robototexnika"
    ],
    "answer": " Pnevmonika"
  },
  {
    "question": "Datchiklarni tanlashda qaysi kattalik asosiy xisoblanadi:",
    "options": [
      " Ishonchlilik",
      " Yukori sezgirlik",
      " Kam inersiyalik",
      " Tashqi xalaqitlar"
    ],
    "answer": " Ishonchlilik"
  },
  {
    "question": "Qaysi datchik orkali temperatura ulchanmaydi:",
    "options": [
      " P`yezoelektrik datchik",
      " Termoqarshilik",
      " Yarim utkazgichli   tranzistor",
      " Dilatometrik   datchik"
    ],
    "answer": " P`yezoelektrik datchik"
  },
  {
    "question": "2 taktli magnit kuchaytirgichning ulanish sxemasini ko’rsating:",
    "options": [
      " Differensial va ko’prik",
      " Differensial",
      " Ko’prik",
      " Oddiy"
    ],
    "answer": " Differensial va ko’prik"
  },
  {
    "question": "Qaysi priborga toyinish drosseli qoyilishi shart:",
    "options": [
      " Magnit  kuchaytirgich",
      " Gidravlik kuchaytirgich",
      " Pnevmatik kuchaytirgich",
      " Elektron kuchaytirgich"
    ],
    "answer": " Magnit  kuchaytirgich"
  },
  {
    "question": "Elektromagnit rele avtomatikaning qaysi elementiga kiritilgan:",
    "options": [
      " Bajaruvchi",
      " Kuchaytirgich",
      " Sezgirlik",
      " Boshqaruvchi organlar"
    ],
    "answer": " Bajaruvchi"
  },
  {
    "question": "Vaqt relesi uchun qaysi parametr asosli:",
    "options": [
      " Qoyib yuborish parametrlari",
      " Ishlash parametrlari",
      " Ishlab chiqarish vaqti",
      " Ishchi parametr"
    ],
    "answer": " Qoyib yuborish parametrlari"
  },
  {
    "question": "Qaysi qurilma bajaruvchi mexanizmga kiritilmaydi:",
    "options": [
      " Avtomatik ko’prik",
      " Qadamli dvigatel`",
      " Elektromagnili  mufta",
      " Servodvigatel`"
    ],
    "answer": " Avtomatik ko’prik"
  },
  {
    "question": "Taxogenerator va temperatura datchigi o’rtasidagi umumiylik:",
    "options": [
      " Ikkalasi xam generatorli datchiklar",
      " Ikkalasi xam temperaturani ulchaydi",
      " Ikkalasi xam tezlikni ulchaydi",
      " Ikkalasi xam parametrik dastchiklar"
    ],
    "answer": " Ikkalasi xam generatorli datchiklar"
  },
  {
    "question": "Magnit puskatel nima uchun xizmat qiladi:",
    "options": [
      " Dvigatelni masafodan o’chirib yondiradi",
      " Tarmoq kuchlanishini o’lchaydi",
      " Elektrodvigatelni temperatura kuchini rostlaydi",
      " Dvigatelni o’z-o’zidan ulanishidan ximoya qiladi"
    ],
    "answer": " Dvigatelni masafodan o’chirib yondiradi"
  },
  {
    "question": "Servoprivodga qaysi element kiradi:",
    "options": [
      " Solenoidli elektromagnit",
      " Shagoviy dvigatel`",
      " Bir fazali  elektrodvigatel`",
      " Kondensatorli dvigatel`"
    ],
    "answer": " Solenoidli elektromagnit"
  },
  {
    "question": "Rostlovchi organni qaysi element  xarakatga keltiradi:",
    "options": [
      " Shagoviy dvigatel`",
      " Magnit usilitel`",
      " Potensiometr",
      " Termopara"
    ],
    "answer": " Shagoviy dvigatel`"
  },
  {
    "question": "Fotoelement ishi fizikaning qaysi qonuniga asoslangan:",
    "options": [
      " Optik",
      " Termodinamik",
      " Mexanik",
      " Kvant mexaniksi"
    ],
    "answer": " Optik"
  },
  {
    "question": "Qaysi datchik mexanizmi xolatlarini nazorat qilish uchun xizmat qiladi:",
    "options": [
      " Kontaktli puteviye viklyuchatel",
      " Termopara",
      " Tok relesi",
      " Fotometr"
    ],
    "answer": " Kontaktli puteviye viklyuchatel"
  },
  {
    "question": "Noelektrik kattalikni elektrik kattalikka aylantiruvchi avtomatikaning elementini ko’rsating:",
    "options": [
      " Datchik",
      " Servodapatel`",
      " Rostlovchi organ",
      " Kuchaytirgich"
    ],
    "answer": " Datchik"
  },
  {
    "question": "Generatorli datchikni ko’rsating:",
    "options": [
      " Termopara",
      " Manometi termometr",
      " Tenzometr",
      " Taxometr"
    ],
    "answer": " Termopara"
  },
  {
    "question": "Tezlik parametrli datchikni ko’rsating:",
    "options": [
      " Taxogenerator",
      " Reostat uzgartirgichli markazdan qochma  rele",
      " Tenzorezistor",
      " P`yezoelektrik"
    ],
    "answer": " Taxogenerator"
  },
  {
    "question": "Qaysi chiziqli siljish datchigi analogliga kiradi:",
    "options": [
      " Potensiometrik",
      " Sigimli",
      " Aylanma",
      " Elektromagnit"
    ],
    "answer": " Potensiometrik"
  },
  {
    "question": "Generatorli datchikda qaysi o’lchov sxemasi qo’llanilgan:",
    "options": [
      " Kompensasion",
      " Differensial",
      " Oddiy",
      " Sozlanmagan ko’prik"
    ],
    "answer": " Kompensasion"
  },
  {
    "question": "Sil`fon qaysi datchikka kiradi:",
    "options": [
      " Gaz bosimi",
      " Kuchlanish",
      " Deformasiya",
      " Satx"
    ],
    "answer": " Gaz bosimi"
  },
  {
    "question": "Qaysi datchik kuchni elektr kuchlanishga aylantiradi:",
    "options": [
      " P`yezoelektrik",
      " Tenzometrik",
      " Detolokometrik",
      " Magnitli"
    ],
    "answer": " P`yezoelektrik"
  },
  {
    "question": "Kuchlanish relesi nima uchun xizmat qiladi:",
    "options": [
      " Tarmoq kuchlanishi nazorati uchun",
      " Tarmoq toki uchun",
      " Faza mavjudligni aniqlash uchun",
      " Dvigatel ulanganini nazorat qilish uchun"
    ],
    "answer": " Tarmoq kuchlanishi nazorati uchun"
  },
  {
    "question": "Qaysi datchik bilan birga ko’prik logometr sxema ishlatiladi:",
    "options": [
      " Taxogeneratorli    datchik",
      " Qarshilik termometrii",
      " Termopara",
      " P`yezoelektrik datchik"
    ],
    "answer": " Taxogeneratorli    datchik"
  },
  {
    "question": "Datchik uchun muxim ko’rsatkichni aniqlang:",
    "options": [
      " Sezgirlik",
      " Konstruksiyasining soddaligi",
      " Boqiylik",
      " Aniqlik"
    ],
    "answer": " Sezgirlik"
  },
  {
    "question": "Kuchaytiruvchi elementning axamiyatli parametrini ko’rsating:",
    "options": [
      " Quvvat buyicha kuchaytirish koeffisiyenti",
      " Mustaxkamlik",
      " Xarakatlanuvchi qismning mavjudligi",
      " Ishga tushirish sxemasining soddaligi"
    ],
    "answer": " Quvvat buyicha kuchaytirish koeffisiyenti"
  },

  {
    "question": "Avtomatik boshqarish uchun uzilishni xosil qiluvchi bajaruvchi mexanizm elementini ko’rsating:",
    "options": [
      " Shagoviy dvigatel`",
      " LATR",
      " Reostat",
      " Toyinish  drosseli"
    ],
    "answer": " Shagoviy dvigatel`"
  },
  {
    "question": "Elektromagnit  mufta avtomatlashtirishning qaysi elementiga kiradi:",
    "options": [
      " Ijro mexanizimi",
      " Elementlar tasnifi",
      " O’zgartiruvchi",
      " Sezgirlik"
    ],
    "answer": " Ijro mexanizimi"
  },
  {
    "question": "Elektrmagnit servodvigatelga qaysi qurilma kiradi:",
    "options": [
      " Shagoviy dvigatel`",
      " Rele",
      " Solenoidli yuritma",
      " Kuchaytirgich"
    ],
    "answer": " Shagoviy dvigatel`"
  },
  {
    "question": "Xromnikelli termoparada eng yuqori temperaturasi nechaga teng:",
    "options": [
      " 800 c",
      " 1300 c",
      " 1600 c",
      " 400 c"
    ],
    "answer": " 800 c"
  },
  {
    "question": "Namlikni o’zgarishga boglik ravishda aktiv qarshilikning o’zgarishi qaysi prinsipga asoslangan:",
    "options": [
      " Konduktometrik",
      " Psixrometrik",
      " Gigrometrik",
      " Sigimi"
    ],
    "answer": " Konduktometrik"
  },
  {
    "question": "Magnit kuchaytirgich qaysi statik parametr orqali aniqlanadi:",
    "options": [
      " Kuchaytirish koeffisiyenti",
      " Sezgirlik",
      " Turgunlik",
      " Mustaxkamlik"
    ],
    "answer": " Kuchaytirish koeffisiyenti"
  },
  {
    "question": "Qaysi dinamik parametr magnit kuchaytirgich ishini aniqlamaydi:",
    "options": [
      " Tebranuvchanlik",
      " Magnit oqimi",
      " Vaqt doimiysi",
      " Kechikish"
    ],
    "answer": " Tebranuvchanlik"
  },
  {
    "question": "Qaysi faktor magnit kuchaytirgichga ta`sir qilmaydi:",
    "options": [
      " Atrof muxit temperaturasi",
      " Materialning magnitlilik xususiyati",
      " Tarmoq kuchlanishi",
      " Yuklama kuchlanishi"
    ],
    "answer": " Atrof muxit temperaturasi"
  },
  {
    "question": "Reversiv magnit kuchaytirgich uchun qanday sxemadan foydalaniladi:",
    "options": [
      " Differensial",
      " Murakkab",
      " Oddiy",
      " Kompensasion"
    ],
    "answer": " Differensial"
  },
  {
    "question": "Kontaktsiz magnit relesi qaysi asosda quriladi:",
    "options": [
      " Magnit kuchaytirgichi asosida",
      " Elektromagnit relesi",
      " Gerkonniy rele",
      " Induksion rele"
    ],
    "answer": " Magnit kuchaytirgichi asosida"
  },
  {
    "question": "Magnit kuchaytirgich xossasini qanday konchtruktiv xolat yaxshilamaydi:",
    "options": [
      " Umumiy chulgamdan foydalanish",
      " Magnit zanjirida xavo bo’shligini yo’q qilish",
      " Magnitutkazuvchanlik formasi",
      " Maxsus magnit utkazuvchanli elementni qo`llash"
    ],
    "answer": " Umumiy chulgamdan foydalanish"
  },
  {
    "question": "Qutblar soni p=2 va uch fazali tokning chatotasi f = 50 Gs bo`lsa, magnit maydonining aylanish chastotasi n1 nimaga teng:",
    "options": [
      " n1 = 1500 ayl/min",
      " n1 = 100 ayl/min",
      " n1 = 750 ayl/min",
      " n1 = 3000 ayl/min"
    ],
    "answer": " n1 = 1500 ayl/min"
  },
  {
    "question": "Uch fazali sistema simmetrik rejimda ishlamoqda. Yuklama yulduz sxemasida neytral simsiz ulangan. Agar A faza qisqa tutashtirilgan bo`lsa,   va   nimaga teng bo`ladi:",
    "options": [
      " 2 marta kamayadi",
      " marta oshadi",
      " marta kamayadi",
      " o`zgarmaydi"
    ],
    "answer": " 2 marta kamayadi"
  },
  {
    "question": "Qanday yarim o`tkazgichli asbob p-n o`tishga ega bo`lmaydi:",
    "options": [
      " Rezistor",
      " Diod",
      " Tranzistor",
      " Tiristor"
    ],
    "answer": " Rezistor"
  },
  {
    "question": "Fotorezistor nima:",
    "options": [
      " Yorug`lik ta`sirida qarshiligi o`zgaruvchan  asboblar",
      " Kuchlanishli o`zgaruvchan asboblar",
      " O`zgaruvchanligi o`zgaruvchi asboblar",
      " Chastota o`zgaruvchi asboblar"
    ],
    "answer": " Yorug`lik ta`sirida qarshiligi o`zgaruvchan  asboblar"
  },
  {
    "question": "Elektr mashinalari qanday rejimlarda ishlaydi:",
    "options": [
      " Dvigatel, generator va tormoz rejimida",
      " Qisqa vaqtli, tormoz tejimida",
      " Oraliq, davomiy va tezlik rejimida",
      " Dvigatel, qisqa vaqtli, tormoz tejimida"
    ],
    "answer": " Dvigatel, generator va tormoz rejimida"
  },
  {
    "question": "O`zgarmas tok dvigateli magnit maydonining qiymati:",
    "options": [
      " qo`zg`atish tokiga bog`liq",
      " Yakorning burchak tezligiga bog`liq",
      " yakor tokiga bog`liq",
      " Dvigatelning EYuk siga bog`liq"
    ],
    "answer": " qo`zg`atish tokiga bog`liq"
  },
  {
    "question": "O`zgarmas tok dvigatelini revers qilish qanday amalga oshiriladi:",
    "options": [
      " Kuchlanishning qutbini o`zgartirish",
      " Yakor chulg`ami toki yo`nalishini o`zgartirish",
      " Quzg`atish chulg`ami toki yo`nalishini o`zgartirish",
      " Mumkin emas"
    ],
    "answer": " Kuchlanishning qutbini o`zgartirish"
  },
  {
    "question": "Mexanik tavsiflarning qanday ko`rinishlari bor:",
    "options": [
      " Tabiiy va sun`iy",
      " Tashqi va yuklamali",
      " Xaqiqiy va rostlanuvchi",
      " Yuklamali va rostlanuvchi"
    ],
    "answer": " Tabiiy va sun`iy"
  },
  {
    "question": "Elektrodvigatel qanday qismlardan tuzilgan:",
    "options": [
      " Aylanuvchi - rotor, qo`zg`almas- stator",
      " Stator va yakor`",
      " Magnitli o`tkazgich va rotor",
      " Magnitli o`tkazgich va stator"
    ],
    "answer": " Aylanuvchi - rotor, qo`zg`almas- stator"
  },
  {
    "question": "O`zgarmas tok dvigateli … bo`lmasa aylantiruvchi moment xosil qila olmaydi:",
    "options": [
      " Yakor zanjirida qo`shimcha rezistor",
      " Inersiya momenti",
      " Magnit oqimi va yakor toki",
      " Burchak tezligi"
    ],
    "answer": " Yakor zanjirida qo`shimcha rezistor"
  },
  {
    "question": "O`zgarmas tok generatori uchun qanday qo`zg`atish usullari mavjud? To`laroq javobni aniqlang:",
    "options": [
      " Mustaqil, parallel, ketma-ket va aralash",
      " Parallel, ketma-ket",
      " Ketma-ket va aralash",
      " Mustaqil va aralash"
    ],
    "answer": " Mustaqil, parallel, ketma-ket va aralash"
  },
  {
    "question": "Agar o`zgarmas tok dvigateli validagi yuklama oshsa, yakor toki:",
    "options": [
      " Oshadi",
      " O`zgarmaydi",
      " Kamayadi",
      " olga teng bo`ladi"
    ],
    "answer": " Oshadi"
  },
  {
    "question": "Agar o`zgarmas tok dvigatelida qo`zg`atish zanjirida uzilish sodir bo`lsa, salt ishlash rejimida bursak tezligi qanday o`zgaradi:",
    "options": [
      " Dvigatel to`xtaydi",
      " Burchak tezligi oshadi",
      " Burchak tezligi kamayadi",
      " Burchak tezligi o`zgarmaydi"
    ],
    "answer": " Dvigatel to`xtaydi"
  },
  {
    "question": "Qanday ishchi tavsifdan triodning kuchaytirish koeffisiyenti aniqlanadi:",
    "options": [
      " Anod-to`rli tavsifidan",
      " Ayrim bir tavsifdan",
      " To`rli tavsifidan",
      " Xech qanday tavsifdan"
    ],
    "answer": " Anod-to`rli tavsifidan"
  },
  {
    "question": "O`zgarmas tok mashinasining qaysi bir qismi o`zgaruvchan EYuk ni o`zgarmas EYuk ga aylantirib beradi:",
    "options": [
      " Kollektor va cho`tkalar",
      " Yakor",
      " Cho`tkalar",
      " Qo`zg`atish chulg`ami"
    ],
    "answer": " Kollektor va cho`tkalar"
  },
  {
    "question": "Tranzistorni qanday maqsadlarda ishlatmagan ma`qul:",
    "options": [
      " To`grilagich sifatida",
      " Generator sxemalarida",
      " Quvvat kuchaytirgichi sxemalarida",
      " Kuchlanish kuchaytirgichi sxemalarida"
    ],
    "answer": " To`grilagich sifatida"
  },
  {
    "question": "O`zgarmas tok dvigateli yakor tokining qiymati:",
    "options": [
      " Manbadan olinayotgan kuchlanishga bog`liq",
      " Yakorning burchak tezligiga bog`liq",
      " qo`zg`atish tokiga bog`liq",
      " Dvigatelning EYuk siga bog`liq"
    ],
    "answer": " Manbadan olinayotgan kuchlanishga bog`liq"
  },
  {
    "question": "O`zgarmas tok dvigateli EYuk ning qiymati:",
    "options": [
      " Yakorning burchak tezligiga bog`liq",
      " yakor tokiga bog`liq",
      " qo`zg`atish tokiga bog`liq",
      " Dvigatelning EYuk siga bog`liq"
    ],
    "answer": " Yakorning burchak tezligiga bog`liq"
  },
  {
    "question": "Asinxron dvigatellarni «revers» (aylanish yo`nalishini o`zgartirish) qanday amalga oshiriladi:",
    "options": [
      " Statordagi ikkita chulg`amni ulanishini o`zgartirish yo`li bilan",
      " Zanjirdagi kuchlanish o`zgartirish yo`li bilan",
      " Dvigatelga qo`yilgan yukni kamaytirish",
      " Statordagi uchchala chulg`amni ulanishini o`zgartirish yo`li bilan"
    ],
    "answer": " Statordagi ikkita chulg`amni ulanishini o`zgartirish yo`li bilan"
  },
  {
    "question": "Asinxron dvigatelining ishga tushirilgandagi sirpanishi nimaga teng:",
    "options": [
      " 1",
      " nol",
      " 0,5",
      " Cheksiz"
    ],
    "answer": " 1"
  },
  {
    "question": "Asinxron dvigatelning ishga tushirish toki stator chulg`ami uchburchakdan yulduzga o`zgartirilganda qanday o`zgaradi:",
    "options": [
      " 1.73 marta tok kamayadi",
      " Ikkala holatda ham tok o`zgarmaydi",
      " 1.73 marta tok ortadi",
      " 3 marta tok ortadi"
    ],
    "answer": " 1.73 marta tok kamayadi"
  },
  {
    "question": "Parallel qo`zg`atishli dvigatelni qanday qilib teskari tomonga aylantirish qilinadi:",
    "options": [
      " Yakor yoki qo`zg`atish chulg`amlaridagi tok yo`nalishini o`zgartiriladi",
      " Dvigatel qismlaridagi kuchlanish qutblarini o`zgartiriladi",
      " Yakor va qo`zg`atish chulg`amlaridagi tok yo`nalishini o`zgartiriladi",
      " Dvigatel validagi nagruzka oshiriladi"
    ],
    "answer": " Yakor yoki qo`zg`atish chulg`amlaridagi tok yo`nalishini o`zgartiriladi"
  },
  {
    "question": "Asinxron dvigatel magnit maydonining aylanish tezligi nimalar orqali aniqlanadi:",
    "options": [
      " O`zgaruvchan tok chastotasi va dvigatelning qutblar soni orqali",
      " Tarmoq kuchlanishi orqali",
      " Dvigatel yuklamasi orqali",
      " Rotorning aylanish tezligi orqali"
    ],
    "answer": " O`zgaruvchan tok chastotasi va dvigatelning qutblar soni orqali"
  },
  {
    "question": "Keltirilgan jumlalardan qaysi biri asinxron dvigatelning M maksimal momenti uchun to`g`ri:",
    "options": [
      " M moment rotorning aktiv qarshiligi qiymatiga to`g`ri proporsional",
      " M moment rotorning aktiv qarshiligi qiymatiga teskari proporsional",
      " M moment rotorning aktiv qarshiligi qiymatiga bog`liq emas",
      " M moment bilan rotorning aktiv qarshiligi kvadrat holda bog`liq"
    ],
    "answer": " M moment rotorning aktiv qarshiligi qiymatiga to`g`ri proporsional"
  },
  {
    "question": "Keltirilgan tezliklardan qaysi biri asinxron dvigatelning normal rejimdagi tezligiga to`g`ri keladi:",
    "options": [
      " 750 ayl/min",
      " 3150 ayl/min",
      " 1550 ayl/min",
      " 1020 ayl/min"
    ],
    "answer": " 750 ayl/min"
  },
  {
    "question": "Tarmoq chastotasi f bo`lsa aylanayotgan rotorning EYuk si qancha bo`ladi:",
    "options": [
      " fS",
      " F",
      " 2f",
      " nol`"
    ],
    "answer": " fS"
  },
  {
    "question": "Elektr mashinalari qanday rejimlarda ishlashi mumkin:",
    "options": [
      " Dvigatel, generator va tormoz rejimida",
      " Qisqa vaqtli, tormoz tejimida",
      " Oraliq, davomiy va tezlik rejimida",
      " Dvigatel, qisqa vaqtli, tormoz tejimida"
    ],
    "answer": " Dvigatel, generator va tormoz rejimida"
  },
  {
    "question": "Asinxron dvigatel generator rejimida ishlashi mumkinmi:",
    "options": [
      " Ha",
      " Bo`lishi mumkin emas",
      " Yo`q",
      " Xech qachon"
    ],
    "answer": " Ha"
  },
  {
    "question": "Asinxron dvigatelining magnit maydonining sinxron tezligi formulasi qaysi javobda to`g`ri yozilgan:",
    "options": [
      " n1 = (60*f) / p",
      " n1 = 6*f / 60",
      " n1 = f / p",
      " n1 = (60 * p) / f"
    ],
    "answer": " n1 = (60*f) / p"
  },
  {
    "question": "Agarda f=50 Gs, qutblar soni p=6 ga teng bo`lsa, n1 magnit maydonini aylanish chastotasi nimaga teng bo`ladi:",
    "options": [
      " 500",
      " 600",
      " 1250",
      " 750"
    ],
    "answer": " 500"
  },
  {
    "question": "Elektrodvigatelni to`xtatishda qanday usullar ishlatiladi:",
    "options": [
      " Elektrodinami, generatorli, teskari ulash",
      " majburiy, qo`l yordamida, mexanik",
      " teskari ulash, magnitli",
      " Mexanik va qo`l yordamida"
    ],
    "answer": " Elektrodinami, generatorli, teskari ulash"
  },
  {
    "question": "Magnit maydoni 1000 ayl/min va sirpanish S=1 bo`lsa, rotorning aylanish chastotasi nimaga teng:",
    "options": [
      " 0",
      " 600",
      " 1250",
      " 750"
    ],
    "answer": " 0"
  },
  {
    "question": "Magnit maydoni 600 ayl/min va sirpanish S=0 bo`lsa, rotorning aylanish chastotasi nimaga teng:",
    "options": [
      " 600",
      " 900",
      " 1250",
      " 750"
    ],
    "answer": " 600"
  },
  {
    "question": "Transformator qanday qismlardan iborat",
    "options": [
      " Po’lat o’zak (sterjen) va birlamchi va ikkilamchi chulg’amlardan",
      " Po’lat o’zak va metal plastinkalardan",
      " Po’lat o’zak va g’altakdan",
      " G’altak va chulg’amlardan"
    ],
    "answer": " Po’lat o’zak (sterjen) va birlamchi va ikkilamchi chulg’amlardan"
  },
  {
    "question": "Transformatorni kim va qachon ixtiro qilgan",
    "options": [
      " 1876 yilda Yablochkov P. N",
      " 1889 yilda Dolivo-Dobrovolskiy M. O",
      " 1880 yilda Usagin",
      " 1821 yilda Maksvel"
    ],
    "answer": " 1876 yilda Yablochkov P. N"
  },
  {
    "question": "O’zgaruvchan tok mashinalari necha xil bo’ladi?",
    "options": [
      " Sinxron, asinxron, kollektorli",
      " Asinxron, reduktorli",
      " Kollektorli, parallel ko’zg’atish chulg’amli",
      " Kollektorli, yakorli"
    ],
    "answer": " Sinxron, asinxron, kollektorli"
  },
  {
    "question": "Elektr motorni tormozlashning qanday usullari bor",
    "options": [
      " Generatroli,qarshi qo’shish bilan, elektrodinamik",
      " Gidravlik, elektrodinamik, qo’shimcha kuch bilan",
      " Elektrodinamik, teskari ulab, qarshi qo’shib",
      " Qo’shimcha kuch bilan, kolodkalar yordamida, gidravlik."
    ],
    "answer": " Generatroli,qarshi qo’shish bilan, elektrodinamik"
  },
  {
    "question": "Transformator nagruzkada ishlaganda uning ikkilamchi chulg’ami uchlari qanday xolatda bo’ladi?",
    "options": [
      " Yuklamaga ulangan bo’ladi",
      " Qisqa tutashtirilgan",
      " Ochiq xolda bo’ladi",
      " To’g’ri javob yo’q."
    ],
    "answer": " Yuklamaga ulangan bo’ladi"
  },
  {
    "question": "Transformator salt ishlaganda ikkilamchi chulg’amdagi tok kuchi nechaga teng bo’ladi?",
    "options": [
      " 0",
      " 127",
      " 220",
      " 380"
    ],
    "answer": " 0"
  },
  {
    "question": "Elektr motor ish rejimlari qaysi xarf bilan belgilanadi?",
    "options": [
      " S",
      " I",
      " R",
      " F"
    ],
    "answer": " S"
  },
  {
    "question": "O’lchov transformatorlarining qanday turlari mavjud?",
    "options": [
      " Tok va kuchlanish",
      " Quvvat, tezlik, tok",
      " Tok va quvvat",
      " Tezlik va quvvat"
    ],
    "answer": " Tok va kuchlanish"
  },
  
  
  {
    "question": "O‘zgarmas tok generatori ishlashining asosida elektrotexnikaning qanday qonuni yotadi?",
    "options": [
      "Elektromagnit induksiya qonuni",
      "Amper qonuni",
      "Kirxgofning 1 qonuni",
      "Lens qoidasi"
    ],
    "answer": "Elektromagnit induksiya qonuni"
  },
  {
    "question": "Ayon qutbli sinxron generatorning yakor chulg‘amida hosil kilinayotgan EYUK shakli sinusoidal bo‘lishi uchun uning havo oralig‘i qanday olinadi?",
    "options": [
      "Qutb uchliklari o‘rtasida kichik va chetlarida nisbatan katta",
      "Rotor butun aylanasi bo‘ylab bir xil",
      "Qutb uchliklari o‘rtasida katta va chetlarida kichkina",
      "Javob uchun ma’lumot yetarli emas"
    ],
    "answer": "Qutb uchliklari o‘rtasida kichik va chetlarida nisbatan katta"
  },
  {
    "question": "O‘zgarmas tok mashinasi yakor chulg‘ami o‘tkazgichlaridan tok o‘tganda ularda oqayotgan magnit oqim yo‘nalishi qaysi qoida bo‘yicha aniqlanadi?",
    "options": [
      "Parma qoidasi",
      "O‘ng qo‘l qoidasi",
      "Chap qo‘l qoidasi",
      "Amper qonuni"
    ],
    "answer": "Parma qoidasi"
  },
  {
    "question": "Uch fazali sinxron generatorning stator chulg‘amida 3000 ayl/min chastotada aylanma magnit maydon hosil bo‘lsa, uning rotori qanday chastotada aylanadi?",
    "options": [
      "3000 ayl/min",
      "Masala noaniq, chunki yakor chulg‘amidagi tok chastotasi noma’lum",
      "Masala noaniq, chunki rotor qutblari soni noma’lum",
      "1500 ayl/min"
    ],
    "answer": "3000 ayl/min"
  },
  {
    "question": "Yakor toki Ia 2 marta oshsa parallel qo‘zg‘atishli o‘zgarmas tok motorining aylantiruvchi momenti qanday o‘zgaradi?",
    "options": [
      "2 marta oshadi",
      "O‘zgarmaydi",
      "Aniqlab bo‘lmaydi, chunki mashina qutblari berilmagan",
      "4 marta oshadi"
    ],
    "answer": "2 marta oshadi"
  },
  {
    "question": "Ikki juft qutbli sinxron generatorning rotori 1500 ayl/min chastota bilan aylanmoqda. Yakor chulg‘amida hosil qilingan asosiy EYUK ga mos vektor qanday chastota bilan aylanadi?",
    "options": [
      "50 Gs",
      "100 Gs",
      "25 Gs",
      "1000 Gs"
    ],
    "answer": "50 Gs"
  },
  {
    "question": "O‘zgarmas tok generatori yakor chulg‘ami o‘tkazgichlarida hosil bo‘lgan EYUK yo‘nalishi qaysi qoida bo‘yicha aniqlanadi?",
    "options": [
      "O‘ng qo‘l qoidasi",
      "Chap qo‘l qoidasi",
      "Parma qoidasi",
      "Amper qonuni"
    ],
    "answer": "O‘ng qo‘l qoidasi"
  },
  {
    "question": "Gidrogeneratorlarda (a), turbogeneratorlarda (b) qanday rotorlar qo‘llaniladi?",
    "options": [
      "a) ayon qutbli, b) noayon qutbli",
      "a) noayon qutbli, b) ayon qutbli",
      "Rotorni tanlash generatorning quvvatiga bog‘liq",
      "a) ayon qutbli, b) ayon qutbli"
    ],
    "answer": "a) ayon qutbli, b) noayon qutbli"
  },
  {
    "question": "Elektr mashinaning qanday qismini stator deb ataladi?",
    "options": [
      "Mashinaning qo‘zg‘almas qismi",
      "EYUK hosil bo‘ladigan qismi",
      "Qo‘zg‘atish magnit oqimi hosil qilinadigan qismi",
      "Mashinaning aylanadigan qismi"
    ],
    "answer": "Mashinaning qo‘zg‘almas qismi"
  },
  {
    "question": "Sinxron generatorning yuklama toki induktiv xarakterda bo‘lganda, uning yakor reaksiyasi qanday bo‘ladi?",
    "options": [
      "Bo‘ylama magnitsizlovchi",
      "Ko‘ndalang",
      "Bo‘ylama magnitlovchi",
      "Ko‘ndalang magnitlovchi"
    ],
    "answer": "Bo‘ylama magnitsizlovchi"
  },
  {
    "question": "O‘zgarmas tok motorining muvozanat tenglamasi M – MD = M0 + M2 bo‘lsa, motorning aylanish chastotasi qanday o‘zgaradi?",
    "options": [
      "Oshadi",
      "O‘zgarmaydi",
      "Kamayadi",
      "Aniqlab bo‘lmaydi, chunki mashina qutblari berilmagan"
    ],
    "answer": "Oshadi"
  },
  {
    "question": "Sinxron generatorning induktiv yuklamasi oshirilganda, uning chiqish klemmalarida kuchlanish qanday o‘zgaradi?",
    "options": [
      "Kamayadi",
      "O‘zgarmaydi",
      "Oshadi",
      "Avvaliga oshib, keyin kamayadi"
    ],
    "answer": "Kamayadi"
  },
  {
    "question": "O‘zgarmas tok generatori yakor chulg‘ami simlarida hosil bo‘lgan EYUK yo‘nalishi qanday qoida bo‘yicha aniqlanadi?",
    "options": [
      "O‘ng qo‘l qoidasi",
      "Chap qo‘l qoidasi",
      "Parma qoidasi",
      "Amper qonuni"
    ],
    "answer": "O‘ng qo‘l qoidasi"
  },
  {
    "question": "Sinxron motor yuklamasi ortishi bilan mexanik tavsifi qanday o‘zgaradi?",
    "options": [
      "O‘zgarmaydi",
      "Oshadi",
      "To‘g‘ri chizikli ko‘rinishda kamayadi",
      "Egri chiziqli ko‘rinishda kamayadi"
    ],
    "answer": "O‘zgarmaydi"
  },
  {
    "question": "O‘zgarmas tok motorining yakor chulg‘amida EYUK kamaysa, yakor toki va elektr tarmog‘idan oladigan quvvat qanday o‘zgaradi?",
    "options": [
      "Tok va quvvat oshadi",
      "Tok oshadi, quvvat kamayadi",
      "Tok va quvvat kamayadi",
      "Tok kamayadi, quvvat oshadi"
    ],
    "answer": "Tok va quvvat oshadi"
  },
  {
    "question": "Uch fazali sinxron generatorning yuklamasi aktiv xarakterga ega. Yakor chulg‘ami g‘altagining qutbga nisbatan qanday holatida undagi tok oniy qiymati ekstremal bo‘ladi?",
    "options": [
      "Gʻaltak tomonlari qutblar o‘rtasining yaqinida bo‘lganda",
      "Gʻaltak o‘rtasi shimoliy qutblar ustida bo‘lganda",
      "Javob uchun ma’lumot yetarli emas",
      "Gʻaltak o‘rtasi janubiy qutblar ustida bo‘lganda"
    ],
    "answer": "Gʻaltak tomonlari qutblar o‘rtasining yaqinida bo‘lganda"
  },
  {
    "question": "O‘zgaruvchan tokli elektr mashinasining qanday qismi yakor deyiladi?",
    "options": [
      "Asosiy EYUK hosil bo‘ladigan qismi",
      "Qo‘zg‘almas qismi",
      "Rotori",
      "Stator"
    ],
    "answer": "Asosiy EYUK hosil bo‘ladigan qismi"
  },
  {
    "question": "Magnit zanjiri to‘yinmagan sinxron mashinaning yuklama toki aktiv xarakterga ega bo‘lganda yakor reaksiyasi asosiy magnit oqim umumiy maydoni qiymatiga qanday ta’sir qiladi?",
    "options": [
      "Ta’sir qilmaydi",
      "Kamaytiradi",
      "Oshiradi",
      "Avval kamayib keyin oshadi"
    ],
    "answer": "Ta’sir qilmaydi"
  },
  {
    "question": "O‘zgarmas tok generatorida yakor reaksiyasi nima?",
    "options": [
      "Yakor magnit maydonining qutblar hosil qilgan asosiy magnit maydonga ta’siri",
      "Generatorning yuklamasi oshganda asosiy magnit maydonning buzilishi",
      "Yakor chulg‘ami MYUKning asosiy magnit maydoniga ta’siri",
      "Yuklama oshishi bilan mashina magnit maydoni oqimining kamayishi"
    ],
    "answer": "Yakor magnit maydonining qutblar hosil qilgan asosiy magnit maydonga ta’siri"
  },
  {
    "question": "Uch fazali sinxron generatorning stator chulg‘amida 3000 ayl/min chastotada aylanma magnit maydon hosil bo‘lsa, uning rotori qanday chastotada aylanadi?",
    "options": [
      "3000 ayl/min",
      "2915 ayl/min.",
      "1450 ayl/min.",
      "1500 ayl/min"
    ],
    "answer": "3000 ayl/min"
  },
  {
    "question": "Elektromagnit induksiya qonuni to‘g‘ri ifodalangan formulalar keltirilgan satrni ko‘rsating.",
    "options": [
      "e = – w∙dF/dt ; e = B∙l∙v",
      "e = – w∙dF/dt ; F = I∙l B",
      "F = VS ; F = I∙l B",
      "E = w∙dF/dt ; F = VS"
    ],
    "answer": "e = – w∙dF/dt ; e = B∙l∙v"
  },
  {
    "question": "Sinxron generatori chiqish klemmalaridagi kuchlanishning yuksiz ishlash EYUK dan farqlanishi qanday sabablar tufayli sodir bo‘ladi?",
    "options": [
      "Yuqorida keltirilgan barcha sabablarning bir vaqtda ta’siri",
      "Yakor reaksiyasi",
      "Tarqoq induktiv qarshilikda kuchlanish pasayishi",
      "Yakor chulg‘ami aktiv qarshiligida kuchlanish pasayishi"
    ],
    "answer": "Yuqorida keltirilgan barcha sabablarning bir vaqtda ta’siri"
  },
  {
    "question": "O‘zgarmas tok generatori elektr tarmog‘iga uzatayotgan tok miqdori ortsa, generator validagi aylantiruvchi moment qanday o‘zgaradi?",
    "options": [
      "Ortadi",
      "O‘zgarmaydi",
      "Kamayadi",
      "Aniqlashning imkoni yo‘q, chunki kuchlanish noma’lum"
    ],
    "answer": "Ortadi"
  },
  {
    "question": "Sinxron generatorining aktiv-sig‘im (aralash) xarakterdagi yuklamasi ortsa, uning umumiy magnit maydoni qanday o‘zgaradi?",
    "options": [
      "Ko‘payadi",
      "Kamayadi",
      "O‘zgarmaydi",
      "Aktiv va sig‘imiy xarakterdagi yuklamalarning nisbatiga bog‘liq"
    ],
    "answer": "Ko‘payadi"
  },
  {
    "question": "Qo‘zg‘atish chulg‘amining magnit oqimi o‘zgarmas bo‘lib, yakor chulg‘amida tok ortsa, o‘zgarmas tok motorining aylantiruvchi momenti qanday o‘zgaradi?",
    "options": [
      "Oshadi",
      "O‘zgarmaydi",
      "Kamayadi",
      "Aniqlab bo‘lmaydi, chunki kuchlanish berilmagan"
    ],
    "answer": "Oshadi"
  },
  {
    "question": "Parallel qo‘zg‘otishli o‘zgarmas tok motorining validagi mexanik yuklama ortsa, yakorning aylanish chastotasi qanday o‘zgaradi?",
    "options": [
      "Kamayadi",
      "O‘zgarmaydi",
      "Ortadi",
      "Aniqlab bo‘lmaydi, chunki kuchlanish berilmagan"
    ],
    "answer": "Kamayadi"
  },
  {
    "question": "Sinxron generatorning yuklama toki ortganda uning kuchlanishi o‘zgarmay qolishi uchun qo‘zg‘atish toki qanday o‘zgartirilishi kerak?",
    "options": [
      "Aniqlab bo‘lmaydi, chunki yuklamaning xarakteri ko‘rsatilmagan",
      "Kamaytiriladi",
      "O‘zgartirilmaydi",
      "Oshiriladi"
    ],
    "answer": "Aniqlab bo‘lmaydi, chunki yuklamaning xarakteri ko‘rsatilmagan"
  },
  {
    "question": "Amper qonunining matematik ifodasini ko‘rsating.",
    "options": [
      "F = I∙l∙B",
      "Ye = B∙l∙v",
      "e = – w∙dF/dt",
      "F = V/S"
    ],
    "answer": "F = I∙l∙B"
  },
  {
    "question": "Sinxron generatorning bo‘ylama va ko‘ndalang magnitsizlovchi yakor reaksiyasi qanday xarakterdagi yuklamaga mos keladi?",
    "options": [
      "Aktiv-induktiv",
      "Aktiv",
      "Induktiv",
      "Aktiv-sig‘imiy"
    ],
    "answer": "Aktiv-induktiv"
  },
  {
    "question": "O‘zgarmas tok mashinasining yakor chulg‘ami o‘ramlari ketma-ket ulangan. Generator chiqish klemmalaridagi natijaviy EYUK pulsasiyasini nimaning hisobiga kamaytirish mumkin?",
    "options": [
      "O‘ramlar soni oshiriladi va ular yakor aylanasi bo‘yicha tekis taqsimlanadi",
      "O‘ramlar sonini oshirib",
      "Yakor aylanasi bo‘yicha o‘ramlarni tekis taqsimlab",
      "Javob uchun ma’lumot yetarli emas"
    ],
    "answer": "O‘ramlar soni oshiriladi va ular yakor aylanasi bo‘yicha tekis taqsimlanadi"
  },
  {
    "question": "Sinxron motorning qaysi qismida ishga tushirish chulg‘ami joylashtiriladi?",
    "options": [
      "Qutb uchligida",
      "Yakor o‘zagida",
      "Yakor chulg‘amining pazdan tashqari qismlarida",
      "Statorda"
    ],
    "answer": "Qutb uchligida"
  },
  {
    "question": "O‘zgarmas tok motorining aylanish chastotasi kamaydi. Yakor chulg‘amida hosil bo‘ladigan EYUK qanday o‘zgardi?",
    "options": [
      "Kamaydi",
      "O‘zgarmadi",
      "Oshdi",
      "Ishorasi teskariga o‘zgardi"
    ],
    "answer": "Kamaydi"
  },
  {
    "question": "Sinxron generator yuklamasi sof induktiv xarakterda bo‘lganda, uning yakor reaksiyasi qanday bo‘ladi?",
    "options": [
      "Ko‘ndalang magnitsizlovchi",
      "Bo‘ylama magnitsizlovchi",
      "Bo‘ylama magnitlovchi",
      "Ko‘ndalang magnitlovchi"
    ],
    "answer": "Ko‘ndalang magnitsizlovchi"
  },
  {
    "question": "O‘zgarmas tok generatorida energiya isroflarining qanday turlari mavjud?",
    "options": [
      "Yuqorida ko‘rsatilgan isroflarning barcha turlari",
      "Ishqalanishdagi isroflar, po‘lat o‘zakdagi isroflar",
      "Yakor va qo‘zg‘atish chulg‘amlaridagi isroflar",
      "Cho‘tka kontaktlaridagi isroflar, qo‘shimcha isroflar"
    ],
    "answer": "Yuqorida ko‘rsatilgan isroflarning barcha turlari"
  },
  {
    "question": "Elektr mashinaning qanday qismini stator deb ataladi?",
    "options": [
      "Mashinaning qo‘zg‘almas qismi",
      "EYUK hosil bo‘ladigan qismi",
      "Qo‘zg‘atish magnit oqimi hosil qilinadigan qismi",
      "Mashinaning aylanadigan qismi"
    ],
    "answer": "Mashinaning qo‘zg‘almas qismi"
  },
  {
    "question": "Sinxron generatorning sig‘im xarakterli yuklamasi ortganda, uning chiqish klemmalari kuchlanishi o‘zgarmas bo‘lishi uchun qo‘zg‘atish tokiga qanday ta’sir qilinadi?",
    "options": [
      "Kamaytiriladi",
      "Oshiriladi",
      "O‘zgartirilmaydi",
      "Avval oshiriladi, keyin kamaytiriladi"
    ],
    "answer": "Kamaytiriladi"
  },
  {
    "question": "O‘zgarmas tok generatori tarmoqqa 8 kVt quvvat bermoqda. Generatorda quvvat isroflari yig‘indisi 2 kVt. Generatorning FIK ni (%) da aniqlang.",
    "options": [
      "80",
      "25",
      "92",
      "85"
    ],
    "answer": "80"
  },
  {
    "question": "Sinxron generatorning yuklama toki ortganda uning kuchlanishi o‘zgarmay qolishi uchun qo‘zg‘atish toki qanday o‘zgartirilishi kerak?",
    "options": [
      "Javob uchun ma’lumotlar yetarli emas",
      "Kamaytiriladi",
      "O‘zgartirilmaydi",
      "Oshiriladi"
    ],
    "answer": "Javob uchun ma’lumotlar yetarli emas"
  },
  {
    "question": "O‘zgarmas tok generatorining yakor chulg‘amida o‘ramlarida qanday EYUK hosil bo‘ladi?",
    "options": [
      "O‘zgaruvchan",
      "Qiymat jihatdan o‘zgarmas",
      "Yo‘nalishi jihatdan o‘zgarmas",
      "Qiymati va yo‘nalishi jihatdan o‘zgarmas"
    ],
    "answer": "O‘zgaruvchan"
  },
  {
    "question": "Turbogeneratorlarda qanday rotor qo‘llaniladi?",
    "options": [
      "Ayon qutbli",
      "Noayon qutbli",
      "Rotorni tanlash generator tokiga bog‘liq",
      "Rotorni tanlash generator quvvatiga bog‘liq"
    ],
    "answer": "Ayon qutbli"
  },
  {
    "question": "Yuksiz ishlash rejimidagi sinxron motorning foydali ish koeffitsiyenti nimaga teng?",
    "options": [
      "0 ga",
      "Juda kichik qiymatga",
      "Maksimal qiymatga",
      "0,5 ga"
    ],
    "answer": "0 ga"
  },
  {
    "question": "Quyidagi shartlardan qaysi biri generatorning o‘z-o‘zini qo‘zg‘atish shartlariga tegishli emas?",
    "options": [
      "Yakorning aylanish chastotasi nominalga teng bo‘lishi",
      "Qoldiq magnit oqimning mavjudligi",
      "Qo‘zg‘atish chulg‘ami ulanish ishorasining to‘g‘riligi (to‘g‘ri ulanishi)",
      "Qo‘zg‘atish zanjiri qarshiligini to‘g‘ri tanlash (ya’ni r < rkr)"
    ],
    "answer": "Yakorning aylanish chastotasi nominalga teng bo‘lishi"
  },
  {
    "question": "Sinxron motorning mexanik tavsifsi yuklama oshishi bilan qanday o‘zgaradi?",
    "options": [
      "Ortadi",
      "O‘zgarmaydi",
      "To‘g‘ri chiziqli ko‘rinishda kamayadi",
      "Egri chiziqli ko‘rinishda kamayadi"
    ],
    "answer": "Ortadi"
  },
  {
    "question": "Parallel qo‘zg‘atishli o‘zgarmas tok generatorining yuklamasi ortganda: a) bosh qutblarning magnit oqimi, b) generatorning natijaviy magnit oqimi qanday o‘zgaradi?",
    "options": [
      "a) Kamayadi; b) kamayadi",
      "a) Oshadi; b) kamayadi",
      "a) Kamayadi; b) o‘zgarmaydi",
      "a) O‘zgarmaydi; b) o‘zgarmaydi"
    ],
    "answer": "a) Kamayadi; b) kamayadi"
  },
  {
    "question": "Sinxron motorni ishga tushirishning qaysi usuli qo‘llanilmaydi?",
    "options": [
      "Uchchala usuldan biri (yordamchi motor, chastota usuli, dempfer) ekspluatatsiya shartiga qarab",
      "Yordamchi motor yordamida",
      "Chastota usuli",
      "Rotor chulg‘ami so‘ndiruvchi qarshilik ulash bilan asinxron usulda"
    ],
    "answer": "Uchchala usuldan biri (yordamchi motor, chastota usuli, dempfer) ekspluatatsiya shartiga qarab"
  },
  {
    "question": "O‘zgarmas tok generatoriga birlamchi motordan berilayotgan quvvat 50 kVt, generatorning tarmoqqa berayotgan quvvati 45 kVt. Generatorning FIK ni (%) da toping.",
    "options": [
      "90",
      "75",
      "92",
      "80"
    ],
    "answer": "90"
  },
  {
    "question": "Ikki juft qutbli sinxron motor stator chulg‘amiga berilgan tok chastotasi f=50 Gs. Rotorning aylanish chastotasini aniqlang.",
    "options": [
      "1500 ayl/min",
      "2850 ayl/min",
      "1450 ayl/min",
      "3000 ayl/min"
    ],
    "answer": "1500 ayl/min"
  },
  {
    "question": "Generator yuklamasi 2 marta ortsa yakor chulg‘amida isroflar qanday o‘zgaradi?",
    "options": [
      "4 marta oshadi",
      "O‘zgarmaydi",
      "2 marta oshadi",
      "2 marta kamayadi"
    ],
    "answer": "4 marta oshadi"
  },
  {
    "question": "Sinxron motor tuzilishi jihatdan asinxron motordan prinsipial ravishda nima bilan farq qilmaydi (qutblar soni bir xil)?",
    "options": [
      "Stator chulg‘ami",
      "Rotor chulg‘ami",
      "Val uzunligi",
      "Rotor magnit o‘zagi"
    ],
    "answer": "Stator chulg‘ami"
  },
  {
    "question": "O‘zgarmas tok motorining quyida keltirilgan: a) mexanik tavsifi va b) ish tavsifsini ko‘rsating.",
    "options": [
      "a) n = f(M); b) Ia = f(P2)",
      "a) n = f(P2); b) n = f(M)",
      "a) n = f(P2); b) M = f(P2)",
      "a) n = f(M0); b) M0 = f(P2)"
    ],
    "answer": "a) n = f(M); b) Ia = f(P2)"
  },
  {
    "question": "Cheksiz katta quvvatli tarmoqqa ulangan sinxron motorning validagi mexanik yuk ortsa, motorning aylanish chastotasi qanday o‘zgaradi?",
    "options": [
      "O‘zgarmaydi",
      "Ko‘payadi",
      "Kamayadi",
      "Oldin kamayib, keyin oshadi"
    ],
    "answer": "O‘zgarmaydi"
  },
  {
    "question": "O‘zgarmas tok motorini ta’minlovchi kuchlanish o‘zgarmas bo‘lib, uning validagi yuk ortganda yakor aylanish chastotasi kamaysa, yakor chulg‘ami EYUK o‘zgaradimi?",
    "options": [
      "Kamayadi",
      "O‘zgarmaydi",
      "Oshadi",
      "Yakor chulg‘amida EYUK hosil bo‘lmaydi"
    ],
    "answer": "Kamayadi"
  },
  {
    "question": "Sinxron motorning ish tavsiflari tarkibidagi bog‘lanish motor yuklamasi ortishi bilan qanday o‘zgaradi?",
    "options": [
      "Ortadi",
      "Kamayadi",
      "Magnit zanjiri to‘yinishi tufayli keskin o‘zgaradi",
      "O‘zgarmaydi"
    ],
    "answer": "Ortadi"
  },
  {
    "question": "O‘zgarmas tok motorining yakor chulg‘amida EYUK kamaydi. Yakor toki va elektr tarmog‘idan oladigan quvvat qanday o‘zgaradi?",
    "options": [
      "Tok va quvvat ortdi",
      "Tok va quvvat kamaydi",
      "Tok oshdi, quvvat kamaydi",
      "Tok kamaydi, quvvat oshdi"
    ],
    "answer": "Tok va quvvat ortdi"
  },
  {
    "question": "Sinxron motor ishlayotgan paytda dempfer (ishga tushirish) chulg‘ami qanday vazifani bajaradi?",
    "options": [
      "Sinxron motorni asinxron ishga tushirish",
      "Rotor tebranishlarini tinchlantiradi",
      "Bo‘ylama o‘k bo‘ylab yakor reaksiyasini kamaytirish",
      "Qutbdagi asosiy magnit maydonini oshirish"
    ],
    "answer": "Sinxron motorni asinxron ishga tushirish"
  },
  {
    "question": "Kollektorning asosiy vazifasi nimadan iborat?",
    "options": [
      "Chulg‘am seksiyalaridagi o‘zgaruvchan tokni o‘zgarmas tokka o‘zgartirish",
      "Yakor chulg‘amini mahkamlash",
      "Aylanuvchi yakor chulg‘amini mashinaning qo‘zg‘almas qismidagi klemmalar bilan elektr ulash",
      "Yakor chulg‘amiga cho‘tka qo‘yish"
    ],
    "answer": "Chulg‘am seksiyalaridagi o‘zgaruvchan tokni o‘zgarmas tokka o‘zgartirish"
  },
  {
    "question": "Sinxron generatorning aktiv xarakterdagi yuklamasi oshsa, chiqish klemmalaridagi kuchlanish o‘zgarmas bo‘lishi uchun qo‘zg‘atish tokini qanday o‘zgartirish kerak?",
    "options": [
      "Oshirish",
      "O‘zgartirilmaydi",
      "Kamaytirish",
      "Javob uchun ma’lumot yetarli emas"
    ],
    "answer": "Oshirish"
  },
  {
    "question": "Yakorning pazlar soni Z=12 ta. Yakor chulg‘ami ikki qatlamli: a) chulg‘am seksiyalari soni S va b) kollektor plastinalari soni K ni hisoblang.",
    "options": [
      "a) 6; b) 12",
      "a) 12; b) 12",
      "a) 6; b) 6",
      "a) 12; b) 6"
    ],
    "answer": "a) 6; b) 12"
  },
  {
    "question": "Quyidagi qaysi shartlar bajarilganida Iq = f(Ia) bog‘liqlik sinxron generatorning rostlash tavfisi bo‘la oladi?",
    "options": [
      "Yuqoridagi hamma shartlar bajarilsa",
      "f = const",
      "cosφ = const",
      "U = const"
    ],
    "answer": "Yuqoridagi hamma shartlar bajarilsa"
  },
  {
    "question": "Mustaqil qo‘zg‘atishli generatorning yuklamasi oshsa: a) bosh qutblarning magnit oqimi va b) generatorning natijaviy magnit oqimi qanday o‘zgaradi?",
    "options": [
      "a) O‘zgarmaydi; b) kamayadi",
      "a) O‘zgarmaydi; b) oshadi",
      "a) Kamayadi; b) kamayadi",
      "a) Oshadi; b) o‘zgarmaydi"
    ],
    "answer": "a) O‘zgarmaydi; b) kamayadi"
  },
  {
    "question": "O‘zgarmas tok generatori ishlashining asosida elektrotexnikaning qanday qonuni yotadi?",
    "options": [
      "Elektromagnit induksiya qonuni",
      "Amper qonuni",
      "Kirxgofning 1 qonuni",
      "Lens qoidasi"
    ],
    "answer": "Elektromagnit induksiya qonuni"
  },
  {
    "question": "Ayon qutbli sinxron generatorning yakor chulg‘amida hosil kilinayotgan EYUK shakli sinusoidal bo‘lishi uchun uning havo oralig‘i qanday olinadi?",
    "options": [
      "Qutb uchliklari o‘rtasida katta va chetlarida kichkina",
      "Rotor butun aylanasi bo‘ylab bir xil",
      "Qutb uchliklari o‘rtasida kichik va chetlarida nisbatan katta",
      "Javob uchun ma’lumot yetarli emas"
    ],
    "answer": "Qutb uchliklari o‘rtasida katta va chetlarida kichkina"
  },
  {
    "question": "O‘zgarmas tok mashinasi yakor chulg‘ami o‘tkazgichlaridan tok o‘tganda ularga ta’sir etuvchi kuchning yo‘nalishi qaysi qoida bo‘yicha aniqlanadi?",
    "options": [
      "Chap qo‘l qoidasi",
      "O‘ng qo‘l qoidasi",
      "Parma qoidasi",
      "Amper qonuni"
    ],
    "answer": "Chap qo‘l qoidasi"
  },
  {
    "question": "Uch fazali sinxron generatorning stator chulg‘amida 3000 ayl/min chastotada aylanma magnit maydon hosil bo‘lsa, uning rotori qanday chastotada aylanadi?",
    "options": [
      "3000 ayl/min",
      "Masala noaniq, chunki yakor chulg‘amidagi tok chastotasi noma’lum",
      "Masala noaniq, chunki rotor qutblari soni noma’lum",
      "1500 ayl/min"
    ],
    "answer": "3000 ayl/min"
  },
  {
    "question": "Yakor toki Ia 2 marta oshsa parallel qo‘zg‘atishli o‘zgarmas tok motorining aylantiruvchi momenti qanday o‘zgaradi?",
    "options": [
      "2 marta oshadi",
      "O‘zgarmaydi",
      "Aniqlab bo‘lmaydi, chunki mashina qutblari berilmagan",
      "4 marta oshadi"
    ],
    "answer": "2 marta oshadi"
  },
  {
    "question": "Ikki qutbli sinxron generatorning rotori 1500 ayl/min chastota bilan aylanmoqda. Yakor chulg‘amida hosil qilingan asosiy EYUK ga mos vektor qanday chastota bilan aylanadi?",
    "options": [
      "50 ayl/s",
      "100 ayl/s",
      "25 ayl/s",
      "1000 ayl/s"
    ],
    "answer": "50 ayl/s"
  },
  {
    "question": "O‘zgarmas tok mashinasi yakor chulg‘ami o‘tkazgichlaridan tok o‘tganda ularga ta’sir etuvchi kuchning yo‘nalishi qaysi qoida bo‘yicha aniqlanadi?",
    "options": [
      "Chap qo‘l qoidasi",
      "O‘ng qo‘l qoidasi",
      "Parma qoidasi",
      "Amper qonuni"
    ],
    "answer": "Chap qo‘l qoidasi"
  },
  {
    "question": "Gidrogeneratorlarda (a), turbogeneratorlarda (b) qanday rotorlar qo‘llaniladi?",
    "options": [
      "a) ayon qutbli, b) noayon qutbli",
      "a) noayon qutbli, b) ayon qutbli",
      "Rotorni tanlash generatorning quvvatiga bog‘liq",
      "a) ayon qutbli, b) ayon qutbli"
    ],
    "answer": "a) ayon qutbli, b) noayon qutbli"
  },
  {
    "question": "Elektr mashinaning qanday qismini stator deb ataladi?",
    "options": [
      "Mashinaning qo‘zg‘almas qismi",
      "EYUK hosil bo‘ladigan qismi",
      "Qo‘zg‘atish magnit oqimi hosil qilinadigan qismi",
      "Mashinaning aylanadigan qismi"
    ],
    "answer": "Mashinaning qo‘zg‘almas qismi"
  },
  {
    "question": "Sinxron generatorning yuklama toki induktiv xarakterda bo‘lganda, uning yakor reaksiyasi qanday bo‘ladi?",
    "options": [
      "Bo‘ylama magnitsizlovchi",
      "Ko‘ndalang",
      "Bo‘ylama magnitlovchi",
      "Ko‘ndalang magnitlovchi"
    ],
    "answer": "Bo‘ylama magnitsizlovchi"
  },
  {
    "question": "O‘zgarmas tok motorining muvozanat tenglamasi M – MD = M0 + M2 bo‘lsa, motorning aylanish chastotasi qanday o‘zgaradi?",
    "options": [
      "Oshadi",
      "O‘zgarmaydi",
      "Kamayadi",
      "Aniqlab bo‘lmaydi, chunki mashina qutblari berilmagan"
    ],
    "answer": "Oshadi"
  },
  {
    "question": "Sinxron generatorning induktiv yuklamasi oshirilganda, uning chiqish klemmalarida kuchlanish qanday o‘zgaradi?",
    "options": [
      "Kamayadi",
      "O‘zgarmaydi",
      "Oshadi",
      "Avvaliga oshib, keyin kamayadi"
    ],
    "answer": "Kamayadi"
  },
  {
    "question": "O‘zgarmas tok generatori yakor chulg‘ami simlarida hosil bo‘lgan EYUK yo‘nalishi qanday qoida bo‘yicha aniqlanadi?",
    "options": [
      "O‘ng qo‘l qoidasi",
      "Chap qo‘l qoidasi",
      "Parma qoidasi",
      "Amper qonuni"
    ],
    "answer": "O‘ng qo‘l qoidasi"
  },
  {
    "question": "Sinxron motorning mexanik tavsifi yuklama oshishi bilan qanday o‘zgaradi?",
    "options": [
      "Egri chiziqli ko‘rinishda kamayadi",
      "Oshadi",
      "To‘g‘ri chizikli ko‘rinishda kamayadi",
      "O‘zgarmaydi"
    ],
    "answer": "Egri chiziqli ko‘rinishda kamayadi"
  },
  {
    "question": "O‘zgarmas tok motorining yakor chulg‘amida EYUK kamaysa, yakor toki va elektr tarmog‘idan oladigan quvvat qanday o‘zgaradi?",
    "options": [
      "Tok va quvvat oshadi",
      "Tok va quvvat kamayadi",
      "Tok oshadi, quvvat kamayadi",
      "Tok kamayadi, quvvat oshadi"
    ],
    "answer": "Tok va quvvat oshadi"
  },
  {
    "question": "Sinxron generatorni tarmoqqa parallel ulashda qaysi shart bajarilishi shart?",
    "options": [
      "Generatorda hosil bo‘layotgan kuchlanishning amplitudasi, fazasi va chastotasi tarmoqnikiga mos bo‘lishi",
      "Yuklamaning ko‘rsatkichlari muhim emas, har qanday sharoitda ulash mumkin",
      "Asosiy magnit maydon yo‘nalishi tarmoqniki bilan 180° faza farqiga ega bo‘lishi",
      "Generatordan olinadigan tok cheklovsiz bo‘lishi"
    ],
    "answer": "Generatorda hosil bo‘layotgan kuchlanishning amplitudasi, fazasi va chastotasi tarmoqnikiga mos bo‘lishi"
  },
  {
    "question": "O‘zgarmas tok generatorlari quvvatni oshirish uchun qanday usuldan foydalaniladi?",
    "options": [
      "Bir nechta generatorni parallel ulash",
      "Tarmoq chastotasini ikki marta oshirish",
      "Generator validagi aylanish chastotasini istalgancha o‘zgartirish",
      "Yakor chulg‘amlarini ketma-ket ulanganda quvvat chegarasi cheksiz bo‘ladi"
    ],
    "answer": "Bir nechta generatorni parallel ulash"
  },
  {
    "question": "Sinxron generatorning “asinxron” rejimga o‘tib qolishiga nima sabab bo‘lishi mumkin?",
    "options": [
      "Rotor qutblarining uyg‘unlashmagan (nosinxron) holati yoki noto‘g‘ri sozlanishi",
      "Tarmoq chulg‘amida kuchlanish 10% ga oshganda avtomatik tarzda asinxron rejim vujudga keladi",
      "Yakor chulg‘amlarining faqat bitta fazasiga kuchlanish berilganda",
      "Avtomatik ravishda asinxron generatsiya rejimi tanlanadi"
    ],
    "answer": "Rotor qutblarining uyg‘unlashmagan (nosinxron) holati yoki noto‘g‘ri sozlanishi"
  },
  {
    "question": "O‘zgarmas tok motorining ishga tushirish toki qanday kamaytiriladi?",
    "options": [
      "Ishga tushirish zanjiriga oldindan qarshilik yoki reostat ulash orqali",
      "Har doim nominal kuchlanish bilan ta’minlash orqali",
      "Generatorni motor bilan ketma-ket ulash orqali",
      "Qo‘zg‘atish chulg‘amida sig‘im xususiyati hosil qilish orqali"
    ],
    "answer": "Ishga tushirish zanjiriga oldindan qarshilik yoki reostat ulash orqali"
  },
  {
    "question": "Sinxron motorning tormozlanish usullaridan biri qaysi?",
    "options": [
      "Qutb juftlarini teskari ulab, motorni “elektr tormoz” rejimida ishlatish",
      "Yuklamani keskin oshirib, motorni o‘z-o‘zidan tormozlash",
      "Valni qo‘shimcha rezonans chulg‘amiga ulash",
      "Rotor tishlarini mexanik yo‘l bilan kamaytirish"
    ],
    "answer": "Qutb juftlarini teskari ulab, motorni “elektr tormoz” rejimida ishlatish"
  }






	 // Qolgan savollarni shu yerda qo'shing...
];








document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const quizContainer = document.getElementById('quizContainer');
    const questionBox = document.getElementById('questionBox');
    const optionsBox = document.getElementById('optionsBox');
    const feedbackDiv = document.getElementById('feedback');
    const resultDiv = document.getElementById('result');
    const restartBtn = document.getElementById('restartBtn');

    const prevQuestionBtn = document.getElementById('prevQuestionBtn');
    const nextQuestionBtn = document.getElementById('nextQuestionBtn');

    let currentQuestionIndex = 0;

    // Foydalanuchi tanlagan javoblarni saqlaymiz: { 0: "variant", 1: "variant", ... }
    let userAnswers = {};

    // Testni boshlash
    startBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        startBtn.style.display = 'none';
        quizContainer.style.display = 'block';

        prevQuestionBtn.style.display = 'none'; 
        nextQuestionBtn.style.display = 'inline-block'; 

        loadQuestion();
    });

    // Savolni yuklash
    function loadQuestion() {
        if (currentQuestionIndex >= questions.length) {
            showResult();
            return;
        }

        // "Oldingi savol" tugmasi holati
        if (currentQuestionIndex === 0) {
            prevQuestionBtn.style.display = 'none';
        } else {
            prevQuestionBtn.style.display = 'inline-block';
        }

        // "Keyingi savol" tugmasi matni
        if (currentQuestionIndex === questions.length - 1) {
            nextQuestionBtn.textContent = 'Testni yakunlash';
        } else {
            nextQuestionBtn.textContent = 'Keyingi savol';
        }

        const currentQuestion = questions[currentQuestionIndex];
        questionBox.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
        optionsBox.innerHTML = '';

        // Variantlarni aralashtirish
        const shuffledOptions = shuffleArray(currentQuestion.options);

        // Radio variantlar yaratish
        shuffledOptions.forEach(option => {
            const label = document.createElement('label');
            label.innerHTML = `
                <input type="radio" name="option" value="${option}">
                ${option}
            `;
            optionsBox.appendChild(label);
        });

        // Agar bu savolga avval javob bergan bo'lsa, o'sha javobni belgilab qo'yamiz
        if (userAnswers[currentQuestionIndex]) {
            const savedAnswer = userAnswers[currentQuestionIndex];
            const allOptions = document.querySelectorAll('input[name="option"]');
            allOptions.forEach((radio) => {
                if (radio.value === savedAnswer) {
                    radio.checked = true;
                }
            });
            // Shuningdek, feedbackDiv ham ko‘rib chiqamiz:
            if (savedAnswer === currentQuestion.answer) {
                feedbackDiv.textContent = "🎉 To'g'ri javob!";
                feedbackDiv.className = "feedback correct-feedback";
                feedbackDiv.style.display = 'block';
            } else {
                feedbackDiv.textContent = "❌ Noto'g'ri javob! Qayta urinib ko'ring.";
                feedbackDiv.className = "feedback wrong-feedback";
                feedbackDiv.style.display = 'block';
            }
        } else {
            // Hali javob belgilanmagan bo'lsa, feedback ko'rinmaydi
            feedbackDiv.style.display = 'none';
        }
    }

    // Radio button o'zgarganda javobni tekshirish
    optionsBox.addEventListener('change', () => {
        const selectedRadio = document.querySelector('input[name="option"]:checked');
        if (!selectedRadio) return; // Ehtiyot chorasi

        const selectedAnswer = selectedRadio.value;
        const currentQuestion = questions[currentQuestionIndex];

        // userAnswers massividagi saqlash
        userAnswers[currentQuestionIndex] = selectedAnswer;

        if (selectedAnswer === currentQuestion.answer) {
            feedbackDiv.textContent = "🎉 To'g'ri javob!";
            feedbackDiv.className = "feedback correct-feedback";
            feedbackDiv.style.display = 'block';
        } else {
            feedbackDiv.textContent = "❌ Noto'g'ri javob! Qayta urinib ko'ring.";
            feedbackDiv.className = "feedback wrong-feedback";
            feedbackDiv.style.display = 'block';
        }
    });

    // Oldingi savol
    prevQuestionBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion();
        }
    });

    // Keyingi savol
    nextQuestionBtn.addEventListener('click', () => {
        if (currentQuestionIndex === questions.length - 1) {
            showResult();
        } else {
            currentQuestionIndex++;
            loadQuestion();
        }
    });

    // Natija
    function showResult() {
        quizContainer.style.display = 'none';
        resultDiv.style.display = 'block';
    }

    // Qayta urinish
    restartBtn.addEventListener('click', () => {
        resultDiv.style.display = 'none';
        startBtn.style.display = 'block';
        // userAnswers = {}; // agar qayta boshlasangiz, hammasini tozalashni xohlasangiz
        // currentQuestionIndex = 0; 
    });

    // Tasodifiy aralashtirish
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});
