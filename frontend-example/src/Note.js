import "./App.css";

const Note = ({ entry, editNote, deleteNote }) => {
  return (
    <div style={NoteStyle.note} key={entry._id}>
      <p style={NoteStyle.text}>{entry.title}</p>
      <hr />
      <p style={NoteStyle.text}>{entry.content}</p>
      <button onClick={() => editNote(entry)}>Edit note</button>
      {<button onClick={() => deleteNote(entry)}>Delete note</button>}
    </div>
  );
};

export default Note;

const NoteStyle = {
  note: {
    padding: "20px",
    margin: "20px",
    width: "200px",
    borderStyle: "dotted",
    borderRadius: "30px",
    borderWidth: "thin",
    overflowWrap: "break-word",
  },
  text: {
    margin: "0px",
  },
};