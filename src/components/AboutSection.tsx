import { Code, FileText, Lightbulb, Users, Workflow } from 'lucide-react';
const SkillCard = ({
  icon: Icon,
  title,
  description
}: {
  icon: any;
  title: string;
  description: string;
}) => <div className="glass-card rounded-lg p-6 hover:shadow-xl transition-all duration-300">
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 p-3 rounded-full bg-portfolio-blue/10">
        <Icon className="h-6 w-6 text-portfolio-blue" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-portfolio-gray">{description}</p>
    </div>
  </div>;
const AboutSection = () => {
  const skills = [{
    icon: Code,
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces with React, Vue, and Angular."
  }, {
    icon: Workflow,
    title: "Backend Development",
    description: "Building robust APIs and server-side applications with Node.js and Express."
  }, {
    icon: Lightbulb,
    title: "UX/UI Design",
    description: "Designing user-centered experiences that are both functional and aesthetically pleasing."
  }, {
    icon: Users,
    title: "Team Collaboration",
    description: "Working effectively with cross-functional teams to deliver exceptional products."
  }];
  return <section id="about" className="section-padding">
      
      
      {/* Background decorative elements */}
      <div className="absolute -z-10 top-1/2 left-0 w-72 h-72 rounded-full bg-portfolio-teal/10 blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 right-0 w-96 h-96 rounded-full bg-portfolio-blue/10 blur-3xl"></div>
    </section>;
};
export default AboutSection;