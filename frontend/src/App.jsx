import { useEffect, useMemo, useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

function NavBar({ current, onNavigate }) {
  const links = [
    "Home",
    "About Us",
    "School",
    "College",
    "Departments",
    "Faculty",
    "Admission",
    "Notice Board",
    "Gallery",
    "Contact Us",
    "Admin",
  ];
  return (
    <header className="bg-white sticky top-0 z-30 border-b border-gray-100/80 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-emerald-600/10 grid place-items-center text-emerald-700 font-bold">EL</div>
          <div>
            <p className="text-sm text-gray-600">Emel Laboratory School</p>
            <p className="text-xs text-gray-500">SCHOOL CODE: 484281 · EMIS: 00505030438</p>
          </div>
          <div className="hidden md:block h-8 w-px bg-gray-200 mx-3" />
          <div className="hidden md:block">
            <p className="text-sm text-gray-600">Arojbegi Laboratory College</p>
            <p className="text-xs text-gray-500">EIIN: 139583</p>
          </div>
        </div>
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => onNavigate(l)}
              className={`nav-link ${current === l ? "active-link" : ""}`}
            >
              {l}
            </button>
          ))}
        </nav>
        <div className="lg:hidden">
          <select
            value={current}
            onChange={(e) => onNavigate(e.target.value)}
            className="border rounded-md px-2 py-1"
          >
            {links.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}

