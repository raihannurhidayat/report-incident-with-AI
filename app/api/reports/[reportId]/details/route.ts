import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function GET(
  req: Request,
  { params }: { params: { reportId: string } }
) {
  const { reportId } = await params;

  try {
    const report = await prisma.report.findUnique({
      where: {
        reportId: reportId,
      },
    });

    if (!report) {
      return NextResponse.json(
        { error: "Report not found Server" },
        { status: 404 }
      );
    }

    return NextResponse.json(report);
  } catch (error) {
    console.log("Failed to fetching data ", error);
    return NextResponse.json(
      { error: "Failed to fetch report details" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { reportId: string } }
) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { status } = await request.json();
    const report = await prisma.report.update({
      where: { reportId: params.reportId },
      data: { status },
    });

    return NextResponse.json(report);
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating report" },
      { status: 500 }
    );
  }
}
