// Test ma'lumotlari
const questions = [
     
  {
    "question": "Deformasiyani o’lchash uchun qaysi o’zgartirgich qo’llaniladi:",
    "options": [
      "A) Tenzometr",
      "B) Manometr",
      "C) Avtomatik potensiometr",
      "D) Reostatli"
    ],
    "answer": "A) Tenzometr"
  },
  {
    "question": "Temperatura datchigini ko’rsating:",
    "options": [
      "A) Termopara",
      "B) Putevoy viklyuchatel",
      "C) Sensorli datchik",
      "D) Fotoelement"
    ],
    "answer": "A) Termopara"
  },
  {
    "question": "Temperaturani o’lchash va rostlash uchun qaysi datchik ishlatiladi:",
    "options": [
      "A) Manometrik termometr",
      "B) Trubka Burdona",
      "C) Struyniy datchik",
      "D) Diffmanometr"
    ],
    "answer": "A) Manometrik termometr"
  },
  {
    "question": "Avtomatikaning qaysi qurilmasi datchikdan signal olib bajaruvchi mexanizmni xarakatga keltira oladi:",
    "options": [
      "A) Magnit kuchaytirgich",
      "B) Taxogenerator",
      "C) Solenoid",
      "D) Termopara"
    ],
    "answer": "A) Magnit kuchaytirgich"
  },
  {
    "question": "Suyuqlik va gaz bosimini o’lchash uchun qaysi datchik qo’llaniladi:",
    "options": [
      "A) Manometr",
      "B) Taxometr",
      "C) Termopara",
      "D) P`yezoelektrik datchik"
    ],
    "answer": "A) Manometr"
  },
  {
    "question": "Atmosfera bosimini o’lchash uchun qaysi datchik qo’llaniladi:",
    "options": [
      "A) Barometr",
      "B) Diffmanometr",
      "C) Vakuummetr",
      "D) Taxometr"
    ],
    "answer": "A) Barometr"
  },
  {
    "question": "Bosimlar farqini o’lchash uchun qaysi datchik qo’llaniladi:",
    "options": [
      "A) Diffmanometr",
      "B) Barometr",
      "C) Vakuummetr",
      "D) Taxogenerator"
    ],
    "answer": "A) Diffmanometr"
  },
  {
    "question": "Elektr zanjirini yuklanishdan qaysi element himoya qiladi:",
    "options": [
      "A) Issiqlik relesi",
      "B) Avtomatik  viklyuchatel",
      "C) Kuchlanish relesi",
      "D) Transformator"
    ],
    "answer": "A) Issiqlik relesi"
  },
  {
    "question": "Termoelektrik termoparaning ishlashi fizikaning qaysi qonuniga asoslangan:",
    "options": [
      "A) Kvant mexanikasi",
      "B) Akustika",
      "C) Mexanika",
      "D) Optika"
    ],
    "answer": "A) Kvant mexanikasi"
  },
  {
    "question": "Avtomatikaning qaysi elementi texnologik parametrlari xolati haqida ma`lumotni qabul qiladi va uzgartiradi:",
    "options": [
      "A) Datchiklar",
      "B) Kuchaytiruvchi elementlari",
      "C) Bajaruvchi elemetlar",
      "D) Rostlovchi organlar"
    ],
    "answer": "A) Datchiklar"
  },
  {
    "question": "Mexanik kattalikning o’zgarish tezligini induktiv EYukga aylantiruvchi qurilma qanday ataladi:",
    "options": [
      "A) Induksion",
      "B) Sig’im",
      "C) Reostatli",
      "D) Termoelektrik"
    ],
    "answer": "A) Induksion"
  },
  {
    "question": "Qaysi pribor magnitostriksiya effektiga asoslangan:",
    "options": [
      "A) Gerkon",
      "B) Element Xolla",
      "C) Magnit o’zgartirgich",
      "D) Sig’im o’zgartirgich"
    ],
    "answer": "A) Gerkon"
  },
  {
    "question": "Qanday fotoelektrik o’zgartirgich fotoeffekt prinsipga asoslangan:",
    "options": [
      "A) Fotoqarshilik",
      "B) Vakuumli fotoelement",
      "C) Fotodiod",
      "D) Fototranzistor"
    ],
    "answer": "A) Fotoqarshilik"
  },
  {
    "question": "Burchak siljishiga asoslangan datchikni ko’rsating:",
    "options": [
      "A) Sel`sin",
      "B) Polyarografik",
      "C) Ximotron o’zgartirgich",
      "D) Avtoelektron o’zgartirgich"
    ],
    "answer": "A) Sel`sin"
  },
  {
    "question": "Siljishni o’lchovchi datchikni ko’rsating:",
    "options": [
      "A) Reostatli",
      "B) Termoelektrik",
      "C) Fotoelektrik",
      "D) Taxometrik"
    ],
    "answer": "A) Reostatli"
  },
  {
    "question": "To’qima maxsulotlarining chiziqli zichlik datchigini ko’rsating:",
    "options": [
      "A) Rolikli",
      "B) Dinamometrik",
      "C) Konduktometrik",
      "D) Termoelektrik"
    ],
    "answer": "A) Rolikli"
  },
  {
    "question": "Qanday datchik yordamida satxni, chiziqli zichlikni va suyuqlik koeffisiyentini aniqlash mumkin:",
    "options": [
      "A) Fotoelektrik",
      "B) Diel`kometrik",
      "C) Sigimli",
      "D) Potensiometrik"
    ],
    "answer": "A) Fotoelektrik"
  },
  {
    "question": "Optoelektron usul yordamida qaysi parametrlarni o’lchash mumkin:",
    "options": [
      "A) To’qima maxsulotining chiziqli zichligi",
      "B) Ipning chuziluvchanligi",
      "C) Materialning xarakat tezligi",
      "D) Stanokning maxsuldorligi"
    ],
    "answer": "A) To’qima maxsulotining chiziqli zichligi"
  },
  {
    "question": "O’zgartirgichning statik xarakterichtikasi deb:",
    "options": [
      "A) Muvozanat xolatda chiqish kattaligini kirish kattaligiga bog’liqligi",
      "B) Kirish kattaligi sakrashsimon o’zgarganda, chiqish kattaligi o’zgaradi",
      "C) O’zgartirgichning ichki xossalari o’zgarishi natijasida xosil bo’ladigan tebranishga",
      "D) O’tkinchi rejimda kirish va chiqish kattaligi orasidagi bog’lanishga"
    ],
    "answer": "A) Muvozanat xolatda chiqish kattaligini kirish kattaligiga bog’liqligi"
  },
  {
    "question": "Datchikni tanlashda qaysi kattalik asosiy hisoblanadi:",
    "options": [
      "A) Sezgirlik",
      "B) Mustaxkamlik",
      "C) Uzoq ishlashi",
      "D) Remontbobligi"
    ],
    "answer": "A) Sezgirlik"
  },
  {
    "question": "Bosim datchigi va manometrik termometr o’rtasidagi umumiylik nima:",
    "options": [
      "A) Trubka Burdona",
      "B) Turli simlar",
      "C) Dilatometrik  plastina",
      "D) Element Xolla"
    ],
    "answer": "A) Trubka Burdona"
  },
  {
    "question": "Bir necha kilovatt quvvatni kuchaytiruvchi kuchaytirgich qaysi:",
    "options": [
      "A) Magnit",
      "B) Elektron",
      "C) Pnevmatik",
      "D) Gidravlik"
    ],
    "answer": "A) Magnit"
  },
  {
    "question": "Avtomatik elektrik yuritmalarida qaysi kuchaytirgich qo’llanilmaydi:",
    "options": [
      "A) Gidravlik",
      "B) Elektron",
      "C) Elektromagnitli",
      "D) Poluprovodnik"
    ],
    "answer": "A) Gidravlik"
  },
  {
    "question": "Struyniy avtomatika qanday ataladi:",
    "options": [
      "A) Pnevmonika",
      "B) Gidravlika",
      "C) Pnevmatika",
      "D) Robototexnika"
    ],
    "answer": "A) Pnevmonika"
  },
  {
    "question": "Datchiklarni tanlashda qaysi kattalik asosiy xisoblanadi:",
    "options": [
      "A) Ishonchlilik",
      "B) Yukori sezgirlik",
      "C) Kam inersiyalik",
      "D) Tashqi xalaqitlar"
    ],
    "answer": "A) Ishonchlilik"
  },
  {
    "question": "Qaysi datchik orkali temperatura ulchanmaydi:",
    "options": [
      "A) P`yezoelektrik datchik",
      "B) Termoqarshilik",
      "C) Yarim utkazgichli   tranzistor",
      "D) Dilatometrik   datchik"
    ],
    "answer": "A) P`yezoelektrik datchik"
  },
  {
    "question": "2 taktli magnit kuchaytirgichning ulanish sxemasini ko’rsating:",
    "options": [
      "A) Differensial va ko’prik",
      "B) Differensial",
      "C) Ko’prik",
      "D) Oddiy"
    ],
    "answer": "A) Differensial va ko’prik"
  },
  {
    "question": "Qaysi priborga toyinish drosseli qoyilishi shart:",
    "options": [
      "A) Magnit  kuchaytirgich",
      "B) Gidravlik kuchaytirgich",
      "C) Pnevmatik kuchaytirgich",
      "D) Elektron kuchaytirgich"
    ],
    "answer": "A) Magnit  kuchaytirgich"
  },
  {
    "question": "Elektromagnit rele avtomatikaning qaysi elementiga kiritilgan:",
    "options": [
      "A) Bajaruvchi",
      "B) Kuchaytirgich",
      "C) Sezgirlik",
      "D) Boshqaruvchi organlar"
    ],
    "answer": "A) Bajaruvchi"
  },
  {
    "question": "Vaqt relesi uchun qaysi parametr asosli:",
    "options": [
      "A) Qoyib yuborish parametrlari",
      "B) Ishlash parametrlari",
      "C) Ishlab chiqarish vaqti",
      "D) Ishchi parametr"
    ],
    "answer": "A) Qoyib yuborish parametrlari"
  },
  {
    "question": "Qaysi qurilma bajaruvchi mexanizmga kiritilmaydi:",
    "options": [
      "A) Avtomatik ko’prik",
      "B) Qadamli dvigatel`",
      "C) Elektromagnili  mufta",
      "D) Servodvigatel`"
    ],
    "answer": "A) Avtomatik ko’prik"
  },
  {
    "question": "Taxogenerator va temperatura datchigi o’rtasidagi umumiylik:",
    "options": [
      "A) Ikkalasi xam generatorli datchiklar",
      "B) Ikkalasi xam temperaturani ulchaydi",
      "C) Ikkalasi xam tezlikni ulchaydi",
      "D) Ikkalasi xam parametrik dastchiklar"
    ],
    "answer": "A) Ikkalasi xam generatorli datchiklar"
  },
  {
    "question": "Magnit puskatel nima uchun xizmat qiladi:",
    "options": [
      "A) Dvigatelni masafodan o’chirib yondiradi",
      "B) Tarmoq kuchlanishini o’lchaydi",
      "C) Elektrodvigatelni temperatura kuchini rostlaydi",
      "D) Dvigatelni o’z-o’zidan ulanishidan ximoya qiladi"
    ],
    "answer": "A) Dvigatelni masafodan o’chirib yondiradi"
  },
  {
    "question": "Servoprivodga qaysi element kiradi:",
    "options": [
      "A) Solenoidli elektromagnit",
      "B) Shagoviy dvigatel`",
      "C) Bir fazali  elektrodvigatel`",
      "D) Kondensatorli dvigatel`"
    ],
    "answer": "A) Solenoidli elektromagnit"
  },
  {
    "question": "Rostlovchi organni qaysi element  xarakatga keltiradi:",
    "options": [
      "A) Shagoviy dvigatel`",
      "B) Magnit usilitel`",
      "C) Potensiometr",
      "D) Termopara"
    ],
    "answer": "A) Shagoviy dvigatel`"
  },
  {
    "question": "Fotoelement ishi fizikaning qaysi qonuniga asoslangan:",
    "options": [
      "A) Optik",
      "B) Termodinamik",
      "C) Mexanik",
      "D) Kvant mexaniksi"
    ],
    "answer": "A) Optik"
  },
  {
    "question": "Qaysi datchik mexanizmi xolatlarini nazorat qilish uchun xizmat qiladi:",
    "options": [
      "A) Kontaktli puteviye viklyuchatel",
      "B) Termopara",
      "C) Tok relesi",
      "D) Fotometr"
    ],
    "answer": "A) Kontaktli puteviye viklyuchatel"
  },
  {
    "question": "Noelektrik kattalikni elektrik kattalikka aylantiruvchi avtomatikaning elementini ko’rsating:",
    "options": [
      "A) Datchik",
      "B) Servodapatel`",
      "C) Rostlovchi organ",
      "D) Kuchaytirgich"
    ],
    "answer": "A) Datchik"
  },
  {
    "question": "Generatorli datchikni ko’rsating:",
    "options": [
      "A) Termopara",
      "B) Manometi termometr",
      "C) Tenzometr",
      "D) Taxometr"
    ],
    "answer": "A) Termopara"
  },
  {
    "question": "Tezlik parametrli datchikni ko’rsating:",
    "options": [
      "A) Taxogenerator",
      "B) Reostat uzgartirgichli markazdan qochma  rele",
      "C) Tenzorezistor",
      "D) P`yezoelektrik"
    ],
    "answer": "A) Taxogenerator"
  },
  {
    "question": "Qaysi chiziqli siljish datchigi analogliga kiradi:",
    "options": [
      "A) Potensiometrik",
      "B) Sigimli",
      "C) Aylanma",
      "D) Elektromagnit"
    ],
    "answer": "A) Potensiometrik"
  },
  {
    "question": "Generatorli datchikda qaysi o’lchov sxemasi qo’llanilgan:",
    "options": [
      "A) Kompensasion",
      "B) Differensial",
      "C) Oddiy",
      "D) Sozlanmagan ko’prik"
    ],
    "answer": "A) Kompensasion"
  },
  {
    "question": "Sil`fon qaysi datchikka kiradi:",
    "options": [
      "A) Gaz bosimi",
      "B) Kuchlanish",
      "C) Deformasiya",
      "D) Satx"
    ],
    "answer": "A) Gaz bosimi"
  },
  {
    "question": "Qaysi datchik kuchni elektr kuchlanishga aylantiradi:",
    "options": [
      "A) P`yezoelektrik",
      "B) Tenzometrik",
      "C) Detolokometrik",
      "D) Magnitli"
    ],
    "answer": "A) P`yezoelektrik"
  },
  {
    "question": "Kuchlanish relesi nima uchun xizmat qiladi:",
    "options": [
      "A) Tarmoq kuchlanishi nazorati uchun",
      "B) Tarmoq toki uchun",
      "C) Faza mavjudligni aniqlash uchun",
      "D) Dvigatel ulanganini nazorat qilish uchun"
    ],
    "answer": "A) Tarmoq kuchlanishi nazorati uchun"
  },
  {
    "question": "Qaysi datchik bilan birga ko’prik logometr sxema ishlatiladi:",
    "options": [
      "A) Taxogeneratorli    datchik",
      "B) Qarshilik termometrii",
      "C) Termopara",
      "D) P`yezoelektrik datchik"
    ],
    "answer": "A) Taxogeneratorli    datchik"
  },
  {
    "question": "Datchik uchun muxim ko’rsatkichni aniqlang:",
    "options": [
      "A) Sezgirlik",
      "B) Konstruksiyasining soddaligi",
      "C) Boqiylik",
      "D) Aniqlik"
    ],
    "answer": "A) Sezgirlik"
  },
  {
    "question": "Kuchaytiruvchi elementning axamiyatli parametrini ko’rsating:",
    "options": [
      "A) Quvvat buyicha kuchaytirish koeffisiyenti",
      "B) Mustaxkamlik",
      "C) Xarakatlanuvchi qismning mavjudligi",
      "D) Ishga tushirish sxemasining soddaligi"
    ],
    "answer": "A) Quvvat buyicha kuchaytirish koeffisiyenti"
  },

  {
    "question": "Avtomatik boshqarish uchun uzilishni xosil qiluvchi bajaruvchi mexanizm elementini ko’rsating:",
    "options": [
      "A) Shagoviy dvigatel`",
      "B) LATR",
      "C) Reostat",
      "D) Toyinish  drosseli"
    ],
    "answer": "A) Shagoviy dvigatel`"
  },
  {
    "question": "Elektromagnit  mufta avtomatlashtirishning qaysi elementiga kiradi:",
    "options": [
      "A) Ijro mexanizimi",
      "B) Elementlar tasnifi",
      "C) O’zgartiruvchi",
      "D) Sezgirlik"
    ],
    "answer": "A) Ijro mexanizimi"
  },
  {
    "question": "Elektrmagnit servodvigatelga qaysi qurilma kiradi:",
    "options": [
      "A) Shagoviy dvigatel`",
      "B) Rele",
      "C) Solenoidli yuritma",
      "D) Kuchaytirgich"
    ],
    "answer": "A) Shagoviy dvigatel`"
  },
  {
    "question": "Xromnikelli termoparada eng yuqori temperaturasi nechaga teng:",
    "options": [
      "A) 800 c",
      "B) 1300 c",
      "C) 1600 c",
      "D) 400 c"
    ],
    "answer": "A) 800 c"
  },
  {
    "question": "Namlikni o’zgarishga boglik ravishda aktiv qarshilikning o’zgarishi qaysi prinsipga asoslangan:",
    "options": [
      "A) Konduktometrik",
      "B) Psixrometrik",
      "C) Gigrometrik",
      "D) Sigimi"
    ],
    "answer": "A) Konduktometrik"
  },
  {
    "question": "Magnit kuchaytirgich qaysi statik parametr orqali aniqlanadi:",
    "options": [
      "A) Kuchaytirish koeffisiyenti",
      "B) Sezgirlik",
      "C) Turgunlik",
      "D) Mustaxkamlik"
    ],
    "answer": "A) Kuchaytirish koeffisiyenti"
  },
  {
    "question": "Qaysi dinamik parametr magnit kuchaytirgich ishini aniqlamaydi:",
    "options": [
      "A) Tebranuvchanlik",
      "B) Magnit oqimi",
      "C) Vaqt doimiysi",
      "D) Kechikish"
    ],
    "answer": "A) Tebranuvchanlik"
  },
  {
    "question": "Qaysi faktor magnit kuchaytirgichga ta`sir qilmaydi:",
    "options": [
      "A) Atrof muxit temperaturasi",
      "B) Materialning magnitlilik xususiyati",
      "C) Tarmoq kuchlanishi",
      "D) Yuklama kuchlanishi"
    ],
    "answer": "A) Atrof muxit temperaturasi"
  },
  {
    "question": "Reversiv magnit kuchaytirgich uchun qanday sxemadan foydalaniladi:",
    "options": [
      "A) Differensial",
      "B) Murakkab",
      "C) Oddiy",
      "D) Kompensasion"
    ],
    "answer": "A) Differensial"
  },
  {
    "question": "Kontaktsiz magnit relesi qaysi asosda quriladi:",
    "options": [
      "A) Magnit kuchaytirgichi asosida",
      "B) Elektromagnit relesi",
      "C) Gerkonniy rele",
      "D) Induksion rele"
    ],
    "answer": "A) Magnit kuchaytirgichi asosida"
  },
  {
    "question": "Magnit kuchaytirgich xossasini qanday konchtruktiv xolat yaxshilamaydi:",
    "options": [
      "A) Umumiy chulgamdan foydalanish",
      "B) Magnit zanjirida xavo bo’shligini yo’q qilish",
      "C) Magnitutkazuvchanlik formasi",
      "D) Maxsus magnit utkazuvchanli elementni qo`llash"
    ],
    "answer": "A) Umumiy chulgamdan foydalanish"
  },
  {
    "question": "Qutblar soni p=2 va uch fazali tokning chatotasi f = 50 Gs bo`lsa, magnit maydonining aylanish chastotasi n1 nimaga teng:",
    "options": [
      "A) n1 = 1500 ayl/min",
      "B) n1 = 100 ayl/min",
      "C) n1 = 750 ayl/min",
      "D) n1 = 3000 ayl/min"
    ],
    "answer": "A) n1 = 1500 ayl/min"
  },
  {
    "question": "Uch fazali sistema simmetrik rejimda ishlamoqda. Yuklama yulduz sxemasida neytral simsiz ulangan. Agar A faza qisqa tutashtirilgan bo`lsa,   va   nimaga teng bo`ladi:",
    "options": [
      "A) 2 marta kamayadi",
      "B) marta oshadi",
      "C) marta kamayadi",
      "D) o`zgarmaydi"
    ],
    "answer": "A) 2 marta kamayadi"
  },
  {
    "question": "Qanday yarim o`tkazgichli asbob p-n o`tishga ega bo`lmaydi:",
    "options": [
      "A) Rezistor",
      "B) Diod",
      "C) Tranzistor",
      "D) Tiristor"
    ],
    "answer": "A) Rezistor"
  },
  {
    "question": "Fotorezistor nima:",
    "options": [
      "A) Yorug`lik ta`sirida qarshiligi o`zgaruvchan  asboblar",
      "B) Kuchlanishli o`zgaruvchan asboblar",
      "C) O`zgaruvchanligi o`zgaruvchi asboblar",
      "D) Chastota o`zgaruvchi asboblar"
    ],
    "answer": "A) Yorug`lik ta`sirida qarshiligi o`zgaruvchan  asboblar"
  },
  {
    "question": "Elektr mashinalari qanday rejimlarda ishlaydi:",
    "options": [
      "A) Dvigatel, generator va tormoz rejimida",
      "B) Qisqa vaqtli, tormoz tejimida",
      "C) Oraliq, davomiy va tezlik rejimida",
      "D) Dvigatel, qisqa vaqtli, tormoz tejimida"
    ],
    "answer": "A) Dvigatel, generator va tormoz rejimida"
  },
  {
    "question": "O`zgarmas tok dvigateli magnit maydonining qiymati:",
    "options": [
      "A) qo`zg`atish tokiga bog`liq",
      "B) Yakorning burchak tezligiga bog`liq",
      "C) yakor tokiga bog`liq",
      "D) Dvigatelning EYuk siga bog`liq"
    ],
    "answer": "A) qo`zg`atish tokiga bog`liq"
  },
  {
    "question": "O`zgarmas tok dvigatelini revers qilish qanday amalga oshiriladi:",
    "options": [
      "A) Kuchlanishning qutbini o`zgartirish",
      "B) Yakor chulg`ami toki yo`nalishini o`zgartirish",
      "C) Quzg`atish chulg`ami toki yo`nalishini o`zgartirish",
      "D) Mumkin emas"
    ],
    "answer": "A) Kuchlanishning qutbini o`zgartirish"
  },
  {
    "question": "Mexanik tavsiflarning qanday ko`rinishlari bor:",
    "options": [
      "A) Tabiiy va sun`iy",
      "B) Tashqi va yuklamali",
      "C) Xaqiqiy va rostlanuvchi",
      "D) Yuklamali va rostlanuvchi"
    ],
    "answer": "A) Tabiiy va sun`iy"
  },
  {
    "question": "Elektrodvigatel qanday qismlardan tuzilgan:",
    "options": [
      "A) Aylanuvchi - rotor, qo`zg`almas- stator",
      "B) Stator va yakor`",
      "C) Magnitli o`tkazgich va rotor",
      "D) Magnitli o`tkazgich va stator"
    ],
    "answer": "A) Aylanuvchi - rotor, qo`zg`almas- stator"
  },
  {
    "question": "O`zgarmas tok dvigateli … bo`lmasa aylantiruvchi moment xosil qila olmaydi:",
    "options": [
      "A) Yakor zanjirida qo`shimcha rezistor",
      "B) Inersiya momenti",
      "C) Magnit oqimi va yakor toki",
      "D) Burchak tezligi"
    ],
    "answer": "A) Yakor zanjirida qo`shimcha rezistor"
  },
  {
    "question": "O`zgarmas tok generatori uchun qanday qo`zg`atish usullari mavjud? To`laroq javobni aniqlang:",
    "options": [
      "A) Mustaqil, parallel, ketma-ket va aralash",
      "B) Parallel, ketma-ket",
      "C) Ketma-ket va aralash",
      "D) Mustaqil va aralash"
    ],
    "answer": "A) Mustaqil, parallel, ketma-ket va aralash"
  },
  {
    "question": "Agar o`zgarmas tok dvigateli validagi yuklama oshsa, yakor toki:",
    "options": [
      "A) Oshadi",
      "B) O`zgarmaydi",
      "C) Kamayadi",
      "D) olga teng bo`ladi"
    ],
    "answer": "A) Oshadi"
  },
  {
    "question": "Agar o`zgarmas tok dvigatelida qo`zg`atish zanjirida uzilish sodir bo`lsa, salt ishlash rejimida bursak tezligi qanday o`zgaradi:",
    "options": [
      "A) Dvigatel to`xtaydi",
      "B) Burchak tezligi oshadi",
      "C) Burchak tezligi kamayadi",
      "D) Burchak tezligi o`zgarmaydi"
    ],
    "answer": "A) Dvigatel to`xtaydi"
  },
  {
    "question": "Qanday ishchi tavsifdan triodning kuchaytirish koeffisiyenti aniqlanadi:",
    "options": [
      "A) Anod-to`rli tavsifidan",
      "B) Ayrim bir tavsifdan",
      "C) To`rli tavsifidan",
      "D) Xech qanday tavsifdan"
    ],
    "answer": "A) Anod-to`rli tavsifidan"
  },
  {
    "question": "O`zgarmas tok mashinasining qaysi bir qismi o`zgaruvchan EYuk ni o`zgarmas EYuk ga aylantirib beradi:",
    "options": [
      "A) Kollektor va cho`tkalar",
      "B) Yakor",
      "C) Cho`tkalar",
      "D) Qo`zg`atish chulg`ami"
    ],
    "answer": "A) Kollektor va cho`tkalar"
  },
  {
    "question": "Tranzistorni qanday maqsadlarda ishlatmagan ma`qul:",
    "options": [
      "A) To`grilagich sifatida",
      "B) Generator sxemalarida",
      "C) Quvvat kuchaytirgichi sxemalarida",
      "D) Kuchlanish kuchaytirgichi sxemalarida"
    ],
    "answer": "A) To`grilagich sifatida"
  },
  {
    "question": "O`zgarmas tok dvigateli yakor tokining qiymati:",
    "options": [
      "A) Manbadan olinayotgan kuchlanishga bog`liq",
      "B) Yakorning burchak tezligiga bog`liq",
      "C) qo`zg`atish tokiga bog`liq",
      "D) Dvigatelning EYuk siga bog`liq"
    ],
    "answer": "A) Manbadan olinayotgan kuchlanishga bog`liq"
  },
  {
    "question": "O`zgarmas tok dvigateli EYuk ning qiymati:",
    "options": [
      "A) Yakorning burchak tezligiga bog`liq",
      "B) yakor tokiga bog`liq",
      "C) qo`zg`atish tokiga bog`liq",
      "D) Dvigatelning EYuk siga bog`liq"
    ],
    "answer": "A) Yakorning burchak tezligiga bog`liq"
  },
  {
    "question": "Asinxron dvigatellarni «revers» (aylanish yo`nalishini o`zgartirish) qanday amalga oshiriladi:",
    "options": [
      "A) Statordagi ikkita chulg`amni ulanishini o`zgartirish yo`li bilan",
      "B) Zanjirdagi kuchlanish o`zgartirish yo`li bilan",
      "C) Dvigatelga qo`yilgan yukni kamaytirish",
      "D) Statordagi uchchala chulg`amni ulanishini o`zgartirish yo`li bilan"
    ],
    "answer": "A) Statordagi ikkita chulg`amni ulanishini o`zgartirish yo`li bilan"
  },
  {
    "question": "Asinxron dvigatelining ishga tushirilgandagi sirpanishi nimaga teng:",
    "options": [
      "A) 1",
      "B) nol",
      "C) 0,5",
      "D) Cheksiz"
    ],
    "answer": "A) 1"
  },
  {
    "question": "Asinxron dvigatelning ishga tushirish toki stator chulg`ami uchburchakdan yulduzga o`zgartirilganda qanday o`zgaradi:",
    "options": [
      "A) 1.73 marta tok kamayadi",
      "B) Ikkala holatda ham tok o`zgarmaydi",
      "C) 1.73 marta tok ortadi",
      "D) 3 marta tok ortadi"
    ],
    "answer": "A) 1.73 marta tok kamayadi"
  },
  {
    "question": "Parallel qo`zg`atishli dvigatelni qanday qilib teskari tomonga aylantirish qilinadi:",
    "options": [
      "A) Yakor yoki qo`zg`atish chulg`amlaridagi tok yo`nalishini o`zgartiriladi",
      "B) Dvigatel qismlaridagi kuchlanish qutblarini o`zgartiriladi",
      "C) Yakor va qo`zg`atish chulg`amlaridagi tok yo`nalishini o`zgartiriladi",
      "D) Dvigatel validagi nagruzka oshiriladi"
    ],
    "answer": "A) Yakor yoki qo`zg`atish chulg`amlaridagi tok yo`nalishini o`zgartiriladi"
  },
  {
    "question": "Asinxron dvigatel magnit maydonining aylanish tezligi nimalar orqali aniqlanadi:",
    "options": [
      "A) O`zgaruvchan tok chastotasi va dvigatelning qutblar soni orqali",
      "B) Tarmoq kuchlanishi orqali",
      "C) Dvigatel yuklamasi orqali",
      "D) Rotorning aylanish tezligi orqali"
    ],
    "answer": "A) O`zgaruvchan tok chastotasi va dvigatelning qutblar soni orqali"
  },
  {
    "question": "Keltirilgan jumlalardan qaysi biri asinxron dvigatelning M maksimal momenti uchun to`g`ri:",
    "options": [
      "A) M moment rotorning aktiv qarshiligi qiymatiga to`g`ri proporsional",
      "B) M moment rotorning aktiv qarshiligi qiymatiga teskari proporsional",
      "C) M moment rotorning aktiv qarshiligi qiymatiga bog`liq emas",
      "D) M moment bilan rotorning aktiv qarshiligi kvadrat holda bog`liq"
    ],
    "answer": "A) M moment rotorning aktiv qarshiligi qiymatiga to`g`ri proporsional"
  },
  {
    "question": "Keltirilgan tezliklardan qaysi biri asinxron dvigatelning normal rejimdagi tezligiga to`g`ri keladi:",
    "options": [
      "A) 750 ayl/min",
      "B) 3150 ayl/min",
      "C) 1550 ayl/min",
      "D) 1020 ayl/min"
    ],
    "answer": "A) 750 ayl/min"
  },
  {
    "question": "Tarmoq chastotasi f bo`lsa aylanayotgan rotorning EYuk si qancha bo`ladi:",
    "options": [
      "A) fS",
      "B) F",
      "C) 2f",
      "D) nol`"
    ],
    "answer": "A) fS"
  },
  {
    "question": "Elektr mashinalari qanday rejimlarda ishlashi mumkin:",
    "options": [
      "A) Dvigatel, generator va tormoz rejimida",
      "B) Qisqa vaqtli, tormoz tejimida",
      "C) Oraliq, davomiy va tezlik rejimida",
      "D) Dvigatel, qisqa vaqtli, tormoz tejimida"
    ],
    "answer": "A) Dvigatel, generator va tormoz rejimida"
  },
  {
    "question": "Asinxron dvigatel generator rejimida ishlashi mumkinmi:",
    "options": [
      "A) Ha",
      "B) Bo`lishi mumkin emas",
      "C) Yo`q",
      "D) Xech qachon"
    ],
    "answer": "A) Ha"
  },
  {
    "question": "Asinxron dvigatelining magnit maydonining sinxron tezligi formulasi qaysi javobda to`g`ri yozilgan:",
    "options": [
      "A) n1 = (60*f) / p",
      "B) n1 = 6*f / 60",
      "C) n1 = f / p",
      "D) n1 = (60 * p) / f"
    ],
    "answer": "A) n1 = (60*f) / p"
  },
  {
    "question": "Agarda f=50 Gs, qutblar soni p=6 ga teng bo`lsa, n1 magnit maydonini aylanish chastotasi nimaga teng bo`ladi:",
    "options": [
      "A) 500",
      "B) 600",
      "C) 1250",
      "D) 750"
    ],
    "answer": "A) 500"
  },
  {
    "question": "Elektrodvigatelni to`xtatishda qanday usullar ishlatiladi:",
    "options": [
      "A) Elektrodinami, generatorli, teskari ulash",
      "B) majburiy, qo`l yordamida, mexanik",
      "C) teskari ulash, magnitli",
      "D) Mexanik va qo`l yordamida"
    ],
    "answer": "A) Elektrodinami, generatorli, teskari ulash"
  },
  {
    "question": "Magnit maydoni 1000 ayl/min va sirpanish S=1 bo`lsa, rotorning aylanish chastotasi nimaga teng:",
    "options": [
      "A) 0",
      "B) 600",
      "C) 1250",
      "D) 750"
    ],
    "answer": "A) 0"
  },
  {
    "question": "Magnit maydoni 600 ayl/min va sirpanish S=0 bo`lsa, rotorning aylanish chastotasi nimaga teng:",
    "options": [
      "A) 600",
      "B) 900",
      "C) 1250",
      "D) 750"
    ],
    "answer": "A) 600"
  },
  {
    "question": "Transformator qanday qismlardan iborat",
    "options": [
      "A) Po’lat o’zak (sterjen) va birlamchi va ikkilamchi chulg’amlardan",
      "B) Po’lat o’zak va metal plastinkalardan",
      "C) Po’lat o’zak va g’altakdan",
      "D) G’altak va chulg’amlardan"
    ],
    "answer": "A) Po’lat o’zak (sterjen) va birlamchi va ikkilamchi chulg’amlardan"
  },
  {
    "question": "Transformatorni kim va qachon ixtiro qilgan",
    "options": [
      "A) 1876 yilda Yablochkov P. N",
      "B) 1889 yilda Dolivo-Dobrovolskiy M. O",
      "C) 1880 yilda Usagin",
      "D) 1821 yilda Maksvel"
    ],
    "answer": "A) 1876 yilda Yablochkov P. N"
  },
  {
    "question": "O’zgaruvchan tok mashinalari necha xil bo’ladi?",
    "options": [
      "A) Sinxron, asinxron, kollektorli",
      "B) Asinxron, reduktorli",
      "C) Kollektorli, parallel ko’zg’atish chulg’amli",
      "D) Kollektorli, yakorli"
    ],
    "answer": "A) Sinxron, asinxron, kollektorli"
  },
  {
    "question": "Elektr motorni tormozlashning qanday usullari bor",
    "options": [
      "A) Generatroli,qarshi qo’shish bilan, elektrodinamik",
      "B) Gidravlik, elektrodinamik, qo’shimcha kuch bilan",
      "C) Elektrodinamik, teskari ulab, qarshi qo’shib",
      "D) Qo’shimcha kuch bilan, kolodkalar yordamida, gidravlik."
    ],
    "answer": "A) Generatroli,qarshi qo’shish bilan, elektrodinamik"
  },
  {
    "question": "Transformator nagruzkada ishlaganda uning ikkilamchi chulg’ami uchlari qanday xolatda bo’ladi?",
    "options": [
      "A) Yuklamaga ulangan bo’ladi",
      "B) Qisqa tutashtirilgan",
      "C) Ochiq xolda bo’ladi",
      "D) To’g’ri javob yo’q."
    ],
    "answer": "A) Yuklamaga ulangan bo’ladi"
  },
  {
    "question": "Transformator salt ishlaganda ikkilamchi chulg’amdagi tok kuchi nechaga teng bo’ladi?",
    "options": [
      "A) 0",
      "B) 127",
      "C) 220",
      "D) 380"
    ],
    "answer": "A) 0"
  },
  {
    "question": "Elektr motor ish rejimlari qaysi xarf bilan belgilanadi?",
    "options": [
      "A) S",
      "B) I",
      "C) R",
      "D) F"
    ],
    "answer": "A) S"
  },
  {
    "question": "O’lchov transformatorlarining qanday turlari mavjud?",
    "options": [
      "A) Tok va kuchlanish",
      "B) Quvvat, tezlik, tok",
      "C) Tok va quvvat",
      "D) Tezlik va quvvat"
    ],
    "answer": "A) Tok va kuchlanish"
  }




	 // Qolgan savollarni shu yerda qo'shing...
];

