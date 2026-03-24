import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Muslim-American Resources 2026: Community, Faith, Learning | AllahiCan",
  description: "Directory of resources for Muslim Americans — community organizations, educational materials, spiritual guidance, and support networks.",
};
export default function MuslimResourcesPage() {
  const G = "#10B981";
  return (
    <div style={{minHeight:"100vh",background:"#F0FDF4",color:"#0D0D0D",fontFamily:"system-ui,sans-serif"}}>
      <nav style={{padding:"16px 5vw",borderBottom:"1px solid #D1FAE5",display:"flex",justifyContent:"space-between",alignItems:"center",background:"white"}}>
        <Link href="/" style={{fontWeight:900,fontSize:20,color:"#0D0D0D",textDecoration:"none"}}>AllahiCan</Link>
        <Link href="/blog" style={{color:"#666",textDecoration:"none",fontSize:14}}>← Back</Link>
      </nav>
      <div style={{maxWidth:800,margin:"0 auto",padding:"60px 5vw"}}>
        <div style={{fontSize:11,letterSpacing:"2px",color:G,marginBottom:16}}>RESOURCE DIRECTORY</div>
        <h1 style={{fontSize:"clamp(28px,4vw,48px)",fontWeight:900,lineHeight:1.1,marginBottom:24}}>Muslim-American Resources & Community</h1>
        <p style={{fontSize:18,color:"#444",lineHeight:1.7,marginBottom:48}}>A directory of organizations, educational platforms, and community resources for Muslim Americans seeking connection, learning, and support.</p>
        
        {[
          {category:"Community & Advocacy",items:["CAIR (Council on American-Islamic Relations)","Muslim Advocates","Islamic Society of North America (ISNA)"]},
          {category:"Education & Learning",items:["Bayyinah (Quran and Arabic learning)","Islamic learning platforms","Youth education programs"]},
          {category:"Mental Health & Support",items:["Muslim mental health resources","Counseling and therapy networks","Support communities"]},
          {category:"Career & Professional",items:["Muslim professional networks","Business associations","Career development"]},
          {category:"Family & Youth",items:["Youth organizations and camps","Family resources","Mentorship programs"]},
        ].map((section,i) => (
          <div key={i} style={{marginBottom:32}}>
            <h2 style={{fontSize:18,fontWeight:800,color:G,marginBottom:16}}>{section.category}</h2>
            <ul style={{listStyle:"none",padding:0,margin:0}}>
              {section.items.map((item,j) => (
                <li key={j} style={{background:"white",border:"1px solid #D1FAE5",borderRadius:6,padding:"14px 16px",marginBottom:8,display:"flex",alignItems:"center"}}>
                  <span style={{color:G,fontWeight:700,marginRight:12}}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        <div style={{background:G,color:"white",padding:"36px",borderRadius:8,textAlign:"center",marginTop:40}}>
          <h2 style={{fontSize:18,fontWeight:900,marginBottom:12}}>Know a Resource to Add?</h2>
          <p style={{fontSize:14,opacity:0.9,marginBottom:20,margin:"0 0 20px"}}>We are building this directory collaboratively. If you know of a great Muslim-American organization or resource, let us know.</p>
          <Link href="/contact" style={{background:"white",color:G,fontWeight:800,fontSize:13,padding:"10px 24px",textDecoration:"none",borderRadius:4,display:"inline-block"}}>Suggest a Resource →</Link>
        </div>
      </div>
    </div>
  );
}
