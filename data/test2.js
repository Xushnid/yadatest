// Avtomatlashtirishning texnik vositalari testlari
const test2Data = [
  {
    "id": 1,
    "question": "Deformasiyani o’lchash uchun qaysi o’zgartirgich qo’llaniladi:",
    "options": [
      "Tenzometrda;",
      "Manometrli;",
      "Avtomatik potensiometr;",
      "Reostatli;"
    ],
    "answer": "Tenzometrda;"
  },
  {
    "id": 2,
    "question": "Temperatura datchigini ko’rsating:",
    "options": [
      "Termoparada;",
      "Putevoy viklyuchatel;",
      "Sensorli datchiklar;",
      "Fotoelement;"
    ],
    "answer": "Termoparada;"
  },
  {
    "id": 3,
    "question": "Temperaturani o’lchash va rostlash uchun qaysi datchik ishlatiladi:",
    "options": [
      "Manometrik termometrda;",
      "Trubka Burdona;",
      "Struyniy datchik;",
      "Diffmanometr;"
    ],
    "answer": "Manometrik termometrda;"
  },
  {
    "id": 4,
    "question": "Avtomatikaning qaysi qurilmasi datchikdan signal olib bajaruvchi mexanizmni xarakatga keltira oladi:",
    "options": [
      "Magnit kuchaytirgichda;",
      "Taxogenerator;",
      "Solenoidli;",
      "Termopara:"
    ],
    "answer": "Magnit kuchaytirgichda;"
  },
  {
    "id": 5,
    "question": "Suyuqlik va gaz bosimini o’lchash uchun qaysi datchik qo’llaniladi:",
    "options": [
      "Manometrda;",
      "Taxometr;",
      "Termopara;",
      "P`yezoelektrik datchik;"
    ],
    "answer": "Manometrda;"
  },
  {
    "id": 6,
    "question": "Atmosfera bosimini o’lchash uchun qaysi datchik qo’llaniladi:",
    "options": [
      "Barometrda;",
      "Diffmanometrlar;",
      "Vakuummetrli;",
      "Taxometr;"
    ],
    "answer": "Barometrda;"
  },
  {
    "id": 7,
    "question": "Bosimlar farqini o’lchash uchun qaysi datchik qo’llaniladi:",
    "options": [
      "Diffmanometr;",
      "Barometr;",
      "Vakuummetr;",
      "Taxogenerator;"
    ],
    "answer": "Diffmanometr;"
  },
  {
    "id": 8,
    "question": "Elektr zanjirini yuklanishdan qaysi element himoya qiladi:",
    "options": [
      "Issiqlik relesida;",
      "Avtomatik viklyuchatel;",
      "Kuchlanish relesi;",
      "Transformator;"
    ],
    "answer": "Issiqlik relesida;"
  },
  {
    "id": 9,
    "question": "Termoelektrik termoparaning ishlashi fizikaning qaysi qonuniga asoslangan:",
    "options": [
      "Kvant mexanikasining;",
      "Akustika;",
      "Mexanika;",
      "Optika;"
    ],
    "answer": "Kvant mexanikasining;"
  },
  {
    "id": 10,
    "question": "Avtomatikaning qaysi elementi texnologik parametrlari xolati haqida ma`lumotni qabul qiladi va uzgartiradi:",
    "options": [
      "Datchiklarda;",
      "Kuchaytiruvchi elementlari;",
      "Bajaruvchi elemetlar;",
      "Rostlovchi organlar;"
    ],
    "answer": "Datchiklarda;"
  },
  {
    "id": 11,
    "question": "Mexanik kattalikning o’zgarish tezligini induktiv EYukga aylantiruvchi qurilma qanday ataladi:",
    "options": [
      "Induksion;",
      "Sig’im;",
      "Reostatli ;",
      "Termoelektrik;"
    ],
    "answer": "Induksion;"
  },
  {
    "id": 12,
    "question": "Qaysi pribor magnitostriksiya effektiga asoslangan:",
    "options": [
      "Gerkonda;",
      "Element Xolla;",
      "Magnit o’zgartirgich;",
      "Sig’im o’zgartirgich;"
    ],
    "answer": "Gerkonda;"
  },
  {
    "id": 13,
    "question": "Qanday fotoelektrik o’zgartirgich fotoeffekt prinsipga asoslangan:",
    "options": [
      "Fotoqarshiliklarda;",
      "Vakuumli fotoelement;",
      "Fotodiodlar;",
      "Fototranzistor;"
    ],
    "answer": "Fotoqarshiliklarda;"
  },
  {
    "id": 14,
    "question": "Burchak siljishiga asoslangan datchikni ko’rsating:",
    "options": [
      "Sel`sinda;",
      "Polyarografik;",
      "Ximotron o’zgartirgich;",
      "Avtoelektron o’zgartirgich;"
    ],
    "answer": "Sel`sinda;"
  },
  {
    "id": 15,
    "question": "Siljishni o’lchovchi datchikni ko’rsating:",
    "options": [
      "Reostatlida;",
      "Termoelektrik;",
      "Fotoelektrik;",
      "Taxometrik;"
    ],
    "answer": "Reostatlida;"
  },
  {
    "id": 16,
    "question": "To’qima maxsulotlarining chiziqli zichlik datchigini ko’rsating:",
    "options": [
      "Roliklida;",
      "Dinamometrik;",
      "Konduktometrik;",
      "Termoelektrik;"
    ],
    "answer": "Roliklida;"
  },
  {
    "id": 17,
    "question": "Qanday datchik yordamida satxni, chiziqli zichlikni va suyuqlik koeffisiyentini aniqlash mumkin:",
    "options": [
      "Fotoelektrikda;",
      "Diel`kometrilik;",
      "Sigimli;",
      "Potensiometrik;"
    ],
    "answer": "Fotoelektrikda;"
  },
  {
    "id": 18,
    "question": "Optoelektron usul yordamida qaysi parametrlarni o’lchash mumkin:",
    "options": [
      "To’qima maxsulotining chiziqli zichligi;",
      "Ipning chuziluvchanligi;",
      "Materialning xarakat tezligi;",
      "Stanokning maxsuldorligi;"
    ],
    "answer": "To’qima maxsulotining chiziqli zichligi;"
  },
  {
    "id": 19,
    "question": "O’zgartirgichning statik xarakterichtikasi deb:",
    "options": [
      "Muvozanat xolatda chiqish kattaligini kirish kattaligiga bog’liqligi;",
      "Kirish kattaligi sakrashsimon o’zgarganda, chiqish kattaligi o’zgaradi;",
      "O’zgartirgichni ichki xossalari o’zgarishi natijasida xosil bo’ladigan tebranishga;",
      "O’tkinchi rejimga kirish va chiqish kattaligi orasidagi bog’lanishga;"
    ],
    "answer": "Muvozanat xolatda chiqish kattaligini kirish kattaligiga bog’liqligi;"
  },
  {
    "id": 20,
    "question": "Datchikni tanlashda qaysi kattalik asosiy hisoblanadi:",
    "options": [
      "Sezgirlikda;",
      "Mustaxkamlik;",
      "Uzoq ishlashi;",
      "Remontbobligi;"
    ],
    "answer": "Sezgirlikda;"
  },
  {
    "id": 21,
    "question": "Bosim datchigi va manometrik termometr o’rtasidagi umumiylik nima:",
    "options": [
      "Trubka Burdonada;",
      "Turli simlar;",
      "Dilatometrik plastina;",
      "Element Xolla;"
    ],
    "answer": "Trubka Burdonada;"
  },
  {
    "id": 22,
    "question": "Bir necha kilovatt quvvatni kuchaytiruvchi kuchaytirgich qaysi:",
    "options": [
      "Magnitda;",
      "Elektronli;",
      "Pnevmatik;",
      "Gidravlik;"
    ],
    "answer": "Magnitda;"
  },
  {
    "id": 23,
    "question": "Avtomatik elektrik yuritmalarida qaysi kuchaytirgich qo’llanilmaydi:",
    "options": [
      "Gidravlikda;",
      "Elektronli;",
      "Elektromagnitli;",
      "Poluprovodnik;"
    ],
    "answer": "Gidravlikda;"
  },
  {
    "id": 24,
    "question": "Struyniy avtomatika qanday ataladi:",
    "options": [
      "Pnevmonikada;",
      "Gidravlika;",
      "Pnevmatika;",
      "Robototexnika;"
    ],
    "answer": "Pnevmonikada;"
  },
  {
    "id": 25,
    "question": "Datchiklarni tanlashda qaysi kattalik asosiy xisoblanadi:",
    "options": [
      "Ishonchlilikda;",
      "Yukori sezgirlik;",
      "Kam inersiyalik;",
      "Tashqi xalaqitlar;"
    ],
    "answer": "Ishonchlilikda;"
  },
  {
    "id": 26,
    "question": "Qaysi datchik orkali temperatura ulchanmaydi:",
    "options": [
      "P`yezoelektrik datchikda;",
      "Termoqarshilik;",
      "Yarim utkazgichli tranzistor;",
      "Dilatometrik datchik;"
    ],
    "answer": "P`yezoelektrik datchikda;"
  },
  {
    "id": 27,
    "question": "2. taktli magnit kuchaytirgichning ulanish sxemasini ko’rsating:",
    "options": [
      "Differensialda va ko’prik;",
      "Differensialli;",
      "Ko’prik;",
      "d. Oddiy;"
    ],
    "answer": "Differensialda va ko’prik;"
  },
  {
    "id": 28,
    "question": "Qaysi priborga toyinish drosseli qoyilishi shart:",
    "options": [
      "Magnit kuchaytirgichda;",
      "Gidravlik kuchaytirgich;",
      "Pnevmatik kuchaytirgich;",
      "Elektron kuchaytirgich;"
    ],
    "answer": "Magnit kuchaytirgichda;"
  },
  {
    "id": 29,
    "question": "Elektromagnit rele avtomatikaning qaysi elementiga kiritilgan:",
    "options": [
      "Bajaruvchida;",
      "Kuchaytirgich;",
      "Sezgirlik;",
      "Boshqaruvchi organlar;"
    ],
    "answer": "Bajaruvchida;"
  },
  {
    "id": 30,
    "question": "Vaqt relesi uchun qaysi parametr asosli:",
    "options": [
      "Qoyib yuborishning parametrlari;",
      "Ishlash parametrlari;",
      "Ishlab chiqarish vaqti ;",
      "Ishchi parametr;"
    ],
    "answer": "Qoyib yuborishning parametrlari;"
  },
  {
    "id": 31,
    "question": "Qaysi qurilma bajaruvchi mexanizmga kiritilmaydi:",
    "options": [
      "Avtomatik ko’prikda;",
      "Qadamli dvigatel`;",
      "Elektromagnili mufta;",
      "Servodvigatel`;"
    ],
    "answer": "Avtomatik ko’prikda;"
  },
  {
    "id": 32,
    "question": "Taxogenerator va temperatura datchigi o’rtasidagi umumiylik:",
    "options": [
      "Ikkalasidan xam generatorli datchiklar;",
      "Ikkalasiga xam temperaturani ulchaydi;",
      "Ikkalasi xam tezlikni ulchaydi;",
      "Ikkalasiga xam parametrik dastchiklar;"
    ],
    "answer": "Ikkalasidan xam generatorli datchiklar;"
  },
  {
    "id": 33,
    "question": "Magnit puskatel nima uchun xizmat qiladi:",
    "options": [
      "Dvigatelning masafodan o’chirib yondiradi;",
      "Tarmoq kuchlanishini o’lchaydi;",
      "Elektrodvigatelni temperatura kuchini rostlaydi;",
      "Dvigatelni o’z-o’zidan ulanishidan ximoya qiladi;"
    ],
    "answer": "Dvigatelning masafodan o’chirib yondiradi;"
  },
  {
    "id": 34,
    "question": "Servoprivodga qaysi element kiradi:",
    "options": [
      "Solenoidlida elektromagnit",
      "Shagoviy dvigatel;`",
      "Bir fazali elektrodvigatel`;",
      "Kondensatorli dvigatel`;"
    ],
    "answer": "Solenoidlida elektromagnit"
  },
  {
    "id": 35,
    "question": "Rostlovchi organni qaysi element xarakatga keltiradi:",
    "options": [
      "Shagoviy dvigatelda`;",
      "Magnit usilitel`;",
      "Potensiometr;",
      "Termopara;"
    ],
    "answer": "Shagoviy dvigatelda`;"
  },
  {
    "id": 36,
    "question": "Fotoelement ishi fizikaning qaysi qonuniga asoslangan:",
    "options": [
      "Optikada;",
      "Termodinamik;",
      "Mexanikali;",
      "Kvant mexaniksi;"
    ],
    "answer": "Optikada;"
  },
  {
    "id": 37,
    "question": "Qaysi datchik mexanizmi xolatlarini nazorat qilish uchun xizmat qiladi:",
    "options": [
      "Kontaktlida puteviye viklyuchatel;",
      "Termopara;",
      "Tok relesi;",
      "Fotometr;"
    ],
    "answer": "Kontaktlida puteviye viklyuchatel;"
  },
  {
    "id": 38,
    "question": "Noelektrik kattalikni elektrik kattalikka aylantiruvchi avtomatikaning elementini ko’rsating:",
    "options": [
      "Datchiklarda;",
      "Servodapatel`;",
      "Rostlovchi organ;",
      "Kuchaytirgich;"
    ],
    "answer": "Datchiklarda;"
  },
  {
    "id": 39,
    "question": "Generatorli datchikni ko’rsating:",
    "options": [
      "Termoparada;",
      "Manometi termometr;",
      "Tenzometr;",
      "Taxometr;"
    ],
    "answer": "Termoparada;"
  },
  {
    "id": 40,
    "question": "Tezlik parametrli datchikni ko’rsating:",
    "options": [
      "Taxogeneratorda;",
      "Reostat uzgartirgichli markazdan qochma rele;",
      "Tenzorezistor;",
      "P`yezoelektrik;"
    ],
    "answer": "Taxogeneratorda;"
  },
  {
    "id": 41,
    "question": "Qaysi chiziqli siljish datchigi analogliga kiradi:",
    "options": [
      "Potensiometrikda;",
      "Sigimli;",
      "Aylanma;",
      "Elektromagnit;"
    ],
    "answer": "Potensiometrikda;"
  },
  {
    "id": 42,
    "question": "Generatorli datchikda qaysi o’lchov sxemasi qo’llanilgan:",
    "options": [
      "Kompensasionda;",
      "Differensial;",
      "Oddiy;",
      "Sozlanmagan ko’prik;"
    ],
    "answer": "Kompensasionda;"
  },
  {
    "id": 43,
    "question": "Sil`fon qaysi datchikka kiradi:",
    "options": [
      "Gaz bosimining;",
      "Kuchlanish;",
      "Deformasiya;",
      "Satx;"
    ],
    "answer": "Gaz bosimining;"
  },
  {
    "id": 44,
    "question": "Qaysi datchik kuchni elektr kuchlanishga aylantiradi",
    "options": [
      "P`yezoelektrikda",
      "Tenzometrik",
      "Detolokometrik",
      "Magnitli"
    ],
    "answer": "P`yezoelektrikda"
  },
  {
    "id": 45,
    "question": "Kuchlanish relesi nima uchun xizmat qiladi:",
    "options": [
      "Tarmoq kuchlanishining nazorati uchun;",
      "Tarmoq toki uchun;",
      "Faza mavjudligni aniqlash uchun;",
      "Dvigatel ulanganini nazorat qilish uchun;"
    ],
    "answer": "Tarmoq kuchlanishining nazorati uchun;"
  },
  {
    "id": 46,
    "question": "Qaysi datchik bilan birga ko’prik logometr sxema ishlatiladi:",
    "options": [
      "Taxogeneratorli datchikda;",
      "Qarshilik termometrii;",
      "Termopara;",
      "P`yezoelektrik datchik;"
    ],
    "answer": "Taxogeneratorli datchikda;"
  },
  {
    "id": 47,
    "question": "Datchik uchun muxim ko’rsatkichni aniqlang:",
    "options": [
      "Sezgirlikda;",
      "Konstruksiyasining soddaligi;",
      "Boqiylik ;",
      "Aniqlik;"
    ],
    "answer": "Sezgirlikda;"
  },
  {
    "id": 48,
    "question": "Kuchaytiruvchi elementning axamiyatli parametrini ko’rsating:",
    "options": [
      "Quvvatining bo‘yicha kuchaytirish koeffisiyenti;",
      "Mustaxkamlik;",
      "Xarakatlanuvchi qismning mavjudligi;",
      "Ishga tushirish sxemasining soddaligi;"
    ],
    "answer": "Quvvatining bo‘yicha kuchaytirish koeffisiyenti;"
  },
  {
    "id": 49,
    "question": "Avtomatik boshqarish uchun uzilishni xosil qiluvchi bajaruvchi mexanizm elementini ko’rsating:",
    "options": [
      "Shagoviy dvigatelda;",
      "LATR;",
      "Reostat;",
      "Toyinish drosseli;"
    ],
    "answer": "Shagoviy dvigatelda;"
  },
  {
    "id": 50,
    "question": "Elektromagnit mufta avtomatlashtirishning qaysi elementiga kiradi:",
    "options": [
      "Ijro mexanizimida;",
      "Elementlar tasnifi;",
      "O’zgartiruvchi;",
      "Sezgirlik;"
    ],
    "answer": "Ijro mexanizimida;"
  },
  {
    "id": 51,
    "question": "Elektrmagnit servodvigatelga qaysi qurilma kiradi:",
    "options": [
      "Shagoviy dvigatelda;",
      "Rele;",
      "Solenoidli yuritma;",
      "Kuchaytirgich;"
    ],
    "answer": "Shagoviy dvigatelda;"
  },
  {
    "id": 52,
    "question": "Xromnikelli termoparada eng yuqori temperaturasi nechaga teng:",
    "options": [
      "800 c;",
      "1300 c;",
      "1600 c;",
      "1000 c;"
    ],
    "answer": "800 c;"
  },
  {
    "id": 53,
    "question": "Namlikni o’zgarishga boglik ravishda aktiv qarshilikning o’zgarishi qaysi prinsipga asoslangan:",
    "options": [
      "Konduktometrikda;",
      "Psixrometrik;",
      "Gigrometrik;",
      "Sigimi"
    ],
    "answer": "Konduktometrikda;"
  },
  {
    "id": 54,
    "question": "Magnit kuchaytirgich qaysi statik parametr orqali aniqlanadi:",
    "options": [
      "Kuchaytirish koeffisiyentida;",
      "Sezgirlik;",
      "Turgunlik;",
      "Mustaxkamlik;"
    ],
    "answer": "Kuchaytirish koeffisiyentida;"
  },
  {
    "id": 55,
    "question": "Qaysi dinamik parametr magnit kuchaytirgich ishini aniqlamaydi:",
    "options": [
      "Tebranuvchanlikda;",
      "Magnit oqimi;",
      "Vaqt doimiysili;",
      "Kechikish;"
    ],
    "answer": "Tebranuvchanlikda;"
  },
  {
    "id": 56,
    "question": "Qaysi faktor magnit kuchaytirgichga ta`sir qilmaydi:",
    "options": [
      "Atrof muxitning temperaturasi;",
      "Materialning magnitlilik xususiyati;",
      "Tarmoq kuchlanishi;",
      "Yuklama kuchlanishi;"
    ],
    "answer": "Atrof muxitning temperaturasi;"
  },
  {
    "id": 57,
    "question": "Reversiv magnit kuchaytirgich uchun qanday sxemadan foydalaniladi:",
    "options": [
      "Differensiallikda;",
      "Murakkablik;",
      "Oddiy;",
      "Kompensasion;"
    ],
    "answer": "Differensiallikda;"
  },
  {
    "id": 58,
    "question": "Kontaktsiz magnit relesi qaysi asosda quriladi:",
    "options": [
      "Magnit kuchaytirgichi asosida;",
      "Elektromagnit relesi;",
      "Gerkonniy rele;",
      "Induksion rele;"
    ],
    "answer": "Magnit kuchaytirgichi asosida;"
  },
  {
    "id": 59,
    "question": "Magnit kuchaytirgich xossasini qanday konchtruktiv xolat yaxshilamaydi:",
    "options": [
      "Umumiy chulgamdan foydalanish;",
      "Magnit zanjiriga xavo bo’shligini yo’q qilish;",
      "Magnitutkazuvchanlik formasi;",
      "Maxsus magnit utkazuvchanli elementni qo`llash"
    ],
    "answer": "Umumiy chulgamdan foydalanish;"
  },
  {
    "id": 60,
    "question": "Qutblar soni p=2 va uch fazali tokning chatotasi f = 50 Gs bo`lsa, magnit maydonining aylanish chastotasi n1 nimaga teng:",
    "options": [
      "n1 = 1500 ayl/min;",
      "n1 = 1600 ayl/min;",
      "n1 = 1750 ayl/min;",
      "n1 = 3000 ayl/min;"
    ],
    "answer": "n1 = 1500 ayl/min;"
  },
  {
    "id": 61,
    "question": "Qanday yarim o`tkazgichli asbob p-n o`tishga ega bo`lmaydi:",
    "options": [
      "Rezistorda;",
      "Diod;",
      "Tranzistor;",
      "Tiristor;"
    ],
    "answer": "Rezistorda;"
  },
  {
    "id": 62,
    "question": "Fotorezistor nima:",
    "options": [
      "Yorug`lik ta`sirida qarshiligi o`zgaruvchan asboblar;",
      "Kuchlanishli o`zgaruvchan asboblar;",
      "O`zgaruvchanligi o`zgaruvchi asboblar;",
      "Chastota o`zgaruvchi asboblar;"
    ],
    "answer": "Yorug`lik ta`sirida qarshiligi o`zgaruvchan asboblar;"
  },
  {
    "id": 63,
    "question": "Elektr mashinalari qanday rejimlarda ishlaydi:",
    "options": [
      "Dvigatelda, generatorda va tormoz rejimida;",
      "Qisqa vaqtli, tormoz tejimida;",
      "Oraliq, davomiy va tezlik rejimida;",
      "Dvigatel, qisqa vaqtli, tormoz tejimida;"
    ],
    "answer": "Dvigatelda, generatorda va tormoz rejimida;"
  },
  {
    "id": 64,
    "question": "O`zgarmas tok dvigateli magnit maydonining qiymati:",
    "options": [
      "qo`zg`atishda tokka bog`liq;",
      "Yakorni burchak tezligiga bog`liq;",
      "yakor tokiga bog`liq;",
      "Dvigatelni EYuk siga bog`liq;"
    ],
    "answer": "qo`zg`atishda tokka bog`liq;"
  },
  {
    "id": 65,
    "question": "O`zgarmas tok dvigatelini revers qilish qanday amalga oshiriladi:",
    "options": [
      "Kuchlanishning qutbini o`zgartirish;",
      "Yakor chulg`ami toki yo`nalishini o`zgartirish;",
      "Quzg`atish chulg`ami toki yo`nalishini o`zgartirish;",
      "Mumkin emas;"
    ],
    "answer": "Kuchlanishning qutbini o`zgartirish;"
  },
  {
    "id": 66,
    "question": "Mexanik tavsiflarning qanday ko`rinishlari bor:",
    "options": [
      "Tabiiy va sun`iy;",
      "Tashqi va yuklamali;",
      "Xaqiqiy va rostlanuvchi;",
      "Yuklamali va rostlanuvchi;"
    ],
    "answer": "Tabiiy va sun`iy;"
  },
  {
    "id": 67,
    "question": "Elektrodvigatel qanday qismlardan tuzilgan:",
    "options": [
      "Aylanuvchi - rotorda, qo`zg`almas- stator;",
      "Stator va yakor`;",
      "Magnitli o`tkazgich va rotor;",
      "Magnitli o`tkazgich va stator;"
    ],
    "answer": "Aylanuvchi - rotorda, qo`zg`almas- stator;"
  },
  {
    "id": 68,
    "question": "O`zgarmas tok dvigateli … bo`lmasa aylantiruvchi moment xosil qila olmaydi:",
    "options": [
      "Yakor zanjirida qo`shimcha rezistor;",
      "Inersiya momenti;",
      "Magnit oqimi va yakor toki;",
      "Burchak tezligi;"
    ],
    "answer": "Yakor zanjirida qo`shimcha rezistor;"
  },
  {
    "id": 69,
    "question": "O`zgarmas tok generatori uchun qanday qo`zg`atish usullari mavjud? To`laroq javobni aniqlang",
    "options": [
      "Mustaqil, parallel, ketma-ket va aralash",
      "Parallel, ketma-ket",
      "Ketma-ket va aralash",
      "Mustaqil va aralash"
    ],
    "answer": "Mustaqil, parallel, ketma-ket va aralash"
  },
  {
    "id": 70,
    "question": "Agar o`zgarmas tok dvigateli validagi yuklama oshsa, yakor toki:",
    "options": [
      "Oshadida;",
      "O`zgarmaydi;",
      "Kamayadi;",
      "Nolga teng bo`ladi;"
    ],
    "answer": "Oshadida;"
  },
  {
    "id": 71,
    "question": "Agar o`zgarmas tok dvigatelida qo`zg`atish zanjirida uzilish sodir bo`lsa, salt ishlash rejimida bursak tezligi qanday o`zgaradi:",
    "options": [
      "Dvigatelning to`xtashi;",
      "Burchak tezligi oshadi;",
      "Burchak tezligi kamayadi;",
      "Burchak tezligi o`zgarmaydi;"
    ],
    "answer": "Dvigatelning to`xtashi;"
  },
  {
    "id": 72,
    "question": "Qanday ishchi tavsifdan triodning kuchaytirish koeffisiyenti aniqlanadi:",
    "options": [
      "Anod-to`rli tavsifidan;",
      "Ayrim bir tavsifdan;",
      "To`rli tavsifigan;",
      "Xech qanday tavsifgan;"
    ],
    "answer": "Anod-to`rli tavsifidan;"
  },
  {
    "id": 73,
    "question": "O`zgarmas tok mashinasining qaysi bir qismi o`zgaruvchan EYuk ni o`zgarmas EYuk ga aylantirib beradi:",
    "options": [
      "Kollektorda va cho`tkalarda;",
      "Yakor;",
      "Cho`tkalar;",
      "Qo`zg`atish chulg`ami;"
    ],
    "answer": "Kollektorda va cho`tkalarda;"
  },
  {
    "id": 74,
    "question": "Tranzistorni qanday maqsadlarda ishlatmagan ma`qul:",
    "options": [
      "To`grilagich sifatida;",
      "Generator sxemalariga;",
      "Quvvat kuchaytirgichi sxemalarida;",
      "Kuchlanish kuchaytirgichi sxemalarida;"
    ],
    "answer": "To`grilagich sifatida;"
  },
  {
    "id": 75,
    "question": "O`zgarmas tok dvigateli yakor tokining qiymati:",
    "options": [
      "Manbadan olinayotgan kuchlanishga bog`liq;",
      "Yakorni burchak tezligiga bog`liq;",
      "qo`zg`atish tokiga bog`liq;",
      "Dvigatelni EYuk siga bog`liq;"
    ],
    "answer": "Manbadan olinayotgan kuchlanishga bog`liq;"
  },
  {
    "id": 76,
    "question": "O`zgarmas tok dvigateli EYuk ning qiymati:",
    "options": [
      "Yakorning burchak tezligiga bog`liq;",
      "yakor tokiga bog`liq;",
      "qo`zg`atish tokiga bog`liq;",
      "Dvigatelni EYuk siga bog`liq;"
    ],
    "answer": "Yakorning burchak tezligiga bog`liq;"
  },
  {
    "id": 77,
    "question": "Asinxron dvigatellarni «revers» (aylanish yo`nalishini o`zgartirish) qanday amalga oshiriladi",
    "options": [
      "Statordagi ikkita chulg`amni ulanishini o`zgartirish yo`li bilan",
      "Zanjirdagi kuchlanish o`zgartirish yo`li bilan",
      "Dvigatelga qo`yilgan yukni kamaytirish",
      "Statordagi uchchala chulg`amni ulanishini o`zgartirish yo`li bilan"
    ],
    "answer": "Statordagi ikkita chulg`amni ulanishini o`zgartirish yo`li bilan"
  },
  {
    "id": 78,
    "question": "Asinxron dvigatelining ishga tushirilgandagi sirpanishi nimaga teng:",
    "options": [
      "1;",
      "1.5`;",
      "2,5;",
      "Cheksiz;"
    ],
    "answer": "1;"
  },
  {
    "id": 79,
    "question": "Asinxron dvigatelning ishga tushirish toki stator chulg`ami uchburchakdan yulduzga o`zgartirilganda qanday o`zgaradi:",
    "options": [
      "1.73 marta tok kamayadi;",
      "Ikkala holatda ham tok o`zgarmaydi;",
      "1.73 marta tok ortadi;",
      "3 marta tok ortadi;"
    ],
    "answer": "1.73 marta tok kamayadi;"
  },
  {
    "id": 80,
    "question": "Parallel qo`zg`atishli dvigatelni qanday qilib teskari tomonga aylantirish qilinadi:",
    "options": [
      "Yakorda yoki qo`zg`atishda chulg`amlaridagi tok yo`nalishini o`zgartiriladi;",
      "Dvigatel qismlaridagi kuchlanish qutblarini o`zgartiriladi;",
      "Yakor va qo`zg`atish chulg`amlaridagi tok yo`nalishini o`zgartiriladi;",
      "Dvigatel validagi nagruzka oshiriladi;"
    ],
    "answer": "Yakorda yoki qo`zg`atishda chulg`amlaridagi tok yo`nalishini o`zgartiriladi;"
  },
  {
    "id": 81,
    "question": "Asinxron dvigatel magnit maydonining aylanish tezligi nimalar orqali aniqlanadi:",
    "options": [
      "O`zgaruvchan tokning chastotasi va dvigatelning qutblar soni orqali;",
      "Tarmoq kuchlanishi orqali;",
      "Dvigatel yuklamasi orqali;",
      "Rotorning aylanish tezligi orqali;"
    ],
    "answer": "O`zgaruvchan tokning chastotasi va dvigatelning qutblar soni orqali;"
  },
  {
    "id": 82,
    "question": "Keltirilgan jumlalardan qaysi biri asinxron dvigatelning M maksimal momenti uchun to`g`ri:",
    "options": [
      "M moment rotorning aktiv qarshiligi qiymatiga to`g`ri proporsional;",
      "M moment rotorni aktiv qarshiligi qiymatiga teskari proporsional;",
      "M moment rotorni aktiv qarshiligi qiymatiga bog`liq emas;",
      "M moment bilan rotorni aktiv qarshiligi kvadrat holda bog`liq;"
    ],
    "answer": "M moment rotorning aktiv qarshiligi qiymatiga to`g`ri proporsional;"
  },
  {
    "id": 83,
    "question": "Keltirilgan tezliklardan qaysi biri asinxron dvigatelning normal rejimdagi tezligiga to`g`ri keladi:",
    "options": [
      "750 ayl/min;",
      "3150 ayl/min;",
      "1550 ayl/min;",
      "1020 ayl/min;"
    ],
    "answer": "750 ayl/min;"
  },
  {
    "id": 84,
    "question": "Tarmoq chastotasi f bo`lsa aylanayotgan rotorning EYuk si qancha bo`ladi:",
    "options": [
      "fS;",
      "F;",
      "2f;",
      "nol`;"
    ],
    "answer": "fS;"
  },
  {
    "id": 85,
    "question": "Elektr mashinalari qanday rejimlarda ishlashi mumkin:",
    "options": [
      "Dvigatelda, generatorda va tormozda rejimida;",
      "Qisqa vaqtli, tormoz tejimida;",
      "Oraliq, davomiy va tezlik rejimida;",
      "Dvigatel, qisqa vaqtli, tormoz tejimida;"
    ],
    "answer": "Dvigatelda, generatorda va tormozda rejimida;"
  },
  {
    "id": 86,
    "question": "Asinxron dvigatel generator rejimida ishlashi mumkinmi:",
    "options": [
      "Ha;",
      "Bo`lishi mumkin emas;",
      "Yo`q;",
      "Xech qachon;"
    ],
    "answer": "Ha;"
  },
  {
    "id": 87,
    "question": "Asinxron dvigatelining magnit maydonining sinxron tezligi formulasi qaysi javobda to`g`ri yozilgan:",
    "options": [
      "n1 = (60*f) / p;",
      "n1 = 6*f / 60;",
      "n1 = f / p;",
      "n1 = (60 * p) / f;"
    ],
    "answer": "n1 = (60*f) / p;"
  },
  {
    "id": 88,
    "question": "Agarda f=50 Gs, qutblar soni p=6 ga teng bo`lsa, n1 magnit maydonini aylanish chastotasi nimaga teng bo`ladi:",
    "options": [
      "500;",
      "600;",
      "1250;",
      "750;"
    ],
    "answer": "500;"
  },
  {
    "id": 89,
    "question": "Elektrodvigatelni to`xtatishda qanday usullar ishlatiladi:",
    "options": [
      "Elektrodinamidan, generatorlidan, teskari ulashdan;",
      "majburiy, qo`l yordamida, mexanik;",
      "teskari ulash, magnitli;",
      "Mexanik va qo`l yordamida;"
    ],
    "answer": "Elektrodinamidan, generatorlidan, teskari ulashdan;"
  },
  {
    "id": 90,
    "question": "Magnit maydoni 1000 ayl/min va sirpanish S=1 bo`lsa, rotorning aylanish chastotasi nimaga teng:",
    "options": [
      "0;",
      "600;",
      "1250;",
      "750;"
    ],
    "answer": "0;"
  },
  {
    "id": 91,
    "question": "Magnit maydoni 600 ayl/min va sirpanish S=0 bo`lsa, rotorning aylanish chastotasi nimaga teng:",
    "options": [
      "600;",
      "900;",
      "1250;",
      "750;"
    ],
    "answer": "600;"
  },
  {
    "id": 92,
    "question": "Transformator qanday qismlardan iborat",
    "options": [
      "Po’latdan o’zak (sterjen) va birlamchi va ikkilamchi chulg’amlardan",
      "Po’latli o’zak va metal plastinkalardan",
      "Po’lat o’zak va g’altakdan",
      "G’altakka va chulg’amlardan"
    ],
    "answer": "Po’latdan o’zak (sterjen) va birlamchi va ikkilamchi chulg’amlardan"
  },
  {
    "id": 93,
    "question": "Transformatorni kim va qachon ixtiro qilgan",
    "options": [
      "1876 yilda Yablochkov P. N",
      "1889 yil Dolivo-Dobrovolskiy M. O",
      "1880 yil Usagin",
      "1821 yil Maksvel"
    ],
    "answer": "1876 yilda Yablochkov P. N"
  },
  {
    "id": 94,
    "question": "O’zgaruvchan tok mashinalari necha xil bo’ladi?",
    "options": [
      "Sinxron, asinxron, kollektorli",
      "Asinxron, reduktorli",
      "Kollektorli, parallel ko’zg’atish chulg’amli",
      "Kollektorli, yakorli"
    ],
    "answer": "Sinxron, asinxron, kollektorli"
  },
  {
    "id": 95,
    "question": "Elektr motorni tormozlashning qanday usullari bor",
    "options": [
      "Generatrolida, qarshi qo’shish bilan, elektrodinamik",
      "Gidravlikka, elektrodinamik, qo’shimcha kuch bilan",
      "Elektrodinamik, teskari ulab, qarshi qo’shib",
      "Qo’shimcha kuch bilan, kolodkalar yordamida, gidravlik."
    ],
    "answer": "Generatrolida, qarshi qo’shish bilan, elektrodinamik"
  },
  {
    "id": 96,
    "question": "Transformator nagruzkada ishlaganda uning ikkilamchi chulg’ami uchlari qanday xolatda bo’ladi?",
    "options": [
      "Yuklamada ulangan bo’ladi",
      "Qisqa tutashtirilgan",
      "Ochiq xolda bo’ladi",
      "To’g’ri javob yo’q."
    ],
    "answer": "Yuklamada ulangan bo’ladi"
  },
  {
    "id": 97,
    "question": "Transformator salt ishlaganda ikkilamchi chulg’amdagi tok kuchi nechaga teng bo’ladi?",
    "options": [
      "0",
      "127",
      "220",
      "380"
    ],
    "answer": "0"
  },
  {
    "id": 98,
    "question": "Elektr motor ish rejimlari qaysi xarf bilan belgilanadi?",
    "options": [
      "S",
      "I",
      "R",
      "F"
    ],
    "answer": "S"
  },
  {
    "id": 99,
    "question": "O’lchov transformatorlarining qanday turlari mavjud?",
    "options": [
      "Tokda va kuchlanishda",
      "Quvvat, tezlik, tok",
      "Tok va quvvat",
      "Tezlik va quvvat"
    ],
    "answer": "Tokda va kuchlanishda"
  },
  {
    "id": 100,
    "question": "O‘zgarmas tok generatori ishlashining asosida elektrotexnikaning qanday qonuni yotadi?",
    "options": [
      "Amper qonuning;",
      "Elektromagnit induksiya qonuni;",
      "Kirxgofning 1 qonuni;",
      "Lens qoidasi."
    ],
    "answer": "Amper qonuning;"
  },
  {
    "id": 101,
    "question": "Ayon qutbli sinxron generatorning yakor chulg‘amida hosil kilinayotgan EYUK shakli sinusoidal bo‘lishi uchun uning havo oralig‘i qanday olinadi?",
    "options": [
      "Rotordan butun aylanasi bo‘ylab bir xil;",
      "Qutb uchliklari o‘rtasida katta va chetlarida kichkina;",
      "Qutb uchliklari o‘rtasida kichik va chetlarida nisbatan katta;",
      "Javob uchun ma’lumot yetarli emas."
    ],
    "answer": "Rotordan butun aylanasi bo‘ylab bir xil;"
  },
  {
    "id": 102,
    "question": "O‘zgarmas tok mashinasi yakor chulg‘ami o‘tkazgichlaridan tok o‘tganda ularda oqayotgan magnit oqim yo‘nalishi qaysi qoida bo‘yicha aniqlanadi?",
    "options": [
      "O‘ng qo‘l qoida;",
      "Chap qo‘l qoidasi;",
      "Parma qoidasi;",
      "Amper qonuni."
    ],
    "answer": "O‘ng qo‘l qoida;"
  },
  {
    "id": 103,
    "question": "Uch fazali sinxron generatorning stator chulg‘amida 3000 ayl/min chastotada aylanma magnit maydon hosil bo‘lsa, uning rotori qanday chastotada aylanadi?",
    "options": [
      "Masalaning noaniq, chunki yakor chulg‘amidagi tok chastotasi noma’lum;",
      "Masala noaniq, chunki rotor qutblari soni noma’lum;",
      "1500 ayl/min;",
      "3000 ayl/min."
    ],
    "answer": "Masalaning noaniq, chunki yakor chulg‘amidagi tok chastotasi noma’lum;"
  },
  {
    "id": 104,
    "question": "Yakor toki Ia 2 marta oshca parallel qo‘zg‘atishli o‘zgarmas tok motorining aylantiruvchi momenti qanday o‘zgaradi.?",
    "options": [
      "O‘zgarmaydi;",
      "2 marta oshadi;",
      "Aniqlab bo‘lmaydi, chunki mashina qutblari berilmagan;",
      "4 marta oshadi."
    ],
    "answer": "O‘zgarmaydi;"
  },
  {
    "id": 105,
    "question": "Ikki juft qutbli sinxron generatorning rotori 1500 ayl/min chastota bilan aylanmokda. Yakor chulg‘amida hosil qilingan asosiy EYUK ga mos vektor qanday chastota bilan aylanadi?",
    "options": [
      "50 Gs;",
      "100 Gs ;",
      "75 Gs ;",
      "1000 Gs ."
    ],
    "answer": "50 Gs;"
  },
  {
    "id": 106,
    "question": "O‘zgarmas tok generatori yakor chulg‘ami o‘tkazgichlarida g‘osil bo‘lgan EYUK yo‘nalishi qaysi qoida bo‘yicha aniqlanadi?",
    "options": [
      "O‘ng qo‘l qoida;",
      "Chap qo‘l qoidasi;",
      "Parma qoidasi;",
      "Amper qonuni."
    ],
    "answer": "O‘ng qo‘l qoida;"
  },
  {
    "id": 107,
    "question": "Gidrogeneratorlarda (a), turbogeneratorlarda (b) qanday rotorlar qo‘llaniladi",
    "options": [
      "a) noayon qutbli, b) ayon qutbli;",
      "a) ayon qutbli, b) noayon qutbli;",
      "Rotorni tanlash generatorning quvvatiga bog‘liq;",
      "a) ayon qutbli, b) ayon qutbli."
    ],
    "answer": "a) noayon qutbli, b) ayon qutbli;"
  },
  {
    "id": 108,
    "question": "Elektr mashinaning qanday qismini stator deb ataladi?",
    "options": [
      "Mashinaning qo‘zg‘almas qismi;",
      "EYUK hosil bo‘ladigan qismi;",
      "Qo‘zg‘atish magnit oqimi hosil qilinadigan qismi;",
      "Mashinani aylanadigan qismi."
    ],
    "answer": "Mashinaning qo‘zg‘almas qismi;"
  },
  {
    "id": 109,
    "question": "Sinxron generatorning yuklama toki induktiv xarakterda bo‘lganda, uning yakor ryeaksiyasi qanday bo‘ladi?",
    "options": [
      "Ko‘ndalangdan;",
      "Bo‘ylama magnitsizlovchi;",
      "Bo‘ylama magnitlovchi;",
      "Ko‘ndalang magnitlovchi."
    ],
    "answer": "Ko‘ndalangdan;"
  },
  {
    "id": 110,
    "question": "O‘zgarmas tok motorining muvozanat tenglamasi analitik ifodasi M – MD = M0 + M2 bo‘lsa, motorning aylanish chastotasi qanday o‘zgaradi?",
    "options": [
      "O‘zgarmaydi;",
      "Kamayadi;",
      "Aniqlab bo‘lmaydi, chunki mashina qutblari berilmagan;",
      "Ortadi."
    ],
    "answer": "O‘zgarmaydi;"
  },
  {
    "id": 111,
    "question": "Sinxron generatorning induktiv yuklamasi oshirilganda, uning chiqish klemmalarida kuchlanish qanday o‘zgaradi?",
    "options": [
      "O‘zgarmaydi;",
      "Oshadi;",
      "Kamayadi;",
      "Avvaliga oshib, keyin kamayadi"
    ],
    "answer": "O‘zgarmaydi;"
  },
  {
    "id": 112,
    "question": "Sinxron motor yuklamasi ortishi bilan mexanik tavsifi qanday o‘zgaradi?",
    "options": [
      "Oshadida;",
      "To‘g‘;ri chizikli ko‘rinishda kamayadi;",
      "O‘zgarmaydi;",
      "Egri chiziqli ko‘rinishda kamayadi"
    ],
    "answer": "Oshadida;"
  },
  {
    "id": 113,
    "question": "O‘zgarmas tok motorining yakor chulg‘amida EYUK kamaysa, yakor toki va elektr tarmog‘idan oladigan quvvat qanday o‘zgaradi?",
    "options": [
      "Tokda va quvvatda oshadi;",
      "Tok oshadi, quvvat kamayadi;",
      "Tok va quvvat kamayadi;",
      "Tok kamaydi, quvvat oshadi."
    ],
    "answer": "Tokda va quvvatda oshadi;"
  },
  {
    "id": 114,
    "question": "Uch fazali sinxron generatorning yuklamasi aktiv xarakterga ega. Yakor chulg‘ami g‘altagining qutbga nisbatan qanday holatida undagi tok oniy qiymati ekstremal bo‘ladi?",
    "options": [
      "Gʻaltak tomonlarining qutblar o‘rtasining yaqinida bo‘lganda;",
      "Gʻaltak o‘rtasi shimoliy qutblar ustida bo‘lganida;",
      "Javob uchun ma’lumot yetarli emas;",
      "Gʻaltak o‘rtasi janubiy qutblar ustida bo‘lganida."
    ],
    "answer": "Gʻaltak tomonlarining qutblar o‘rtasining yaqinida bo‘lganda;"
  },
  {
    "id": 115,
    "question": "O‘zgaruvchan tokli elektr mashinasining qanday qismi yakor deyiladi?",
    "options": [
      "Qo‘zg‘almas qismida;",
      "Rotori;",
      "Asosiy EYUK hosil bo‘ladigan qismi;",
      "Stator."
    ],
    "answer": "Qo‘zg‘almas qismida;"
  },
  {
    "id": 116,
    "question": "Magnit zanjiri to‘yinmagan sinxron mashinaning yuklama toki aktiv xarakterga ega bo‘lganda yakor reaksiyasi asosiy magnit oqim umumiy maydoni qiymatiga qanday ta’sir qiladi?",
    "options": [
      "Ta’sirida qilmaydi;",
      "Kamaytiradi;",
      "Oshiradi;",
      "Avval kamayib keyin oshadi."
    ],
    "answer": "Ta’sirida qilmaydi;"
  },
  {
    "id": 117,
    "question": "O‘zgarmas tok generatorida yakor reaksiyasi nima?",
    "options": [
      "Generatorning yuklamasi oshganda asosiy magnit maydonning buzilishi;",
      "Yakor chulg‘ami MYUKning asosiy magnit maydoniga ta’siri;",
      "Yuklama oshishi bilan mashina magnit maydoni oqimining kamayishi;",
      "Yakor magnit maydonining qutblar hosil qilgan asosiy magnit maydonga ta’siri."
    ],
    "answer": "Generatorning yuklamasi oshganda asosiy magnit maydonning buzilishi;"
  },
  {
    "id": 118,
    "question": "Uch fazali sinxron generatorning stator chulg‘amida 3000 ayl/min chastotada aylanma magnit maydon hosil bo‘lsa, uning rotori qanday chastotada aylanadi?",
    "options": [
      "2915 ayl/min.;",
      "3450 ayl/min.;",
      "3000 ayl/min.",
      "3500 ayl/min;"
    ],
    "answer": "2915 ayl/min.;"
  },
  {
    "id": 119,
    "question": "Elektromagnit induksiya qonuni to‘g‘ri ifodalangan formulalar keltirilgan satrni ko‘rsating.",
    "options": [
      "e = – w∙dF/dt F = I∙l B;",
      "e = – w∙dF/dt e = B∙l∙v ;",
      "F = VS F = I∙l B;",
      "E = w∙dF/dt F = VS."
    ],
    "answer": "e = – w∙dF/dt F = I∙l B;"
  },
  {
    "id": 120,
    "question": "Sinxron generatori chiqish klemmalaridagi kuchlanishning yuksiz ishlash EYUK dan farqlanishi qanday sabablar tufayli sodir bo‘ladi?",
    "options": [
      "Yakorda reaksiyasi;",
      "Tarqoq induktiv qarshilikda kuchlanish pasayishi;",
      "Yakor chulg‘ami aktiv qarshiligida kuchlanish pasayishi;",
      "Yuqorida keltirilgan barcha sabablarning bir vaqtda ta’siri."
    ],
    "answer": "Yakorda reaksiyasi;"
  },
  {
    "id": 121,
    "question": "Qo‘zg‘atish chulg‘amining magnit oqimi o‘zgarmas bo‘lib, yakor chulg‘amida tok ortsa, o‘zgarmas tok motorining aylantiruvchi momenti qanday o‘zgaradi?",
    "options": [
      "O‘zgarmaydi;",
      "Oshadi;",
      "Kamayadi;",
      "Aniqlab bo‘lmaydi, chunki kuchlanish berilmagan."
    ],
    "answer": "O‘zgarmaydi;"
  },
  {
    "id": 122,
    "question": "Parallel qo‘zg‘otishli o‘zgarmas tok motorining validagi mexanik yuklama ortsa, yakorning aylanish chastotasi qanday o‘zgaradi?",
    "options": [
      "O‘zgarmaydi;",
      "Ortadi;",
      "Kamayadi;",
      "Aniqlab bo‘lmaydi, chunki kuchlanish berilmagan."
    ],
    "answer": "O‘zgarmaydi;"
  },
  {
    "id": 123,
    "question": "Sinxron generatorning yuklama toki ortganda uning kuchlanishi o‘zgarmay qolishi uchun qo‘zg‘atish toki qanday o‘zgartirilishi kerak?",
    "options": [
      "Kamaytiriladi;",
      "O‘zgartirilmaydi;",
      "Oshiriladi;",
      "Aniqlab bo‘lmaydi, chunki yuklamaning xarakteri ko‘rsatilmagan."
    ],
    "answer": "Kamaytiriladi;"
  },
  {
    "id": 124,
    "question": "Amper qonunining matematik ifodasini ko‘rsating",
    "options": [
      "Ye = B∙l∙v;",
      "F = I∙l∙B;",
      "e = – w∙dF/dt;",
      "F = V/S;"
    ],
    "answer": "Ye = B∙l∙v;"
  },
  {
    "id": 125,
    "question": "Sinxron generatorning bo‘ylama va ko‘ndalang magnitsizlovchi yakor reaksiyasi qanday xarakterdagi yuklamaga mos keladi?",
    "options": [
      "Aktivlikning;",
      "Aktiv-induktivlik;",
      "Induktiv;",
      "Aktiv-sig‘imiy."
    ],
    "answer": "Aktivlikning;"
  },
  {
    "id": 126,
    "question": "O‘zgarmas tok mashinasining yakor chulg‘ami o‘ramlari ketma-ket ulangan. Generator chiqish klemmalaridagi natijaviy EYUK pulsasiyasini nimaning hisobiga kamaytirish mumkin?",
    "options": [
      "O‘ramlarda sonini oshirib;",
      "Yakor aylanasi bo‘yicha o‘ramlarni tekis taqsimlab;",
      "Javob uchun ma’lumot yetarli emas;",
      "O‘ramlar soni oshiriladi va ular yakor aylanasi bo‘yicha tekis taqsimlanadi."
    ],
    "answer": "O‘ramlarda sonini oshirib;"
  },
  {
    "id": 127,
    "question": "Sinxron motorning qaysi qismida ishga tushirish chulg‘ami joylashtiriladi?",
    "options": [
      "Qutb uchligida;",
      "Yakor o‘zagiga;",
      "Yakor chulg‘amini pazdan tashqari qismlarida;",
      "Statorda;"
    ],
    "answer": "Qutb uchligida;"
  },
  {
    "id": 128,
    "question": "O‘zgarmas tok motorining aylanish chastotasi kamaydi. Yakor chulg‘amida hosil bo‘ladigan EYUK qanday o‘zgardi?",
    "options": [
      "O‘zgarmadi;",
      "Oshdi;",
      "Kamaydi;",
      "Ishorasi teskariga o‘zgardi."
    ],
    "answer": "O‘zgarmadi;"
  },
  {
    "id": 129,
    "question": "Sinxron generator yuklamasi sof induktiv xarakterda bo‘lganda, uning yakor reaksiyasi qanday bo‘ladi?",
    "options": [
      "Ko‘ndalangining magnitsizlovchi;",
      "Bo‘ylama magnitsizlovchi;",
      "Bo‘ylama magnitlovchi;",
      "Ko‘ndalang magnitlovchi;"
    ],
    "answer": "Ko‘ndalangining magnitsizlovchi;"
  },
  {
    "id": 130,
    "question": "O‘zgarmas tok generatorida energiya isroflarining qanday turlari mavjud?",
    "options": [
      "Ishqalanishda isroflar, po‘lat o‘zakdagi isroflar;",
      "yakor va qo‘zg‘atish chulg‘amlaridagi isroflar;",
      "Cho‘tka kontaktlaridagi isroflar, qo‘shimcha isroflar;",
      "Yuqoriga ko‘rsatilgan isroflarning barcha turlari."
    ],
    "answer": "Ishqalanishda isroflar, po‘lat o‘zakdagi isroflar;"
  },
  {
    "id": 131,
    "question": "Elektr mashinaning qanday qismini stator deb ataladi?",
    "options": [
      "Mashinaning qo‘zg‘almas qismi;",
      "EYUK hosil bo‘ladigan qismi;",
      "Qo‘zg‘atish magnit oqimi hosil qilinadigan qismi;",
      "Mashinani aylanadigan qismi."
    ],
    "answer": "Mashinaning qo‘zg‘almas qismi;"
  },
  {
    "id": 132,
    "question": "Sinxron generatorning sig‘im xarakterli yuklamasi ortganda, uning chiqish klemmalari kuchlanishi o‘zgarmas bo‘lishi uchun qo‘zg‘atish tokiga qanday ta’sir qilinadi?",
    "options": [
      "Oshiriladi;",
      "Kamaytiriladi;",
      "O‘zgartirilmaydi;",
      "Avval oshiriladi, keyin kamaytiriladi;"
    ],
    "answer": "Oshiriladi;"
  },
  {
    "id": 133,
    "question": "O‘zgarmas tok generatori tarmoqqa 8 kVt quvvat bermoqda. Generatorda quvvat isroflari yig‘indisi 2 kVt. Generatorning FIK ni % da aniqlang.",
    "options": [
      "25;",
      "80",
      "92",
      "85"
    ],
    "answer": "25;"
  },
  {
    "id": 134,
    "question": "Sinxron generatorning yuklama toki ortganda uning kuchlanishi o‘zgarmay qolishi uchun qo‘zg‘atish toki qanday o‘zgartirilishi kerak?",
    "options": [
      "Kamaytirilarda;",
      "O‘zgartirilmaydi;",
      "Oshiriladi;",
      "Javob uchun ma’lumotlar yetarli emas."
    ],
    "answer": "Kamaytirilarda;"
  },
  {
    "id": 135,
    "question": "O‘zgarmas tok generatorining yakor chulg‘ami o‘ramlarida qanday EYUK hosil bo‘ladi?",
    "options": [
      "Qiymat jihatdan o‘zgarmas;",
      "Yo‘nalishi jihatgan o‘zgarmas;",
      "O‘zgaruvchan;",
      "Qiymati va yo‘nalishi jihatdan o‘zgarmas."
    ],
    "answer": "Qiymat jihatdan o‘zgarmas;"
  },
  {
    "id": 136,
    "question": "Turbogeneratorlarda qanday rotor qo‘llaniladi?",
    "options": [
      "Ayon qutblida;",
      "Noayon qutbli;",
      "Rotorni tanlash generator tokiga bog‘liq;",
      "Rotorni tanlash generator quvvatiga bog‘liq"
    ],
    "answer": "Ayon qutblida;"
  },
  {
    "id": 137,
    "question": "Yuksiz ishlash rejimidagi sinxron motorning foydali ish koeffisiyenti nimaga teng?",
    "options": [
      "Juda kichik qiymatga;",
      "Maksimal qiymatga;",
      "0 ga;",
      "0,5 ga."
    ],
    "answer": "Juda kichik qiymatga;"
  },
  {
    "id": 138,
    "question": "Quyidagi shartlardan qaysi biri generatorning o‘z-o‘zini qo‘zg‘atish shartlariga tegishli emas?",
    "options": [
      "Qoldiq magnitdan oqimning mavjudligi;",
      "Qo‘zg‘atish chulg‘ami ulanish ishorasining to‘g‘riligi (to‘g‘ri ulanishi);",
      "Qo‘zg‘atish zanjiri qarshiligini to‘g‘ri tanlash (ya’ni kritik qarshilik r < rkr).",
      "Yakorning aylanish chastotasi nominalga teng bo‘lishi."
    ],
    "answer": "Qoldiq magnitdan oqimning mavjudligi;"
  },
  {
    "id": 139,
    "question": "Sinxron motorning mexanik tavsifsi yuklama oshishi bilan qanday o‘zgaradi?",
    "options": [
      "Ortadi;",
      "To‘g‘ridan-to‘g‘ri chiziqli ko‘rinishda kamayadi;",
      "O‘zgarmaydi;",
      "Egri chiziqli ko‘rinishda kamayadi."
    ],
    "answer": "Ortadi;"
  },
  {
    "id": 140,
    "question": "Parallel qo‘zg‘atishli o‘zgarmas tok generatorining yuklamasi ortganda: bosh qutblarning magnit oqimi va b) generatorning natijaviy magnit oqimi qanday o‘zgaradi?",
    "options": [
      "a) Oshadi; b) kamayadi",
      "a) Kamayadi; b) kamayadi",
      "a) Kamayadi; b) o‘zgarmaydi"
    ],
    "answer": "a) Oshadi; b) kamayadi"
  },
  {
    "id": 141,
    "question": "Sinxron motorni ishga tushirishning qaysi usuli qo‘llanilmaydi?",
    "options": [
      "Yordamchi motorning yordamida;",
      "Chastota usuli;",
      "Rotor chulg‘ami so‘ndiruvchi qarshilik orqali tutashtirilib asinxron usulda;",
      "Stator chulg‘ami zanjiriga ulangan cheklovchi qarshilik orqali ko‘p pog‘onali ishga tushirish"
    ],
    "answer": "Yordamchi motorning yordamida;"
  },
  {
    "id": 142,
    "question": "O‘zgarmas tok generatoriga birlamchi motordan berilayotgan quvvat, 50 kVt. Generatorning tarmoqqa berayotgan quvvati, 45 kVt. Generatorning FIK ni (% da) toping?",
    "options": [
      "75;",
      "90",
      "92",
      "80"
    ],
    "answer": "75;"
  },
  {
    "id": 143,
    "question": "Ikki qutbli sinxron motor stator chulg‘amiga berilgan tokning chastotasi f = 500 Gs. Rotorining aylanish chastotasini aniqlang.",
    "options": [
      "2850 ayl/min;",
      "3000 ayl/min;",
      "15000 ayl/min;",
      "3000 ayl/min."
    ],
    "answer": "2850 ayl/min;"
  },
  {
    "id": 144,
    "question": "Generatorning yuklamasi 2 marta oshsa yakor chulg‘amida isroflar qanday o‘zgaradi?",
    "options": [
      "O‘zgarmaydi;",
      "2 marta oshadi;",
      "4 marta oshadi;",
      "2 marta kamayadi."
    ],
    "answer": "O‘zgarmaydi;"
  },
  {
    "id": 145,
    "question": "Sinxron motor tuzilishi jihatdan asinxron motordan nima bilan farq qilmaydi (qutblar soni bir xil)?",
    "options": [
      "Rotor chulg‘amida;",
      "Val uzunligi;",
      "Stator chulg‘ami;",
      "Sovitish konstruksiyasi"
    ],
    "answer": "Rotor chulg‘amida;"
  },
  {
    "id": 146,
    "question": "O‘zgarmas tok motorining quyida keltirilgan: a) mexanik xarakteris-tikasi va b) ish tavsifsini (berilgan ketma-ketlikda) ko‘rsating.",
    "options": [
      "a) n = f (P2); b) n = f (M)",
      "a) n = f (M); b) Ia = f (P2)",
      "a) n = f (P2); b) M = f (P2)",
      "a) n = f (M0); b) M0 = f (P2)"
    ],
    "answer": "a) n = f (P2); b) n = f (M)"
  },
  {
    "id": 147,
    "question": "Cheksiz katta quvvatli tarmoqqa ulangan sinxron motorning validagi mexanik yuk me’yorda oshirilsa, motorning aylanish chastotasi qanday o‘zgaradi?",
    "options": [
      "Oldindan ko‘payadi;",
      "O‘zgarmaydi;",
      "Kamayadi;",
      "Oldin kamayib, keyin oshadi."
    ],
    "answer": "Oldindan ko‘payadi;"
  },
  {
    "id": 148,
    "question": "O‘zgarmas tok motorining validagi yuk oshganda yakor aylanish chastotasi kamaysa, yakor chulg‘ami EYUK o‘zgaradimi?",
    "options": [
      "Boshidan o‘zgarmaydi;",
      "Oshadi;",
      "Kamayadi;",
      "Yakor chulg‘amida EYUK hosil bo‘lmaydi."
    ],
    "answer": "Boshidan o‘zgarmaydi;"
  },
  {
    "id": 149,
    "question": "Sinxron motorning ish tavsiflari tarkibidagi М2 = f(P2 ) bog‘lanish motor yuklamasi ortishi bilan qanday o‘zgaradi?",
    "options": [
      "To‘g‘ridan-to‘g‘ri chiziqli oshadi;",
      "Egri chiziqli oshuvchi;",
      "Magnit zanjiri to‘yinishi tufayli yuklamaga nisbatan sekin o‘zgaradi;",
      "Yuklamaning (0.5 1.0)Iн qiymatlarida yuklamaga nisbatan tez o‘sadi."
    ],
    "answer": "To‘g‘ridan-to‘g‘ri chiziqli oshadi;"
  },
  {
    "id": 150,
    "question": "O‘zgarmas tok motorining yakor chulg‘amida EYUK kamaydi. Yakor toki va elektr tarmog‘idan oladigan quvvat qanday o‘zgardi?",
    "options": [
      "Tokda va quvvatda oshdi;",
      "Tok oshdi, quvvat kamaydi;",
      "Tok va quvvat kamaydi;",
      "Tok kamaydi, quvvat oshdi."
    ],
    "answer": "Tokda va quvvatda oshdi;"
  },
  {
    "id": 151,
    "question": "Sinxron motor ishlayotgan paytda dempfer (ishga tushirish) chulg‘ami qanday vazifani bajaradi?",
    "options": [
      "Rotor tebranishlarining tinchlantirish;",
      "Bo‘ylama o‘q bo‘ylab yakor reaksiyasini kamaytirish;",
      "Qutbdagi asosiy magnit maydonini oshirish;",
      "Sinxron motorni asinxron ishga tushirish."
    ],
    "answer": "Rotor tebranishlarining tinchlantirish;"
  },
  {
    "id": 152,
    "question": "Kollektorning asosiy vazifasi nimadan iborat?",
    "options": [
      "Yakor chulg‘amining mahkamlash;",
      "Aylanuvchi yakor chulg‘amini mashinaning qo‘zg‘almas qismidagi klemmalar bilan elektr ulash;",
      "Chulg‘am seksiyalaridagi o‘zgaruvchan tokni o‘zgarmas tokka o‘zgartirish;",
      "Yakor chulg‘amiga cho‘tka qo‘yish."
    ],
    "answer": "Yakor chulg‘amining mahkamlash;"
  },
  {
    "id": 153,
    "question": "Sinxron generatorning aktiv xarakterdagi yuklamasi oshsa, chiqish klemmalaridagi kuchlanishi o‘zgarmas bo‘lishi uchun qo‘zg‘atish tokini qanday o‘zgartirish kerak?",
    "options": [
      "Oshirishda;",
      "O‘zgartirilmaydi;",
      "Kamaytirish;",
      "Javob uchun ma’lumot yetarli emas"
    ],
    "answer": "Oshirishda;"
  },
  {
    "id": 154,
    "question": "O‘zgarmas tok generatori ishlashining asosida elektrotexnikaning qanday qonuni yotadi?",
    "options": [
      "Amper qonuning;",
      "Elektromagnit induksiya qonuni;",
      "Kirxgofning 1 qonuni;",
      "Lens qoidasi."
    ],
    "answer": "Amper qonuning;"
  },
  {
    "id": 155,
    "question": "Ayon qutbli sinxron generatorning yakor chulg‘amida hosil kilinayotgan EYUK shakli sinusoidal bo‘lishi uchun uning havo oralig‘i qanday olinadi?",
    "options": [
      "Rotorda butun aylanasi bo‘ylab bir xil;",
      "Qutb uchliklari o‘rtasida katta va chetlarida kichkina;",
      "Qutb uchliklari o‘rtasida kichik va chetlarida nisbatan katta;",
      "Javob uchun ma’lumot yetarli emas."
    ],
    "answer": "Rotorda butun aylanasi bo‘ylab bir xil;"
  },
  {
    "id": 156,
    "question": "O‘zgarmas tok mashinasi yakor chulg‘ami o‘tkazgichlaridan tok o‘tganda ularga ta’sir etuvchi kuchning yo‘nalishi qaysi qoida bo‘yicha aniqlanadi?",
    "options": [
      "O‘ng qo‘lning qoidasi;",
      "Chap qo‘l qoidasi;",
      "Parma qoidasi;",
      "Amper qonuni."
    ],
    "answer": "O‘ng qo‘lning qoidasi;"
  },
  {
    "id": 157,
    "question": "Uch fazali sinxron generatorning stator chulg‘amida 3000 ayl/min chastotada aylanma magnit maydon hosil bo‘lsa, uning rotori qanday chastotada aylanadi?",
    "options": [
      "Masalaning noaniq, chunki yakor chulg‘amidagi tok chastotasi noma’lum;",
      "Masala noaniq, chunki rotor qutblari soni noma’lum;",
      "1500 ayl/min;",
      "3000 ayl/min."
    ],
    "answer": "Masalaning noaniq, chunki yakor chulg‘amidagi tok chastotasi noma’lum;"
  },
  {
    "id": 158,
    "question": "Yakor toki Ia 2 marta oshca parallel qo‘zg‘atishli o‘zgarmas tok motorining aylantiruvchi momenti qanday o‘zgaradi.?",
    "options": [
      "O‘zgarmaydi;",
      "2 marta oshadi;",
      "Aniqlab bo‘lmaydi, chunki mashina qutblari berilmagan;",
      "4 marta oshadi."
    ],
    "answer": "O‘zgarmaydi;"
  },
  {
    "id": 159,
    "question": "Ikki qutbli sinxron generatorning rotori 1500 ayl/min chastota bilan ay-lanmokda. Yakor chulg‘amida hosil qilingan asosiy EYUK ga mos vektor qanday chastota bilan aylanadi?",
    "options": [
      "50 ayl/s;",
      "100 ayl/s;",
      "75 ayl/s;",
      "1000 ayl/s."
    ],
    "answer": "50 ayl/s;"
  },
  {
    "id": 160,
    "question": "O‘zgarmas tok mashinasi yakor chulg‘ami o‘tkazgichlaridan tok o‘tganda ularga ta’sir etuvchi kuchning yo‘nalishi qaysi qoida bo‘yicha aniqlanadi?",
    "options": [
      "O‘ng qo‘lning qoidasi;",
      "Chap qo‘l qoidasi;",
      "Parma qoidasi;",
      "Amper qonuni."
    ],
    "answer": "O‘ng qo‘lning qoidasi;"
  },
  {
    "id": 161,
    "question": "Gidrogeneratorlarda (a), turbogeneratorlarda (b) qanday rotorlar qo‘llaniladi",
    "options": [
      "a) noayon qutbli, b) ayon qutbli;",
      "a) ayon qutbli, b) noayon qutbli;",
      "Rotorni tanlash generatorning quvvatiga bog‘liq;",
      "a) ayon qutbli, b) ayon qutbli."
    ],
    "answer": "a) noayon qutbli, b) ayon qutbli;"
  },
  {
    "id": 162,
    "question": "Elektr mashinaning qanday qismini stator deb ataladi?",
    "options": [
      "Mashinaning qo‘zg‘almas qismi;",
      "EYUK hosil bo‘ladigan qismi;",
      "Qo‘zg‘atish magnit oqimi hosil qilinadigan qismi;",
      "Mashinani aylanadigan qismi."
    ],
    "answer": "Mashinaning qo‘zg‘almas qismi;"
  },
  {
    "id": 163,
    "question": "Sinxron generatorning yuklama toki induktiv xarakterda bo‘lganda, uning yakor ryeaksiyasi qanday bo‘ladi?",
    "options": [
      "Ko‘ndalangda;",
      "Bo‘ylama magnitsizlovchi;",
      "Bo‘ylama magnitlovchi;",
      "Ko‘ndalang magnitlovchi."
    ],
    "answer": "Ko‘ndalangda;"
  },
  {
    "id": 164,
    "question": "O‘zgarmas tok motorining muvozanat tenglamasiga oid M – MD = M0 + M2 bo‘lsa, motorning aylanish chastotasi qanday o‘zgaradi?",
    "options": [
      "O‘zgarmaydi;",
      "Kamayadi;",
      "Aniqlab bo‘lmaydi, chunki mashina qutblari berilmagan;",
      "Oshadi."
    ],
    "answer": "O‘zgarmaydi;"
  },
  {
    "id": 165,
    "question": "Sinxron generatorning induktiv yuklamasi oshirilganda, uning chiqish klemmalarida kuchlanish qanday o‘zgaradi?",
    "options": [
      "O‘zgarmaydi;",
      "Oshadi;",
      "Kamayadi;",
      "Avvaliga oshib, keyin kamayadi"
    ],
    "answer": "O‘zgarmaydi;"
  },
  {
    "id": 166,
    "question": "O‘zgarmas tok generatori yakor chulg‘ami simlarida hosil bo‘lgan EYUK yo‘nalishi qanday qoida bo‘yicha aniqlanadi?",
    "options": [
      "O‘ng qo‘lda qoidasi;",
      "Chap qo‘l qoidasi;",
      "Parma qoidasi;",
      "Amper qonuni."
    ],
    "answer": "O‘ng qo‘lda qoidasi;"
  },
  {
    "id": 167,
    "question": "Sinxron motorning mexanik tavsifsi yuklama oshishi bilan qanday o‘zgaradi?",
    "options": [
      "Boshida oshadi;",
      "To‘g‘ri chizikli ko‘rinishda kamayadi;",
      "O‘zgarmaydi;",
      "Egri chiziqli ko‘rinishda kamayadi"
    ],
    "answer": "Boshida oshadi;"
  },
  {
    "id": 168,
    "question": "O‘zgarmas tok motorining yakor chulg‘amida EYUK kamaysa, yakor toki va elektr tarmog‘idan oladigan quvvat qanday o‘zgaradi?",
    "options": [
      "Tokda va quvvatda oshadi;",
      "Tok oshadi, quvvat kamayadi;",
      "Tok va quvvat kamayadi;",
      "Tok kamaydi, quvvat oshadi."
    ],
    "answer": "Tokda va quvvatda oshadi;"
  },
];