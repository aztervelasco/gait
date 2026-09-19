import React, { useCallback, useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import {
  SparklesIcon,
  HeartIcon,
  BookOpenIcon,
  XIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon } from
'lucide-react';
const headPastor = {
  name: 'Rev. Movel B. Velasco',
  title: 'Head Pastor & Founder',
  image: "/517112793_10229821241296040_7747544348507949052_n.webp",

  bio: "Pioneer and founder of GEFMI, Rev. Movel B. Velasco has dedicated his life to spreading the Gospel and establishing vibrant faith communities. With unwavering vision and a heart for God's people, he leads our ministry with wisdom, compassion, and an infectious passion for Christ. Under his leadership, GEFMI has grown from a small gathering to a thriving network of churches touching lives across communities and nations.",
  message:
  '"My calling is simple: to see every person encounter the transforming love of Jesus Christ. Through faith, service, and unwavering commitment to God\'s Word, we are building a movement that will impact generations to come."',
  fullBio:
  "Pioneer and founder of GEFMI, Rev. Movel B. Velasco has dedicated his life to spreading the Gospel and establishing vibrant faith communities. With unwavering vision and a heart for God's people, he leads our ministry with wisdom, compassion, and an infectious passion for Christ. Under his leadership, GEFMI has grown from a small gathering to a thriving network of churches touching lives across communities and nations.",
  story:
  "[Placeholder] Rev. Movel B. Velasco's journey began with a divine calling to serve God's people. From humble beginnings, he has built a thriving ministry that spans multiple churches and touches countless lives. His visionary leadership and unwavering faith have been instrumental in establishing GEFMI as a beacon of hope and transformation. Through years of dedicated service, he has mentored numerous pastors, planted churches, and created a lasting legacy of faith that continues to impact communities across the region. His commitment to excellence in ministry and his passion for seeing lives transformed by the Gospel have made him a respected leader in the evangelical community.",
  specialization: 'Visionary Leadership'
};
const pastors = [
{
  name: 'Ptr. Lando Abalos',
  title: 'Pastor of Kasibu Church',
  church: 'Kasibu Church',
  image: "/d91ddbe4-386e-4fe9-8532-0eda1500ba62-removebg-preview.webp",

  shortBio:
  'A devoted servant of God with a heart for community outreach and discipleship.',
  fullBio:
  'A devoted servant of God with a heart for community outreach and discipleship. Pastor Lando brings warmth, wisdom, and practical teaching that helps believers grow in their faith journey. His dedication to serving the community has made a lasting impact on countless lives.',
  specialization: 'Community Outreach',
  story:
  "[Placeholder] Pastor Lando's journey began in humble circumstances, where he discovered his calling to serve God's people. His dedication to community outreach has transformed countless lives, bringing hope and practical support to those in need. Through his ministry, he has established numerous outreach programs that continue to impact communities today. His compassionate approach and servant leadership have made him a beloved figure in the community, always ready to lend a helping hand and share the love of Christ."
},
{
  name: 'Ptr. Jerry Nobres',
  title: 'Pastor of Beti Church',
  church: 'Beti Church',
  image: "/038c6588-1445-473e-9640-378b702bbc97.webp",

  shortBio: 'Known for his passionate preaching and deep love for Scripture.',
  fullBio:
  'Known for his passionate preaching and deep love for Scripture, Pastor Jerry inspires believers to live boldly for Christ. His teaching ministry has transformed countless lives through powerful biblical exposition and practical application.',
  specialization: 'Teaching Ministry',
  story:
  "[Placeholder] With a profound love for God's Word, Pastor Jerry has dedicated his life to teaching and preaching the Gospel. His dynamic teaching style and deep biblical insights have inspired generations of believers to pursue a deeper relationship with Christ. His ministry continues to equip and empower the church for effective service. Through his expository preaching and commitment to sound doctrine, he has helped countless believers develop a solid foundation in their faith."
},
{
  name: 'Ptr. Rudy Tindaan',
  title: 'Pastor of Atbu Church',
  church: 'Atbu Church',
  image: "/Ptr_Rudy-removebg-preview.webp",

  shortBio: 'With a gift for pastoral care and counseling.',
  fullBio:
  "With a gift for pastoral care and counseling, Pastor Rudy walks alongside believers in their spiritual journey. His compassionate heart and wise counsel have brought healing and hope to many families and individuals facing life's challenges.",
  specialization: 'Pastoral Care',
  story:
  "[Placeholder] Pastor Rudy's compassionate heart and gift for pastoral care have made him a trusted counselor and spiritual guide. His ministry of healing and restoration has brought hope to countless individuals and families facing life's challenges. Through his gentle wisdom and unwavering support, many have found renewed strength and purpose in their faith journey. His ability to listen with empathy and provide biblical guidance has helped numerous believers navigate difficult seasons with grace and hope."
},
{
  name: 'Ptr. Moris Velasco',
  title: 'Pastor of Villaflores Church',
  church: 'Villaflores Church',
  image: "/514414300_10229639822320679_5865684077610383712_n.webp",

  shortBio: 'With a heart for evangelism and church planting.',
  fullBio:
  "With a heart for evangelism and church planting, Pastor Moris is passionate about reaching the lost and establishing new congregations. His pioneering spirit continues to expand God's Kingdom into new territories and unreached communities.",
  specialization: 'Church Planting',
  story:
  '[Placeholder] Pastor Moris carries a pioneering spirit that has led to the establishment of multiple thriving congregations. His evangelistic zeal and strategic vision for church planting have expanded the reach of the Gospel to unreached communities. Through his leadership, new churches continue to be planted, bringing transformation to entire regions. His ability to cast vision and mobilize teams has resulted in a multiplication movement that continues to grow and impact lives.'
},
{
  name: 'Ptr. Vergilio Lamsis',
  title: 'Pastor of Bantinan Church',
  church: 'Bantinan Church',
  image: "/561149741_122184417068449557_3419564386070091008_n.webp",

  shortBio: 'A dynamic leader with a passion for worship and prayer.',
  fullBio:
  'A dynamic leader with a passion for worship and prayer, Pastor Vergilio leads our congregation into powerful encounters with God. His ministry has ignited revival and spiritual awakening throughout our churches and beyond.',
  specialization: 'Worship & Prayer',
  story:
  "[Placeholder] Pastor Vergilio's passion for worship and prayer has transformed the spiritual atmosphere of our church. His leadership in worship has led countless believers into deeper encounters with God's presence. Through his ministry, revival fires have been ignited, and many have experienced powerful spiritual breakthroughs and renewed devotion to Christ. His commitment to creating an atmosphere of authentic worship has helped believers experience the manifest presence of God in transformative ways."
},
{
  name: 'Ptr. Mateo Quinones',
  title: 'Pastor of Bantinan Church',
  church: 'Bantinan Church',
  image: '',
  shortBio: 'A dedicated servant with a heart for pastoral ministry.',
  fullBio:
  'A dedicated servant with a heart for pastoral ministry, Pastor Mateo serves the Bantinan community with compassion and wisdom. His ministry focuses on building strong relationships and nurturing spiritual growth among believers.',
  specialization: 'Pastoral Ministry',
  story:
  "[Placeholder] Pastor Mateo's journey in ministry has been marked by his dedication to serving God's people with compassion and wisdom. His heart for pastoral care and community building has helped many believers grow in their faith and discover their purpose in Christ."
},
{
  name: 'Ptr. Roves Abalos',
  title: "Pastor of Orchid's Church",
  church: "Orchid's Church",
  image: "/521953240_122169464594567446_7082549070398521511_n.webp",

  shortBio: 'Dedicated to equipping the next generation.',
  fullBio:
  'Dedicated to equipping the next generation, Pastor Roves combines biblical truth with practical application. His ministry empowers believers to discover and fulfill their God-given purpose through intentional discipleship and leadership development.',
  specialization: 'Leadership Development',
  story:
  '[Placeholder] Pastor Roves has a unique gift for identifying and developing emerging leaders. His mentorship has shaped numerous young ministers who are now serving effectively in various capacities. Through his practical teaching and hands-on training, he has equipped believers to step into their God-given calling with confidence and competence. His investment in the next generation continues to bear fruit as his disciples multiply and impact communities around the world.'
},
{
  name: 'Ptr. June Matedio',
  title: 'Pastor of Lower Kiskis Church',
  church: 'Lower Kiskis Church',
  image: "/june_matedio-removebg-preview.webp",

  shortBio: 'A gifted communicator with a heart for youth ministry.',
  fullBio:
  'A gifted communicator with a heart for youth ministry, Pastor June connects with the next generation through relevant teaching and authentic relationships. His ministry inspires young people to pursue Christ passionately and live out their faith with boldness and conviction.',
  specialization: 'Youth Ministry',
  story:
  "[Placeholder] Pastor June's dynamic approach to youth ministry has revolutionized how young people engage with their faith. His ability to communicate biblical truth in relevant, compelling ways has drawn countless youth into a vibrant relationship with Christ. Through his ministry, a new generation of passionate believers is rising up to impact their world for the Kingdom. His authentic leadership and genuine care for young people have created a thriving youth community where teenagers encounter God and discover their purpose."
},
{
  name: 'Ptr. Tanacio Tindaan',
  title: 'Pastor of Upper Kiskis Church',
  church: 'Upper Kiskis Church',
  image: "/tanacio1.webp",

  shortBio:
  'A faithful servant with a heart for ministry and spiritual growth.',
  fullBio:
  'A faithful servant with a heart for ministry and spiritual growth, Pastor Tanacio serves the Upper Kiskis community with dedication and compassion. His ministry focuses on nurturing believers and helping them discover their purpose in Christ.',
  specialization: 'Pastoral Ministry',
  story:
  "[Placeholder] Pastor Tanacio's journey in ministry has been marked by his dedication to serving God's people with faithfulness and compassion. His heart for spiritual growth and community building has helped many believers deepen their relationship with Christ."
},
{
  name: 'Ptra. Violeta Hungduan',
  title: 'Associate Pastor',
  image: "/993a5d67-5ca6-450a-b02b-f06f17f064d0-removebg-preview.webp",

  shortBio: "A compassionate leader with a heart for women's ministry.",
  fullBio:
  "A compassionate leader with a heart for women's ministry and family discipleship, Pastor Violeta empowers women to embrace their calling in Christ. Her ministry brings healing, restoration, and spiritual growth to families through biblical teaching and mentorship.",
  specialization: "Women's Ministry",
  story:
  "[Placeholder] Pastor Violeta has dedicated her ministry to empowering women and strengthening families through biblical discipleship. Her compassionate approach and practical wisdom have helped countless women discover their identity in Christ and embrace their God-given purpose. Through her leadership, women's ministry has flourished, creating a supportive community where women grow in faith, develop their gifts, and impact their families and communities for Christ. Her mentorship has raised up a generation of godly women leaders."
},
{
  name: 'Ptr. Jezreel Matedio',
  title: 'Pastor of Atbu Church',
  church: 'Atbu Church',
  image: "/jezreel-removebg-preview.webp",

  shortBio: 'With a passion for biblical teaching and discipleship.',
  fullBio:
  "With a passion for biblical teaching and discipleship, Pastor Jezreel equips believers to grow in their understanding of Scripture. His systematic approach to teaching helps believers develop a solid theological foundation and apply God's Word to daily life.",
  specialization: 'Biblical Teaching',
  story:
  "[Placeholder] Pastor Jezreel's commitment to sound biblical teaching has strengthened the theological foundation of our church. His systematic approach to Scripture and emphasis on discipleship have equipped believers to understand and apply God's Word effectively. Through his teaching ministry, many have developed a deeper love for Scripture and a more mature faith. His dedication to raising up biblically literate believers has created a culture of continuous learning and spiritual growth."
},
{
  name: 'Ptra. Mia Tindaan',
  title: 'Pastor of Atbu Church',
  church: 'Atbu Church',
  image: "/mia.webp",

  shortBio:
  'A dedicated servant with a heart for ministry and spiritual growth.',
  fullBio:
  'A dedicated servant with a heart for ministry and spiritual growth, Pastor Mia brings compassion and wisdom to her calling. Her ministry focuses on nurturing believers and helping them discover their purpose in Christ.',
  specialization: 'Spiritual Growth',
  story:
  "[Placeholder] Pastor Mia's journey in ministry has been marked by her dedication to serving God's people with compassion and wisdom. Her heart for spiritual growth and discipleship has helped many believers deepen their relationship with Christ and discover their calling."
}];

const fellowshipPastors = [
{
  name: 'Ptr. Leonard Clemens Cadoy',
  title: 'Affiliates Pastor',
  image: "/497733291_9986444718087843_9208305502871839500_n.webp",

  specialization: 'Affiliates Ministry',
  shortBio: 'A dedicated servant with a heart for building community.',
  fullBio:
  'A dedicated servant with a heart for building community and fostering meaningful relationships within the church family. His ministry focuses on creating welcoming environments where believers can connect and grow together.',
  story:
  "[Placeholder] Pastor Leonard's journey in fellowship ministry has been marked by his genuine care for people and his ability to bring diverse groups together. His dedication to building authentic Christian community has created lasting bonds among believers and strengthened the church family."
},
{
  name: 'Ptr. Louie Silan',
  title: 'Affiliates Pastor',
  image: "/496941650_9986446918087623_5321505900457071114_n.webp",

  specialization: 'Affiliates Ministry',
  shortBio: 'Passionate about creating welcoming environments.',
  fullBio:
  'Passionate about creating welcoming environments where believers can connect, grow, and support one another in faith. His approach to ministry emphasizes the importance of genuine relationships and mutual encouragement.',
  story:
  "[Placeholder] Pastor Louie's ministry has been characterized by his warm hospitality and his gift for making everyone feel valued and included."
},
{
  name: 'Ptr. Sonny Jacob',
  title: 'Affiliates Pastor',
  image: "/516853943_10229874176339383_741894806820482945_n-removebg-preview.webp",

  specialization: 'Affiliates Ministry',
  shortBio: 'With expertise in missions and cross-cultural ministry.',
  fullBio:
  'With expertise in missions and cross-cultural ministry, bringing a global vision for spreading the Gospel through fellowship. His unique perspective enriches the church community and broadens our understanding of Christian unity.',
  story:
  "[Placeholder] Pastor Sonny's experience in cross-cultural ministry has brought a rich, global perspective to our fellowship."
},
{
  name: 'Ptr. Junie M. Balwang',
  title: 'Affiliates Pastor',
  image: "/480975052_950039643993852_6543480930474798010_n.webp",

  specialization: 'Affiliates Ministry',
  shortBio: 'Committed to strengthening the bonds of fellowship.',
  fullBio:
  'Committed to strengthening the bonds of fellowship and creating spaces where believers experience genuine Christian community.',
  story:
  "[Placeholder] Pastor Junie's dedication to building strong fellowship has resulted in a vibrant, connected church community."
},
{
  name: 'Ptra. Gina Espiritu',
  title: 'Affiliates Pastor',
  image: "/534256705_122121319898931963_7528005705236173993_n.webp",

  specialization: 'Affiliates Ministry',
  shortBio: 'A compassionate leader dedicated to building strong fellowship.',
  fullBio:
  'A compassionate leader dedicated to building strong fellowship and community connections. Her ministry creates welcoming spaces where believers can grow together in faith and mutual support.',
  story:
  "[Placeholder] Pastor Gina's heart for fellowship ministry has created a warm and welcoming environment where believers connect authentically."
},
{
  name: 'Ptra. Zeny Litawen',
  title: 'Affiliates Pastor',
  image: "/513878149_10017784441610134_1432304304820809657_n.webp",

  specialization: 'Affiliates Ministry',
  shortBio: 'Passionate about fostering authentic relationships.',
  fullBio:
  'Passionate about fostering authentic relationships and creating meaningful fellowship experiences.',
  story:
  "[Placeholder] Pastor Zeny's approach to fellowship ministry has brought people together in authentic, life-giving relationships."
},
{
  name: 'Ptr. Jerry Litawen',
  title: 'Affiliates Pastor',
  image: "/516406366_10229806109237748_6995946554747989513_n.webp",

  specialization: 'Affiliates Ministry',
  shortBio: 'Dedicated to building strong community bonds.',
  fullBio:
  'Dedicated to building strong community bonds and fostering spiritual growth through fellowship.',
  story:
  "[Placeholder] Pastor Jerry's leadership in fellowship ministry has strengthened community bonds and created lasting relationships among believers."
},
{
  name: 'Ptr. Teodoro Garlit Sr.',
  title: 'Affiliates Pastor',
  church: 'United Christian Fellowship',
  image: "/teodoro1.webp",

  specialization: 'Affiliates Ministry',
  shortBio:
  'Leading United Christian Fellowship in Borlongan, Dipaculao, Aurora.',
  fullBio:
  'Leading United Christian Fellowship in Borlongan, Dipaculao, Aurora with a heart for evangelism and community transformation.',
  story:
  "[Placeholder] Pastor Teodoro's faithful ministry at United Christian Fellowship has been a beacon of hope in the community."
},
{
  name: 'Ptr. Joseph Soridor',
  title: 'Affiliates Pastor',
  church: 'Christ The Lord Fellowship',
  image: "/577605319_122218167392101611_366158039041198078_n.webp",

  specialization: 'Affiliates Ministry',
  shortBio: 'Serving at Christ The Lord Fellowship in Baler, Aurora.',
  fullBio:
  'Serving at Christ The Lord Fellowship in Baler, Aurora, bringing the message of hope and salvation to the community.',
  story:
  "[Placeholder] Pastor Joseph's ministry at Christ The Lord Fellowship in Baler, Aurora has been marked by his passionate commitment to sharing the Gospel."
},
{
  name: 'Ptr. Carlito Sanchez',
  title: 'Affiliates Pastor',
  church: 'Hope & Grace Fellowship',
  image: "/carlito.webp",

  specialization: 'Affiliates Ministry',
  shortBio: 'Leading Hope & Grace Fellowship.',
  fullBio:
  'Leading Hope & Grace Fellowship with a focus on bringing hope and the grace of God to every person he encounters.',
  story:
  "[Placeholder] Pastor Carlito's leadership at Hope & Grace Fellowship has been a testament to the power of God's grace."
},
{
  name: 'Ptra. Rocelyn Basilio',
  title: 'Affiliates Pastor',
  church: 'Putlan Church, Carranglan, Nueva Ecija',
  image: "/272048676_481309780287901_5755746467562633499_n-Picsart-AiImageEnhancer.webp",

  specialization: 'Affiliates Ministry',
  shortBio: 'Serving faithfully in Putlan, Carranglan, Nueva Ecija.',
  fullBio:
  'Serving faithfully in Putlan, Carranglan, Nueva Ecija, with a heart for discipleship and community outreach.',
  story:
  "[Placeholder] Pastor Roselyn's dedicated ministry in Putlan, Carranglan, Nueva Ecija has been a source of spiritual growth and encouragement for the community."
},
{
  name: 'Ptr. Solomon Balwang',
  title: 'Affiliates Pastor',
  church: 'Eternal Life Fellowship, Ammoweg, Ambaguio',
  image: "/480033865_950497310608841_5157391532199260184_n.webp",

  specialization: 'Affiliates Ministry',
  shortBio: 'Leading Eternal Life Fellowship in Ammoweg, Ambaguio.',
  fullBio:
  'Leading Eternal Life Fellowship in Ammoweg, Ambaguio with a passion for sharing the message of eternal life through Christ.',
  story:
  "[Placeholder] Pastor Solomon's faithful service at Eternal Life Fellowship has established a thriving congregation committed to the Gospel."
}];

const getShortDescription = (text: string) => {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
  return sentences.slice(0, 2).join(' ').trim();
};
export function OurPastorsPage() {
  useSmoothScroll({
    lerp: 0.15,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1.3,
    damping: 0.88
  });
  const [selectedPastor, setSelectedPastor] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'story' | 'gallery'>('story');
  const [activePastorTab, setActivePastorTab] = useState<
    'associate' | 'fellowship'>(
    'associate');
  const [expandedImage, setExpandedImage] = useState<{
    url: string;
    name: string;
  } | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const placeholderGallery = [
  'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop'];

  const handlePastorSelect = (pastor: any) => {
    setSelectedPastor(pastor);
    setActiveTab('story');
  };
  const handleImageExpand = (imageUrl: string, name: string) => {
    setExpandedImage({
      url: imageUrl,
      name
    });
  };
  const currentPastors =
  activePastorTab === 'associate' ? pastors : fellowshipPastors;
  // Carousel scroll helpers
  const scrollCarousel = useCallback((direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const cardWidth = 320;
    const scrollAmount = cardWidth * 3;
    carouselRef.current.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  }, []);
  // Reset carousel scroll when tab changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, [activePastorTab]);
  const renderPastorCard = (
  pastor: (typeof currentPastors)[0],
  isMobile = false) =>
  {
    const isAssociate = activePastorTab === 'associate';
    const isFellowship = activePastorTab === 'fellowship';
    return (
      <div
        className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl ${!isMobile ? 'hover:shadow-purple-500/20 hover:scale-[1.02]' : ''} transition-all duration-500 h-full flex flex-col border border-white/10 ${!isMobile ? 'hover:border-purple-500/50' : ''}`}>
        
        <div
          className={`relative ${isMobile ? 'h-80' : 'h-64'} overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800`}>
          
          <div
            className={`absolute inset-0 ${isAssociate ? 'bg-gradient-to-br from-purple-600/30 to-blue-600/30' : 'bg-gradient-to-br from-sky-400/30 to-blue-400/30'} z-10`} />
          
          {pastor.image ?
          <img
            src={pastor.image}
            alt={pastor.name}
            className="w-full h-full object-cover object-center" /> :


          <div className="w-full h-full flex items-center justify-center relative z-20">
              <div className="text-gray-400 text-6xl font-bold">
                {pastor.name.
              split(' ').
              map((n) => n[0]).
              join('')}
              </div>
            </div>
          }
        </div>
        <div className={`${isMobile ? 'p-6' : 'p-5'} flex-1 flex flex-col`}>
          <div className="flex-1">
            <h3
              className={`${isMobile ? 'text-xl' : 'text-lg'} font-bold text-white mb-1`}>
              
              {pastor.name}
            </h3>
            <p
              className={`text-xs font-semibold uppercase tracking-wide ${isAssociate ? 'text-purple-300' : 'text-sky-300'}`}>
              
              {pastor.title}
            </p>
            {'church' in pastor && pastor.church &&
            <p className="text-xs text-gray-400 mt-1">{pastor.church}</p>
            }
          </div>
          {isFellowship ?
          <button
            onClick={() => handleImageExpand(pastor.image, pastor.name)}
            className={`w-full ${isMobile ? 'mt-4 py-3' : 'mt-3 py-2.5'} bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-400 hover:to-blue-400 text-white font-semibold px-4 rounded-lg transition-all duration-300 active:scale-95 shadow-lg flex items-center justify-center gap-2 group/btn text-sm`}>
            
              <span>View Image</span>
              <svg
              className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              
              </svg>
            </button> :

          <button
            onClick={() => handlePastorSelect(pastor)}
            className={`w-full ${isMobile ? 'mt-4 py-3' : 'mt-3 py-2.5'} bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-4 rounded-lg transition-all duration-300 active:scale-95 shadow-lg flex items-center justify-center gap-2 group/btn text-sm`}>
            
              <span>View Story</span>
              <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          }
        </div>
      </div>);

  };
  return (
    <div className="w-full min-h-screen bg-dark-premium text-slate-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-[100px] animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[100px] animate-pulse"
            style={{
              animationDelay: '1s'
            }} />
          
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 1
            }}
            className="text-center text-white px-6 relative z-10">
            
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              className="inline-block mb-6">
              
              <span className="text-blue-300 text-xs font-bold tracking-widest uppercase bg-blue-500/10 border border-blue-500/20 px-6 py-2.5 rounded-full">
                Spiritual Leadership
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-display">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
                Pastors
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto mb-6 rounded-full" />
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Shepherds called by God to lead, inspire, and nurture our faith
              community with wisdom, compassion, and unwavering dedication
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Founding Leader Section — normal flow         */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-slate-900/40 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
            viewport={{
              once: true
            }}
            className="text-center mb-10 md:mb-14">
            
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase font-display">
              Founding Leader
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4 font-display">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Visionary
              </span>
            </h2>
          </motion.div>

          {/* Desktop: side-by-side card */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.1
            }}
            viewport={{
              once: true
            }}
            className="hidden lg:block">
            
            <div className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative h-[480px] lg:h-[520px] bg-slate-950/40">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10 pointer-events-none" />
                  <img
                    src={headPastor.image}
                    alt={headPastor.name}
                    className="w-full h-full object-cover object-[center_12%]" />
                </div>
                <div className="p-10 xl:p-14 flex flex-col justify-center">
                  <div className="inline-block mb-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-4 py-2 rounded-full font-display uppercase tracking-widest">
                      {headPastor.title}
                    </span>
                  </div>
                  <h3 className="text-3xl xl:text-4xl font-bold text-white mb-4 font-display">
                    {headPastor.name}
                  </h3>
                  <p className="text-base text-slate-300 leading-relaxed mb-4">
                    {getShortDescription(headPastor.bio)}...
                  </p>
                  <div className="bg-white/5 rounded-2xl p-5 border-l-4 border-blue-500 mb-5">
                    <div className="flex items-start gap-3">
                      <SparklesIcon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                      <p className="text-slate-200 italic leading-relaxed text-sm">
                        {headPastor.message}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handlePastorSelect(headPastor)}
                    data-cursor-text="VISIONARY"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/btn font-display">
                    
                    <span>View Full Story</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tablet & Mobile: card layout (image on top, content below) */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.1
            }}
            viewport={{
              once: true
            }}
            className="lg:hidden max-w-md mx-auto">
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/10">
              <div className="relative h-[320px] sm:h-[360px] bg-slate-950/40">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10 pointer-events-none" />
                <img
                  src={headPastor.image}
                  alt={headPastor.name}
                  className="w-full h-full object-cover object-[center_12%]" />
              </div>
              <div className="p-6">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1.5 rounded-full font-display uppercase tracking-widest">
                  {headPastor.title}
                </span>
                <h3 className="text-2xl font-bold text-white mt-3 mb-3 font-display">
                  {headPastor.name}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {getShortDescription(headPastor.bio)}...
                </p>
                <button
                  onClick={() => handlePastorSelect(headPastor)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-display">
                  
                  <span>View Full Story</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Ministry Team Section — normal flow           */}
      {/* ============================================ */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"
            style={{
              animationDelay: '1s'
            }} />
          
        </div>

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
            viewport={{
              once: true
            }}
            className="text-center mb-8 px-6">
            
            <span className="text-purple-300 text-sm font-bold tracking-widest uppercase">
              Ministry Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-3">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Pastoral Team
              </span>
            </h2>
            <p className="text-base text-gray-400 max-w-xl mx-auto">
              Dedicated servants leading our faith communities
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="relative mb-10">
            <div className="flex items-center justify-center gap-2 px-8">
              <button
                onClick={() => setActivePastorTab('associate')}
                className={`relative px-6 py-3 text-base font-semibold transition-colors duration-300 ${activePastorTab === 'associate' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}>
                
                <div className="flex items-center gap-2">
                  <SparklesIcon className="w-4 h-4" />
                  <span>Associate Pastors</span>
                </div>
              </button>
              <button
                onClick={() => setActivePastorTab('fellowship')}
                className={`relative px-6 py-3 text-base font-semibold transition-colors duration-300 ${activePastorTab === 'fellowship' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}>
                
                <div className="flex items-center gap-2">
                  <HeartIcon className="w-4 h-4" />
                  <span>Affiliates Pastors</span>
                </div>
              </button>
            </div>
            <motion.div
              className={`absolute bottom-0 left-1/2 h-0.5 ${activePastorTab === 'associate' ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-emerald-500 to-teal-500'} rounded-full`}
              initial={false}
              animate={{
                x: activePastorTab === 'associate' ? '-100%' : '0%',
                width: '200px'
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30
              }} />
            
          </div>

          {/* Desktop: Horizontal carousel with nav arrows */}
          <div className="hidden md:block relative">
            {/* Left arrow */}
            <button
              onClick={() => scrollCarousel('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-white/20">
              
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            {/* Right arrow */}
            <button
              onClick={() => scrollCarousel('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-white/20">
              
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={activePastorTab}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  y: -20
                }}
                transition={{
                  duration: 0.35
                }}>
                
                <div
                  ref={carouselRef}
                  className="flex gap-6 overflow-x-auto scrollbar-hide px-16 pb-6 snap-x snap-mandatory"
                  style={{
                    scrollBehavior: 'auto'
                  }}>
                  
                  {currentPastors.map((pastor, index) =>
                  <motion.div
                    key={pastor.name}
                    initial={{
                      opacity: 0,
                      y: 20
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05
                    }}
                    className="w-[300px] flex-shrink-0 snap-start">
                    
                      {renderPastorCard(pastor)}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            <p className="text-center text-gray-500 text-sm mt-4">
              ← Scroll or use arrows to see more →
            </p>
          </div>

          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden">
            <div
              className="overflow-x-auto scrollbar-hide px-6 pb-4"
              style={{
                scrollSnapType: 'x mandatory'
              }}>
              
              <div className="flex gap-4">
                {currentPastors.map((pastor) =>
                <div
                  key={pastor.name}
                  className="flex-shrink-0 w-[280px]"
                  style={{
                    scrollSnapAlign: 'start'
                  }}>
                  
                    {renderPastorCard(pastor, true)}
                  </div>
                )}
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-400 text-sm">← Swipe to see more →</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Expansion Modal */}
      <AnimatePresence>
        {expandedImage && (
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}>
          
            <motion.div
            initial={{
              scale: 0.8,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0.8,
              opacity: 0
            }}
            transition={{
              type: 'spring',
              duration: 0.5
            }}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}>
            
              <button
                onClick={() => setExpandedImage(null)}
                className="absolute top-4 right-4 sm:-top-12 sm:right-0 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2.5 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 z-20">
                <XIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={expandedImage.url}
                  alt={expandedImage.name}
                  className="w-full h-auto max-h-[80vh] sm:max-h-[85vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-8">
                  <h3 className="text-xl sm:text-3xl font-bold text-white mb-1">
                    {expandedImage.name}
                  </h3>
                  <p className="text-sky-300 text-sm sm:text-lg font-semibold">
                    Affiliates Pastor
                  </p>
                </div>
              </div>
              <p className="text-center text-white/60 text-xs sm:text-sm mt-3 sm:mt-4">
                Click anywhere outside the image to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pastor Story Modal */}
      <AnimatePresence>
        {selectedPastor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-4"
            onClick={() => setSelectedPastor(null)}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl max-w-5xl w-full max-h-[94vh] sm:max-h-[90vh] overflow-hidden shadow-2xl border border-white/10 flex flex-col"
              onClick={(e) => e.stopPropagation()}>

              {/* Modal Header */}
              <div className="relative min-h-[7.5rem] sm:min-h-[10rem] md:h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex-shrink-0">
                <div
                  className={`absolute inset-0 ${
                    'specialization' in selectedPastor &&
                    selectedPastor.specialization === 'Affiliates Ministry'
                      ? 'bg-gradient-to-r from-sky-500/30 via-blue-500/20 to-sky-500/30'
                      : 'bg-gradient-to-r from-blue-600/30 via-purple-600/20 to-blue-600/30'
                  }`}
                />
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                </div>

                <button
                  onClick={() => setSelectedPastor(null)}
                  className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 border border-white/20"
                  aria-label="Close modal">
                  <XIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                  <div className="flex items-end gap-3 sm:gap-6">
                    <div className="relative flex-shrink-0">
                      <div
                        className={`absolute inset-0 rounded-full blur-xl ${
                          'specialization' in selectedPastor &&
                          selectedPastor.specialization === 'Affiliates Ministry'
                            ? 'bg-gradient-to-br from-sky-400 to-blue-400'
                            : 'bg-gradient-to-br from-blue-400 to-purple-400'
                        } opacity-60`}
                      />
                      <div className="relative w-16 h-16 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-4 ring-white/20 bg-slate-800">
                        {selectedPastor.image ? (
                          <img
                            src={selectedPastor.image}
                            alt={selectedPastor.name}
                            className="w-full h-full object-cover object-center"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-white text-xl sm:text-3xl font-bold opacity-50">
                              {selectedPastor.name
                                .split(' ')
                                .map((n: string) => n[0])
                                .join('')}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex-1 pb-1 sm:pb-2 min-w-0">
                      <h3 className="text-lg sm:text-2xl md:text-4xl font-bold text-white mb-0.5 sm:mb-1 truncate">
                        {selectedPastor.name}
                      </h3>
                      <p
                        className={`text-xs sm:text-base font-semibold truncate ${
                          'specialization' in selectedPastor &&
                          selectedPastor.specialization === 'Affiliates Ministry'
                            ? 'text-sky-300'
                            : 'text-blue-300'
                        }`}>
                        {selectedPastor.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="relative border-b border-white/10 bg-slate-900/50 backdrop-blur-sm flex-shrink-0">
                <div className="flex items-center justify-center gap-2 px-4 sm:px-8 pt-3 sm:pt-6 pb-0">
                  <button
                    onClick={() => setActiveTab('story')}
                    className={`relative px-4 sm:px-8 py-2.5 sm:py-4 text-sm sm:text-lg font-semibold transition-colors duration-300 ${
                      activeTab === 'story'
                        ? 'text-white'
                        : 'text-gray-400 hover:text-gray-300'
                    }`}>
                    <div className="flex items-center gap-2">
                      <BookOpenIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Story</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab('gallery')}
                    className={`relative px-4 sm:px-8 py-2.5 sm:py-4 text-sm sm:text-lg font-semibold transition-colors duration-300 ${
                      activeTab === 'gallery'
                        ? 'text-white'
                        : 'text-gray-400 hover:text-gray-300'
                    }`}>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Gallery</span>
                    </div>
                  </button>
                </div>
              </div>
              {/* Tab Content */}
              <div className="flex-1 overflow-hidden">
                <AnimatePresence mode="wait">
                  {activeTab === 'story' &&
                <motion.div
                  key="story"
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  exit={{
                    opacity: 0,
                    y: -20
                  }}
                  transition={{
                    duration: 0.3
                  }}
                  className="h-full overflow-y-auto p-8 lg:p-12">
                  
                      <div className="max-w-5xl mx-auto">
                        <div className="mb-10">
                          <div className="flex items-center gap-3 mb-6">
                            <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${'specialization' in selectedPastor && selectedPastor.specialization === 'Affiliates Ministry' ? 'bg-gradient-to-br from-sky-500 to-blue-500' : 'bg-gradient-to-br from-blue-600 to-purple-600'} shadow-lg`}>
                          
                              <BookOpenIcon className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-3xl font-bold text-white">
                              {selectedPastor.name === headPastor.name ?
                          "Founder's Story" :
                          "Pastor's Story"}
                            </h4>
                          </div>
                          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg backdrop-blur-sm">
                            <p className="text-sm text-amber-200 font-semibold">
                              📝 Note: This is temporary placeholder text. The
                              full story will be added soon.
                            </p>
                          </div>
                          <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
                            {selectedPastor.story}
                          </p>
                        </div>
                        <div
                      className={`rounded-2xl p-8 border-l-4 mb-10 ${'specialization' in selectedPastor && selectedPastor.specialization === 'Affiliates Ministry' ? 'bg-gradient-to-br from-sky-900/30 to-blue-900/30 border-sky-500' : 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-purple-500'} backdrop-blur-sm`}>
                      
                          <div className="flex items-start gap-4">
                            <HeartIcon
                          className={`w-7 h-7 flex-shrink-0 mt-1 ${'specialization' in selectedPastor && selectedPastor.specialization === 'Affiliates Ministry' ? 'text-sky-400' : 'text-purple-400'}`} />
                        
                            <div>
                              <p className="text-white font-bold text-xl mb-3">
                                Ministry Focus
                              </p>
                              <p className="text-gray-300 leading-relaxed text-lg">
                                {selectedPastor.fullBio}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-6">
                            <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${'specialization' in selectedPastor && selectedPastor.specialization === 'Affiliates Ministry' ? 'bg-gradient-to-br from-sky-500 to-blue-500' : 'bg-gradient-to-br from-blue-600 to-purple-600'} shadow-lg`}>
                          
                              <SparklesIcon className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-3xl font-bold text-white">
                              Testimonials
                            </h4>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                              <p className="text-gray-300 italic mb-4 text-lg leading-relaxed">
                                "Pastor{' '}
                                {
                            selectedPastor.name.split(' ')[
                            selectedPastor.name.split(' ').length - 1]

                            }
                                's ministry has transformed our community. Their
                                dedication and wisdom inspire us daily."
                              </p>
                              <p className="text-sm text-gray-400 font-semibold">
                                — Church Member
                              </p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                              <p className="text-gray-300 italic mb-4 text-lg leading-relaxed">
                                "A true servant leader who leads by example and
                                brings people closer to God through authentic
                                faith."
                              </p>
                              <p className="text-sm text-gray-400 font-semibold">
                                — Ministry Partner
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                }
                  {activeTab === 'gallery' &&
                <motion.div
                  key="gallery"
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  exit={{
                    opacity: 0,
                    y: -20
                  }}
                  transition={{
                    duration: 0.3
                  }}
                  className="h-full overflow-y-auto p-8 lg:p-12">
                  
                      <div className="max-w-6xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                          <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${'specialization' in selectedPastor && selectedPastor.specialization === 'Affiliates Ministry' ? 'bg-gradient-to-br from-sky-500 to-blue-500' : 'bg-gradient-to-br from-blue-600 to-purple-600'} shadow-lg`}>
                        
                            <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          
                              <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          
                            </svg>
                          </div>
                          <h4 className="text-3xl font-bold text-white">
                            Ministry Gallery
                          </h4>
                        </div>
                        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-8 rounded-r-lg backdrop-blur-sm">
                          <p className="text-sm text-blue-200 font-semibold">
                            🖼️ Gallery images will be added soon
                          </p>
                        </div>
                        <div className="grid grid-cols-3 gap-6 mb-10">
                          {placeholderGallery.map((img, index) =>
                      <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                          scale: 0.9
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1
                        }}
                        transition={{
                          delay: index * 0.1
                        }}
                        className="group relative aspect-square rounded-xl overflow-hidden bg-slate-700 border border-white/10">
                        
                              <img
                          src={img}
                          alt={`Ministry moment ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                      )}
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                          <h5 className="text-white font-bold text-2xl mb-6">
                            Ministry Highlights
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                        'Leading weekly worship services',
                        'Mentoring emerging leaders',
                        'Community outreach programs',
                        'Biblical teaching and discipleship',
                        'Prayer and spiritual guidance',
                        'Youth and family ministry'].
                        map((h, i) =>
                        <div key={i} className="flex items-start gap-3">
                                <span className="mt-1 text-blue-400">•</span>
                                <span className="text-gray-300 text-lg">
                                  {h}
                                </span>
                              </div>
                        )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                }
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
            viewport={{
              once: true
            }}>
            
            <BookOpenIcon className="w-16 h-16 text-blue-300 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Connect With Our Pastoral Team
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Whether you need prayer, guidance, or simply want to learn more
              about our ministry, our pastors are here to serve you with open
              hearts and listening ears.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
                
                Get in Touch
              </a>
              <a
                href="/"
                className="inline-block bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full transition-all duration-300">
                
                Back to Home
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>);

}