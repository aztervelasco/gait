import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { SparklesIcon, HeartIcon, BookOpenIcon, XIcon, ArrowRightIcon } from 'lucide-react';
const headPastor = {
  name: 'Rev. Movel B. Velasco',
  title: 'Head Pastor & Founder',
  image: "/517112793_10229821241296040_7747544348507949052_n.jpg",
  bio: "Pioneer and founder of GEFMI, Rev. Movel B. Velasco has dedicated his life to spreading the Gospel and establishing vibrant faith communities. With unwavering vision and a heart for God's people, he leads our ministry with wisdom, compassion, and an infectious passion for Christ. Under his leadership, GEFMI has grown from a small gathering to a thriving network of churches touching lives across communities and nations.",
  message: '"My calling is simple: to see every person encounter the transforming love of Jesus Christ. Through faith, service, and unwavering commitment to God\'s Word, we are building a movement that will impact generations to come."',
  fullBio: "Pioneer and founder of GEFMI, Rev. Movel B. Velasco has dedicated his life to spreading the Gospel and establishing vibrant faith communities. With unwavering vision and a heart for God's people, he leads our ministry with wisdom, compassion, and an infectious passion for Christ. Under his leadership, GEFMI has grown from a small gathering to a thriving network of churches touching lives across communities and nations.",
  story: "[Placeholder] Rev. Movel B. Velasco's journey began with a divine calling to serve God's people. From humble beginnings, he has built a thriving ministry that spans multiple churches and touches countless lives. His visionary leadership and unwavering faith have been instrumental in establishing GEFMI as a beacon of hope and transformation. Through years of dedicated service, he has mentored numerous pastors, planted churches, and created a lasting legacy of faith that continues to impact communities across the region. His commitment to excellence in ministry and his passion for seeing lives transformed by the Gospel have made him a respected leader in the evangelical community.",
  specialization: 'Visionary Leadership'
};
const pastors = [{
  name: 'Ptr. Lando Abalos',
  title: 'Pastor of Kasibu Church',
  church: 'Kasibu Church',
  image: "/d91ddbe4-386e-4fe9-8532-0eda1500ba62-removebg-preview.png",
  shortBio: 'A devoted servant of God with a heart for community outreach and discipleship. Pastor Lando brings warmth, wisdom, and practical teaching that helps believers grow in their faith journey.',
  fullBio: 'A devoted servant of God with a heart for community outreach and discipleship. Pastor Lando brings warmth, wisdom, and practical teaching that helps believers grow in their faith journey. His dedication to serving the community has made a lasting impact on countless lives.',
  specialization: 'Community Outreach',
  story: "[Placeholder] Pastor Lando's journey began in humble circumstances, where he discovered his calling to serve God's people. His dedication to community outreach has transformed countless lives, bringing hope and practical support to those in need. Through his ministry, he has established numerous outreach programs that continue to impact communities today. His compassionate approach and servant leadership have made him a beloved figure in the community, always ready to lend a helping hand and share the love of Christ."
}, {
  name: 'Ptr. Jerry Nobres',
  title: 'Pastor of Beti Church',
  church: 'Beti Church',
  image: "/038c6588-1445-473e-9640-378b702bbc97.jpg",
  shortBio: 'Known for his passionate preaching and deep love for Scripture, Pastor Jerry inspires believers to live boldly for Christ. His teaching ministry has transformed countless lives.',
  fullBio: 'Known for his passionate preaching and deep love for Scripture, Pastor Jerry inspires believers to live boldly for Christ. His teaching ministry has transformed countless lives through powerful biblical exposition and practical application.',
  specialization: 'Teaching Ministry',
  story: "[Placeholder] With a profound love for God's Word, Pastor Jerry has dedicated his life to teaching and preaching the Gospel. His dynamic teaching style and deep biblical insights have inspired generations of believers to pursue a deeper relationship with Christ. His ministry continues to equip and empower the church for effective service. Through his expository preaching and commitment to sound doctrine, he has helped countless believers develop a solid foundation in their faith."
}, {
  name: 'Ptr. Rudy Tindaan',
  title: 'Pastor of Atbu Church',
  church: 'Atbu Church',
  image: "/Ptr_Rudy-removebg-preview.png",
  shortBio: 'With a gift for pastoral care and counseling, Pastor Rudy walks alongside believers in their spiritual journey. His compassionate heart and wise counsel have brought healing and hope to many.',
  fullBio: "With a gift for pastoral care and counseling, Pastor Rudy walks alongside believers in their spiritual journey. His compassionate heart and wise counsel have brought healing and hope to many families and individuals facing life's challenges.",
  specialization: 'Pastoral Care',
  story: "[Placeholder] Pastor Rudy's compassionate heart and gift for pastoral care have made him a trusted counselor and spiritual guide. His ministry of healing and restoration has brought hope to countless individuals and families facing life's challenges. Through his gentle wisdom and unwavering support, many have found renewed strength and purpose in their faith journey. His ability to listen with empathy and provide biblical guidance has helped numerous believers navigate difficult seasons with grace and hope."
}, {
  name: 'Ptr. Moris Velasco',
  title: 'Pastor of Villaflores Church',
  church: 'Villaflores Church',
  image: "/514414300_10229639822320679_5865684077610383712_n.jpg",
  shortBio: "With a heart for evangelism and church planting, Pastor Moris is passionate about reaching the lost and establishing new congregations. His pioneering spirit continues to expand God's Kingdom.",
  fullBio: "With a heart for evangelism and church planting, Pastor Moris is passionate about reaching the lost and establishing new congregations. His pioneering spirit continues to expand God's Kingdom into new territories and unreached communities.",
  specialization: 'Church Planting',
  story: '[Placeholder] Pastor Moris carries a pioneering spirit that has led to the establishment of multiple thriving congregations. His evangelistic zeal and strategic vision for church planting have expanded the reach of the Gospel to unreached communities. Through his leadership, new churches continue to be planted, bringing transformation to entire regions. His ability to cast vision and mobilize teams has resulted in a multiplication movement that continues to grow and impact lives.'
}, {
  name: 'Ptr. Vergilio Lamsis',
  title: 'Pastor of Bantinan Church',
  church: 'Bantinan Church',
  image: "/561149741_122184417068449557_3419564386070091008_n.jpg",
  shortBio: 'A dynamic leader with a passion for worship and prayer, Pastor Vergilio leads our congregation into powerful encounters with God. His ministry has ignited revival and spiritual awakening.',
  fullBio: 'A dynamic leader with a passion for worship and prayer, Pastor Vergilio leads our congregation into powerful encounters with God. His ministry has ignited revival and spiritual awakening throughout our churches and beyond.',
  specialization: 'Worship & Prayer',
  story: "[Placeholder] Pastor Vergilio's passion for worship and prayer has transformed the spiritual atmosphere of our church. His leadership in worship has led countless believers into deeper encounters with God's presence. Through his ministry, revival fires have been ignited, and many have experienced powerful spiritual breakthroughs and renewed devotion to Christ. His commitment to creating an atmosphere of authentic worship has helped believers experience the manifest presence of God in transformative ways."
}, {
  name: 'Ptr. Mateo Quinones',
  title: 'Pastor of Bantinan Church',
  church: 'Bantinan Church',
  image: '',
  shortBio: 'A dedicated servant with a heart for pastoral ministry, Pastor Mateo serves the Bantinan community with compassion and wisdom.',
  fullBio: 'A dedicated servant with a heart for pastoral ministry, Pastor Mateo serves the Bantinan community with compassion and wisdom. His ministry focuses on building strong relationships and nurturing spiritual growth among believers.',
  specialization: 'Pastoral Ministry',
  story: "[Placeholder] Pastor Mateo's journey in ministry has been marked by his dedication to serving God's people with compassion and wisdom. His heart for pastoral care and community building has helped many believers grow in their faith and discover their purpose in Christ."
}, {
  name: 'Ptr. Roves Abalos',
  title: "Pastor of Orchid's Church",
  church: "Orchid's Church",
  image: "/521953240_122169464594567446_7082549070398521511_n.jpg",
  shortBio: 'Dedicated to equipping the next generation, Pastor Roves combines biblical truth with practical application. His ministry empowers believers to discover and fulfill their God-given purpose.',
  fullBio: 'Dedicated to equipping the next generation, Pastor Roves combines biblical truth with practical application. His ministry empowers believers to discover and fulfill their God-given purpose through intentional discipleship and leadership development.',
  specialization: 'Leadership Development',
  story: '[Placeholder] Pastor Roves has a unique gift for identifying and developing emerging leaders. His mentorship has shaped numerous young ministers who are now serving effectively in various capacities. Through his practical teaching and hands-on training, he has equipped believers to step into their God-given calling with confidence and competence. His investment in the next generation continues to bear fruit as his disciples multiply and impact communities around the world.'
}, {
  name: 'Ptr. June Matedio',
  title: 'Pastor of Lower Kiskis Church',
  church: 'Lower Kiskis Church',
  image: "/june_matedio-removebg-preview.png",
  shortBio: 'A gifted communicator with a heart for youth ministry, Pastor June connects with the next generation through relevant teaching and authentic relationships. His ministry inspires young people to pursue Christ passionately.',
  fullBio: 'A gifted communicator with a heart for youth ministry, Pastor June connects with the next generation through relevant teaching and authentic relationships. His ministry inspires young people to pursue Christ passionately and live out their faith with boldness and conviction.',
  specialization: 'Youth Ministry',
  story: "[Placeholder] Pastor June's dynamic approach to youth ministry has revolutionized how young people engage with their faith. His ability to communicate biblical truth in relevant, compelling ways has drawn countless youth into a vibrant relationship with Christ. Through his ministry, a new generation of passionate believers is rising up to impact their world for the Kingdom. His authentic leadership and genuine care for young people have created a thriving youth community where teenagers encounter God and discover their purpose."
}, {
  name: 'Ptr. Jether Hulay',
  title: 'Pastor of Dupax Church',
  church: 'Dupax Church',
  image: "/faf3f250-5413-4599-9b64-8c9ab0c305c3-removebg-preview.png",
  shortBio: 'A dedicated servant with a heart for evangelism and community transformation, Pastor Jether reaches the lost with the Gospel message. His ministry brings hope and transformation to individuals and communities.',
  fullBio: 'A dedicated servant with a heart for evangelism and community transformation, Pastor Jether reaches the lost with the Gospel message. His ministry brings hope and transformation to individuals and communities through compassionate outreach and powerful preaching.',
  specialization: 'Evangelism',
  story: "[Placeholder] Pastor Jether's evangelistic passion has led many to Christ and transformed entire communities. His bold proclamation of the Gospel and compassionate approach to outreach have opened doors for ministry in challenging areas. Through his dedication to reaching the lost, he has seen numerous salvations and life transformations. His commitment to sharing the Good News continues to expand the Kingdom and bring hope to those who need it most."
}, {
  name: 'Ptr. Anasyo',
  title: 'Pastor of Upper Kiskis Church',
  church: 'Upper Kiskis Church',
  image: '',
  shortBio: 'A faithful servant with a heart for ministry and spiritual growth, Pastor Anasyo serves the Upper Kiskis community with dedication and compassion.',
  fullBio: 'A faithful servant with a heart for ministry and spiritual growth, Pastor Anasyo serves the Upper Kiskis community with dedication and compassion. His ministry focuses on nurturing believers and helping them discover their purpose in Christ.',
  specialization: 'Pastoral Ministry',
  story: "[Placeholder] Pastor Anasyo's journey in ministry has been marked by his dedication to serving God's people with faithfulness and compassion. His heart for spiritual growth and community building has helped many believers deepen their relationship with Christ."
}, {
  name: 'Ptra. Violeta Hungduan',
  title: 'Associate Pastor',
  image: "/993a5d67-5ca6-450a-b02b-f06f17f064d0-removebg-preview.png",
  shortBio: "A compassionate leader with a heart for women's ministry and family discipleship, Pastor Violeta empowers women to embrace their calling in Christ. Her ministry brings healing, restoration, and spiritual growth to families.",
  fullBio: "A compassionate leader with a heart for women's ministry and family discipleship, Pastor Violeta empowers women to embrace their calling in Christ. Her ministry brings healing, restoration, and spiritual growth to families through biblical teaching and mentorship.",
  specialization: "Women's Ministry",
  story: "[Placeholder] Pastor Violeta has dedicated her ministry to empowering women and strengthening families through biblical discipleship. Her compassionate approach and practical wisdom have helped countless women discover their identity in Christ and embrace their God-given purpose. Through her leadership, women's ministry has flourished, creating a supportive community where women grow in faith, develop their gifts, and impact their families and communities for Christ. Her mentorship has raised up a generation of godly women leaders."
}, {
  name: 'Ptr. Jezreel Matedio',
  title: 'Pastor of Atbu Church',
  church: 'Atbu Church',
  image: "/jezreel-removebg-preview.png",
  shortBio: 'With a passion for biblical teaching and discipleship, Pastor Jezreel equips believers to grow in their understanding of Scripture. His systematic approach to teaching helps believers develop a solid theological foundation.',
  fullBio: "With a passion for biblical teaching and discipleship, Pastor Jezreel equips believers to grow in their understanding of Scripture. His systematic approach to teaching helps believers develop a solid theological foundation and apply God's Word to daily life.",
  specialization: 'Biblical Teaching',
  story: "[Placeholder] Pastor Jezreel's commitment to sound biblical teaching has strengthened the theological foundation of our church. His systematic approach to Scripture and emphasis on discipleship have equipped believers to understand and apply God's Word effectively. Through his teaching ministry, many have developed a deeper love for Scripture and a more mature faith. His dedication to raising up biblically literate believers has created a culture of continuous learning and spiritual growth."
}, {
  name: 'Ptra. Mia Tindaan',
  title: 'Pastor of Atbu Church',
  church: 'Atbu Church',
  image: "/mia.jpg",
  shortBio: 'A dedicated servant with a heart for ministry and spiritual growth, Pastor Mia brings compassion and wisdom to her calling.',
  fullBio: 'A dedicated servant with a heart for ministry and spiritual growth, Pastor Mia brings compassion and wisdom to her calling. Her ministry focuses on nurturing believers and helping them discover their purpose in Christ.',
  specialization: 'Spiritual Growth',
  story: "[Placeholder] Pastor Mia's journey in ministry has been marked by her dedication to serving God's people with compassion and wisdom. Her heart for spiritual growth and discipleship has helped many believers deepen their relationship with Christ and discover their calling."
}];
const fellowshipPastors = [{
  name: 'Ptr. Leonard Clemens Cadoy',
  title: 'Fellowship Pastor',
  image: "/497733291_9986444718087843_9208305502871839500_n.jpg",
  specialization: 'Fellowship Ministry',
  shortBio: 'A dedicated servant with a heart for building community and fostering meaningful relationships within the church family.',
  fullBio: 'A dedicated servant with a heart for building community and fostering meaningful relationships within the church family. His ministry focuses on creating welcoming environments where believers can connect and grow together.',
  story: "[Placeholder] Pastor Leonard's journey in fellowship ministry has been marked by his genuine care for people and his ability to bring diverse groups together. His dedication to building authentic Christian community has created lasting bonds among believers and strengthened the church family."
}, {
  name: 'Ptr. Louie Silan',
  title: 'Fellowship Pastor',
  image: "/496941650_9986446918087623_5321505900457071114_n.jpg",
  specialization: 'Fellowship Ministry',
  shortBio: 'Passionate about creating welcoming environments where believers can connect, grow, and support one another in faith.',
  fullBio: 'Passionate about creating welcoming environments where believers can connect, grow, and support one another in faith. His approach to ministry emphasizes the importance of genuine relationships and mutual encouragement.',
  story: "[Placeholder] Pastor Louie's ministry has been characterized by his warm hospitality and his gift for making everyone feel valued and included. Through his leadership, countless believers have found their place in the church family and experienced the joy of authentic fellowship."
}, {
  name: 'Ptr. Sonny Jacob',
  title: 'Fellowship Pastor',
  image: "/516853943_10229874176339383_741894806820482945_n-removebg-preview.png",
  specialization: 'Fellowship Ministry',
  shortBio: 'With expertise in missions and cross-cultural ministry, bringing a global vision for spreading the Gospel through fellowship.',
  fullBio: 'With expertise in missions and cross-cultural ministry, bringing a global vision for spreading the Gospel through fellowship. His unique perspective enriches the church community and broadens our understanding of Christian unity.',
  story: "[Placeholder] Pastor Sonny's experience in cross-cultural ministry has brought a rich, global perspective to our fellowship. His ability to bridge cultural differences and create unity among diverse believers has strengthened our church community and expanded our vision for ministry."
}, {
  name: 'Ptr. Junie M. Balwang',
  title: 'Fellowship Pastor',
  image: "/480975052_950039643993852_6543480930474798010_n.jpg",
  specialization: 'Fellowship Ministry',
  shortBio: 'Committed to strengthening the bonds of fellowship and creating spaces where believers experience genuine Christian community.',
  fullBio: 'Committed to strengthening the bonds of fellowship and creating spaces where believers experience genuine Christian community. His ministry emphasizes the biblical principle of believers gathering together in love and mutual support.',
  story: "[Placeholder] Pastor Junie's dedication to building strong fellowship has resulted in a vibrant, connected church community. His emphasis on biblical community and his practical approach to fostering relationships have helped countless believers experience the joy and support of genuine Christian fellowship."
}, {
  name: 'Ptra. Gina Espiritu',
  title: 'Fellowship Pastor',
  image: "/534256705_122121319898931963_7528005705236173993_n.jpg",
  specialization: 'Fellowship Ministry',
  shortBio: 'A compassionate leader dedicated to building strong fellowship and community connections.',
  fullBio: 'A compassionate leader dedicated to building strong fellowship and community connections. Her ministry creates welcoming spaces where believers can grow together in faith and mutual support.',
  story: "[Placeholder] Pastor Gina's heart for fellowship ministry has created a warm and welcoming environment where believers connect authentically. Her dedication to building community has strengthened relationships and fostered spiritual growth throughout the church family."
}, {
  name: 'Ptra. Zeny Litawen',
  title: 'Fellowship Pastor',
  image: "/513878149_10017784441610134_1432304304820809657_n.jpg",
  specialization: 'Fellowship Ministry',
  shortBio: 'Passionate about fostering authentic relationships and creating meaningful fellowship experiences.',
  fullBio: 'Passionate about fostering authentic relationships and creating meaningful fellowship experiences. Her ministry emphasizes the importance of genuine community and mutual encouragement among believers.',
  story: "[Placeholder] Pastor Zeny's approach to fellowship ministry has brought people together in authentic, life-giving relationships. Her commitment to creating spaces for genuine connection has helped countless believers experience the joy of Christian community."
}, {
  name: 'Ptr. Jerry Litawen',
  title: 'Fellowship Pastor',
  image: "/516406366_10229806109237748_6995946554747989513_n.jpg",
  specialization: 'Fellowship Ministry',
  shortBio: 'Dedicated to building strong community bonds and fostering spiritual growth through fellowship.',
  fullBio: 'Dedicated to building strong community bonds and fostering spiritual growth through fellowship. His ministry creates opportunities for believers to connect, support one another, and grow together in faith.',
  story: "[Placeholder] Pastor Jerry's leadership in fellowship ministry has strengthened community bonds and created lasting relationships among believers. His dedication to fostering authentic Christian fellowship has helped many find their place in the church family."
}];
// Helper function to get first two sentences
const getShortDescription = (text: string) => {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
  return sentences.slice(0, 2).join(' ').trim();
};
export function OurPastorsPage() {
  // Enable smooth scrolling with faster, Lenis-style settings
  useSmoothScroll({
    lerp: 0.15,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1.3,
    damping: 0.88
  });
  const [selectedPastor, setSelectedPastor] = useState<(typeof pastors)[0] | (typeof fellowshipPastors)[0] | typeof headPastor | null>(null);
  const [activeTab, setActiveTab] = useState<'story' | 'gallery'>('story');
  const [activePastorTab, setActivePastorTab] = useState<'associate' | 'fellowship'>('associate');
  const [expandedImage, setExpandedImage] = useState<{
    url: string;
    name: string;
  } | null>(null);
  // Placeholder gallery images
  const placeholderGallery = ['https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop'];
  // Reset tab when modal opens
  const handlePastorSelect = (pastor: typeof selectedPastor) => {
    setSelectedPastor(pastor);
    setActiveTab('story');
  };
  // Handle image expansion for Fellowship Pastors
  const handleImageExpand = (imageUrl: string, name: string) => {
    setExpandedImage({
      url: imageUrl,
      name
    });
  };
  // Get current pastors based on active tab
  const currentPastors = activePastorTab === 'associate' ? pastors : fellowshipPastors;
  return <div className="w-full min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1
        }} className="text-center text-white px-6 relative z-10">
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="inline-block mb-6">
              <span className="text-blue-300 text-sm font-bold tracking-widest uppercase bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20">
                Spiritual Leadership
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
                Pastors
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Shepherds called by God to lead, inspire, and nurture our faith
              community with wisdom, compassion, and unwavering dedication
            </p>
          </motion.div>
        </div>
      </section>

      {/* Head Pastor Feature Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <span className="text-blue-600 text-sm font-bold tracking-widest uppercase">
              Founding Leader
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Visionary
              </span>
            </h2>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="relative">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-[500px] lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                  <img src={headPastor.image} alt={headPastor.name} className="w-full h-full object-cover" />
                </div>
                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-block mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full">
                      {headPastor.title}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {headPastor.name}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {getShortDescription(headPastor.bio)}...{' '}
                    <button onClick={() => setSelectedPastor(headPastor)} className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center gap-1 transition-colors duration-300">
                      View More
                      <ArrowRightIcon className="w-3 h-3" />
                    </button>
                  </p>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-l-4 border-blue-600 mb-6">
                    <div className="flex items-start gap-3 mb-3">
                      <SparklesIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-800 italic leading-relaxed">
                        {headPastor.message}
                      </p>
                    </div>
                  </div>
                  {/* View Full Story Button */}
                  <button onClick={() => setSelectedPastor(headPastor)} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/btn">
                    <span>View Full Story</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabbed Pastors Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <span className="text-purple-300 text-sm font-bold tracking-widest uppercase">
              Ministry Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Pastoral Team
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Dedicated servants called to shepherd, teach, and care for our
              growing faith community
            </p>
          </motion.div>

          {/* Premium Tab Navigation */}
          <div className="relative mb-12">
            <div className="flex items-center justify-center gap-2 px-8">
              {/* Associate Pastors Tab */}
              <button onClick={() => setActivePastorTab('associate')} className={`relative px-8 py-4 text-lg font-semibold transition-colors duration-300 ${activePastorTab === 'associate' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}>
                <div className="flex items-center gap-2">
                  <SparklesIcon className="w-5 h-5" />
                  <span>Associate Pastors</span>
                </div>
              </button>

              {/* Fellowship Pastors Tab */}
              <button onClick={() => setActivePastorTab('fellowship')} className={`relative px-8 py-4 text-lg font-semibold transition-colors duration-300 ${activePastorTab === 'fellowship' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}>
                <div className="flex items-center gap-2">
                  <HeartIcon className="w-5 h-5" />
                  <span>Fellowship Pastors</span>
                </div>
              </button>
            </div>

            {/* Animated Tab Indicator */}
            <motion.div className={`absolute bottom-0 left-1/2 h-1 ${activePastorTab === 'associate' ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-emerald-500 to-teal-500'} rounded-full`} initial={false} animate={{
            x: activePastorTab === 'associate' ? '-100%' : '0%',
            width: activePastorTab === 'associate' ? '240px' : '240px'
          }} transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30
          }} />
          </div>

          {/* Pastors Grid with AnimatePresence */}
          <AnimatePresence mode="wait">
            {/* Desktop: Grid Layout */}
            <motion.div key={`${activePastorTab}-desktop`} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -20
          }} transition={{
            duration: 0.3
          }} className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPastors.map((pastor, index) => {
              const isAssociate = activePastorTab === 'associate';
              const isFellowship = activePastorTab === 'fellowship';
              return <motion.div key={pastor.name} initial={{
                opacity: 0,
                scale: 0.9
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.4,
                delay: index * 0.05
              }} className="group">
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 h-full flex flex-col border border-white/10 hover:border-purple-500/50 hover:scale-105">
                      {/* Image Container */}
                      <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                        {/* Overlay */}
                        <div className={`absolute inset-0 ${isAssociate ? 'bg-gradient-to-br from-purple-600/40 to-blue-600/40' : 'bg-gradient-to-br from-sky-400/40 to-blue-400/40'} z-10`}></div>
                        {pastor.image ? <img src={pastor.image} alt={pastor.name} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" /> : <div className="w-full h-full flex items-center justify-center relative z-20">
                            <div className="text-gray-400 text-7xl font-bold">
                              {pastor.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          </div>}
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                      </div>
                      {/* Content - NO SHORT DESCRIPTION */}
                      <div className="p-6 flex-1 flex flex-col bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm">
                        <div className="flex-1">
                          <h3 className={`text-xl font-bold text-white mb-1 ${isAssociate ? 'group-hover:text-purple-300' : 'group-hover:text-sky-300'} transition-colors duration-300`}>
                            {pastor.name}
                          </h3>
                          <p className={`text-xs font-semibold uppercase tracking-wide ${isAssociate ? 'text-purple-300' : 'text-sky-300'}`}>
                            {pastor.title}
                          </p>
                          {'church' in pastor && pastor.church && <p className="text-xs text-gray-400 mt-1">
                              {pastor.church}
                            </p>}
                        </div>
                        {/* Button - Different for Fellowship vs Associate */}
                        {isFellowship ? <button onClick={() => handleImageExpand(pastor.image, pastor.name)} className={`w-full mt-4 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-400 hover:to-blue-400 hover:shadow-sky-500/50 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 group/btn`}>
                            <span>View Image</span>
                            <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </button> : <button onClick={() => handlePastorSelect(pastor)} className={`w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 hover:shadow-purple-500/50 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 group/btn`}>
                            <span>View Story</span>
                            <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </button>}
                      </div>
                    </div>
                  </motion.div>;
            })}
            </motion.div>

            {/* Mobile: Horizontal Scroll */}
            <motion.div key={`${activePastorTab}-mobile`} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -20
          }} transition={{
            duration: 0.3
          }} className="md:hidden relative">
              <div className="overflow-x-auto scrollbar-hide -mx-6 px-6" style={{
              scrollSnapType: 'x mandatory'
            }}>
                <div className="flex gap-4 pb-4">
                  {currentPastors.map((pastor, index) => {
                  const isAssociate = activePastorTab === 'associate';
                  const isFellowship = activePastorTab === 'fellowship';
                  return <motion.div key={pastor.name} initial={{
                    opacity: 0,
                    scale: 0.9
                  }} animate={{
                    opacity: 1,
                    scale: 1
                  }} transition={{
                    duration: 0.4,
                    delay: index * 0.05
                  }} className="group flex-shrink-0 w-[280px]" style={{
                    scrollSnapAlign: 'start'
                  }}>
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl active:shadow-purple-500/20 transition-all duration-500 h-full flex flex-col border border-white/10 active:border-purple-500/50">
                          {/* Image Container */}
                          <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                            {/* Overlay */}
                            <div className={`absolute inset-0 ${isAssociate ? 'bg-gradient-to-br from-purple-600/40 to-blue-600/40' : 'bg-gradient-to-br from-sky-400/40 to-blue-400/40'} z-10`}></div>
                            {pastor.image ? <img src={pastor.image} alt={pastor.name} className="w-full h-full object-cover object-center transition-transform duration-700" /> : <div className="w-full h-full flex items-center justify-center relative z-20">
                                <div className="text-gray-400 text-7xl font-bold">
                                  {pastor.name.split(' ').map(n => n[0]).join('')}
                                </div>
                              </div>}
                          </div>
                          {/* Content */}
                          <div className="p-6 flex-1 flex flex-col bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-1">
                                {pastor.name}
                              </h3>
                              <p className={`text-xs font-semibold uppercase tracking-wide ${isAssociate ? 'text-purple-300' : 'text-sky-300'}`}>
                                {pastor.title}
                              </p>
                              {'church' in pastor && pastor.church && <p className="text-xs text-gray-400 mt-1">
                                  {pastor.church}
                                </p>}
                            </div>
                            {/* Button */}
                            {isFellowship ? <button onClick={() => handleImageExpand(pastor.image, pastor.name)} className="w-full mt-4 bg-gradient-to-r from-sky-500 to-blue-500 active:from-sky-400 active:to-blue-400 active:shadow-sky-500/50 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 active:scale-95 shadow-lg flex items-center justify-center gap-2 group/btn touch-manipulation">
                                <span>View Image</span>
                                <svg className="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                              </button> : <button onClick={() => handlePastorSelect(pastor)} className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 active:from-purple-500 active:to-blue-500 active:shadow-purple-500/50 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 active:scale-95 shadow-lg flex items-center justify-center gap-2 group/btn touch-manipulation">
                                <span>View Story</span>
                                <ArrowRightIcon className="w-4 h-4 transition-transform duration-300" />
                              </button>}
                          </div>
                        </div>
                      </motion.div>;
                })}
                </div>
              </div>
              {/* Scroll indicator */}
              <div className="text-center mt-4">
                <p className="text-gray-400 text-sm">← Swipe to see more →</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Image Expansion Modal for Fellowship Pastors */}
      <AnimatePresence>
        {expandedImage && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4" onClick={() => setExpandedImage(null)}>
            <motion.div initial={{
          scale: 0.8,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.8,
          opacity: 0
        }} transition={{
          type: 'spring',
          duration: 0.5
        }} className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
              {/* Close Button */}
              <button onClick={() => setExpandedImage(null)} className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 z-10">
                <XIcon className="w-6 h-6" />
              </button>

              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img src={expandedImage.url} alt={expandedImage.name} className="w-full h-auto max-h-[85vh] object-contain" />

                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {expandedImage.name}
                  </h3>
                  <p className="text-sky-300 text-lg font-semibold">
                    Fellowship Pastor
                  </p>
                </div>
              </div>

              {/* Close Hint */}
              <p className="text-center text-white/60 text-sm mt-4">
                Click anywhere outside the image to close
              </p>
            </motion.div>
          </motion.div>}
      </AnimatePresence>

      {/* PREMIUM TABBED MODAL */}
      <AnimatePresence>
        {selectedPastor && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={() => setSelectedPastor(null)}>
            <motion.div initial={{
          scale: 0.95,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.95,
          opacity: 0
        }} transition={{
          type: 'spring',
          duration: 0.5
        }} className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl max-w-[90rem] w-full h-[90vh] overflow-hidden shadow-2xl border border-white/10 flex flex-col" onClick={e => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex-shrink-0">
                {/* Elegant gradient overlay */}
                <div className={`absolute inset-0 ${'specialization' in selectedPastor && selectedPastor.specialization === 'Fellowship Ministry' ? 'bg-gradient-to-r from-sky-500/30 via-blue-500/20 to-sky-500/30' : 'bg-gradient-to-r from-blue-600/30 via-purple-600/20 to-blue-600/30'}`}></div>

                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                </div>

                {/* Close button */}
                <button onClick={() => setSelectedPastor(null)} className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 border border-white/20">
                  <XIcon className="w-6 h-6" />
                </button>

                {/* Pastor info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                  <div className="flex items-end gap-6">
                    {/* Pastor image circle */}
                    <div className="relative flex-shrink-0">
                      <div className={`absolute inset-0 rounded-full blur-xl ${'specialization' in selectedPastor && selectedPastor.specialization === 'Fellowship Ministry' ? 'bg-gradient-to-br from-sky-400 to-blue-400' : 'bg-gradient-to-br from-blue-400 to-purple-400'} opacity-60`}></div>
                      <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-white/20 bg-slate-800">
                        {selectedPastor.image ? <img src={selectedPastor.image} alt={selectedPastor.name} className="w-full h-full object-cover object-center" /> : <div className="w-full h-full flex items-center justify-center">
                            <div className="text-white text-3xl font-bold opacity-50">
                              {selectedPastor.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          </div>}
                      </div>
                    </div>

                    {/* Pastor info */}
                    <div className="flex-1 pb-2">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
                        {selectedPastor.name}
                      </h3>
                      <p className={`text-lg font-semibold ${'specialization' in selectedPastor && selectedPastor.specialization === 'Fellowship Ministry' ? 'text-sky-300' : 'text-blue-300'}`}>
                        {selectedPastor.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Tab Navigation */}
              <div className="relative border-b border-white/10 bg-slate-900/50 backdrop-blur-sm flex-shrink-0">
                <div className="flex items-center justify-center gap-2 px-8 pt-6 pb-0">
                  {/* Story Tab */}
                  <button onClick={() => setActiveTab('story')} className={`relative px-8 py-4 text-lg font-semibold transition-colors duration-300 ${activeTab === 'story' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}>
                    <div className="flex items-center gap-2">
                      <BookOpenIcon className="w-5 h-5" />
                      <span>Story</span>
                    </div>
                  </button>

                  {/* Gallery Tab */}
                  <button onClick={() => setActiveTab('gallery')} className={`relative px-8 py-4 text-lg font-semibold transition-colors duration-300 ${activeTab === 'gallery' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Gallery</span>
                    </div>
                  </button>
                </div>

                {/* Animated Tab Indicator */}
                <motion.div className={`absolute bottom-0 h-1 ${'specialization' in selectedPastor && selectedPastor.specialization === 'Fellowship Ministry' ? 'bg-gradient-to-r from-sky-500 to-blue-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'} rounded-full`} initial={false} animate={{
              left: activeTab === 'story' ? '50%' : '50%',
              x: activeTab === 'story' ? '-100%' : '0%',
              width: activeTab === 'story' ? '180px' : '200px'
            }} transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }} />
              </div>

              {/* Tab Content */}
              <div className="flex-1 overflow-hidden">
                <AnimatePresence mode="wait">
                  {activeTab === 'story' && <motion.div key="story" initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -20
              }} transition={{
                duration: 0.3
              }} className="h-full overflow-y-auto p-8 lg:p-12">
                      <div className="max-w-5xl mx-auto">
                        {/* Story Section */}
                        <div className="mb-10">
                          <div className="flex items-center gap-3 mb-6">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${'specialization' in selectedPastor && selectedPastor.specialization === 'Fellowship Ministry' ? 'bg-gradient-to-br from-sky-500 to-blue-500' : 'bg-gradient-to-br from-blue-600 to-purple-600'} shadow-lg`}>
                              <BookOpenIcon className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-3xl font-bold text-white">
                              {selectedPastor.name === headPastor.name ? "Founder's Story" : "Pastor's Story"}
                            </h4>
                          </div>

                          {/* Placeholder notice */}
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

                        {/* Ministry Focus */}
                        <div className={`rounded-2xl p-8 border-l-4 mb-10 ${'specialization' in selectedPastor && selectedPastor.specialization === 'Fellowship Ministry' ? 'bg-gradient-to-br from-sky-900/30 to-blue-900/30 border-sky-500' : 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-purple-500'} backdrop-blur-sm`}>
                          <div className="flex items-start gap-4">
                            <HeartIcon className={`w-7 h-7 flex-shrink-0 mt-1 ${'specialization' in selectedPastor && selectedPastor.specialization === 'Fellowship Ministry' ? 'text-sky-400' : 'text-purple-400'}`} />
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

                        {/* Testimonials Section */}
                        <div>
                          <div className="flex items-center gap-3 mb-6">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${'specialization' in selectedPastor && selectedPastor.specialization === 'Fellowship Ministry' ? 'bg-gradient-to-br from-sky-500 to-blue-500' : 'bg-gradient-to-br from-blue-600 to-purple-600'} shadow-lg`}>
                              <SparklesIcon className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-3xl font-bold text-white">
                              Testimonials
                            </h4>
                          </div>

                          {/* Testimonials Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div initial={{
                        opacity: 0,
                        y: 20
                      }} animate={{
                        opacity: 1,
                        y: 0
                      }} transition={{
                        delay: 0.1
                      }} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                              <p className="text-gray-300 italic mb-4 text-lg leading-relaxed">
                                "Pastor{' '}
                                {selectedPastor.name.split(' ')[selectedPastor.name.split(' ').length - 1]}
                                's ministry has transformed our community. Their
                                dedication and wisdom inspire us daily."
                              </p>
                              <p className="text-sm text-gray-400 font-semibold">
                                — Church Member
                              </p>
                            </motion.div>

                            <motion.div initial={{
                        opacity: 0,
                        y: 20
                      }} animate={{
                        opacity: 1,
                        y: 0
                      }} transition={{
                        delay: 0.2
                      }} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                              <p className="text-gray-300 italic mb-4 text-lg leading-relaxed">
                                "A true servant leader who leads by example and
                                brings people closer to God through authentic
                                faith."
                              </p>
                              <p className="text-sm text-gray-400 font-semibold">
                                — Ministry Partner
                              </p>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>}

                  {activeTab === 'gallery' && <motion.div key="gallery" initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -20
              }} transition={{
                duration: 0.3
              }} className="h-full overflow-y-auto p-8 lg:p-12">
                      <div className="max-w-6xl mx-auto">
                        {/* Gallery Header */}
                        <div className="flex items-center gap-3 mb-8">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${'specialization' in selectedPastor && selectedPastor.specialization === 'Fellowship Ministry' ? 'bg-gradient-to-br from-sky-500 to-blue-500' : 'bg-gradient-to-br from-blue-600 to-purple-600'} shadow-lg`}>
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <h4 className="text-3xl font-bold text-white">
                            Ministry Gallery
                          </h4>
                        </div>

                        {/* Placeholder notice */}
                        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-8 rounded-r-lg backdrop-blur-sm">
                          <p className="text-sm text-blue-200 font-semibold">
                            🖼️ Gallery images will be added soon
                          </p>
                        </div>

                        {/* Gallery Grid - 3 columns */}
                        <div className="grid grid-cols-3 gap-6 mb-10">
                          {placeholderGallery.map((img, index) => <motion.div key={index} initial={{
                      opacity: 0,
                      scale: 0.9
                    }} animate={{
                      opacity: 1,
                      scale: 1
                    }} transition={{
                      delay: index * 0.1
                    }} className="group relative aspect-square rounded-xl overflow-hidden bg-slate-700 border border-white/10">
                              <img src={img} alt={`Ministry moment ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.div>)}
                        </div>

                        {/* Ministry Highlights */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                          <h5 className="text-white font-bold text-2xl mb-6 flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${'specialization' in selectedPastor && selectedPastor.specialization === 'Fellowship Ministry' ? 'bg-gradient-to-br from-sky-500 to-blue-500' : 'bg-gradient-to-br from-blue-600 to-purple-600'}`}>
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            Ministry Highlights
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {['Leading weekly worship services', 'Mentoring emerging leaders', 'Community outreach programs', 'Biblical teaching and discipleship', 'Prayer and spiritual guidance', 'Youth and family ministry'].map((highlight, index) => <motion.div key={index} initial={{
                        opacity: 0,
                        x: -20
                      }} animate={{
                        opacity: 1,
                        x: 0
                      }} transition={{
                        delay: 0.1 * index
                      }} className="flex items-start gap-3">
                                <span className={`mt-1 ${'specialization' in selectedPastor && selectedPastor.specialization === 'Fellowship Ministry' ? 'text-sky-400' : 'text-blue-400'}`}>
                                  •
                                </span>
                                <span className="text-gray-300 text-lg">
                                  {highlight}
                                </span>
                              </motion.div>)}
                          </div>
                        </div>
                      </div>
                    </motion.div>}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
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
              <a href="/contact" className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
                Get in Touch
              </a>
              <a href="/" className="inline-block bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full transition-all duration-300">
                Back to Home
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
}