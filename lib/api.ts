import axios from "axios";

const BASE_URL = "https://notehub-public.goit.study/api";

const getAuthHeader = () => ({
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
});

// 📌 Отримати список нотаток
export const fetchNotes = async (page = 1, tag?: string) => {
  const params: Record<string, string | number> = {
    page,
    perPage: 12,
  };

  if (tag && tag !== "all") {
    params.tag = tag;
  }

  const { data } = await axios.get(`${BASE_URL}/notes`, {
    params,
    headers: getAuthHeader(),
  });

  return data;
};

// 📌 Отримати одну нотатку
export const fetchNoteById = async (id: string) => {
  const { data } = await axios.get(`${BASE_URL}/notes/${id}`, {
    headers: getAuthHeader(),
  });

  return data;
};

// 📌 Створити нотатку
export const createNote = async (note: {
  title: string;
  content: string;
  tag: string;
}) => {
  const { data } = await axios.post(`${BASE_URL}/notes`, note, {
    headers: getAuthHeader(),
  });

  return data;
};

// 📌 Видалити нотатку
export const deleteNote = async (id: string) => {
  await axios.delete(`${BASE_URL}/notes/${id}`, {
    headers: getAuthHeader(),
  });
};