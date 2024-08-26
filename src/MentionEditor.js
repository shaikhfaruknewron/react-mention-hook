import React, { useRef, useEffect } from "react";
import { useMention } from "./useMention";

export const MentionEditor = ({ suggestions, onChange, onSend }) => {
  const ref = useRef(null);
  const tooltipRef = useRef(null);

  const {
    editorState,
    setEditorState,
    mentionSuggestions,
    showTooltip,
    mentionedUsers,
    handleInputChange,
    handleSelectMention,
    removeMention,
  } = useMention(suggestions);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target) &&
        !ref.current.contains(event.target)
      ) {
        setShowTooltip(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    const cursorPosition = e.target.selectionStart;
    handleInputChange(value, cursorPosition);
    onChange(value);
  };

  const handleMentionSelect = (mention) => {
    const { newText, newCursorPosition } = handleSelectMention(mention);
    onChange(newText);
    setTimeout(() => {
      ref.current.setSelectionRange(newCursorPosition, newCursorPosition);
      ref.current.focus();
    }, 0);
  };

  const handleRemoveMention = (mentionToRemove) => {
    const newEditorState = removeMention(mentionToRemove);
    onChange(newEditorState);
  };

  return (
    <div className="mention-editor">
      {mentionedUsers.length > 0 && (
        <div className="mentioned-users">
          {mentionedUsers.map((user) => (
            <span key={user.id} className="mention-tag">
              @{user.name}
              <button onClick={() => handleRemoveMention(user)}>×</button>
            </span>
          ))}
        </div>
      )}
      <div className="editor-container">
        <textarea
          ref={ref}
          value={editorState}
          onChange={handleChange}
          placeholder="Type @ to mention..."
        />
        {showTooltip && (
          <div ref={tooltipRef} className="mention-suggestions">
            {mentionSuggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => handleMentionSelect(suggestion)}
                className="suggestion-item"
              >
                {suggestion.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <button onClick={() => onSend(editorState)}>Send</button>
    </div>
  );
};
