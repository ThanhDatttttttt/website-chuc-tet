import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import { Gift } from "lucide-react";

// ✅ Ảnh nền CARD (22) và Ảnh nền CHÍNH (33)
// TetCard.tsx: src/app/components/TetCard.tsx
// 22.jpg & 33.jpg: src/22.jpg, src/33.jpg  (theo hình bạn gửi)
import bg22 from "../../22.jpg";
import bg33 from "../../33.jpg";

interface TetCardProps {
  userName: string;
}

const WISHES = [
  // 🌸 SỨC KHỎE
  "Chúc bạn năm mới sức khỏe dồi dào, ăn ngon ngủ kỹ, tinh thần lúc nào cũng phơi phới.",
  "Sang năm mới mong bạn luôn khỏe mạnh, ít lo âu, nhiều năng lượng và luôn tích cực.",
  "Chúc cơ thể khỏe – tâm hồn vui – cuộc sống nhẹ nhàng mà hạnh phúc.",
  "Năm mới chúc bạn không ốm đau, không mệt mỏi, mỗi ngày đều tràn đầy sức sống.",
  "Có sức khỏe là có tất cả, chúc bạn cả năm an khang, bình an và vui vẻ.",

  // 📚 HỌC TẬP – SỰ NGHIỆP
  "Chúc bạn năm mới học hành tấn tới, thi cử suôn sẻ, điểm số luôn như mong đợi.",
  "Năm mới mong bạn ngày càng giỏi hơn, tự tin hơn và đạt được mục tiêu đã đặt ra.",
  "Chúc con đường học tập rộng mở, nỗ lực được đền đáp xứng đáng.",
  "Học gì hiểu nấy, làm gì cũng thành công, tương lai ngày càng rực rỡ.",
  "Chúc bạn luôn kiên trì, không bỏ cuộc và sớm chạm tay vào ước mơ.",

  // 😄 NIỀM VUI – HẠNH PHÚC
  "Chúc bạn năm mới luôn vui vẻ, nụ cười lúc nào cũng ở trên môi.",
  "Năm mới mong bạn bớt buồn, bớt mệt, thêm nhiều niềm vui và hạnh phúc.",
  "Chúc những ngày sắp tới của bạn luôn tràn ngập tiếng cười và điều tích cực.",
  "Gia đình êm ấm, bạn bè bên cạnh, cuộc sống nhẹ nhàng mà bình yên.",
  "Chúc bạn tìm thấy niềm vui trong những điều nhỏ bé mỗi ngày.",

  // 🌟 NHƯ Ý – MAY MẮN
  "Vạn sự như ý, làm gì cũng thuận lợi, đi đâu cũng gặp điều tốt đẹp.",
  "Chúc năm mới gặp nhiều may mắn, mọi chuyện khó rồi cũng sẽ qua.",
  "Cầu mong những điều tốt đẹp nhất sẽ đến với bạn trong năm nay.",
  "Mong năm mới tuổi mới sẽ dịu dàng hơn với bạn, ít áp lực và nhiều niềm vui.",

  // 😆 CHÚC KIỂU TRẺ – DỄ THƯƠNG
  "Chúc bạn năm mới tiền vô ào ào, buồn phiền bay vèo vèo.",
  "Năm mới mong bạn luôn vui vẻ, deadline tránh xa.",
  "Chúc bạn năm mới ít drama, nhiều niềm vui thả ga.",
  "Tiền thì không thiếu, buồn thì không có, vui thì dư.",
  "Chúc bạn năm mới sống đúng với bản thân và hạnh phúc hơn mỗi ngày.",
];

