import { motion } from 'framer-motion';
import { Mail, Download, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { contact, personal } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'devanshnegi88@gmail.com',
    href: `mailto:${personal.email}`,
    color: 'hover:border-rose-500/40 hover:bg-rose-500/5',
    iconColor: 'text-rose-400',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: '@devanshnegi88',
    href: personal.github,
    color: 'hover:border-slate-400/40 hover:bg-slate-400/5',
    iconColor: 'text-slate-400',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'devansh-negi005',
    href: personal.linkedin,
    color: 'hover:border-blue-500/40 hover:bg-blue-500/5',
    iconColor: 'text-blue-400',
  },
  {
    icon: Download,
    label: 'Resume',
    value: 'Download PDF',
    href: personal.resume,
    color: 'hover:border-indigo-500/40 hover:bg-indigo-500/5',
    iconColor: 'text-indigo-400',
    download: true,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        {/* Background glow */}
        <div className="relative">
          <div className="absolute inset-0 -z-10">
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/6 blur-[80px] rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            <SectionHeader
              eyebrow="Get in Touch"
              title={contact.headline.split(' ').slice(0, 3).join(' ')}
              titleAccent={contact.headline.split(' ').slice(3).join(' ')}
              description={contact.subheadline}
            />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              {/* Left: links + short note (reduced width) */}
              <div className="text-center md:text-left md:col-span-5 flex flex-col h-full">
                <div className="flex flex-col gap-4 mb-6 flex-1">
                  {links.map((link, i) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target={link.download ? undefined : '_blank'}
                        rel={link.download ? undefined : 'noopener noreferrer'}
                        download={link.download}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        className={`h-full flex flex-col justify-between p-5 rounded-2xl bg-[#111118] border border-white/6 transition-all duration-300 group ${link.color} text-left`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-2.5 rounded-xl bg-white/5 ${link.iconColor}`}>
                            <Icon size={18} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs text-slate-600 mb-0.5">{link.label}</p>
                            <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                              {link.value}
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <ArrowUpRight size={14} className="text-slate-700 group-hover:text-slate-400 flex-shrink-0 transition-colors" />
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Right: contact form (increased width) */}
              <div className="mt-4 md:mt-0 md:col-span-7">
                <div className="w-full text-left h-full">
                  <div className="p-6 rounded-2xl bg-[#111118] border border-white/6 glass card-glow h-full flex flex-col">
                    <h4 className="text-sm text-slate-300 font-semibold mb-3">Send a message</h4>
                    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col flex-1" id="contact-form">
                      <ContactForm contactEmail={null} />
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-center text-sm text-slate-600"
            >
              Based in{' '}
              <span className="text-slate-400">Dehradun, India</span>
              {' '}· Available for remote roles worldwide
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact form has been moved to src/components/ContactForm.tsx
