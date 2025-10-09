import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, BookOpen, Award, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Blue Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700"></div>
      
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-overlay filter blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-overlay filter blur-xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 7,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-400 rounded-full mix-blend-overlay filter blur-xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 7,
            delay: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div 
        className="absolute top-1/4 left-10 w-20 h-20 border-4 border-white/20 rounded-lg"
        animate={{
          rotate: [12, 25, 12],
          y: [0, -10, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-20 w-16 h-16 border-4 border-cyan-300/30 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/4 w-12 h-12 border-4 border-blue-300/30 rounded-lg"
        animate={{
          rotate: [45, 90, 45],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10 px-4">
        <motion.div 
          className="text-center space-y-8 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-md rounded-full border-2 border-white/30 shadow-lg">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm">品牌資本化專業培訓課程 · 第18期招生中</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl max-w-5xl mx-auto leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              承載品牌進化
            </motion.h1>
            
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-cyan-300 via-white to-blue-200 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              直達資本彼岸
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            系統化學習品牌資本化核心技能，從定位到募資的完整方法論
            <br />
            <span className="text-cyan-200">15小時掌握 UTOPIA + P.A.N. 雙軌共振</span>
          </motion.p>

          {/* Highlights */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {[
              { icon: BookOpen, text: '15小時完整課程', color: 'from-blue-400 to-cyan-400', delay: 0 },
              { icon: Award, text: '專業認證證書', color: 'from-cyan-400 to-teal-400', delay: 0.1 },
              { icon: Sparkles, text: '實戰工具箱', color: 'from-teal-400 to-blue-400', delay: 0.2 }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index}
                  className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.7 + item.delay, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="shadow-2xl hover:shadow-3xl transition-all text-lg px-10 py-7 bg-white text-blue-600 hover:bg-blue-50" asChild>
                <a href="#contact" className="group inline-flex items-center gap-2">
                  立即報名課程
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="shadow-xl text-lg px-10 py-7 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20" asChild>
                <a href="#curriculum">查看課程大綱</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
          >
            {[
              { 
                number: 'UTOPIA + P.A.N.', 
                label: '資本對接',
                gradient: 'from-blue-500/80 to-cyan-500/80',
                delay: 0
              },
              { 
                number: '深度實戰', 
                label: '工作坊',
                gradient: 'from-cyan-500/80 to-teal-500/80',
                delay: 0.1
              },
              { 
                number: '成功完成', 
                label: '培訓認證',
                gradient: 'from-teal-500/80 to-blue-500/80',
                delay: 0.2
              }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-white/20 hover:border-white/40 hover:bg-white/20 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 + stat.delay, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={`text-3xl md:text-4xl mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent font-bold`}>
                  {stat.number}
                </div>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/60 text-center cursor-pointer"
        >
          <div className="text-sm mb-2">向下探索</div>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full mx-auto flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
