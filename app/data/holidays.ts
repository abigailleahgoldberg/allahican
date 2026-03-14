export interface Holiday {
  slug: string;
  name: string;
  arabicName?: string;
  description: string;
  significance: string;
  howObserved: string;
  quranRef?: string;
  quranText?: string;
  month: number; // Islamic calendar month (1-12)
  day?: number;
  duration?: number;
  color: string;
  pillar?: string; // which pillar of Islam, if applicable
}

export const holidays: Holiday[] = [
  {
    slug: "ramadan",
    name: "Ramadan",
    arabicName: "رَمَضَان",
    description:
      "The holy month of fasting — from dawn to sunset, the entire Muslim world abstains from food, drink, and ill conduct. Nights come alive with prayer, community, and the recitation of the Quran.",
    significance:
      "Ramadan is the ninth month of the Islamic calendar and the holiest month in Islam. It commemorates the first revelation of the Quran to the Prophet Muhammad (peace be upon him) through the angel Jibreel. The fast is one of the Five Pillars of Islam, obligatory for every adult Muslim who is able. Beyond physical abstention, Ramadan is a month of spiritual intensification — increased prayer, charity, Quran recitation, and community. The nightly Tarawih prayers draw Muslims together in mosques around the world. The last ten nights are considered especially blessed, culminating in Laylat al-Qadr, the Night of Power.",
    howObserved:
      "Muslims wake before dawn for Suhoor (the pre-dawn meal), then fast — no food, drink, smoking, or sexual relations — from Fajr (dawn prayer) until Maghrib (sunset prayer). The fast is broken each evening with Iftar, traditionally started with dates and water. Families and communities gather for Iftar meals. Special Tarawih prayers are offered at night, during which the entire Quran is recited over the course of the month. The month is also marked by increased charity (Zakat al-Fitr is obligatory) and spiritual reflection.",
    quranRef: "Al-Baqarah 2:185",
    quranText:
      "The month of Ramadan is the one in which the Quran was revealed as a guide for humanity, with clear proofs of guidance and the standard to distinguish right from wrong. So whoever is present this month, let them fast. But whoever is ill or on a journey, then let them fast an equal number of days after Ramadan. Allah intends ease for you, not hardship, so that you may complete the prescribed period and proclaim the greatness of Allah for guiding you, and perhaps you will be grateful.",
    month: 9,
    day: 1,
    duration: 30,
    color: "#C9A84C",
    pillar: "Sawm (Fasting) — the Fourth Pillar of Islam",
  },
  {
    slug: "eid-al-fitr",
    name: "Eid al-Fitr",
    arabicName: "عِيدُ الفِطْر",
    description:
      "The feast of breaking the fast — one of the two major Islamic holidays, celebrating the end of Ramadan with prayer, family, new clothes, gifts, and an abundance of food. You earned every bite.",
    significance:
      "Eid al-Fitr, 'the Festival of Breaking the Fast,' is one of the two most important celebrations in Islam, falling on the first day of Shawwal, the month after Ramadan. It is a day of profound gratitude to Allah for giving believers the strength to complete the fast. The celebration marks the successful completion of a month of worship and spiritual renewal. It is a communal day of joy — not individual, not private, but a collective expression of faith and belonging. Eid al-Fitr is also the occasion for Zakat al-Fitr, a mandatory charity given to the poor so that every member of the Muslim community can celebrate.",
    howObserved:
      "The day begins with the Eid prayer (Salat al-Eid), usually held outdoors or in large congregations. Muslims wear their finest clothing — new outfits are traditional, especially for children. Families exchange Eid greetings ('Eid Mubarak,' 'Eid Sa'id'), give gifts, and visit relatives. Special Eid foods vary by culture but the feasting is universal. Zakat al-Fitr must be paid before the Eid prayer. Children typically receive money (Eidi) from elders. The celebration lasts for three days.",
    quranRef: "Al-Baqarah 2:185",
    quranText:
      "Allah intends ease for you, not hardship, so that you may complete the prescribed period and proclaim the greatness of Allah for guiding you, and perhaps you will be grateful.",
    month: 10,
    day: 1,
    duration: 3,
    color: "#2D7D32",
  },
  {
    slug: "eid-al-adha",
    name: "Eid al-Adha",
    arabicName: "عِيدُ الأَضْحَى",
    description:
      "The feast of sacrifice, honoring Ibrahim's (AS) absolute devotion to Allah. Observed worldwide at the culmination of Hajj — the greatest gathering of humanity on earth.",
    significance:
      "Eid al-Adha, 'the Festival of Sacrifice,' is the greater of the two Eids, commemorating the willingness of Ibrahim (Abraham, peace be upon him) to sacrifice his son Ismail as an act of obedience to Allah. Before Ibrahim could carry out the command, Allah replaced his son with a ram, demonstrating that the act of submission — not the sacrifice itself — was what mattered. This event is the spiritual heart of Hajj, the annual pilgrimage. For Muslims not on Hajj, the sacrifice of an animal (Qurbani) and the sharing of its meat with the poor, neighbors, and family mirrors the spirit of Ibrahim's devotion and Islam's emphasis on charity and community.",
    howObserved:
      "The day begins with the Eid prayer. Those who can afford it sacrifice a halal animal (sheep, goat, cow, or camel) in an act called Qurbani. The meat is divided into three portions: one for the family, one for relatives, and one for those in need. For Muslims performing Hajj, the day includes specific rituals at Mina. Globally, it is a day of prayer, family gatherings, feasting, and giving. The celebration lasts four days.",
    quranRef: "Al-Hajj 22:37",
    quranText:
      "It is neither their meat nor their blood that reaches Allah. It is your piety that reaches Him. This is how He has subjected them to you so that you may proclaim the greatness of Allah for guiding you. And give good news to those who do good.",
    month: 12,
    day: 10,
    duration: 4,
    color: "#C9A84C",
    pillar: "Connected to Hajj — the Fifth Pillar of Islam",
  },
  {
    slug: "laylat-al-qadr",
    name: "Laylat al-Qadr",
    arabicName: "لَيْلَةُ القَدْر",
    description:
      "The Night of Power — the single most sacred night in Islam, in which the Quran was first revealed to the Prophet Muhammad (peace be upon him). Worth more than a thousand months of worship.",
    significance:
      "Laylat al-Qadr is described in the Quran as better than a thousand months of worship. It falls during the last ten nights of Ramadan, with the 27th night being the most commonly observed, though its exact date is unknown — a deliberate mystery that encourages believers to intensify worship throughout the last ten nights. It was on this night that the first verses of the Quran were revealed to the Prophet Muhammad (peace be upon him) in the Cave of Hira. The angels and the Spirit descend in abundance. Prayers made on this night are said to be answered, sins are forgiven, and destinies are written for the coming year.",
    howObserved:
      "Muslims spend the last ten nights of Ramadan in heightened prayer and devotion, often staying up all night in the mosque (I'tikaf). The Tahajjud and Tarawih prayers are offered with special intensity. The Quran is recited extensively. Believers make sincere du'a (supplication) throughout the night. The Prophet Muhammad (peace be upon him) taught a specific prayer for Laylat al-Qadr: 'Allahumma innaka 'afuwwun, tuhibbul 'afwa, fa'fu 'anni' — 'O Allah, You are pardoning, You love pardon, so pardon me.'",
    quranRef: "Al-Qadr 97:1-5",
    quranText:
      "Indeed, We sent this Quran down on the Night of Power. And what can make you know what the Night of Power is? The Night of Power is better than a thousand months. The angels and the Spirit descend in it by permission of their Lord for every matter. It is peace until the emergence of dawn.",
    month: 9,
    day: 27,
    color: "#8B6914",
  },
  {
    slug: "mawlid-al-nabi",
    name: "Mawlid al-Nabi",
    arabicName: "مَوْلِدُ النَّبِيّ",
    description:
      "The commemoration of the birth of the Prophet Muhammad (peace be upon him), marked by gatherings of praise, the recitation of poetry and nasheed, and gratitude for the mercy he brought to humanity.",
    significance:
      "Mawlid al-Nabi marks the birthday of the Prophet Muhammad (peace be upon him), traditionally observed on the 12th of Rabi al-Awwal in the Hijri calendar. The Prophet (PBUH) is the final messenger of Allah, through whom the complete guidance of Islam was delivered to humanity. His life — his character, his mercy, his justice, his devotion — is the living example of Islamic values. The observance varies across the Muslim world: some communities mark it with large public gatherings, poetry (qasidah), and recitations of the Prophet's biography (seerah); others observe it privately in reflection and gratitude. The day is an invitation to deepen one's love and knowledge of the Prophet.",
    howObserved:
      "Observances vary widely across cultures and traditions. Common practices include communal gatherings with recitations of the Prophet's biography (Seerah), the singing of nasheed and qasidah (devotional poetry), lectures on the Prophet's life and character, and increased Salawat (blessings upon the Prophet). In many parts of the Muslim world, processions are held. Food is distributed to the poor. At its core, the day is an occasion for gratitude to Allah for the blessing of the Prophet Muhammad (peace be upon him) and for renewing one's commitment to following his example.",
    quranRef: "Al-Anbiya 21:107",
    quranText:
      "And We have not sent you except as a mercy to the worlds.",
    month: 3,
    day: 12,
    color: "#2D7D32",
  },
  {
    slug: "islamic-new-year",
    name: "Islamic New Year",
    arabicName: "رَأْسُ السَّنَةِ الهِجْرِيَّة",
    description:
      "The first day of Muharram marks the beginning of the Hijri calendar year — a moment of quiet reflection on the passing of time, the journey of the soul, and the migration that changed history.",
    significance:
      "The Islamic New Year, also known as Hijri New Year or Ra's as-Sanah al-Hijriyyah, marks the first day of Muharram, the first month of the Islamic lunar calendar. The Hijri calendar dates from the Hijra — the migration of the Prophet Muhammad (peace be upon him) and his companions from Mecca to Medina in 622 CE. This migration was not just a physical journey; it was the moment when the Muslim community became established, when the first Islamic society began to take shape. The new year is therefore not merely a date change but a remembrance of sacrifice, commitment, and the founding of the ummah.",
    howObserved:
      "Islamic New Year is observed more quietly than Eid. It is a time for reflection and spiritual renewal rather than festivity. Muslims reflect on the passage of the year, renew their intentions (niyyah), make du'a for the year ahead, and remember the sacrifices of the early Muslim community. Some attend special lectures or gatherings at the mosque. Muharram is one of the four sacred months in Islam, during which sins carry greater weight and acts of worship carry greater reward.",
    quranRef: "At-Tawbah 9:36",
    quranText:
      "Indeed, the number of months ordained by Allah is twelve — in Allah's Record since the day He created the heavens and the earth — of which four are sacred. That is the Right Way, so do not wrong your souls during these months.",
    month: 1,
    day: 1,
    color: "#2D7D32",
  },
  {
    slug: "ashura",
    name: "Ashura",
    arabicName: "عَاشُورَاء",
    description:
      "The tenth day of Muharram — a sacred day of fasting, gratitude, and remembrance. The day Musa (Moses) and his people were saved from Pharaoh; observed with fasting and profound reflection.",
    significance:
      "Ashura falls on the 10th of Muharram and carries profound significance across Islamic traditions. According to the hadith of the Prophet Muhammad (peace be upon him), when he arrived in Medina and observed the Jews of Medina fasting on this day, he was told it was the day Allah saved Musa (Moses, peace be upon him) and the Children of Israel from Pharaoh. The Prophet (PBUH) said that Muslims have a greater right to observe Musa, and encouraged fasting on this day. He also recommended fasting the 9th along with the 10th to distinguish the Muslim practice. For Shia Muslims, Ashura additionally marks the martyrdom of Imam Hussein ibn Ali at Karbala in 680 CE, and is observed with mourning, processions, and remembrance.",
    howObserved:
      "Sunni Muslims mark Ashura with fasting — ideally both the 9th and 10th of Muharram (or the 10th and 11th). The fast is highly recommended (Sunnah) and expiates the sins of the previous year, according to hadith. Shia Muslims observe Ashura as a solemn day of mourning for the martyrdom of Imam Hussein at Karbala, with processions, gatherings, and the recitation of elegies. Across all traditions, the day is marked by increased prayer, Quran recitation, and remembrance of Allah.",
    quranRef: "Al-Baqarah 2:286",
    quranText:
      "Allah does not burden a soul beyond that it can bear. It will have what it has earned, and it will bear what it has brought upon itself. Our Lord, do not impose blame upon us if we forget or make an error. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people.",
    month: 1,
    day: 10,
    color: "#8B6914",
  },
  {
    slug: "hajj",
    name: "Hajj Season",
    arabicName: "الحَجّ",
    description:
      "The annual pilgrimage to Mecca — one of the Five Pillars of Islam, obligatory for every Muslim who is able. Two million people. One direction. One God. The greatest gathering on earth.",
    significance:
      "Hajj is the fifth and final pillar of Islam, obligatory once in a lifetime for every Muslim who has the physical and financial ability to perform it. It takes place during Dhul Hijjah, the twelfth month of the Islamic calendar, and the rituals span five days. Hajj traces the footsteps of Ibrahim (Abraham, peace be upon him) and his family — the building of the Kaaba, the sacrifice, Hagar's search for water that gave rise to the well of Zamzam. The pilgrimage strips away all markers of wealth, status, race, and nationality: every pilgrim wears simple white garments (Ihram), stands on the plain of Arafat together, and submits to Allah in the most literal, embodied way. It is an act of total surrender, community, and remembrance.",
    howObserved:
      "Pilgrims enter a state of Ihram (ritual purity and intention) before arriving in Mecca, wearing white seamless garments. They perform Tawaf (seven circumambulations of the Kaaba) and Sa'i (walking seven times between the hills of Safa and Marwa). The central ritual is the standing at Arafat (Wuquf) on the 9th of Dhul Hijjah — missing it means missing Hajj. Pilgrims then proceed to Muzdalifah, collect pebbles, and perform the symbolic stoning of the devil at Mina. The sacrifice of an animal (Qurbani) marks the beginning of Eid al-Adha. The pilgrimage concludes with the cutting of hair and a final Tawaf.",
    quranRef: "Al-Imran 3:97",
    quranText:
      "In it are clear signs and the standing place of Ibrahim. Whoever enters it shall be safe. Pilgrimage to this House is an obligation by Allah upon whoever is able among the people. And whoever disbelieves — then indeed, Allah is free from need of the worlds.",
    month: 12,
    day: 8,
    duration: 6,
    color: "#C9A84C",
    pillar: "Hajj (Pilgrimage) — the Fifth Pillar of Islam",
  },
];

export function getHolidayBySlug(slug: string): Holiday | undefined {
  return holidays.find((h) => h.slug === slug);
}

export function getRelatedHolidays(slug: string, count = 3): Holiday[] {
  return holidays.filter((h) => h.slug !== slug).slice(0, count);
}
