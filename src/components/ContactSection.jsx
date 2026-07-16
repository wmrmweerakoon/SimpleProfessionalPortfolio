import { ExternalLink } from "lucide-react";
import { mdiLinkedin, mdiEmail, mdiPhone } from '@mdi/js';
import { Icon } from '@mdi/react';
import { motion } from "framer-motion";


export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-4 relative bg-secondary/5">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary"> Touch</span>
          </h2>

          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Feel free to reach out to me through any of these channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* WhatsApp Card */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            href="https://wa.me/0786979790"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 rounded-xl bg-card/40 backdrop-blur-md border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-2 group text-center transition-all duration-300 hover:bg-card/60"
          >
            <div className="p-4 rounded-full bg-green-500 shadow-lg shadow-green-500/20 mb-4">
              <Icon path={mdiPhone} size={1.5} color="white"/>
            </div>
            <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
            <p className="text-muted-foreground mb-3">+94 78 697 9790</p>
            <div className="flex items-center text-green-500 group-hover:underline">
              Message Now
              <ExternalLink size={16} className="ml-1 text-green-500" />
            </div>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="https://www.linkedin.com/in/ruvishan-maleesha-814510378"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 rounded-xl bg-card/40 backdrop-blur-md border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-2 group text-center transition-all duration-300 hover:bg-card/60"
          >
            <div className="p-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/20 mb-4">
              <Icon path={mdiLinkedin} size={1.5} color="white"/>
            </div>
            <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
            <p className="text-muted-foreground mb-3">Ruvishan Maleesha</p>
            <div className="flex items-center text-blue-500 group-hover:underline">
              View Profile
              <ExternalLink size={16} className="ml-1 text-blue-500" />
            </div>
          </motion.a>

          {/* Email Card */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="mailto:ruvishan.m.weerakoon@gmail.com"
            className="flex flex-col items-center justify-center p-8 rounded-xl bg-card/40 backdrop-blur-md border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-2 group text-center transition-all duration-300 hover:bg-card/60"
          >
            <div className="p-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/20 mb-4">
              <Icon path={mdiEmail} size={1.5} color="white"/>
            </div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-muted-foreground mb-3 truncate">ruvishan.m.weerakoon@gmail.com</p>
            <div className="flex items-center text-blue-500 group-hover:underline">
              Send Email
              <ExternalLink size={16} className="ml-1 text-blue-500" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
 );
};
