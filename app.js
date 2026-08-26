/**
 * Frontend Interview Study Guide Data & Logic
 * Comprehensive Master Blueprint for Mohamed Khamis
 * Enriched with Real-World Project Scenarios
 */

const questionsData = [
  // أولاً: أسئلة البداية والنهاية (HR & Introduction)
  {
    id: 1,
    category: "hr",
    categoryLabel: "أسئلة التعارف و HR",
    tags: ["HR", "Intro", "About Me", "Frontend"],
    titleAr: "احكي لي عن نفسك؟ (Tell me about yourself)",
    titleEn: "Tell me about yourself",
    answerEn: `"Hi, I'm Mohamed Khamis. I'm a Frontend Developer specialized in building modern web applications using React, TypeScript, Next.js, and Tailwind CSS. I have hands-on experience building complex apps, integrating APIs, and managing state using Zustand and Redux. I love turning ideas into clean, fast, and responsive user interfaces."`,
    answerAr: `أنا محمد خميس، مطور واجهات أمامية متخصص في بناء تطبيقات ويب حديثة بـ React و TypeScript و Next.js و Tailwind CSS، وعندي خبرة عملية في ربط الـ APIs وإدارة الـ State.`,
    exampleAr: `في مشروعي الأخير لمتجر إلكتروني متكامل (E-commerce Platform)، بنيت الواجهة بالكامل بـ Next.js 14 و TypeScript، وربطت بوابة الدفع Stripe، واستخدمت Zustand لإدارة سلة المشتريات، مما حسن سرعة التحميل وتجربة المستخدم بشكل ملحوظ.`,
    exampleEn: `"In my recent E-commerce project, I built the full frontend using Next.js 14 and TypeScript, integrating Stripe for payments and Zustand for cart state, which significantly boosted performance and UX."`
  },
  {
    id: 2,
    category: "hr",
    categoryLabel: "أسئلة التعارف و HR",
    tags: ["HR", "Questions to Ask", "Team", "Tech Stack"],
    titleAr: "عندك أي أسئلة لينا؟ (Do you have any questions for us?)",
    titleEn: "Do you have any questions for us?",
    answerEn: `"What does a typical day look like for a Frontend Developer on this team, and what are the main technologies and architecture priorities you're focusing on right now?"`,
    answerAr: `إيه شكل يوم الشغل الطبيعي لمطور الـ Frontend عندكم، وإيه أكتر التكنولوجيات والمعمارية اللي مركزين عليها الفترة دي؟`,
    exampleAr: `في المقابلات دايمًا بسألهم عن الـ CI/CD Pipeline والـ Code Review guidelines عشان أفهم طبيعة التعاون داخل الفريق وكيفية الحفاظ على جودة الكود قبل الـ Deployment.`,
    exampleEn: `"I always like to ask about your team's code review workflow and CI/CD pipelines to understand how you maintain code quality and collaborate across sprints."`
  },

  // ثانياً: أسئلة الـ Core Frontend (React, Next.js, TS)
  {
    id: 3,
    category: "core-react-next",
    categoryLabel: "React & Next.js",
    tags: ["Next.js", "Server Components", "Client Components", "Performance", "RSC"],
    titleAr: "الفرق بين Server و Client Components في Next.js؟",
    titleEn: "Difference between Server and Client Components in Next.js",
    answerEn: `"Server Components run entirely on the server, have direct access to backend resources, and send zero JavaScript to the browser, which boosts performance. Client Components run on the browser, used when we need interactivity like useState or useEffect, marked with 'use client'."`,
    answerAr: `مكونات الخادم (Server Components) بتشتغل على السيرفر وبتديك أداء عالي بدون إرسال JS للمتصفح، ومكونات العميل (Client Components) بتشتغل في المتصفح للتفاعل زي useState وتُعلم بـ "use client".`,
    exampleAr: `في مشروع المتجر الإلكتروني: خليت صفحة تفاصيل المنتج (Product Details) وقائمة المنتجات Server Components عشان الـ SEO وسرعة جلب البيانات من الداتابيز، وخليت زرار "إضافة للسلة" ومودال الصور Client Components للتفاعل السريع.`,
    exampleEn: `"In an e-commerce platform, I kept product details and catalog pages as Server Components for fast SEO data fetching, while isolating the 'Add to Cart' button and image carousel as Client Components."`
  },
  {
    id: 4,
    category: "state-data",
    categoryLabel: "State & Data Fetching",
    tags: ["Zustand", "Redux Toolkit", "State Management", "RTK"],
    titleAr: "ليه بتختار Zustand أو Redux Toolkit؟",
    titleEn: "Why choose Zustand or Redux Toolkit?",
    answerEn: `"I use Zustand for small to medium apps because it has zero boilerplate, is super lightweight, and uses simple hooks. For large enterprise apps with strict architecture and large teams, I use Redux Toolkit."`,
    answerAr: `باستخدم Zustand للتطبيقات الصغيرة والمتوسطة لأنه خفيف وبدون كود معقد (Zero boilerplate)، و Redux Toolkit للتطبيقات الضخمة والشركات ذات المعمارية الصارمة.`,
    exampleAr: `في لوحة تحكم (SaaS Analytics Dashboard)، استخدمت Zustand لإدارة الـ Dark Mode وبيانات الـ User Profile والـ Sidebar Toggle؛ السهولة وفرت علينا وقت كبير مقارنة بـ Redux.`,
    exampleEn: `"In a SaaS Analytics Dashboard, I chose Zustand to handle dark mode, user session, and sidebar state with just 20 lines of store code, avoiding all Redux boilerplate."`
  },
  {
    id: 5,
    category: "state-data",
    categoryLabel: "State & Data Fetching",
    tags: ["TanStack Query", "React Query", "Caching", "Data Fetching"],
    titleAr: "ليه بنستخدم TanStack Query؟",
    titleEn: "Why do we use TanStack Query?",
    answerEn: `"Because it handles server state: automatic caching, background re-fetching, deduplication, and garbage collection out of the box, saving me from writing messy useEffect and loading state code."`,
    answerAr: `لأنه بيتعامل مع الـ Server State: الـ Caching التلقائي، وجلب البيانات في الخلفية ومسح القديم تلقائياً (Garbage Collection) بدل كود الـ useEffect والـ loading states الطويل والمعقد.`,
    exampleAr: `في صفحة المنتجات والبحث، استخدمت TanStack Query مع 'useInfiniteQuery' لعمل Infinite Scroll، ومع ميزة الـ Caching، المستخدم لما بيرجع لنفس الصفحة بيلاقي البيانات فوراً بدون أي شاشة انتظار (0ms Loading).`,
    exampleEn: `"In a product catalog with infinite scroll, I used TanStack Query's 'useInfiniteQuery'; it cached paginated pages so users returning from product details saw instant data with zero loading spinners."`
  },
  {
    id: 6,
    category: "js-ts",
    categoryLabel: "JavaScript & TypeScript",
    tags: ["TypeScript", "Interface", "Type", "Declaration Merging"],
    titleAr: "الفرق بين interface و type في TypeScript؟",
    titleEn: "Difference between interface and type in TypeScript",
    answerEn: `"Both define object shapes, but Interfaces support declaration merging and are great for extendable component props. Types are more flexible for unions, primitives, tuples, and complex utility types."`,
    answerAr: `كلاهما بيحدد شكل الكائن، بس الـ Interfaces بتدعم الدمج (Declaration merging) وممتازة للـ Props، والـ Types أكثر مرونة للاتحادات (Unions) والأنواع المعقدة.`,
    exampleAr: `استخدمت 'interface' لتعريف Props مكونات الـ UI زي ButtonProps لسهولة الوراثة (extends HTMLButtonProps)، واستخدمت 'type' مع Union لتعريف حالات الدفع: type PaymentMethod = 'credit_card' | 'paypal' | 'apple_pay'.`,
    exampleEn: `"I used 'interface' for UI component props to extend native HTML attributes (extends ButtonHTMLAttributes), and 'type' for discriminated unions representing payment statuses ('idle' | 'loading' | 'success' | 'error')."`
  },

  // ثالثاً: أسئلة الجذور (HTML, CSS, JS)
  {
    id: 7,
    category: "js-ts",
    categoryLabel: "JavaScript & TypeScript",
    tags: ["JavaScript", "Closure", "Scope", "JS Core"],
    titleAr: "إيه هو الـ Closure في JavaScript؟",
    titleEn: "What is a Closure in JavaScript?",
    answerEn: `"A closure is a function that retains access to variables from its outer lexical scope even after the outer function has finished executing."`,
    answerAr: `دالة بتحتفظ بمتغيراتها الخارجية وتقدر توصل لها حتى بعد ما الدالة الأصلية خلصت تنفيذ.`,
    exampleAr: `استخدمت الـ Closure في بناء دالة Debounce مخصصة للبحث، وكمان في بناء Custom Hook لحفظ القيمة السابقة (usePrevious) بحيث يحتفظ بالمتغير الخارجي بين الرندرات.`,
    exampleEn: `"I used closures to build a custom 'usePrevious' hook that remembers previous prop values across renders, and inside our custom search debounce utility to retain the timer ID."`
  },
  {
    id: 8,
    category: "js-ts",
    categoryLabel: "CSS & Styling",
    tags: ["CSS", "Flexbox", "Grid", "Layout"],
    titleAr: "الفرق بين CSS Flexbox و CSS Grid؟",
    titleEn: "Difference between CSS Flexbox and CSS Grid",
    answerEn: `"Flexbox is one-dimensional (handles either rows OR columns, great for component alignment). CSS Grid is two-dimensional (handles rows AND columns simultaneously, great for overall page layouts)."`,
    answerAr: `الـ Flexbox للترتيب في بعد واحد (صف أو عمود)، والـ Grid للترتيب في بعدين (صفوف وأعمدة معاً في نفس الوقت).`,
    exampleAr: `في صفحة المتجر، استخدمت CSS Grid مع 'grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))' لعمل شبكة المنتجات المتجاوبة، واستخدمت Flexbox داخل كارت المنتج نفسه لمحاذاة السعر والزرار وتوسيط الأيقونات.`,
    exampleEn: `"In a product catalog, I used CSS Grid for the auto-responsive multi-column product layout, and Flexbox inside each card component to align prices, ratings, and action buttons."`
  },
  {
    id: 9,
    category: "js-ts",
    categoryLabel: "HTML & Accessibility",
    tags: ["HTML", "Semantic HTML", "SEO", "Accessibility", "a11y"],
    titleAr: "إيه هي الـ Semantic HTML؟",
    titleEn: "What is Semantic HTML?",
    answerEn: `"Semantic HTML means using tags that convey meaning about their content (like <nav>, <article>, <main>, <header>), which improves SEO rankings, web accessibility (a11y), and code readability."`,
    answerAr: `عناصر بتوضح معناها الحقيقي للبراوزر ومحركات البحث زي <nav> و <article>، ودي بتحسن الـ SEO ومساعدة قارئات الشاشة لذوي الاحتياجات الخاصة.`,
    exampleAr: `في صفحة الدفع والتسجيل، استبدلت الـ divs العشوائية بـ <form>, <fieldset>, <legend>, <label> لكل input مع 'aria-describedby' لرسائل الخطأ، وده خلى الموقع يحقق 100% في فحص Lighthouse Accessibility.`,
    exampleEn: `"In a checkout checkout flow, I replaced generic divs with <fieldset>, <legend>, and explicit <label> associations with aria-live error messages, achieving a 100/100 Lighthouse Accessibility score."`
  },

  // رابعاً: أسئلة الهندسة وحل المشاكل (Architecture & Performance)
  {
    id: 10,
    category: "arch-perf",
    categoryLabel: "الأداء والهندسة المعمارية",
    tags: ["Performance", "React", "Next.js", "useMemo", "useCallback", "Lazy Loading"],
    titleAr: "إزاي بتحسن أداء تطبيق React أو Next.js؟ (Performance)",
    titleEn: "How to optimize React or Next.js application performance?",
    answerEn: `"I use code splitting with dynamic imports, optimize images using next/image with WebP, memoize expensive calculations with useMemo/useCallback, leverage React Server Components, and virtualize large lists."`,
    answerAr: `بستخدم useMemo و useCallback لمنع إعادة الرندر الزائدة، وعمل Lazy loading للمكونات الكبيرة، وضغط وتحسين الصور، والاعتماد على Server Components.`,
    exampleAr: `في لوحة تحكم Analytics كان حجم الـ Bundle كبير بسبب مكتبات الشارتات (Recharts)؛ استخدمت 'next/dynamic' مع '{ ssr: false }' لتحميلها عند فتح التاب الخاص بها فقط، فقللت حجم الـ Initial JS بـ 40%.`,
    exampleEn: `"In an Analytics Dashboard, I lazy-loaded heavy charting libraries with 'next/dynamic' and used Next.js Image optimization, reducing initial bundle size by 40% and cutting LCP in half."`
  },
  {
    id: 11,
    category: "code",
    categoryLabel: "أكواد حية Live Coding",
    tags: ["Live Coding", "Custom Hook", "useLocalStorage", "TypeScript", "React"],
    titleAr: "مثال كود سريع: Custom Hook بسيط لتخزين البيانات في LocalStorage",
    titleEn: "Live Coding: Simple useLocalStorage Custom Hook",
    answerEn: `"A custom hook for synchronizing state with the browser's localStorage with robust JSON parsing and error handling."`,
    answerAr: `كود بسيط وسريع جداً لو طلبوا منك لايف كودينج لعمل Custom Hook لمزامنة البيانات في الـ LocalStorage:`,
    exampleAr: `استخدمت هذا الـ Hook في حفظ تفضيلات المستخدم زي الوضع الليلي (Dark Mode) وعناصر سلة المشتريات للزائر قبل تسجيل الدخول، عشان تفضل محفوظة لو عمل Refresh للصفحة.`,
    exampleEn: `"I used this custom hook to persist guest cart items and user theme preferences across page refreshes and browser re-opens."`,
    code: `import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}`
  },

  // خامساً: أسئلة متقدمة في React و Next.js (Advanced Concepts)
  {
    id: 13,
    category: "core-react-next",
    categoryLabel: "React & Next.js",
    tags: ["Hydration", "Next.js", "SSR", "Hydration Mismatch"],
    titleAr: "إيه هو الـ Hydration في Next.js؟ وإيه مشكلة الـ Hydration Mismatch؟",
    titleEn: "What is Hydration in Next.js, and what is Hydration Mismatch?",
    answerEn: `"Hydration is when React attaches event listeners to pre-rendered HTML from the server to make it interactive. Hydration Mismatch occurs when the client-rendered HTML differs from the server-rendered HTML (e.g. using window, Date.now(), or localStorage during initial render)."`,
    answerAr: `الـ Hydration هي العملية اللي React بياخد بيها الـ HTML الثابت اللي جاي من السيرفر ويربط عليه أحداث التفاعل (Event listeners). مشكلة الـ Mismatch بتحصل لما الـ HTML اللي على السيرفر بيبقى مختلف عن المتصفح (بسبب Date أو localStorage في أول رندر).`,
    exampleAr: `واجهت المشكلة دي لما كنت بعرض تاريخ الطلب بالوقت المحلي للعميل (Date.toLocaleDateString)؛ كان السيرفر برندر بتوقيت UTC والعميل بتوقيت القاهرة فيظهر خطأ، حليتها بتشغيل تحويل التاريخ داخل 'useEffect' بعد الـ Mount.`,
    exampleEn: `"I solved a hydration mismatch on order timestamps where the server rendered UTC while client browsers had local time zones, by deferring formatted date rendering until after component mount inside useEffect."`
  },
  {
    id: 14,
    category: "core-react-next",
    categoryLabel: "React & Next.js",
    tags: ["React Hooks", "useRef", "useState", "Re-render"],
    titleAr: "إمتى تستخدم useRef بدلاً من useState؟",
    titleEn: "When do you use useRef instead of useState?",
    answerEn: `"Use useRef when you need to persist mutable values across renders WITHOUT triggering a re-render (like timer IDs or previous values), or when you need direct access to a DOM node. Use useState when value changes MUST update the UI."`,
    answerAr: `بستخدم useRef لما أكون عايز أحفظ قيمة أو أتعامل مع عنصر في الـ DOM من غير ما أعمل Re-render للمكون لما القيمة تتغير. على العكس من useState اللي بتعمل رندر جديد كل ما تتحدث.`,
    exampleAr: `استخدمت 'useRef' لعمل Auto-Focus على حقل البحث أول ما المودال يفتح (searchInputRef.current.focus())، واستخدمته لحفظ معرف الـ setInterval في عداد الثواني بدون ما يسبب Re-renders متكررة.`,
    exampleEn: `"In a search modal, I used useRef to immediately auto-focus the input element upon opening, and to store setInterval timer IDs in an OTP countdown component without triggering re-renders."`
  },
  {
    id: 15,
    category: "js-ts",
    categoryLabel: "JavaScript & TypeScript",
    tags: ["Debounce", "Throttle", "Optimization", "Search Bar", "Scroll"],
    titleAr: "إيه هو الـ Debounce و الـ Throttle، وإمتى بتستخدمهم؟",
    titleEn: "What are Debounce and Throttle, and when do you use them?",
    answerEn: `"Debounce delays function execution until user inactivity for X milliseconds (best for search inputs). Throttle limits execution to at most once every X milliseconds (best for scroll listeners, mouse move, or window resize)."`,
    answerAr: `الـ Debounce بيأجل التنفيذ لحد ما يبطل المستخدم كتابة لفترة معينة (ممتازة لشريط البحث). الـ Throttle بيحدد إن الدالة تشتغل مرة واحدة كل فترة زمنية ثابتة (ممتازة لحركة السكرول أو تغيير حجم الشاشة).`,
    exampleAr: `في شريط البحث بالمتجر، حطيت Debounce بمهلة 300ms عشان ميبعتش 10 طلبات API أثناء كتابة الكلمة، واستخدمت Throttle على حدث الـ Scroll لتحديث شريط تقدم القراءة (Reading Progress Bar).`,
    exampleEn: `"In an e-commerce live search, I debounced the input by 300ms to prevent flooding our backend with requests on every keystroke, and throttled window scroll events to update a reading progress bar."`
  },

  // سادساً: أسئلة عميقة في الـ JavaScript (JS Under the Hood)
  {
    id: 16,
    category: "js-ts",
    categoryLabel: "JavaScript & TypeScript",
    tags: ["Event Loop", "Single Thread", "Call Stack", "Microtasks", "Async JS"],
    titleAr: "إيه هو الـ Event Loop في JavaScript؟ وإزاي بتشتغل بشكل غير متزامن؟",
    titleEn: "What is the Event Loop in JavaScript, and how does asynchronous code work?",
    answerEn: `"JavaScript is single-threaded. The Event Loop continuously checks if the Call Stack is empty. If it is, it processes tasks from the Microtask Queue (Promises, queueMicrotask) first, then tasks from the Callback/Macrotask Queue (setTimeout, I/O), allowing non-blocking async execution."`,
    answerAr: `الجافاسكريبت لغة ذات مسار واحد (Single-threaded). الـ Event Loop تفضل مراقبة الـ Call Stack والـ Queue باستمرار؛ لو الـ Stack فاضي، بتاخد المهام المؤجلة (Promises أولاً ثم setTimeout) وتحطها عشان تنفذها من غير ما تعلق الصفحة.`,
    exampleAr: `في مشروع معالجة ملفات Excel ضخمة (30 ألف صف) في المتصفح، قسمنا معالجة البيانات على دفعات باستخدام 'setTimeout' و Web Workers عشان ندي فرصة للـ Event Loop يعيد رسم الواجهة والصفحة متتجمدش.`,
    exampleEn: `"When parsing heavy 30k-row CSV files client-side, I offloaded computations to Web Workers and scheduled UI updates in chunks across Event Loop ticks to keep the UI interactive at 60 FPS."`
  },
  {
    id: 17,
    category: "js-ts",
    categoryLabel: "JavaScript & TypeScript",
    tags: ["Equality", "Type Coercion", "JS Operators"],
    titleAr: "إيه الفرق بين == و === في JavaScript؟",
    titleEn: "What is the difference between == and === in JavaScript?",
    answerEn: `"=== is strict equality; it compares both value and data type without type conversion. == performs type coercion (implicitly converting types before comparison), which often leads to subtle, hard-to-find bugs."`,
    answerAr: `=== هو معامل المساواة الصارم؛ بيقارن القيمة ونوع البيانات من غير تحويل (Strict Equality). أما == فبيحول أنواع البيانات غصب عنها عشان يتشابهوا قبل المقارنة (Type Coercion).`,
    exampleAr: `في مقارنة الـ IDs القادمة من الـ URL (string '5') مع الـ ID اللي في مصفوفة المنتجات (number 5)؛ دايمًا بنحول النوع صراحة 'Number(id) === product.id' عشان نتجنب مفاجآت الـ Type Coercion في الـ Production.`,
    exampleEn: `"When comparing URL route parameters (strings) with product IDs from API data (numbers), I always use strict equality with explicit casting ('Number(params.id) === item.id') to avoid implicit coercion bugs."`
  },

  // سادساً مكرر: أسئلة State Management (Zustand & Redux Deep Dive)
  {
    id: 18,
    category: "state-data",
    categoryLabel: "State & Data Fetching",
    tags: ["Zustand", "Selectors", "Re-render Optimization"],
    titleAr: "لو عندك State كبيرة ومعقدة، إزاي بتحسن أداء استخدام Zustand؟ (Zustand Selector Optimization)",
    titleEn: "How to optimize Zustand performance in large complex state? (Selectors)",
    answerEn: `"To prevent unnecessary re-renders in Zustand, I use fine-grained atomic Selectors (e.g. useStore(state => state.user)) rather than destructuring the whole store object, ensuring components only re-render when their specific sliced data changes."`,
    answerAr: `عشان أمنع إعادة الرندر الزائدة في Zustand، بستخدم الـ Selectors عشان أشترك في الجزء الصغير اللي محتاجه بس من الـ State، بدل ما أجيب الـ Store كله.`,
    exampleAr: `في لوحة تحكم تداول الأسعار (Live Price Dashboard)، كان تحديث سعر عملة واحدة بيعيد رندر كل كروت الصفحة؛ حليت المشكلة باستخدام Zustand Selectors لكل كارت بحيث كل كارت يعيد رندر فقط لو سعره الخاص اتغير.`,
    exampleEn: `"In a live crypto dashboard with 50 coin cards, subscribing via 'useStore(s => s.prices[coinId])' ensured only the updated coin card re-rendered on WebSocket price ticks, boosting frame rates from 20 to 60 FPS."`,
    code: `// ✅ Good: only re-renders when \`bears\` changes
const bears = useStore((state) => state.bears);

// ❌ Bad: re-renders on ANY state change in store
const { bears, fishes, increase } = useStore();`
  },
  {
    id: "18-code",
    category: "code",
    categoryLabel: "أكواد حية Live Coding",
    tags: ["Live Coding", "Debounce Function", "TypeScript", "Utility"],
    titleAr: "مثال كود عملي: دالة Debounce نقية ومكتوبة بـ TypeScript",
    titleEn: "Live Coding: TypeScript Debounce Utility Function",
    answerEn: `"A high-performance debounce utility with TypeScript generics."`,
    answerAr: `دالة بسيطة ونظيفة جداً لعمل Debounce لأي حدث (زي Search Input):`,
    exampleAr: `استخدمت هذه الدالة كـ Helper Utility في كل حقول البحث والفلترة في المشروع لمنع الضغط الزائد على السيرفر.`,
    exampleEn: `"I included this generic debounce utility in our shared utils library to debounce filter dropdowns and live search inputs across the application."`,
    code: `function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | number;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}`
  },

  // ثامناً: أسئلة متقدمة في الـ React وأخطاء الشائعة (Advanced React & Best Practices)
  {
    id: 19,
    category: "core-react-next",
    categoryLabel: "React & Next.js",
    tags: ["Prop Drilling", "Context API", "Zustand", "Architecture"],
    titleAr: "إيه هو الـ Prop Drilling؟ وإزاي بتعالج المشكلة دي؟",
    titleEn: "What is Prop Drilling, and how do you solve it?",
    answerEn: `"Prop drilling is passing props through intermediary components that don't need them, just to deliver them to deeply nested children. I solve it using Component Composition (passing children), React Context for localized scopes, or Zustand for global application state."`,
    answerAr: `الـ Prop drilling هي عملية تمرير بيانات من المكون الرئيسي عبر عدة مكونات فرعية مش محتاجة البيانات دي لنفسها. بحل المشكلة دي إما برفع الـ State، أو React Context، أو استخدام Zustand كـ Global Store.`,
    exampleAr: `في صفحة إتمام الطلب المتعددة الخطوات (4-Step Checkout Wizard)، كان بيتم تمرير بيانات العنوان وطريقة الدفع عبر 5 مستويات مكونات؛ نقلت الحالة لـ Zustand Store فبقى الكود أنظف وأسهل في التعديل.`,
    exampleEn: `"In a 4-step checkout flow, shipping and billing info was being drilled down 5 component levels. Moving the checkout state into a Zustand store eliminated all drilling and made step components fully decoupled."`
  },
  {
    id: 20,
    category: "core-react-next",
    categoryLabel: "React & Next.js",
    tags: ["useMemo", "useCallback", "React.memo", "Memoization", "Performance"],
    titleAr: "إيه الفرق بين useMemo, useCallback, و React.memo؟ وإمتى تستخدمهم؟",
    titleEn: "What is the difference between useMemo, useCallback, and React.memo?",
    answerEn: `"• React.memo: Memoizes an entire component to skip re-rendering if its props are unchanged.
• useMemo: Caches the result of a heavy calculation.
• useCallback: Caches a callback function instance between renders to prevent breaking memoization in child components."`,
    answerAr: `• React.memo: بتحفظ المكون كله عشان ما يعيدش رندر لو الـ Props هي هي.
• useMemo: بتحفظ نتيجة عملية حسابية ثقيلة عشان متتحسبش من أول وجديد كل رندر.
• useCallback: بتحفظ دالة معينة بين الرندرات عشان تمنع إعادة رندر المكونات الفرعية.`,
    exampleAr: `في جدول بيانات (Data Table) يحتوي على 500 صف: استخدمت React.memo على صفوف الجدول (TableRow)، و useMemo لحساب إجمالي المبيعات، و useCallback لدوال الحذف والتعديل (onDelete, onEdit) لتجنب إعادة رندر الجدول بالكامل.`,
    exampleEn: `"In a financial transactions table with 500 rows: I wrapped TableRow in React.memo, cached monthly totals using useMemo, and stabilized action handlers (onDelete/onEdit) with useCallback."`
  },
  {
    id: 21,
    category: "core-react-next",
    categoryLabel: "React & Next.js",
    tags: ["Forms", "React Hook Form", "Zod", "Validation", "Performance"],
    titleAr: "إزاي بتتعامل مع الـ Forms المعقدة Validation في مشاريعك؟",
    titleEn: "How do you handle complex form validation in your projects?",
    answerEn: `"I use React Hook Form combined with Zod for schema validation. React Hook Form uses uncontrolled inputs for fast performance (no re-renders on keystrokes), and Zod provides type-safe schema definitions and dynamic error messages."`,
    answerAr: `للفورم المعقدة، بستخدم مكتبة React Hook Form مع Zod لعمل الـ Validation. دي بتديني أداء عالي جداً لأنها بتمنع الـ Re-renders الزائدة مع كل حرف بيكتبه المستخدم، و Zod بتسهل كتابة شروط التحقق بدعم كامل لـ TypeScript.`,
    exampleAr: `في نموذج تسجيل حساب الشركات (B2B Onboarding Form) اللي فيه 16 حقل مع شروط معقدة (زي تطابق كلمة المرور والتحقق من السجل التجاري)، استخدمت RHF + Zod؛ الأداء كان فوري مع رسائل خطأ دقيقة متوافقة مع الـ Backend.`,
    exampleEn: `"In a multi-step B2B registration form with 16 fields and conditional validation rules, pairing React Hook Form with Zod provided instant sub-millisecond typing performance and complete end-to-end TypeScript types."`
  },

  // تاسعاً: أسئلة الـ API والـ Error Handling المتقدمة
  {
    id: 22,
    category: "state-data",
    categoryLabel: "State & Data Fetching",
    tags: ["AbortController", "API Cancellation", "Race Condition", "Fetch"],
    titleAr: "إزاي بتعمل Cancel لطلب API قديم لو المستخدم كتب حاجة جديدة بسرعة؟ (API Cancellation)",
    titleEn: "How do you cancel pending API requests on rapid user inputs?",
    answerEn: `"I use AbortController with the Fetch API, or TanStack Query's built-in query cancellation. When a new request starts, I call controller.abort() on the active signal to prevent race conditions and save bandwidth."`,
    answerAr: `بستخدم AbortController مع الـ Fetch API، أو ميزة الإلغاء المدمجة في TanStack Query. لما المستخدم يبدأ طلب جديد (زي البحث)، الطلب القديم بيتم إلغاؤه تلقائياً عشان نوفر باندويتش ونمنع تداخل النتائج (Race conditions).`,
    exampleAr: `في محرك البحث الفوري، لما المستخدم يكتب 'Iphone' وبعدين يغير لـ 'Samsung' بسرعة؛ الطلب الأول لـ Iphone بيتعمل له abort() فوراً، عشان نضمن إن نتيجة 'Iphone' متظهرش فجأة فوق نتيجة 'Samsung'.`,
    exampleEn: `"In our search-as-you-type component, if a user queries 'Iphone' and quickly switches to 'Samsung', the abort signal cancels the 'Iphone' request immediately, eliminating race condition flickering."`
  },
  {
    id: 23,
    category: "state-data",
    categoryLabel: "State & Data Fetching",
    tags: ["Optimistic Update", "TanStack Query", "UX", "Mutation"],
    titleAr: "إيه هو الـ Optimistic Update في TanStack Query؟ وإمتى بتستعمله؟",
    titleEn: "What is an Optimistic Update in TanStack Query, and when do you use it?",
    answerEn: `"An optimistic update immediately reflects a user action on the UI before the server responds. If the server request fails, the UI rolls back to the previous snapshot. It creates a snappy, lightning-fast UX."`,
    answerAr: `التحديث المتفائل هو إن واجهة المستخدم بتتحدث فوراً (زي لما تعمل لايك أو تضيف منتج للسلة) قبل ما السيرفر يرد أصلًا. لو طلب السيرفر فشل، الواجهة بترجع للحالة القديمة.`,
    exampleAr: `في زرار 'إضافة للمفضلة' (Wishlist Heart Icon)؛ أول ما المستخدم يضغط، القلب بيتحول لأحمر فوراً، وفي الخلفية بنبعت الـ API. لو النت قطع، الـ Hook بيرجع القلب لحالته الأصلية ويظهر Toast ينبه المستخدم.`,
    exampleEn: `"On the product favorite heart button, I used TanStack Query's 'onMutate' to immediately toggle the active state in UI; if the network call failed, 'onError' automatically rolled back the cache state."`
  },

  // عاشراً: أسئلة الأمان والـ Best Practices (Security & Deployment)
  {
    id: 24,
    category: "security-best",
    categoryLabel: "الأمان و Git و Best Practices",
    tags: ["Security", "XSS", "CSRF", "HttpOnly Cookies", "Authentication"],
    titleAr: "إيه هي أشهر الثغرات الأمنية في تطبيقات الـ Frontend؟ وإزاي بتحمى منها؟",
    titleEn: "What are the most common Frontend security vulnerabilities and how do you prevent them?",
    answerEn: `"The most common are XSS (Cross-Site Scripting) and CSRF. I protect against XSS by sanitizing inputs with DOMPurify, avoiding dangerouslySetInnerHTML, and storing sensitive auth tokens in HttpOnly Secure cookies rather than localStorage."`,
    answerAr: `أشهر الثغرات هي XSS (حقن السكربتات) و CSRF. بحمي التطبيق من XSS بتنظيف مدخلات المستخدم بـ DOMPurify وتجنب dangerouslySetInnerHTML، وبخزن الـ Tokens في HttpOnly cookies بدل الـ localStorage.`,
    exampleAr: `في منصة مدونة تسمح للمستخدمين بكتابة تعليقات بتنسيق Rich Text؛ استخدمت مكتبة 'DOMPurify' لتنظيف كود الـ HTML قبل عرضه، واستخدمنا SameSite=Strict مع HttpOnly Cookies لمنع ثغرات الـ CSRF وسرقة الـ Tokens.`,
    exampleEn: `"In a community forum with rich-text comments, I sanitized all user inputs with DOMPurify before rendering, and configured authentication tokens inside HttpOnly SameSite=Strict cookies to guard against XSS token theft."`
  },
  {
    id: "24-code",
    category: "code",
    categoryLabel: "أكواد حية Live Coding",
    tags: ["Live Coding", "TypeScript", "Type Guard", "isString"],
    titleAr: "مثال كود عملي: TypeScript Custom Type Guard",
    titleEn: "Live Coding: Custom TypeScript Type Guard",
    answerEn: `"A custom type guard ensuring absolute type safety with \`value is string\`."`,
    answerAr: `لو طلبوا منك تكتب حاجة متقدمة في TypeScript توريهم إنك فاهم لغة صح:`,
    exampleAr: `استخدمت الـ Type Guards للتحقق من أنواع استجابات الـ Webhooks والـ Third-Party APIs غير الموثوقة للتأكد من احتوائها على الحقول المطلوبة قبل تشغيل منطق التطبيق عليها.`,
    exampleEn: `"I created custom type guards to validate unpredictable third-party webhook payloads and API responses at runtime before passing data to UI components."`,
    code: `// Type Guard لتأكيد نوع البيانات في الـ TypeScript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function processInput(input: unknown) {
  if (isString(input)) {
    // هنا TypeScript عارف إن input عبارة عن string بشكل يقيني
    console.log(input.toUpperCase());
  }
}`
  },

  // حادي عشر: أسئلة الـ Routing & Rendering في Next.js (الأحدث والأكثر طلباً)
  {
    id: 25,
    category: "core-react-next",
    categoryLabel: "React & Next.js",
    tags: ["Next.js", "SSG", "SSR", "ISR", "Rendering Strategies"],
    titleAr: "إيه الفرق بين SSG, SSR, و ISR في Next.js؟ وإمتى بتستخدم كل واحد؟",
    titleEn: "Difference between SSG, SSR, and ISR in Next.js",
    answerEn: `"• SSG (Static Site Generation): Pre-renders pages at build time (fastest, ideal for blogs, landing pages).
• SSR (Server-Side Rendering): Renders pages dynamically on every request (ideal for personalized, user-specific data).
• ISR (Incremental Static Regeneration): Generates static pages and regenerates them in background every X seconds without rebuilding the entire app."`,
    answerAr: `• SSR: بيعمل رندر للصفحة مع كل طلب (Request)، ممتاز للصفحات المخصصة لكل مستخدم.
• SSG: بيعمل رندر للصفحة وقت الـ Build، ممتاز للمدونات وصفحات التسويق الثابتة.
• ISR: بيخليني أحدث الصفحات الثابتة في الخلفية كل فترة زمنية بدون إعادة بناء الموقع كله.`,
    exampleAr: `في متجر إلكتروني به 20 ألف منتج: صفحات (من نحن والسياسات) عملناها SSG، وصفحة البروفايل SSR، وصفحات تفاصيل المنتجات عملناها ISR مع '{ next: { revalidate: 60 } }' لتحديث الأسعار والمخزون كل دقيقة تلقائياً.`,
    exampleEn: `"In an e-commerce platform with 20k items: marketing pages used SSG, account profiles used SSR, and product pages used ISR with a 60-second revalidation window to keep stock/prices fresh without server overhead."`
  },
  {
    id: 26,
    category: "core-react-next",
    categoryLabel: "React & Next.js",
    tags: ["Error Boundary", "React", "Resilience", "Fallback UI"],
    titleAr: "إزاي بتتعامل مع الـ Error Boundaries في React لتجنب كراش التطبيق كله؟",
    titleEn: "How do you use Error Boundaries in React to prevent whole app crashes?",
    answerEn: `"An Error Boundary catches JavaScript errors anywhere in its child component tree and displays a fallback UI instead of crashing the entire application screen. I wrap risky widgets (like payments or third-party charts) in isolated Error Boundaries."`,
    answerAr: `الـ Error Boundary هو مكون React بيمسك أخطاء الجافاسكريبت في شجرة المكونات التابعة ليه، وبيعرض واجهة بديلة (Fallback UI) بدل ما التطبيق كله يكراش وتقابل الشاشة البيضاء.`,
    exampleAr: `غلفت ويدجت خريطة الفرع (Google Maps) وويدجت الدفع بـ Error Boundary منفصل؛ لما خدمة الخرائط وقعت عند العميل، باقي صفحة الحجز فضلت شغالة وظهر مكان الخريطة زرار لإعادة المحاولة فقط.`,
    exampleEn: `"I wrapped an embedded Google Maps checkout widget in its own Error Boundary; when their script failed to load, only the map card displayed a retry fallback while the rest of the checkout remained fully operational."`
  },

  // اثنا عشر: أسئلة الـ Code Quality والـ Testing (جودة الكود)
  {
    id: 27,
    category: "security-best",
    categoryLabel: "الأمان و Git و Best Practices",
    tags: ["Code Quality", "ESLint", "Prettier", "Husky", "Git Hooks"],
    titleAr: "إزاي بتضمن جودة الكود بتاعك في الفريق قبل ما تعمل Push؟ (Code Quality Tools)",
    titleEn: "How do you ensure code quality before pushing code? (ESLint, Prettier, Husky)",
    answerEn: `"I use TypeScript for static type checking, ESLint for catching logic and syntax bugs, Prettier for automated formatting, and Husky with lint-staged to run pre-commit hooks that reject invalid code before it reaches git."`,
    answerAr: `بستخدم ESLint لاكتشاف الأخطاء، Prettier لتنسيق الكود، TypeScript للتحقق من الأنواع، و Git Hooks (Husky) عشان يشغل الأخطاء والتنظيف تلقائياً قبل أي Commit أو Push.`,
    exampleAr: `ظبطت في المشروع ملف Husky 'pre-commit' يشغل 'lint-staged'؛ وده منع أعضاء الفريق من رفع أي كود يحتوي على Unused Variables أو أخطاء Typescript، فقلل الـ Broken Builds على الـ CI/CD لـ 0%.`,
    exampleEn: `"I set up Husky and lint-staged in our repo to automatically run 'eslint --fix', Prettier, and 'tsc --noEmit' on pre-commit, completely eliminating syntax regressions on pull requests."`
  },
  {
    id: "27-code",
    category: "code",
    categoryLabel: "أكواد حية Live Coding",
    tags: ["Live Coding", "Error Boundary", "react-error-boundary"],
    titleAr: "مثال كود عملي: Error Boundary Wrapper باستخدام react-error-boundary",
    titleEn: "Live Coding: Error Boundary Wrapper Component",
    answerEn: `"Clean and resilient Error Boundary setup."`,
    answerAr: `كود بسيط لحماية التطبيق وعرض شاشة بديلة عند حدوث خطأ غير متوقع:`,
    exampleAr: `استخدمت هذا المكون كـ Wrapper حول الـ Dynamic Routes لضمان ظهور واجهة أنيقة للمستخدم وزرار إعادة المحاولة عند حدوث أخطاء غير متوقعة.`,
    exampleEn: `"I applied this wrapper around complex sub-modules like analytics charts to catch runtime failures gracefully."`,
    code: `import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

function MyFallbackComponent({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert" className="p-4 bg-red-100 text-red-700 rounded-lg">
      <p className="font-bold">Something went wrong:</p>
      <pre className="text-sm mt-1">{error.message}</pre>
      <button 
        onClick={resetErrorBoundary} 
        className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Try again
      </button>
    </div>
  );
}

// الاستخدام في التطبيق:
// <ErrorBoundary FallbackComponent={MyFallbackComponent}>
//   <YourMainApp />
// </ErrorBoundary>`
  },

  // ثالث عشر: أسئلة الـ State Management المعقدة والـ Caching (Deep Architecture)
  {
    id: 28,
    category: "arch-perf",
    categoryLabel: "الأداء والهندسة المعمارية",
    tags: ["State Management", "Global State", "Local State", "Architecture"],
    titleAr: "إمتى تفكر تعمل Global State (زي Zustand أو Redux) وإمتى تكتفي بالـ Local State العادية (useState)؟",
    titleEn: "When to use Global State (Zustand/Redux) vs Local State (useState)?",
    answerEn: `"I keep UI-isolated state local (like dropdown toggles, modal open flags, or form input values) in useState. I promote state to a global store (Zustand) only when data must be shared across deeply nested, unrelated components (like auth session, cart items, or global theme)."`,
    answerAr: `باستخدم الـ useState المحلية للحالة اللي بتاثر على مكون واحد أو أبنائه القريبين (زي فتح مودال). وبستخدم Global State زي Zustand لما أكون محتاج أشارك البيانات بين مكونات متفرقة (زي سلة المشتريات والمستخدم المسجل).`,
    exampleAr: `في تطبيق حجز الفنادق: حالة فتح وإغلاق التقويم (Calendar Picker) خليتها useState محلية داخل المكون، بينما تفاصيل الحجز وتواريخ الوصول والمغادرة خليتها Zustand Store لمشاركتها مع شريط البحث وصفحة الدفع.`,
    exampleEn: `"In a hotel booking app, calendar modal open state was kept in local useState, while selected dates and room counts were saved in a global Zustand store accessed by both header and checkout page."`
  },
  {
    id: 29,
    category: "arch-perf",
    categoryLabel: "الأداء والهندسة المعمارية",
    tags: ["Server State", "Client State", "TanStack Query", "Zustand"],
    titleAr: "إزاي بتفرق في الاستخدام بين الـ Server State (جاي من API) والـ Client State (حالة الواجهة)؟",
    titleEn: "Difference between Server State and Client State management",
    answerEn: `"Server state is asynchronous, remotely owned data that requires caching, polling, and synchronization (managed via TanStack Query). Client state is synchronous, UI-only state like theme mode, active tabs, and sidebar toggles (managed via Zustand or useState)."`,
    answerAr: `حالة السيرفر (Server State) هي البيانات اللي جاية من الباك إند (زي المنتجات والطلبات)، وبتكون غير متزامنة ومحتاجة Caching بـ TanStack Query. أما حالة العميل (Client State) فهي تفضيلات الـ UI (زي الـ Dark mode أو السايدبار) بـ Zustand.`,
    exampleAr: `في صفحة إدارة الطلبات: قائمة الطلبات وحالتها بنجيبها بـ TanStack Query للاستفادة من الـ Auto-refetching، بينما حالة التبويب النشط (Tab: 'Pending' vs 'Completed') وحجم الصفحة بنخزنها في Zustand.`,
    exampleEn: `"In an order management dashboard, orders data and pagination queries are handled with TanStack Query (Server State), while the active filter tab and sidebar collapse status live in Zustand (Client State)."`
  },

  // رابع عشر: أسئلة الـ Web Performance & Core Web Vitals (أسرار السرعة)
  {
    id: 30,
    category: "arch-perf",
    categoryLabel: "الأداء والهندسة المعمارية",
    tags: ["Core Web Vitals", "LCP", "INP", "CLS", "Performance"],
    titleAr: "إيه هي الـ Core Web Vitals؟ وإزاي بتأثر على أداء الـ Frontend؟",
    titleEn: "What are Core Web Vitals and how do you optimize them?",
    answerEn: `"Core Web Vitals measure real-world user experience:
• LCP (Largest Contentful Paint): Loading speed (optimized via Next/Image, preload fonts, SSR).
• INP (Interaction to Next Paint): Responsiveness to clicks (optimized by breaking long tasks, web workers).
• CLS (Cumulative Layout Shift): Visual stability (optimized by setting fixed aspect ratios on images/ads)."`,
    answerAr: `مقاييس الأداء الرئيسية لجووجل لتجربة المستخدم:
• LCP: سرعة ظهور أكبر عنصر في الشاشة (علاجها بضغط وتحسين الصور).
• INP: سرعة استجابة الموقع لضغطات وتفاعل المستخدم.
• CLS: ثبات العناصر وعدم تحركها المفاجئ أثناء التحميل (علاجها بتحديد أبعاد ثابتة للصور).`,
    exampleAr: `حسنت نتيجة الـ LCP من 3.9 ثانية لـ 1.1 ثانية في متجرنا بإضافة خاصية 'priority' لصورة البانر الرئيسي في Next/Image، وحليت مشكلة الـ CLS بوضع أبعاد ثابتة 'aspect-ratio' لكل بطاقات المنتجات قبل تحميل الصور.`,
    exampleEn: `"I improved our website's LCP from 3.9s to 1.1s by adding the 'priority' prop on hero banner images, and eliminated CLS layout jumps by reserving explicit aspect-ratio containers for all lazy-loaded images."`
  },

  // خامس عشر: أسئلة الـ Security & Authentication المتقدمة
  {
    id: 31,
    category: "security-best",
    categoryLabel: "الأمان و Git و Best Practices",
    tags: ["Authentication", "JWT", "Session Auth", "Security", "Cookies"],
    titleAr: "إيه هو الفرق بين الـ JWT (JSON Web Tokens) والـ Session-based Authentication؟ وإيه الأفضل؟",
    titleEn: "Difference between JWT and Session-based Authentication",
    answerEn: `"Session-based auth stores session data in server memory/Redis and gives the browser a session ID cookie. JWT is a stateless, digitally signed token holding user payload. For security in Single Page Apps, storing JWT refresh tokens inside HttpOnly cookies is best to prevent XSS theft."`,
    answerAr: `في Session-based السيرفر بيحفظ بيانات الجلسة عنده ويبعت كوكي للعميل. في JWT الرمز بيبقى شايل جوه تشفير ببيانات المستخدم. تخزين الـ Tokens في HttpOnly cookies أضمن وأكثر أماناً بكتير ضد ثغرات الـ XSS مقارنة بتخزينها في الـ localStorage.`,
    exampleAr: `في نظام المصادقة، خليت الـ Access Token (مدته 15 دقيقة) محفوظ في ذاكرة التطبيق (Memory/Zustand)، والـ Refresh Token محفوظ في HttpOnly Cookie مع عمل Silent Refresh تلقائي عبر Axios Interceptors عند انتهاء التوكن.`,
    exampleEn: `"In our auth architecture, we held short-lived access tokens (15-min) in React memory and stored refresh tokens in HttpOnly SameSite cookies, automating silent token renewal via Axios interceptors."`
  },
  {
    id: "31-code",
    category: "code",
    categoryLabel: "أكواد حية Live Coding",
    tags: ["Live Coding", "Axios", "Interceptors", "JWT Token", "API"],
    titleAr: "مثال كود عملي: Axios Interceptor لإرفاق التوكن مع كل طلب تلقائياً",
    titleEn: "Live Coding: Axios Request Interceptor for Auth Token",
    answerEn: `"Custom Axios instance with token injection."`,
    answerAr: `كود نظيف لإعداد Axios Instance مع إرفاق الـ Bearer Token تلقائياً في الـ Headers:`,
    exampleAr: `استخدمت هذا الـ Interceptor لإرفاق التوكن مع كل طلب، وضفت عليه Response Interceptor لتجديد التوكن تلقائياً لو السيرفر رجع خطأ 401 Unauthorized بدون ما المستخدم يلاحظ.`,
    exampleEn: `"I used this Axios instance across our codebase to automatically append authorization headers and silently handle 401 token refreshes."`,
    code: `import axios from 'axios';

// إنشاء Axios Instance مخصص
export const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
});

// Request Interceptor لإرفاق الـ Token مع كل طلب تلقائياً
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);`
  },

  // سادس عشر: أسئلة الـ Component Lifecycle وإدارة الآثار الجانبية (Side Effects)
  {
    id: 32,
    category: "core-react-next",
    categoryLabel: "React & Next.js",
    tags: ["Component Lifecycle", "useEffect", "Mounting", "Cleanup"],
    titleAr: "إيه هي مراحل حياة المكون (Component Lifecycle) في React؟ وإيه دور useEffect فيها؟",
    titleEn: "What are the Component Lifecycle phases in React and what is the role of useEffect?",
    answerEn: `"The 3 phases are: Mounting (first render on DOM), Updating (props/state changes), and Unmounting (removal from DOM). useEffect manages side effects: code runs after mount/update, and the returned cleanup function runs before re-running the effect or upon unmounting."`,
    answerAr: `المكون بيمر بـ 3 مراحل: الظهور (Mounting)، التحديث (Updating)، والخروج أو الحذف (Unmounting). الـ useEffect بتدير العمليات الجانبية ودالة التنظيف (Cleanup function) بتشتغل قبل ما المكون يتحذف من الـ DOM لمنع الـ Memory Leaks.`,
    exampleAr: `في شات الدعم الفني المباشر (Live Chat): استخدمت 'useEffect' لفتح اتصال WebSocket مع السيرفر عند الـ Mount، وفي دالة الـ Cleanup كتبت 'socket.disconnect()' عشان أقفل الاتصال لما المستخدم يخرج من الصفحة وأمنع استهلاك موارد الجهاز.`,
    exampleEn: `"In a live support chat widget, I initiated the WebSocket connection in useEffect on mount, and called 'socket.disconnect()' and removed event listeners in the cleanup return function on unmount."`
  },

  // سابع عشر: أسئلة الـ Responsive Design والـ CSS Techniques
  {
    id: 33,
    category: "js-ts",
    categoryLabel: "CSS & Styling",
    tags: ["Tailwind CSS", "Mobile-First", "Responsive Design"],
    titleAr: "إزاي بتتعامل مع تصميم شاشات الموبايل (Mobile-First Approach) باستخدام Tailwind CSS؟",
    titleEn: "How do you handle Mobile-First design using Tailwind CSS?",
    answerEn: `"Mobile-first means writing base CSS classes tailored for small mobile screens first without prefixes (e.g. 'flex flex-col p-4'), and then layering responsive breakpoints ('md:flex-row md:p-8 lg:grid') as screen width increases."`,
    answerAr: `نهج الـ Mobile-first معناه إني بكتب التنسيقات للشاشات الصغيرة كقاعدة أساسية أولاً، وبعدين بستخدم بادئات Tailwind المتجاوبة (زي md:, lg:) عشان أعدل التصميم للشاشات الأكبر.`,
    exampleAr: `في كروت باقات الأسعار (Pricing Table): كتبنا الكلاس الأساسي 'grid grid-cols-1 gap-4' للموبايل، وضفنا 'md:grid-cols-2 lg:grid-cols-3' للأجهزة اللوحية والديسكتوب، مع تحويل القائمة الجانبية لـ Hamburger Menu في الشاشات الصغيرة.`,
    exampleEn: `"In a SaaS pricing table, I styled cards as single-column for mobile by default ('grid grid-cols-1'), expanding to 'md:grid-cols-2 lg:grid-cols-3' on desktop with responsive mobile drawer navigation."`
  },

  // ثامن عشر: أسئلة الـ Git & Team Collaboration (التعاون في الفريق)
  {
    id: 34,
    category: "security-best",
    categoryLabel: "الأمان و Git و Best Practices",
    tags: ["Git", "Merge Conflicts", "Collaboration", "VS Code"],
    titleAr: "لو حصل Conflict (تعارض في الكود) بينك وبين حد زميلك في الفريق على نفس الملف، بتتعامل معاه إزاي؟",
    titleEn: "How do you resolve Git Merge Conflicts when working with teammates?",
    answerEn: `"I pull latest changes from the target branch, use VS Code's 3-way Merge Editor to inspect incoming vs current changes, communicate with my teammate to decide which logic to preserve, test the build locally, and commit the resolved code."`,
    answerAr: `أول حاجة بسحب آخر التحديثات من الفرع الأساسي، وبشغل git status عشان أعرف الملفات المتعارضة، وأفتحها في VS Code أشوف التغييرات بتاعتي وتغييرات زميلي، ونتواصل مع بعض لو نقطة محتاجة نقاش، وبعدين أعمل Test و Push للكود السليم.`,
    exampleAr: `لما كنا شغالين اتنين مطورين على نفس ملف الـ Routing وأنواع البيانات (types/index.ts) وحصل Conflict؛ فتحت محرر الـ Merge في VS Code وتواصلت مع زميلي على Slack ودمجنا الإضافتين مع تشغيل 'npm run build' للتأكد من خلو المشروع من أخطاء الـ Types.`,
    exampleEn: `"When a teammate and I both updated the central router config, I used VS Code's merge editor, synced with him on Slack to merge both route arrays, and verified the build before committing."`
  },
  {
    id: "34-code",
    category: "code",
    categoryLabel: "أكواد حية Live Coding",
    tags: ["Live Coding", "Custom Hook", "useFetch", "AbortController", "TypeScript"],
    titleAr: "مثال كود عملي: Custom Hook لجلب البيانات مع Error Handling و AbortController",
    titleEn: "Live Coding: Custom useFetch Hook with AbortController",
    answerEn: `"A resilient custom data fetching hook with cancellation."`,
    answerAr: `كود هوك جلب بيانات بسيط واحترافي يتعامل مع التحميل، الأخطاء، وإلغاء الطلب:`,
    exampleAr: `استخدمت هذا الـ Hook في المشاريع البسيطة أو الصفحات التي لا تحتاج لمكتبات ضخمة، لتوفير تجربة جلب بيانات نظيفة مع الإلغاء التلقائي عند مغادرة الصفحة.`,
    exampleEn: `"I implemented this hook in lightweight microsites to handle loading spinners, error alerts, and unmount cancellation cleanly without external dependencies."`,
    code: `import { useState, useEffect } from 'react';

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => controller.abort(); // Cleanup on unmount
  }, [url]);

  return { data, loading, error };
}`
  },

  // تاسع عشر: الأسئلة السلوكية (Behavioral & Soft Skills)
  {
    id: 35,
    category: "behavioral",
    categoryLabel: "الأسئلة السلوكية Soft Skills",
    tags: ["Behavioral", "Bug in Prod", "Problem Solving", "STAR Method"],
    titleAr: "احكي لي عن موقف واجهت فيه خطأ كبير (Bug) في مشروع وعطل الشغل، وإزاي اتصرفت؟",
    titleEn: "Tell me about a time you faced a critical bug in production and how you solved it",
    answerEn: `"In a previous project, a breaking change in a third-party payment API broke checkout. I stayed calm, checked Sentry and network logs to isolate the issue, implemented an immediate fallback error UI, pushed a hotfix within 30 minutes, and added automated test coverage to prevent recurrence."`,
    answerAr: `في مشروع سابق، حصل عطل مفاجئ في الـ API عطل صفحة الدفع في عربة التسوق. التزمت الهدوء، وبحثت في الـ Network والـ Console لحد ما لقيت مشكلة في استجابة الباك إند، وعملت حل مؤقت (Fallback) مع معالجة الأخطاء فوراً، وأبلغت الفريق عشان نتجنب المشكلة دي بعد كده.`,
    exampleAr: `خلال حملة تخفيضات Black Friday، اكتشفنا إن مستخدمي متصفح Safari القديم مش قادرين يكملوا الدفع بسبب ميزة Regex Lookbehind غير المدعومة عندهم؛ شيكت على لوجات Sentry، وغيرت الـ Regex لحل متوافق مع كل المتصفحات، ونزلنا Hotfix في 25 دقيقة.`,
    exampleEn: `"During a high-traffic seasonal sale, older Safari users experienced checkout errors due to an unsupported regex lookbehind. Using Sentry alerts, I pinpointed the issue, deployed a cross-browser regex patch in 25 minutes, and added browser compatibility linting rules."`
  },
  {
    id: 36,
    category: "behavioral",
    categoryLabel: "الأسئلة السلوكية Soft Skills",
    tags: ["Behavioral", "Code Review", "Teamwork", "Feedback"],
    titleAr: "بتتعامل إزاي لو مديرك أو زميلك في الفريق انتقد الكود بتاعك في الـ Code Review؟",
    titleEn: "How do you handle critical feedback during Code Reviews?",
    answerEn: `"I treat code reviews as an opportunity to learn and elevate code quality, not as a personal critique. I evaluate the technical suggestion objectively, discuss alternatives respectfully if needed, and apply the best solution for the codebase."`,
    answerAr: `باخد مراجعات الكود (Code Reviews) كفرصة عظيمة للتعلم مش هجوم شخصي. بسمع للتعليقات، وبستفسر لو نقطة مش واضحة، ولو عندي رأي تاني بناقشه باحترافية وبأسباب تقنية. الهدف الأساسي دايمًا هو كتابة كود نظيف وقوي للمنتج.`,
    exampleAr: `في أحد الـ Pull Requests اقترح زميل Senior إعادة هيكلة مكون معقد (500 سطر) واستخدام نمط Compound Components بدلاً من تمرير 12 Props؛ شكرته على الملاحظة وطبقت فكرته، وده خلى المكون قابل لإعادة الاستخدام في صفحات تانية بسهولة.`,
    exampleEn: `"When a senior engineer pointed out that my 500-line modal component was becoming unmaintainable, I welcomed the feedback and refactored it into Compound Components, which made the component 10x easier for the entire team to reuse."`
  },
  {
    id: 37,
    category: "behavioral",
    categoryLabel: "الأسئلة السلوكية Soft Skills",
    tags: ["Behavioral", "Time Management", "Deadlines", "Prioritization"],
    titleAr: "بتدير وقتك إزاي لما يكون عندك مهام كتير وDeadline قريب؟ (Time Management)",
    titleEn: "How do you manage your time when facing multiple tasks and tight deadlines?",
    answerEn: `"I break large features into smaller milestones, prioritize tasks based on business impact using the Eisenhower matrix, communicate early with my team lead about any blockers, and focus on delivering a solid MVP before adding secondary polish."`,
    answerAr: `بستخدم أدوات تنظيم المهام، وبقسم الميزات الكبيرة لخطوات صغيرة، وبدير أولوياتي حسب الأهمية والاستعجال. ودايماً بكون على تواصل مفتوح مع مدير الفريق لو ظهرت أي عقبات.`,
    exampleAr: `لما كان مطلوب مننا تسليم ميزة تتبع الشحنات في 3 أيام قبل إطلاق التطبيق؛ ركزت على إنجاز المسار الأساسي (Core User Flow) أولاً مع شاشات التحميل والخطأ، وبعد التسليم الناجح أضفنا التحسينات والـ Animations في التحديث التالي.`,
    exampleEn: `"Faced with a 3-day deadline to launch a live order tracking feature, I prioritized the critical user happy-path and essential error states first to guarantee a stable launch, scheduling secondary animation polish for the next sprint."`
  },

  // عشرون: أسئلة الختام وتأكيد الثقة (Closing the Interview)
  {
    id: 38,
    category: "behavioral",
    categoryLabel: "الأسئلة السلوكية Soft Skills",
    tags: ["Behavioral", "Why Hire Me", "Closing Interview", "Value Proposition"],
    titleAr: "لو سألوك: 'ليه شايف إنك الشخص المناسب للوظيفة دي؟' (Why should we hire you?)",
    titleEn: "Why should we hire you? (Closing Answer)",
    answerEn: `"Because I bring strong hands-on experience in building modern, scalable web apps using React, Next.js, and TypeScript. I care deeply about performance, clean architecture, and writing maintainable code. Plus, I'm a fast learner and a collaborative team player."`,
    answerAr: `لأني عندي خبرة عملية قوية في بناء تطبيقات ويب حديثة وقابلة للتوسع باستخدام React و Next.js و TypeScript. بهتم جداً بالأداء والهندسة النظيفة، وكمان بتعلم بسرعة وبعرف اشتغل بتناغم روح الفريق.`,
    exampleAr: `لأني مش بس بكتب كود؛ أنا بركز على مشاكل البيزنس الحقيقية وتجربة المستخدم، وعندي شغف بمتابعة أحدث التقنيات وتقديم قيمة ملموسة للفريق من أول أسبوع شغل.`,
    exampleEn: `"Because beyond writing clean, type-safe code in React and Next.js, I approach every feature with a product mindset—focusing on user experience, performance metrics, and fast, dependable team execution."`
  }
];