function Banner() {
  return (
    <section className="relative overflow-hidden">
      <div className="container section grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Emel Laboratory School & Arojbegi Laboratory College
          </h1>
          <p className="mt-4 text-gray-600">
            Welcome to our combined center of excellence in education. We nurture minds
            from Class 6 to XII through quality teaching, strong values, and modern
            facilities.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="btn btn-primary" href="#admission">Apply Online</a>
            <a className="btn btn-outline" href="#notices">Latest Notices</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-40 md:h-56 bg-[url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center rounded-xl"/>
          <div className="h-40 md:h-56 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center rounded-xl"/>
          <div className="col-span-2 h-40 md:h-56 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center rounded-xl"/>
        </div>
      </div>
    </section>
  );
}

function QuickLinks({ notices, events }) {
  return (
    <section className="section" id="notices">
      <div className="container grid md:grid-cols-3 gap-6">
        <div className="card p-5">
          <h3 className="font-semibold text-lg">Latest Notices</h3>
          <ul className="mt-3 space-y-2">
            {notices.slice(0, 5).map((n) => (
              <li key={n._id} className="text-sm text-gray-700">
                <span className="text-emerald-700 font-medium">[{n.audience}]</span> {n.title}
              </li>
            ))}
            {notices.length === 0 && <li className="text-sm text-gray-500">No notices yet.</li>}
          </ul>
        </div>
        <div className="card p-5">
          <h3 className="font-semibold text-lg">Upcoming Events</h3>
          <ul className="mt-3 space-y-2">
            {events.slice(0, 5).map((e) => (
              <li key={e._id} className="text-sm text-gray-700">
                <span className="text-emerald-700 font-medium">{new Date(e.start_date).toLocaleDateString()}</span> {e.title}
              </li>
            ))}
            {events.length === 0 && <li className="text-sm text-gray-500">No events yet.</li>}
          </ul>
        </div>
        <div className="card p-5">
          <h3 className="font-semibold text-lg">Results</h3>
          <p className="text-sm text-gray-600 mt-2">Recent exam results will appear here. Check back soon.</p>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
    </div>
  );
}

function About() {
  return (
    <section className="section">
      <div className="container space-y-10">
        <SectionTitle title="About Us" subtitle="History, Vision & Mission" />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="font-semibold">Our History</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Founded to provide quality education to the community, Emel Laboratory School and
              Arojbegi Laboratory College have grown into a respected institution with a strong
              commitment to academic excellence and character building.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Vision & Mission</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Our vision is to develop well-rounded global citizens through innovative learning,
              practical exposure, and moral values. Our mission is to deliver inclusive education
              using modern facilities and dedicated faculty.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="font-semibold">Principal’s Message</h3>
            <p className="text-gray-600 mt-2 text-sm">
              We welcome students, parents, and visitors to our institution. Together we strive
              for excellence in academics, co-curricular activities, and community service.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Infrastructure</h3>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-600 space-y-1">
              <li>Smart classrooms and laboratories</li>
              <li>Rich library and reading rooms</li>
              <li>Sports grounds and indoor facilities</li>
              <li>Hostel facilities and transport</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeachersSection({ title, data }) {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle title={title} />
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((t, idx) => (
            <div key={idx} className="card p-4">
              <div className="h-36 w-full rounded-lg bg-gray-100 bg-cover bg-center" style={{backgroundImage:`url(${t.photo_url || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop'})`}}/>
              <h4 className="mt-3 font-semibold">{t.name}</h4>
              <p className="text-sm text-gray-600">{t.designation}</p>
              <p className="text-xs text-gray-500 mt-1">{t.department}</p>
              {t.bio && <p className="text-xs text-gray-600 mt-2">{t.bio}</p>}
            </div>
          ))}
          {data.length === 0 && <p className="text-sm text-gray-500">No faculty added yet.</p>}
        </div>
      </div>
    </section>
  );
}

function Admissions() {
  const [form, setForm] = useState({
    level: "school",
    first_name: "",
    last_name: "",
    class_or_stream: "Class 6",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e){
    e.preventDefault();
    const res = await fetch(`${BACKEND_URL}/admissions`,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(form)
    });
    if(res.ok){ setSubmitted(true); setForm({...form, first_name:'', last_name:'', phone:'', email:''}); }
  }

  return (
    <section className="section bg-emerald-50/40" id="admission">
      <div className="container">
        <SectionTitle title="Admission" subtitle="Apply online for School (Class 6–10) and College (XI–XII)" />
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="font-semibold">Instructions</h3>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-600 space-y-1">
              <li>Ensure eligibility based on previous results and age criteria.</li>
              <li>Prepare scanned copies of documents for verification.</li>
              <li>Deadlines will be published on the notice board.</li>
            </ul>
          </div>
          <form className="card p-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
              <label className="text-sm">Level
                <select className="w-full mt-1 border rounded-md px-2 py-1" value={form.level} onChange={e=>setForm({...form, level:e.target.value})}>
                  <option value="school">School (Class 6–10)</option>
                  <option value="college">College (XI–XII)</option>
                </select>
              </label>
              <label className="text-sm">Class/Stream
                <input className="w-full mt-1 border rounded-md px-2 py-1" value={form.class_or_stream} onChange={e=>setForm({...form, class_or_stream:e.target.value})}/>
              </label>
              <label className="text-sm">First Name
                <input className="w-full mt-1 border rounded-md px-2 py-1" value={form.first_name} onChange={e=>setForm({...form, first_name:e.target.value})} required/>
              </label>
              <label className="text-sm">Last Name
                <input className="w-full mt-1 border rounded-md px-2 py-1" value={form.last_name} onChange={e=>setForm({...form, last_name:e.target.value})} required/>
              </label>
              <label className="text-sm col-span-2">Phone
                <input className="w-full mt-1 border rounded-md px-2 py-1" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} required/>
              </label>
              <label className="text-sm col-span-2">Email
                <input type="email" className="w-full mt-1 border rounded-md px-2 py-1" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
              </label>
            </div>
            <button className="btn btn-primary mt-4">Submit Application</button>
            {submitted && <p className="text-sm text-emerald-700 mt-3">Application submitted successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

function Departments({ data }){
  return (
    <section className="section">
      <div className="container">
        <SectionTitle title="Departments" subtitle="School and College" />
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {data.map((d, i)=> (
            <div key={i} className="card p-5">
              <h4 className="font-semibold">{d.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{d.description}</p>
              <p className="text-xs text-gray-500 mt-2">Head: {d.head || 'TBD'}</p>
              <p className="text-xs text-gray-500">Subjects: {d.subjects?.join(', ')}</p>
            </div>
          ))}
          {data.length===0 && <p className="text-sm text-gray-500">No departments found.</p>}
        </div>
      </div>
    </section>
  );
}

function Gallery({ images }){
  return (
    <section className="section">
      <div className="container">
        <SectionTitle title="Gallery" subtitle="Campus life and activities" />
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i)=> (
            <div key={i} className="relative group">
              <div className="aspect-[4/3] rounded-lg bg-gray-100 bg-cover bg-center" style={{backgroundImage:`url(${img.url})`}}/>
              <div className="absolute inset-0 rounded-lg bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-3">
                <p className="text-white text-sm">{img.title}</p>
              </div>
            </div>
          ))}
          {images.length===0 && <p className="text-sm text-gray-500">No images yet.</p>}
        </div>
      </div>
    </section>
  );
}

function Contact(){
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionTitle title="Contact Us" />
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-3">
            <h3 className="font-semibold">Emel Laboratory School</h3>
            <p className="text-sm text-gray-600">Address: Placeholder road, City, Bangladesh</p>
            <iframe className="w-full h-48 rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902158998357!2d90.391!3d23.750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z23.75LCB90Ljkw!5e0!3m2!1sen!2sbd!4v1610000000000" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="card p-6 space-y-3">
            <h3 className="font-semibold">Arojbegi Laboratory College</h3>
            <p className="text-sm text-gray-600">Address: Placeholder road, City, Bangladesh</p>
            <iframe className="w-full h-48 rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902158998357!2d90.391!3d23.750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z23.75LCB90Ljkw!5e0!3m2!1sen!2sbd!4v1610000000001" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        <div>
          <p className="font-semibold text-white">Emel Laboratory School</p>
          <p className="text-xs">SCHOOL CODE: 484281 · EMIS: 00505030438</p>
          <p className="font-semibold text-white mt-3">Arojbegi Laboratory College</p>
          <p className="text-xs">EIIN: 139583</p>
        </div>
        <div>
          <p className="font-semibold text-white">Quick Links</p>
          <ul className="mt-3 space-y-1 text-sm">
            <li><a href="#admission" className="hover:text-white">Admission</a></li>
            <li><a href="#notices" className="hover:text-white">Notices</a></li>
            <li><a href="#" className="hover:text-white">Results</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Contact</p>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm">Phone: +8801XXXXXXXXX</p>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 text-center text-xs">© {new Date().getFullYear()} Emel Laboratory School & Arojbegi Laboratory College</div>
    </footer>
  );
}

