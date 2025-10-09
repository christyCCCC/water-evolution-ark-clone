import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Star } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: '累積培訓學員',
      description: '來自各產業的創業者與品牌人',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      number: '92%',
      label: '課程滿意度',
      description: '學員給予高度評價與推薦',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: TrendingUp,
      number: '3.2倍',
      label: '平均估值提升',
      description: '應用方法論後的募資成果',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: Star,
      number: '85%',
      label: '成功募資率',
      description: '完成課程後6個月內募資成功',
      color: 'from-green-500 to-blue-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="w-4 h-4 bg-white/10 rounded-full absolute top-10 left-10"></div>
          <div className="w-2 h-2 bg-white/10 rounded-full absolute top-20 right-20"></div>
          <div className="w-3 h-3 bg-white/10 rounded-full absolute bottom-20 left-20"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            用數據說話
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            真實的學習成果，來自學員的成功見證
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/20">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-cyan-200 mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
