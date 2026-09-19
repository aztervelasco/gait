import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
import { LeadershipAccordion, LeaderItem } from '../components/LeadershipAccordion';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import {
  SparklesIcon,
  HeartIcon,
  BookOpenIcon,
  XIcon,
  UserIcon,
  MapPinIcon,
  LayersIcon,
  CompassIcon,
  UsersIcon,
  FlameIcon
} from 'lucide-react';

const headPastor = {
  name: 'Rev. Movel B. Velasco',
  title: 'Head Pastor & General Overseer',
  roleCategory: 'Founder & Head Pastor',
  image: '/517112793_10229821241296040_7747544348507949052_n.webp',
  church: 'GEFMI Mother Church',
  location: 'Bantinan, Santa Fe, Nueva Vizcaya',
  bio: "Pioneer and founder of GEFMI, Rev. Movel B. Velasco has dedicated his life to spreading the Gospel and establishing vibrant faith communities across Nueva Vizcaya, Nueva Ecija, Aurora, and beyond. With visionary leadership and a heart for God's people, he guides our fellowship with wisdom, pastoral excellence, and apostolic dedication.",
  message:
    '"My calling is simple: to see every person encounter the transforming love of Jesus Christ. Through faith, discipleship, and unwavering commitment to God\'s Word, we are building a movement that impacts generations to come."',
  fullBio:
    "Pioneer and founder of GEFMI, Rev. Movel B. Velasco has dedicated his life to spreading the Gospel and establishing vibrant faith communities. With unwavering vision and a heart for God's people, he leads our ministry with wisdom, compassion, and an infectious passion for Christ. Under his leadership, GEFMI has grown to an extensive network of 10 GEFMI churches and multiple affiliate fellowships across the nation.",
  story:
    "Rev. Movel B. Velasco's journey began with a divine calling to serve God's people. From humble beginnings in Bantinan, he has built a thriving ministry that touches countless lives. Through years of dedicated service, he has mentored numerous pastors, planted churches, and created an enduring legacy of faith that continues to impact communities across the Philippines.",
  specialization: 'Visionary & Apostolic Leadership'
};

// Ordained Ministers
const ordainedMinisters: LeaderItem[] = [
  {
    name: 'Rev. Vergelio Lamsis',
    title: 'Ordained Minister',
    roleCategory: 'Ordained Minister',
    church: 'Bantinan Church',
    location: 'Bantinan, Santa Fe, Nueva Vizcaya',
    image: '/561149741_122184417068449557_3419564386070091008_n.webp',
    shortBio: 'A dynamic ordained minister with a fervent passion for worship, prayer, and congregational spiritual revival.',
    fullBio: 'A dynamic leader with a passion for worship and prayer, Rev. Vergelio Lamsis leads the congregation into powerful encounters with God. His ministry ignites revival and spiritual growth throughout our churches.',
    specialization: 'Worship, Prayer & Pastoral Ministry'
  },
  {
    name: 'Rev. Rudy C. Tindaan',
    title: 'Ordained Minister',
    roleCategory: 'Ordained Minister',
    church: 'GEFMI Ministry',
    location: 'Santa Fe, Nueva Vizcaya',
    image: '/Ptr_Rudy-removebg-preview.webp',
    shortBio: 'Serving with a dedicated gift for pastoral care, counseling, and strengthening family spiritual foundations.',
    fullBio: "With a gift for pastoral care and counseling, Rev. Rudy C. Tindaan walks alongside believers in their spiritual journey. His compassionate heart and wise counsel have brought healing and guidance to many families facing life's challenges.",
    specialization: 'Pastoral Care & Counseling'
  },
  {
    name: 'Rev. Jun P. Matedio',
    title: 'Ordained Minister',
    roleCategory: 'Ordained Minister',
    church: 'Lower Kiskis Church',
    location: 'Lower Kiskis, Santa Fe, Nueva Vizcaya',
    image: '/june_matedio-removebg-preview.webp',
    shortBio: 'A passionate communicator and mentor committed to biblical discipleship, youth empowerment, and outreach.',
    fullBio: 'A gifted communicator and ordained minister, Rev. Jun P. Matedio connects with families and the next generation through relevant biblical teaching and authentic pastoral care, raising devoted disciples of Jesus Christ.',
    specialization: 'Discipleship & Community Leadership'
  }
];

