export function Loader() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-purple-500 animate-spin"></div>
        <div
          className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-4 border-b-4 border-purple-200 animate-spin opacity-30"
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        ></div>
      </div>
    </div>
  )
}

