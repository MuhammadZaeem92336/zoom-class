import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div><figure className="md:flex bg-green-50 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none full mx-auto" src="/zaeem-pic.png" alt="" width="400" height="512"/>
  <div className="pt-6 md:p-8 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-large">
        "My name is Muhhammd Zaeem.I am in 9th class.
        My GAI course sir name is SIR ASIF SB.My Father is a Government Employee.
        I am hafize QURAN.
        My career aim to is to be a lawyer."
      </p>
    </blockquote>
    <figcaption className="font-large">
      <div className="text-red-500 dark:text-sky-400">
        MUHAMMAD ZAEEM
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, MANTECH
      </div>
    </figcaption>
  </div>
</figure></div>
    </main>
  );
}