// ==========================================================================
// Application State & Storage
// ==========================================================================
let currentCategory = 'all';
let searchQuery = '';
let isFlashcardMode = false;
let onlyUnmastered = false;
let masteredIds = JSON.parse(localStorage.getItem('fe_interview_mastered') || '[]');
let currentUtterance = null;

// DOM Elements
const questionsContainer = document.getElementById('questionsContainer');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const categoryFilters = document.getElementById('categoryFilters');
const themeToggle = document.getElementById('themeToggle');
const flashcardModeBtn = document.getElementById('flashcardModeBtn');
const printBtn = document.getElementById('printBtn');
const expandAllBtn = document.getElementById('expandAllBtn');
const collapseAllBtn = document.getElementById('collapseAllBtn');
const onlyUnmasteredBtn = document.getElementById('onlyUnmasteredBtn');
const noResults = document.getElementById('noResults');
const resetSearchBtn = document.getElementById('resetSearchBtn');
const activeResultsInfo = document.getElementById('activeResultsInfo');
const masteredCountEl = document.getElementById('masteredCount');
const totalQuestionsCountEl = document.getElementById('totalQuestionsCount');
const codeSnippetsCountEl = document.getElementById('codeSnippetsCount');
const progressPercentageEl = document.getElementById('progressPercentage');
const progressBarFillEl = document.getElementById('progressBarFill');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');

