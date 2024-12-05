import React from 'react';
import { teamMembers } from '../../data/team';
import { Linkedin, Twitter } from 'lucide-react';

const TeamSection = () => {
  return (
    <section id="about" className="relative py-20 bg-transparent backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-purple-900/10 to-black/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate experts dedicated to delivering innovative IT solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="relative backdrop-blur-md bg-white/5 rounded-xl p-6 transition-all duration-300 hover:bg-white/10 border border-white/10">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-64 object-cover transform transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  {member.socialLinks.linkedin && (
                    <a href={member.socialLinks.linkedin} className="text-gray-400 hover:text-blue-400">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a href={member.socialLinks.twitter} className="text-gray-400 hover:text-blue-400">
                      <Twitter size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;