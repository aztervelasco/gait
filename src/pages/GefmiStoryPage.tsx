import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { BackButton } from '../components/BackButton';
import { BookOpenIcon, CalendarIcon, SparklesIcon, HeartIcon, ChurchIcon } from 'lucide-react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
const gefmiStory = {
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
export function GefmiStoryPage() {
  useSmoothScroll({
    lerp: 0.12,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 0.8,
    touchMultiplier: 1.5
  });
  return <div className="w-full min-h-screen bg-white">
      {/* NO NAVBAR - Only Back Button */}
      <BackButton to="/about" label="Back" />

      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }} className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl" />
          <motion.div animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }} className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-purple-500 rounded-full blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <motion.div initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-8">
              <BookOpenIcon className="w-5 h-5 text-blue-300" />
              <span className="text-white font-semibold tracking-wide">
                Our Story
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              The{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
                GEFMI Story
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              A Journey of Faith & Transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }}>
            {/* Story Text */}
            <div className="prose prose-lg max-w-none mb-16">
              {gefmiStory.fullStory.split('\n\n').map((paragraph, index) => <motion.p key={index} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.1
            }} className="text-gray-700 leading-relaxed mb-6 text-xl">
                  {paragraph}
                </motion.p>)}
            </div>

            {/* Key Milestones */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 1
          }} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 border border-blue-100 shadow-xl">
              <h4 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                  <CalendarIcon className="w-6 h-6 text-white" />
                </div>
                Key Milestones
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[{
                year: '2004',
                event: 'GEFMI Officially Registered (SEC)'
              }, {
                year: '2005',
                event: 'First Annual Assembly & Mass Baptism (52 souls)'
              }, {
                year: '2005',
                event: 'Pas. Velasco, Tubal & Andrada Ordained'
              }, {
                year: '2006',
                event: 'New Outreaches: Capiniaan & Manicla'
              }, {
                year: '2007',
                event: 'Villa Flores Outreached Atbu'
              }, {
                year: '2008',
                event: 'CPTC Fourth Batch (24 enrollees)'
              }, {
                year: '2013',
                event: 'Rev. Silan Became Executive Director'
              }, {
                year: 'Present',
                event: 'Continuing International Ministry'
              }].map((milestone, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 1.1 + index * 0.1
              }} className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white font-bold text-sm">
                        {milestone.year}
                      </span>
                    </div>
                    <span className="text-gray-800 font-semibold text-lg">
                      {milestone.event}
                    </span>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 1.5
          }} className="mt-16 text-center">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <HeartIcon className="w-8 h-8 text-white" />
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    Join Our Story
                  </h3>
                </div>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Want to be part of our journey? Explore our churches, meet our
                  pastors, and discover how you can get involved.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/churches" className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
                    <ChurchIcon className="w-5 h-5" />
                    <span>Explore Our Churches</span>
                  </Link>
                  <Link to="/pastors" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40">
                    <SparklesIcon className="w-5 h-5" />
                    <span>Meet Our Pastors</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
}