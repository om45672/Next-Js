import dbConnect from "@/lib/db";
import NotesClient from "@/components/NotesClient";
import Note from "@/models/Note"
async function getNotes() {
  await dbConnect();
  const notes = await Note.find({}).sort({ createdAt: -1 }).lean();
  return notes.map((note)=>({
    ...note,
    _id:note._id.toString()
  }))
  
}

export default async function Home() {

  const notes = await getNotes();
  console.log(notes);
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-white drop-shadow-lg">
          ✨ Notes App
        </h1>
        <NotesClient initialNotes={notes} />
      </div>
    </div>
  );
}
