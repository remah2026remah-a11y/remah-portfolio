import {
  ArrowLeft,
  ArrowUp,
  ArrowUpLeft,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ExternalLink,
  FileCode2,
  FileText,
  Film,
  GraduationCap,
  Image as ImageIcon,
  Laptop,
  Mail,
  MapPin,
  Menu,
  Moon,
  Music2,
  Phone,
  Quote,
  Search,
  Share2,
  Sparkles,
  Sun,
  Target,
  UsersRound,
  X,
  Copy,
  MessageCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

const resumeUrl = "/resume";
const heroVisual = "/manus-storage/remah-hero-training_02f3d472.png";
const gamesVisual = "/manus-storage/remah-portfolio-collage_4588081b.png";
const videoVisual = "/manus-storage/remah-mentor-session_ef99f151.png";
const classroomVisual = "/manus-storage/remah-mentor-session_ef99f151.png";
const creativeVisual = "/manus-storage/remah-portfolio-collage_4588081b.png";

const navItems = [
  { ar: "نبذة", en: "About", href: "#about" },
  { ar: "التوصيات", en: "Reviews", href: "#testimonials" },
  { ar: "الأعمال", en: "Work", href: "#works" },
  { ar: "الخبرة", en: "Experience", href: "#experience" },
  { ar: "المهارات", en: "Skills", href: "#skills" },
  { ar: "التعليم", en: "Education", href: "#education" },
];

const testimonials = [
  { ar: "أسلوب رماح في التدريب واضح وعملي، وتعرف كيف تحول المعلومة التقنية إلى خطوة قابلة للتطبيق.", en: "Remah's training style is clear and practical. She turns technical ideas into confident, actionable steps.", nameAr: "متدربة في المهارات الرقمية", nameEn: "Digital skills trainee", roleAr: "برنامج تدريبي مهني", roleEn: "Professional training program" },
  { ar: "تجمع بين الخبرة والهدوء والقدرة على تبسيط المفاهيم، وهذا ما جعل أثر التدريب مستمراً بعد انتهاء الدورة.", en: "She combines experience, patience, and clarity, creating learning impact that lasts beyond the course.", nameAr: "زميلة في التدريب", nameEn: "Training colleague", roleAr: "مؤسسة التدريب المهني", roleEn: "Vocational Training Corporation" },
  { ar: "الأعمال الرقمية التي طورتها متنوعة ومبتكرة، وتظهر اهتماماً حقيقياً بالتجربة وسهولة الوصول.", en: "Her digital work is varied and inventive, with a genuine focus on experience, accessibility, and learning.", nameAr: "شريك مشروع تعليمي", nameEn: "Education project partner", roleAr: "مبادرة تعليمية رقمية", roleEn: "Digital learning initiative" },
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

type WorkCategory = "all" | "games" | "video" | "pages" | "visual" | "audio" | "files";
type WorkItem = { id: string; name: string; category: Exclude<WorkCategory, "all">; label: string; folder: string; url: string; featured?: boolean };

type WorkSort = "latest" | "alpha";

function getDriveId(url: string) {
  return url.match(/\/d\/([^/]+)/)?.[1] ?? "";
}

function canPreviewWork(work: WorkItem) {
  return work.category === "video" || work.category === "visual";
}

function getWorkVisual(work: WorkItem) {
  const driveId = getDriveId(work.url);
  if (driveId && ["games", "pages", "video", "visual"].includes(work.category)) {
    return `https://drive.google.com/thumbnail?id=${driveId}&sz=w1000`;
  }
  if (work.category === "games" || work.category === "pages") return gamesVisual;
  if (work.category === "video" || work.category === "visual") return videoVisual;
  return undefined;
}

function getFallbackVisual(work: WorkItem) {
  return work.category === "games" || work.category === "pages" ? gamesVisual : videoVisual;
}

const workItems: WorkItem[] = [
  { id: "bomber-html", name: "BomberHero3D", category: "games", label: "لعبة HTML ثلاثية الأبعاد", folder: "اليوم الرابع", url: "https://drive.google.com/file/d/1emQkqt4ghcXwlrNWvklYqVn35vD9im_H/view?usp=drivesdk", featured: true },
  { id: "bomber-zip", name: "BomberHeroRemah", category: "games", label: "حزمة لعبة قابلة للتنزيل", folder: "اليوم الرابع", url: "https://drive.google.com/file/d/1e9AdehaUS9ng154_jWKuWzj21BQzWZm0/view?usp=drivesdk" },
  { id: "stylized-bomb", name: "Stylized 3D Bomb Game", category: "games", label: "لعبة ثلاثية الأبعاد", folder: "اليوم الرابع", url: "https://drive.google.com/file/d/18bxrLtH--D0AqsTfPtqJ6J7pOgmb8pXl/view?usp=drivesdk" },
  { id: "little-stars", name: "Little Stars Nursery", category: "pages", label: "موقع تعليمي للأطفال", folder: "اليوم الرابع", url: "https://drive.google.com/file/d/1p74-FVUhgz7iERRvSY4nSua5-csu1iVe/view?usp=drivesdk", featured: true },
  { id: "game2", name: "لعبة 2", category: "games", label: "لعبة ويب تفاعلية", folder: "اليوم الأول", url: "https://drive.google.com/file/d/16shfeRsyv8g9XDEq8_LzqL0WACPojNz8/view?usp=drivesdk" },
  { id: "game-zip", name: "لعبة", category: "games", label: "حزمة لعبة", folder: "اليوم الأول", url: "https://drive.google.com/file/d/138Qi_TPQPLUTBInf-5awbvDXR6qVQ6iO/view?usp=drivesdk" },
  { id: "hair-colors", name: "صبغات الشعر", category: "pages", label: "صفحة ويب تفاعلية", folder: "اليوم الأول", url: "https://drive.google.com/file/d/1NtlsWF5bE82HlIp0_YKBCCWWNWDAp6HC/view?usp=drivesdk" },
  { id: "science", name: "تجربة علمية", category: "pages", label: "تجربة تعليمية تفاعلية", folder: "اليوم الأول", url: "https://drive.google.com/file/d/1xIVT6jsarYDqi5jHwvZOmvJ7c9RZEJL-/view?usp=drivesdk" },
  { id: "input-devices", name: "أجهزة الإدخال في الحاسوب", category: "files", label: "عرض تقديمي PPTX", folder: "اليوم الخامس", url: "https://docs.google.com/presentation/d/1P1PIUZivuQB59yh73DxR-WuYtx62ApWG/edit?usp=drivesdk", featured: true },
  { id: "input-devices-copy", name: "أجهزة الإدخال في الحاسوب (نسخة)", category: "files", label: "عرض تقديمي PPTX", folder: "اليوم الخامس", url: "https://docs.google.com/presentation/d/11ut0fEoL-MD0sdtgZAz3U4wLit2J7AC0/edit?usp=drivesdk" },
  { id: "manus-pdf", name: "عرض تقديمي Manus", category: "files", label: "ملف PDF", folder: "اليوم الخامس", url: "https://drive.google.com/file/d/1IxyqCpHTNDUK4ZJugnoU1Tuh8od4wh8r/view?usp=drivesdk" },
  { id: "video-skill", name: "فيديو باستخدام المهارة", category: "video", label: "فيديو تعليمي", folder: "اليوم الخامس", url: "https://drive.google.com/file/d/1flxVP00lrVHSZo4ncdB3NQ5sDtQT37NC/view?usp=drivesdk" },
  { id: "untitled-video", name: "فيديو بدون عنوان", category: "video", label: "فيديو إبداعي", folder: "اليوم الثالث", url: "https://drive.google.com/file/d/1ubkYL6Lt_jvHCb99Ez2cHVhIRHzyeO0B/view?usp=drivesdk" },
  { id: "ai-video", name: "AI video", category: "video", label: "تجربة فيديو بالذكاء الاصطناعي", folder: "اليوم الثالث", url: "https://drive.google.com/file/d/1JdnsZipQ9z11CSoPXQnZapttCqtvHWAP/view?usp=drivesdk", featured: true },
  { id: "vids3", name: "فيديو Vids 3", category: "video", label: "فيديو إبداعي", folder: "اليوم الثالث", url: "https://drive.google.com/file/d/1Dq3XKjvwOsz75iDzj7EHOkJTvxVNb1ww/view?usp=drivesdk" },
  { id: "vids2", name: "فيديو Vids 2", category: "video", label: "فيديو إبداعي", folder: "اليوم الثالث", url: "https://drive.google.com/file/d/1DjK3hjcLnc_QnUako1ytzpce9vU_T7OF/view?usp=drivesdk" },
  { id: "vids", name: "فيديو Vids", category: "video", label: "فيديو قصير", folder: "اليوم الثالث", url: "https://drive.google.com/file/d/1F9-DbY_sLxAVleO8hCappC7wOvRvUEqw/view?usp=drivesdk" },
  { id: "from-photo", name: "من صورة لفيديو", category: "video", label: "تحويل صورة إلى فيديو", folder: "اليوم الثالث", url: "https://drive.google.com/file/d/1s81k78yjDTMplEFznu-EfzTmvGwXcQHQ/view?usp=drivesdk" },
  { id: "sand-seed", name: "ماسة ودانه", category: "video", label: "فيديو قصصي", folder: "اليوم الثالث", url: "https://drive.google.com/file/d/1_LY9qZ6p9NPABGb6tDisLortRk7KkCz9/view?usp=drivesdk", featured: true },
  { id: "seed-ar", name: "دانه بالعربي", category: "video", label: "فيديو تعليمي عربي", folder: "اليوم الثالث", url: "https://drive.google.com/file/d/1a7nwjMMkbG-ok8KmuZhac-mOb5QuQwPn/view?usp=drivesdk" },
  { id: "sand-ar", name: "ماسة بالعربي", category: "video", label: "فيديو تعليمي عربي", folder: "اليوم الثالث", url: "https://drive.google.com/file/d/1GFRnz9dsf5_ouuDLNxOI579YZ5A3yZm9/view?usp=drivesdk" },
  { id: "sand-en", name: "ماسة بالإنجليزية", category: "video", label: "فيديو تعليمي إنجليزي", folder: "اليوم الثاني", url: "https://drive.google.com/file/d/1ucsg2SgViCxglXOOvWu1wwd6lYo8gD-T/view?usp=drivesdk" },
  { id: "step-sun", name: "خطوة نحو الشمس", category: "video", label: "فيديو قصصي", folder: "اليوم الثاني", url: "https://drive.google.com/file/d/1ALyC1M5_XO8yaHdAIVYVKECcBMogBm-k/view?usp=drivesdk", featured: true },
  { id: "morning-mase", name: "صباح الخير يا ماسة", category: "video", label: "فيديو إبداعي", folder: "اليوم الثاني", url: "https://drive.google.com/file/d/1OfLfkWTQ9XF9wukEob-Egso5Le5VzyZc/view?usp=drivesdk" },
  { id: "caricature", name: "Create caricature sheet", category: "video", label: "فيديو توليدي", folder: "اليوم الثالث", url: "https://drive.google.com/file/d/1BMJHOfwGTidword2JN1zqXVaemY9MycD/view?usp=drivesdk" },
  { id: "letters-book-video", name: "كتاب تعليم الأطفال الأحرف", category: "video", label: "فيديو تعليمي للأطفال", folder: "اليوم الثالث", url: "https://drive.google.com/file/d/10cfImRjkHjzStZgE2B6PRr4TsgWtgSZZ/view?usp=drivesdk" },
  { id: "letters-book-video-2", name: "كتاب تعليم الأطفال الأحرف", category: "video", label: "فيديو تعليمي للأطفال", folder: "اليوم الثالث", url: "https://drive.google.com/file/d/1yEEJGmgzxsQDEv6GddcaeAP43KYWZASx/view?usp=drivesdk" },
  { id: "dialogue", name: "حوار", category: "audio", label: "مقطع صوتي", folder: "اليوم الثالث", url: "https://drive.google.com/file/d/1XiSn_3BdslrHa0Ow3yQ54jaFrD7EoxfZ/view?usp=drivesdk" },
  { id: "exhale", name: "صوت زفير", category: "audio", label: "مؤثر صوتي", folder: "اليوم الثالث", url: "https://drive.google.com/file/d/1PEJ8p0EJ1O_wTJLiLT-32TvCOxJJ1Hf9/view?usp=drivesdk" },
  { id: "mase-audio", name: "ماسة", category: "audio", label: "مقطع صوتي", folder: "اليوم الثالث", url: "https://drive.google.com/file/d/16wA0wFH2CNxiZ9SHzxqfFBsGqI31xkEN/view?usp=drivesdk" },
  { id: "mase-audio-2", name: "صباح الخير يا ماسة", category: "audio", label: "مقطع صوتي", folder: "اليوم الثاني", url: "https://drive.google.com/file/d/1gCjsvnRgNKxOm08CxThv6bkoHLNXS3zI/view?usp=drivesdk" },
  { id: "avatar-dana", name: "أفتار دانه", category: "visual", label: "تصميم شخصية", folder: "اليوم الثالث", url: "https://drive.google.com/file/d/13b5vgrMTT6pY9TcQfy2N5AH_YfoUEeG2/view?usp=drivesdk" },
  { id: "avatar-mase", name: "أفتار ماسة", category: "visual", label: "تصميم شخصية", folder: "اليوم الثالث", url: "https://drive.google.com/file/d/1iczRi3Qt5cwvOU3Kxj8OTrAwER7a3ARz/view?usp=drivesdk" },
  { id: "gemini-image", name: "صورة مولدة بالذكاء الاصطناعي", category: "visual", label: "تجربة بصرية توليدية", folder: "اليوم الثالث", url: "https://drive.google.com/file/d/1--nCiz5pvVfD94w1QQ1hq9zcjjNLeipw/view?usp=drivesdk" },
  { id: "ai-portrait", name: "تحويل صورة إلى بورتريه", category: "visual", label: "تجربة بصرية بالذكاء الاصطناعي", folder: "اليوم الثالث", url: "https://drive.google.com/file/d/1GS5qYKlkhzyPWArvBgh7ymNz2t7u2Yg-/view?usp=drivesdk" },
  { id: "engine-map-2", name: "مخطط تفصيلي لمحرك السيارة", category: "visual", label: "إنفوغراف تعليمي", folder: "اليوم الثالث", url: "https://drive.google.com/file/d/13DahU-jsG4-Rs2OxrX2yzwqtQeuAiG-9/view?usp=drivesdk" },
  { id: "engine-map", name: "مخطط تفصيلي لمحرك السيارة", category: "visual", label: "إنفوغراف تعليمي", folder: "اليوم الثاني", url: "https://drive.google.com/file/d/19EqMUq2UEQX8eWJHXuakv6BGjAwCqPbm/view?usp=drivesdk" },
  { id: "letters-animals", name: "الأحرف والحيوانات", category: "visual", label: "تصميم تعليمي للأطفال", folder: "اليوم الثاني", url: "https://drive.google.com/file/d/1Rtqr23XyDEVm_a4W6KTjo3L8-1HA1_EM/view?usp=drivesdk" },
  { id: "letters-animals-2", name: "الأحرف والحيوانات 2", category: "visual", label: "تصميم تعليمي للأطفال", folder: "اليوم الثاني", url: "https://drive.google.com/file/d/1oLUlh0rzveJO3Tqv-JWow3vZHpwL3awR/view?usp=drivesdk" },
  { id: "letters-cover", name: "غلاف كتاب الأحرف", category: "visual", label: "هوية كتاب تعليمي", folder: "كتاب الأحرف", url: "https://drive.google.com/file/d/1LnPn248p7jBRnWNcSDx7FI9R4ls8NRCy/view?usp=drivesdk", featured: true },
  { id: "letters-back", name: "الغلاف الخلفي", category: "visual", label: "تصميم غلاف", folder: "كتاب الأحرف", url: "https://drive.google.com/file/d/1AqCPu5dQ_8eZDU-Hipwj4WWQtcDhIgkR/view?usp=drivesdk" },
  { id: "letters-ad", name: "إعلان للكتاب", category: "visual", label: "مادة ترويجية", folder: "كتاب الأحرف", url: "https://drive.google.com/file/d/1N4l6Gb1FgEOatW545tnB1roEz0XDkf8f/view?usp=drivesdk" },
  { id: "room-lab", name: "مختبر حاسوب", category: "visual", label: "تصميم مساحة", folder: "تصميم غرفة", url: "https://drive.google.com/file/d/13L8ra07q2QAEZ_Vgte_pbvxy2YR-SS0S/view?usp=drivesdk" },
  { id: "room-kids", name: "غرفة أطفال", category: "visual", label: "تصميم داخلي", folder: "تصميم غرفة", url: "https://drive.google.com/file/d/1cfE1ChEf2uSKWQ6C8q4AK9DA4LiqCM84/view?usp=drivesdk" },
  { id: "room-victorian", name: "غرفة جلوس بطابع فيكتوري", category: "visual", label: "تصميم داخلي", folder: "تصميم غرفة", url: "https://drive.google.com/file/d/1jNxBUJLGosbqVfZMdvlbU1lFRbXExck5/view?usp=drivesdk" },
  { id: "d-image", name: "D", category: "visual", label: "تصميم بصري", folder: "اليوم الثاني", url: "https://drive.google.com/file/d/1BxxZtVwyoDeQkLyi62DZex3hMB9pZ_Wz/view?usp=drivesdk" },
  { id: "chef-waste", name: "تقليل هدر الطعام", category: "visual", label: "تصميم توعوي", folder: "اليوم الثاني", url: "https://drive.google.com/file/d/1wevgydbVTR5pYgdakOdUhRyRPssmER-P/view?usp=drivesdk" },
  { id: "chef-measuring", name: "قياس هدر الطعام", category: "visual", label: "تصميم توعوي", folder: "اليوم الثاني", url: "https://drive.google.com/file/d/1ozlUqYhLEyGF_toHwRqlVM47X1tfq6pp/view?usp=drivesdk" },
  { id: "gemini-errors", name: "تصحيح أخطاء جيمناي", category: "visual", label: "تحسين صورة", folder: "اليوم الأول", url: "https://drive.google.com/file/d/1nQjE1IiemFpJXHrfBo_17TS-vSUofXNB/view?usp=drivesdk" },
  { id: "plate-errors", name: "تحليل أخطاء الطبق", category: "visual", label: "تحليل بصري", folder: "اليوم الأول", url: "https://drive.google.com/file/d/1FZTviqJP7XmJt5FrQ7D1U5tUbaeUMk30/view?usp=drivesdk" },
  { id: "correction", name: "تصحيح الأخطاء", category: "visual", label: "تحسين صورة", folder: "اليوم الأول", url: "https://drive.google.com/file/d/1onxGxpdT3Zq9OGfPb-fL0UpsguxK5v4E/view?usp=drivesdk" },
  { id: "dinosaur", name: "ديناصور", category: "visual", label: "صورة مولدة", folder: "اليوم الأول", url: "https://drive.google.com/file/d/1ERl1mVTLsLqCjY92i6qTQlbITLREuv2M/view?usp=drivesdk" },
  { id: "truth-pdf", name: "ماسة ونور الصدق", category: "files", label: "قصة PDF", folder: "اليوم الأول", url: "https://drive.google.com/file/d/1KHlNGOuMQfCWCD-Ecz4DP9N_kur_ETgv/view?usp=drivesdk" },
  { id: "letters-pdf", name: "غلاف كتاب الأحرف", category: "files", label: "ملف PDF", folder: "كتاب الأحرف", url: "https://drive.google.com/file/d/1W2lHtC5-orfyLx6sCoKjE1q-sSqs_E_R/view?usp=drivesdk" },
  { id: "letters-package", name: "كتاب الأحرف — حزمة الطباعة", category: "files", label: "حزمة ZIP", folder: "كتاب الأحرف", url: "https://drive.google.com/file/d/1GJ2hoNhbFsQm0bWz7fpCvOT9yf6lrwp6/view?usp=drivesdk" },
  { id: "letters-a", name: "صفحة A", category: "visual", label: "صفحة من كتاب الأحرف", folder: "كتاب الأحرف", url: "https://drive.google.com/file/d/1I3sJqzDsYP6yZBPAD_iO79jnyvmp-Xo3/view?usp=drivesdk" },
  { id: "letters-b", name: "صفحة B", category: "visual", label: "صفحة من كتاب الأحرف", folder: "كتاب الأحرف", url: "https://drive.google.com/file/d/1NjBZE3i2K7yUiXYU3i-VkZSK6Cw-fkHB/view?usp=drivesdk" },
  { id: "letters-c", name: "صفحة C", category: "visual", label: "صفحة من كتاب الأحرف", folder: "كتاب الأحرف", url: "https://drive.google.com/file/d/1mpXwSeXfo8JD3Qc8XHFwLck4LcJOGctL/view?usp=drivesdk" },
  { id: "letters-m", name: "حرف M", category: "visual", label: "صفحة من كتاب الأحرف", folder: "كتاب الأحرف", url: "https://drive.google.com/file/d/1Rzy3ph90-4KHSBxwM2ZMx1xNC30IDqxI/view?usp=drivesdk" },
];

const workFilters: { label: string; value: WorkCategory }[] = [
  { label: "الكل", value: "all" },
  { label: "ألعاب وصفحات", value: "games" },
  { label: "فيديو", value: "video" },
  { label: "صور وتصاميم", value: "visual" },
  { label: "صوت", value: "audio" },
  { label: "ملفات وعروض", value: "files" },
];

function WorkIcon({ category }: { category: WorkItem["category"] }) {
  if (category === "games") return <GamepadIcon />;
  if (category === "video") return <Film size={22} />;
  if (category === "audio") return <Music2 size={22} />;
  if (category === "visual") return <ImageIcon size={22} />;
  if (category === "pages") return <FileCode2 size={22} />;
  return <FileText size={22} />;
}

function GamepadIcon() {
  return <span className="gamepad-icon" aria-hidden="true">✦</span>;
}

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
  const [workFilter, setWorkFilter] = useState<WorkCategory>("all");
  const [workSearch, setWorkSearch] = useState("");
  const [workSort, setWorkSort] = useState<WorkSort>("latest");
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [shareNotice, setShareNotice] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formSent, setFormSent] = useState(false);
  const [darkMode, setDarkMode] = useState(() => typeof window !== "undefined" && localStorage.getItem("remah-theme") === "dark");
  const [language, setLanguage] = useState<"ar" | "en">("ar");
  const isEnglish = language === "en";

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("remah-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isEnglish ? "ltr" : "rtl";
  }, [isEnglish, language]);

  useEffect(() => {
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => { window.removeEventListener("scroll", updateProgress); window.removeEventListener("resize", updateProgress); };
  }, []);

  const visibleWork = workItems.filter((item) => {
    const matchesFilter = workFilter === "all" || item.category === workFilter || (workFilter === "games" && item.category === "pages");
    const query = workSearch.trim().toLowerCase();
    const matchesSearch = !query || `${item.name} ${item.label} ${item.folder}`.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  }).sort((a, b) => workSort === "alpha" ? a.name.localeCompare(b.name, "ar") : workItems.indexOf(a) - workItems.indexOf(b));

  const shareWork = async (work: WorkItem, channel: "whatsapp" | "copy") => {
    const shareUrl = work.url;
    if (channel === "copy") {
      await navigator.clipboard?.writeText(shareUrl);
      setShareNotice("تم نسخ رابط المشروع");
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(`${work.name} — ${shareUrl}`)}`, "_blank", "noopener,noreferrer");
    }
    window.setTimeout(() => setShareNotice(""), 2200);
  };

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
      <div className="scroll-progress" aria-hidden="true"><span style={{ width: `${scrollProgress}%` }} /></div>
      <button className="back-top-button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="العودة إلى أعلى الصفحة" title="العودة إلى الأعلى"><ArrowUp size={18} /><span>أعلى</span></button>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="العودة إلى بداية الصفحة">
          <span className="brand-mark">ر</span>
          <span className="brand-name">رماح الطراونة</span>
        </a>
        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          {navItems.map((item) => (
            <a key={item.href} className={activeSection === item.href.slice(1) ? "active" : ""} href={item.href}>
              {isEnglish ? item.en : item.ar}
            </a>
          ))}
        </nav>
        <button className="theme-toggle" onClick={() => setDarkMode((value) => !value)} aria-label={darkMode ? "التبديل إلى الوضع النهاري" : "التبديل إلى الوضع الليلي"} title={darkMode ? "الوضع النهاري" : "الوضع الليلي"}>
          {darkMode ? <Sun size={17} /> : <Moon size={17} />}
        </button>
        <button className="language-toggle" onClick={() => setLanguage(isEnglish ? "ar" : "en")} aria-label={isEnglish ? "التبديل إلى العربية" : "Switch to English"} title={isEnglish ? "العربية" : "English"}>{isEnglish ? "عربي" : "EN"}</button>
        <a className="header-contact" href="#contact">
          {isEnglish ? "Let's talk" : "لنتحدث"} <ArrowLeft size={16} />
        </a>
        <button className="mobile-menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="التنقل على الهاتف">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {isEnglish ? item.en : item.ar}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}>{isEnglish ? "Contact" : "تواصل معي"}</a>
          </nav>
        )}
      </header>

      <section id="top" className="hero-section">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-visual-wrap" aria-hidden="true">
          <img className="hero-visual" src={heroVisual} alt="" />
          <span className="hero-visual-orbit orbit-a" /><span className="hero-visual-orbit orbit-b" />
        </div>
        <div className="hero-content">
          <p className="hero-kicker"><span /> {isEnglish ? "Professional profile · Digital training" : "ملف مهني · تدريب وتعليم رقمي"}</p>
          <h1>
            {isEnglish ? "Opening doors" : "أفتح الأبواب"}
            <em>{isEnglish ? "through learning." : "بالمعرفة."}</em>
          </h1>
          <p className="hero-intro">
            {isEnglish ? <>I am <strong>Remah Khaled Al-Tarawneh</strong>, a computer and digital skills trainer who believes technology becomes powerful when it is clear, practical, and human.</> : <>أنا <strong>رماح خالد حماد الطراونة</strong>، مدربة حاسوب ومهارات رقمية أؤمن أن التقنية تصبح أقوى حين تكون مفهومة، عملية، وقريبة من الناس.</>}
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">{isEnglish ? "Contact me" : "تواصل معي"} <ArrowLeft size={18} /></a>
            <a className="button button-quiet" href={resumeUrl} target="_blank" rel="noreferrer">{isEnglish ? "View resume" : "عرض السيرة"} <ExternalLink size={16} /></a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={16} /> {isEnglish ? "Al-Karak, Jordan" : "الكرك، الأردن"}</span>
            <span className="meta-divider" />
            <span><Sparkles size={16} /> {isEnglish ? "11+ years of experience" : "خبرة تتجاوز 11 عاماً"}</span>
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
          <SectionHeading eyebrow={isEnglish ? "01 · About" : "01 · نبذة"} title={isEnglish ? "Experience that creates impact" : "الخبرة حين تتحول إلى أثر"} number="01" />
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

      <section id="testimonials" className="testimonials-section">
        <div className="testimonials-heading">
          <div><p className="eyebrow"><span className="eyebrow-dot" /> 02 · {isEnglish ? "Recommendations" : "توصيات"}</p><h2>{isEnglish ? "Trust built through real learning." : "الثقة تُبنى عبر أثر حقيقي."}</h2></div>
          <p>{isEnglish ? "A selection of voices reflecting the clarity, patience, and practical value of the training experience." : "مجموعة من الآراء التي تعكس وضوح التدريب وصبره وقيمته العملية."}</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => <article className="testimonial-card" key={item.nameAr}><span className="testimonial-mark">“</span><p>{isEnglish ? item.en : item.ar}</p><div className="testimonial-person"><span className="testimonial-avatar">0{index + 1}</span><div><strong>{isEnglish ? item.nameEn : item.nameAr}</strong><small>{isEnglish ? item.roleEn : item.roleAr}</small></div></div></article>)}
        </div>
        <div className="image-story-grid"><div className="image-story-card"><img src={classroomVisual} alt={isEnglish ? "Digital skills workshop" : "ورشة مهارات رقمية"} /><span>{isEnglish ? "Learning together" : "نتعلم معاً"}</span></div><div className="image-story-card"><img src={creativeVisual} alt={isEnglish ? "Creative digital work" : "عمل إبداعي رقمي"} /><span>{isEnglish ? "Ideas in motion" : "أفكار تتحرك"}</span></div></div>
      </section>

      <section id="works" className="works-section">
        <div className="works-intro">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> 03 · {isEnglish ? "Work lab" : "مختبر الأعمال"}</p>
            <h2>{isEnglish ? "Ideas become" : "أفكار تتحول"}<br /><em>{isEnglish ? "experiences." : "إلى تجربة."}</em></h2>
          </div>
          <div className="works-intro-copy">
            <p>{isEnglish ? "A curated collection of games, learning pages, videos, designs, and digital materials created across different paths." : "مجموعة منتقاة من الألعاب، الصفحات التعليمية، الفيديوهات، التصاميم والمواد الرقمية التي صنعتها رماح عبر مسارات مختلفة."}</p>
            <strong><span>{workItems.length}</span> {isEnglish ? "projects and files · from Drive folders" : "مشروعاً وملفاً · من مجلدات Drive"}</strong>
          </div>
        </div>
        <div className="works-showcase" aria-label="مختارات بصرية من الألعاب والفيديوهات">
          <div className="showcase-image showcase-game"><img src={gamesVisual} alt="مشهد من أعمال الألعاب" /><span>ألعاب وتجارب تفاعلية</span></div>
          <div className="showcase-image showcase-video"><img src={videoVisual} alt="مشهد من أعمال الفيديو" /><span>فيديو وصناعة قصة</span></div>
        </div>
        <div className="work-filter-bar" role="tablist" aria-label={isEnglish ? "Filter work" : "تصفية الأعمال"}>
          {workFilters.map((filter) => (
            <button key={filter.value} className={workFilter === filter.value ? "selected" : ""} onClick={() => setWorkFilter(filter.value)} role="tab" aria-selected={workFilter === filter.value}>
              {isEnglish ? (filter.value === "all" ? "All" : filter.value === "games" ? "Games & pages" : filter.value === "video" ? "Video" : filter.value === "visual" ? "Visuals" : filter.value === "audio" ? "Audio" : "Files") : filter.label}
            </button>
          ))}
        </div>
        <div className="work-search-row">
          <label className="work-search" aria-label="البحث في الألعاب والفيديوهات والأعمال">
            <Search size={17} />
            <input value={workSearch} onChange={(event) => setWorkSearch(event.target.value)} placeholder={isEnglish ? "Search games, videos, pages, or files..." : "ابحث عن لعبة، فيديو، صفحة أو ملف..."} />
            {workSearch && <button type="button" className="clear-search" onClick={() => setWorkSearch("")} aria-label="مسح البحث">×</button>}
          </label>
          <span className="work-results">{visibleWork.length} {isEnglish ? "results" : "نتيجة"}</span>
          <label className="work-sort">{isEnglish ? "Sort" : "ترتيب"}
            <select value={workSort} onChange={(event) => setWorkSort(event.target.value as WorkSort)} aria-label="ترتيب مكتبة الأعمال">
              <option value="latest">{isEnglish ? "Latest" : "الأحدث"}</option>
              <option value="alpha">{isEnglish ? "Alphabetical" : "أبجدي"}</option>
            </select>
          </label>
        </div>
        <div className="work-grid">
          {visibleWork.map((work, index) => (
            <article className={`work-card ${work.featured ? "work-card-featured" : ""}`} key={work.id}>
              {getWorkVisual(work) && <img className="work-card-visual" src={getWorkVisual(work)} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = getFallbackVisual(work); }} alt="" aria-hidden="true" />}
              <div className="work-card-top"><span className="work-index">{String(index + 1).padStart(2, "0")}</span><span className="work-icon"><WorkIcon category={work.category} /></span></div>
              <button className="work-card-main" onClick={() => canPreviewWork(work) ? setSelectedWork(work) : window.open(work.url, "_blank", "noopener,noreferrer")}>
                <div className="work-card-content"><span className="work-label">{work.label}</span><h3>{work.name}</h3><p>{work.folder}</p></div>
                <span className="work-open">{canPreviewWork(work) ? <ExternalLink size={15} /> : <ExternalLink size={15} />}</span>
              </button>
              <div className="work-share-actions">
                <button onClick={() => shareWork(work, "whatsapp")} aria-label={`مشاركة ${work.name} عبر واتساب`} title="مشاركة عبر واتساب"><MessageCircle size={14} /></button>
                <button onClick={() => shareWork(work, "copy")} aria-label={`نسخ رابط ${work.name}`} title="نسخ الرابط"><Copy size={14} /></button>
                <button onClick={() => navigator.share ? navigator.share({ title: work.name, url: work.url }) : shareWork(work, "copy")} aria-label={`مشاركة ${work.name}`} title="مشاركة"><Share2 size={14} /></button>
              </div>
            </article>
          ))}
        </div>
        {visibleWork.length === 0 && <div className="work-empty">لم نجد عناصر مطابقة. جرّب كلمة أخرى أو أعد ضبط الفلتر.</div>}
        <div className="works-footer"><span>كل بطاقة تفتح الملف الأصلي في Google Drive</span><span className="works-footer-line" /><span>استكشاف · حفظ · مشاركة</span></div>
        {shareNotice && <div className="share-toast" role="status">{shareNotice}</div>}
      </section>

      {selectedWork && (
        <div className="preview-backdrop" role="dialog" aria-modal="true" aria-label={`معاينة ${selectedWork.name}`} onClick={() => setSelectedWork(null)}>
          <div className="preview-modal" onClick={(event) => event.stopPropagation()}>
            <button className="preview-close" onClick={() => setSelectedWork(null)} aria-label="إغلاق المعاينة"><X size={19} /></button>
            <div className="preview-frame">
              <iframe src={`https://drive.google.com/file/d/${getDriveId(selectedWork.url)}/preview`} title={selectedWork.name} allow="autoplay" />
            </div>
            <div className="preview-meta"><span>{selectedWork.label}</span><h3>{selectedWork.name}</h3><a href={selectedWork.url} target="_blank" rel="noreferrer">فتح الملف الأصلي <ExternalLink size={14} /></a></div>
          </div>
        </div>
      )}

      <section id="experience" className="section experience-section">
        <div className="section-grid section-grid-tight">
          <SectionHeading eyebrow={isEnglish ? "04 · Experience" : "02 · الخبرة المهنية"} title={isEnglish ? "A path that grows with every learner" : "مسار يتطور مع كل متدرب"} number="02" />
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
          <SectionHeading eyebrow={isEnglish ? "05 · Skills" : "03 · المهارات"} title={isEnglish ? "Clear tools for a changing world" : "أدوات واضحة لعالم متغير"} number="03" />
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
          <SectionHeading eyebrow={isEnglish ? "06 · Education" : "04 · التعليم"} title={isEnglish ? "Academic foundation, lasting curiosity" : "أساس أكاديمي، فضول مستمر"} number="04" />
          <p>{isEnglish ? "A foundation in computer science and e-business meets a lasting curiosity for better learning and training tools." : "يجتمع الأساس الأكاديمي في الحاسوب وإدارة الأعمال الإلكترونية مع شغف دائم بتطوير أدوات التعليم والتدريب."}</p>
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
          {formSent ? (
            <div className="form-success" role="status"><Sparkles size={20} /><strong>تم استلام رسالتك بنجاح.</strong><span>سأعود إليك في أقرب فرصة.</span><button className="button button-light" onClick={() => setFormSent(false)}>إرسال رسالة أخرى</button></div>
          ) : (
            <form className="contact-form" onSubmit={(event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const subject = `رسالة جديدة من ${data.get("name")}`; const body = `الاسم: ${data.get("name")}\nالبريد: ${data.get("email")}\n\nالرسالة:\n${data.get("message")}`; window.location.href = `mailto:remahkhaled2022@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; setFormSent(true); }}>
              <div className="form-row"><label>الاسم<input required name="name" placeholder="اكتب اسمك" /></label><label>البريد الإلكتروني<input required type="email" name="email" placeholder="name@example.com" /></label></div>
              <label>رسالتك<textarea required name="message" rows={4} placeholder="كيف يمكنني مساعدتك؟" /></label>
              <button className="button button-light" type="submit">إرسال الرسالة <ArrowLeft size={18} /></button>
            </form>
          )}
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
