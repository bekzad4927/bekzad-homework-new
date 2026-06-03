import React from "react";

const lessons = [
  {
    title: "Lesson 1",
    description: "Materials for Lesson 1.",
    links: [
      {
        label: "PDF",
        href: "https://docs.google.com/presentation/d/12VZ3GSu9dbIdoMGyoszdjKGXfE-ihvP4/edit?usp=drive_link&ouid=112870531186627517175&rtpof=true&sd=true"
      },
      {
        label: "Audio 1",
        href: "https://drive.google.com/file/d/133exoDqJDMj3VUxUkKDR8QtNGl8BduQO/view?usp=drive_link"
      },
      {
        label: "Audio 2",
        href: "https://drive.google.com/file/d/1iGkq_wX5sW272uOcvY8WcOVZzXnRzCnN/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Lesson 2",
    description: "Materials for Lesson 2.",
    links: [
      {
        label: "PDF",
        href: "https://drive.google.com/file/d/1qp3WTPDn_wLF5doBeulnqm0YiRHFxS_L/view?usp=drive_link"
      },
      {
        label: "Audio 1",
        href: "https://drive.google.com/file/d/1gVXq7nzOKMH5rI2jtWfNDMM06lggZDal/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Lesson 3",
    description: "Materials for Lesson 3.",
    links: [
      {
        label: "PDF",
        href: "https://drive.google.com/file/d/1Gr3r3tJU0sx76C_POHtYbC-qiXs-Y9zr/view?usp=drive_link"
      },
      {
        label: "Audio 1",
        href: "https://drive.google.com/file/d/1-pzkqRYAqmmBS8dqZojh1aQhc592Wo80/view?usp=drive_link"
      },
      {
        label: "Audio 2",
        href: "https://drive.google.com/file/d/1GwIDuSn-wzPXcpzBRinBM9w_m-Zbf-RU/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Lesson 4",
    description: "Materials for Lesson 4.",
    links: [
      {
        label: "PDF",
        href: "https://drive.google.com/file/d/1YZ76wKQ-vkWc8e7AptFyfNc1-pezrBlW/view?usp=drive_link"
      },
      {
        label: "Audio 1",
        href: "https://drive.google.com/file/d/1AZYoHbWVyMKmsp4xMRj6yIE3_RIquhhu/view?usp=drive_link"
      },
      {
        label: "Audio 2",
        href: "https://drive.google.com/file/d/1XRCuyICyd1VfsFxNcSVTpHzCCYhlDsHA/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Lesson 5",
    description: "Materials for Lesson 5.",
    links: [
      {
        label: "PDF",
        href: "https://drive.google.com/file/d/1ccd6jIVNARSoiH69czPCc785ev5Va03F/view?usp=drive_link"
      },
      {
        label: "Audio 1",
        href: "https://drive.google.com/file/d/1y0r5yIAXaxbuwiQsUg8GqM7Nq0fkdMM-/view?usp=drive_link"
      },
      {
        label: "Audio 2",
        href: "https://drive.google.com/file/d/1a5FsqToqrJ3FCseclTRvgR88KzMeVe9r/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Lesson 6",
    description: "Materials for Lesson 6.",
    links: [
      {
        label: "PDF",
        href: "https://drive.google.com/file/d/1hFWlEhp_UIHxv_maUl4fKnX31hdtn6v0/view?usp=drive_link"
      },
      {
        label: "Audio 1",
        href: "https://drive.google.com/file/d/1LzGPvaO7y1GjfX-mQ60XMpSqEw_8-NzV/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Lesson 7",
    description: "Materials for Lesson 7.",
    links: [
      {
        label: "PDF",
        href: "https://drive.google.com/file/d/1NpaLX4ffZ-qR8Gw46lPr9FxoV3uukNG7/view?usp=drive_link"
      },
      {
        label: "Audio 1",
        href: "https://drive.google.com/file/d/1VlSIbQDRipBuwLNLJRVRaLCwSMeuQZtf/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Lesson 8",
    description: "Audio materials for Lesson 8.",
    links: [
      {
        label: "Audio 1",
        href: "https://drive.google.com/file/d/1yiSNTq8t0s3ZlEAdF3t_Y7wTJYM2m9ye/view?usp=drive_link"
      },
      {
        label: "Audio 2",
        href: "https://drive.google.com/file/d/1uZ2Ll1zyHPFDDyGijj9O4LVZiAyWSm8U/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Lesson 9",
    description: "Audio materials for Lesson 9.",
    links: [
      {
        label: "Audio 1",
        href: "https://drive.google.com/file/d/1XvWKSeRx4Mf-bZh-m7ZFy0R6WyMbHiI0/view?usp=drive_link"
      },
      {
        label: "Audio 2",
        href: "https://drive.google.com/file/d/1DC5C-X5PbRUSxv16n2p0VmwM6Y2tHMYQ/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Lesson 10",
    description: "Materials for Lesson 10.",
    links: [
      {
        label: "PDF",
        href: "https://drive.google.com/file/d/1hPHY9TKozc7vjdak3-gmNUxeHRjYyujk/view?usp=drive_link"
      },
      {
        label: "Audio 1",
        href: "https://drive.google.com/file/d/1M7tVoiVyfDBbkCWkMyN4ZcHId69lenkB/view?usp=drive_link"
      }
    ]
  }
];

function LessonCard({ lesson }) {
  return (
    <div className="card">
      <div className="card-top">
        <div>
          <p className="card-subtitle">English Homework</p>
          <h3>{lesson.title}</h3>
        </div>
        <span className="badge">Homework</span>
      </div>

      <p className="card-description">{lesson.description}</p>

      <div className="links">
        {lesson.links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="link-btn"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <div>
            <h1>Bekzad’s Homework Website</h1>
            <p>My English homework portfolio with PDFs and audio files.</p>
          </div>
          <a href="#lessons" className="main-btn">
            Open Lessons
          </a>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-text">
            <span className="pill">Homework Portfolio</span>
            <h2>All my lessons and homework materials in one website</h2>
            <p>
              This website contains my English homework for Lessons 1–10.
              Each lesson has its own materials, including PDF files and audio recordings.
            </p>
            <div className="hero-buttons">
              <a href="#lessons" className="main-btn">
                View Homework
              </a>
            </div>
          </div>

          <div className="hero-info">
            <div className="info-card">
              <p>Lessons</p>
              <strong>10</strong>
            </div>
            <div className="info-card">
              <p>Files</p>
              <strong>PDF / Audio</strong>
            </div>
            <div className="info-card full">
              <p>Goal</p>
              <strong>To make my homework easy to open from one link.</strong>
            </div>
          </div>
        </section>

        <section id="lessons" className="container lessons-section">
          <div className="section-title">
            <h2>Lessons</h2>
            <p>Open each lesson and check the PDF files and audio materials.</p>
          </div>

          <div className="lessons-grid">
            {lessons.map((lesson, index) => (
              <LessonCard key={index} lesson={lesson} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
