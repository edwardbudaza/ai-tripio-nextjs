// ./src/app/api/draft-mode/disable/route.ts

import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { ROUTES } from "@/constants/routes";

export function GET(request: NextRequest) {
  draftMode().disable();
  return NextResponse.redirect(new URL(`${ROUTES.blog}`, request.url));
}