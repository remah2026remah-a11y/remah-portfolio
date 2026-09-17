import { ArrowLeft, Download, Home, Printer } from "lucide-react";

const cvPdfUrl = "/manus-storage/remah-cv_43b4228f.pdf";

export default function Resume() {
  return (
    <main className="resume-page" dir="rtl">
      <div className="resume-toolbar no-print">
        <a className="resume-back" href="/"><Home size={16} /> العودة للموقع</a>
        <div className="resume-actions">
          <button className="resume-print" onClick={() => window.print()}><Printer size={16} /> طباعة</button>
          <a className="resume-download" href={cvPdfUrl} download="remah-khaled-resume.pdf"><Download size={16} /> تحميل PDF</a>
        </div>
      </div>
      <article className="resume-sheet">
        <header className="resume-header">
          <div><p className="resume-kicker">ملف مهني · سيرة ذاتية</p><h1>رماح خالد حماد الطراونة</h1><h2>مدربة حاسوب ومهارات رقمية</h2></div>
          <div className="resume-mark">ر</div>
        </header>
        <div className="resume-contact"><span>الكرك، الأردن</span><span>0772520111</span><span>remahkhaled2022@gmail.com</span></div>
        <div className="resume-layout">
          <aside className="resume-sidebar">
            <section><h3>المهارات</h3><ul><li>Microsoft Word / Excel / PowerPoint</li><li>Google Workspace وMicrosoft Teams</li><li>أساسيات الشبكات والصيانة</li><li>أمن المعلومات وتطبيقات AI</li><li>إدخال البيانات والطباعة</li><li>تدريب المدربين TOT</li></ul></section>
            <section><h3>اللغات</h3><p><strong>العربية</strong><br />اللغة الأم</p><p><strong>الإنجليزية</strong><br />جيد في المحادثة والاستماع</p></section>
            <section><h3>التعليم</h3><p><strong>ماجستير إدارة الأعمال الإلكترونية</strong><br />جامعة مؤتة · 2013</p><p><strong>بكالوريوس حاسوب</strong><br />جامعة مؤتة · 2008</p></section>
          </aside>
          <div className="resume-main">
            <section><h3>نبذة مهنية</h3><p>مدربة حاسوب ومهارات رقمية بخبرة مهنية تزيد عن 11 عاماً في التدريب والتعليم. أمتلك خبرة في مؤسسة التدريب المهني منذ عام 2015، إلى جانب تدريس مادة الحاسوب لدى وزارة التربية والتعليم، مع اهتمام بتطبيقات الذكاء الاصطناعي في التعليم والإنتاجية وتدريب المدربين.</p></section>
            <section><h3>الخبرة المهنية</h3><div className="resume-role"><div className="resume-role-top"><h4>مدرب حاسوب — مؤسسة التدريب المهني</h4><span>2015 — حتى الآن</span></div><ul><li>تدريب المتدربين على مهارات الحاسوب والمهارات الرقمية.</li><li>إعداد الخطط التدريبية والمواد والاختبارات النظرية والعملية.</li><li>تنفيذ برامج Excel المتقدمة ومهارات Microsoft للموظفين.</li><li>توظيف أدوات التعليم الإلكتروني والتقنيات الحديثة في التدريب.</li></ul></div><div className="resume-role"><div className="resume-role-top"><h4>مدرسة مادة الحاسوب — وزارة التربية والتعليم</h4><span>خبرة 9 أشهر</span></div><ul><li>تدريس مادة الحاسوب وتبسيط المفاهيم التقنية.</li><li>تطبيق أنشطة وتمارين عملية ومتابعة أداء الطلبة.</li></ul></div></section>
            <section><h3>الدورات والاهتمامات</h3><div className="resume-pills"><span>الذكاء الاصطناعي</span><span>تدريب المدربين</span><span>Excel المتقدم</span><span>التعليم الرقمي</span><span>تطوير المحتوى</span></div></section>
          </div>
        </div>
        <footer className="resume-footer"><span>رماح خالد حماد الطراونة</span><span>مدربة حاسوب ومهارات رقمية</span><span>remahfolio-vsmxrsfg.manus.space</span></footer>
      </article>
    </main>
  );
}
