import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌊</span>
              </div>
              <span className="font-bold text-xl">鏡水進化方舟</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              專注於幫助新創企業將品牌價值轉化為可投資資產，通過獨家的「雙軌共振」方法論，讓您的品牌成為投資人願意買單的核心競爭力。
            </p>
            <div className="text-gray-400 text-sm">
              <p>📧 contact@mirrorwater.com</p>
              <p>📞 +886-2-xxxx-xxxx</p>
              <p>📍 台北市信義區</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">快速連結</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">
                  首頁
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  課程理念
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-cyan-400 transition-colors">
                  課程大綱
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-cyan-400 transition-colors">
                  學員見證
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  服務項目
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  立即報名
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">服務項目</h3>
            <ul className="space-y-2 text-gray-300">
              <li>品牌資本化培訓</li>
              <li>投資前品牌健檢</li>
              <li>募資簡報設計</li>
              <li>投資人溝通訓練</li>
              <li>品牌估值諮詢</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
        >
          <p>
            © {currentYear} 鏡水進化方舟顧問有限公司. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Built with ❤️ for entrepreneurs who dare to dream big.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
