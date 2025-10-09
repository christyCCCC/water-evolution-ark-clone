import { motion } from 'framer-motion';
import { Target, Lightbulb, FileText, Clock, CheckCircle } from 'lucide-react';

export function Curriculum() {
  const modules = [
    {
      id: 1,
      icon: Target,
      title: '品牌基因定位 - UTOPIA方法論',
      duration: '6小時',
      color: 'from-blue-500 to-cyan-500',
      topics: [
        { title: 'Uncover 市場空洞檢測', description: '發現未被滿足的市場需求' },
        { title: 'Target 企業聚焦建議', description: '資源集中與定位策略' },
        { title: 'Outline 命名生成', description: '簡化傳播成本的命名技巧' },
        { title: 'Phrase Slogan生成', description: '增強記憶點的口號設計' },
        { title: 'Image 視覺錨設計', description: '策略視覺化與品牌識別' },
        { title: 'Amplify 公關擴散策略', description: '控制市場話語權' }
      ],
      outputs: ['市場空洞分析報告', 'UTOPIA定位工作表', '品牌視覺錨設計']
    },
    {
      id: 2,
      icon: Lightbulb,
      title: '品牌靈魂塑造 - P.A.N.三元素',
      duration: '4小時',
      color: 'from-purple-500 to-pink-500',
      topics: [
        { title: 'Persona 品牌人格設定', description: '運用MBTI建立一致的行為風格' },
        { title: 'Astro 星象情感共鳴', description: '定義超越產品的宏觀信仰' },
        { title: 'Narrative 敘事系統', description: '東方智慧的故事生成機制' },
        { title: '雙軌共振整合', description: '理性與感性的策略融合' }
      ],
      outputs: ['P.A.N.品牌人格卡', '品牌故事腳本', '鏡化篇報告模板']
    },
    {
      id: 3,
      icon: FileText,
      title: '資本市場對接與募資簡報',
      duration: '5小時',
      color: 'from-green-500 to-teal-500',
      topics: [
        { title: '品牌資產量化方法', description: '將無形價值轉化為財務指標' },
        { title: '投資人溝通策略', description: '用投資人聽得懂的語言' },
        { title: '募資簡報設計', description: '從品牌定位到財務預測的完整架構' },
        { title: '估值談判技巧', description: '如何為品牌價值爭取合理估值' }
      ],
      outputs: ['品牌估值模型', '投資人簡報範本', '募資路演腳本']
    }
  ];

  const additionalValues = [
    { title: '實戰案例分析', description: '深度解析成功募資的品牌案例' },
    { title: '小組工作坊', description: '實際演練品牌定位與簡報設計' },
    { title: '專業認證', description: '完成課程頒發品牌資本化顧問證書' }
  ];

  return (
    <section id="curriculum" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            核心價值
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            學習這門課程，你將獲得
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            7大核心能力，從品牌定位到資本對接的完整技能樹
          </p>
        </motion.div>

        {/* Skills Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Target,
              title: '精準市場定位',
              description: '學會使用UTOPIA方法論，找到品牌在市場中的競爭空洞位置，避免紅海競爭。',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              icon: Lightbulb,
              title: '品牌靈魂塑造',
              description: '運用P.A.N.三元素，賦予品牌超越產品的人格特質與情感共鳴，建立長期客戶關係。',
              color: 'from-purple-500 to-pink-500'
            },
            {
              icon: FileText,
              title: '專業募資簡報',
              description: '掌握將品牌故事轉化為投資論點的技巧，設計打動投資人的完整簡報架構。',
              color: 'from-green-500 to-teal-500'
            }
          ].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {skill.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Complete Curriculum */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            完整課程大綱
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            15小時掌握品牌資本化核心技能
          </p>
          <p className="text-lg text-gray-500 mt-2">
            三大模組循序漸進，從品牌定位到資本對接，建立完整的知識體系與實戰能力。
          </p>
        </motion.div>

        {/* Modules */}
        <div className="space-y-12">
          {modules.map((module, moduleIndex) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: moduleIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Module Header */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center mb-4">
                      <div className="text-2xl font-bold text-gray-400 mr-4">
                        模組{module.id}
                      </div>
                      <div className={`w-12 h-12 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {module.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-6">
                      <Clock className="w-4 h-4 mr-2" />
                      {module.duration}
                    </div>
                  </div>

                  {/* Module Content */}
                  <div className="lg:w-2/3">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">課程主題</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {module.topics.map((topic, topicIndex) => (
                        <motion.div
                          key={topicIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: topicIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                            {topicIndex + 1}
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">
                              {topic.title}
                            </h5>
                            <p className="text-sm text-gray-600">
                              {topic.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 mb-4">學習產出</h4>
                    <div className="flex flex-wrap gap-2">
                      {module.outputs.map((output, outputIndex) => (
                        <motion.div
                          key={outputIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: outputIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                        >
                          <CheckCircle className="w-4 h-4" />
                          {output}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            額外價值
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
