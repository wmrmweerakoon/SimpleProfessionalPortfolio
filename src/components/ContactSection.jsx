import {
  Linkedin,
  Mail,
  Phone,
  ExternalLink
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out to me through any of these channels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <a
            href="https://wa.me/0786979790"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 rounded-xl bg-card hover:bg-card/80 transition-colors border border-border shadow-sm hover:shadow-md"
          >
            <div className="p-3 rounded-full bg-green-500/10 mb-4">
              <Phone className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
            <p className="text-center text-muted-foreground text-sm mb-3">
              +94 78 697 9790
            </p>
            <div className="inline-flex items-center text-sm text-green-500 hover:underline">
              Message Now
              <ExternalLink size={14} className="ml-1 text-green-500" />
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ruvishan-maleesha-814510378"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 rounded-xl bg-card hover:bg-card/80 transition-colors border border-border shadow-sm hover:shadow-md"
          >
            <div className="p-3 rounded-full bg-blue-500/10 mb-4">
              <Linkedin className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
            <p className="text-center text-muted-foreground text-sm mb-3">
              Ruvishan Maleesha
            </p>
            <div className="inline-flex items-center text-sm text-blue-500 hover:underline">
              View Profile
              <ExternalLink size={14} className="ml-1 text-blue-500" />
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:ruvishan.m.weerakoon@gmail.com"
            className="flex flex-col items-center justify-center p-6 rounded-xl bg-card hover:bg-card/80 transition-colors border border-border shadow-sm hover:shadow-md"
          >
            <div className="p-3 rounded-full bg-blue-500/10 mb-4">
              <Mail className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-center text-muted-foreground text-sm mb-3">
              ruvishan.m.weerakoon@gmail.com
            </p>
            <div className="inline-flex items-center text-sm text-blue-500 hover:underline">
              Send Email
              <ExternalLink size={14} className="ml-1 text-blue-500" />
            </div>
          </a>
        </div>
      </div>
    </section>
 );
};
