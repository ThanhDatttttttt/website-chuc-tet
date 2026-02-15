import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Sparkles } from 'lucide-react';
import loginBg from "../../11.jpg";




interface LoginScreenProps {
  onLogin: (userName: string) => void;
}

const USERS: Record<string, string> = {
  '07/01/2006': 'Kiều Duyên',
  '12/10/2006': 'Xuân Đào',
  '20/07/2006': 'Tuấn Kiệt',
  '21/09/2006': 'Xu Mi',
  '07/03/2006': 'Thúy Uyên (Uynz)',
  '08/08/2006': 'Thế Vinh',
  '05/03/2006': 'Như Ý',
  '05/10/2006': 'Đức Vinh',
  '06/02/2006': 'Thanh Dũng',
  '25/11/2006': 'Thùy Dương',
  '04/06/2006': 'Thùy Dương',
  '17/05/2006': 'Huệ Huệ',
  '13/04/2006': 'Thanh Thảo',
  '24/07/2006': 'Thanh Thảo',
  '09/12/2005': 'Công Tính',
  '12/02/2006': 'Bích Trâm',
  '01/09/2006': 'Ngọc Trinh',
  '23/05/2006': 'Anh Thư',
  '01/11/2006': 'Nhựt Hạo',
  '11/06/2006': 'Anh Thư',
  '17/01/2006': 'Ngọc Trâm',
  '10/05/2006': 'Kim Trúc',
  '18/05/2006': 'Kim Hoa',
  '14/03/2006': 'Quốc Thành',
  '04/12/2006': 'Trọng Vĩ',
  '30/12/2006': 'Kim Dàng',
  '23/07/2003': 'Tuấn Kiệt',
  '31/01/2003': 'Kim Ngân',
  '03/10/1993': 'Kim Phúc',
  '04/03/2006': 'Hoàng My',
  '21/12/2005': 'Thanh Bình',
  '27/10/2006': 'Trung Nguyên',
  '11/11/1111': 'Trần Trung Nguyên',
};

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (USERS[password]) {
      onLogin(USERS[password]);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div
  className="relative min-h-screen flex items-center justify-center overflow-hidden"
  style={{
    backgroundImage: `url(${loginBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* lớp phủ để chữ nổi hơn */}
  <div className="absolute inset-0 z-0 bg-red-950/55" />

  {/* (tuỳ chọn) thêm nhẹ texture để nhìn “lụa” hơn */}
  <div className="absolute inset-0 z-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      
      {/* Animated gradient circles */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-yellow-500 blur-[100px] opacity-30"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-orange-500 blur-[120px] opacity-20"
      />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="z-10 bg-red-800/80 backdrop-blur-md border-2 border-yellow-500/50 p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 relative"
      >
        {/* Decorative corners */}
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-yellow-400 rounded-tl-lg"></div>
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-yellow-400 rounded-tr-lg"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-yellow-400 rounded-bl-lg"></div>
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-yellow-400 rounded-br-lg"></div>

        <div className="text-center mb-8">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block mb-4"
          >
            <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto shadow-lg border-4 border-red-600">
              <span className="text-4xl font-bold text-red-700">TẾT</span>
            </div>
          </motion.div>
          <h1 className="text-4xl font-bold text-yellow-400 font-['Great_Vibes'] mb-2" style={{ fontFamily: '"Great Vibes", cursive' }}>
            Xuân Bính Ngọ 2026
          </h1>
          <p className="text-red-200 text-sm">Nhập mật khẩu để mở lời chúc của bạn</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500/70 w-5 h-5" />
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu (dd/mm/yyyy)"
              className="w-full bg-red-950/50 border border-yellow-600/50 rounded-xl py-3 pl-10 pr-4 text-yellow-100 placeholder-red-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            />
          </div>

          {error && (
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-red-400 text-sm text-center bg-red-950/30 py-1 rounded"
            >
              Mật khẩu không đúng. Vui lòng thử lại!
            </motion.p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-red-900 font-bold py-3 rounded-xl shadow-lg border border-yellow-300 flex items-center justify-center gap-2 transition-all group"
          >
            <Sparkles className="w-5 h-5 group-hover:animate-spin" />
            Mở lời chúc Ngay
          </motion.button>
        </form>
      </motion.div>
      
      <div className="absolute bottom-4 text-center w-full text-red-300/40 text-xs font-mono">
        Được thiết kế bởi Ngô Thành Đạt 
      </div>
    </div>
  );
};