// ==========================================================================
// Initialization
// ==========================================================================
function init() {
  updateCategoryCounts();
  updateProgressStats();
  renderQuestions();
  setupEventListeners();
  loadSavedTheme();
}

// Render Questions
function renderQuestions() {
  const filtered = questionsData.filter(q => {
    // Category match
    const matchCat = (currentCategory === 'all') || 
      (currentCategory === 'code' ? !!q.code : q.category === currentCategory);

    // Mastery filter
    const isMastered = masteredIds.includes(String(q.id));
    if (onlyUnmastered && isMastered) return false;

    // Search query match
    if (!searchQuery) return matchCat;

    const query = searchQuery.toLowerCase().trim();
    const matchText = 
      q.titleAr.toLowerCase().includes(query) ||
      q.titleEn.toLowerCase().includes(query) ||
      q.answerAr.toLowerCase().includes(query) ||
      q.answerEn.toLowerCase().includes(query) ||
      (q.exampleAr && q.exampleAr.toLowerCase().includes(query)) ||
      (q.exampleEn && q.exampleEn.toLowerCase().includes(query)) ||
      (q.code && q.code.toLowerCase().includes(query)) ||
      (q.tags && q.tags.some(tag => tag.toLowerCase().includes(query)));

    return matchCat && matchText;
  });

  // Update UI Stats
  activeResultsInfo.textContent = `عرض ${filtered.length} من أصل ${questionsData.length} عنصر`;

  if (filtered.length === 0) {
    questionsContainer.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';

  questionsContainer.innerHTML = filtered.map(q => {
    const isMastered = masteredIds.includes(String(q.id));
    return `
      <div class="q-card ${isMastered ? 'is-mastered' : ''} ${isFlashcardMode ? 'flashcard-active' : ''}" id="card-${q.id}" data-id="${q.id}">
        <div class="q-header" onclick="handleCardHeaderClick('${q.id}')">
          <div class="q-title-wrap">
            <div class="q-meta">
              <span class="q-number">#${q.id}</span>
              <span class="q-tag">${q.categoryLabel}</span>
              ${q.code ? '<span class="q-tag" style="background:rgba(6, 182, 212, 0.15); color:var(--accent-cyan);"><i class="fa-solid fa-code"></i> Live Code</span>' : ''}
              ${(q.exampleAr || q.exampleEn) ? '<span class="q-tag" style="background:rgba(245, 158, 11, 0.15); color:var(--accent-amber);"><i class="fa-solid fa-lightbulb"></i> Project Example</span>' : ''}
            </div>
            <h3 class="q-title">${highlightText(q.titleAr, searchQuery)}</h3>
          </div>

          <div class="q-controls" onclick="event.stopPropagation()">
            <label class="mastery-checkbox" title="تعليم كـ تم الإتقان">
              <input type="checkbox" ${isMastered ? 'checked' : ''} onchange="toggleMastered('${q.id}', this.checked)">
              <span>أتقنتها</span>
            </label>
            <i class="fa-solid fa-chevron-down toggle-icon" onclick="toggleCardCollapse('${q.id}')"></i>
          </div>
        </div>

        <div class="flashcard-hint" onclick="revealFlashcard('${q.id}')">
          <i class="fa-solid fa-eye"></i> انقر لإظهار الإجابة والسيناريو العملي (Flashcard)
        </div>

        <div class="q-body">
          <div class="answer-section">
            <!-- English Answer -->
            <div class="answer-box">
              <div class="answer-box-header">
                <span class="answer-badge badge-en"><i class="fa-solid fa-globe"></i> English Answer</span>
                <div class="answer-actions">
                  <button class="action-btn-sm" title="استمع للنطق الإنجليزي" onclick="speakText('${encodeURIComponent(q.answerEn + (q.exampleEn ? '. Project scenario: ' + q.exampleEn : ''))}', this)">
                    <i class="fa-solid fa-volume-high"></i> نطق
                  </button>
                  <button class="action-btn-sm" title="نسخ الإجابة الإنجليزية" onclick="copyToClipboard('${escapeQuotes(q.answerEn)}')">
                    <i class="fa-regular fa-copy"></i> نسخ
                  </button>
                </div>
              </div>
              <div class="answer-text en-text">${highlightText(q.answerEn, searchQuery)}</div>
            </div>

            <!-- Arabic Answer -->
            <div class="answer-box">
              <div class="answer-box-header">
                <span class="answer-badge badge-ar"><i class="fa-solid fa-language"></i> الشرح بالعربي</span>
                <div class="answer-actions">
                  <button class="action-btn-sm" title="نسخ الشرح العربي" onclick="copyToClipboard('${escapeQuotes(q.answerAr)}')">
                    <i class="fa-regular fa-copy"></i> نسخ
                  </button>
                </div>
              </div>
              <div class="answer-text ar-text">${highlightText(q.answerAr, searchQuery)}</div>
            </div>
          </div>

          ${(q.exampleAr || q.exampleEn) ? `
            <div class="project-scenario-box">
              <div class="project-scenario-header">
                <span class="scenario-badge"><i class="fa-solid fa-briefcase"></i> مثال عملي من مشروع حقيقي (Real-World Project Scenario)</span>
                <button class="action-btn-sm" title="نسخ المثال والسيناريو" onclick="copyToClipboard('${escapeQuotes((q.exampleAr || '') + '\n\nIn English:\n' + (q.exampleEn || ''))}')">
                  <i class="fa-regular fa-copy"></i> نسخ المثال
                </button>
              </div>
              <div class="scenario-content">
                ${q.exampleAr ? `<div class="scenario-ar"><strong class="scenario-label-ar">📌 في المقابلة بالعربي:</strong> ${highlightText(q.exampleAr, searchQuery)}</div>` : ''}
                ${q.exampleEn ? `<div class="scenario-en"><strong class="scenario-label-en">📌 In English:</strong> ${highlightText(q.exampleEn, searchQuery)}</div>` : ''}
              </div>
            </div>
          ` : ''}

          ${q.code ? `
            <div class="code-container">
              <div class="code-header">
                <span><i class="fa-brands fa-js"></i> TypeScript / Code Example</span>
                <button class="action-btn-sm" title="نسخ الكود" onclick="copyToClipboard('${escapeQuotes(q.code)}')">
                  <i class="fa-regular fa-copy"></i> نسخ الكود
                </button>
              </div>
              <pre class="code-content"><code>${escapeHtml(q.code)}</code></pre>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// Helpers
function escapeQuotes(str) {
  if (!str) return '';
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;').replace(/\n/g, '\\n');
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function highlightText(text, query) {
  if (!query || !text) return text;
  const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');
  return text.replace(regex, '<mark style="background:rgba(245, 158, 11, 0.3); color:#fef08a; padding:1px 4px; border-radius:4px;">$1</mark>');
}

// Card interactions
window.handleCardHeaderClick = function(id) {
  const card = document.getElementById(`card-${id}`);
  if (isFlashcardMode && !card.classList.contains('revealed')) {
    card.classList.add('revealed');
  } else {
    card.classList.toggle('collapsed');
  }
};

window.toggleCardCollapse = function(id) {
  const card = document.getElementById(`card-${id}`);
  card.classList.toggle('collapsed');
};

window.revealFlashcard = function(id) {
  const card = document.getElementById(`card-${id}`);
  card.classList.add('revealed');
};

// Toggle Mastery
window.toggleMastered = function(id, isMastered) {
  id = String(id);
  if (isMastered) {
    if (!masteredIds.includes(id)) masteredIds.push(id);
    showToast('أحسنت! تم تعليم السؤال كـ مُتقن ✅');
  } else {
    masteredIds = masteredIds.filter(item => item !== id);
    showToast('تمت إزالة علامة الإتقان');
  }
  localStorage.setItem('fe_interview_mastered', JSON.stringify(masteredIds));
  
  const card = document.getElementById(`card-${id}`);
  if (card) {
    card.classList.toggle('is-mastered', isMastered);
  }
  
  updateProgressStats();

  if (onlyUnmastered) {
    renderQuestions();
  }
};

// Text-to-Speech for English Answers
window.speakText = function(encodedText, btnElement) {
  const text = decodeURIComponent(encodedText);
  if ('speechSynthesis' in window) {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      document.querySelectorAll('.action-btn-sm').forEach(b => b.classList.remove('speaking'));
      return;
    }

    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = 'en-US';
    currentUtterance.rate = 0.95;

    btnElement.classList.add('speaking');

    currentUtterance.onend = () => {
      btnElement.classList.remove('speaking');
    };

    currentUtterance.onerror = () => {
      btnElement.classList.remove('speaking');
    };

    window.speechSynthesis.speak(currentUtterance);
  } else {
    showToast('متصفحك لا يدعم نطق الصوت');
  }
};

// Copy text
window.copyToClipboard = function(text) {
  const cleanText = text.replace(/\\n/g, '\n').replace(/&quot;/g, '"');
  navigator.clipboard.writeText(cleanText).then(() => {
    showToast('تم النسخ إلى الحافظة بنجاح 📋');
  }).catch(() => {
    showToast('حدث خطأ أثناء النسخ');
  });
};

function showToast(msg) {
  toastMsg.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// Update Counts and Stats
function updateCategoryCounts() {
  const total = questionsData.length;
  document.getElementById('count-all').textContent = total;

  const cats = ['hr', 'core-react-next', 'js-ts', 'state-data', 'arch-perf', 'security-best', 'behavioral'];
  cats.forEach(c => {
    const el = document.getElementById(`count-${c}`);
    if (el) {
      el.textContent = questionsData.filter(q => q.category === c).length;
    }
  });

  const codeEl = document.getElementById('count-code');
  if (codeEl) {
    codeEl.textContent = questionsData.filter(q => !!q.code).length;
  }
}

function updateProgressStats() {
  const total = questionsData.length;
  const mastered = masteredIds.length;
  const percentage = Math.round((mastered / total) * 100);

  masteredCountEl.textContent = mastered;
  totalQuestionsCountEl.textContent = total;
  codeSnippetsCountEl.textContent = questionsData.filter(q => !!q.code).length;
  progressPercentageEl.textContent = `${percentage}%`;
  progressBarFillEl.style.width = `${percentage}%`;
}

// Theme handling
function loadSavedTheme() {
  const savedTheme = localStorage.getItem('fe_interview_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
  if (theme === 'light') {
    themeToggle.innerHTML = '<i class="fa-solid fa-sun" style="color:var(--accent-amber);"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Theme Toggle
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('fe_interview_theme', next);
    updateThemeIcon(next);
  });

  // Search Input
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
    renderQuestions();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    renderQuestions();
  });

  resetSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    currentCategory = 'all';
    document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
    document.querySelector('.cat-pill[data-cat="all"]').classList.add('active');
    clearSearchBtn.style.display = 'none';
    renderQuestions();
  });

  // Category Filter Pills
  categoryFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-pill');
    if (!btn) return;

    document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    currentCategory = btn.getAttribute('data-cat');
    renderQuestions();
  });

  // Expand / Collapse all
  expandAllBtn.addEventListener('click', () => {
    document.querySelectorAll('.q-card').forEach(c => {
      c.classList.remove('collapsed');
      if (isFlashcardMode) c.classList.add('revealed');
    });
  });

  collapseAllBtn.addEventListener('click', () => {
    document.querySelectorAll('.q-card').forEach(c => {
      c.classList.add('collapsed');
    });
  });

  // Only Unmastered Toggle
  onlyUnmasteredBtn.addEventListener('click', () => {
    onlyUnmastered = !onlyUnmastered;
    onlyUnmasteredBtn.classList.toggle('active-filter', onlyUnmastered);
    renderQuestions();
  });

  // Flashcard Mode Toggle
  flashcardModeBtn.addEventListener('click', () => {
    isFlashcardMode = !isFlashcardMode;
    flashcardModeBtn.classList.toggle('active-filter', isFlashcardMode);
    if (isFlashcardMode) {
      flashcardModeBtn.innerHTML = '<i class="fa-solid fa-check"></i> إنهاء وضع المذاكرة';
      showToast('تم تفعيل وضع البطاقات التعليمية (Flashcards) 🧠');
    } else {
      flashcardModeBtn.innerHTML = '<i class="fa-solid fa-layer-group"></i> وضع المذاكرة (Flashcards)';
      showToast('تم إلغاء وضع البطاقات التعليمية');
    }
    renderQuestions();
  });

  // Print button
  printBtn.addEventListener('click', () => {
    // Expand all before printing
    document.querySelectorAll('.q-card').forEach(c => {
      c.classList.remove('collapsed');
      c.classList.remove('flashcard-active');
    });
    window.print();
  });
}

// Start the app on DOM load
document.addEventListener('DOMContentLoaded', init);
