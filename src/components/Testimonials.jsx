import { motion } from 'framer-motion';
import { Users, Award, TrendingUp } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "張宏達",
      title: "科技新創創辦人",
      company: "TechFlow AI",
      content: "參加課程後，我們的募資簡報從投資人看不懂的技術描述，轉變為清晰的品牌價值主張。最終成功獲得A輪1.2億融資，估值提升40%。",
      achievement: "A輪募資 1.2億",
      avatar: "👨‍💼"
    },
    {
      id: 2,
      name: "林雅婷",
      title: "品牌總監",
      company: "綠意生活",
      content: "UTOPIA方法論幫助我們找到了永續品牌在市場中的獨特定位。P.A.N.讓品牌有了靈魂，客戶黏著度提升3倍，品牌溢價能力大幅增強。",
      achievement: "品牌溢價 +35%",
      avatar: "👩‍💼"
    },
    {
      id: 3,
      name: "王建宏",
      title: "二代接班人",
      company: "傳承企業集團",
      content: "傳統製造業轉型最難的是品牌重塑。課程教會我如何將50年的企業底蘊轉化為現代品牌故事，成功吸引戰略投資者，完成產業升級。",
      achievement: "戰略投資成功",
      avatar: "👨‍💼"
    },
    {
      id: 4,
      name: "陳思穎",
      title: "募資顧問",
      company: "創投加速器",
      content: "作為專業顧問，這套方法論讓我能更有系統地協助創業者。現在我輔導的案例募資成功率從60%提升到85%，客戶滿意度大幅提高。",
      achievement: "成功率 +25%",
      avatar: "👩‍💼"
    },
    {
      id: 5,
      name: "劉子豪",
      title: "連續創業家",
      company: "美食科技",
      content: "第三次創業，終於學會用投資人的語言說話。品牌資產量化模型讓我們的估值從800萬提升到3000萬，投資人搶著要投資。",
      achievement: "估值成長 3.75倍",
      avatar: "👨‍💼"
    },
    {
      id: 6,
      name: "黃美玲",
      title: "行銷長",
      company: "時尚電商",
      content: "課程提供的工具箱非常實用！從品牌定位畫布到募資簡報模板，全部可以立即應用。3個月內完成Pre-A輪募資，超乎預期。",
      achievement: "Pre-A輪達標",
      avatar: "👩‍💼"
    }
  ];

  const stats = [
    {
      number: "500+",
      title: "累積學員"
    },
    {
      number: "85%",
      title: "募資成功率"
    },
    {
      number: "92%",
      title: "課程滿意度"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="testimonials" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* 標題區塊 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            學員見證
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            他們的成功故事
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            真實學員分享：從品牌定位到成功募資的轉變歷程
          </p>
        </motion.div>

        {/* 學員見證卡片 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              {/* 成就標籤 */}
              <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <span className="mr-2">✨</span>
                {testimonial.achievement}
              </div>

              {/* 頭像和基本資訊 */}
              <div className="flex items-center mb-6 mt-4">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>

              {/* 見證內容 */}
              <blockquote className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>
            </motion.div>
          ))}
        </motion.div>

        {/* 統計數據 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-8 shadow-md">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.title}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
