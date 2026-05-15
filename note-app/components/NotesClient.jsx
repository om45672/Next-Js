"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const NotesClient = ({ initialNotes }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [editingId, setEditingID] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const createNote = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setLoading(true);
    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      const result = await response.json();
      if (result.success) {
        setNotes([result.data, ...notes]);
        setTitle("");
        setContent("");
        toast.success("Note added successfully");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error creating note: ", error);
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  const deleteNote = async (id) => {
    setDeleteLoading(true);
    try {
      const response = await fetch(`api/notes/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result.success) {
        setNotes(notes.filter((note) => note._id !== id));
        toast.success("Notes deleted successfully");
      }
      setShowModal(false);
      setSelectedId(null);
    } catch (error) {
      console.error("Error deleting note: ", error);
      toast.error("Something went wrong");
    } finally {
      setDeleteLoading(false);
    }
  };

  const UpdateNote = async (id) => {
    if (!editTitle.trim() || !editContent.trim()) return;

    setLoading(true);

    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: editTitle, content: editContent }),
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Note updated successfully");
        setNotes(notes.map((note) => (note._id === id ? result.data : note)));
        setEditingID(null);
        setEditTitle("");
        setEditContent("");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error updating note: ", error);
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  const startEdit = (note) => {
    setEditingID(note._id);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  const cancelEdit = () => {
    setEditingID(null);
    setEditTitle("");
    setEditContent("");
  };

  return (
    <div className="space-y-6">
      {/* CREATE FORM */}
      <form
        onSubmit={createNote}
        className="bg-white/95 backdrop-blur p-8 rounded-xl shadow-2xl border border-white/20"
      >
        <h2 className="text-2xl text-indigo-700 font-bold mb-6">
          ✍️ Create New Note
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-gray-800 w-full p-4 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            required
          />
          <textarea
            placeholder="Note Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="text-gray-800 w-full p-4 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            rows={4}
          />
          <button
            type="Submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg px-6 py-3 cursor-pointer hover:from-indigo-700 hover:to-purple-700 hover:scale-101 transition duration-200 shadow-lg disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Note"}
          </button>
        </div>
      </form>

      {/* NOTES LIST */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white drop-shadow-lg">
          📝 Your Notes ({notes.length})
        </h2>

        {notes.length === 0 ? (
          <p className="text-white/80 text-center py-8 text-lg">
            No Notes Yet. Create Your First Note Above 👆
          </p>
        ) : (
          notes.map((note) => (
            <div
              key={note._id}
              className="bg-white/90 backdrop-blur p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 hover:scale-101 transform border border-white/20"
            >
              {editingId === note._id ? (
                <>
                  
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={editTitle || ""}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="text-gray-800 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <textarea
                      value={editContent || ""}
                      onChange={(e) => setEditContent(e.target.value)}
                      rows={4}
                      className="text-gray-800 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => UpdateNote(note._id)}
                        disabled={loading}
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 disabled:opacity-50"
                      >
                        {loading?"Saving...":"Save"}
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-indigo-700">
                      {note.title}
                    </h3>

                    <div className="flex gap-3">
                      <button
                        onClick={() => startEdit(note)}
                        className="bg-linear-to-r from-blue-400 to-blue-500 text-white cursor-pointer hover:from-blue-500 hover:to-blue-600 rounded-lg px-4 py-2 text-sm font-semibold transition hover:scale-110 shadow-md"
                      >
                        Edit
                      </button>

                      {/* UPDATED DELETE BUTTON */}
                      <button
                        onClick={() => {
                          setSelectedId(note._id);
                          setShowModal(true);
                        }}
                        className="bg-linear-to-r from-red-400 to-red-500 text-white cursor-pointer hover:from-red-500 hover:to-red-600 rounded-lg px-4 py-2 text-sm font-semibold transition hover:scale-110 shadow-md"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {note.content}
                  </p>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      📅 Created:{" "}
                      {new Date(note.createdAt).toLocaleDateString("en-US")}
                    </p>
                    {note.updatedAt !== note.createdAt && (
                      <p className="text-sm text-gray-500">
                        ✏️ Updated:{" "}
                        {new Date(note.updatedAt).toLocaleDateString("en-US")}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>

      {/* ✅ CONFIRMATION MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md animate-fadeIn">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              ⚠️ Delete Note
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this note? This action cannot be
              undone.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedId(null);
                }}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium transition"
              >
                Cancel
              </button>

              <button
                onClick={() => deleteNote(selectedId)}
                disabled={deleteLoading}
                className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition shadow-md disabled:opacity-50"
              >
                {deleteLoading ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesClient;
