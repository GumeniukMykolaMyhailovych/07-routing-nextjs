import Sidebar from "./@sidebar/page";

export default function NotesLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: "260px",
          backgroundColor: "#2f2f2f",
          color: "#fff",
          padding: "20px",
        }}
      >
        <Sidebar />
      </aside>

      <main style={{ flex: 1, padding: "20px" }}>
        {children}
      </main>

      {modal}
    </div>
  );
}