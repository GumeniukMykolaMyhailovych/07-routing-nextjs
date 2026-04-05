import NotesClient from "./Notes.client";

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;

  const tag = resolvedParams.slug?.[0] ?? "all";

  return <NotesClient tag={tag} />;
}