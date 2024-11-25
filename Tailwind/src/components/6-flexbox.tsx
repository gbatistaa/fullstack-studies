function Flexbox(): JSX.Element {
  return (
    <div className="h-full w-full space-y-4">
      <div className="w-full flex justify-center items-center space-x-6 bg-yellow-400 h-36">
        <div className="p-4 h-24 w-24 text-sm text-nowrap flex justify-center items-center text-white bg-gradient-to-r from-red-600 via via-pink-600 to to-blue-500">
          Hello World!
        </div>
        <div className="p-4 h-24 w-24 text-sm text-nowrap flex justify-center items-center text-white bg-gradient-to-r from-red-600 via via-pink-600 to to-blue-500">
          Hello World!
        </div>
        <div className="p-4 h-24 w-24 text-sm text-nowrap flex justify-center items-center text-white bg-gradient-to-r from-red-600 via via-pink-600 to to-blue-500">
          Hello World!
        </div>
      </div>

      <div className="w-full flex justify-center items-center space-x-6 bg-yellow-400 h-36">
        <div className="p-4 h-24 w-24 text-sm text-nowrap flex justify-center items-center text-white bg-gradient-to-r from-red-600 via via-pink-600 to to-blue-500">
          Hello World!
        </div>
        <div className="p-4 flex-grow flex-shrink-0 h-24 w-24 text-sm text-nowrap flex justify-center items-center text-white bg-gradient-to-r from-red-600 via via-pink-600 to to-blue-500">
          Hello World!
        </div>
        <div className="p-4 h-24 w-24 text-sm text-nowrap flex justify-center items-center text-white bg-gradient-to-r from-red-600 via via-pink-600 to to-blue-500">
          Hello World!
        </div>
      </div>
    </div>
  )
}

export default Flexbox;
