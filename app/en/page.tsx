// app/en/page.tsx
export default function EnglishHome() {
  return (
    <>
      <section className="section">
        <h2>About</h2>
        <p>
          I am a neurologist and clinical neurophysiologist specializing in
          epilepsy, intracranial EEG, and invasive presurgical evaluation. My
          work focuses on improving seizure onset zone (SOZ) localization and
          translating advanced electrophysiological analyses into practical
          clinical tools.
        </p>
      </section>

      <section className="section">
        <h2>Clinical & Research Interests</h2>
        <ul>
          <li>Focal drug-resistant epilepsy and epilepsy surgery</li>
          <li>
            Intracranial EEG (ECoG and depth electrodes) for SOZ localization
          </li>
          <li>
            Spectral slope / aperiodic components as markers of
            excitation–inhibition balance
          </li>
          <li>
            High-frequency oscillations (HFOs) and cortico-cortical evoked
            potentials (CCEPs)
          </li>
          <li>
            Tumor-related epilepsy: integration of EEG, imaging, and pathology
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Background</h2>
        <ul>
          <li>
            Department of Neurology, Kobe University Graduate School of Medicine
          </li>
          <li>
            Clinical neurophysiology and epileptology with a focus on invasive
            monitoring and intracranial EEG
          </li>
          <li>
            Experience in video-EEG monitoring, stereo-EEG/ECoG, and
            presurgical evaluation
          </li>
        </ul>
      </section>

      {/* 追加したセクション */}
      <section className="section">
        <h2>Board Certifications</h2>
        <ul>
          <li>Board Certified Member of the Japanese Society of Internal Medicine</li>
          <li>Dementia Support Doctor</li>
          <li>Board Certified Neurologist (Japanese Society of Neurology)</li>
          <li>Board Certified Stroke Specialist (The Japan Stroke Society)</li>
          <li>
            Diplomate of the American Board of Clinical Neurophysiology
            (General Neurophysiology, Epilepsy Monitoring)
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Current Projects</h2>
        <ul>
          <li>
            Spectral slope as a biomarker of E/I balance and SOZ in
            focal epilepsy
          </li>
          <li>
            Combining spectral features, HFOs, and CCEPs to improve SOZ
            prediction
          </li>
          <li>
            Characterization of epileptogenic networks in tumor-related
            epilepsy
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Selected Publications & Presentations</h2>
        <ul>
          <li>
            Kimura M, et al. Spectral slope as a biomarker of
            excitation–inhibition balance and seizure onset zones in focal
            epilepsy. (in preparation)
          </li>
          <li>
            Kimura M, et al. Relationship between cortical tuber subtypes and
            interictal epileptiform discharges in tuberous sclerosis complex:
            MRI and scalp-EEG study.
          </li>
          <li>
            Kimura M, et al. Intracranial EEG markers of tumor-related
            epilepsy. (manuscript in preparation)
          </li>
          <li>
            Poster presentation at American Epilepsy Society (AES) 2025: “Spectral
            slope as a biomarker of E–I balance and SOZ in focal epilepsy”.
          </li>
          <li>
            <strong>Kimura M</strong>, Fujiwara S, Tanaka A, Omura Y, Yamashita D, Hinoda T, Sakai N, Kohara N.
            Multiple Cerebral Hemorrhages With Microbleeds in Intravascular Large B-Cell
            Lymphoma. <em>J Stroke Cerebrovasc Dis.</em> 2020;29(6):104798.
          </li>
          <li>
            <strong>Kimura M</strong>, Fujiwara S, Kuroda H, Kanamori M, Kawamoto M. Choroid Plexitis Caused by
            <em> Burkholderia cepacia</em> Complex after COVID-19.
            <em> Int J Infect Dis.</em> 2024;147:107201.
          </li>
          <li>
            <strong>Kimura M</strong>, Yoshimura H, Kohara N. Abnormal Movements in Bickerstaff Brainstem
            Encephalitis Mimicking Anti-N-Methyl-D-Aspartate Receptor Encephalitis.
            <em> JAMA Neurol.</em> 2021;78(9):1149.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>
          For collaboration, invited talks, or other inquiries, please contact
          me via email.
        </p>
        <p>
          Email:{" "}
          <a href="mailto:sumthing1004@gmail.com">mailto:sumthing1004@gmail.com</a>
        </p>
      </section>
    </>
  );
}