// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

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

        <main className="site-main">{children}</main>

        <footer className="site-footer">
          © {new Date().getFullYear()} Masamune Kimura
        </footer>
      </body>
    </html>
  );
}
