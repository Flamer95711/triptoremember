import React from "react";

const NoComponentFound = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Animated Background */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
          rgba(147, 51, 234, 0.4) 0%, 
          rgba(79, 70, 229, 0.3) 25%, 
          rgba(16, 185, 129, 0.2) 50%, 
          rgba(0, 0, 0, 0.8) 100%)`,
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center transition-all duration-1000 transform translate-y-0 opacity-100">
        {/* Glass Card */}
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 max-w-lg mx-4 shadow-2xl">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-emerald-500/20 rounded-3xl blur-xl animate-pulse" />

          <div className="relative">
            {/* Icon with Animation */}
            <div className="relative mb-8">
              <div className="text-8xl animate-bounce opacity-80 filter drop-shadow-2xl">
                🔍
              </div>
              <div className="absolute inset-0 text-8xl animate-ping opacity-20">
                🔍
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-black bg-gradient-to-r from-white via-purple-200 to-emerald-200 bg-clip-text text-transparent mb-6 tracking-tight">
              NO RECORD
            </h1>
            <h2 className="text-3xl font-light text-white/70 mb-8 tracking-widest">
              FOUND
            </h2>

            {/* Description */}
            <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-md mx-auto">
              The data you're looking for seems to have vanished into the
              digital void.
              <span className="block mt-2 text-purple-300">
                Try a different approach.
              </span>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.history.back()}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 active:scale-95"
              >
                <span className="relative z-10">← GO BACK</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </button>

              <button
                onClick={() => window.location.reload()}
                className="group relative px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-semibold tracking-wide transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl active:scale-95"
              >
                <span className="relative z-10">🔄 RETRY</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-8 flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white/30 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-br-full" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-emerald-500/20 to-transparent rounded-tl-full" />
    </div>
  );
};

export default NoComponentFound;
