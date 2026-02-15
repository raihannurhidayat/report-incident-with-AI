/* eslint-disable */

import { prisma } from "@/lib/prisma";
import { ReportType } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { reportId, type, specificType, title, description, image, status } =
      await req.json();
    const report = await prisma.report.create({
      data: {
        reportId,
        type: type as ReportType,
        title,
        description,
        reportType: specificType,
        image: image || null,
        status: status || "PENDING",
      },
    });

    return NextResponse.json({
      success: true,
      reportId: report.reportId,
      message: "Report submitted successfully",
    });
  } catch (error) {
    console.log("failed to submit ", error);
    return NextResponse.json(
      {
        success: false,
        error: "failed to submitted report",
      },
      { status: 500 },
    );
  }
}
