import { motion } from 'framer-motion';
import { CheckCircle, Target, Users, ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      id: 1,
      title: "投資前品牌健檢",
      subtitle: "全面檢查您的品牌資產，排除投資風險",
      features: [
        "智慧財產權完整性審查",
        "品牌故事一致性檢測", 
        "法律文件漏洞排查",
        "品牌資產價值評估",
        "風險預警與解決方案"
      ],
      benefit: "提前排除地雷，讓投資人更有信心",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "重新設計募資簡報",
      subtitle: "將品牌價值轉化為投資論點",
      features: [
        "品牌定位→市場機會轉譯",
        "競爭優勢可視化呈現",
        "品牌資產量化指標",
        "財務預測與品牌策略整合",
        "投資人語言翻譯"
      ],
      benefit: "不只講產品，更要講投資價值",
      icon: <Target className="w-8 h-8" />,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      id: 3,
      title: "投資人溝通訓練",
      subtitle: "教您成為品牌最佳代言人",
      features: [
        "投資人心理與需求分析",
        "簡報演練與話術優化",
        "異議處理技巧",
        "估值談判策略",
        "戰略投資人網絡對接"
      ],
      benefit: "找到真正懂您的聰明錢",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "初步診斷",
      description: "了解現況與需求"
    },
    {
      step: "02", 
      title: "深度健檢",
      description: "全面評估品牌資產"
    },
    {
      step: "03",
      title: "方案設計", 
      description: "制定資本化策略"
    },
    {
      step: "04",
      title: "執行陪伴",
      description: "直到募資成功"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* 標題區塊 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            服務項目
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            我們提供完整的「可投資性升級套件」，從品牌健檢到募資成功，全程陪伴您的資本化之旅。
          </p>
        </motion.div>

        {/* 服務項目卡片 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* 圖標和標題 */}
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.subtitle}
                </p>
              </div>

              {/* 服務特色 */}
              <div className="mb-6">
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 核心效益 */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-blue-600 font-medium text-center italic">
                  {service.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 服務流程 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              服務流程
            </h3>
            <p className="text-gray-600 text-lg">
              四個階段，系統化陪伴您的品牌資本化之旅
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* 步驟編號 */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-xl mb-4">
                  {step.step}
                </div>
                
                {/* 連接線 (除了最後一個) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-blue-300 mx-auto" />
                  </div>
                )}

                {/* 步驟內容 */}
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
