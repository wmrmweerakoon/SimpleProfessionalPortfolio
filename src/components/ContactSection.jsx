import { ExternalLink } from "lucide-react";
import { mdiLinkedin, mdiEmail, mdiPhone } from '@mdi/js';
import { Icon } from '@mdi/react';


export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out to me through any of these channels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* WhatsApp Card */}
          <a
            href="https://wa.me/0786979790"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 rounded-xl bg-card hover:bg-card/80 transition-colors border border-border shadow-sm hover:shadow-md group text-center"
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
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/ruvishan-maleesha-814510378"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 rounded-xl bg-card hover:bg-card/80 transition-colors border border-border shadow-sm hover:shadow-md group text-center"
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
          </a>

          {/* Email Card */}
          <a
            href="mailto:ruvishan.m.weerakoon@gmail.com"
            className="flex flex-col items-center justify-center p-8 rounded-xl bg-card hover:bg-card/80 transition-colors border border-border shadow-sm hover:shadow-md group text-center"
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
          </a>
        </div>
      </div>
    </section>
 );
};