function AdminLogin({ onLoggedIn }){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e){
    e.preventDefault();
    setError("");
    try{
      const res = await fetch(`${BACKEND_URL}/admin/login`,{
        method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({username,password})
      });
      if(!res.ok) throw new Error('Invalid credentials');
      const data = await res.json();
      localStorage.setItem('token', data.token);
      onLoggedIn(data);
    }catch(err){ setError(err.message); }
  }

  return (
    <section className="section">
      <div className="container max-w-md">
        <div className="card p-6">
          <h3 className="font-semibold text-lg">Admin Login</h3>
          <form className="mt-4 space-y-3" onSubmit={handleLogin}>
            <input className="w-full border rounded-md px-3 py-2" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
            <input type="password" className="w-full border rounded-md px-3 py-2" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button className="btn btn-primary w-full">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Dashboard(){
  const [tab, setTab] = useState('Notices');
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [gallery, setGallery] = useState([]);

  const tabs = ['Notices','Events','Faculty','Admissions','Gallery'];

  useEffect(()=>{ fetchData(); },[tab]);

  async function fetchData(){
    if(!BACKEND_URL) return;
    if(tab==='Notices') setNotices(await (await fetch(`${BACKEND_URL}/notices`)).json());
    if(tab==='Events') setEvents(await (await fetch(`${BACKEND_URL}/events`)).json());
    if(tab==='Faculty') setFaculty(await (await fetch(`${BACKEND_URL}/faculty`)).json());
    if(tab==='Gallery') setGallery(await (await fetch(`${BACKEND_URL}/gallery`)).json());
  }

  async function addNotice(){
    const title = prompt('Notice title');
    if(!title) return;
    await fetch(`${BACKEND_URL}/notices`,{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({title, content:title, audience:'both', category:'general'})});
    fetchData();
  }
  async function addEvent(){
    const title = prompt('Event title');
    if(!title) return;
    await fetch(`${BACKEND_URL}/events`,{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({title, description:title, audience:'both', start_date:new Date().toISOString()})});
    fetchData();
  }
  async function addFaculty(){
    const name = prompt('Faculty name');
    if(!name) return;
    await fetch(`${BACKEND_URL}/faculty`,{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({name, designation:'Teacher', department:'Science', level:'school'})});
    fetchData();
  }
  async function addImage(){
    const url = prompt('Image URL');
    if(!url) return;
    await fetch(`${BACKEND_URL}/gallery`,{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({url, title:'Campus', level:'both'})});
    fetchData();
  }

  return (
    <section className="section">
      <div className="container">
        <h3 className="text-xl font-semibold">Admin Dashboard</h3>
        <div className="mt-4 flex gap-2 flex-wrap">
          {tabs.map(t=> (
            <button key={t} onClick={()=>setTab(t)} className={`btn ${tab===t?'btn-primary':'btn-outline'}`}>{t}</button>
          ))}
        </div>

        {tab==='Notices' && (
          <div className="mt-6">
            <button className="btn btn-primary" onClick={addNotice}>Add Notice</button>
            <ul className="mt-4 space-y-2">
              {notices.map(n=> (<li key={n._id} className="card p-4"><b>{n.title}</b> <span className="text-xs text-gray-500">[{n.audience}]</span></li>))}
            </ul>
          </div>
        )}
        {tab==='Events' && (
          <div className="mt-6">
            <button className="btn btn-primary" onClick={addEvent}>Add Event</button>
            <ul className="mt-4 space-y-2">
              {events.map(n=> (<li key={n._id} className="card p-4"><b>{n.title}</b> <span className="text-xs text-gray-500">{new Date(n.start_date).toLocaleString()}</span></li>))}
            </ul>
          </div>
        )}
        {tab==='Faculty' && (
          <div className="mt-6">
            <button className="btn btn-primary" onClick={addFaculty}>Add Faculty</button>
            <ul className="mt-4 grid md:grid-cols-2 gap-3">
              {faculty.map(f=> (<li key={f._id} className="card p-4"><b>{f.name}</b> <span className="text-xs text-gray-500">{f.department} · {f.level}</span></li>))}
            </ul>
          </div>
        )}
        {tab==='Gallery' && (
          <div className="mt-6">
            <button className="btn btn-primary" onClick={addImage}>Add Image</button>
            <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {gallery.map((g,i)=> (<div key={i} className="card overflow-hidden"><div className="aspect-video bg-cover" style={{backgroundImage:`url(${g.url})`}}/></div>))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default function App(){
  const [page, setPage] = useState('Home');
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=>{
    if(!BACKEND_URL) return;
    fetch(`${BACKEND_URL}/notices`).then(r=>r.json()).then(setNotices).catch(()=>{});
    fetch(`${BACKEND_URL}/events`).then(r=>r.json()).then(setEvents).catch(()=>{});
    fetch(`${BACKEND_URL}/faculty`).then(r=>r.json()).then(setFaculty).catch(()=>{});
    fetch(`${BACKEND_URL}/departments`).then(r=>r.json()).then(setDepartments).catch(()=>{});
    fetch(`${BACKEND_URL}/gallery`).then(r=>r.json()).then(setGallery).catch(()=>{});
  },[]);

  useEffect(()=>{
    setLoggedIn(!!localStorage.getItem('token'));
  },[]);

  return (
    <div>
      <NavBar current={page} onNavigate={setPage} />
      {page==='Home' && (<>
        <Banner />
        <QuickLinks notices={notices} events={events} />
        <About />
        <TeachersSection title="Featured Faculty" data={faculty.slice(0,8)} />
        <Departments data={departments} />
        <Gallery images={gallery} />
        <Admissions />
      </>)}

      {page==='About Us' && (<About />)}
      {page==='School' && (<TeachersSection title="School Teachers" data={faculty.filter(f=>f.level==='school')} />)}
      {page==='College' && (<TeachersSection title="College Faculty" data={faculty.filter(f=>f.level==='college')} />)}
      {page==='Departments' && (<Departments data={departments} />)}
      {page==='Faculty' && (<TeachersSection title="All Faculty" data={faculty} />)}
      {page==='Admission' && (<Admissions />)}
      {page==='Notice Board' && (<QuickLinks notices={notices} events={events} />)}
      {page==='Gallery' && (<Gallery images={gallery} />)}
      {page==='Contact Us' && (<Contact />)}
      {page==='Admin' && (!loggedIn ? <AdminLogin onLoggedIn={()=>setLoggedIn(true)} /> : <Dashboard />)}

      <Footer />
    </div>
  );
}
