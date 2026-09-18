const Toast = ({ message }: { message: string }) => {
  return (
    <div className="fixed bottom-6 right-6 bg-white border border-gray-200 shadow-md rounded-lg px-5 py-4 flex items-center gap-2 z-50">
      <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
      <p className="text-sm text-gray-700">{message}</p>
    </div>
  )
}

export default Toast