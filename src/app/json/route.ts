import { getTasks } from "@/components/CalendarUI/serverActions";

export async function GET() {
  const data = await getTasks();

  return Response.json({ data });
}
