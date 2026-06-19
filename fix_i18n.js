const fs = require('fs');
const path = require('path');

const arPath = path.join(__dirname, 'dictionaries', 'ar.json');
const enPath = path.join(__dirname, 'dictionaries', 'en.json');

const ar = JSON.parse(fs.readFileSync(arPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

ar.about.eyebrow = "من أنا";
ar.about.title2 = "مطور شغوف للشركات التي تحتاج لأكثر من مجرد موقع.";
ar.about.description3 = "يجمع مصطفى بين هندسة الواجهات الأمامية واستراتيجيات التسويق الرقمي في نظام واحد لنمو الأعمال.";

en.about.eyebrow = "About Me";
en.about.title2 = "Passionate Developer for Companies Needing More Than Just a Website.";
en.about.description3 = "Mostafa combines front-end engineering and digital marketing strategies into one business growth system.";

ar.services.eyebrow = "الخدمات";
ar.services.title2 = "خدمات نمو رقمي احترافية للأسواق والشركات المستهدفة.";
ar.services.description2 = "من تصميم الواجهات إلى استراتيجيات التسويق، كل خدمة مصممة لتحويل الانتباه إلى عملاء محتملين.";
ar.services.tag = "تركز على التحويل";

en.services.eyebrow = "Services";
en.services.title2 = "Professional digital growth services for targeted markets and companies.";
en.services.description2 = "From UI design to marketing strategies, every service is tailored to convert attention into leads.";
en.services.tag = "Conversion Focused";

ar.skills.eyebrow = "المهارات";
ar.skills.title2 = "التقنيات والأدوات الأساسية للنمو والتطوير.";
ar.skills.description2 = "أفضل التقنيات لبناء واجهات سريعة وتطبيقات قوية متوافقة مع محركات البحث.";
ar.skills.tag = "جاهز للإنتاج";

en.skills.eyebrow = "Skills";
en.skills.title2 = "Essential Technologies and Tools for Growth and Development.";
en.skills.description2 = "The best technologies for building fast interfaces and robust SEO-friendly applications.";
en.skills.tag = "Production Ready";

ar.projects.eyebrow = "المشاريع";
ar.projects.title2 = "أعمال مختارة عبر المواقع ولوحات التحكم وأنظمة النمو.";
ar.projects.description2 = "تم تصميم كل مشروع ليكون احترافياً، سريع التحميل، ويوجه الزوار نحو اتخاذ إجراء فعال.";

en.projects.eyebrow = "Projects";
en.projects.title2 = "Selected works across websites, dashboards, and growth systems.";
en.projects.description2 = "Each project is designed to be professional, fast-loading, and guide visitors towards taking effective action.";

ar.testimonials.eyebrow = "آراء العملاء";
ar.testimonials.title2 = "محل ثقة من قبل المؤسسات والعيادات والشركات.";
ar.testimonials.description2 = "تجربة المستخدم المميزة تهم عندما تساعد الأعمال على النمو والتحويل بثقة.";

en.testimonials.eyebrow = "Testimonials";
en.testimonials.title2 = "Trusted by institutions, clinics, and companies.";
en.testimonials.description2 = "Exceptional user experience matters when it helps businesses grow and convert with confidence.";

ar.contact.eyebrow = "تواصل معي";
ar.contact.title2 = "دعنا نبني شيئاً مذهلاً معاً";
ar.contact.description2 = "احجز استشارة مجانية أو أرسل رسالة لمناقشة موقعك أو خطة نمو التسويق الرقمي الخاصة بك.";
ar.contact.box_title = "هل أنت مستعد لتحويل الانتباه إلى مبيعات وعملاء؟";
ar.contact.box_desc = "شارك أهدافك الحالية والسوق المستهدف. سيساعدك مصطفى في رسم خطوة واضحة للنجاح.";
ar.contact.box_btn1 = "احجز استشارة";
ar.contact.box_btn2 = "أرسل رسالة";

en.contact.eyebrow = "Contact Me";
en.contact.title2 = "Let's build something amazing together";
en.contact.description2 = "Book a free consultation or send a message to discuss your website or digital marketing growth plan.";
en.contact.box_title = "Ready to turn attention into sales and leads?";
en.contact.box_desc = "Share your current goals and target market. Mostafa will help you outline a clear path to success.";
en.contact.box_btn1 = "Book Consultation";
en.contact.box_btn2 = "Send Message";

ar.hero.tag = "أنظمة نمو للشركات المحلية";
en.hero.tag = "Growth Systems for Local Businesses";

fs.writeFileSync(arPath, JSON.stringify(ar, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));

console.log('Dictionaries updated successfully.');

// Now replace text in components
function replaceInFile(filePath, replacements) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('useLanguage')) {
        content = content.replace(/export function \w+\(\) {/, "import { useLanguage } from \"@/contexts/LanguageContext\";\n\n$&");
        content = content.replace(/export function (\w+)\(\) {\n/, "export function $1() {\n  const { t } = useLanguage();\n");
    }
    
    for (const [oldText, newText] of replacements) {
        content = content.replace(oldText, newText);
    }
    fs.writeFileSync(filePath, content);
}

const comps = path.join(__dirname, 'components', 'sections');

replaceInFile(path.join(comps, 'AboutSection.tsx'), [
    ['eyebrow="من أنا"', 'eyebrow={t("about.eyebrow")}'],
    ['title="مطور شغوف للشركات التي تحتاج لأكثر من مجرد موقع."', 'title={t("about.title2")}'],
    ['description="يجمع مصطفى بين هندسة الواجهات الأمامية واستراتيجيات التسويق الرقمي في نظام واحد لنمو الأعمال."', 'description={t("about.description3")}']
]);

replaceInFile(path.join(comps, 'ServicesSection.tsx'), [
    ['eyebrow="الخدمات"', 'eyebrow={t("services.eyebrow")}'],
    ['title="خدمات نمو رقمي احترافية للأسواق والشركات المستهدفة."', 'title={t("services.title2")}'],
    ['description="من تصميم الواجهات إلى استراتيجيات التسويق، كل خدمة مصممة لتحويل الانتباه إلى عملاء محتملين."', 'description={t("services.description2")}'],
    ['تركز على التحويل', '{t("services.tag")}']
]);

replaceInFile(path.join(comps, 'SkillsSection.tsx'), [
    ['eyebrow="المهارات"', 'eyebrow={t("skills.eyebrow")}'],
    ['title="التقنيات والأدوات الأساسية للنمو والتطوير."', 'title={t("skills.title2")}'],
    ['description="أفضل التقنيات لبناء واجهات سريعة وتطبيقات قوية متوافقة مع محركات البحث."', 'description={t("skills.description2")}'],
    ['جاهز للإنتاج', '{t("skills.tag")}']
]);

replaceInFile(path.join(comps, 'ProjectsSection.tsx'), [
    ['eyebrow="المشاريع"', 'eyebrow={t("projects.eyebrow")}'],
    ['title="أعمال مختارة عبر المواقع ولوحات التحكم وأنظمة النمو."', 'title={t("projects.title2")}'],
    ['description="تم تصميم كل مشروع ليكون احترافياً، سريع التحميل، ويوجه الزوار نحو اتخاذ إجراء فعال."', 'description={t("projects.description2")}'],
    ['عرض مباشر', '{t("projects.live")}'],
    ['title="الكود المصدري"', 'title={t("projects.code")}']
]);

replaceInFile(path.join(comps, 'TestimonialsSection.tsx'), [
    ['eyebrow="آراء العملاء"', 'eyebrow={t("testimonials.eyebrow")}'],
    ['title="محل ثقة من قبل المؤسسات والعيادات والشركات."', 'title={t("testimonials.title2")}'],
    ['description="تجربة المستخدم المميزة تهم عندما تساعد الأعمال على النمو والتحويل بثقة."', 'description={t("testimonials.description2")}']
]);

replaceInFile(path.join(comps, 'ContactSection.tsx'), [
    ['eyebrow="تواصل معي"', 'eyebrow={t("contact.eyebrow")}'],
    ['title="دعنا نبني شيئاً مذهلاً معاً"', 'title={t("contact.title2")}'],
    ['description="احجز استشارة مجانية أو أرسل رسالة لمناقشة موقعك أو خطة نمو التسويق الرقمي الخاصة بك."', 'description={t("contact.description2")}'],
    ['هل أنت مستعد لتحويل الانتباه إلى مبيعات وعملاء؟', '{t("contact.box_title")}'],
    ['شارك أهدافك الحالية والسوق المستهدف. سيساعدك مصطفى في رسم خطوة واضحة للنجاح.', '{t("contact.box_desc")}'],
    ['احجز استشارة', '{t("contact.box_btn1")}'],
    ['أرسل رسالة', '{t("contact.box_btn2")}']
]);

replaceInFile(path.join(comps, 'HeroSection.tsx'), [
    ['أنظمة نمو للشركات المحلية', '{t("hero.tag")}']
]);

console.log('Components updated successfully.');
