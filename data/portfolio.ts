import {
  FiBarChart2,
  FiBriefcase,
  FiCode,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiNavigation,
  FiSearch,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import type {
  ContactMethod,
  NavItem,
  Project,
  Service,
  Skill,
  SocialLink,
  Stat,
  Testimonial,
} from "@/types/portfolio";

export const navItems = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "services", href: "#services" },
  { key: "contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/", icon: FiGithub },
];

export const services: Service[] = [
  {
    title: "تطوير المواقع والتطبيقات",
    description:
      "بناء مواقع برمجية احترافية وسريعة، وتطوير المتاجر الإلكترونية مع ربط بوابات الدفع الإلكتروني وتأمين المواقع.",
    icon: FiCode,
    accent: "blue",
  },
  {
    title: "التسويق الرقمي وإدارة الحملات",
    description:
      "إدارة الحملات الإعلانية والتسويق الرقمي لمساعدة الشركات على زيادة المبيعات والوصول للجمهور المستهدف.",
    icon: FiTarget,
    accent: "purple",
  },
  {
    title: "تحسين محركات البحث (SEO)",
    description:
      "تصميم وتطوير مواقع متوافقة مع معايير SEO لمساعدة الشركات على تصدر نتائج البحث وزيادة الزيارات المجانية.",
    icon: FiSearch,
    accent: "green",
  },
  {
    title: "واجهات وتجربة المستخدم",
    description:
      "تحسين تجربة المستخدم (UX) وتصميم واجهات المستخدم (UI) لضمان تفاعل سلس ومميز مع زوار موقعك.",
    icon: FiTrendingUp,
    accent: "blue",
  },
];

export const skills: Skill[] = [
  { name: "React.js & Next.js", level: 95, accent: "blue" },
  { name: "HTML, CSS, JS", level: 95, accent: "purple" },
  { name: "Node.js", level: 85, accent: "green" },
  { name: "PHP & Laravel", level: 85, accent: "purple" },
  { name: "WordPress", level: 90, accent: "blue" },
  { name: "SEO", level: 90, accent: "green" },
  { name: "UI/UX Design", level: 80, accent: "purple" },
  { name: "Google Ads", level: 85, accent: "blue" },
];

export const projects: Project[] = [
  {
    title: "EyeRetina - Dr. Ashraf Shoukry",
    description:
      "موقع طبي متقدم لعيادة EyeRetina التخصصية لطب وجراحة الشبكية. يتميز بتصميم عصري داكن (Dark Mode)، عرض تفصيلي للخدمات، ونظام حجز مواعيد سلس.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"],
    liveUrl: "",
    sourceUrl: "",
    accent: "blue",
    visual: "medical",
    image: "/eyeretina.png",
  },

  {
    title: "رعاية تك - سيستم إدارة عيادات",
    description:
      "نظام متكامل لإدارة العيادات، يتيح لك إدارة عيادتك بالكامل من شاشة واحدة. يشمل تنظيم ملفات المرضى، جدولة المواعيد، وتتبع الحسابات.",
    techStack: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    liveUrl: "",
    sourceUrl: "",
    accent: "blue",
    visual: "medical",
    image: "/ra3aya.png",
  },
  {
    title: "Dr. Ahmed Fawzy Dental Clinic",
    description:
      "رعاية أسنان استثنائية وعلاج متكامل. موقع تعريفي للعيادة يتيح للمرضى تصفح الخدمات، وحجز الاستشارات بسهولة.",
    techStack: ["Next.js", "React", "Tailwind CSS", "SEO"],
    liveUrl: "",
    sourceUrl: "",
    accent: "green",
    visual: "medical",
    image: "/dr-fawzy.png",
  },

  {
    title: "Premium Real Estate Hub",
    description:
      "منصة عقارية حديثة لعرض العقارات مع خريطة تفاعلية، خيارات تصفية متقدمة، وتصميم أنيق.",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Maps API"],
    liveUrl: "",
    sourceUrl: "",
    accent: "green",
    visual: "realEstate",
    image: "/real_estate.png",
  },
  {
    title: "Fitness Tracker App",
    description:
      "تطبيق ويب لتتبع اللياقة البدنية، يعرض رسوم بيانية تفاعلية للنشاط اليومي، الأهداف، وسجل التمارين.",
    techStack: ["Vue.js", "Tailwind", "Firebase", "Chart.js"],
    liveUrl: "",
    sourceUrl: "",
    accent: "blue",
    visual: "growth",
    image: "/fitness_tracker.png",
  },
];

export const stats: Stat[] = [
  { value: 50, suffix: "+", label: "مشاريع مكتملة", animated: true },
  { value: 100, suffix: "+", label: "عملاء سعداء", animated: true },
  { value: 5, suffix: "+", label: "سنوات خبرة", animated: true },
  { value: "تقييم عالي", label: "مستقل" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "قام مصطفى ببناء موقعنا باحترافية عالية وربطه بحملات إعلانية ضاعفت من مبيعاتنا بشكل ملحوظ.",
    name: "أحمد محمود",
    role: "مؤسس",
    company: "شركة برمجيات رائدة",
  },
  {
    quote:
      "خبرة ممتازة في تحسين محركات البحث، لاحظنا زيادة كبيرة في الزيارات العضوية بعد العمل معه.",
    name: "سارة كمال",
    role: "مديرة تسويق",
    company: "متجر إلكتروني",
  },
  {
    quote:
      "لوحة التحكم التي صممها سهلت علينا إدارة البيانات والعملاء بشكل لا يصدق، أنصح بشدة بالعمل معه.",
    name: "عمر خالد",
    role: "مدير عمليات",
    company: "مؤسسة طبية",
  },
];

export const contactMethods: ContactMethod[] = [
  { label: "البريد الإلكتروني", value: "mostafa.3slia2020@gmail.com", href: "mailto:mostafa.3slia2020@gmail.com", icon: FiMail },
  { label: "واتساب", value: "+20 106 103 6045", href: "https://wa.me/201061036045", icon: FaWhatsapp },
  { label: "جيت هب", value: "github.com/mostafa-ahmed", href: "https://github.com/", icon: FiGithub },
];

export const heroChips = ["MERN Stack", "Next.js", "WordPress", "SEO", "APIs", "UI/UX"];

export const aboutHighlights = [
  {
    title: "لوحات تحكم SaaS متقدمة",
    description: "بناء وتطوير واجهات المستخدم ولوحات التحكم المتقدمة للشركات الناشئة والمؤسسات.",
    icon: FiGlobe,
  },
  {
    title: "المتاجر وبوابات الدفع",
    description: "تطوير المتاجر الإلكترونية مع ربط بوابات الدفع الإلكتروني وتأمين المواقع.",
    icon: FiCode,
  },
  {
    title: "تأمين المواقع والبيانات",
    description: "تأمين المواقع والتطبيقات وحماية البيانات الحساسة من الاختراقات.",
    icon: FiBarChart2,
  },
  {
    title: "المنصات الصحفية والطبية",
    description: "خبرة واسعة في بناء المنصات الإخبارية، الطبية، وصفحات الهبوط عالية التحويل.",
    icon: FiNavigation,
  },
];