// GEFMI Pastors
const gefmiPastors: LeaderItem[] = [
  {
    name: 'Pastor Jerry Nobres',
    title: 'GEFMI Pastor',
    roleCategory: 'GEFMI Pastor',
    church: 'Beti Church',
    location: 'Beti, Santa Fe, Nueva Vizcaya',
    image: '/038c6588-1445-473e-9640-378b702bbc97.webp',
    shortBio: 'Known for passionate preaching, deep love for Scripture, and faithful pastoral shepherd care.',
    fullBio: 'Known for his passionate preaching and deep love for Scripture, Pastor Jerry Nobres inspires believers to live boldly for Christ. His teaching ministry has transformed countless lives through powerful biblical exposition.',
    specialization: 'Biblical Exposition & Pastoral Care'
  },
  {
    name: 'Pastor Carlos Basilio',
    title: 'GEFMI Pastor',
    roleCategory: 'GEFMI Pastor',
    church: 'GEFMI Ministry',
    location: 'Santa Fe / Nueva Vizcaya',
    image: '/carlito.webp',
    shortBio: 'A faithful shepherd dedicated to evangelistic outreach, discipleship training, and church strengthening.',
    fullBio: 'Pastor Carlos Basilio brings steady pastoral leadership and warm fellowship, focusing on discipling believers and serving the broader mission of GEFMI.',
    specialization: 'Pastoral Ministry & Evangelism'
  },
  {
    name: 'Pastor Moris B. Velasco',
    title: 'GEFMI Pastor',
    roleCategory: 'GEFMI Pastor',
    church: 'Villaflores Church',
    location: 'Villaflores, Santa Fe, Nueva Vizcaya',
    image: '/514414300_10229639822320679_5865684077610383712_n.webp',
    shortBio: 'Carrying an evangelistic and church planting zeal, expanding God’s kingdom into new communities.',
    fullBio: "With a heart for evangelism and church planting, Pastor Moris B. Velasco is passionate about reaching the lost and nurturing new believers into mature followers of Christ.",
    specialization: 'Church Planting & Evangelism'
  }
];

// Preachers
const preachers: LeaderItem[] = [
  {
    name: 'Jezreel Matedio',
    title: 'Preacher',
    roleCategory: 'Preacher',
    church: 'GEFMI Preaching Ministry',
    location: 'Santa Fe, Nueva Vizcaya',
    image: '/jezreel-removebg-preview.webp',
    shortBio: 'With a strong devotion to biblical teaching, discipleship, and inspiring believers to walk in truth.',
    fullBio: "With a passion for biblical teaching and discipleship, Preacher Jezreel Matedio equips believers to grow in their theological foundation and apply God's Word in everyday life.",
    specialization: 'Biblical Teaching & Preaching'
  },
  {
    name: 'Ireneo Bugtong',
    title: 'Preacher',
    roleCategory: 'Preacher',
    church: 'GEFMI Preaching Ministry',
    location: 'Santa Fe, Nueva Vizcaya',
    image: '',
    shortBio: 'Proclaiming the Gospel with conviction and ministering to local congregations with humility.',
    fullBio: 'Preacher Ireneo Bugtong faithfully proclaims the message of salvation, encouraging believers and supporting local church services through impactful preaching.',
    specialization: 'Pulpit Ministry & Discipleship'
  },
  {
    name: 'Sammy Paay',
    title: 'Preacher',
    roleCategory: 'Preacher',
    church: 'GEFMI Preaching Ministry',
    location: 'Santa Fe, Nueva Vizcaya',
    image: '',
    shortBio: 'Sharing the Good News with passion, ministering in community bible studies and Sunday worship.',
    fullBio: 'Preacher Sammy Paay is a dedicated servant of God who brings uplifting biblical messages and fervent prayer to believers across our network.',
    specialization: 'Evangelism & Pastoral Preaching'
  },
  {
    name: 'Mateo Quiñones',
    title: 'Preacher',
    roleCategory: 'Preacher',
    church: 'Bantinan Church',
    location: 'Bantinan, Santa Fe, Nueva Vizcaya',
    image: '',
    shortBio: 'A devoted preacher at Bantinan Church serving the congregation with compassion and spiritual insight.',
    fullBio: 'Preacher Mateo Quiñones serves at the mother church in Bantinan, nurturing spiritual growth and delivering uplifting biblical teachings to families and youth.',
    specialization: 'Pastoral Ministry & Preaching'
  }
];