// Tasodifiy savollar tanlash
function getRandomQuestions(allQuestions, count) {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Dasturni ishga tushirish
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const quizContainer = document.getElementById('quizContainer');
    const questionBox = document.getElementById('questionBox');
    const optionsBox = document.getElementById('optionsBox');
    const feedbackDiv = document.getElementById('feedback');
    const nextBtn = document.getElementById('nextBtn');
    const resultDiv = document.getElementById('result');
    const correctCountSpan = document.getElementById('correctCount');
    const wrongCountSpan = document.getElementById('wrongCount');
    const totalQuestionsSpan = document.getElementById('totalQuestions');
    const userScoreSpan = document.getElementById('userScore');
    const progressFill = document.getElementById('progressFill');
    const restartBtn = document.getElementById('restartBtn');
    const radioGroup = document.getElementById('radioGroup');

    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let correctCount = 0;
    let selectedAnswer = null;
    const userAnswers = []; // Foydalanuvchi javoblari uchun massiv

    // Testni boshlash
    startBtn.addEventListener('click', () => {
        const selectedCount = parseInt(document.querySelector('input[name="testCount"]:checked').value);
        currentQuestions = getRandomQuestions(questions, selectedCount);
        currentQuestionIndex = 0;
        correctCount = 0;
        userAnswers.length = 0; // Massivni tozalash
        startBtn.style.display = 'none';
        radioGroup.style.display = 'none'; // Radio buttonlarni yashirish
        quizContainer.style.display = 'block';
        loadQuestion();
    });

    // Savolni yuklash
    function loadQuestion() {
        if (currentQuestionIndex >= currentQuestions.length) {
            showResult();
            return;
        }

        const currentQuestion = currentQuestions[currentQuestionIndex];
        questionBox.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
        optionsBox.innerHTML = '';

        const shuffledOptions = [...currentQuestion.options].sort(() => 0.5 - Math.random());
        shuffledOptions.forEach(option => {
            const label = document.createElement('label');
            label.innerHTML = `
                <input type="radio" name="option" value="${option}">
                ${option}
            `;
            optionsBox.appendChild(label);
        });

        feedbackDiv.style.display = 'none';
        nextBtn.disabled = true;
        selectedAnswer = null;
    }

    // Javobni tanlash
    optionsBox.addEventListener('change', () => {
        selectedAnswer = document.querySelector('input[name="option"]:checked').value;
        nextBtn.disabled = false;
    });

    // Keyingi savolga o'tish
    nextBtn.addEventListener('click', () => {
        if (selectedAnswer === null) return;

        const currentQuestion = currentQuestions[currentQuestionIndex];
        const isCorrect = selectedAnswer === currentQuestion.answer;

        // Foydalanuvchi javobini saqlash
        userAnswers.push({
            question: currentQuestion.question,
            selected: selectedAnswer,
            correct: currentQuestion.answer,
            isCorrect: isCorrect
        });

        if (isCorrect) {
            feedbackDiv.textContent = "To'g'ri javob!";
            feedbackDiv.className = "feedback correct-feedback";
            correctCount++;
        } else {
            feedbackDiv.textContent = "Noto'g'ri javob!";
            feedbackDiv.className = "feedback wrong-feedback";
        }
        feedbackDiv.style.display = 'block';

        currentQuestionIndex++;
        setTimeout(() => {
            loadQuestion();
        }, 1000);
    });

    // Natijani ko'rsatish
    function showResult() {
        quizContainer.style.display = 'none';
        resultDiv.style.display = 'block';

        const totalQuestions = currentQuestions.length;
        const wrongCount = totalQuestions - correctCount;
        const userScore = ((correctCount / totalQuestions) * 100).toFixed(2);

        // Natijalarni DOMga joylash
        correctCountSpan.textContent = correctCount;
        wrongCountSpan.textContent = wrongCount;
        totalQuestionsSpan.textContent = totalQuestions;
        userScoreSpan.textContent = `${userScore}%`;

        // Progress bar
        progressFill.style.width = `${userScore}%`;

        // Foydalanuvchi javoblari jadvalini yaratish
        const answersList = document.createElement('div');
        answersList.className = 'answers-list';

        userAnswers.forEach((answer, index) => {
            const answerItem = document.createElement('div');
            answerItem.className = `answer-item ${answer.isCorrect ? 'correct' : 'wrong'}`;
            answerItem.innerHTML = `
                <p><strong>${index + 1}. ${answer.question}</strong></p>
                <p>Sizning javobingiz: <span class="${answer.isCorrect ? 'correct-answer' : 'wrong-answer'}">${answer.selected}</span></p>
                <p>To'g'ri javob: <span class="correct-answer">${answer.correct}</span></p>
            `;
            answersList.appendChild(answerItem);
        });

        // Natija oynasiga javoblar ro'yxatini qo'shish
        resultDiv.appendChild(answersList);

        // Chart.js orqali grafik chizish
        const ctx = document.getElementById('resultChart').getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['To\'g\'ri Javoblar', 'Noto\'g\'ri Javoblar'],
                datasets: [{
                    data: [correctCount, wrongCount],
                    backgroundColor: ['#28a745', '#dc3545'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                },
            },
        });
    }

    // Sahifani qayta yuklash
    restartBtn.addEventListener('click', () => {
        location.reload();
    });
});