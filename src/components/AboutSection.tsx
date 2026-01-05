import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon, ChevronLeftIcon, ChevronRightIcon, MapPinIcon, CalendarIcon, SparklesIcon, ArrowRightIcon, BookOpenIcon, HeartIcon, UsersIcon, TargetIcon, EyeIcon, XIcon } from 'lucide-react';
const churches = [{
  name: 'Bantinan Church',
  image: "/old_bantinan.jpg",
  year: '1992',
  description: 'Our mother church and spiritual home, where it all began with a vision to transform communities through faith.',
  route: '/churches/bantinan',
  featured: true
}, {
  name: 'Kiskis Church',
  image: "/kiskis.jpg",
  year: '2018',
  description: 'A vibrant community bringing the Gospel to life through worship, fellowship, and dedicated service to our neighbors.',
  route: '/churches/kiskis'
}, {
  name: 'Tactac Church',
  image: "/Tactac.jpg",
  year: '2019',
  description: 'A growing congregation dedicated to spreading hope and building lasting relationships within the Tactac community.',
  route: '/churches/tactac'
}, {
  name: 'Atbu Church',
  image: "/atbu.jpg",
  year: '2020',
  description: 'Empowering the next generation with dynamic ministry and contemporary worship experiences that transform lives.',
  route: '/churches/atbu'
}];
const headPastor = {
  name: 'Rev. Movel B. Velasco',
  title: 'Head Pastor & Founder',
  image: "/517112793_10229821241296040_7747544348507949052_n.jpg",
  description: 'Pioneer and founder of GEFMI, leading the ministry with unwavering vision and dedication to spreading the Gospel and establishing churches across the region.',
  specialization: 'Visionary Leadership'
};
const pastors = [{
  name: 'Jerry Nobres',
  displayName: 'Ptr. Jerry Nobres',
  church: 'Beti Church',
  image: "/038c6588-1445-473e-9640-378b702bbc97.jpg",
  specialization: 'Teaching Ministry',
  shortBio: 'Known for his passionate preaching and deep love for Scripture, inspiring believers to live boldly for Christ.'
}, {
  name: 'Rudy Tindaan',
  displayName: 'Ptr. Rudy Tindaan',
  church: 'Atbu Church',
  image: "/Ptr_Rudy-removebg-preview.png",
  specialization: 'Pastoral Care',
  shortBio: 'With a gift for pastoral care and counseling, walking alongside believers in their spiritual journey.'
}, {
  name: 'Moris Velasco',
  displayName: 'Ptr. Moris Velasco',
  church: 'Villa Flores Church',
  image: "/514414300_10229639822320679_5865684077610383712_n.jpg",
  specialization: 'Church Planting',
  shortBio: "With a heart for evangelism and church planting, passionate about reaching the lost and expanding God's Kingdom."
}, {
  name: 'Vergilio Lamsis',
  displayName: 'Ptr. Vergilio Lamsis',
  church: 'Bantinan Church',
  image: "/561149741_122184417068449557_3419564386070091008_n.jpg",
  specialization: 'Worship & Prayer',
  shortBio: 'A dynamic leader with a passion for worship and prayer, leading congregations into powerful encounters with God.'
}, {
  name: 'Roves Abalos',
  displayName: 'Ptr. Roves Abalos',
  church: "Orchid's Church",
  image: "/521953240_122169464594567446_7082549070398521511_n.jpg",
  specialization: 'Leadership Development',
  shortBio: 'Dedicated to equipping the next generation, combining biblical truth with practical application.'
}, {
  name: 'June Matedio',
  displayName: 'Ptr. June Matedio',
  church: 'Upper Kiskis Church',
  image: "/june_matedio-removebg-preview.png",
  specialization: 'Youth Ministry',
  shortBio: 'A gifted communicator with a heart for youth ministry, connecting with the next generation through relevant teaching.'
}, {
  name: 'Jether Hulay',
  displayName: 'Ptr. Jether Hulay',
  church: 'Yabbi Dupax Del Sur',
  image: "/faf3f250-5413-4599-9b64-8c9ab0c305c3-removebg-preview.png",
  specialization: 'Evangelism',
  shortBio: 'A dedicated servant with a heart for evangelism and community transformation, reaching the lost with the Gospel.'
}, {
  name: 'Louie Silan',
  displayName: 'Ptr. Louie Silan',
  church: 'Fellowship Pastor',
  image: "/496941650_9986446918087623_5321505900457071114_n.jpg",
  specialization: 'Fellowship Ministry',
  shortBio: 'Passionate about creating welcoming environments where believers can connect, grow, and support one another in faith.'
}];
const gefmiStory = {
  shortStory: 'Gait Evangelical Fellowship Ministry Inc. (GEFMI) was officially registered on May 17, 2004, at the Security and Exchange Commission (SEC) Baguio City Branch. Born as a seed ministry inspired by the late Rev. PrinceBen C. Hernandez, GEFMI began when four small groups from Bantinan, Kiskis, Aritao, and Villa Flores congregated as incorporators with the blessing of Rev. Paul Hernandez.',
  fullStory: `Gait Evangelical Fellowship Ministry Inc. (GEFMI) was officially registered on May 17, 2004, at the Security and Exchange Commission (SEC) Baguio City Branch. Born as a seed ministry inspired by the late Rev. PrinceBen C. Hernandez, the founding director of the Fellowship for Rural Evangelization and Expansion (FREE Mission Philippines), GEFMI began when four small groups from Bantinan, Kiskis, Aritao, and Villa Flores fellowships congregated themselves as incorporators with the blessing of the new FREE Mission Director, Rev. Paul Hernandez.

The group rented an old house at the Poblacion of Aritao, Nueva Vizcaya, serving as the main office and training center. Three full-time pastors formed the initial team: Pas. Movel B. Velasco, who became the Executive Director, Pas. Hermogenes A. Andrada Jr., and Pas. Rolando P. Abalos. This humble beginning laid the foundation for what would become a thriving ministry reaching across multiple provinces.

From our humble beginnings in 2004 to our current network of churches and ministries, GEFMI remains committed to spreading the Gospel, training leaders, and transforming communities through the power of Jesus Christ.`
};
export const AboutSection = () => {
  const [showStoryModal, setShowStoryModal] = useState(false);
  useEffect(() => {
    if (showStoryModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showStoryModal]);
  return <section className="relative w-full bg-white overflow-hidden">
      {/* Our Foundation Section */}
      <div className="relative w-full py-20 md:py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-amber-50/30" />
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-200/50 mb-6">
              <SparklesIcon className="w-5 h-5 text-amber-700" />
              <span className="text-amber-900 font-semibold tracking-wide">
                Our Foundation
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
              From{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600">
                Vision
              </span>{' '}
              to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600">
                Reality
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A journey of faith, purpose, and transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/40 via-amber-300/20 to-amber-400/40 rounded-3xl blur-3xl scale-105 opacity-60" />

                <div className="relative bg-gradient-to-br from-amber-50 via-white to-gray-50 p-6 md:p-8 rounded-3xl shadow-2xl border border-amber-100/50">
                  <div className="absolute inset-6 md:inset-8 border-2 border-amber-200/30 rounded-2xl pointer-events-none" />

                  <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-amber-300/50 rounded-tl-xl" />
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-300/50 rounded-tr-xl" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-amber-300/50 rounded-bl-xl" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-amber-300/50 rounded-br-xl" />

                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 rounded-2xl shadow-inner">
                    <div className="relative overflow-hidden rounded-xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-400">
                      <img src="/old_bantinan.jpg" alt="GEFMI Mother Church" className="w-full h-auto rounded-xl" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="mt-6 text-center">
                      <p className="text-gray-800 font-serif text-2xl md:text-3xl font-semibold mb-2">
                        GEFMI Mother Church
                      </p>
                      <div className="flex items-center justify-center gap-2 text-gray-600 mb-3">
                        <CalendarIcon className="w-4 h-4" />
                        <p className="text-base font-medium">
                          Established 2015
                        </p>
                      </div>
                      <div className="pt-3 border-t border-gray-300">
                        <p className="text-sm text-gray-500 italic">
                          Where it all began
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-md">
                      <TargetIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Our Mission
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        To proclaim the Gospel of Jesus Christ, establish
                        vibrant faith communities, and equip believers to
                        transform their world through the power of God's Word.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-md">
                      <EyeIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Our Vision
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        To see every community transformed by the Gospel, with
                        thriving churches in every neighborhood and the love of
                        Christ evident in every life we touch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button onClick={() => setShowStoryModal(true)} className="group relative w-full bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-left">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-md">
                        <BookOpenIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Our Story
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {gefmiStory.shortStory.substring(0, 120)}...
                        </p>
                        <div className="inline-flex items-center gap-2 text-amber-700 font-semibold group-hover:gap-3 transition-all duration-300">
                          <span>Read Full Story</span>
                          <ArrowRightIcon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              <div className="pt-4">
                <Link to="/about" className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="text-base">Discover Our Full Journey</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Modal */}
      <AnimatePresence>
        {showStoryModal && <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={() => setShowStoryModal(false)}>
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-white/10 flex flex-col" onClick={e => e.stopPropagation()}>
              <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/20 to-pink-600/30" />

                <button onClick={() => setShowStoryModal(false)} className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 border border-white/20">
                  <XIcon className="w-6 h-6" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                      <BookOpenIcon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-1">
                        The GEFMI Story
                      </h3>
                      <p className="text-blue-300 text-lg font-semibold">
                        A Journey of Faith & Transformation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-8 md:p-12">
                <div className="prose prose-lg prose-invert max-w-none">
                  {gefmiStory.fullStory.split('\n\n').map((paragraph, index) => <p key={index} className="text-gray-300 leading-relaxed mb-6 text-lg">
                        {paragraph}
                      </p>)}
                </div>

                <div className="mt-8 text-center">
                  <button onClick={() => setShowStoryModal(false)} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>}
      </AnimatePresence>

      {/* Church Expansion Section */}
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-50 py-32 px-6 md:px-12">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-center mb-32">
            <div className="flex items-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-300"></div>
              <div className="relative">
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-amber-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-300"></div>
            </div>
          </div>

          <div>
            <div className="text-center mb-20">
              <div className="inline-block mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-amber-500/20 to-amber-400/20 blur-xl"></div>
                  <div className="relative bg-gradient-to-r from-amber-50 to-stone-50 px-8 py-4 rounded-2xl border border-amber-200/50 shadow-lg">
                    <p className="text-sm font-semibold text-amber-800 tracking-[0.2em] uppercase">
                      Our Expansion
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-light text-stone-900 mb-6 tracking-tight leading-tight">
                Four{' '}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700">
                  Communities
                </span>
                <br />
                <span className="text-4xl md:text-5xl lg:text-6xl text-stone-600">
                  One Mission
                </span>
              </h3>
              <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
                From one foundation, a movement of faith has flourished across
                the region
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
              {churches.filter(c => c.featured).map(church => <div key={church.name} className="lg:col-span-7 group relative">
                    <Link to={church.route} className="block h-full">
                      <div className="relative h-full min-h-[600px] lg:min-h-[700px] overflow-hidden rounded-3xl bg-stone-900">
                        <div className="absolute inset-0 shadow-2xl"></div>
                        <div className="absolute inset-0 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]"></div>

                        <div className="absolute inset-0 overflow-hidden">
                          <img src={church.image} alt={church.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <div className="absolute top-8 left-8">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 blur-lg opacity-60"></div>
                            <div className="relative bg-gradient-to-br from-amber-50 via-white to-amber-50 px-6 py-3 rounded-2xl border-2 border-amber-300/50 shadow-2xl backdrop-blur-sm">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-bold text-amber-900 tracking-wider">
                                  EST. {church.year}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-12">
                          <div>
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
                              <SparklesIcon className="w-4 h-4 text-amber-300" />
                              <span className="text-xs font-semibold text-white tracking-wider uppercase">
                                Mother Church
                              </span>
                            </div>

                            <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
                              {church.name}
                            </h4>

                            <p className="text-lg md:text-xl text-stone-200 leading-relaxed mb-8 max-w-2xl">
                              {church.description}
                            </p>

                            <div className="inline-flex items-center gap-3 bg-white hover:bg-amber-50 text-stone-900 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 group-hover:scale-105 shadow-2xl">
                              <span className="text-base tracking-wide">
                                Explore Our Story
                              </span>
                              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>)}

              <div className="lg:col-span-5 grid grid-cols-1 gap-8 lg:gap-10">
                {churches.filter(c => !c.featured).map(church => <div key={church.name} className="group relative">
                      <Link to={church.route} className="block h-full">
                        <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl bg-stone-900">
                          <div className="absolute inset-0 shadow-xl"></div>

                          <div className="absolute inset-0 overflow-hidden">
                            <img src={church.image} alt={church.name} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600" />
                          </div>

                          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-stone-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                          <div className="absolute top-5 right-5">
                            <div className="relative">
                              <div className="absolute inset-0 bg-amber-400 blur-md opacity-40"></div>
                              <div className="relative bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl border border-amber-200/50 shadow-lg">
                                <span className="text-xs font-bold text-amber-900 tracking-wide">
                                  {church.year}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                            <div>
                              <h4 className="text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight">
                                {church.name}
                              </h4>

                              <p className="text-sm lg:text-base text-stone-200 leading-relaxed mb-5 line-clamp-2">
                                {church.description}
                              </p>

                              <div className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                <span className="tracking-wide">
                                  Discover More
                                </span>
                                <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                                  <ArrowRightIcon className="w-4 h-4" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>)}
              </div>
            </div>

            <div className="mt-20">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-200/20 via-amber-300/20 to-amber-200/20 blur-2xl"></div>

                <div className="relative bg-gradient-to-br from-white via-amber-50/30 to-white rounded-3xl p-10 lg:p-12 border border-amber-200/30 shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                    <motion.div whileHover={{
                    scale: 1.05
                  }} transition={{
                    type: 'spring',
                    stiffness: 300
                  }} className="text-center">
                      <div className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-700 to-amber-900 mb-2">
                        11
                      </div>
                      <div className="text-sm font-semibold text-stone-600 tracking-wider uppercase">
                        Churches
                      </div>
                    </motion.div>
                    <motion.div whileHover={{
                    scale: 1.05
                  }} transition={{
                    type: 'spring',
                    stiffness: 300
                  }} className="text-center">
                      <div className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-700 to-amber-900 mb-2">
                        21+
                      </div>
                      <div className="text-sm font-semibold text-stone-600 tracking-wider uppercase">
                        Years
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pastors Section */}
      <div className="relative w-full bg-gradient-to-b from-gray-900 via-slate-900 to-black py-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">
                Leadership
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              OUR{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                PASTORS
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Dedicated leaders serving with passion and purpose
            </p>
          </div>

          {/* Head Pastor */}
          <div className="mb-20">
            <div className="relative bg-gradient-to-br from-slate-900/90 to-black/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute top-0 left-0 w-40 h-40 border-t-4 border-l-4 border-blue-400 rounded-tl-3xl opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 border-b-4 border-r-4 border-purple-400 rounded-br-3xl opacity-50"></div>

              <div className="relative p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <div className="flex flex-col items-center lg:items-start justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                    <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-500">
                      <img src={headPastor.image} alt={headPastor.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" style={{
                      objectPosition: 'center 25%'
                    }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-6">
                  <div className="inline-flex items-center gap-2 self-start">
                    <SparklesIcon className="w-5 h-5 text-yellow-400" />
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                      {headPastor.title}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight leading-tight">
                      {headPastor.name}
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 self-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-300 text-sm font-semibold">
                      {headPastor.specialization}
                    </span>
                  </div>

                  <p className="text-gray-200 leading-relaxed text-lg">
                    {headPastor.description}
                  </p>

                  <Link to="/pastors" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl self-start group">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Associate Pastors */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Pastors
                </span>
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Dedicated servants leading our churches with excellence
              </p>
            </div>

            {/* Desktop: Continuous Carousel with Hover Pause */}
            <div className="hidden lg:block relative overflow-hidden group/carousel">
              <motion.div className="flex gap-6" animate={{
              x: [0, -2560]
            }} transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 60,
                ease: 'linear'
              }
            }} style={{
              animationPlayState: 'running'
            }} whileHover={{
              animationPlayState: 'paused'
            }}>
                {[...pastors, ...pastors].map((pastor, index) => <div key={`${pastor.name}-${index}`} className="group flex-shrink-0 w-80">
                    <div className="relative h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30 rounded-2xl blur-2xl transition-all duration-500"></div>
                      <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border border-white/10 group-hover:border-purple-400/50 transition-all duration-500 h-full flex flex-col">
                        <div className="relative h-80 overflow-hidden">
                          {pastor.image ? <>
                              <img src={pastor.image} alt={pastor.displayName} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                            </> : <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/30 to-purple-900/30">
                              <div className="text-white text-6xl font-bold opacity-30">
                                {pastor.name.split(' ').map(n => n[0]).join('')}
                              </div>
                            </div>}
                        </div>
                        <div className="p-5 flex-1 flex flex-col justify-center bg-gradient-to-br from-slate-900/90 to-black/90 backdrop-blur-sm">
                          <h4 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                            {pastor.displayName}
                          </h4>
                          <p className="text-sm text-purple-300 font-semibold">
                            {pastor.church}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>)}
              </motion.div>
            </div>

            {/* Mobile/Tablet: Horizontal Scroll */}
            <div className="lg:hidden relative">
              <div className="overflow-x-auto scrollbar-hide -mx-4 px-4" style={{
              scrollSnapType: 'x mandatory'
            }}>
                <div className="flex gap-4 pb-4">
                  {pastors.map(pastor => <div key={pastor.name} className="group flex-shrink-0 w-[280px] md:w-[320px]" style={{
                  scrollSnapAlign: 'start'
                }}>
                      <div className="relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 active:from-blue-500/20 active:via-purple-500/20 active:to-pink-500/20 rounded-2xl blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border border-white/10 active:border-purple-400/50 transition-all duration-500 h-full flex flex-col">
                          <div className="relative h-72 md:h-80 overflow-hidden">
                            {pastor.image ? <>
                                <img src={pastor.image} alt={pastor.displayName} className="w-full h-full object-cover transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                              </> : <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/30 to-purple-900/30">
                                <div className="text-white text-5xl font-bold opacity-30">
                                  {pastor.name.split(' ').map(n => n[0]).join('')}
                                </div>
                              </div>}
                          </div>
                          <div className="p-5 flex-1 flex flex-col justify-center bg-gradient-to-br from-slate-900/90 to-black/90 backdrop-blur-sm">
                            <h4 className="text-lg font-bold text-white mb-1">
                              {pastor.displayName}
                            </h4>
                            <div className="flex items-center gap-1 text-purple-300 text-sm">
                              <MapPinIcon className="w-3 h-3" />
                              <span>{pastor.church}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
              {/* Scroll indicator */}
              <div className="text-center mt-4">
                <p className="text-gray-400 text-sm">← Swipe to see more →</p>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Link to="/pastors" className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl border border-white/20">
              <span>View Full Pastoral Team</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="text-center mt-16 relative z-10">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-2xl md:text-3xl font-light text-white italic mb-4">
              "Shepherd the flock of God that is among you"
            </p>
            <p className="text-lg text-blue-300 font-semibold">1 Peter 5:2</p>
          </div>
        </div>
      </div>
    </section>;
};
