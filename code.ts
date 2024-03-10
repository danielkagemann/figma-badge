/**
 * badge. a simple figma plugin to create a circled frame and text
 * node inside of it. 
 * 
 * @author daniel kagemann
 */
const SIZE = 48;

(async () => {
  const nodes: SceneNode[] = [];

  // create frame
  const frame = figma.createFrame()
  frame.x = 50
  frame.y = 50
  frame.resize(SIZE, SIZE)
  frame.cornerRadius = SIZE
  frame.name = "Bade"
  frame.fills = [{
    type: 'SOLID',
    color: {
      r: 0,
      g: 0,
      b: 0
    }
  }]


  // create text
  const text = figma.createText()

  await figma.loadFontAsync({ family: "Inter", style: "Regular" })
  
  text.x = 0
  text.y = 0
  text.name = "BadeText"
  text.resize(SIZE, SIZE)
  text.textAlignHorizontal = "CENTER"
  text.textAlignVertical = "CENTER"
  text.constraints = {horizontal: "STRETCH", vertical: "STRETCH"}

  text.characters = Math.ceil((Math.random() * 20)).toString()
  text.fontSize = 13
  text.fills = [{
    type: 'SOLID',
    color: {
      r: 1,
      g: 1,
      b: 1
    }
  }]

  // add to frame
  frame.appendChild(text)
  console.log('appended');
  
  // add to scene
  figma.currentPage.appendChild(frame);
  nodes.push(frame);

  // now select and bring into focus
  figma.currentPage.selection = nodes;
  figma.viewport.scrollAndZoomIntoView(nodes);

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
})()