// Reconnaissance Worker (Floating)
const reconnaissanceWorkers: LeaderItem[] = [
  {
    name: 'Ptr. Orlando "Lando" Abalos',
    title: 'Reconnaissance Worker (Floating)',
    roleCategory: 'Reconnaissance Worker',
    church: 'GEFMI Field Reconnaissance',
    location: 'Regional Mission Fields',
    image: '/d91ddbe4-386e-4fe9-8532-0eda1500ba62-removebg-preview.webp',
    shortBio: 'Pioneering reconnaissance field worker surveying new mission opportunities and planting seeds of the Gospel.',
    fullBio: 'Pastor Orlando "Lando" Abalos serves as GEFMI’s Reconnaissance Worker (Floating), scouting new territories, connecting with outlying communities, and facilitating church planting breakthroughs.',
    specialization: 'Field Reconnaissance & Pioneer Missions'
  }
];

// Lady Missionary Workers
const ladyMissionaries: LeaderItem[] = [
  {
    name: 'Violeta "Violy" Hungduan',
    title: 'Lady Missionary Worker',
    roleCategory: 'Lady Missionary Worker',
    church: 'GEFMI Missionary Outreach',
    location: 'Santa Fe / Nueva Vizcaya',
    image: '/993a5d67-5ca6-450a-b02b-f06f17f064d0-removebg-preview.webp',
    shortBio: 'A compassionate missionary empowering women and families through prayer, counseling, and home ministry.',
    fullBio: "A compassionate missionary leader with a deep heart for family discipleship and women's fellowship, Sister Violy empowers women to embrace their divine calling in Christ.",
    specialization: "Women's & Family Missions"
  },
  {
    name: 'Mia M. Tindaan',
    title: 'Lady Missionary Worker',
    roleCategory: 'Lady Missionary Worker',
    church: 'GEFMI Missionary Outreach',
    location: 'Santa Fe / Nueva Vizcaya',
    image: '/mia.webp',
    shortBio: 'Dedicated missionary servant nurturing children, youth, and women in spiritual maturity and prayer.',
    fullBio: 'Sister Mia M. Tindaan brings wisdom and gentleness to missionary work, conducting community bible studies, Sunday school leadership, and compassionate home visits.',
    specialization: 'Community Outreach & Mentorship'
  },
  {
    name: 'Maxima Anton',
    title: 'Lady Missionary Worker',
    roleCategory: 'Lady Missionary Worker',
    church: 'GEFMI Missionary Outreach',
    location: 'Carranglan / Nueva Ecija',
    image: '',
    shortBio: 'Faithful missionary sharing God’s love in provincial mission fields through compassionate service.',
    fullBio: 'Sister Maxima Anton is an active missionary worker supporting provincial fellowships, discipling women, and ministering to families in remote barangays.',
    specialization: 'Provincial Mission Ministry'
  }
];

