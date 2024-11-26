function Grid(): JSX.Element {
  return (
    <div className="p-10 box-border h-fit grid grid-cols-3 gap-5 bg-blue-400">
      <div className="h-auto col-span-3 p-4 text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 flex justify-center items-center">1</div>
      <div className="h-auto p-4 text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 flex justify-center items-center">2</div>
      <div className="h-auto p-4 text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 flex justify-center items-center">3</div>
      <div className="h-auto p-4 text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 flex justify-center items-center">4</div>
      <div className="h-auto p-4 text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 flex justify-center items-center">5</div>
      <div className="h-auto col-span-2 p-4 text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 flex justify-center items-center">6</div>
    </div>
  )
}

export default Grid;
