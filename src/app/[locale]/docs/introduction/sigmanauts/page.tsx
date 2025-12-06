
/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from "react";
import { Users, Star, Rocket, Layers, CheckCircle, Calendar, Globe, UserPlus, BookOpen, Paintbrush, Users2, TrendingUp, Zap, Award, ArrowRight } from "lucide-react";

export default function SigmanautsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent leading-tight pb-1">
          Sigmanauts: Empowering the Ergo Community
        </h1>
        <p className="text-xl text-gray-400 mb-2">
          The Sigmanauts Program is a grassroots initiative aimed at empowering individuals to take ownership of Ergo and help shape its future.
        </p>
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 rounded-xl p-5 mt-4">
          <span className="text-lg text-center block text-orange-300 font-semibold">Ergo's future lies in the hands of its users. Everyone is encouraged to take as much control of the Ergo ecosystem as possible.</span>
        </div>
      </div>

      {/* Introduction */}
      <section>
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><Rocket className="w-7 h-7 text-orange-400" /> Introduction</h2>
          <p className="text-lg text-gray-300 mb-4">
            Ergo, as outlined in its Manifesto, is a platform designed for the common person, standing against the centralization of banking and the misuse of money. The Sigmanauts Program empowers individuals to take ownership of Ergo and help shape its future.
          </p>
        </div>
      </section>

      {/* Power of Community */}
      <section>
        <div className="bg-neutral-900/50 rounded-xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><Users className="w-7 h-7 text-cyan-400" /> The Power of Community</h2>
          <p className="text-lg text-gray-300 mb-4">
            Ergo's blockchain has the potential to bring out the best in humanity, and its rapidly growing community is one of its most significant assets. The Sigmanauts Program provides a platform for individuals to make a substantial impact on the future of finance by leveraging their unique skills and strengths.
          </p>
        </div>
      </section>

      {/* Categories of Participation */}
      <section>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Layers className="w-7 h-7 text-orange-400" /> Categories of Participation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="group bg-gradient-to-br from-orange-400/10 to-orange-400/5 rounded-2xl p-5 flex flex-col items-start gap-2 transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_rgba(255,140,0,0.08)]">
            <TrendingUp className="w-7 h-7 text-orange-400 mb-1" />
            <div className="text-lg font-semibold bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">Growth</div>
            <div className="text-gray-400 text-sm leading-relaxed">Marketing, partnerships, expanding the community and attracting diverse individuals.</div>
          </div>
          <div className="group bg-gradient-to-br from-cyan-400/10 to-blue-400/5 rounded-2xl p-5 flex flex-col items-start gap-2 transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_rgba(34,211,238,0.08)]">
            <Users2 className="w-7 h-7 text-cyan-400 mb-1" />
            <div className="text-lg font-semibold bg-gradient-to-r from-cyan-300 to-blue-100 bg-clip-text text-transparent">Community</div>
            <div className="text-gray-400 text-sm leading-relaxed">Ambassadors, moderators, translators — fostering a welcoming and engaging environment.</div>
          </div>
          <div className="group bg-gradient-to-br from-yellow-400/10 to-orange-400/5 rounded-2xl p-5 flex flex-col items-start gap-2 transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_rgba(251,191,36,0.08)]">
            <Paintbrush className="w-7 h-7 text-yellow-400 mb-1" />
            <div className="text-lg font-semibold bg-gradient-to-r from-yellow-200 to-orange-100 bg-clip-text text-transparent">Creative</div>
            <div className="text-gray-400 text-sm leading-relaxed">Graphic designers, videographers, writers, social media experts — contribute to the visual and narrative aspects of Ergo.</div>
          </div>
        </div>
      </section>

      {/* Becoming a Sigmanaut */}
      <section>
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><UserPlus className="w-7 h-7 text-orange-400" /> Becoming a Sigmanaut</h2>
          <p className="text-lg text-gray-300 mb-4">
            To become a Sigmanaut, interested individuals must go through a formal application process. Once accepted as a SigCAN (Sigmanaut Candidate), participants join a team of like-minded individuals, showcase their skills, and make a significant impact on the Ergo ecosystem.
          </p>
        </div>
      </section>

      {/* Progression and Responsibility */}
      <section>
        <div className="bg-neutral-900/50 rounded-xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><TrendingUp className="w-7 h-7 text-cyan-400" /> Progression and Responsibility</h2>
          <p className="text-lg text-gray-300 mb-4">
            As SigCANs contribute and demonstrate commitment, they can become full-fledged Sigmanauts, taking on leadership roles and guiding the future direction of Ergo.
          </p>
        </div>
      </section>

      {/* Training and Support */}
      <section>
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><BookOpen className="w-7 h-7 text-orange-400" /> Training and Support</h2>
          <p className="text-lg text-gray-300 mb-4">
            The Sigmanauts Program offers comprehensive training covering decentralized finance, blockchain technology, and community building, ensuring Sigmanauts are well-prepared to contribute to the Ergo ecosystem.
          </p>
        </div>
      </section>

      {/* Collaboration and Networking */}
      <section>
        <div className="bg-neutral-900/50 rounded-xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><Globe className="w-7 h-7 text-cyan-400" /> Collaboration and Networking</h2>
          <p className="text-lg text-gray-300 mb-4">
            Sigmanauts collaborate with others passionate about financial privacy and decentralization, learning and working together towards common goals. This networking is invaluable for personal and professional growth.
          </p>
        </div>
      </section>

      {/* Sigmanauts Mining Pool */}
      <section>
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2"><Zap className="w-7 h-7 text-orange-400" /> Sigmanauts Mining Pool</h2>
          <p className="text-lg text-gray-300 mb-4">
            The Sigmanauts Mining Pool is a DAO-driven, community-run mining pool dedicated to supporting the Ergo ecosystem. Joining the pool contributes to the community and offers hourly bonus token payments. Minimal 0.9% fee, 0.5 ERG payout threshold, PPLNS payment method.
          </p>
          <p className="text-gray-400 text-sm">Instructions for wallet setup, mining software, and example configurations are available on the Sigmanauts Mining Pool page.</p>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Award className="w-7 h-7 text-orange-400" /> Sigmanauts Achievements</h2>
        <div className="relative border-l-2 border-cyan-400/30 pl-8 space-y-10">
          <div className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-orange-400 rounded-full border-2 border-white"></div>
            <h3 className="text-xl font-bold mb-2">01/22: The Sigmanauts Program is launched.</h3>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-white"></div>
            <h3 className="text-xl font-bold mb-2">01/23: sigmanauts.com launches.</h3>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            <h3 className="text-xl font-bold mb-2">03/23: Sigmanauts voting rework.</h3>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white"></div>
            <h3 className="text-xl font-bold mb-2">03/23: Mission Statement published.</h3>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-orange-400 rounded-full border-2 border-white"></div>
            <h3 className="text-xl font-bold mb-2">00/23: The Sigmanauts attend their first event @ RareEVO.</h3>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-white"></div>
            <h3 className="text-xl font-bold mb-2">00/23: The Ergo Foundation donates 160,000 SPF to the Sigmanauts treasury.</h3>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            <h3 className="text-xl font-bold mb-2">00/23: The Sigmanauts begin managing the Ergo_Foundation Twitter account.</h3>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white"></div>
            <h3 className="text-xl font-bold mb-2">00/24: Sigmanauts Mining Pool launches.</h3>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-orange-400 rounded-full border-2 border-white"></div>
            <h3 className="text-xl font-bold mb-2">01/24: The first proposal on Paideia passes.</h3>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-white"></div>
            <h3 className="text-xl font-bold mb-2">03/24: The Sigmanauts officially take over management of the Market-Making services.</h3>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            <h3 className="text-xl font-bold mb-2">03/24: In recognition of the Sigmanauts' dedication and hard work on securing the MEXC listing, the Ergo Foundation provides a substantial grant matching the amount raised by the Sigmanauts.</h3>
          </div>
        </div>
      </section>
    </>
  );
} 