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

        <div className="space-y-6 max-w-2xl mx-auto">
          {/* WhatsApp */}
          <a
            href="https://wa.me/0786979790"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 rounded-xl bg-card hover:bg-card/80 transition-colors border border-border shadow-sm hover:shadow-md group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-green-500 shadow-lg shadow-green-500/20">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">WhatsApp</h3>
                <p className="text-muted-foreground">+94 78 697 9790</p>
              </div>
            </div>
            <div className="flex items-center text-green-500 group-hover:underline">
              Message Now
              <ExternalLink size={16} className="ml-1 text-green-500" />
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ruvishan-maleesha-814510378"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 rounded-xl bg-card hover:bg-card/80 transition-colors border border-border shadow-sm hover:shadow-md group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/20">
                <Linkedin className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">LinkedIn</h3>
                <p className="text-muted-foreground">Ruvishan Maleesha</p>
              </div>
            </div>
            <div className="flex items-center text-blue-500 group-hover:underline">
              View Profile
              <ExternalLink size={16} className="ml-1 text-blue-500" />
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:ruvishan.m.weerakoon@gmail.com"
            className="flex items-center justify-between p-5 rounded-xl bg-card hover:bg-card/80 transition-colors border border-border shadow-sm hover:shadow-md group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/20">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col min-w-0"> {/* Added min-w-0 to allow text truncation */}
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-muted-foreground truncate">ruvishan.m.weerakoon@gmail.com</p>
              </div>
            </div>
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
