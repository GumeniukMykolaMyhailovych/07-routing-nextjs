"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import NoteDetails from "@/app/notes/[id]/NoteDetails.client";

export default function NoteModal({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <NoteDetails id={params.id} />
    </Modal>
  );
}