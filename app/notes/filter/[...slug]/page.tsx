import NotesClient from "./Notes.client";

export default function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const tag = params.slug?.[0] ?? "all";

  return <NotesClient tag={tag} />;
}