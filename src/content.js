// Saara text aur contact info yahin se aata hai.
// Brand ka naam, number ya services badalni ho to sirf yeh file edit karo.

export const brand = {
  name: "Banao",
  // Country code ke saath, bina + ya space ke. Example: 919876543210
  whatsapp: "919999999999",
  // Form ke messages isi email par aayenge.
  email: "NIU-24-22959@niu.ac.in",
  // web3forms.com se free key lo (key isi email par aati hai) aur yahan paste karo.
  // Jab tak yeh khali hai, "Brief bhejo" button Gmail compose khol dega.
  web3formsKey: "",
};

export const projectTypes = [
  "Website",
  "Web app",
  "AI chatbot",
  "Android app",
  "Automation",
  "Browser extension",
];

export const budgets = [
  "Abhi pata nahi",
  "Rs 5,000 se kam",
  "Rs 5,000 se Rs 25,000",
  "Rs 25,000 se Rs 1 lakh",
  "Rs 1 lakh se zyada",
];

export const services = [
  {
    title: "Websites aur web apps",
    summary:
      "Business site, admin panel, booking ya login wala poora web app. Phone par bhi tez chalta hai.",
    examples: [
      "Business ya portfolio website",
      "Dashboard aur admin panel",
      "Login, booking ya payment wala web app",
    ],
    tech: "React, Python, Node.js",
  },
  {
    title: "AI aur chatbots",
    summary:
      "Customer ke sawaalon ka jawab dene wala bot, ya aapke documents se jawab nikalne wala tool.",
    examples: [
      "WhatsApp chatbot",
      "Support assistant jo aapke FAQ se jawab de",
      "Text summarise aur sort karne wale tools",
    ],
    tech: "Claude API, Node.js, Python",
  },
  {
    title: "Android apps",
    summary:
      "Roz ka kaam ek app mein laana, jaise college ya office ka data ek hi jagah dikhna.",
    examples: [
      "Student ya staff ke liye utility app",
      "Kisi portal ka data ek app mein dikhana",
      "Notifications aur reminders wala app",
    ],
    tech: "Android, Kotlin ya React Native",
  },
  {
    title: "Automation aur extensions",
    summary:
      "Jo kaam baar baar karna padta hai, woh script ya browser extension apne aap kar de.",
    examples: [
      "Browser extension",
      "Data scraping aur report banana",
      "Mac ya Windows par workflow shortcuts",
    ],
    tech: "Python, JavaScript, AppleScript",
  },
];

export const process = [
  {
    title: "Baat",
    text: "Aap apna idea batate ho. Hum sawaal poochte hain jab tak poori tasveer saaf na ho.",
  },
  {
    title: "Plan",
    text: "Kya banega, kab tak banega aur kitna lagega, yeh sab likhit mein milta hai.",
  },
  {
    title: "Build",
    text: "Kaam chhote hisson mein aata hai. Aap har hisse ko khud chala ke dekh sakte ho.",
  },
  {
    title: "Handover",
    text: "Code, deployment aur kaise chalana hai, sab aapke haath mein. Kuch atakta hai to hum madad karte hain.",
  },
];

export const work = [
  {
    title: "College ERP app",
    kind: "Android app",
    text: "College portal ka attendance aur notices ek app mein. Login ek baar, data hamesha taaza.",
    stack: "Android, web scraping",
  },
  {
    title: "WhatsApp chatbot",
    kind: "AI chatbot",
    text: "WhatsApp par aane wale sawaalon ka jawab dene wala bot, jo Claude API se baat karta hai.",
    stack: "Node.js, Claude API",
  },
  {
    title: "Notifications summariser",
    kind: "Browser extension",
    text: "Brave browser mein X ke notifications padhta hai aur unka chhota saar dikhata hai.",
    stack: "JavaScript, browser extension",
  },
  {
    title: "Mac voice shortcuts",
    kind: "Automation",
    text: "Siri se bolke Mac par kaam karwane wala shortcuts ka system.",
    stack: "Shortcuts, AppleScript",
  },
];