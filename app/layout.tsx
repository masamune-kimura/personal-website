// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Masamune Kimura, MD, PhD",
  description:
    "Personal website of Masamune Kimura, neurologist and epileptologist specializing in intracranial EEG and clinical neurophysiology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {/* -- Text Header (existing) -- */}
        <header className="site-header">
          <div className="site-header-inner">
            <div className="site-brand">
              <span className="site-name">Masamune Kimura, MD, PhD</span>
              <span className="site-tagline">
                Neurologist / Epileptologist / Clinical Neurophysiologist
              </span>
            </div>
            <nav className="lang-switch">
              <a href="/ja">日本語</a>
              <span> / </span>
              <a href="/en">English</a>
            </nav>
          </div>
        </header>

        {/* --- Header Image (ここを追加) --- */}
        <div className="header-image">
          <Image
            src="/header.jpg"
            alt="Header Image"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <main className="site-main">
          {/* --- Profile image をここに入れる --- */}
          <div className="profile-wrapper">
            <Image
              src="/profile.jpg"
              alt="Profile Image"
              width={140}
              height={140}
              className="profile-image"
            />
            <h1 className="profile-name">
              <strong>木村 正夢嶺</strong>
            </h1>
          </div>

          {children}
        </main>

        <footer className="site-footer">
          © {new Date().getFullYear()} Masamune Kimura
        </footer>
      </body>
    </html>
  );
}