// GEFMI Youth Leaders
const youthLeaders: LeaderItem[] = [
  {
    name: 'Nathan Velasco',
    title: 'GEFMI Youth Leader',
    roleCategory: 'GEFMI Youth Leader',
    church: 'GEFMI Youth Movement',
    location: 'Santa Fe / Central',
    image: '',
    shortBio: 'Inspiring young people to passionately pursue Christ and discover their kingdom purpose.',
    fullBio: 'Nathan Velasco leads youth initiatives with visionary enthusiasm, organizing youth fellowships, praise events, and campus discipleship.',
    specialization: 'Youth Leadership & Music Ministry'
  },
  {
    name: 'Roves Abalos',
    title: 'GEFMI Youth Leader',
    roleCategory: 'GEFMI Youth Leader',
    church: "Orchid's Church / Youth Fellowship",
    location: 'Orchids, Santa Fe, Nueva Vizcaya',
    image: '/521953240_122169464594567446_7082549070398521511_n.webp',
    shortBio: 'Dedicated to equipping the next generation with practical biblical principles and leadership skills.',
    fullBio: 'Roves Abalos combines biblical truth with practical mentorship, helping youth discover their God-given gifts through intentional discipleship.',
    specialization: 'Next-Gen Mentorship'
  },
  {
    name: 'Arcela Tindaan',
    title: 'GEFMI Youth Leader',
    roleCategory: 'GEFMI Youth Leader',
    church: 'GEFMI Youth Movement',
    location: 'Santa Fe, Nueva Vizcaya',
    image: '',
    shortBio: 'Fostering vibrant youth fellowship, creative worship, and young ladies’ discipleship.',
    fullBio: 'Arcela Tindaan serves faithfully in youth ministry, guiding young women in godliness, prayer, and church involvement.',
    specialization: 'Youth Fellowship & Discipleship'
  },
  {
    name: 'Zizzaly',
    title: 'GEFMI Youth Leader',
    roleCategory: 'GEFMI Youth Leader',
    church: 'GEFMI Youth Movement',
    location: 'Santa Fe, Nueva Vizcaya',
    image: '',
    shortBio: 'Passionate about worship, youth engagement, and active community outreach.',
    fullBio: 'Zizzaly is an energetic youth leader who inspires peers to live consecrated lives and serve in their local churches.',
    specialization: 'Youth Engagement'
  },
  {
    name: 'Mirocel Paay',
    title: 'GEFMI Youth Leader',
    roleCategory: 'GEFMI Youth Leader',
    church: 'GEFMI Youth Movement',
    location: 'Santa Fe, Nueva Vizcaya',
    image: '',
    shortBio: 'Leading youth worship and mentoring teenagers to walk steadfastly in faith.',
    fullBio: 'Mirocel Paay coordinates youth activities, encouraging teens to build strong relationships grounded in the love of Jesus.',
    specialization: 'Youth Discipleship'
  },
  {
    name: 'Maja Lea',
    title: 'GEFMI Youth Leader',
    roleCategory: 'GEFMI Youth Leader',
    church: 'GEFMI Youth Movement',
    location: 'Santa Fe, Nueva Vizcaya',
    image: '',
    shortBio: 'Active in creative ministry, youth bible study, and fellowship coordination.',
    fullBio: 'Maja Lea brings passion and creativity to GEFMI Youth, helping cultivate welcoming environments for youth to encounter God.',
    specialization: 'Creative Ministries'
  },
  {
    name: 'Beverly Lamsis',
    title: 'GEFMI Youth Leader',
    roleCategory: 'GEFMI Youth Leader',
    church: 'Bantinan Youth Fellowship',
    location: 'Bantinan, Santa Fe, Nueva Vizcaya',
    image: '',
    shortBio: 'Devoted to youth worship, prayer meetings, and uplifting fellowship in Bantinan.',
    fullBio: 'Beverly Lamsis serves at Bantinan Church, inspiring young believers to worship passionately and step boldly into their callings.',
    specialization: 'Youth Worship & Outreach'
  }
];

