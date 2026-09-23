import type { ReactNode } from "react";
import { profile, experience, projects, openSource, skills, education } from "@/content";

const Icon = {
  linkedin: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>,
  github: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>,
  file: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM8 13h8v1.5H8V13zm0 3.5h8V18H8v-1.5z"/></svg>,
  mail: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm1 3.2V18h18V7.2l-9 6.3-9-6.3zM4.3 6l7.7 5.4L19.7 6H4.3z"/></svg>,
  link: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.6 13.4a1 1 0 0 1 0-1.4l2.8-2.8a1 1 0 1 1 1.4 1.4L12 13.4a1 1 0 0 1-1.4 0zM7.8 16.2a3 3 0 0 1 0-4.2l2.1-2.1-1.4-1.4-2.1 2.1a5 5 0 0 0 7.1 7.1l2.1-2.1-1.4-1.4-2.1 2.1a3 3 0 0 1-4.3 0zm8.4-8.4a3 3 0 0 1 0 4.2l-2.1 2.1 1.4 1.4 2.1-2.1a5 5 0 0 0-7.1-7.1L8.4 8.4l1.4 1.4 2.1-2.1a3 3 0 0 1 4.3.1z"/></svg>,
  pr: <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354zM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0z"/></svg>,
};

function Section({ id, title, children }: { id: string; title: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="hero">
        <img src="/avatar.jpg" alt="" width={104} height={104} />
        <div>
          <h1>{profile.name}</h1>
          <p className="tag">{profile.tagline}</p>
        </div>
      </header>

      <Section id="about" title="About">
        <div className="about">
          <p dangerouslySetInnerHTML={{ __html: profile.summaryHtml }} />
          <div className="links">
            <a href={profile.linkedin} rel="me">{Icon.linkedin} LinkedIn</a>
            <a href={profile.github} rel="me">{Icon.github} Github</a>
            <a href={profile.resume}>{Icon.file} Resume</a>
            <a href={`mailto:${profile.email}`}>{Icon.mail} Email</a>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="stack">
          {projects.map((p) => (
            <article key={p.name} className="card project">
              <a href={p.repo} className="shot" tabIndex={-1} aria-hidden="true">
                {p.image ? <img src={p.image} alt="" loading="lazy" /> : <span className="placeholder">{p.name}</span>}
              </a>
              <div>
                <h3>{Icon.link}<a href={p.repo}>{p.name}</a></h3>
                <p>{p.description}</p>
                <ul className="chips">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
        <div className="more"><a href={profile.github}>{Icon.github} More Projects</a></div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="stack">
          {experience.map((r) => (
            <article key={r.company} className="card">
              <div className="org">
                <div className="logo" aria-hidden="true">{r.company[0]}</div>
                <div>
                  <h3>{r.company}</h3>
                  <p className="when">{r.start} – {r.end}</p>
                </div>
              </div>
              <div className="roles">
                <div className="role">
                  <h4>{r.role}</h4>
                  <p className="meta">{r.start} – {r.end} · {r.type} · {r.location}</p>
                  {r.lead && <p className="lead">{r.lead}</p>}
                  <ul>{r.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="open-source" title="Open Source">
        <article className="card oss">
          <h3>{Icon.pr} Contributions</h3>
          <p>{openSource.mergedCount} pull requests merged across {openSource.repos.length} repositories in the <a href={openSource.orgUrl}><strong>{openSource.org}</strong></a> org (CNCF)</p>
          <ul className="chips">{openSource.repos.map((r) => <li key={r}>{r}</li>)}</ul>
          <ul className="prs">
            {openSource.prs.map((pr) => (
              <li key={pr.url}>
                <span className="date">{pr.date}</span>
                <a href={pr.url}>{pr.title}</a>
                <span className="repo">{pr.repo}</span>
              </li>
            ))}
          </ul>
        </article>
      </Section>

      <Section id="skills" title="Skills">
        {skills.map((g) => (
          <div key={g.group} className="group">
            <h3>{g.group}</h3>
            <ul className="pills">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        ))}
      </Section>

      <Section id="education" title="Education">
        <div className="stack">
          {education.map((e) => (
            <article key={e.degree} className="card">
              <div className="org">
                <div className="logo" aria-hidden="true">{e.school[0]}</div>
                <div>
                  <h3>{e.degree}</h3>
                  <p className="when">{e.school} · {e.start} – {e.end}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <footer>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with Next.js · static · no tracking</span>
      </footer>
    </main>
  );
}
