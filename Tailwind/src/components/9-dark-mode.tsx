function DarkMode(): JSX.Element {
  return (
    <div className="h-fit w-fit flex justify-center items-center">
      <h1 className="w-fit text-black bg-base-100 dark:bg-black dark:text-base-100 hover:text-red-500">
        Hello TailwindCSS
      </h1>
      <div className="group w-80 h-80 bg-teal-800 hover:bg-teal-600">
        <h3 className="group-hover:bg-base-400 bg-blue-400 text-white">
          Text hover
        </h3>
      </div>
    </div>
  )
}

export default DarkMode;
