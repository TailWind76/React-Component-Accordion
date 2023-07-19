# HiddenContentBlock Component Usage Documentation

The HiddenContentBlock component provides a customizable block with hidden content that can be shown or hidden by clicking on a button or an arrow.

## Installation

To use the HiddenContentBlock component in your project, make sure you have React installed and then run the following command:

```bash
npm install --save react
```

## Import the Component

```jsx
import HiddenContentBlock from './HiddenContentBlock'; // Specify the path to the HiddenContentBlock.js file
```

## Usage

```jsx
<HiddenContentBlock
  id="block1"
  hiddenContent={
    /* Your hidden content goes here */
  }
  buttonStyle={{
    /* Custom styles for the button */
  }}
  contentStyle={{
    /* Custom styles for the hidden content */
  }}
  useArrowButton={false}
  closedButtonText="Show Content"
  openButtonText="Hide Content"
  buttonAlignment="left"
/>
```

## Props

The HiddenContentBlock component supports the following props to customize its appearance and behavior:

1. `id` (string, required): Sets the `id` attribute of the hidden content container.

2. `hiddenContent` (JSX element, required): The JSX element containing the hidden content that will be shown or hidden.

3. `buttonStyle` (object, optional): Custom styles for the button element.

4. `contentStyle` (object, optional): Custom styles for the hidden content container.

5. `useArrowButton` (boolean, optional): Controls whether to use an arrow (▲/▼) instead of a button for toggling the hidden content.

6. `closedButtonText` (string, optional): Text to display on the button when the content is closed. Default: "Show Content".

7. `openButtonText` (string, optional): Text to display on the button when the content is open. Default: "Hide Content".

8. `buttonAlignment` (string, optional): Sets the alignment of the button (or arrow) within the block. Possible values: "left", "center", "right". Default: "left".

## Example

```jsx
import React from 'react';
import HiddenContentBlock from './HiddenContentBlock';

const App = () => {
  const customButtonStyle = {
    backgroundColor: '#ff4500',
    borderRadius: '8px',
  };

  const customContentStyle = {
    backgroundColor: '#f0f0f0',
    padding: '10px',
  };

  return (
    <div>
      <h1>Example HiddenContentBlock Usage</h1>
      <HiddenContentBlock
        id="block1"
        hiddenContent={
          <div>
            <p>Hidden content for block 1</p>
            <img src="example.jpg" alt="Example" />
          </div>
        }
        buttonStyle={customButtonStyle}
        contentStyle={customContentStyle}
        useArrowButton={false}
        closedButtonText="Show More"
        openButtonText="Show Less"
        buttonAlignment="center"
      />
    </div>
  );
};

export default App;
```

You can use the HiddenContentBlock component's props to customize the appearance and behavior of the block and hidden content according to your needs.