export const TetCard: React.FC<TetCardProps> = ({ userName }) => {
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [currentWish, setCurrentWish] = useState("");

  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const handleOpenEnvelope = () => {
    const randomWish = WISHES[Math.floor(Math.random() * WISHES.length)];
    setCurrentWish(randomWish);
    setShowEnvelope(true);

    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#FFD700", "#FF0000", "#FFFFFF"],
    });
  };

  return (
    // ✅ NỀN CHÍNH = ẢNH 33
    <div
      className="min-h-screen overflow-hidden relative font-sans text-yellow-100 flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg33})` }}
    >
      {/* ✅ Overlay để chữ nổi và nền dịu hơn */}
      <div className="absolute inset-0 bg-red-900/70 backdrop-blur-[1px]" />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 mb-8"
      >
        <h1
          className="text-6xl md:text-8xl font-bold text-yellow-400 drop-shadow-lg font-['Great_Vibes']"
          style={{ fontFamily: '"Great Vibes", cursive' }}
        >
          Chúc Mừng Năm Mới
        </h1>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-4 text-2xl md:text-3xl font-light tracking-widest text-red-200 font-['Dancing_Script']"
          style={{ fontFamily: '"Dancing Script", cursive' }}
        >
          Xuân Bính Ngọ - 2026
        </motion.div>
      </motion.div>

      {/* Main Card Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative w-full max-w-2xl px-4 z-10"
      >
        {/* ✅ CARD: đặt ảnh 22 làm nền */}
        <div
          className="border-4 border-yellow-500 rounded-3xl shadow-2xl relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${bg22})` }}
        >
          {/* ✅ overlay để chữ rõ */}
          <div className="absolute inset-0 bg-red-900/60 backdrop-blur-[1px]" />

          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-yellow-400 rounded-tl-2xl z-10" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-yellow-400 rounded-tr-2xl z-10" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-yellow-400 rounded-bl-2xl z-10" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-yellow-400 rounded-br-2xl z-10" />

          {/* Central Content */}
          <div className="relative z-10 p-8">
            <div className="flex flex-col items-center justify-center gap-6 py-8">
              <h2
                className="text-3xl font-bold text-yellow-400 font-['Great_Vibes']"
                style={{ fontFamily: '"Great Vibes", cursive' }}
              >
                Thân gửi: {userName}
              </h2>

              <div className="grid grid-cols-2 gap-4 w-full text-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/20 p-4 rounded-xl border border-yellow-500/30"
                >
                  <h3
                    className="text-xl font-bold text-yellow-400 mb-2 font-['Dancing_Script']"
                    style={{ fontFamily: '"Dancing Script", cursive' }}
                  >
                    Vạn Sự
                  </h3>
                  <p className="text-red-100">Như Ý</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/20 p-4 rounded-xl border border-yellow-500/30"
                >
                  <h3
                    className="text-xl font-bold text-yellow-400 mb-2 font-['Dancing_Script']"
                    style={{ fontFamily: '"Dancing Script", cursive' }}
                  >
                    An Khang
                  </h3>
                  <p className="text-red-100">Thịnh Vượng</p>
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                whileTap={{ scale: 0.9 }}
                onClick={handleOpenEnvelope}
                className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-red-900 font-bold text-xl px-12 py-4 rounded-full shadow-lg border-2 border-yellow-200 flex items-center gap-3 group"
              >
                <Gift className="w-6 h-6 group-hover:animate-bounce" />
                Nhận Lộc Đầu Năm
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: -100,
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              opacity: 0,
              rotate: 0,
            }}
            animate={{
              y:
                typeof window !== "undefined"
                  ? window.innerHeight + 100
                  : 1000,
              opacity: [0, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            className="absolute text-yellow-500/30 text-2xl"
          >
            {["🌸", "🧧", "💰", "🏮"][i % 4]}
          </motion.div>
        ))}
      </div>

      {/* Envelope Popup */}
      <AnimatePresence>
        {showEnvelope && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setShowEnvelope(false)}
          >
            <motion.div
              initial={{ scale: 0.5, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 100, opacity: 0 }}
              className="bg-red-600 w-full max-w-md p-1 rounded-2xl shadow-2xl relative overflow-hidden cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#fffdf0] rounded-xl p-8 text-center border-4 border-yellow-500 h-full relative">
                <button
                  onClick={() => setShowEnvelope(false)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold text-xl"
                >
                  ✕
                </button>

                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🧧</span>
                </div>

                <h3
                  className="text-2xl font-bold text-red-800 mb-4 font-['Dancing_Script']"
                  style={{ fontFamily: '"Dancing Script", cursive' }}
                >
                  Lộc Xuân Gửi {userName}
                </h3>

                <p
  className="text-xl text-gray-800 italic leading-relaxed"
  style={{ fontFamily: '"Dancing Script", cursive' }}
>
  "{currentWish}"
</p>


                <div className="mt-8 pt-4 border-t border-red-100 text-sm text-red-400">
                  Click ra ngoài và nhận thêm lời chúc!
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};