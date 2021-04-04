import React from 'react';
import MDMA from '../images/stock/mdma.png';

function Safety() {
  return (
    <div className="Safety">
      <div className="safetySection">
        <div className="safetyLeft">
          <h1>MDMA SAFETY GUIDE</h1>
          <h6>Bond: 3,4-Methylendioxy-N-methlamphetamine</h6>
          <p>When taking MDMA, it is recommended not to exceed a maximum dose of 1.5 mg MDMA per kg bodyweight for men and 1.3 mg MDMA per kg bodyweight for women. In general, a dose of 120 mg should not be exceeded. After ingestion, be sure to hydrate sufficiently. Only obtain MDMA from trustworth sources.</p>
          <p className="safetyItalics">*Information not guaranteed</p>
        </div>
        <img src={MDMA} alt="mdma"/>
      </div>
    </div>
  );
}

export default Safety;