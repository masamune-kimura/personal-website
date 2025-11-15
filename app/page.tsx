// app/page.tsx

export default function Home() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
          Masamune Kimura, MD, PhD
        </h1>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
          Neurologist / Clinical Neurophysiologist &amp; Epileptologist
          <br />
          Kobe University Graduate School of Medicine, Department of Neurology
        </p>
      </header>

      <section style={{ marginBottom: "2rem" }}>
        <h2>About</h2>
        <p style={{ lineHeight: 1.6 }}>
          I am a neurologist specializing in epilepsy, intracranial EEG, and
          clinical neurophysiology. My research focuses on seizure onset zone
          localization, spectral slope as a biomarker of excitation–inhibition
          balance, and invasive EEG analysis for epilepsy surgery.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Research Interests</h2>
        <ul>
          <li>Intracranial EEG (ECoG, depth electrodes) in focal epilepsy</li>
          <li>Spectral slope and aperiodic components as E/I markers</li>
          <li>High-frequency oscillations and CCEPs in SOZ localization</li>
          <li>Neurophysiology of tumor-related epilepsy</li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Selected Publications</h2>
        <ul>
          <li>
            Kimura M, et al.{" "}
            <em>
              Spectral slope as a biomarker of excitation–inhibition balance in
              focal epilepsy.
            </em>{" "}
            (in preparation)
          </li>
          <li>
            Kimura M, et al. Title about tuberous sclerosis complex and scalp
            EEG. Journal, Year.
          </li>
          <li>
            Kimura M, et al. Title about intracranial EEG / tumor-related
            epilepsy. Journal, Year.
          </li>
        </ul>
        <p style={{ fontSize: "0.9rem" }}>
          Full publication list available upon request.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Academic Activities</h2>
        <ul>
          <li>
            Poster presentation at American Epilepsy Society (AES) 2025:
            &quot;Spectral Slope as a Biomarker of E–I Balance and SOZ in Focal
            Epilepsy&quot;.
          </li>
          <li>
            Invited talks and conference presentations in clinical
            neurophysiology and epilepsy surgery.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:xxxxx@xx.ac.jp">xxxxx@xx.ac.jp</a>
        </p>
      </section>

      <footer style={{ marginTop: "3rem", fontSize: "0.8rem", color: "#666" }}>
        &copy; {new Date().getFullYear()} Masamune Kimura. All rights reserved.
      </footer>
    </main>
  );
}
