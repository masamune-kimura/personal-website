// app/ja/page.tsx
export default function JapaneseHome() {
  return (
    <>
      <section className="section">
        <h2>ご挨拶</h2>
        <p>
          木村政宗（Masamune Kimura）と申します。脳神経内科医として主にてんかん診療と
          脳波（特に頭蓋内脳波）の解析に従事しています。臨床現場での経験と研究を通じて、
          てんかん外科の精度向上と、患者さん一人ひとりに最適な治療選択を届けることを目指しています。
        </p>
      </section>

      <section className="section">
        <h2>専門分野</h2>
        <p className="section-subtitle">Clinical & Research Interests</p>
        <ul>
          <li>てんかん（特に難治性焦点てんかん）の診断と治療</li>
          <li>頭蓋内脳波（ECoG・深部電極）を用いたてんかん焦点同定</li>
          <li>スペクトルスロープ・非周期成分を指標とした興奮・抑制バランス（E/I）の評価</li>
          <li>高周波活動（HFOs）やCCEPを用いた機能結合・てんかんネットワーク解析</li>
          <li>腫瘍関連てんかんにおける脳波・病理・画像の統合解析</li>
        </ul>
        <div className="badge-list">
          <span className="badge">Epilepsy</span>
          <span className="badge">Intracranial EEG</span>
          <span className="badge">Spectral Slope</span>
          <span className="badge">CCEP</span>
        </div>
      </section>

      <section className="section">
        <h2>略歴</h2>
        <ul>
          <li>神戸大学医学部 脳神経内科</li>
          <li>Clinical neurophysiology / Epileptology を専門とする医師・研究者</li>
          <li>てんかんセンターにおけるビデオ脳波モニタリング・頭蓋内脳波評価に従事</li>
        </ul>
      </section>

      <section className="section">
        <h2>研究テーマ</h2>
        <ul>
          <li>
            スペクトルスロープを用いた興奮・抑制バランスと発作起始域（SOZ）の関連解析
          </li>
          <li>
            頭蓋内脳波・高周波活動・CCEPを統合したてんかん焦点推定アルゴリズムの開発
          </li>
          <li>腫瘍関連てんかんにおける脳波所見と病理・画像所見の関連</li>
          <li>頭皮上脳波によるバイオマーカー探索（スペクトログラム・接続性解析など）</li>
        </ul>
      </section>

      <section className="section">
        <h2>業績（抜粋）</h2>
        <p className="section-subtitle">Selected Publications / Presentations</p>
        <ul>
          <li>
            Kimura M, et al. Spectral slope as a biomarker of
            excitation–inhibition balance and seizure onset zones in focal
            epilepsy. （準備中）
          </li>
          <li>
            Kimura M, et al. Relationship between cortical tuber subtypes and
            interictal epileptiform discharges in tuberous sclerosis complex:
            MRI and scalp-EEG study.
          </li>
          <li>
            Kimura M, et al. Intracranial EEG markers of tumor-related
            epilepsy. （投稿準備中）
          </li>
        </ul>
        <p style={{ fontSize: "0.9rem", marginTop: "0.4rem" }}>
          詳細な業績リストは今後順次公開予定です。
        </p>
      </section>

      <section className="section">
        <h2>お問い合わせ</h2>
        <p>
          共同研究・講演依頼などに関するお問い合わせは、所属機関経由もしくは以下のメールアドレスまでお願いいたします。
        </p>
        <p>
          Email:{" "}
          <a href="mailto:xxxxx@xx.ac.jp">xxxxx@xx.ac.jp</a>
        </p>
      </section>
    </>
  );
}
