# react-mention-hook

A React hook and component for handling mentions in text inputs.

## Installation

```bash
npm install react-mention-hook
```

or

```bash
yarn add react-mention-hook
```

## Usage

### Using the MentionEditor component

```jsx
import React from "react";
import { MentionEditor } from "react-mention-hook";

const suggestions = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  // ... more suggestions
];

const MyComponent = () => {
  const handleChange = (newValue) => {
    console.log("New value:", newValue);
  };

  const handleSend = (message) => {
    console.log("Sending message:", message);
  };

  return (
    <MentionEditor
      suggestions={suggestions}
      onChange={handleChange}
      onSend={handleSend}
    />
  );
};

export default MyComponent;
```

### Using the useMention hook

```jsx
import React, { useRef } from 'react';
import { useMention } from 'react-mention-hook';

const suggestions = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  // ... more suggestions
];

const MyCustomEditor = () => {
  const inputRef = useRef(null);

  const {
    editorState,
    mentionSuggestions,
    showTooltip,
    mentionedUsers,
    handleInputChange,
    handleSelectMention,
    removeMention
  } = useMention(suggestions);

  // Implement your custom UI here

  return (
    // Your custom UI
  );
};

export default MyCustomEditor;
```

## API

### MentionEditor

Props:

- `suggestions`: An array of suggestion objects with `id` and `name` properties.
- `onChange`: A callback function that receives the new editor state.
- `onSend`: A callback function that receives the final message when the send button is clicked.

### useMention

Parameters:

- `suggestions`: An array of suggestion objects with `id` and `name` properties.

Returns an object with the following properties:

- `editorState`: The current state of the editor.
- `mentionSuggestions`: An array of filtered suggestions based on the current input.
- `showTooltip`: A boolean indicating whether to show the mention suggestions.
- `mentionedUsers`: An array of users that have been mentioned.
- `handleInputChange`: A function to handle input changes.
- `handleSelectMention`: A function to handle selecting a mention from the suggestions.
- `removeMention`: A function to remove a mention from the editor.

## License

MIT
# react-mention-hook
# react-mention-hook
