import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
import {
  ChurchIcon,
  UsersIcon,
  CalendarIcon,
  BookOpenIcon,
  XIcon,
  ArrowRightIcon,
  SparklesIcon } from
'lucide-react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
const sections = [
{
  icon: ChurchIcon,
  title: 'Our Churches',
  description:
  'Explore our four thriving congregations across Nueva Vizcaya, each with its unique character and mission. From Bantinan to Santa Fe, discover how we are building vibrant communities of faith.',
  link: '/churches',
  image: "/Web_Photo_Editor.webp",

  color: 'from-blue-600 to-blue-800'
},
{
  icon: UsersIcon,
  title: 'Our Pastors',
  description:
  "Meet our dedicated pastoral team leading with wisdom, compassion, and a heart for God's people. Learn about their journeys, their calling, and how they serve our community with excellence.",
  link: '/pastors',
  image: "/our_pastors.webp",

  color: 'from-purple-600 to-purple-800'
}];

const timelineEvents = [
{
  year: '2000-2005',
  title: 'The Foundation Years',
  description:
  'The seeds of ministry were planted as God stirred hearts for evangelism. Small prayer meetings began, and the vision for GEFMI started to take shape.',
  image: "/2005-2006_workers.webp",

  expandedDescription:
  'During these foundational years, God began stirring the hearts of faithful believers with a vision for ministry. Through intimate prayer meetings and Bible studies, the foundation was laid for what would become a powerful movement of faith. Early leaders sensed a calling to reach their communities with the Gospel, and small gatherings in homes created strong bonds of fellowship that established the core values guiding the ministry today.',
  additionalImages: ["/2021.webp", "/youth_camp.webp"]



},
{
  year: '2005-2010',
  title: 'Ministry Formation & Growth',
  description:
  'The ministry began to take shape with dedicated leaders emerging. Training programs started, and the movement expanded as more believers joined the cause.',
  image: "/508427998_10229270471927150_8636105212390871226_n.webp",

  expandedDescription:
  'As the movement grew, dedicated leaders emerged with specific gifts and callings. The vision became clearer, and organizational structures were put in place. Training programs began, laying groundwork for formal church planting efforts. The ministry experienced significant growth as more believers caught the vision, and outreach efforts multiplied, reaching new communities throughout the region.',
  additionalImages: ["/510467156_10229384954269137_3535047449563378281_n.webp", "/510467156_10229384954269137_3535047449563378281_n.webp"]



},
{
  year: '2010-2015',
  title: 'GEFMI Established',
  description:
  'The movement gained momentum, spreading the Gospel throughout the region. In 2015, GEFMI was officially founded, marking a new chapter in our journey.',
  image: "/CPTC_2011.webp",

  expandedDescription:
  'The ministry experienced remarkable expansion as believers multiplied and the Gospel reached new communities. The movement gained recognition throughout the region as a force for positive transformation. The official founding of GEFMI in 2015 marked a pivotal moment—with proper legal structure and clear organizational vision, the ministry was positioned for exponential growth. This milestone represented years of prayer, preparation, and faithful service.',
  additionalImages: ["/Hongkong_Etc_109.webp", "/C360_2013-12-29-13-34-58-656.webp"]



},
{
  year: '2015-2020',
  title: 'Church Planting Era',
  description:
  'Our mother church was planted in Bantinan (2018), followed by Dalton Church (2019) and Atbu Church (2020). Three vibrant congregations established.',
  image: "/132028860_10218367317555105_8842590476334776034_n.webp",

  expandedDescription:
  'This period saw the vision come to life through strategic church planting. Bantinan Church became our spiritual home and launching pad for future plants. Dalton Church followed with a focus on family ministry, creating a welcoming environment for all ages. Despite the challenges of 2020, Atbu Church was planted with a vision to reach young people through contemporary worship and relevant teaching, becoming a catalyst for youth revival across the region.',
  additionalImages: ["/20151029_205500.webp", "/DSC07128.webp"]



},
{
  year: '2020-2025',
  title: 'Regional Impact & Vision Forward',
  description:
  'Santa Fe Church (2021) became our fastest-growing congregation. By 2023, GEFMI reached over 500 members. Now we continue expanding our reach and transforming communities.',
  image: "/brazil.webp",

  expandedDescription:
  'Santa Fe Church experienced remarkable growth from its inception, demonstrating the power of the Gospel to bring hope and renewal. By 2023, GEFMI had become a significant presence throughout Nueva Vizcaya with over 500 active members across four churches. Social programs, youth initiatives, and outreach efforts transformed lives. Looking forward, we remain committed to our founding vision with plans for new church plants, expanded ministries, and greater regional impact. The best is yet to come!',
  additionalImages: [
  'https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80']

}];

