import { motion } from 'framer-motion';
import { Target, Heart, PresentationChart, BarChart3, MessageSquare, Briefcase, Zap } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      id: 1,
      title: "精準市場定位",
      description: "學會使用UTOPIA方法論，找到品牌在市場中的獨特空洞位置，避免紅海競爭。",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "品牌靈魂塑造",
      description: "運用P.A.N.三元素，賦予品牌超越產品的人格與情感共鳴，建立長期客戶關係。",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 3,
      title: "專業募資簡報",
      description: "掌握將品牌故事轉化為投資論點的技巧，設計打動投資人的完整簡報架構。",
      icon: <PresentationChart className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      title: "品牌資產量化",
      description: "學會「鏡化篇報告」方法，將無形品牌價值轉化為可衡量的財務指標與估值模型。",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 5,
      title: "投資人溝通術",
      description: "理解不同類型投資人的需求與心理，掌握異議處理與估值談判的關鍵技巧。",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      id: 6,
      title: "完整工具箱",
      description: "獲得市場分析表、品牌定位畫布、募資簡報模板等可立即應用的專業工具。",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 7,
      title: "實戰即學即用",
      description: "小組實作演練，即時回饋優化，課程結束即可將方法論應用於自己的品牌專案。",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* 標題區塊 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white mb-6">
            <Target className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            學習這門課程，你將獲得
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            7大核心能力，從品牌定位到資本對接的完整技能樹
          </p>
        </motion.div>

        {/* 核心能力卡片 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              {/* 背景漸層效果 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* 圖標 */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>

              {/* 標題 */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {benefit.title}
              </h3>

              {/* 描述 */}
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* 裝飾元素 */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* 行動呼籲 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            準備好轉化您的品牌價值了嗎？
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            加入500+成功學員的行列，開啟品牌資本化之旅
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            立即預約免費諮詢
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