// Affiliate Pastors & Ministers
const affiliatePastors: LeaderItem[] = [
  {
    name: 'Rev. Luisito S. Silan',
    title: 'Affiliate Pastor',
    roleCategory: 'Affiliate Pastor',
    church: 'LHGCF Manicla Church',
    location: 'Manicla, San Jose City, Nueva Ecija',
    image: '/496941650_9986446918087623_5321505900457071114_n.webp',
    shortBio: 'Faithful shepherd leading LHGCF Manicla Church in discipleship, evangelism, and community transformation.',
    fullBio: 'Rev. Luisito S. Silan leads LHGCF Manicla Church in San Jose City, Nueva Ecija, building strong Christian families and mentoring faithful believers.',
    specialization: 'Affiliate Pastoral Leadership'
  },
  {
    name: 'Ptr. Nora D. Silan',
    title: 'Affiliate Pastor',
    roleCategory: 'Affiliate Pastor',
    church: 'LHGCF Putlan Church',
    location: 'Putlan, Carranglan, Nueva Ecija',
    image: '',
    shortBio: 'Serving with dedication and grace at Putlan Church in Carranglan, Nueva Ecija.',
    fullBio: 'Pastor Nora D. Silan ministers to the flock in Putlan, Carranglan, creating a loving spiritual home and raising up godly disciples.',
    specialization: 'Pastoral Care & Discipleship'
  },
  {
    name: 'Madam Roselyn Basilio',
    title: 'Affiliate Pastor',
    roleCategory: 'Affiliate Pastor',
    church: 'LHGCF Ika-pito Church',
    location: 'Ika-pito, Putlan, Carranglan, Nueva Ecija',
    image: '/272048676_481309780287901_5755746467562633499_n-Picsart-AiImageEnhancer.webp',
    shortBio: 'Leading with spiritual fervor and prayer in Ika-pito, Carranglan, Nueva Ecija.',
    fullBio: 'Madam Roselyn Basilio serves faithfully in Ika-pito, Putlan, Carranglan, ministering through prayer, discipleship, and community engagement.',
    specialization: 'Community Discipleship'
  },
  {
    name: 'Rev. Leonard Clemens L. Cadoy',
    title: 'Affiliate Pastor',
    roleCategory: 'Affiliate Pastor',
    church: 'LHGCF Bambang Church',
    location: 'Bambang, Nueva Vizcaya',
    image: '/497733291_9986444718087843_9208305502871839500_n.webp',
    shortBio: 'Leading LHGCF Bambang Church with a focus on preaching grace and building authentic Christian community.',
    fullBio: 'Rev. Leonard Clemens L. Cadoy ministers in Bambang, Nueva Vizcaya, bringing the transforming message of God’s grace to families and youth.',
    specialization: 'Preaching & Pastoral Ministry'
  },
  {
    name: 'Rev. Junie M. Balwang',
    title: 'Senior Pastor',
    roleCategory: 'Affiliate Pastor',
    church: 'Ammoweg Eternal Life Fellowship Church',
    location: 'Ammoweg, Ambaguio, Nueva Vizcaya',
    image: '/480975052_950039643993852_6543480930474798010_n.webp',
    shortBio: 'Senior Pastor of Eternal Life Fellowship in Ammoweg, Ambaguio, proclaiming the Gospel of life.',
    fullBio: 'Rev. Junie M. Balwang leads the Eternal Life Fellowship congregation in Ammoweg, Ambaguio, establishing strong spiritual roots and vibrant worship.',
    specialization: 'Pastoral Leadership'
  },
  {
    name: 'Pastor Solomon W. Balwang',
    title: 'Associate Pastor',
    roleCategory: 'Affiliate Pastor',
    church: 'Ammoweg Eternal Life Fellowship Church',
    location: 'Ammoweg, Ambaguio, Nueva Vizcaya',
    image: '/480033865_950497310608841_5157391532199260184_n.webp',
    shortBio: 'Associate Pastor assisting in pastoral leadership and discipleship at Ammoweg Eternal Life Fellowship.',
    fullBio: 'Pastor Solomon W. Balwang faithfully serves alongside senior leadership in Ammoweg, discipling youth and strengthening family ministries.',
    specialization: 'Associate Pastoral Ministry'
  },
  {
    name: 'Pastor Lito Baguiwan',
    title: 'Pastor',
    roleCategory: 'Affiliate Pastor',
    church: 'Taaw Eternal Life Fellowship Church',
    location: 'Taaw, Ambaguio, Nueva Vizcaya',
    image: '',
    shortBio: 'Pastor of Taaw Eternal Life Fellowship, bringing the light of Christ to the mountain community of Taaw.',
    fullBio: 'Pastor Lito Baguiwan shepherds the Taaw Eternal Life Fellowship in Ambaguio, dedicated to village outreach, prayer, and pastoral care.',
    specialization: 'Rural & Village Missions'
  },
  {
    name: 'Pastor Jerry Litawen',
    title: 'Pastor',
    roleCategory: 'Affiliate Pastor',
    church: 'Psalms 23 Fellowship Church',
    location: 'San Antonio, Bambang, Nueva Vizcaya',
    image: '/516406366_10229806109237748_6995946554747989513_n.webp',
    shortBio: 'Pastor of Psalms 23 Fellowship in San Antonio, Bambang, shepherding believers with the love of Christ.',
    fullBio: 'Pastor Jerry Litawen leads Psalms 23 Fellowship Church in San Antonio, Bambang, fostering deep spiritual growth and community care.',
    specialization: 'Shepherd Pastoral Ministry'
  },
  {
    name: 'Pastor Zeny B. Litawen',
    title: 'Pastor',
    roleCategory: 'Affiliate Pastor',
    church: 'Psalms 23 Fellowship Church',
    location: 'San Antonio, Bambang, Nueva Vizcaya',
    image: '/513878149_10017784441610134_1432304304820809657_n.webp',
    shortBio: 'Co-pastor at Psalms 23 Fellowship Church, ministering with warmth and passionate prayer.',
    fullBio: 'Pastor Zeny B. Litawen ministers in San Antonio, Bambang, building up families and leading women’s and prayer ministries with dedication.',
    specialization: 'Pastoral Care & Prayer'
  },
  {
    name: 'Associate Pastor Gina S. Espiritu',
    title: 'Associate Pastor',
    roleCategory: 'Affiliate Pastor',
    church: 'Psalms 23 Fellowship Church',
    location: 'San Antonio, Bambang, Nueva Vizcaya',
    image: '/534256705_122121319898931963_7528005705236173993_n.webp',
    shortBio: 'Associate Pastor at Psalms 23 Fellowship, serving in community connections and spiritual mentoring.',
    fullBio: 'Associate Pastor Gina S. Espiritu creates welcoming spaces for believers to connect authentically and grow together in faith at Psalms 23 Fellowship.',
    specialization: 'Associate Pastoral Care'
  },
  {
    name: 'Pastor Maxima G. Anton',
    title: 'Pastor',
    roleCategory: 'Affiliate Pastor',
    church: 'The Living Hope Fellowship Salazar',
    location: 'Salazar, Carranglan, Nueva Ecija',
    image: '',
    shortBio: 'Pastor of The Living Hope Fellowship in Salazar, Carranglan, leading community evangelism.',
    fullBio: 'Pastor Maxima G. Anton ministers in Salazar, Carranglan, bringing hope and godly leadership to the local fellowship.',
    specialization: 'Pastoral Leadership'
  },
  {
    name: 'Sis. Mylene J. Padone',
    title: 'Associate Worker',
    roleCategory: 'Affiliate Pastor',
    church: 'The Living Hope Fellowship Salazar',
    location: 'Salazar, Carranglan, Nueva Ecija',
    image: '',
    shortBio: 'Associate worker assisting in children, youth, and family ministry in Salazar, Carranglan.',
    fullBio: 'Sister Mylene J. Padone faithfully serves at The Living Hope Fellowship in Salazar, assisting pastoral work and teaching Sunday school.',
    specialization: 'Associate Ministry Work'
  },
  {
    name: 'Rev. Sonny Boy B. Jacob',
    title: 'Senior Pastor',
    roleCategory: 'Affiliate Pastor',
    church: 'Toytoyan The Church of the Living Christ',
    location: 'Toytoyan, Dipaculao, Aurora',
    image: '/516853943_10229874176339383_741894806820482945_n-removebg-preview.webp',
    shortBio: 'Senior Pastor of Toytoyan The Church of the Living Christ in Aurora province.',
    fullBio: 'Rev. Sonny Boy B. Jacob leads The Church of the Living Christ in Toytoyan and Calaocan, Dipaculao, Aurora with dynamic evangelism and biblical preaching.',
    specialization: 'Church Leadership & Evangelism'
  },
  {
    name: 'Associate Pastor Merly S. Jacob',
    title: 'Associate Pastor',
    roleCategory: 'Affiliate Pastor',
    church: 'Toytoyan The Church of the Living Christ',
    location: 'Toytoyan, Dipaculao, Aurora',
    image: '',
    shortBio: 'Associate Pastor at Toytoyan The Church of the Living Christ, ministering to families and women.',
    fullBio: 'Associate Pastor Merly S. Jacob serves in Dipaculao, Aurora, discipling women and nurturing spiritual growth across the church family.',
    specialization: 'Associate Pastoral Ministry'
  },
  {
    name: 'Rev. Teodoro Garlit Sr.',
    title: 'Pastor',
    roleCategory: 'Affiliate Pastor',
    church: 'The United Christian Mission Church',
    location: 'Borlongan, Dipaculao, Aurora',
    image: '/teodoro1.webp',
    shortBio: 'Pastor of The United Christian Mission Church in Borlongan, Dipaculao, Aurora.',
    fullBio: 'Rev. Teodoro Garlit Sr. is a veteran minister preaching the Gospel of salvation in Borlongan, Dipaculao, Aurora, and transforming local communities.',
    specialization: 'Missions & Pastoral Care'
  },
  {
    name: 'Rev. Joseph Soridor',
    title: 'Pastor',
    roleCategory: 'Affiliate Pastor',
    church: 'Christ The Lord Fellowship',
    location: 'Dikaluyungan, Baler, Aurora',
    image: '/577605319_122218167392101611_366158039041198078_n.webp',
    shortBio: 'Pastor of Christ The Lord Fellowship in Dikaluyungan, Baler, Aurora.',
    fullBio: 'Rev. Joseph Soridor leads Christ The Lord Fellowship in Dikaluyungan, Baler, Aurora, dedicated to reaching youth and establishing godly foundations.',
    specialization: 'Pastoral Leadership & Outreach'
  }
];

