DevStack

📌 Description
DevStack is a developer tool explorer where users can browse frontend, backend, database, and tooling technologies, compare them side by side, and build their own ideal development stack by adding or removing tools from a personalized list — all in a clean, modern interface.

🛠️ Tech Stack
React (with TypeScript)
Vite – build tool & dev server
Tailwind CSS – styling
React use() hook + Suspense – async data fetching


✨ Features
Explore & Build Your Stack 
Live Toast Notifications 
Fully Responsive Design 



🧠 React প্রশ্নোত্তর (Q&A)

১. JSX কী, এবং React-এ এটা কেন ব্যবহার করা হয়?

উত্তর: JSX হলো JavaScript-এর ভেতরে সরাসরি HTML-এর মতো কোড লেখার একটা পদ্ধতি । এটা আসলে JavaScript নয়, কিন্তু React একে compile করে সাধারণ JavaScript function-এ রূপান্তর করে। এটা ব্যবহার করা হয় কারণ এতে UI-এর গঠন আর logic একসাথে, একই জায়গায় লেখা যায় — ফলে কোড পড়তে ও বুঝতে সহজ হয়। যেমন :
এই প্রজেক্টের HeroSection.tsx-এ <h2>Build Your Ideal</h2> লেখাটা JSX।

২. Props এবং State-এর মধ্যে পার্থক্য কী?

উত্তর: Props হলো এমন ডেটা যা parent component থেকে child component-এ পাঠানো হয়। এটা read-only, মানে child component নিজে থেকে props পরিবর্তন করতে পারে না। যেমন Card component-কে card, onAdd, stack — এই props গুলো Cards.tsx থেকে পাঠানো হয়েছে।
State হলো একটা component-এর নিজস্ব ডেটা, যেটা সময়ের সাথে বদলাতে পারে এবং বদলালে UI নতুন করে render হয়। যেমন App.tsx-এ stack এবং toast হলো state।
সহজ ভাষায়: props হলো বাইরে থেকে পাওয়া জিনিস, আর state হলো component নিজে যা মনে রাখে ও নিয়ন্ত্রণ করে।

৩. useState hook কী করে, এবং এই প্রজেক্টে কোথায় ব্যবহার করা হয়েছে?

উত্তর: useState হলো এমন একটা hook যেটা দিয়ে একটা component-এর মধ্যে state (পরিবর্তনশীল ডেটা) তৈরি ও আপডেট করা যায়। এটা একটা variable আর সেটা আপডেট করার একটা function — দুটো একসাথে রিটার্ন করে। যখনই এই state আপডেট হয়, React স্বয়ংক্রিয়ভাবে সেই অংশটুকু আবার render করে।

এই প্রজেক্টে App.tsx-এ দুইবার ব্যবহার হয়েছে:

const [stack, setStack] = useState<apiDataType[]>([])
const [toast, setToast] = useState<string | null>(null)

stack দিয়ে ইউজারের বেছে নেওয়া টেকনোলজিগুলোর তালিকা রাখা হয়েছে।
toast দিয়ে notification মেসেজ দেখানো/লুকানো নিয়ন্ত্রণ করা হয়েছে।

আর Naveber.tsx-এ মোবাইল মেনু খোলা-বন্ধ করার জন্য useState(false) ব্যবহার হয়েছে (menuOpen)।

৪. useEffect hook কী করে, এবং JSON ডেটা লোড করতে এটা কেন দরকার হয়েছিল?

উত্তর: সাধারণভাবে useEffect ব্যবহার করা হয় component render হওয়ার পর কোনো "side effect" চালানোর জন্য — যেমন API কল করা, ডেটা fetch করা, বা event listener বসানো। এটা দরকার হয় কারণ ডেটা fetch করার মতো কাজ সরাসরি render-এর সময় করা ঠিক না; এটা render শেষ হওয়ার পর আলাদাভাবে চালাতে হয়।