export function AboutPage() {
  const [expandedYear, setExpandedYear] = useState<string | null>(null);
  const [showStoryModal, setShowStoryModal] = useState(false);
  useSmoothScroll({
    lerp: 0.12,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 0.8,
    touchMultiplier: 1.5
  });
  // Lock body scroll ONLY when modal is open (not for timeline expansion)
  useEffect(() => {
    if (showStoryModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showStoryModal]);
  // GEFMI Story content
  const gefmiStory = {
    shortStory:
    'Gait Evangelical Fellowship Ministry Inc. (GEFMI) was officially registered on May 17, 2004, at the Security and Exchange Commission (SEC) Baguio City Branch. Born as a seed ministry inspired by the late Rev. PrinceBen C. Hernandez, GEFMI began when four small groups from Bantinan, Kiskis, Aritao, and Villa Flores congregated as incorporators with the blessing of Rev. Paul Hernandez.',
    fullStory: `Gait Evangelical Fellowship Ministry Inc. (GEFMI) was officially registered on May 17, 2004, at the Security and Exchange Commission (SEC) Baguio City Branch. Born as a seed ministry inspired by the late Rev. PrinceBen C. Hernandez, the founding director of the Fellowship for Rural Evangelization and Expansion (FREE Mission Philippines), GEFMI began when four small groups from Bantinan, Kiskis, Aritao, and Villa Flores fellowships congregated themselves as incorporators with the blessing of the new FREE Mission Director, Rev. Paul Hernandez.

The group rented an old house at the Poblacion of Aritao, Nueva Vizcaya, serving as the main office and training center. Three full-time pastors formed the initial team: Pas. Movel B. Velasco, who became the Executive Director, Pas. Hermogenes A. Andrada Jr., and Pas. Rolando P. Abalos. This humble beginning laid the foundation for what would become a thriving ministry reaching across multiple provinces.

In 2005, before the first annual general assembly, Pas. Rudy C. Tindaan and Sis. Letecia B. Ligmayo became among the first to finish training at the Christian Pastoral Training Center (CPTC) and were assimilated to the group as new workers. The first annual general assembly was held at Busilac, Bayombong, Nueva Vizcaya at Villa Margarita Resort, where Pas. Velasco, Pas. Marquez Tubal, and Pas. Hermogenes A. Andrada Jr. were ordained. Mass baptism was also highlighted with 52 candidates for water baptism.

The small group was blessed to multiply as most graduates from the training center became missionaries, opening other outreaches in Nueva Vizcaya, Nueva Ecija, Ifugao, and Aurora provinces. GEFMI started to network and connect with national groups of churches such as FREE Mission Philippines and international networks such as Challenge International Ministries and Global Vision School. Annual baptism in general had been blessed with 50-100 souls added to the adults being baptized. Tribal and urban ministries were catapulted into a more challenging phase that required the leadership to work hard together.

On May 29, 2005, Pas. Rolando P. Abalos was ordained. In June, Pas. Luisito S. Silan, one among the CPTC first graduates, and in December, Pas. Juni Balwang, also a special student at CPTC, joined GEFMI as affiliates. During this year, there were six existing congregations including the two affiliated churches.

In 2006, new outreaches were opened as Kiskis outreached Capiniaan and Putlan opened Manicla in San Jose City. The second annual general assembly was scheduled at Villa Margarita on May 20, followed by mass baptism. The CPTC continued making trainings. During this year, Pas. Marquez Tubal died of colon cancer. Rev. Paul C. Hernandez visited GEFMI's main office, which reopened the fellowship from the national FREE Mission ministry as a network. In return, GEFMI released the Aritao Congregation under Pas. Hermogenes A. Andrada Jr. and its outreach Solano to the national FREE Mission for goodwill.

In 2007, new workers were added, namely Sis. Rebecca L. Abanse and Domingo V. Terre Jr. Villa Flores outreached Atbu, where Sis. Letecia B. Ligmayo and Sis. Rebecca L. Abanse were ministering. Manicla in San Jose City was also considered as a new organized church where Pas. Luisito Silan opened. Pas. Domingo V. Terre Jr. served as the new pastor of Putlan Church. The training center had its third batch with 10 new students enrolled.

In January 2008, the fourth batch of CPTC started with 24 enrollees, but only eight continued. On March 19, Manicla Church celebrated its first church anniversary. The training center continued to equip new workers for ministry, and new congregations were established as the ministry expanded throughout the region.

During this period, Ammoweg Congregation and all its outreaches were officially cleared for their final affiliation at GEFMI, while Cauco and Salazar's congregation were probationally received for fellowship. New workers were also accepted for probationary licensure, namely Bro. Pedro M. Malayo Jr., Bro. Leonard Clemens L. Cadoy, Bro. Levito P. Naabus, Bro. Carlos M. Basilio, and Bro. Lito Baguiwan.

More challenges came when GEFMI started to minister to Overseas Filipino Workers and became part of the international missionary effort for the 10/40 window, particularly in Asia. This expansion demonstrated the ministry's commitment to reaching beyond local boundaries and impacting lives globally.

On December 20, 2013, during the Board of Directors and Pastors joint-regular annual meeting, Rev. Luisito S. Silan was chosen to be the new Executive Director of GEFMI, as per request also of Rev. Movel B. Velasco for health reasons. Rev. Velasco automatically became the Chairman of the Board as provided by GEFMI's general policies, returned as the senior pastor of Bantinan Congregation with all of her three daughter churches, and remained the Training Director of CPTC. Rev. Silan accepted the task with dedication and vision.

Thus, the Acts of God in His Church continue as we continue to move on. From our humble beginnings in 2004 to our current network of churches and ministries, GEFMI remains committed to spreading the Gospel, training leaders, and transforming communities through the power of Jesus Christ. Mabuhay at purihin ang Panginoon.`
  };
  return (
    <div className="w-full min-h-screen bg-dark-premium text-slate-100">
      <Navbar />
      <BackButton to="/" label="Back to Home" />

      {/* Premium Hero Section - Two Link Blocks */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-[100px] animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-[100px] animate-pulse"
            style={{
              animationDelay: '1s'
            }}>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Page Title */}
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
              duration: 0.8
            }}
            className="text-center mb-12">
            
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 px-4 py-1.5 rounded-full mb-4 shadow-sm backdrop-blur-sm">
              <SparklesIcon className="w-4 h-4 text-blue-400" />
              <span className="text-xs md:text-sm font-semibold text-blue-300 tracking-wide uppercase">
                About GEFMI
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight font-display">
              Our Journey &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                Community
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light">
              Discover our story, our dedicated pastors, and our network of thriving churches
            </p>
          </motion.div>

          {/* Two Refined Interactive Pillar Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Our Pastors Pillar Card */}
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
                duration: 0.7,
                delay: 0.2
              }}>
              <div className="group relative min-h-[440px] md:h-[460px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/10 flex flex-col justify-between p-6 sm:p-7 md:p-9 bg-slate-900">
                {/* Background Image with Zoom & Dark Gradient */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="/our_pastors.webp"
                    alt="Our Pastors"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/30"></div>
                </div>

                {/* Top Row: Category Badge + Counter Pill */}
                <div className="relative z-10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-purple-200 text-xs font-semibold tracking-wide uppercase shadow-sm">
                    <UsersIcon className="w-3.5 h-3.5 text-purple-400" />
                    <span>Spiritual Leadership</span>
                  </div>
                  <div className="bg-purple-500/25 backdrop-blur-md px-3 py-1 rounded-full border border-purple-400/40 text-purple-200 text-xs font-medium">
                    15+ Pastors & Leaders
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 space-y-4">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300 font-display">
                      Our Pastors
                    </h2>
                    <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-lg font-light">
                      Meet the devoted shepherds and ministry leaders guiding our congregation with faith, wisdom, and compassionate pastoral care.
                    </p>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg text-slate-300 border border-white/10">
                      Lead & Associate Pastors
                    </span>
                    <span className="text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg text-slate-300 border border-white/10">
                      Fellowship Pastors
                    </span>
                    <span className="text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg text-slate-300 border border-white/10">
                      Evangelism & Youth
                    </span>
                  </div>

                  {/* Dedicated CTA Button */}
                  <div className="pt-2">
                    <Link
                      to="/pastors"
                      className="inline-flex items-center gap-2.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.03] active:scale-95 group/btn"
                    >
                      <span>Meet Our Pastoral Team</span>
                      <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Our Churches Pillar Card */}
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
                duration: 0.7,
                delay: 0.35
              }}>
              <div className="group relative min-h-[440px] md:h-[460px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/10 flex flex-col justify-between p-6 sm:p-7 md:p-9 bg-slate-900">
                {/* Background Image with Zoom & Dark Gradient */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="/Web_Photo_Editor-1.webp"
                    alt="Our Churches"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/30"></div>
                </div>

                {/* Top Row: Category Badge + Counter Pill */}
                <div className="relative z-10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-blue-200 text-xs font-semibold tracking-wide uppercase shadow-sm">
                    <ChurchIcon className="w-3.5 h-3.5 text-blue-400" />
                    <span>Faith Communities</span>
                  </div>
                  <div className="bg-blue-500/25 backdrop-blur-md px-3 py-1 rounded-full border border-blue-400/40 text-blue-200 text-xs font-medium">
                    11 Congregations
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 space-y-4">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300 font-display">
                      Our Churches
                    </h2>
                    <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-lg font-light">
                      Explore our thriving network of local congregations and fellowship branches established across Nueva Vizcaya and beyond.
                    </p>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg text-slate-300 border border-white/10">
                      Mother Church (Bantinan)
                    </span>
                    <span className="text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg text-slate-300 border border-white/10">
                      Outreach Centers
                    </span>
                    <span className="text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg text-slate-300 border border-white/10">
                      Sunday Services & Bible Studies
                    </span>
                  </div>

                  {/* Dedicated CTA Button */}
                  <div className="pt-2">
                    <Link
                      to="/churches"
                      className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-sky-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.03] active:scale-95 group/btn"
                    >
                      <span>Explore Our Churches</span>
                      <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GEFMI Story Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-900/40 relative overflow-hidden">
        {/* Glow indicators */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none animate-glow-slow" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none animate-glow-slower" />

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
            }}>
            
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-6 py-3 rounded-full mb-6 text-blue-400">
                <BookOpenIcon className="w-5 h-5" />
                <span className="font-semibold text-xs tracking-widest uppercase font-display">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
                The{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400">
                  GEFMI Story
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                A journey of faith, growth, and transformation
              </p>
            </div>

            {/* Story Layout - Image and Text Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2
                }}
                viewport={{
                  once: true
                }}
                className="relative">
                
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                  <img
                    src="/IMG_2748.webp"
                    alt="GEFMI Story"
                    className="w-full h-[280px] sm:h-[400px] md:h-[500px] object-cover" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>

                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                    <div className="bg-slate-900/70 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-1.5 sm:mb-2">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg flex-shrink-0">
                          <BookOpenIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <h3 className="text-lg sm:text-2xl font-bold text-white font-display">
                          From Vision to Reality
                        </h3>
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm">
                        Discover how God transformed a small prayer meeting into
                        a thriving movement
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.4
                }}
                viewport={{
                  once: true
                }}>
                
                <div className="bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-10 border border-white/10">
                  <p className="text-lg text-slate-300 leading-relaxed mb-8">
                    {gefmiStory.shortStory}
                  </p>

                  {/* View More Button */}
                  <Link
                    to="/gefmi-story"
                    data-cursor-text="READ"
                    className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group font-display">
                    
                    <span className="text-lg">Read Full Story</span>
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section with Click-to-Expand */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
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
            className="text-center mb-16">
            
            <div className="inline-flex items-center gap-3 bg-blue-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30 mb-6">
              <CalendarIcon className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-semibold">Our Journey</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Timeline
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to a thriving movement of faith
            </p>
            <p className="text-sm text-blue-300 mt-4">
              ✨ Click on each card to explore more
            </p>
          </motion.div>
          {/* Timeline */}
          <div className="relative">
            {/* Center line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>
            {/* Timeline events */}
            <div className="space-y-12 md:space-y-24">
              {timelineEvents.map((event, index) =>
              <motion.div
                key={event.year}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1
                }}
                viewport={{
                  once: true
                }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                  {/* Content */}
                  <motion.div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                  animate={{
                    scale: expandedYear === event.year ? 1.02 : 1
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30
                  }}>
                  
                    <button
                    onClick={() =>
                    setExpandedYear(
                      expandedYear === event.year ? null : event.year
                    )
                    }
                    className="w-full text-left">
                    
                      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 group cursor-pointer">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                          {/* Year badge on image */}
                          <div className="absolute top-4 left-4">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-4 py-2 rounded-full text-lg shadow-lg">
                              {event.year}
                            </div>
                          </div>
                        </div>
                        {/* Content */}
                        <div className="p-6">
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                            {event.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed mb-4">
                            {event.description}
                          </p>
                          {/* Expanded content */}
                          <AnimatePresence>
                            {expandedYear === event.year &&
                          <motion.div
                            initial={{
                              opacity: 0,
                              height: 0
                            }}
                            animate={{
                              opacity: 1,
                              height: 'auto'
                            }}
                            exit={{
                              opacity: 0,
                              height: 0
                            }}
                            transition={{
                              duration: 0.4,
                              ease: [0.4, 0, 0.2, 1]
                            }}
                            className="border-t border-white/10 pt-4 mt-4 overflow-hidden">
                            
                                <p className="text-gray-200 leading-relaxed mb-4 text-sm">
                                  {event.expandedDescription}
                                </p>
                                {/* Additional images grid */}
                                <div className="grid grid-cols-2 gap-3">
                                  {event.additionalImages.map(
                                (img, imgIndex) =>
                                <motion.div
                                  key={imgIndex}
                                  initial={{
                                    opacity: 0,
                                    scale: 0.8
                                  }}
                                  animate={{
                                    opacity: 1,
                                    scale: 1
                                  }}
                                  transition={{
                                    duration: 0.3,
                                    delay: imgIndex * 0.1
                                  }}
                                  className="relative h-24 rounded-lg overflow-hidden">
                                  
                                        <img
                                    src={img}
                                    alt={`${event.title} - Image ${imgIndex + 1}`}
                                    className="w-full h-full object-cover" />
                                  
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                      </motion.div>

                              )}
                                </div>
                              </motion.div>
                          }
                          </AnimatePresence>
                          {/* Click indicator */}
                          <div className="mt-4 flex items-center justify-center gap-2 text-blue-400 text-sm font-semibold">
                            <span>
                              {expandedYear === event.year ?
                            'Click to collapse' :
                            'Click to expand'}
                            </span>
                            <motion.svg
                            animate={{
                              rotate: expandedYear === event.year ? 180 : 0
                            }}
                            transition={{
                              duration: 0.3
                            }}
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            
                              <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7" />
                            
                            </motion.svg>
                          </div>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                  {/* Center dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="relative">
                      <motion.div
                      animate={{
                        scale: expandedYear === event.year ? 1.5 : 1
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30
                      }}
                      className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 ring-4 ring-slate-900">
                    </motion.div>
                      <div className="absolute inset-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>
                  {/* Mobile dot */}
                  <div className="md:hidden absolute left-0 top-0">
                    <div className="relative">
                      <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
                    </div>
                  </div>
                  {/* Spacer for alignment */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              )}
            </div>
          </div>
          {/* Future vision card */}
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
              duration: 0.8,
              delay: 0.3
            }}
            viewport={{
              once: true
            }}
            className="mt-20 max-w-4xl mx-auto">
            
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-12 border border-blue-400/30 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                The Journey{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Continues
                </span>
              </h3>
              <p className="text-xl text-gray-200 leading-relaxed">
                As we look to the future, we remain committed to our mission of
                spreading the Gospel, planting churches, and transforming
                communities. The best is yet to come!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 md:px-12 bg-slate-950/60 relative overflow-hidden border-t border-white/5">
        <div className="max-w-6xl mx-auto">
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
            
            {/* Organization Vision Image */}
            <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group">
              <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-transparent transition-colors duration-500"></div>
              <img
                src="/584910022_2006705080177987_7820871403514813771_n.webp"
                alt="GEFMI Vision, Mission, and Goals - Be Involved, Save Other Souls"
                className="w-full h-auto object-cover" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-400 mb-4 font-display">
                  Our Mission
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  To proclaim the Gospel of Jesus Christ to rural communities
                  across the Philippines, establishing vibrant faith communities
                  and equipping believers to transform their world through the
                  power of God's Word. We are committed to planting churches,
                  establishing church-based Bible Training Centers, and serving
                  communities with compassion and excellence through
                  volunteerism activated by God's grace and provision.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-400 mb-4 font-display">
                  Our Vision
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  To see every rural community in the Philippines transformed by
                  the Gospel, with thriving churches in every neighborhood,
                  empowered believers in every sphere of influence, and the love
                  of Christ evident in every life we touch. We envision a
                  movement of faith reaching out to rural people for Christ,
                  transcending borders and generations, as we fulfill our
                  calling to "Save Other Souls."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>);

}