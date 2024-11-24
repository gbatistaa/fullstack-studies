function Borders(): JSX.Element {
  return (
    <>
      <div className="p-4 border-l-2 border-blue-500" >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.Laudantium ex doloremque quasi, laboriosam odit nesciunt.Cupiditate consequatur recusandae accusantium amet illo illum suscipit porro natus maxime exercitationem ? Sit, officia voluptatibus ?
      </div >
      <div className="p-4 border-2 border-green-500 rounded-xl border-opacity-50" >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.Laudantium ex doloremque quasi, laboriosam odit nesciunt.Cupiditate consequatur recusandae accusantium amet illo illum suscipit porro natus maxime exercitationem ? Sit, officia voluptatibus ?
        <br />
        <button type="button" className="bg-blue-400 h-12 w-16 rounded text-white hover:ring-2 ring-green-400">Button</button>
      </div >
    </>
  )
}

export default Borders;