তবে এই প্রজেক্টে সরাসরি useEffect ব্যবহার করা হয়নি — এখানে React-এর নতুন use() hook এবং Suspense দিয়ে একই কাজটা করা হয়েছে:

const facData = async () => {
  const res = await fetch('/alldata.json')
  const data = await res.json()
  return data
}

const dataPromise = facData()
এই dataPromise-কে Cards.tsx-এ use(dataPromise) দিয়ে সরাসরি পড়া হয়েছে, এবং App.tsx-এ <Suspense fallback={<h2>Loading.....</h2>}> দিয়ে wrap করা হয়েছে — যাতে ডেটা লোড হওয়ার সময় "Loading..." দেখানো যায়। এটা useEffect + useState দিয়ে ডেটা fetch করার একটা আধুনিক বিকল্প পদ্ধতি।


৫. .map() লিস্টের প্রতিটা item-এ কেন unique key prop দরকার?

উত্তর: React যখন একটা লিস্ট render করে, তখন key দেখে বুঝতে পারে কোন item কোনটা — কোনটা নতুন যোগ হলো, কোনটা মুছে গেল, কোনটার জায়গা বদলালো। Unique key না দিলে React ঠিকভাবে বুঝতে পারে না কোন item পরিবর্তন হয়েছে, ফলে ভুল item update হতে পারে বা performance কমে যেতে পারে।

এই প্রজেক্টে Cards.tsx-এ:

allCards.map((singelcard) => (
  <Card key={singelcard.id} card={singelcard} onAdd={onAdd} stack={stack} />
))
এখানে প্রতিটা card-এর id কে key হিসেবে ব্যবহার করা হয়েছে, একইভাবে Readlist.tsx-এও item.id কে key দেওয়া হয়েছে।


৬. Conditional Rendering কী? একটা উদাহরণ দাও।

উত্তর: Conditional Rendering মানে হলো — কোনো শর্ত (condition) সত্যি না মিথ্যা তার উপর ভিত্তি করে ভিন্ন ভিন্ন UI দেখানো। JavaScript-এর if, ternary (? :), বা && operator ব্যবহার করে এটা করা হয়।

উদাহরণ, Readlist.tsx-এ যখন stack খালি থাকে তখন একটা মেসেজ দেখানো হয়:

{stack.length === 0 ? (
  <p className="text-sm text-gray-400">No technologies selected </p>
) : (
  <p className="text-sm text-gray-500">{stack.length} Technology Selected</p>
)}
অর্থাৎ, stack-এ কিছু না থাকলে "No technologies selected " দেখাবে, আর থাকলে কতগুলো টেকনোলজি সিলেক্ট করা হয়েছে সেটা দেখাবে।


৭. Parent থেকে Child-এ ডেটা কীভাবে পাঠানো হয়, আর Child কীভাবে Parent-কে কিছু ফেরত পাঠায়?

উত্তর: Parent → Child: Parent component তার data props হিসেবে child-কে পাঠায়। যেমন App.tsx (parent) থেকে Readlist (child)-কে stack prop হিসেবে পাঠানো হয়েছে:
<Readlist stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />

Child → Parent: যেহেতু child সরাসরি parent-এর state পরিবর্তন করতে পারে না, তাই parent একটা function বানিয়ে সেটাকে prop হিসেবে child-কে পাঠায়। Child সেই function-কে কল করলে parent-এর state আপডেট হয়। যেমন Card.tsx (child)-এ বাটনে ক্লিক করলে:
<button onClick={() => onAdd(card)}>Add to Stack</button>

এখানে onAdd আসলে App.tsx-এর handleAdd function, যেটা props হিসেবে Cards.tsx হয়ে Card.tsx পর্যন্ত পৌঁছেছে। Child বাটনে ক্লিক করে সেই function কল করলে, parent-এর stack state আপডেট হয়ে যায়।
