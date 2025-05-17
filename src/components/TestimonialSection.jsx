import React from "react";

const testimonials = [
  {
    name: "Jess W.",
    role: "@writingwithjess",
    avatar: "https://i.pravatar.cc/100?img=47",
    quote: "Bloggr helped me go from zero to my first 10K readers in just two weeks. The UI is super intuitive — I’m obsessed.",
  },
  {
    name: "Tomás R.",
    role: "Freelance Designer",
    avatar: "https://i.pravatar.cc/100?img=14",
    quote: "Finally a platform that makes blogging *fun* again. No clutter, just creativity.",
  },
  {
    name: "Sana B.",
    role: "Travel Blogger",
    avatar: "https://i.pravatar.cc/100?img=11",
    quote: "I used to spend hours formatting my blog. Now it takes minutes. Love it.",
  },
  {
    name: "Karan M.",
    role: "Full Stack Engineer",
    avatar: "https://i.pravatar.cc/100?img=32",
    quote: "As a developer, I appreciate how clean and performant Bloggr is. It's perfect for technical blogging.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-bold mb-10">What Our Users Are Saying</h2>
        <div className="grid gap-8 sm:grid-cols-2 ">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 italic">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
