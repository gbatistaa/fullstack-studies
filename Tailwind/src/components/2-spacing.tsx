function Spacing(): JSX.Element {
  return (
    <>
      {/* this is the tailwind css classes for padding and margin */}
      <div className="p-4 m-4" >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Ad ullam possimus quod hic illum, molestiae placeat, est,
        doloremque quae laudantium amet praesentium modi.Suscipit debitis quidem perspiciatis,
        ducimus cupiditate facilis ?
      </div >

      <div className="m-4 space-y-1 border-black border-solid border-2">
        <div className="bg-blue-500 text-center">1</div>
        <div className="bg-red-500 text-center">2</div>
        <div className="bg-green-400 text-center">3</div>
      </div>
    </>
  )
}

export default Spacing;