const allGefmiLeaders: LeaderItem[] = [
  ...ordainedMinisters,
  ...gefmiPastors,
  ...preachers,
  ...reconnaissanceWorkers,
  ...ladyMissionaries,
  ...youthLeaders
];

export function OurPastorsPage() {
  useSmoothScroll({
    lerp: 0.15,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1.3,
    damping: 0.88
  });

  const [selectedLeader, setSelectedLeader] = useState<LeaderItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<
    'all' | 'ordained' | 'pastors' | 'preachers' | 'recon' | 'missionaries' | 'youth' | 'affiliate'
  >('all');

  const categories = [
    { id: 'all', label: 'All GEFMI Leaders', count: allGefmiLeaders.length },
    { id: 'ordained', label: 'Ordained Ministers', count: ordainedMinisters.length },
    { id: 'pastors', label: 'GEFMI Pastors', count: gefmiPastors.length },
    { id: 'preachers', label: 'Preachers', count: preachers.length },
    { id: 'recon', label: 'Reconnaissance Worker', count: reconnaissanceWorkers.length },
    { id: 'missionaries', label: 'Lady Missionaries', count: ladyMissionaries.length },
    { id: 'youth', label: 'Youth Leaders', count: youthLeaders.length },
    { id: 'affiliate', label: 'Affiliate Ministers', count: affiliatePastors.length }
  ];

  const getFilteredItems = (): LeaderItem[] => {
    switch (activeCategory) {
      case 'ordained':
        return ordainedMinisters;
      case 'pastors':
        return gefmiPastors;
      case 'preachers':
        return preachers;
      case 'recon':
        return reconnaissanceWorkers;
      case 'missionaries':
        return ladyMissionaries;
      case 'youth':
        return youthLeaders;
      case 'affiliate':
        return affiliatePastors;
      case 'all':
      default:
        return allGefmiLeaders;
    }
  };

  const filteredLeaders = getFilteredItems();

  // Split into chunks of 4 or 5 for optimal accordion rendering
  const chunkArray = (arr: LeaderItem[], size: number) => {
    const results: LeaderItem[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      results.push(arr.slice(i, i + size));
    }
    return results;
  };

  const leaderChunks = chunkArray(filteredLeaders, 4);

  return (
    <div className="w-full min-h-screen bg-dark-premium text-slate-100 overflow-x-hidden selection:bg-emerald-500/30">
      <Navbar />
      <BackButton to="/about" label="Back to About" />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 md:px-12 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-purple-600 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[160px] animate-pulse" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <SparklesIcon className="w-4 h-4 text-amber-300" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-slate-300">
              GEFMI Pastoral & Ministry Leadership
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight font-display"
          >
            Our Shepherds &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400">
              Servants of God
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Meet the ordained ministers, pastors, preachers, missionaries, and youth leaders dedicated to proclaiming the Gospel and shepherding God's flock with passion and integrity.
          </motion.p>
        </div>
      </section>

      {/* Founder & Head Pastor Spotlight */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-slate-900/40 relative">
        <div className="max-w-6xl mx-auto">
          <div className="relative p-6 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/15 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Photo */}
              <div className="lg:col-span-5 relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[30px] blur-xl opacity-40 group-hover:opacity-60 transition duration-700" />
                <div className="relative rounded-[26px] overflow-hidden aspect-[3/4] bg-slate-900 border border-white/20 shadow-2xl">
                  <img
                    src={headPastor.image}
                    alt={headPastor.name}
                    className="w-full h-full object-cover object-[center_12%] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/80 text-slate-950 shadow">
                      <SparklesIcon className="w-3.5 h-3.5" />
                      Founder & General Overseer
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs sm:text-sm font-semibold">
                  <UserIcon className="w-4 h-4" />
                  <span>General Overseer of GEFMI</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-display">
                  {headPastor.name}
                </h2>

                <p className="text-sm sm:text-base text-emerald-400 font-semibold tracking-wide">
                  {headPastor.title} • {headPastor.church}
                </p>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                  {headPastor.bio}
                </p>

                <blockquote className="p-4 rounded-2xl bg-white/[0.04] border-l-4 border-amber-400 text-slate-200 text-sm sm:text-base italic">
                  {headPastor.message}
                </blockquote>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedLeader(headPastor as LeaderItem)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-sm sm:text-base shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <BookOpenIcon className="w-4 h-4" />
                    <span>Read Full Ministry Story</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Directory Section with Image Accordion */}
      <section className="py-20 px-4 sm:px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full inline-block">
              GEFMI Ministry Directory
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-display">
              Leadership & Ministry Workers
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Hover over any leader to expand their profile card and explore their pastoral background.
            </p>
          </div>

          {/* Category Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 border ${
                  activeCategory === tab.id
                    ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-lg shadow-emerald-500/20 scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/10'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    activeCategory === tab.id ? 'bg-slate-950 text-emerald-300' : 'bg-white/10 text-slate-400'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Leadership Accordion Groups */}
          <div className="space-y-8 pt-4">
            {leaderChunks.map((chunk, idx) => (
              <LeadershipAccordion
                key={`chunk-${idx}-${activeCategory}`}
                items={chunk}
                onSelectLeader={(leader) => setSelectedLeader(leader)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Leader Bio Modal */}
      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedLeader(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-white/20 p-6 sm:p-8 shadow-2xl text-left space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Close"
              >
                <XIcon className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-800 flex-shrink-0 border border-white/15">
                  {selectedLeader.image ? (
                    <img
                      src={selectedLeader.image}
                      alt={selectedLeader.name}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/5 text-slate-400 font-bold text-2xl">
                      {selectedLeader.name.slice(0, 2)}
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {selectedLeader.roleCategory}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {selectedLeader.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-400 font-medium">
                    {selectedLeader.title}
                  </p>
                  {selectedLeader.church && (
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPinIcon className="w-3.5 h-3.5 text-teal-400" />
                      <span>{selectedLeader.church}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Bio Content */}
              <div className="space-y-4 pt-2 border-t border-white/10">
                <div>
                  <h4 className="text-sm font-bold uppercase text-slate-400 tracking-wider mb-1">
                    Ministry Profile
                  </h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {selectedLeader.fullBio || selectedLeader.shortBio || selectedLeader.bio}
                  </p>
                </div>

                {selectedLeader.story && (
                  <div>
                    <h4 className="text-sm font-bold uppercase text-slate-400 tracking-wider mb-1">
                      Journey of Faith
                    </h4>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {selectedLeader.story}
                    </p>
                  </div>
                )}

                {selectedLeader.specialization && (
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                    <SparklesIcon className="w-4 h-4 text-amber-300 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-300">
                      <strong>Focus Area:</strong> {selectedLeader.specialization}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}