import { motion } from 'framer-motion';
import { Target, Lightbulb, Globe, Users, TrendingUp, Award } from 'lucide-react';

export function About() {
  const utopiaItems = [
    'Uncover - 市場空洞檢測',
    'Target - 企業聚焦建議', 
    'Outline - 命名生成',
    'Phrase - Slogan生成',
    'Image - 視覺錨設計',
    'Amplify - 公關擴散策略'
  ];

  const panItems = [
    'Persona - MBTI人格設定',
    'Astro - 星象情感共鳴',
    'Narrative - 紫微斗數敘事系統'
  ];

  const advantages = [
    {
      icon: Users,
      title: '整合服務',
      description: '把品牌、財務、法律、投資人關係整合為一體化服務，避免各自為政的低效率。'
    },
    {
      icon: TrendingUp,
      title: '品牌資產量化',
      description: '獨家「鏡化篇報告」將無形品牌價值轉化為可投資的數據指標與估值模型。'
    },
    {
      icon: Globe,
      title: '亞洲市場專精',
      description: '深度理解亞洲市場文化特性與投資生態，提供更貼近本地需求的解決方案。'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* About Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            關於我們
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            鏡水進化方舟顧問專注於幫助新創企業將品牌價值轉化為可投資資產，
            通過獨家的「雙軌共振」方法論，讓您的品牌成為投資人願意買單的核心競爭力。
          </p>
        </motion.div>

        {/* Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            雙軌共振方法論
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* UTOPIA */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">理性骨架：UTOPIA</h4>
                  <p className="text-gray-600">六維品牌基因定位架構</p>
                </div>
              </div>
              <ul className="space-y-3">
                {utopiaItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-700"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* P.A.N. */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">感性靈魂：P.A.N.</h4>
                  <p className="text-gray-600">品牌印記三元素</p>
                </div>
              </div>
              <ul className="space-y-3">
                {panItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-700"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Our Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            我們的優勢
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="text-center group"
                >
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {advantage.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
