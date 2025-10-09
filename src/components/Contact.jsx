import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { CheckCircle } from 'lucide-react';

export function Contact() {
  const reasons = [
    '獨家雙軌共振方法論，理性與感性完美結合',
    '品牌資產量化評估，讓無形價值可見可投資',
    '深度理解亞洲市場，提供在地化專業服務',
    '成功導向收費，與您的成功緊密綁定'
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            聯繫我們
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            準備好讓您的品牌成為投資人眼中的優質標的了嗎？立即預約免費諮詢，讓我們一起規劃您的資本化之路。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    姓名 *
                  </label>
                  <Input 
                    type="text" 
                    placeholder="請輸入您的姓名"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    公司名稱 *
                  </label>
                  <Input 
                    type="text" 
                    placeholder="請輸入公司名稱"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    電子郵件 *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="請輸入電子郵件"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    聯絡電話
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="請輸入聯絡電話"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  目前階段
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="請選擇您的創業階段" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="idea">創意發想階段</SelectItem>
                    <SelectItem value="mvp">產品開發階段</SelectItem>
                    <SelectItem value="launch">產品上市階段</SelectItem>
                    <SelectItem value="growth">成長擴張階段</SelectItem>
                    <SelectItem value="funding">準備募資階段</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  諮詢內容
                </label>
                <Textarea 
                  placeholder="請描述您的需求或想了解的內容..."
                  className="w-full h-32"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4"
                >
                  提交諮詢
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                聯繫方式
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>📧 Email: contact@waterevolution.com</p>
                <p>📞 電話: +886-2-1234-5678</p>
                <p>📍 地址: 台北市信義區信義路五段7號</p>
                <p>🕒 營業時間: 週一至週五 9:00-18:00</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                為什麼選擇我們？
              </h3>
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                🎯 免費諮詢包含
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 品牌現況診斷</li>
                <li>• 資本化可行性評估</li>
                <li>• 個人化學習建議</li>
                <li>• 課程適合度分析</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
