import { 
  Monitor, Code2, Smartphone, TrendingUp, 
  Palette, Users, BrainCircuit, Bug, ArrowRight 
} from 'lucide-react';

const services = [
  { title: "Software Products", desc: "Enterprise software including CRM, HR, and management systems.", icon: Monitor, img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400" },
  { title: "Web Design & Dev", desc: "Custom websites, web applications, and portal development.", icon: Code2, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400" },
  { title: "Mobile Applications", desc: "Native, hybrid, and cross-platform mobile solutions.", icon: Smartphone, img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400" },
  { title: "Online Marketing", desc: "Comprehensive digital marketing and social media strategies.", icon: TrendingUp, img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=400" },
  { title: "Creative Design", desc: "UI/UX, logo design, and creative branding services.", icon: Palette, img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=400" },
  { title: "Consulting Services", desc: "Expert consulting for NetSuite and software solutions.", icon: Users, img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400" },
  { title: "Data Science", desc: "AI, machine learning, and advanced data analytics.", icon: BrainCircuit, img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=400" },
  { title: "Testing Services", desc: "Comprehensive software security and performance testing.", icon: Bug, img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400" },
];

export default function Services() {
  return (
    <section className="py-20 bg-[#030712] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic">
            Our <span className="text-blue-500">Services</span>
          </h2>
          <div className="h-1 w-12 bg-blue-500 mx-auto mt-2 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto text-sm font-medium">
            Tailored IT solutions to drive your digital transformation.
          </p>
        </div>

        {/* Outer Container with Glow */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          
          <div className="relative bg-[#0f172a]/80 backdrop-blur-xl p-6 md:p-10 rounded-[2rem] border border-white/5 ring-1 ring-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((item, index) => (
                <div 
                  key={index} 
                  className="group/card relative flex flex-col bg-[#1e293b]/40 border border-white/10 rounded-2xl overflow-hidden hover:bg-[#1e293b]/60 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:-translate-y-1"
                >
                  {/* Image Top Section - Shorter Height */}
                  <div className="relative h-24 w-full overflow-hidden">
                    <img 
                      src={item.img} 
                      className="w-full h-full object-cover grayscale-[0.5] group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-700" 
                      alt="" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-[#1e293b]/20 to-transparent"></div>
                    
                    {/* Compact Icon */}
                    <div className="absolute top-2 right-2 p-1.5 bg-blue-600 rounded-lg shadow-lg ring-1 ring-white/20">
                      <item.icon className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* Text Content - Compact */}
                  <div className="p-4 pt-0">
                    <h3 className="text-base font-bold mb-1 group-hover/card:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 line-clamp-2 mb-4 leading-relaxed">
                      {item.desc}
                    </p>
                    
                    <button className="flex items-center justify-center w-full gap-2 py-1.5 px-3 bg-blue-600/10 hover:bg-blue-600 border border-blue-500/30 text-blue-400 hover:text-white rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all duration-300">
                      View More <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="group relative inline-flex items-center gap-3 px-6 py-2.5 bg-transparent border border-gray-700 rounded-xl hover:border-blue-500 transition-all">
            <ArrowRight className="h-4 w-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">View All Services</span>
          </button>
        </div>
      </div>
    </section>
  );
}