import React, { Children, memo } from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon, UsersIcon, HeartIcon, ArrowRightIcon } from 'lucide-react';
const ministries = [{
  title: 'Youth Camps',
  description: 'Empowering the next generation through dynamic camps filled with worship, teaching, fellowship, and life-changing encounters with God. Our youth camps create lasting memories and spiritual breakthroughs.',
  image: "/youth_camp.jpg",
  icon: SparklesIcon,
  color: 'from-blue-600 to-blue-800',
  stats: [{
    label: 'Annual Camps',
    value: '14'
  }, {
    label: 'Youth Reached',
    value: '200+'
  }, {
    label: 'Leaders Trained',
    value: '25+'
  }]
}, {
  title: "Men's & Women's Fellowship",
  description: "Building strong spiritual communities through gender-specific fellowships that provide support, accountability, and growth. We create safe spaces for men and women to pursue God's heart together.",
  image: "/womans_fellowship.jpg",
  icon: UsersIcon,
  color: 'from-purple-600 to-purple-800',
  stats: [{
    label: 'Active Groups',
    value: '8'
  }, {
    label: 'Members',
    value: '150+'
  }, {
    label: 'Monthly Meetings',
    value: '12+'
  }]
}, {
  title: "Children's Ministry",
  description: "Nurturing young hearts with age-appropriate biblical teaching, engaging activities, and a loving environment. Through our Vacation Bible School and weekly programs, children discover God's love.",
  image: "/dvbs.jpg",
  icon: HeartIcon,
  color: 'from-pink-600 to-pink-800',
  stats: [{
    label: 'Different Places',
    value: '15'
  }, {
    label: 'Years',
    value: '14'
  }, {
    label: 'Programs',
    value: '6+'
  }]
}];
export const ServicesSection = () => {
  return <section className="relative w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 md:py-32 px-4 md:px-6 lg:px-12 xl:px-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Section Header */}
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
      }} className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6">
            <SparklesIcon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
            <span className="text-blue-800 font-semibold text-sm md:text-base">
              Our Ministries
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            Transforming{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Lives
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Through dedicated programs and passionate leadership, we minister to
            every generation with excellence and love
          </p>
        </motion.div>

        {/* Ministries Grid - Mobile Optimized */}
        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {ministries.map((ministry, index) => <motion.div key={ministry.title} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Image Side - Stacks on mobile, alternates on desktop */}
              <div className={`lg:col-span-6 relative group ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl">
                  <img src={ministry.image} alt={ministry.title} className="w-full h-[300px] md:h-[450px] lg:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${ministry.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>
                {/* Floating Icon - Hidden on mobile */}
                <div className={`hidden md:block absolute -top-8 ${index % 2 === 1 ? '-left-8' : '-right-8'}`}>
                  <div className={`w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br ${ministry.color} rounded-2xl shadow-2xl flex items-center justify-center transform ${index % 2 === 1 ? '-rotate-12' : 'rotate-12'} group-hover:rotate-0 transition-transform duration-500`}>
                    <ministry.icon className="w-10 h-10 md:w-14 md:h-14 text-white" />
                  </div>
                </div>
              </div>

              {/* Content Side - Stacks on mobile, alternates on desktop */}
              <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                      {ministry.title}
                    </h3>
                    <div className="w-20 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mb-6 md:mb-8 rounded-full"></div>
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    {ministry.description}
                  </p>
                  {/* Stats Grid - Mobile optimized */}
                  <div className="grid grid-cols-3 gap-3 md:gap-6 pt-6 md:pt-8">
                    {ministry.stats.map((stat, statIndex) => <motion.div key={stat.label} initial={{
                  opacity: 0,
                  scale: 0.9
                }} whileInView={{
                  opacity: 1,
                  scale: 1
                }} transition={{
                  duration: 0.5,
                  delay: statIndex * 0.1
                }} viewport={{
                  once: true
                }} className={`bg-gradient-to-br ${ministry.color} p-4 md:p-6 rounded-xl md:rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">
                          {stat.value}
                        </div>
                        <div className="text-xs md:text-sm text-white/90 font-medium">
                          {stat.label}
                        </div>
                      </motion.div>)}
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>

        {/* Call to Action - Mobile optimized */}
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
      }} className="text-center mt-20 md:mt-32">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6">
              Join Our Ministry
            </h3>
            <p className="text-base md:text-xl lg:text-2xl text-blue-100 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              Whether you are looking to serve, grow, or connect, there is a
              place for you in our ministry family
            </p>
            <motion.a href="/ministry" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="inline-flex items-center gap-2 md:gap-3 bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 md:py-5 px-8 md:px-12 rounded-full transition-all duration-300 shadow-lg text-base md:text-lg group touch-manipulation">
              <span>Explore All Ministries</span>
              <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>;
};