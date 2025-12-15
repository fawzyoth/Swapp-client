import{r as s,j as t}from"./index-D0Dq44PN.js";import{a as r}from"./supabase-Dp-5A4AM.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=r("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),o=s.createContext(void 0);function c(){const e=s.useContext(o);if(!e)throw new Error("useLanguage must be used within a LanguageProvider");return e}function x(){const{lang:e,setLang:a}=c();return t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(n,{className:"w-4 h-4 text-slate-500"}),t.jsx("button",{onClick:()=>a("fr"),className:`px-2 py-1 text-sm rounded transition-colors ${e==="fr"?"bg-emerald-600 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:"FR"}),t.jsx("button",{onClick:()=>a("ar"),className:`px-2 py-1 text-sm rounded transition-colors ${e==="ar"?"bg-emerald-600 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:"عربي"})]})}export{x as L,c as u};
