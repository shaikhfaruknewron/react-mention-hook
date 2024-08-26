import { useState, useEffect, useCallback } from "react";

export const useMention = (suggestions) => {
  const [editorState, setEditorState] = useState("");
  const [mentionSuggestions, setMentionSuggestions] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const [mentionedUsers, setMentionedUsers] = useState([]);
  const [mentionStartIndex, setMentionStartIndex] = useState(-1);

  const handleInputChange = useCallback(
    (value, cursorPosition) => {
      setEditorState(value);

      const textBeforeCursor = value.slice(0, cursorPosition);
      const words = textBeforeCursor.split(/\s/);
      const lastWord = words[words.length - 1];

      if (lastWord.startsWith("@")) {
        setShowTooltip(true);
        setMentionStartIndex(cursorPosition - lastWord.length);
        const searchTerm = lastWord.slice(1);
        const filtered = suggestions.filter((s) =>
          s.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setMentionSuggestions(filtered);
      } else {
        setShowTooltip(false);
      }
    },
    [suggestions]
  );

  const handleSelectMention = useCallback(
    (mention) => {
      const beforeMention = editorState.slice(0, mentionStartIndex);
      const afterMention = editorState.slice(
        mentionStartIndex + mention.name.length
      );
      const newText = `${beforeMention}${mention.name} ${afterMention}`;

      setMentionedUsers((prev) => [...prev, mention]);
      setEditorState(newText);
      setShowTooltip(false);

      return {
        newText,
        newCursorPosition: mentionStartIndex + mention.name.length + 1,
      };
    },
    [editorState, mentionStartIndex]
  );

  const removeMention = useCallback(
    (mentionToRemove) => {
      const newEditorState = editorState
        .replace(mentionToRemove.name, "")
        .replace(/\s+/g, " ")
        .trim();
      setEditorState(newEditorState);
      setMentionedUsers((prev) =>
        prev.filter((m) => m.id !== mentionToRemove.id)
      );
      return newEditorState;
    },
    [editorState]
  );

  return {
    editorState,
    setEditorState,
    mentionSuggestions,
    showTooltip,
    mentionedUsers,
    handleInputChange,
    handleSelectMention,
    removeMention,
  };
};
