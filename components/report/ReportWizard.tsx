"use client";

import React, { useState } from "react";
import ReportForm from "./ReportForm";
import ReportFormSubmission from "./ReportFormSubmission";

const ReportWizard = () => {
  const [currentState, setCurrentState] = useState(1);
  const [reportData, setReportData] = useState<any>(null);

  const handleStepComplete = async (data: any) => {
    setReportData((prev: any) => ({ ...prev, data }));

    if (currentState === 2) {
      return;
    }

    setCurrentState((prev) => prev + 1);
  };

  return (
    <div className="rounded-2xl bg-zinc-900 p-8">
      {currentState === 1 && <ReportForm onComplete={handleStepComplete} />}
      {currentState === 2 && <ReportFormSubmission data={reportData} onComplete={handleStepComplete} />}
    </div>
  );
};

export default ReportWizard;
