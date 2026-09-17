import {
  ArrowLeft,
  ArrowUpLeft,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ExternalLink,
  GraduationCap,
  Laptop,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Sparkles,
  Target,
  UsersRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const resumeUrl = "https://docs.google.com/document/d/10_P3XsCIvA6XNAQqnOmG2pRN__J8Y_t7R8fwLtj7mDg/edit";

const navItems = [
  { label: "نبذة", href: "#about" },
  { label: "الخبرة", href: "#experience" },
  { label: "المهارات", href: "#skills" },
  { label: "التعليم", href: "#education" },
];

const experienceItems = [
  {
    period: "2015 — حتى الآن",
    title: "مدرب حاسوب",
    company: "مؤسسة التدريب المهني",
    description:
      "تدريب المتدربين على مهارات الحاسوب والمهارات الرقمية، مع إعداد الخطط والمواد والاختبارات ومتابعة الجاهزية المهنية.",
    points: [
      "تدريب دورات مدخل بيانات وطابع باستخدام الحاسوب",
      "إعداد وتنفيذ برامج Excel المتقدمة ومهارات Microsoft للموظفين",
      "توظيف أدوات التعليم الإلكتروني والتقنيات الحديثة في التدريب",
    ],
  },
  {
    period: "خبرة 9 أشهر · فترات متباعدة",
    title: "مدرسة مادة الحاسوب",
    company: "وزارة التربية والتعليم",
    description:
      "تدريس مادة الحاسوب للطلبة وتبسيط المفاهيم التقنية بما يناسب مستويات المتعلمين.",
    points: [
      "تطبيق أنشطة وتمارين عملية في تعليم مهارات الحاسوب",
      "متابعة أداء الطلبة وتقييم مدى استيعابهم للمادة",
    ],
  },
];

const technicalSkills = [
  "Microsoft Word",
  "Microsoft Excel",
  "Microsoft PowerPoint",
  "Windows وأنظمة التشغيل",
  "Google Workspace",
  "Microsoft Teams",
  "Zoom",
  "أساسيات الشبكات",
  "الصيانة وحل المشكلات",
  "أمن المعلومات",
  "تطبيقات الذكاء الاصطناعي",
  "إدخال البيانات والطباعة",
];

const peopleSkills = [
  "تبسيط المفاهيم التقنية",
  "التواصل الفعال مع المتدربين",
  "إدارة الصف والمجموعات",
  "إعداد الخطط والاختبارات",
  "تقييم أداء المتدربين",
  "حل المشكلات والقيادة",
  "تدريب المدربين TOT",
  "ريادة الأعمال",
];

const courses = [
  { title: "الذكاء الاصطناعي", hours: "50 ساعة" },
  { title: "تدريب مدربين في الذكاء الاصطناعي (TOT)", hours: "30 ساعة" },
  { title: "تدريب مدربين في المهارات الرقمية (TOT)", hours: "30 ساعة" },
  { title: "تدريب مدربين جدد", hours: "25 ساعة" },
  { title: "مهارات Excel المتقدمة", hours: "25 ساعة" },
  { title: "السلامة التأسيسية", hours: "25 ساعة" },
];

function SectionHeading({ eyebrow, title, number }: { eyebrow: string; title: string; number: string }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0.1, 0.3, 0.6] },
    );
    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main dir="rtl" className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="العودة إلى بداية الصفحة">
          <span className="brand-mark">ر</span>
          <span className="brand-name">رماح الطراونة</span>
        </a>
        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          {navItems.map((item) => (
            <a key={item.href} className={activeSection === item.href.slice(1) ? "active" : ""} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="#contact">
          لنتحدث <ArrowLeft size={16} />
        </a>
        <button className="mobile-menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="التنقل على الهاتف">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}>تواصل معي</a>
          </nav>
        )}
      </header>

      <section id="top" className="hero-section">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-kicker"><span /> ملف مهني · تدريب وتعليم رقمي</p>
          <h1>
            أفتح الأبواب
            <em>بالمعرفة.</em>
          </h1>
          <p className="hero-intro">
            أنا <strong>رماح خالد حماد الطراونة</strong>، مدربة حاسوب ومهارات رقمية أؤمن أن التقنية تصبح أقوى حين تكون مفهومة، عملية، وقريبة من الناس.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">تواصل معي <ArrowLeft size={18} /></a>
            <a className="button button-quiet" href={resumeUrl} target="_blank" rel="noreferrer">عرض السيرة <ExternalLink size={16} /></a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={16} /> الكرك، الأردن</span>
            <span className="meta-divider" />
            <span><Sparkles size={16} /> خبرة تتجاوز 11 عاماً</span>
          </div>
        </div>
        <div className="hero-side-note" aria-hidden="true">
          <span>من الفكرة</span>
          <ArrowDownMark />
          <span>إلى الأثر</span>
        </div>
        <div className="hero-stat-card">
          <span className="stat-icon"><UsersRound size={20} /></span>
          <strong>+200</strong>
          <span>متدرب ومتدربة</span>
          <small>في الحاسوب والمهارات الرقمية</small>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="section-grid">
          <SectionHeading eyebrow="01 · نبذة" title="الخبرة حين تتحول إلى أثر" number="01" />
          <div className="about-copy">
            <p className="lead-copy">
              مدربة حاسوب ومهارات رقمية بخبرة مهنية تزيد عن <mark>11 عاماً</mark> في التدريب والتعليم، منها خبرة في مؤسسة التدريب المهني منذ عام 2015، إلى جانب خبرة في تدريس مادة الحاسوب لدى وزارة التربية والتعليم.
            </p>
            <p>
              أمتلك خبرة في تصميم الخطط التدريبية والتمارين العملية وبطاقات التدريب والاختبارات النظرية والعملية، مع اهتمام متقدم بتطبيقات الذكاء الاصطناعي في التعليم والإنتاجية وتدريب المدربين.
            </p>
            <div className="about-signature">
              <span className="signature-line" />
              <span>التعلّم العملي · الثقة · الاستمرارية</span>
            </div>
          </div>
        </div>
        <div className="impact-grid">
          <div className="impact-card impact-card-dark">
            <BrainCircuit size={28} />
            <strong>100%</strong>
            <span>نسبة النجاح في البرامج التدريبية التي تم تدريسها</span>
          </div>
          <div className="impact-card">
            <Target size={28} />
            <strong>منهج عملي</strong>
            <span>خطط وتمارين وتقييمات مصممة لتقود المتدرب إلى الجاهزية</span>
          </div>
          <div className="impact-card impact-card-accent">
            <Laptop size={28} />
            <strong>رقمية بطبيعتها</strong>
            <span>أدوات Microsoft وGoogle Workspace وAI ضمن تجربة تدريب واضحة</span>
          </div>
        </div>
      </section>

      <section id="experience" className="section experience-section">
        <div className="section-grid section-grid-tight">
          <SectionHeading eyebrow="02 · الخبرة المهنية" title="مسار يتطور مع كل متدرب" number="02" />
          <div className="timeline">
            {experienceItems.map((item, index) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-marker">0{index + 1}</div>
                <div className="timeline-body">
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p>{item.description}</p>
                  <ul>
                    {item.points.map((point) => <li key={point}><Check size={15} /> {point}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="achievement-strip">
          <div className="achievement-label"><Award size={20} /><span>أبرز الإنجازات</span></div>
          <p>المساهمة في تأهيل المتدربين للانتقال إلى سوق العمل، والتواصل مع أصحاب العمل، وتحمل مسؤولية ملف المعهد المتميز ضمن مشروع ETF.</p>
          <ArrowUpLeft className="achievement-arrow" size={24} />
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="section-grid section-grid-tight">
          <SectionHeading eyebrow="03 · المهارات" title="أدوات واضحة لعالم متغير" number="03" />
          <div className="skills-columns">
            <div className="skill-block">
              <div className="skill-block-heading"><Laptop size={20} /><h3>تقنية ورقمية</h3></div>
              <div className="skill-tags">{technicalSkills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </div>
            <div className="skill-block">
              <div className="skill-block-heading"><UsersRound size={20} /><h3>تدريب ومهنية</h3></div>
              <div className="skill-tags">{peopleSkills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </div>
          </div>
        </div>
        <div className="courses-area">
          <div className="courses-heading"><span>تعلم مستمر</span><p>دورات وشهادات تدريبية مختارة</p></div>
          <div className="course-list">
            {courses.map((course, index) => (
              <div className="course-item" key={course.title}>
                <span className="course-index">0{index + 1}</span>
                <span className="course-title">{course.title}</span>
                <span className="course-hours">{course.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section education-section">
        <div className="education-intro">
          <SectionHeading eyebrow="04 · التعليم" title="أساس أكاديمي، فضول مستمر" number="04" />
          <p>يجتمع الأساس الأكاديمي في الحاسوب وإدارة الأعمال الإلكترونية مع شغف دائم بتطوير أدوات التعليم والتدريب.</p>
        </div>
        <div className="education-cards">
          <article className="education-card education-card-featured">
            <span className="education-year">2013</span>
            <GraduationCap size={28} />
            <h3>ماجستير إدارة الأعمال الإلكترونية</h3>
            <p>جامعة مؤتة</p>
          </article>
          <article className="education-card">
            <span className="education-year">2008</span>
            <GraduationCap size={28} />
            <h3>بكالوريوس حاسوب</h3>
            <p>جامعة مؤتة</p>
          </article>
        </div>
        <div className="languages-row"><span>اللغات</span><strong>العربية <small>اللغة الأم</small></strong><strong>الإنجليزية <small>جيد في المحادثة والاستماع</small></strong></div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-glow" aria-hidden="true" />
        <div className="contact-content">
          <p className="hero-kicker"><span /> هل لديك فكرة أو فرصة؟</p>
          <h2>لنبنِ أثراً<br /><em>يستمر.</em></h2>
          <p>للتعاون في التدريب، المهارات الرقمية، أو تطوير برامج تعليمية عملية، يسعدني أن أسمع منك.</p>
          <a className="button button-light" href="mailto:remahkhaled2022@gmail.com">أرسل رسالة <Mail size={18} /></a>
        </div>
        <div className="contact-details">
          <a href="mailto:remahkhaled2022@gmail.com"><Mail size={18} /><span>remahkhaled2022@gmail.com</span></a>
          <a href="tel:0772520111"><Phone size={18} /><span>0772520111</span></a>
          <span><MapPin size={18} /><span>الكرك، الأردن</span></span>
        </div>
        <Quote className="contact-quote" size={120} strokeWidth={1} aria-hidden="true" />
      </section>

      <footer className="site-footer">
        <span>رماح خالد حماد الطراونة</span>
        <span>مدربة حاسوب ومهارات رقمية</span>
        <span>© 2026 · صُممت بعناية</span>
      </footer>
    </main>
  );
}

function ArrowDownMark() {
  return <span className="arrow-down-mark"><ChevronDown size={16} /><ChevronDown size={16} /></span>;
}
