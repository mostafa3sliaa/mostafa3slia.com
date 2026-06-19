const fs = require('fs');
const path = require('path');

const arPath = path.join(__dirname, 'dictionaries', 'ar.json');
const enPath = path.join(__dirname, 'dictionaries', 'en.json');

const ar = JSON.parse(fs.readFileSync(arPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// Adding data to dictionaries
ar.data = {
  headerName: "مصطفى أحمد",
  services: [
    { title: "تطوير المواقع والتطبيقات", description: "بناء مواقع برمجية احترافية وسريعة، وتطوير المتاجر الإلكترونية مع ربط بوابات الدفع الإلكتروني وتأمين المواقع." },
    { title: "التسويق الرقمي وإدارة الحملات", description: "إدارة الحملات الإعلانية والتسويق الرقمي لمساعدة الشركات على زيادة المبيعات والوصول للجمهور المستهدف." },
    { title: "تحسين محركات البحث (SEO)", description: "تصميم وتطوير مواقع متوافقة مع معايير SEO لمساعدة الشركات على تصدر نتائج البحث وزيادة الزيارات المجانية." },
    { title: "واجهات وتجربة المستخدم", description: "تحسين تجربة المستخدم (UX) وتصميم واجهات المستخدم (UI) لضمان تفاعل سلس ومميز مع زوار موقعك." }
  ],
  projects: [
    { title: "Dr. Ashraf Retina Clinic", description: "عيادة طب وجراحة العيون، موقع مميز يقدم تجربة سلسة للمرضى. يشمل حجز مواعيد عبر واتساب، SEO، تصميم متجاوب، دعم متعدد اللغات، ومدونة طبية." },
    { title: "لوحة تحكم SaaS", description: "لوحة تحكم متقدمة لإدارة المبيعات والبيانات مع واجهات مستخدم حديثة وتكامل مع خدمات الدفع." },
    { title: "متجر إلكتروني حديث", description: "متجر متكامل مع بوابات الدفع الإلكتروني، إدارة المنتجات، وتأمين عالٍ للبيانات." },
    { title: "منصة صحفية إخبارية", description: "موقع إخباري سريع الأداء متوافق تماماً مع محركات البحث SEO، ولوحة تحكم لإدارة المحتوى." }
  ],
  stats: [
    { value: "50", label: "مشاريع مكتملة" },
    { value: "100", label: "عملاء سعداء" },
    { value: "5", label: "سنوات خبرة" },
    { value: "تقييم عالي", label: "مستقل" }
  ],
  testimonials: [
    { quote: "قام مصطفى ببناء موقعنا باحترافية عالية وربطه بحملات إعلانية ضاعفت من مبيعاتنا بشكل ملحوظ.", name: "أحمد محمود", role: "مؤسس", company: "شركة برمجيات رائدة" },
    { quote: "خبرة ممتازة في تحسين محركات البحث، لاحظنا زيادة كبيرة في الزيارات العضوية بعد العمل معه.", name: "سارة كمال", role: "مديرة تسويق", company: "متجر إلكتروني" },
    { quote: "لوحة التحكم التي صممها سهلت علينا إدارة البيانات والعملاء بشكل لا يصدق، أنصح بشدة بالعمل معه.", name: "عمر خالد", role: "مدير عمليات", company: "مؤسسة طبية" }
  ],
  contactMethods: [
    { label: "البريد الإلكتروني" },
    { label: "واتساب" },
    { label: "جيت هب" }
  ],
  aboutHighlights: [
    { title: "لوحات تحكم SaaS متقدمة", description: "بناء وتطوير واجهات المستخدم ولوحات التحكم المتقدمة للشركات الناشئة والمؤسسات." },
    { title: "المتاجر وبوابات الدفع", description: "تطوير المتاجر الإلكترونية مع ربط بوابات الدفع الإلكتروني وتأمين المواقع." },
    { title: "تأمين المواقع والبيانات", description: "تأمين المواقع والتطبيقات وحماية البيانات الحساسة من الاختراقات." },
    { title: "المنصات الصحفية والطبية", description: "خبرة واسعة في بناء المنصات الإخبارية، الطبية، وصفحات الهبوط عالية التحويل." }
  ]
};

en.data = {
  headerName: "Mostafa Ahmed",
  services: [
    { title: "Web & App Development", description: "Building professional and fast websites, developing e-commerce stores, integrating payment gateways, and securing websites." },
    { title: "Digital Marketing & Campaigns", description: "Managing advertising campaigns and digital marketing to help companies increase sales and reach their target audience." },
    { title: "Search Engine Optimization (SEO)", description: "Designing and developing SEO-compliant websites to help companies top search results and increase organic traffic." },
    { title: "UI/UX Design", description: "Improving User Experience (UX) and User Interface (UI) design to ensure a smooth and distinctive interaction with your website visitors." }
  ],
  projects: [
    { title: "Dr. Ashraf Retina Clinic", description: "A premium ophthalmology and retina clinic website designed and developed to provide a seamless patient experience. Includes service pages, SEO optimization, responsive design, WhatsApp appointment booking, multilingual support, medical blog system, and modern UI/UX built with Next.js." },
    { title: "SaaS Dashboard", description: "Advanced dashboard for managing sales and data with modern user interfaces and integration with payment services." },
    { title: "Modern E-commerce", description: "Integrated store with electronic payment gateways, product management, and high data security." },
    { title: "News Press Platform", description: "Fast-performing news website fully compliant with SEO search engines, and a content management dashboard." }
  ],
  stats: [
    { value: "50", label: "Completed Projects" },
    { value: "100", label: "Happy Clients" },
    { value: "5", label: "Years Experience" },
    { value: "High Rating", label: "Mostaql" }
  ],
  testimonials: [
    { quote: "Mostafa built our website highly professionally and linked it to ad campaigns that significantly doubled our sales.", name: "Ahmed Mahmoud", role: "Founder", company: "Leading Software Company" },
    { quote: "Excellent SEO expertise. We noticed a massive increase in organic traffic after working with him.", name: "Sarah Kamal", role: "Marketing Manager", company: "E-commerce Store" },
    { quote: "The dashboard he designed made it incredibly easy for us to manage data and clients. I highly recommend working with him.", name: "Omar Khaled", role: "Operations Manager", company: "Medical Institution" }
  ],
  contactMethods: [
    { label: "Email" },
    { label: "WhatsApp" },
    { label: "GitHub" }
  ],
  aboutHighlights: [
    { title: "Advanced SaaS Dashboards", description: "Building and developing advanced user interfaces and dashboards for startups and enterprises." },
    { title: "Stores & Payment Gateways", description: "Developing e-commerce stores with electronic payment gateway integration and website security." },
    { title: "Website & Data Security", description: "Securing websites and applications, and protecting sensitive data from breaches." },
    { title: "Press & Medical Platforms", description: "Extensive experience in building news platforms, medical sites, and high-converting landing pages." }
  ]
};

fs.writeFileSync(arPath, JSON.stringify(ar, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));

function replaceInFile(filePath, replacements, needsContext = false) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (needsContext && !content.includes('useLanguage')) {
    content = content.replace(/export function \w+\(\) {/, "import { useLanguage } from \"@/contexts/LanguageContext\";\n\n$&");
    content = content.replace(/export function (\w+)\(\) {\n/, "export function $1() {\n  const { t, dict } = useLanguage();\n");
  } else if (needsContext && content.includes('useLanguage') && !content.includes('dict')) {
    content = content.replace(/const {([^}]+)} = useLanguage\(\);/, "const {$1, dict} = useLanguage();");
  }
  for (const [oldText, newText] of replacements) {
    content = content.replace(oldText, newText);
  }
  fs.writeFileSync(filePath, content);
}

const comps = path.join(__dirname, 'components');
const sections = path.join(comps, 'sections');

// Header
replaceInFile(path.join(comps, 'Header.tsx'), [
  ['مصطفى أحمد', '{dict.data.headerName}']
], true);

// Footer
let footerPath = path.join(comps, 'Footer.tsx');
if(fs.existsSync(footerPath)) {
    let footerContent = fs.readFileSync(footerPath, 'utf8');
    if(!footerContent.includes('useLanguage')) {
        footerContent = footerContent.replace(/export function Footer\(\) {/, "import { useLanguage } from \"@/contexts/LanguageContext\";\n\n$&");
        footerContent = footerContent.replace(/export function Footer\(\) {/, "export function Footer() {\n  const { t, dict } = useLanguage();");
    } else {
        footerContent = footerContent.replace(/const { t } = useLanguage\(\);/, "const { t, dict } = useLanguage();");
    }
    footerContent = footerContent.replace(/مصطفى أحمد/g, '{dict.data.headerName}');
    fs.writeFileSync(footerPath, footerContent);
}

// Services
replaceInFile(path.join(sections, 'ServicesSection.tsx'), [
  ['{services.map(({ title, description, icon: Icon, accent }, index) => {', '{services.map(({ icon: Icon, accent }, index) => {\n            const {title, description} = dict.data.services[index];']
], true);

// Projects
replaceInFile(path.join(sections, 'ProjectsSection.tsx'), [
  ['{projects.map((project, index) => {', '{projects.map((project, index) => {\n            const dictProject = dict.data.projects[index];\n            const title = dictProject.title;\n            const description = dictProject.description;'],
  ['{project.title}', '{title}'],
  ['{project.description}', '{description}']
], true);

// Stats
replaceInFile(path.join(sections, 'StatsSection.tsx'), [
  ['{stats.map((stat, index) => (', '{stats.map((stat, index) => (\n            <div key={index} className="relative p-7 text-center sm:p-8">'],
  ['key={stat.label}', ''],
  ['stat.animated ? (', 'stat.animated ? ('],
  ['stat.value', 'dict.data.stats[index].value'],
  ['{stat.label}', '{dict.data.stats[index].label}']
], true);

// Testimonials
replaceInFile(path.join(sections, 'TestimonialsSection.tsx'), [
  ['{testimonials.map((testimonial, index) => (', '{testimonials.map((testimonial, index) => {\n            const dictTestimonial = dict.data.testimonials[index];\n            return ('],
  ['{testimonial.quote}', '{dictTestimonial.quote}'],
  ['{testimonial.name}', '{dictTestimonial.name}'],
  ['{testimonial.role}', '{dictTestimonial.role}'],
  ['{testimonial.company}', '{dictTestimonial.company}'],
  ['key={testimonial.name}', 'key={index}']
], true);

// Contact
replaceInFile(path.join(sections, 'ContactSection.tsx'), [
  ['{contactMethods.map((method) => {', '{contactMethods.map((method, index) => {\n                  const dictMethod = dict.data.contactMethods[index];'],
  ['{method.label}', '{dictMethod.label}']
], true);

// About
replaceInFile(path.join(sections, 'AboutSection.tsx'), [
  ['{aboutHighlights.map((item, index) => (', '{aboutHighlights.map((item, index) => {\n              const dictItem = dict.data.aboutHighlights[index];\n              return ('],
  ['{item.title}', '{dictItem.title}'],
  ['{item.description}', '{dictItem.description}'],
  ['key={item.title}', 'key={index}']
], true);

console.log('Fixed data translations successfully!');
