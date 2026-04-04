import NotesClient from "../../Notes.client";

export default async function FilterPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;

  const rawTag = resolvedParams.slug?.[0];

  const tag =
    rawTag && rawTag !== "all"
      ? rawTag.charAt(0).toUpperCase() + rawTag.slice(1)
      : "all";

  return <NotesClient tag={tag} />;
}